import React from "react";

const MockupSunlitTiles = () => (
  <div className="overflow-hidden rounded-3xl border border-lapis/15 bg-[#FCF9F2] shadow-xl">
    <div className="pool-tiles-sunlit relative overflow-hidden px-6 pt-6 pb-16 sm:px-10 sm:pb-24">
      <svg
        aria-hidden="true"
        viewBox="0 0 800 420"
        preserveAspectRatio="none"
        className="animate-caustics pointer-events-none absolute inset-0 h-full w-full mix-blend-screen"
      >
        <defs>
          <filter id="caustic-a" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.015 0.028"
              numOctaves="2"
              seed="7"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.98 0 0 0 0 0.99 0 0 0 0 1 0 0 0 0.65 -0.18"
            />
          </filter>
          <radialGradient id="sun-a" cx="25%" cy="18%" r="65%">
            <stop offset="0%" stopColor="#FFF7E4" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#9EDDF2" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1E6B9B" stopOpacity="0.16" />
          </radialGradient>
        </defs>
        <rect width="800" height="420" fill="url(#sun-a)" />
        <rect width="800" height="420" filter="url(#caustic-a)" opacity="0.55" />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-2.5 bg-[repeating-linear-gradient(90deg,#1B4D89_0_14px,#E8B55B_14px_18px,#FCF9F2_18px_22px,#2B73B6_22px_36px)] opacity-90"
      />

      <div className="relative z-10 flex items-center justify-between pt-2">
        <span
          className="text-lg font-bold tracking-tight text-[#11345C]"
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          Meredith White
        </span>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#11345C]/80">
          <span>Writing</span>
          <span>Dance</span>
          <span>About</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 mb-6 flex max-w-2xl flex-col items-center text-center sm:mt-20">
        <div className="relative inline-block">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 left-2 select-none text-6xl font-extrabold tracking-tight text-[#145C8E]/25 blur-[1.5px] sm:text-8xl"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            pool of work
          </span>
          <h2
            className="relative text-6xl font-extrabold leading-[0.92] tracking-tight text-[#102F54] sm:text-8xl"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            pool{" "}
            <span
              className="font-normal italic text-[#D9823B]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              of
            </span>{" "}
            work
          </h2>
        </div>

        <div className="mt-7 inline-flex items-center gap-2 rounded-md border-2 border-[#11345C]/15 bg-[#FCF9F2]/90 px-3 py-1 font-mono text-[11px] font-medium tracking-[0.2em] text-[#11345C] shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-[#38A7C8]" />
          <span>4 FT · SF</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 bg-[#FCF9F2] p-6 sm:grid-cols-2 sm:p-8">
      <div className="flex items-center gap-4 rounded-2xl border border-[#11345C]/12 bg-white p-4 shadow-[4px_4px_0_#D8EEF7]">
        <img
          src="/BookCovers/GVDCoverResized.jpg"
          alt="The Grapevine Diaries"
          className="h-24 w-16 rounded object-cover shadow"
        />
        <div>
          <h3
            className="text-xl font-bold text-[#102F54]"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            The Grapevine Diaries
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#47607E]">
            The untold story of wine — anecdotes, poems and mini-essays from the
            vineyards.
          </p>
          <span className="mt-2 inline-block rounded-full bg-[#102F54] px-3.5 py-1 text-[11px] font-semibold text-[#FCF9F2]">
            Read →
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-[#11345C]/12 bg-[#EAF5FA] p-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1D6B99]">
            Dance
          </span>
          <h3
            className="mt-1 text-2xl font-bold text-[#102F54]"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            Malamente
          </h3>
          <p className="mt-1 text-xs text-[#47607E]">
            Warm paper cards, cerulean tile accents, sunlit shadows.
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8A349] text-sm font-bold text-[#102F54] shadow-md">
          ▶
        </div>
      </div>
    </div>
  </div>
);

export default MockupSunlitTiles;
