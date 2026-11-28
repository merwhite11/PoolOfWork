import React, { useEffect, useRef, useState } from "react";
import blueTile from "../../assets/world-building/windows/blue-tile.png";
import keyTile from "../../assets/world-building/windows/tile-detail-2.png";
import lamp from "../../assets/world-building/windows/lamp-3.png";
import windowPhoto from "../../assets/world-building/windows/arched-windows.jpeg";
import underwater from "../../assets/moodboard/underwater-yum.png";

/*
 * Option 4 — Tiled Letters, Over-Under
 *
 * ABOVE  a dark tiled room: a tiled deck in perspective, two lamps planted on
 *        it, and three arched windows built as real 3D openings in the wall.
 * BELOW  a real underwater photograph, graded to match the room's light.
 *
 * New techniques in this pass:
 *  - 3D windows: each window is a stack of arch "rings" spaced out in Z
 *    (translateZ). Viewed in perspective, the rings fuse into a tiled tunnel
 *    (the reveal) leading back to the glass. Side windows turn inward (rotateY).
 *  - Light shafts: skewed beams masked with stripes, so the window bars cast
 *    shadows through the light, the cue that makes light read as real.
 *  - Deck: the tile image laid flat (rotateX) so it recedes to the wall.
 *    Lamps sit on it with a contact shadow, which is what "plants" an object.
 *
 * Blend-mode gotcha: `mix-blend-mode` only blends within its stacking context.
 * The lamps use `screen`, so they sit directly in the room layer.
 */

const WATER = 56; // % from top of scene where the waterline sits
const SINK = 0.84; // how far down each letter (in em) the waterline falls
const TITLE = "Pool of Work";
const DECK = 24; // % of the room's height taken by the deck

const parallax = (depth, extra = "") => ({
  transform: `${extra} translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth * 0.3}px), 0)`,
  transition: "transform 900ms cubic-bezier(.2,.7,.2,1)",
});

/* ───────────── TITLE ───────────── */

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

const tileFace = {
  backgroundImage: `linear-gradient(180deg, rgba(255,200,140,0.42) 0%, rgba(255,200,140,0) 40%, rgba(2,8,24,0.5) 100%), url(${blueTile})`,
  backgroundSize: "100% 100%, 150px",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

// Reverse contrast, faked: stacked copies nudged down thicken only horizontals.
const THICK = 0.12;
const STEPS = 10;
const offsets = Array.from({ length: STEPS + 1 }, (_, i) => +((THICK * i) / STEPS).toFixed(4));

const TileWord = ({ style }) =>
  offsets.map((o) => (
    <div
      key={o}
      aria-hidden="true"
      className="absolute inset-0"
      style={{ ...tileFace, ...style, transform: `translateY(${o}em)`, backgroundPosition: `0 -${o}em, 0 -${o}em` }}
    >
      {TITLE}
    </div>
  ));

const extrusion = offsets
  .map((o) => `0 ${o}em 0 hsl(222 40% 14%)`)
  .concat(Array.from({ length: 6 }, (_, i) => `0 calc(${THICK}em + ${i + 1}px) 0 hsl(222 40% ${13 - i * 1.5}%)`))
  .concat("0 16px 26px rgba(0,0,0,0.6)")
  .join(", ");

/* ───────────── WINDOWS ───────────── */

const ARCH = "999px 999px 0 0";

// An arch-shaped ring: the classic "mask out the content box" trick.
// `padding` sets the ring's thickness.
const ring = (padding) => ({
  borderRadius: ARCH,
  padding,
  maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
  maskClip: "content-box, border-box",
  maskComposite: "exclude",
  WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
  WebkitMaskClip: "content-box, border-box",
  WebkitMaskComposite: "xor",
});

// Gold mosaic: the blue tile photo, hue-rotated to gold. One asset, two colors.
const goldTile = { backgroundImage: `url(${blueTile})`, backgroundSize: "90px", filter: "hue-rotate(176deg) saturate(1.15) brightness(1.05) contrast(1.15)" };
const navyTile = { backgroundImage: `url(${blueTile})`, backgroundSize: "90px" };

const TRIM = 13; // % of window width taken by the front trim (both rings)
const DEPTH = 70; // px the glass sits back from the wall face
const SLICES = 18;

// Glass + iron bars, cropped out of the window photo. The crop numbers are the
// inner iron frame of the left window, measured in the 2000×1500 image.
const Glass = () => (
  <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: ARCH }}>
    {/* overexposed daylight: hottest low and to one side, like real sun */}
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse 90% 70% at 40% 70%, #FFFDF6 0%, #FFF0D2 35%, #F6CF97 70%, #D9995E 100%)" }}
    />
    <img
      src={windowPhoto}
      alt=""
      aria-hidden="true"
      className="absolute max-w-none"
      style={{ width: "307.7%", left: "-29.2%", top: "-13.3%", mixBlendMode: "multiply", filter: "contrast(1.1)" }}
    />
    {/* halation: bright light eats into the dark bars a little */}
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 40% 70%, rgba(255,250,235,0.45), transparent 70%)" }} />
  </div>
);

const ArchWindow = ({ angle = 0, origin = "50%", className = "" }) => (
  // Each slot gets its own perspective; shifting its origin toward the scene
  // center makes all three windows look like they're seen from one eye.
  <div
    className={`relative h-full ${className}`}
    style={{ aspectRatio: "0.62", perspective: "700px", perspectiveOrigin: `${origin} 115%` }}
  >
    {/* Light shafts falling forward onto the deck. The stripe mask = the bars' shadows. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{
        left: "18%",
        width: "64%",
        top: "45%",
        height: "115%",
        transformOrigin: "50% 0%",
        transform: "skewX(-14deg)",
        background: "linear-gradient(180deg, rgba(255,232,196,0.4), rgba(255,214,160,0.16) 55%, transparent 95%)",
        maskImage: "repeating-linear-gradient(90deg, #000 0 19%, rgba(0,0,0,0.25) 19% 25%)",
        WebkitMaskImage: "repeating-linear-gradient(90deg, #000 0 19%, rgba(0,0,0,0.25) 19% 25%)",
        filter: "blur(5px)",
      }}
    />

    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", transform: `rotateY(${angle}deg)` }}>
      {/* Back: the glass, set into the wall */}
      <div className="absolute" style={{ inset: `${TRIM}% ${TRIM}% 0 ${TRIM}%`, transform: `translateZ(-${DEPTH}px)` }}>
        <Glass />
      </div>

      {/* Reveal: rings stepping back in Z fuse into a tiled tunnel. Closer to
          the glass they're brighter, since that's where the light lands. */}
      {Array.from({ length: SLICES }, (_, i) => {
        const t = (i + 1) / SLICES; // 0 = wall face, 1 = glass
        return (
          <div
            key={i}
            className="absolute"
            style={{
              inset: `${TRIM}% ${TRIM}% 0 ${TRIM}%`,
              ...ring("5px"),
              ...navyTile,
              filter: `brightness(${0.18 + t * 0.5}) saturate(${0.45 + t * 0.3})`,
              transform: `translateZ(-${t * DEPTH}px)`,
            }}
          />
        );
      })}

      {/* Front trim: an outer gold mosaic ring and an inner blue one */}
      <div className="absolute inset-0" style={{ ...ring(`${TRIM * 0.36}%`), ...goldTile }} />
      <div
        className="absolute"
        style={{ inset: `${TRIM * 0.36}% ${TRIM * 0.36}% 0 ${TRIM * 0.36}%`, ...ring(`${TRIM * 0.7}%`), ...navyTile, filter: "brightness(0.55) saturate(0.7)" }}
      />

      {/* Bloom over everything: light always spills past the frame in a photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          inset: "8% 0% 0% 0%",
          borderRadius: ARCH,
          background: "radial-gradient(ellipse 45% 50% at 45% 62%, rgba(255,232,190,0.4), rgba(255,200,140,0.1) 60%, transparent 80%)",
          filter: "blur(14px)",
          transform: "translateZ(1px)",
        }}
      />
    </div>
  </div>
);

/* ───────────── LAMPS ───────────── */

const Lamp = ({ x }) => (
  <>
    {/* contact shadow: a dark, soft ellipse where the base meets the deck */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-[50%]"
      style={{ left: x, bottom: "6%", width: "13%", height: "5%", transform: "translate(-50%, 40%)", background: "rgba(0,0,0,0.6)", filter: "blur(6px)" }}
    />
    {/* globe glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full"
      style={{
        left: x,
        top: "47%",
        width: "40%",
        aspectRatio: "1",
        background: "radial-gradient(circle, rgba(255,168,92,0.5) 0%, rgba(255,140,70,0.14) 30%, transparent 65%)",
        mixBlendMode: "screen",
        ...parallax(12, "translate(-50%, -50%)"),
      }}
    />
    {/* lamp photo on black: `screen` drops the black, keeps the lit floor sheen */}
    <img
      src={lamp}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute max-w-none"
      style={{
        left: x,
        bottom: "2%",
        height: "56%",
        mixBlendMode: "screen",
        filter: "contrast(1.25) brightness(0.95)",
        maskImage: "radial-gradient(ellipse 34% 52% at 50% 50%, #000 75%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 34% 52% at 50% 50%, #000 75%, transparent 100%)",
        ...parallax(12, "translateX(-50%)"),
      }}
    />
  </>
);

/* ───────────── SCENE ───────────── */

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
        </svg>

        {/* ───────────── ABOVE WATER ───────────── */}
        <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: `${WATER}%` }}>
          {/* Wall: tile in deep shadow */}
          <div
            className="absolute -inset-6"
            style={{ backgroundImage: `url(${blueTile})`, backgroundSize: "150px", filter: "brightness(0.24) saturate(0.45)", ...parallax(4) }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 55% at 50% 40%, rgba(255,200,140,0.16), transparent 70%)", mixBlendMode: "screen" }}
          />

          {/* Deck: the Greek-key tile laid flat and tipped back in 3D */}
          <div
            className="absolute inset-x-0 overflow-hidden"
            style={{ bottom: "14px", height: `${DECK}%`, perspective: "380px", perspectiveOrigin: "50% -160%" }}
          >
            <div
              className="absolute"
              style={{
                left: "-100%",
                width: "300%",
                bottom: 0,
                height: "520%",
                transformOrigin: "50% 100%",
                transform: "rotateX(74deg)",
                backgroundImage: `url(${keyTile})`,
                backgroundSize: "260px",
                backgroundPosition: "center bottom",
                filter: "brightness(0.5) saturate(0.85)",
              }}
            />
            {/* the far edge falls into shadow where it meets the wall */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, transparent 35%, rgba(3,5,12,0.75))" }} />
          </div>

          {/* Windows */}
          {/* windows' sills land on the deck's far edge so they sit IN the wall */}
          <div className="absolute inset-x-0 top-[4%] flex items-end justify-center gap-[7%]" style={{ height: `calc(${96 - DECK}% - 14px)`, ...parallax(6) }}>
            <ArchWindow angle={34} origin="190%" className="hidden !h-[82%] sm:block" />
            <ArchWindow />
            <ArchWindow angle={-34} origin="-90%" className="hidden !h-[82%] sm:block" />
          </div>

          {/* lamp + window light pooling on the deck */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: `${DECK + 6}%`,
              background:
                "radial-gradient(ellipse 14% 60% at 11% 80%, rgba(255,170,100,0.35), transparent 70%), radial-gradient(ellipse 14% 60% at 89% 80%, rgba(255,170,100,0.35), transparent 70%), radial-gradient(ellipse 30% 70% at 47% 70%, rgba(255,226,186,0.2), transparent 70%)",
              mixBlendMode: "screen",
            }}
          />

          <Lamp x="11%" />
          <Lamp x="89%" />

          {/* pool coping: the Greek-key band cropped from the tile photo */}
          <div
            className="absolute inset-x-0 bottom-0 h-[14px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,214,160,0.15), rgba(0,0,0,0.45)), url(${keyTile})`,
              backgroundSize: "100% 100%, 65px 65px",
              backgroundPosition: "0 0, 0 -25px",
              backgroundRepeat: "no-repeat, repeat-x",
            }}
          />

          {/* Title, above-water half */}
          <div className="absolute inset-x-0" style={{ ...titleFont, top: `calc(100% - ${SINK}em)`, ...parallax(20) }}>
            <h2 style={{ color: "#0B1636", textShadow: extrusion, font: "inherit", margin: 0 }}>{TITLE}</h2>
            <TileWord />
          </div>
        </div>

        {/* ───────────── BELOW WATER ───────────── */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ top: `${WATER}%` }}>
          <img
            src={underwater}
            alt=""
            aria-hidden="true"
            className="absolute -inset-x-6 h-full w-[calc(100%+3rem)] max-w-none object-cover"
            style={{ objectPosition: "50% 82%", filter: "brightness(0.64) saturate(0.72) hue-rotate(-8deg) contrast(1.08)", ...parallax(8) }}
          />

          <div style={{ filter: "url(#pow4-ripple) blur(0.4px)" }}>
            <div
              className="absolute inset-x-0"
              style={{ ...titleFont, top: `-${SINK}em`, ...parallax(20, "scale(1.06)"), transformOrigin: `50% ${SINK}em` }}
            >
              <div aria-hidden="true" className="invisible">{TITLE}</div>
              <TileWord style={{ filter: "brightness(1.15) saturate(0.85)" }} />
            </div>
          </div>

          <img
            src={underwater}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 h-full w-[calc(100%+3rem)] max-w-none object-cover"
            style={{ objectPosition: "50% 82%", mixBlendMode: "overlay", opacity: 0.45, filter: "grayscale(1) contrast(1.6)", ...parallax(8) }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(20,60,80,0.15) 0%, rgba(4,20,40,0.35) 45%, rgba(2,8,20,0.8) 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[40%]"
            style={{
              background:
                "radial-gradient(ellipse 30% 100% at 11% 0%, rgba(255,170,90,0.22), transparent 70%), radial-gradient(ellipse 30% 100% at 89% 0%, rgba(255,170,90,0.22), transparent 70%)",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Waterline: a still, bright meniscus line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-[8px]"
          style={{
            top: `calc(${WATER}% - 4px)`,
            background: "linear-gradient(180deg, transparent 0%, rgba(180,220,230,0.3) 30%, rgba(235,250,255,0.75) 50%, rgba(120,170,190,0.35) 70%, transparent 100%)",
          }}
        />

        {/* Finishing */}
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
