import React, { useEffect, useRef, useState } from "react";
import blueTile from "../../assets/world-building/windows/blue-tile.png";
import greekKeyTile from "../../assets/world-building/windows/tile-detail-1.png";
import lamp from "../../assets/world-building/windows/lamp-1.png";
import archWindow from "../../assets/world-building/windows/arched-windows-2.png";
import underwater from "../../assets/moodboard/underwater-yum.png";

/*
 * Option 4 — Tiled Letters, Over-Under
 *
 * Camera sits exactly at the waterline (an "over-under" or split shot):
 *   ABOVE  a dark tiled room, lit only by two lamps and glowing windows
 *   BELOW  a real underwater photograph, graded to match the room's light
 * The title straddles the line, so you see its two halves behave differently:
 * crisp in the air, magnified + rippled + caustic-lit under water.
 *
 * Techniques worth learning, in order of impact:
 *  - Use ONE real photo for the hardest thing (water) and build the rest.
 *  - Color-match: darken/desaturate/tint every layer toward one light source.
 *  - Integrate: lay the photo's own light pattern over the letters (overlay),
 *    so they look like they're *in* that water, not pasted on top of it.
 *  - Light only where light falls: the wall is near-black except where the
 *    lamps and windows reveal it.
 *
 * Blend-mode gotcha: `mix-blend-mode` only blends with layers in the same
 * stacking context. The lamp uses `screen`, so it sits directly in the room
 * layer, and its transform is on the <img> itself, never on a wrapper.
 */

const WATER = 56; // % from the top of the scene where the waterline sits
const SINK = 0.84; // how far down each letter (in em) the waterline falls
const TITLE = "Pool of Work";

// Parallax: --mx / --my run from -1..1 with the pointer. Bigger depth = closer.
const parallax = (depth, extra = "") => ({
  transform: `${extra} translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth * 0.3}px), 0)`,
  transition: "transform 900ms cubic-bezier(.2,.7,.2,1)",
});

// Wide, hairline geometric sans (free on Google Fonts). On its own it has even
// strokes; <TileWord> below gives it the reverse contrast from font-inspo.
const titleFont = {
  fontFamily: '"Anybody", sans-serif',
  fontVariationSettings: '"wdth" 140, "wght" 230',
  textTransform: "uppercase",
  letterSpacing: "0.005em",
  textAlign: "center",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontSize: "clamp(1.3rem, 6.6vw, 4.6rem)",
};

// Reverse contrast, faked: stack copies of the word nudged straight down.
// A vertical shift thickens only HORIZONTAL strokes (the tops of P, the foot of
// L, the bars of F); vertical stems stay hairline. Each copy's background is
// shifted back up by the same amount so the tile pattern stays continuous.
const THICK = 0.12; // em added to horizontal strokes
const STEPS = 10;
const offsets = Array.from({ length: STEPS + 1 }, (_, i) => +((THICK * i) / STEPS).toFixed(4));

const TileWord = ({ style }) =>
  offsets.map((o) => (
    <div
      key={o}
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        ...tileFace,
        ...style,
        transform: `translateY(${o}em)`,
        backgroundPosition: `0 -${o}em, 0 -${o}em`,
      }}
    >
      {TITLE}
    </div>
  ));

// Tile face, lit from above by the room: warm highlight on top, shadow below.
const tileFace = {
  backgroundImage: `linear-gradient(180deg, rgba(255,200,140,0.42) 0%, rgba(255,200,140,0) 40%, rgba(2,8,24,0.5) 100%), url(${blueTile})`,
  backgroundSize: "100% 100%, 150px",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

// Thickness: stacked 1px shadows read as an extruded edge; one soft shadow grounds it.
// The back layer first gets the same reverse-contrast thickening, then
// continues further down in darker shades as the extruded side.
const extrusion = offsets
  .map((o) => `0 ${o}em 0 hsl(222 40% 14%)`)
  .concat(Array.from({ length: 6 }, (_, i) => `0 calc(${THICK}em + ${i + 1}px) 0 hsl(222 40% ${13 - i * 1.5}%)`))
  .concat("0 16px 26px rgba(0,0,0,0.6)")
  .join(", ");

const ArchWindow = ({ className = "" }) => (
  <div className={`relative aspect-square h-full ${className}`}>
    {/* Bloom: bright light always spills past the frame in a photo */}
    <div
      className="absolute"
      style={{
        inset: "0% 8% 4% 8%",
        borderRadius: "999px 999px 40% 40%",
        background: "radial-gradient(ellipse 50% 55% at 50% 55%, rgba(255,214,160,0.6), rgba(255,170,100,0.18) 55%, transparent 78%)",
        filter: "blur(22px)",
      }}
    />
    {/* The window, clipped to its arch so the white backdrop is gone */}
    <div className="absolute inset-0" style={{ clipPath: "inset(8.2% 19.4% 8.2% 19.4% round 999px 999px 0 0)" }}>
      {/* Overexposed light behind the glass, hottest low in the middle */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 72%, #FFF8EC 0%, #FFE6BC 30%, #F0B878 62%, #9A5A34 100%)" }}
      />
      {/* brightness+contrast push the cream frame dark while the white panes stay
          white, so `multiply` gives a backlit silhouette: dark bars, glowing glass */}
      <img
        src={archWindow}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "multiply", filter: "grayscale(1) brightness(0.54) contrast(7)" }}
      />
      {/* soften the hard thresholded edges a touch, like lens halation */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 40px rgba(40,18,6,0.55)" }} />
    </div>
  </div>
);

const Lamp = ({ x }) => (
  <>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full"
      style={{
        left: x,
        top: "21%",
        width: "46%",
        aspectRatio: "1",
        background: "radial-gradient(circle, rgba(255,168,92,0.5) 0%, rgba(255,140,70,0.16) 30%, transparent 65%)",
        mixBlendMode: "screen",
        ...parallax(12, "translate(-50%, -50%)"),
      }}
    />
    <img
      src={lamp}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute max-w-none"
      style={{
        left: x,
        bottom: "-3%",
        height: "90%",
        mixBlendMode: "screen",
        filter: "contrast(1.3) brightness(0.95)",
        maskImage: "linear-gradient(to right, transparent 38%, #000 44%, #000 56%, transparent 62%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 38%, #000 44%, #000 56%, transparent 62%)",
        ...parallax(12, "translateX(-50%)"),
      }}
    />
  </>
);

const MockupTiledLetters = () => {
  const sceneRef = useRef(null);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setMotion(!mq.matches);
    const onChange = (e) => setMotion(!e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Write CSS variables directly so moving the mouse never re-renders React.
  const onPointerMove = (e) => {
    if (!motion || e.pointerType !== "mouse") return;
    const r = sceneRef.current.getBoundingClientRect();
    sceneRef.current.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    sceneRef.current.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };
  const onPointerLeave = () => {
    sceneRef.current.style.setProperty("--mx", "0");
    sceneRef.current.style.setProperty("--my", "0");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-lapis/15 shadow-xl">
      <div
        ref={sceneRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative h-[620px] w-full overflow-hidden bg-[#05070B] sm:h-[720px]"
      >
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <filter id="pow4-ripple" x="-5%" y="-10%" width="110%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.05" numOctaves="2" seed="4">
              {motion && (
                <animate attributeName="baseFrequency" dur="12s" values="0.008 0.05;0.01 0.065;0.008 0.05" repeatCount="indefinite" />
              )}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="14" />
          </filter>
          <filter id="pow4-waterline" x="0" y="-200%" width="100%" height="500%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.4" numOctaves="1" seed="9">
              {motion && <animate attributeName="seed" dur="0.9s" values="9;10;11;12" repeatCount="indefinite" />}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="6" />
          </filter>
        </svg>

        {/* ───────────── ABOVE WATER ───────────── */}
        <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: `${WATER}%` }}>
          {/* Wall: the same tile, but in deep shadow. Light layers reveal it. */}
          <div
            className="absolute -inset-6"
            style={{ backgroundImage: `url(${blueTile})`, backgroundSize: "170px", filter: "brightness(0.26) saturate(0.4)", ...parallax(4) }}
          />
          {/* warm wash from the windows onto the wall behind them */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 48% 60% at 50% 55%, rgba(255,190,130,0.22), transparent 70%)", mixBlendMode: "screen" }}
          />

          <div className="absolute inset-x-0 top-[8%] flex h-[84%] items-end justify-center" style={parallax(6)}>
            <ArchWindow className="-mr-[4%] hidden !h-[74%] sm:block" />
            <ArchWindow />
            <ArchWindow className="-ml-[4%] hidden !h-[74%] sm:block" />
          </div>

          <Lamp x="10%" />
          <Lamp x="90%" />

          {/* pool coping: Greek-key band, darkened to sit in the room's light */}
          <div
            className="absolute inset-x-0 bottom-0 h-[18px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,210,150,0.12), rgba(0,0,0,0.55)), url(${greekKeyTile})`,
              backgroundSize: "100% 100%, 100px 100px",
              backgroundPosition: "0 0, 0 -41px",
              backgroundRepeat: "no-repeat, repeat-x",
            }}
          />
          {/* steam hanging over the warm water */}
          <div className="absolute inset-x-0 bottom-0 h-[28%]" style={{ background: "linear-gradient(to top, rgba(160,170,180,0.16), transparent)" }} />

          {/* Title, above-water half */}
          <div className="absolute inset-x-0" style={{ ...titleFont, top: `calc(100% - ${SINK}em)`, ...parallax(20) }}>
            <h2 style={{ color: "#0B1636", textShadow: extrusion, font: "inherit", margin: 0 }}>{TITLE}</h2>
            <TileWord />
          </div>
        </div>

        {/* ───────────── BELOW WATER ───────────── */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ top: `${WATER}%` }}>
          {/* The real photograph does the heavy lifting: perspective, caustics, depth.
              Graded darker, less saturated and slightly green-teal to match the
              lamp-lit room above instead of bright daylight. */}
          <img
            src={underwater}
            alt=""
            aria-hidden="true"
            className="absolute -inset-x-6 h-full w-[calc(100%+3rem)] max-w-none object-cover"
            style={{ objectPosition: "50% 82%", filter: "brightness(0.64) saturate(0.72) hue-rotate(-8deg) contrast(1.08)", ...parallax(8) }}
          />

          {/* Submerged half of the letters. Water magnifies (≈ scale 1.06) and
              ripples them, and they take on the water's color. */}
          <div style={{ filter: "url(#pow4-ripple) blur(0.4px)" }}>
            <div
              className="absolute inset-x-0"
              style={{ ...titleFont, top: `-${SINK}em`, ...parallax(20, "scale(1.06)"), transformOrigin: `50% ${SINK}em` }}
            >
              <div aria-hidden="true" className="invisible">{TITLE}</div>
              <TileWord style={{ filter: "brightness(1.15) saturate(0.85)" }} />
            </div>
          </div>

          {/* Integration: the photo's own caustic light laid over everything,
              so the letters catch the same shimmer as the pool floor. */}
          <img
            src={underwater}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 h-full w-[calc(100%+3rem)] max-w-none object-cover"
            style={{ objectPosition: "50% 82%", mixBlendMode: "overlay", opacity: 0.45, filter: "grayscale(1) contrast(1.6)", ...parallax(8) }}
          />

          {/* depth: water absorbs light, so it gets darker and bluer further down */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(20,60,80,0.15) 0%, rgba(4,20,40,0.35) 45%, rgba(2,8,20,0.8) 100%)" }}
          />
          {/* warm lamp light reaching just under the surface */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[40%]"
            style={{ background: "radial-gradient(ellipse 30% 100% at 10% 0%, rgba(255,170,90,0.22), transparent 70%), radial-gradient(ellipse 30% 100% at 90% 0%, rgba(255,170,90,0.22), transparent 70%)", mixBlendMode: "screen" }}
          />
        </div>

        {/* ───────────── THE WATERLINE ─────────────
            In split shots the surface reads as a bright, wobbling meniscus band. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-[10px]"
          style={{
            top: `calc(${WATER}% - 5px)`,
            background: "linear-gradient(180deg, transparent 0%, rgba(180,220,230,0.35) 35%, rgba(235,250,255,0.8) 50%, rgba(120,170,190,0.4) 65%, transparent 100%)",
            filter: "url(#pow4-waterline) blur(0.6px)",
          }}
        />

        {/* ───────────── FINISHING ───────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 75% at 50% 50%, transparent 50%, rgba(0,0,0,0.65) 100%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    </div>
  );
};

export default MockupTiledLetters;
