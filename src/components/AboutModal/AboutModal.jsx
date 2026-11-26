import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const AboutModal = ({ aboutModalOpen, toggleAboutModal, title, summary }) => {
  useEffect(() => {
    if (!aboutModalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") toggleAboutModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [aboutModalOpen, toggleAboutModal]);

  if (!aboutModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-lapis-deep/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-book-modal-title"
      onClick={toggleAboutModal}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-amber/30 bg-paper-card p-6 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-lapis/10 pb-4">
          <h5
            id="about-book-modal-title"
            className="font-display text-2xl font-medium leading-snug text-lapis"
          >
            {title}
          </h5>
          <button
            type="button"
            onClick={toggleAboutModal}
            aria-label="Close"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lapis/15 text-lapis-muted transition-colors hover:border-amber/60 hover:text-lapis"
          >
            <RxCross2 size={16} />
          </button>
        </div>
        <p className="mt-4 font-editorial text-base leading-relaxed text-lapis-muted">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default AboutModal;

