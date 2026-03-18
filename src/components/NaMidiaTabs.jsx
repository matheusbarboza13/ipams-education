"use client";

import { useState } from "react";

function formatarData(dataIso) {
    if (!dataIso) return "";

    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(dataIso));
}

function Grid({ itens, vazio, tipo }) {
    if (!itens?.length) {
        return (
            <div className="naMidiaEmpty">
                <p className="sectionText">{vazio}</p>
            </div>
        );
    }

    return (
        <div className="naMidiaGrid">
            {itens.map((video) => (
                <a
                    key={video.id}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="naMidiaCard"
                >
                    <div className="naMidiaThumbWrapper">
                        <img
                            src={video.thumb}
                            alt={video.titulo}
                            className="naMidiaThumb"
                        />
                        <div className="naMidiaOverlay">
                            <span className="naMidiaPlay">▶</span>
                        </div>
                    </div>

                    <div className="naMidiaCardContent">
                        <p className="naMidiaMeta">
                            {tipo === "shorts"
                                ? "Shorts"
                                : tipo === "live"
                                    ? "Ao vivo"
                                    : "YouTube"}
                        </p>

                        <h3 className="naMidiaCardTitle">{video.titulo}</h3>

                        <p className="naMidiaDate">{formatarData(video.publicadoEm)}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default function NaMidiaTabs({ videos = [], shorts = [], live = [] }) {
    const [aba, setAba] = useState("videos");

    return (
        <>
            <section className="naMidiaTabsWrapper">
                <div className="naMidiaTabs">
                    <button
                        type="button"
                        onClick={() => setAba("videos")}
                        className={`naMidiaTab ${aba === "videos" ? "naMidiaTabActive" : ""}`}
                    >
                        Vídeos
                    </button>

                    <button
                        type="button"
                        onClick={() => setAba("shorts")}
                        className={`naMidiaTab ${aba === "shorts" ? "naMidiaTabActive" : ""}`}
                    >
                        Shorts
                    </button>

                    <button
                        type="button"
                        onClick={() => setAba("live")}
                        className={`naMidiaTab ${aba === "live" ? "naMidiaTabActive" : ""}`}
                    >
                        Ao vivo
                    </button>
                </div>
            </section>

            <section className="naMidiaSection">
                {aba === "videos" && (
                    <Grid
                        itens={videos}
                        vazio="Nenhum vídeo encontrado no momento."
                        tipo="videos"
                    />
                )}

                {aba === "shorts" && (
                    <Grid
                        itens={shorts}
                        vazio="Nenhum short encontrado no momento."
                        tipo="shorts"
                    />
                )}

                {aba === "live" && (
                    <Grid
                        itens={live}
                        vazio="Nenhuma transmissão ao vivo ativa no momento."
                        tipo="live"
                    />
                )}
            </section>
        </>
    );
}