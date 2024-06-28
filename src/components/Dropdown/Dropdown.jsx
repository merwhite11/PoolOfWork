import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (event, targetSection) => {
    event.preventDefault();
    navigate("/", { state: { targetSection } });
  };
  return (
    <div className="dropdown__menu">
      <a
        className="dropdown__item"
        href="#welcome-section"
        onClick={(e) => handleNavigation(e, "welcome-section")}
      >
        Home
      </a>
      <a
        className="dropdown__item"
        href="#writing-section"
        onClick={(e) => handleNavigation(e, "writing-section")}
      >
        Writing
      </a>
      <a
        className="dropdown__item"
        href="#dance-section"
        onClick={(e) => handleNavigation(e, "dance-section")}
      >
        Dance
      </a>
      <a
        className="dropdown__item"
        href="#about-section"
        onClick={(e) => handleNavigation(e, "about-section")}
      >
        About
      </a>
    </div>
  );
};

export default Dropdown;
