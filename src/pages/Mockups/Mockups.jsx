import React from "react";
import { Link } from "react-router-dom";
import MockupSubmergedRoman from "./MockupSunlitTiles.jsx";
import MockupRisoCollage from "./MockupRomanMosaic.jsx";
import MockupDuotoneZine from "./MockupPoolsideScrapbook.jsx";
import MockupTiledLetters from "./MockupTiledLetters.jsx";

const concepts = [
  {
    id: "4",
    name: "Option 4 — Tiled Letters, Lit Pool (MVP)",
    summary:
      "Scoped-down sketch: 'Pool of Work' filled with blue mosaic tile, half-submerged and rippling, lit from behind by arched windows of painted sky and two golden lamps. Built entirely with CSS blend modes and an SVG ripple filter — no photo editing.",
    Component: MockupTiledLetters,
  },
  {
    id: "1",
    name: "Option 1 — Submerged Roman Pool",
    summary:
      "Full-bleed photo composite blending your underwater pool photo with the Roman Pool mosaic & amber reflections + soft peach cloud light overhead. Bold modern type (Bricolage Grotesque + italic Fraunces 'of'), zero fluff copy.",
    Component: MockupSubmergedRoman,
  },
  {
    id: "2",
    name: "Option 2 — Mixed-Media Collage",
    summary:
      "Scrapbook-meets-editorial collage pairing your tinted underwater photo at center with slices of the Roman Pool, clouds, and your moodboard images, topped with modern geometric type (Syne).",
    Component: MockupRisoCollage,
  },
  {
    id: "3",
    name: "Option 3 — Cyan & Peach Underwater Zine (Closest to Original)",
    summary:
      "Keeps the clean, arresting single-photo simplicity of your original landing page, elevated with a luminous swimming-pool cyan/cobalt & peach cloud split-tone grade, delicate editorial frame, and buoyant retro-modern type (Fraunces).",
    Component: MockupDuotoneZine,
  },
];

const Mockups = () => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] px-4 py-10 text-lapis sm:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-lapis/12 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
              Photo + Graphic Mockups (Round 2)
            </p>
            <h1 className="mt-1 font-display text-4xl text-lapis sm:text-5xl">
              Pick a Direction (or Mix &amp; Match)
            </h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-lapis/20 bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-lapis no-underline hover:border-amber"
          >
            ← Current Site
          </Link>
        </div>

        <div className="flex flex-col gap-16">
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

