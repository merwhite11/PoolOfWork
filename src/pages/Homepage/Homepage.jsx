import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Writing from "../../components/Writing/Writing.jsx";
import Dance from "../../components/Dance/Dance.jsx";
import About from "../../components/About/About.jsx";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetSection) {
      const sectionElement = document.getElementById(
        location.state.targetSection
      );
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-paper text-lapis">
      <NavBar />

      {/* Atmospheric Editorial Hero */}
      <section
        id="welcome-section"
        className="hero-atmosphere relative flex min-h-[90vh] flex-col justify-between overflow-hidden pt-24 pb-12"
      >
        <div
          aria-hidden="true"
          className="paper-grain pointer-events-none absolute inset-0"
        />
        {/* Soft painterly cloud washes */}
        <div
          aria-hidden="true"
          className="animate-cloud-slow pointer-events-none absolute -left-24 top-20 h-72 w-96 rounded-full bg-gradient-to-tr from-periwinkle/55 via-peach/70 to-paper-card/80 blur-3xl sm:h-80 sm:w-[30rem]"
        />
        <div
          aria-hidden="true"
          className="animate-cloud-slower pointer-events-none absolute -right-20 top-32 h-64 w-80 rounded-full bg-gradient-to-bl from-amber-glow/25 via-peach/55 to-periwinkle/45 blur-3xl sm:h-80 sm:w-[26rem]"
        />
        {/* Classical Roman-pool arch silhouette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 top-20 bottom-10 mx-auto max-w-4xl rounded-t-[24rem] border border-lapis/[0.08] md:inset-x-12"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-7 top-23 bottom-13 mx-auto max-w-[54rem] rounded-t-[23rem] border border-amber/20 md:inset-x-16"
        />

        {/* Editorial masthead line */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-4 md:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-lapis-muted">
            Vol. II · Collected Works
          </span>
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-lapis-muted sm:inline-flex">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-glow shadow-[0_0_10px_rgba(232,186,109,0.9)]" />
            Prose · Movement · Notes
          </span>
        </div>

        {/* Centerpiece title & mirror reflection */}
        <main
          role="main"
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-glow shadow-[0_0_16px_rgba(201,142,66,0.75)]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber/70" />
          </div>

          <h1 className="font-display text-6xl font-normal leading-[0.95] tracking-tight text-lapis sm:text-7xl md:text-8xl">
            Pool <span className="italic font-normal text-lapis/85">of</span>{" "}
            Work
          </h1>

          <p
            aria-hidden="true"
            className="pointer-events-none mt-1 select-none font-display text-4xl italic leading-none tracking-tight text-lapis/[0.08] [transform:scaleY(-1)] sm:text-5xl md:text-6xl"
          >
            Pool of Work
          </p>

          <p className="mt-6 max-w-lg font-editorial text-lg leading-relaxed text-lapis-muted sm:text-xl">
            A quiet archive of stories, movement studies, and field notes by{" "}
            <span className="italic text-lapis">Meredith White</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#writing-section"
              className="group inline-flex items-center gap-2.5 rounded-full bg-lapis px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-paper no-underline shadow-[0_8px_24px_rgba(27,50,86,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lapis-deep"
            >
              Read the Shelf
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#dance-section"
              className="inline-flex items-center gap-2 rounded-full border border-lapis/20 bg-paper-card/75 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-lapis no-underline backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/70 hover:bg-paper-card"
            >
              Watch Movement
            </a>
          </div>
        </main>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 md:px-10">
          <a
            href="#writing-section"
            aria-label="Scroll to Writing"
            className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-lapis-muted no-underline transition-colors hover:text-lapis"
          >
            <span>Explore</span>
            <span className="h-8 w-px bg-gradient-to-b from-amber/80 to-transparent" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mosaic-rule rounded-full" />
      </div>

      <Writing />
      <Dance />
      <About />
    </div>
  );
};

export default Homepage;

