import React from "react";

/**
 * Concept B — "Roman Mosaic & Peach Clouds"
 * Deep cobalt/lapis ceramic Roman pool tiles with glowing amber reflections +
 * chunky modern geometric type (Syne) + crisp warm cream paper below.
 */
const MockupRomanMosaic = () => (
  <div className="overflow-hidden rounded-3xl border border-lapis/15 bg-[#FAF4EA] shadow-xl">
    {/* Hero */}
    <div className="pool-tiles-roman relative overflow-hidden px-6 pt-6 pb-16 text-[#FAF4EA] sm:px-10 sm:pb-24">
      {/* Water surface caustics + warm amber lantern reflections on cobalt tiles */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 420"
        preserveAspectRatio="none"
        className="animate-caustics pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="lamp-1" cx="18%" cy="76%" r="34%">
            <stop offset="0%" stopColor="#F5BA5C" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#E69A3A" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#12366B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lamp-2" cx="84%" cy="24%" r="42%">
            <stop offset="0%" stopColor="#F8D8C8" stopOpacity="0.45" />
            <stop offset="48%" stopColor="#77A7E6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#12366B" stopOpacity="0" />
          </radialGradient>
          <filter id="ripple-b">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.032"
              numOctaves="2"
              seed="14"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.65
                      0 0 0 0 0.85
                      0 0 0 0 1
                      0 0 0 0.45 -0.14"
            />
          </filter>
        </defs>
        <rect width="800" height="420" fill="url(#lamp-1)" />
        <rect width="800" height="420" fill="url(#lamp-2)" />
        <rect width="800" height="420" filter="url(#ripple-b)" opacity="0.55" />
      </svg>

      {/* Gold Roman mosaic border along bottom edge of pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-[repeating-linear-gradient(90deg,#E5AE54_0_10px,#12366B_10px_14px,#E5AE54_14px_18px,#1C4D91_18px_28px)]"
      />

      {/* Minimal Nav */}
      <div className="relative z-10 flex items-center justify-between">
        <span
          className="text-base font-bold tracking-wide text-[#FAF4EA]"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          Meredith White
        </span>
        <div className="flex gap-6 text-xs font-medium uppercase tracking-[0.18em] text-[#F6DEC9]/90">
          <span>Writing</span>
          <span>Dance</span>
          <span>About</span>
        </div>
      </div>

      {/* Playful modern geometric title floating on deep tiled water */}
      <div className="relative z-10 mx-auto mt-14 mb-6 flex max-w-2xl flex-col items-center text-center sm:mt-20">
        <h2
          className="text-5xl font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-[#FFF8EE] drop-shadow-[0_6px_22px_rgba(6,19,44,0.65)] sm:text-7xl"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          Pool of Work
        </h2>
        {/* Shimmering amber water-line reflection */}
        <div className="mt-4 flex items-center gap-2">
          <span className="h-1 w-14 rounded-full bg-gradient-to-r from-transparent via-[#F3BC63] to-transparent opacity-90" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#F7CFA2]" />
          <span className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#7DB7F2] to-transparent opacity-80" />
        </div>
      </div>
    </div>

    {/* Mini Writing + Dance peek — warm risograph peach/cream relief */}
    <div className="grid grid-cols-1 gap-6 bg-[#FAF4EA] p-6 sm:grid-cols-2 sm:p-8">
      <div className="flex items-center gap-4 rounded-2xl border-2 border-[#12366B]/15 bg-[#FFFDF9] p-4 shadow-sm">
        <img
          src="/BookCovers/CuentoCover.jpg"
          alt="Cuento"
          className="h-24 w-16 rounded object-cover shadow"
        />
        <div>
          <h3
            className="text-lg font-bold text-[#12366B]"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            Story Twice Told
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4C5C78]">
            A memory-inspired short story written in English and Spanish.
          </p>
          <span className="mt-2 inline-block rounded-full bg-[#E5AE54] px-3.5 py-1 text-[11px] font-bold text-[#12264A]">
            Read →
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border-2 border-[#12366B]/15 bg-[#F4E1D5] p-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#12366B]">
            Dance
          </span>
          <h3
            className="mt-1 text-xl font-bold text-[#12366B]"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            Her Majesty
          </h3>
          <p className="mt-1 text-xs text-[#4C5C78]">
            Deep cobalt pool hero, warm peach & buttercream below.
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#12366B] text-sm font-bold text-[#F5BA5C] shadow-md">
          ▶
        </div>
      </div>
    </div>
  </div>
);

export default MockupRomanMosaic;
