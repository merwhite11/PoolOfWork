import React from "react";
import { Link } from "react-router-dom";
import MockupSunlitTiles from "./MockupSunlitTiles.jsx";
import MockupRomanMosaic from "./MockupRomanMosaic.jsx";
import MockupPoolsideScrapbook from "./MockupPoolsideScrapbook.jsx";

const concepts = [
  {
    id: "A",
    name: "Option A — Sunlit Pool Floor",
    summary:
      "Full-bleed sunlit ceramic pool-bottom tiles with animated water caustics, retro gold/cobalt edge trim, and bold playful modern display type (Bricolage Grotesque) paired with clean warm cream cards below.",
    Component: MockupSunlitTiles,
  },
  {
    id: "B",
    name: "Option B — Roman Mosaic & Warm Lanterns",
    summary:
      "Deep cobalt Roman pool tiles with glowing amber-lamp & peach-cloud reflections, gold mosaic border, and crisp modern geometric type (Syne) contrasting against warm cream & blush paper below.",
    Component: MockupRomanMosaic,
  },
  {
    id: "C",
    name: "Option C — Poolside Scrapbook",
    summary:
      "Dreamy peach-and-periwinkle riso cloud sky framing a taped-in turquoise ceramic pool basin (like a Polaroid of a pool) with bouncy, whimsical retro-modern type (Fraunces Soft).",
    Component: MockupPoolsideScrapbook,
  },
];

const Mockups = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E9] px-4 py-10 text-lapis sm:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-lapis/12 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
              Phase 2 Visual Directions
            </p>
            <h1 className="mt-1 font-display text-4xl text-lapis sm:text-5xl">
              Pick a Vibe (or Mix &amp; Match)
            </h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-lapis/20 bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-lapis no-underline hover:border-amber"
          >
            ← Current Site
          </Link>
        </div>

        <div className="flex flex-col gap-14">
          {concepts.map(({ id, name, summary, Component }) => (
            <section key={id} className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-bold text-lapis">{name}</h2>
                <p className="mt-1 max-w-3xl text-sm leading-relaxed text-lapis-muted">
                  {summary}
                </p>
              </div>
              <Component />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mockups;
