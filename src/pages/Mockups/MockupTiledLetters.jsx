import React, { useEffect, useState } from "react";
import blueTile from "../../assets/world-building/windows/blue-tile.png";
import greekKeyTile from "../../assets/world-building/windows/tile-detail-1.png";
import lamp from "../../assets/world-building/windows/lamp-1.png";
import archWindow from "../../assets/world-building/windows/arched-windows-2.png";
import paintedSky from "../../assets/world-building/windows/painted-sky-2.png";

/*
 * Option 4 — Tiled Letters, Lit Pool (MVP)
 *
 * The whole scene is built from stacked layers, back to front.
 * Nothing here needed photo editing; every "cut-out" comes from a CSS trick:
 *
 *   - mix-blend-mode: screen   -> black disappears   (used on the lamp photo)
 *   - mix-blend-mode: multiply -> white disappears   (used on the window photo)
 *   - background-clip: text    -> an image fills the letters (the blue tile)
 *   - an SVG filter            -> ripples the part of the title that is underwater
 *
 * IMPORTANT blend-mode gotcha: blending only "sees" layers in the same stacking
 * context. So the lamp and window images (and the wrappers around them) must not
 * have transform / opacity / filter / z-index on a *parent*, or the blend gets
 * trapped and the black/white backgrounds show up again.
 */

// Where the water surface sits, measured from the top of the scene.
// Change this one number to raise or lower the pool.
const WATER = 58; // percent

const TITLE = "Pool of Work";

// The title is drawn twice: once above water, once (rippled + tinted) below.
// Each copy is clipped so only its half shows. The waterline falls 0.66em
// down the 1em-tall line box (raise it to sink the letters deeper).
const SINK = 0.72; // em
const titleBox = {
  position: "absolute",
  left: 0,
  right: 0,
  top: `calc(${WATER}% - ${SINK}em)`,
  fontSize: "clamp(1.8rem, 8.6vw, 8rem)",
  lineHeight: 1,
  height: "1em",
};

const tileLetters = {
  fontFamily: '"Bricolage Grotesque", sans-serif',
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "-0.01em",
  textAlign: "center",
  whiteSpace: "nowrap",
  // Fill the letter shapes with the tile photo instead of a flat color.
  backgroundImage: `url(${blueTile})`,
  backgroundSize: "320px",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  // A thin gold edge, like grout around a mosaic inlay.
  WebkitTextStroke: "0.012em #E2B85C",
};

// Builds a gentle wave path for the water surface line.
const wavePath = (() => {
  let d = "M0 6";
  for (let x = 0; x < 1200; x += 60) d += ` Q ${x + 15} 1 ${x + 30} 6 T ${x + 60} 6`;
  return d;
})();

const Lamp = ({ x }) => (
  <>
    {/* Warm glow around the globe. Screen blending only ever brightens. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-72 w-72 rounded-full"
      style={{
        left: x,
        top: "13%",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(255,176,96,0.55) 0%, rgba(255,150,80,0.18) 40%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
    {/* The lamp photo sits on near-black, so `screen` makes the backdrop vanish. */}
    <img
      src={lamp}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute max-w-none"
      style={{
        left: x,
        bottom: `${100 - WATER - 2}%`, // base dips just under the water
        height: "52%",
        transform: "translateX(-50%)",
        mixBlendMode: "screen",
        // contrast() pushes the photo's dark grey background down to pure
        // black, which `screen` then makes fully invisible.
        filter: "contrast(1.3)",
        // The photo's background is *near* black, not pure black, so screen
        // still leaves a faint box. A mask fades everything but the lamp.
        maskImage:
          "linear-gradient(to right, transparent 36%, #000 43%, #000 57%, transparent 64%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 36%, #000 43%, #000 57%, transparent 64%)",
      }}
    />
  </>
);

// Lamp light reflected on the water: a blurred amber streak, rippled.
const Reflection = ({ x }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute w-16"
    style={{
      left: x,
      top: `${WATER}%`,
      height: "30%",
      transform: "translateX(-50%)",
      background: "linear-gradient(to bottom, rgba(255,170,90,0.7), transparent)",
      filter: "url(#pow-ripple) blur(5px)",
      mixBlendMode: "screen",
    }}
  />
);

const ArchWindow = ({ className = "", children }) => (
  // `relative` with no z-index does NOT create a stacking context,
  // so the multiply below can still blend with the wall behind it.
  <div className={`relative aspect-square h-full ${className}`}>
    {/* Painted sky, cut to the arch opening of the photo (measured off the image). */}
    <div
      className="absolute"
      style={{
        left: "20%",
        right: "20%",
        top: "8.5%",
        bottom: "8%",
        borderRadius: "999px 999px 0 0",
        backgroundImage: `url(${paintedSky})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    {/* Window photo on white: `multiply` makes white transparent, so the
        sky shows through the panes and the white surround disappears. */}
    <img
      src={archWindow}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ mixBlendMode: "multiply" }}
    />
    {children}
  </div>
);

const NavCutout = ({ label, shape, rotate }) => (
  <span
    className={`paper-grain flex items-center justify-center bg-[#F5EEDF] px-5 py-3 text-base italic text-[#14305C] shadow-[4px_6px_0_rgba(4,14,36,0.55)] sm:px-8 sm:py-4 sm:text-xl ${shape}`}
    style={{ fontFamily: '"Fraunces", serif', transform: `rotate(${rotate}deg)` }}
  >
    {label}
  </span>
);

const MockupTiledLetters = () => {
  // Respect "reduce motion": keep the ripple, but stop it animating.
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setAnimate(!mq.matches);
    const onChange = (e) => setAnimate(!e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-lapis/15 shadow-xl">
      {/* This div is the one stacking context every blend mode below shares. */}
      <div
        className="relative h-[620px] w-full overflow-hidden sm:h-[720px]"
        style={{ background: "linear-gradient(180deg, #0A1430 0%, #12244A 60%)" }}
      >
        {/* SVG filter definition: noise -> displacement = water ripple. */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <filter id="pow-ripple" x="-5%" y="-20%" width="110%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.07" numOctaves="2" seed="3">
              {animate && (
                <animate
                  attributeName="baseFrequency"
                  dur="10s"
                  values="0.012 0.07;0.015 0.085;0.012 0.07"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="16" />
          </filter>
        </svg>

        {/* LAYER 1 — light the windows throw onto the back wall */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 50% 28%, rgba(255,214,176,0.28), transparent 70%)",
          }}
        />

        {/* LAYER 2 — arched windows with painted sky */}
        <div className="absolute inset-x-0 top-[4%] flex h-[50%] items-end justify-center">
          <ArchWindow className="-mr-[4%] hidden !h-[78%] sm:block" />
          <ArchWindow>
            {/* Arc lettering over the center arch, like the sketch */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
              <path id="pow-arc" d="M 13 40 A 37 37 0 0 1 87 40" fill="none" />
              <text
                fill="#F5E6CF"
                fontSize="3.5"
                letterSpacing="0.6"
                style={{ fontFamily: '"IBM Plex Mono", monospace', textTransform: "uppercase" }}
              >
                <textPath href="#pow-arc" startOffset="50%" textAnchor="middle">
                  Creative Portfolio · by Meredith White
                </textPath>
              </text>
            </svg>
          </ArchWindow>
          <ArchWindow className="-ml-[4%] hidden !h-[78%] sm:block" />
        </div>

        {/* LAYER 3 — golden lamps either side */}
        <Lamp x="10%" />
        <Lamp x="90%" />

        {/* LAYER 4 — pool edge: the gold Greek-key band, cropped out of the
            tile photo with background-size/position (no editing). */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 h-[22px] opacity-80"
          style={{
            top: `calc(${WATER}% - 22px)`,
            backgroundImage: `url(${greekKeyTile})`,
            backgroundSize: "122px 122px", // band is ~18% of the image height
            backgroundPosition: "0 -50px", // shift so only the band shows
            backgroundRepeat: "repeat-x",
          }}
        />

        {/* LAYER 5 — pool wall below the surface (navy tile) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0"
          style={{
            top: `${WATER}%`,
            backgroundImage: `url(${greekKeyTile})`,
            backgroundSize: "800px auto",
            backgroundPosition: "center top",
          }}
        />

        {/* LAYER 6 — the submerged half of the title (rippled + darker) */}
        <h2
          aria-hidden="true"
          style={{
            ...titleBox,
            ...tileLetters,
            clipPath: `inset(${SINK * 100}% 0 0 0)`,
            filter: "url(#pow-ripple) brightness(0.8) saturate(1.3)",
          }}
        >
          {TITLE}
        </h2>

        {/* LAYER 7 — the water itself: translucent, deeper = darker */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            top: `${WATER}%`,
            background:
              "linear-gradient(180deg, rgba(70,150,230,0.4) 0%, rgba(20,70,150,0.62) 40%, rgba(6,22,60,0.88) 100%)",
          }}
        />
        <Reflection x="10%" />
        <Reflection x="90%" />

        {/* LAYER 8 — the water surface line */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 12"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 h-3 w-full"
          style={{ top: `calc(${WATER}% - 6px)` }}
        >
          <path d={wavePath} fill="none" stroke="rgba(220,240,255,0.75)" strokeWidth="1.5" />
        </svg>

        {/* LAYER 9 — the above-water half of the title. A hard, offset
            drop-shadow (no blur) is what makes it read as a paper cut-out. */}
        <h2
          style={{
            ...titleBox,
            ...tileLetters,
            clipPath: `inset(0 0 ${100 - SINK * 100}% 0)`,
            filter: "drop-shadow(0.04em 0.05em 0 rgba(4,10,28,0.65))",
          }}
        >
          {TITLE}
        </h2>

        {/* LAYER 10 — section links floating in the water, as paper cut-outs */}
        <nav className="absolute inset-x-0 bottom-[7%] flex items-center justify-center gap-4 px-4 sm:gap-10">
          <NavCutout label="Writing" shape="rounded-md" rotate={-3} />
          <NavCutout label="About" shape="rounded-[50%] !px-7 sm:!px-10" rotate={2} />
          <NavCutout label="Dance" shape="rounded-sm" rotate={-1.5} />
        </nav>
      </div>
    </div>
  );
};

export default MockupTiledLetters;
