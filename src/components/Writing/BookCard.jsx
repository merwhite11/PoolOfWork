import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import AboutModal from "../AboutModal/AboutModal.jsx";

function BookCard({ cover, summary, path, title, index = 0 }) {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const toggleAboutModal = () => {
    setAboutModalOpen((prev) => !prev);
  };

  const catalogNumber = String(index + 1).padStart(2, "0");
  const tiltClass =
    index % 2 === 0
      ? "group-hover:-rotate-1"
      : "group-hover:rotate-1";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-lapis/10 bg-paper-card p-6 shadow-[0_6px_30px_rgba(27,50,86,0.05)] transition-all duration-500 hover:border-amber/40 hover:shadow-[0_14px_40px_rgba(27,50,86,0.09)] sm:p-8 md:p-10">
      {/* Subtle corner index stamp */}
      <div className="mb-6 flex items-center justify-between border-b border-lapis/8 pb-3 md:hidden">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-lapis-muted">
          No. {catalogNumber}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-amber/70" />
      </div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[210px_1fr] md:gap-12">
        {/* Tipped-in scrapbook bookplate cover */}
        <Link
          to={`/reader/${path}`}
          className="relative mx-auto block w-44 sm:w-48 md:mx-0 md:w-full"
        >
          {/* Decorative washi-tape accent */}
          <span
            aria-hidden="true"
            className="washi-tape pointer-events-none absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-2 rounded-[2px]"
          />
          <div
            className={`relative overflow-hidden rounded-lg border border-lapis/12 bg-paper-warm p-2 shadow-[0_10px_26px_rgba(27,50,86,0.12)] transition-transform duration-500 ${tiltClass}`}
          >
            <img
              src={cover}
              alt={`Cover for ${title}`}
              loading="eager"
              className="aspect-[2/3] w-full rounded object-cover"
            />
          </div>
        </Link>

        {/* Editorial metadata & synopsis */}
        <div className="flex flex-col justify-between text-center md:text-left">
          <div>
            <div className="mb-3 hidden items-center gap-3 md:flex">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber">
                Edition {catalogNumber}
              </span>
              <span className="h-px w-8 bg-lapis/15" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-lapis-muted">
                Digital Book
              </span>
            </div>

            <Link to={`/reader/${path}`} className="no-underline">
              <h3 className="font-display text-3xl font-medium leading-tight tracking-tight text-lapis transition-colors duration-300 group-hover:text-amber sm:text-4xl">
                {title}
              </h3>
            </Link>

            {isLargeScreen && (
              <p className="mt-4 max-w-2xl font-editorial text-base leading-[1.8] text-lapis-muted sm:text-[1.06rem]">
                {summary}
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
            <Link
              to={`/reader/${path}`}
              className="inline-flex items-center gap-2 rounded-full bg-lapis px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-paper no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-lapis-deep"
            >
              <span>Read</span>
              <span aria-hidden="true">→</span>
            </Link>

            {!isLargeScreen && (
              <>
                <button
                  type="button"
                  onClick={toggleAboutModal}
                  className="inline-flex items-center rounded-full border border-lapis/20 bg-paper px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-lapis transition-colors hover:border-amber/60 hover:bg-paper-warm"
                >
                  About
                </button>
                <AboutModal
                  aboutModalOpen={aboutModalOpen}
                  toggleAboutModal={toggleAboutModal}
                  title={title}
                  summary={summary}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default BookCard;

