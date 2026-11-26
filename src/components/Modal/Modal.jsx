import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Selections from "../Selections/Selections.jsx";

const Modal = ({
  modalOpen,
  toggleModal,
  largeText,
  setLargeText,
  rend,
  selections,
  setSelections,
  title,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-lapis-deep/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={toggleModal}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-amber/30 bg-paper-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-lapis/10 pb-3">
          <h5 className="font-display text-2xl font-medium text-lapis">
            Reader Preferences
          </h5>
          <button
            type="button"
            onClick={toggleModal}
            aria-label="Close"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-lapis/15 text-lapis-muted hover:border-amber/60 hover:text-lapis"
          >
            <RxCross2 size={16} />
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setLargeText(!largeText)}
            className="inline-flex w-fit items-center rounded-full border border-lapis/20 bg-paper px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-lapis transition-colors hover:border-amber/60 hover:bg-paper-warm"
          >
            {largeText ? "Smaller font" : "Bigger font"}
          </button>

          {isLargeScreen && (
            <Selections
              rend={rend}
              selections={selections}
              setSelections={setSelections}
              title={title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

