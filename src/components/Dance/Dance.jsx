import React, { useState, useCallback } from "react";
import { FaPlay } from "react-icons/fa";
import VideoLightbox from "./VideoLightbox.jsx";
import videos from "../../data/videos.json";

const Dance = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cdnUrl = import.meta.env.VITE_CDN_URL || "";

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + videos.length) % videos.length
    );
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % videos.length
    );
  }, []);

  return (
    <section
      id="dance-section"
      className="relative bg-paper-warm/70 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Editorial Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-4 border-b border-lapis/12 pb-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-amber">
              <span>Section II</span>
              <span className="text-lapis/25">/</span>
              <span className="text-lapis-muted">Movement Contact Sheet</span>
            </p>
            <h2 className="font-display text-5xl font-normal tracking-tight text-lapis sm:text-6xl">
              Dance
            </h2>
          </div>
          <p className="max-w-sm font-editorial text-base italic leading-relaxed text-lapis-muted md:text-right">
            Choreography sketches and movement studies — select any frame to
            open the screening room.
          </p>
        </div>

        {/* Tactile Scrapbook Contact-Sheet Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => {
            const posterUrl = cdnUrl
              ? `${cdnUrl}/${video.id}/thumbnails/${video.id}.jpg`
              : "";
            const frameNum = String(index + 1).padStart(2, "0");

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                data-testid={`gallery-video-${index}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-lapis/10 bg-paper-card p-3 text-left shadow-[0_4px_20px_rgba(27,50,86,0.05)] transition-all duration-400 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[0_14px_34px_rgba(27,50,86,0.11)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-lapis-deep/90">
                  {posterUrl && (
                    <img
                      src={posterUrl}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-lapis-deep/55 via-lapis-deep/10 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/40 bg-paper-card/90 text-lapis shadow-[0_8px_24px_rgba(18,35,62,0.35)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-glow group-hover:text-lapis-deep">
                      <FaPlay className="ml-0.5 text-xs" />
                    </span>
                  </span>

                  <span className="absolute top-2.5 left-2.5 rounded-full bg-lapis-deep/70 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.18em] text-paper/90 backdrop-blur-sm">
                    {frameNum}
                  </span>
                </div>

                <div className="flex items-baseline justify-between px-1.5 pt-3.5 pb-1">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-lapis transition-colors group-hover:text-amber">
                    {video.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-lapis-muted">
                    Watch →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <VideoLightbox
        videos={videos}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
};

export default Dance;


