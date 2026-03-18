import NaMidiaTabs from "@/components/NaMidiaTabs";

async function getYoutubeMedia() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/youtube`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return { videos: [], shorts: [], live: [] };
    }

    return response.json();
  } catch {
    return { videos: [], shorts: [], live: [] };
  }
}

export default async function Page() {
  const { videos, shorts, live } = await getYoutubeMedia();

  return (
    <div className="container page">
      <section className="naMidiaHero">
        <span className="naMidiaBadge">YouTube</span>
        <h1 className="naMidiaTitle">Na Mídia</h1>
        <p className="naMidiaDescription">
          Acompanhe os conteúdos mais recentes do canal Aprendizagem e Companhia.
        </p>
      </section>

      <NaMidiaTabs videos={videos} shorts={shorts} live={live} />
    </div>
  );
}