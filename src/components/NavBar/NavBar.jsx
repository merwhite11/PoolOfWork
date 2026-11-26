import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const NavBar = ({ variant = "editorial" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavigation = (event, targetSection) => {
    event.preventDefault();
    setMobileOpen(false);
    if (isHome) {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/", { state: { targetSection } });
  };

  const navItems = [
    ...(!isHome ? [{ label: "Home", target: "welcome-section" }] : []),
    { label: "Writing", target: "writing-section" },
    { label: "Dance", target: "dance-section" },
    { label: "About", target: "about-section" },
  ];

  const isCompact = variant === "compact";

  return (
    <header
      className={
        isCompact
          ? "w-full"
          : `fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
              scrolled || mobileOpen
                ? "bg-paper/90 backdrop-blur-md border-b border-lapis/10 shadow-[0_1px_12px_rgba(27,50,86,0.05)]"
                : "bg-transparent"
            }`
      }
    >
      <div
        className={`mx-auto flex items-center justify-between ${
          isCompact ? "px-0 py-0" : "max-w-6xl px-6 py-4 md:px-10"
        }`}
      >
        <a
          href="#welcome-section"
          onClick={(e) => handleNavigation(e, "welcome-section")}
          className="group flex items-baseline gap-3 text-lapis no-underline"
        >
          <span className="font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-amber">
            Meredith White
          </span>
          {!isCompact && (
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-lapis-muted sm:inline">
              · SF / 415
            </span>
          )}
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => handleNavigation(e, item.target)}
              className="relative py-1 text-xs font-medium uppercase tracking-[0.2em] text-lapis/80 no-underline transition-colors hover:text-lapis after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lapis/15 bg-paper-card/80 text-lapis transition-colors hover:border-amber/60 hover:text-amber md:hidden"
        >
          {mobileOpen ? <RxCross2 size={18} /> : <RxHamburgerMenu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-lapis/10 bg-paper/95 px-6 py-5 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleNavigation(e, item.target)}
                className="flex items-baseline justify-between border-b border-lapis/8 pb-3 text-lapis no-underline last:border-b-0 last:pb-0"
              >
                <span className="font-display text-2xl italic">{item.label}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-lapis-muted">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;

