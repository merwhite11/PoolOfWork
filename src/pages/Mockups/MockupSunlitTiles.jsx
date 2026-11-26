import React from "react";

const MockupSubmergedRoman = () => (
  <div className="overflow-hidden rounded-3xl border border-lapis/15 bg-[#F8F5EE] shadow-xl">
    <div className="relative h-[540px] w-full overflow-hidden bg-[#102646] sm:h-[620px]">
      <img
        src="/moodboard/underwater-hero.jpg"
        alt="Underwater pool floor"
        className="absolute inset-0 h-full w-full object-cover object-[50%_28%] brightness-[0.95] contrast-[1.12] saturate-[0.2]"
      />
      <img
        src="/moodboard/roman-pool.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-55 mix-blend-hard-light saturate-[1.15]"
      />
      <img
        src="/moodboard/clouds.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-40 mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E2447]/45 via-[#18447A]/20 to-[#0B1C38]/75"
      />
      <div
        aria-hidden="true"
        className="paper-grain pointer-events-none absolute inset-0 opacity-80"
      />

      <div className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10">
        <span
          className="text-lg font-bold tracking-tight text-[#FFF9F0] drop-shadow"
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          Meredith White
        </span>
        <nav className="flex gap-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFF9F0]/90">
          <span>Writing</span>
          <span>Dance</span>
          <span>About</span>
        </nav>
      </div>

      <div className="relative z-10 flex h-[calc(100%-64px)] flex-col items-center justify-between px-6 pt-10 pb-10 text-center">
        <h2
          className="text-6xl font-extrabold leading-[0.9] tracking-[-0.03em] text-[#FFF8EE] drop-shadow-[0_10px_28px_rgba(8,22,48,0.65)] sm:text-8xl"
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          Pool{" "}
          <span
            className="font-normal italic text-[#F4C27A]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            of
          </span>{" "}
          Work
        </h2>

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#F4C27A]/70" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#FFF8EE]/80">
            ↓
          </span>
          <span className="h-px w-8 bg-[#F4C27A]/70" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 bg-[#F8F5EE] p-6 sm:grid-cols-2 sm:p-8">
      <div className="flex items-center gap-4 rounded-2xl border border-[#122E57]/12 bg-white p-4 shadow-sm">
        <img
          src="/BookCovers/GVDCoverResized.jpg"
          alt="The Grapevine Diaries"
          className="h-24 w-16 rounded object-cover shadow"
        />
        <div>
          <h3
            className="text-xl font-bold text-[#10284A]"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            The Grapevine Diaries
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-[#4B6180]">
            The untold story of wine — anecdotes, journal entries, poems and
            mini-essays.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-[#102646] p-5 text-[#FFF8EE]">
        <img
          src="/moodboard/underwater-about.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-luminosity"
        />
        <div className="relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F4C27A]">
            About
          </span>
          <p className="mt-2 font-editorial text-sm leading-relaxed text-[#FFF8EE]/95">
            Hydrophilic, linguophile living in the 415 · Writes, if not code,
            then probably prose.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MockupSubmergedRoman;
