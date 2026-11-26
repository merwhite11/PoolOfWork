import React from "react";

const MockupDuotoneZine = () => (
  <div className="overflow-hidden rounded-3xl border border-lapis/15 bg-[#F7F4EC] shadow-xl">
    <div className="relative h-[540px] w-full overflow-hidden bg-[#173A5E] sm:h-[620px]">
      <img
        src="/moodboard/underwater-hero.jpg"
        alt="Underwater pool floor"
        className="absolute inset-0 h-full w-full object-cover object-[50%_26%] contrast-[1.08] brightness-[1.02]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#237BA3]/65 via-[#4E89AE]/40 to-[#243B6B]/75 mix-blend-color"
      />
      <img
        src="/moodboard/roman-pool.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full object-cover object-bottom opacity-30 mix-blend-soft-light"
      />
      <img
        src="/moodboard/clouds.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 w-full object-cover object-top opacity-35 mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-2xl border border-[#FFF9EE]/35 sm:inset-6"
      />
      <div
        aria-hidden="true"
        className="paper-grain pointer-events-none absolute inset-0 opacity-75"
      />

      <div className="relative z-10 flex items-center justify-between px-8 pt-8 sm:px-12 sm:pt-10">
        <span
          className="text-xl font-medium italic text-[#FFF9EE] drop-shadow"
          style={{ fontFamily: '"Fraunces", serif' }}
        >
          Meredith White
        </span>
        <nav className="flex gap-6 text-xs font-medium uppercase tracking-[0.2em] text-[#FFF9EE]/90">
          <span>Writing</span>
          <span>Dance</span>
          <span>About</span>
        </nav>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pt-8 text-center sm:pt-10">
        <h2
          className="text-6xl font-bold leading-[0.9] tracking-[-0.025em] text-[#FFF9EE] drop-shadow-[0_8px_30px_rgba(12,35,66,0.45)] sm:text-8xl"
          style={{ fontFamily: '"Fraunces", serif' }}
        >
          Pool{" "}
          <span className="font-normal italic text-[#F8D8C2]">of</span> Work
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 bg-[#F7F4EC] p-6 sm:grid-cols-2 sm:p-8">
      <div className="flex items-center gap-4 rounded-2xl border border-[#243B6B]/12 bg-[#FFFDF8] p-4">
        <img
          src="/BookCovers/BobbyCoverResized.jpg"
          alt="Bobby and Shiloh"
          className="h-24 w-16 rounded object-cover shadow"
        />
        <div>
          <h3
            className="text-xl font-semibold text-[#1B355C]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Bobby &amp; Shiloh Save The Night
          </h3>
          <p className="mt-1 text-xs text-[#4E6482]">
            Closest to your original landing page — richly graded, framed, and
            paired with warmer retro-modern type.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#243B6B]/12 bg-[#1A3F66] p-5 text-[#FFF9EE]">
        <img
          src="/moodboard/underwater-about.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="relative z-10">
          <span
            className="text-xl italic text-[#F8D8C2]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            About
          </span>
          <p className="mt-2 text-xs leading-relaxed text-[#FFF9EE]/90">
            Matches your original underwater About photo with the same aqua +
            peach split-tone grade.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MockupDuotoneZine;
