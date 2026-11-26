import React from "react";

const MockupRisoCollage = () => (
  <div className="overflow-hidden rounded-3xl border border-lapis/15 bg-[#F4F2EC] shadow-xl">
    <div className="relative min-h-[560px] w-full overflow-hidden bg-[#E9EEF3] px-6 pt-6 pb-12 sm:min-h-[640px] sm:px-10">
      <img
        src="/moodboard/clouds.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-80"
      />
      <div
        aria-hidden="true"
        className="paper-grain pointer-events-none absolute inset-0 opacity-90"
      />

      <div className="relative z-20 flex items-center justify-between">
        <span
          className="text-base font-bold uppercase tracking-[0.06em] text-[#172B4D]"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          Meredith White
        </span>
        <nav className="flex gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#172B4D]/80">
          <span>Writing</span>
          <span>Dance</span>
          <span>About</span>
        </nav>
      </div>

      <div className="relative z-10 mx-auto mt-8 grid max-w-4xl grid-cols-1 items-center gap-6 md:mt-10 md:grid-cols-12">
        <div className="relative hidden md:col-span-3 md:block">
          <div className="overflow-hidden rounded-2xl border-4 border-[#FAF7F0] bg-[#133262] shadow-lg -rotate-2">
            <img
              src="/moodboard/roman-pool.jpg"
              alt="Roman pool tiles"
              className="h-64 w-full object-cover object-left"
            />
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border-2 border-[#FAF7F0] shadow-md rotate-2">
            <img
              src="/moodboard/mood-4.jpg"
              alt="Mood texture"
              className="h-24 w-full object-cover"
            />
          </div>
        </div>

        <div className="relative md:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#FAF7F0] bg-[#12305C] shadow-[0_24px_60px_rgba(18,48,92,0.28)]">
            <img
              src="/moodboard/underwater-hero.jpg"
              alt="Pool of Work underwater"
              className="aspect-[4/5] w-full object-cover object-[48%_25%] contrast-[1.08] sm:aspect-[4/4]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#13386E]/75 via-[#2C7CA8]/30 to-[#F3C8AE]/35 mix-blend-color"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D2140]/65 via-transparent to-[#0D2140]/20"
            />

            <div className="absolute inset-x-0 top-6 px-4 text-center sm:top-8">
              <h2
                className="text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-[#FFFBF4] drop-shadow-[0_4px_18px_rgba(11,28,58,0.55)] sm:text-5xl"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                Pool of Work
              </h2>
            </div>
          </div>
        </div>

        <div className="relative hidden md:col-span-3 md:block">
          <div className="overflow-hidden rounded-2xl border-4 border-[#FAF7F0] shadow-lg rotate-2">
            <img
              src="/moodboard/mood-3.jpg"
              alt="Mood accent"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 bg-[#FAF7F0] p-6 sm:grid-cols-2 sm:p-8">
      <div className="flex items-center gap-4 rounded-2xl border border-[#172B4D]/12 bg-white p-4">
        <img
          src="/BookCovers/CuentoCover.jpg"
          alt="Cuento"
          className="h-24 w-16 rounded object-cover shadow"
        />
        <div>
          <h3
            className="text-lg font-bold text-[#172B4D]"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            Story Twice Told
          </h3>
          <p className="mt-1 text-xs text-[#4C5E7A]">
            Scrapbook photo collage hero → calm uncluttered book &amp; video
            grid below.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-[#172B4D]/12 bg-[#EAF1F8] p-4">
        <div>
          <h3
            className="text-lg font-bold text-[#172B4D]"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            Dance
          </h3>
          <p className="mt-1 text-xs text-[#4C5E7A]">
            Periwinkle, cobalt, warm cream, subtle riso grain.
          </p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#172B4D] text-xs text-[#F5C170]">
          ▶
        </div>
      </div>
    </div>
  </div>
);

export default MockupRisoCollage;
