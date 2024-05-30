import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (event, targetSection) => {
    event.preventDefault();
    navigate("/", { state: { targetSection } });
  };

  return (
    <header className="navbar mb-auto">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center w-100">
          {location.pathname === "/" && (
            <h3
              className="mb-0 me-md-auto"
              href="#welcome-section"
              onClick={(e) => handleNavigation(e, "welcome-section")}
            >
              Meredith White
            </h3>
          )}
          <nav
            className={`d-flex flex-row align-items-center ${location.pathname === "/" ? "ms-md-auto" : "ms-auto"}`}
          >
            {location.pathname !== "/" && (
              <a
                className="navbar__link fw-bold py-1 px-0"
                href="#welcome-section"
                onClick={(e) => handleNavigation(e, "welcome-section")}
              >
                Home
              </a>
            )}
            <a
              className="navbar__link fw-bold py-1 px-0"
              href="#writing-section"
              onClick={(e) => handleNavigation(e, "writing-section")}
            >
              Writing
            </a>
            <a
              className="navbar__link fw-bold py-1 px-0"
              href="#dance-section"
              onClick={(e) => handleNavigation(e, "dance-section")}
            >
              Dance
            </a>
            <a
              className="navbar__link fw-bold py-1 px-0"
              href="#about-section"
              onClick={(e) => handleNavigation(e, "about-section")}
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
