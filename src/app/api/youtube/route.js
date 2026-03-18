const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

async function fetchJson(url) {
    const response = await fetch(url, {
        next: { revalidate: 1800 },
    });

    if (!response.ok) {
        throw new Error(`Erro YouTube: ${response.status}`);
    }

    return response.json();
}

async function getUploadsPlaylistId() {
    const url =
        `https://www.googleapis.com/youtube/v3/channels` +
        `?part=contentDetails` +
        `&id=${CHANNEL_ID}` +
        `&key=${API_KEY}`;

    const data = await fetchJson(url);
    return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? null;
}

async function getRecentVideos() {
    const uploadsPlaylistId = await getUploadsPlaylistId();
    if (!uploadsPlaylistId) return [];

    const url =
        `https://www.googleapis.com/youtube/v3/playlistItems` +
        `?part=snippet,contentDetails` +
        `&playlistId=${uploadsPlaylistId}` +
        `&maxResults=18` +
        `&key=${API_KEY}`;

    const data = await fetchJson(url);

    return (data.items || []).map((item) => ({
        id: item.contentDetails?.videoId,
        titulo: item.snippet?.title,
        publicadoEm: item.contentDetails?.videoPublishedAt || item.snippet?.publishedAt,
        thumb:
            item.snippet?.thumbnails?.high?.url ||
            item.snippet?.thumbnails?.medium?.url ||
            item.snippet?.thumbnails?.default?.url,
        link: `https://www.youtube.com/watch?v=${item.contentDetails?.videoId}`,
    }));
}

async function getLiveVideos() {
    const url =
        `https://www.googleapis.com/youtube/v3/search` +
        `?part=snippet` +
        `&channelId=${CHANNEL_ID}` +
        `&type=video` +
        `&eventType=live` +
        `&maxResults=12` +
        `&key=${API_KEY}`;

    const data = await fetchJson(url);

    return (data.items || []).map((item) => ({
        id: item.id?.videoId,
        titulo: item.snippet?.title,
        publicadoEm: item.snippet?.publishedAt,
        thumb:
            item.snippet?.thumbnails?.high?.url ||
            item.snippet?.thumbnails?.medium?.url ||
            item.snippet?.thumbnails?.default?.url,
        link: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
    }));
}

async function getVideoDetails(ids) {
    if (!ids.length) return [];

    const url =
        `https://www.googleapis.com/youtube/v3/videos` +
        `?part=contentDetails,snippet,liveStreamingDetails` +
        `&id=${ids.join(",")}` +
        `&key=${API_KEY}`;

    const data = await fetchJson(url);
    return data.items || [];
}

function parseIsoDurationToSeconds(iso = "") {
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const hours = Number(match?.[1] || 0);
    const minutes = Number(match?.[2] || 0);
    const seconds = Number(match?.[3] || 0);
    return hours * 3600 + minutes * 60 + seconds;
}

async function getShortsAndVideos() {
    const recent = await getRecentVideos();
    const ids = recent.map((v) => v.id).filter(Boolean);
    const details = await getVideoDetails(ids);

    const detailMap = new Map(
        details.map((item) => [
            item.id,
            {
                duration: item.contentDetails?.duration,
                liveBroadcastContent: item.snippet?.liveBroadcastContent,
            },
        ])
    );

    const shorts = [];
    const videos = [];

    for (const item of recent) {
        const detail = detailMap.get(item.id);
        if (!detail) continue;

        const seconds = parseIsoDurationToSeconds(detail.duration);
        const isLive = detail.liveBroadcastContent === "live" || detail.liveBroadcastContent === "upcoming";

        if (isLive) continue;

        if (seconds > 0 && seconds <= 180) {
            shorts.push(item);
        } else {
            videos.push(item);
        }
    }

    return { videos, shorts };
}

export async function GET() {
    try {
        const [{ videos, shorts }, live] = await Promise.all([
            getShortsAndVideos(),
            getLiveVideos(),
        ]);

        return Response.json({ videos, shorts, live });
    } catch {
        return Response.json(
            { videos: [], shorts: [], live: [] },
            { status: 200 }
        );
    }
}