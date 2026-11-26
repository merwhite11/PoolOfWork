import React from "react";
import { FaLinkedinIn, FaGithub, FaRegFileAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Resume/MeredithWhite_Resume.pdf`;

  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/meredith-white-925eastbay",
      icon: <FaLinkedinIn size={16} />,
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/merwhite11",
      icon: <FaGithub size={17} />,
      external: true,
    },
    {
      label: "Resume",
      href: resumeHref,
      icon: <FaRegFileAlt size={15} />,
      download: "MeredithWhite_Resume.pdf",
    },
    {
      label: "Email",
      href: "mailto:meredith.white91@gmail.com",
      icon: <FaEnvelope size={15} />,
    },
  ];

  return (
    <footer
      id="about-section"
      className="pool-sanctuary relative overflow-hidden py-24 text-paper md:py-32"
    >
      <div
        aria-hidden="true"
        className="paper-grain pointer-events-none absolute inset-0 opacity-60"
      />

      {/* Delicate amber-mosaic top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-glow/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
        {/* Colophon Postcard Card */}
        <div className="relative rounded-3xl border border-amber-glow/25 bg-lapis-deep/55 p-8 shadow-[0_20px_60px_rgba(7,16,32,0.45)] backdrop-blur-sm sm:p-12 md:p-16">
          {/* Corner mosaic ticks */}
          <span
            aria-hidden="true"
            className="absolute top-4 left-4 h-3 w-3 border-t border-l border-amber-glow/55"
          />
          <span
            aria-hidden="true"
            className="absolute top-4 right-4 h-3 w-3 border-t border-r border-amber-glow/55"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-amber-glow/55"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-amber-glow/55"
          />

          <div className="flex flex-col items-center text-center">
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-amber-glow">
              <span>Colophon</span>
              <span className="text-paper/25">/</span>
              <span className="text-paper/65">About</span>
            </p>

            <h2 className="font-display text-5xl font-normal tracking-tight text-paper sm:text-6xl">
              Meredith <span className="italic text-amber-soft">White</span>
            </h2>

            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-amber-glow/40" />
              <span className="h-2 w-2 rounded-full bg-amber-glow shadow-[0_0_12px_rgba(232,186,109,0.9)]" />
              <span className="h-px w-12 bg-amber-glow/40" />
            </div>

            <blockquote className="max-w-lg font-editorial text-xl leading-[2] text-paper/90 sm:text-2xl sm:leading-[1.95]">
              Hydrophilic, linguophile living in the 415
              <br />
              Writes, if not code, then probably prose
              <br />
              Farmer at heart, dancer in spirit
              <br />
              Software engineer by design
            </blockquote>

            {/* Links & Resume */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.download}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-paper/18 bg-paper/8 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-paper no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-glow/70 hover:bg-amber-glow/15 hover:text-amber-soft"
                >
                  <span className="text-amber-glow transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quiet footer line */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-paper/45 sm:flex-row">
          <span>Pool of Work · San Francisco</span>
          <span>Made with care & stillness</span>
        </div>
      </div>
    </footer>
  );
};

export default About;

