import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Col, Row, Container, Header } from "react-bootstrap";
import "./Homepage.scss";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Writing from "../../components/Writing/Writing.jsx";
import Dance from "../../components/Dance/Dance.jsx";
import About from "../../components/About/About.jsx";

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount = false;
      if (
        !location.state ||
        location.state.targetSection !== "welcome-section"
      ) {
        navigate("/", {
          state: { targetSection: "welcome-section" },
          replace: true,
        });
      }
    }
  }, [navigate, location]);

  useEffect(() => {
    if (
      location.state &&
      location.state.targetSection &&
      !isInitialMount.current
    ) {
      const sectionId = location.state.targetSection;
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state, location.pathname]);
  console.log("location.state", location.state);

  return (
    <div className="outer">
      <section id="welcome-section" className="cover text-center">
        <div className="cover__container d-flex w-100 p-3 mx-auto flex-column">
          <NavBar />
          <main
            role="main"
            className="cover__header-container d-flex align-items-center justify-content-center"
          >
            {/* <h1 className="display-1 cover__header">Pool of Work</h1> */}
            <h1 className="display-1 cover__header">Pool&nbsp;of&nbsp;Work</h1>
          </main>
        </div>
      </section>
      <section className="content d-flex my-5 flex-column">
        <Writing></Writing>
        <Dance></Dance>
      </section>
      <About></About>
    </div>
  );
};

export default Homepage;
