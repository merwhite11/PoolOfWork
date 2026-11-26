import React from "react";
import BookList from "./BookList.jsx";

const Writing = () => {
  return (
    <section
      id="writing-section"
      className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      {/* Editorial Section Header */}
      <div className="mb-14 flex flex-col justify-between gap-4 border-b border-lapis/12 pb-6 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-amber">
            <span>Section I</span>
            <span className="text-lapis/25">/</span>
            <span className="text-lapis-muted">The Reading Room</span>
          </p>
          <h2 className="font-display text-5xl font-normal tracking-tight text-lapis sm:text-6xl">
            Writing
          </h2>
        </div>
        <p className="max-w-sm font-editorial text-base italic leading-relaxed text-lapis-muted md:text-right">
          Essays, bilingual stories, and dispatches — set in a calm digital
          reader for lingering.
        </p>
      </div>

      {/* Editorial Bookshelf / Catalog */}
      <div className="grid grid-cols-1 gap-8 md:gap-10">
        <BookList />
      </div>
    </section>
  );
};

export default Writing;

