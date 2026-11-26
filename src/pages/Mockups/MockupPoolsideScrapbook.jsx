import React from "react";

const MockupPoolsideScrapbook = () => (
  <div className="overflow-hidden rounded-3xl border border-lapis/15 bg-[#FDF8F0] shadow-xl">
    <div className="relative overflow-hidden bg-gradient-to-b from-[#DCEEFF] via-[#EAF4FD] to-[#FDF8F0] px-6 pt-6 pb-10 sm:px-10 sm:pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-6 h-52 w-80 rounded-full bg-gradient-to-tr from-[#B6C5EA]/65 via-[#F7DDD0]/85 to-white/90 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-10 h-44 w-72 rounded-full bg-gradient-to-bl from-[#F8D9C6]/80 via-[#FBE9D7]/70 to-[#C8DAF3]/60 blur-2xl"
      />

      <div className="relative z-10 flex items-center justify-between">
        <span
          className="text-xl font-semibold text-[#183863]"
          style={{ fontFamily: '"Fraunces", serif' }}
        >
          Meredith White
        </span>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#183863]/75">
          <span>Writing</span>
          <span>Dance</span>
          <span>About</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-2xl">
        <span
          aria-hidden="true"
          className="washi-tape pointer-events-none absolute -top-3 left-8 z-20 h-6 w-20 -rotate-6 rounded-[2px]"
        />
        <span
          aria-hidden="true"
          className="washi-tape pointer-events-none absolute -right-4 -bottom-3 z-20 h-6 w-20 -rotate-3 rounded-[2px]"
        />

        <div className="rounded-[2rem] border-4 border-[#FFFDF8] bg-[#FFFDF8] p-2.5 shadow-[0_18px_45px_rgba(24,56,99,0.14)]">
          <div className="pool-tiles-aqua relative overflow-hidden rounded-[1.4rem] px-6 py-14 text-center sm:py-20">
            <svg
              aria-hidden="true"
              viewBox="0 0 600 260"
              preserveAspectRatio="none"
              className="animate-caustics pointer-events-none absolute inset-0 h-full w-full mix-blend-overlay"
            >
              <defs>
                <filter id="water-c">
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.018 0.035"
                    numOctaves="2"
                    seed="3"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 -0.18"
                  />
                </filter>
              </defs>
              <rect width="600" height="260" filter="url(#water-c)" />
            </svg>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-[#164A84]/20"
            />

            <h2
              className="relative z-10 text-5xl font-bold leading-[0.95] tracking-tight text-[#12325C] drop-shadow-[0_2px_0_rgba(255,255,255,0.65)] sm:text-7xl"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Pool of{" "}
              <span className="italic text-[#FFFDF8] drop-shadow-[0_3px_10px_rgba(18,50,92,0.35)]">
                Work
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 bg-[#FDF8F0] p-6 sm:grid-cols-2 sm:p-8">
      <div className="relative flex items-center gap-4 rounded-2xl border border-[#183863]/12 bg-white p-4 shadow-sm">
        <span
          aria-hidden="true"
          className="washi-tape pointer-events-none absolute -top-2 left-6 h-4 w-12 -rotate-3 rounded-[1px]"
        />
        <img
          src="/BookCovers/BobbyCoverResized.jpg"
          alt="Bobby and Shiloh"
          className="h-24 w-16 rounded object-cover shadow"
        />
        <div>
          <h3
            className="text-xl font-semibold text-[#183863]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Bobby &amp; Shiloh
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#526785]">
            A short story inspired by bikes and the streets of San Francisco.
          </p>
          <span className="mt-2 inline-block rounded-full bg-[#53B5CE] px-3.5 py-1 text-[11px] font-semibold text-white">
            Read →
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-[#183863]/12 bg-[#EEF7FC] p-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2A7B9C]">
            Dance
          </span>
          <h3
            className="mt-1 text-2xl font-semibold italic text-[#183863]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            See Through
          </h3>
          <p className="mt-1 text-xs text-[#526785]">
            Cloud-pastel sky + taped-in tiled pool + buoyant squishy serif.
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2B866] text-sm font-bold text-[#183863] shadow-md">
          ▶
        </div>
      </div>
    </div>
  </div>
);

export default MockupPoolsideScrapbook;
