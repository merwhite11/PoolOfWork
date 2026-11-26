import React, { useEffect } from "react";
import { RxCross2, RxChevronLeft, RxChevronRight } from "react-icons/rx";
import VideoPlayer from "./VideoPlayer.jsx";

const VideoLightbox = ({
  videos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const activeVideo = activeIndex !== null ? videos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, onClose, onPrev, onNext]);

  if (!activeVideo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${activeVideo.title}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-lapis-deep/88 p-4 backdrop-blur-md sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-amber/25 bg-lapis-deep shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-paper/10 px-5 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-[0.22em] text-amber-glow">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(videos.length).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-normal text-paper sm:text-3xl">
              {activeVideo.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous video"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-amber-glow/60 hover:text-amber-glow"
            >
              <RxChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next video"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-amber-glow/60 hover:text-amber-glow"
            >
              <RxChevronRight size={18} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video player"
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-amber-glow/60 hover:text-amber-glow"
            >
              <RxCross2 size={18} />
            </button>
          </div>
        </div>

        <div className="bg-black">
          <VideoPlayer
            key={activeVideo.id}
            videoName={activeVideo.id}
            autoPlay
            dataTestId={`carousel-video-${activeIndex}`}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
