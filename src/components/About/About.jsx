import React from "react";
import { Container, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons/component";
import { FaRegFileAlt } from "react-icons/fa";
import "react-social-icons/youtube";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/mailto";
import { FaEnvelope } from "react-icons/fa";
import "./About.scss";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "Resume/MeredithWhite_Resume.pdf";
    link.download = "MeredithWhite_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about-section" className="about">
      <Container className="about__container">
        <h1 className="display-2 d-flex flex-column justify-content-center text-center text-md-start">
          About
        </h1>
        <div className="about__text-container d-flex col-md-8 col-lg-6 justify-content-center m-auto text-center text-xl">
          <div className="about__text mt-2 p-3">
            Hydrophilic, linguophile living in the 415 <br />
            Writes, if not code, then probably prose <br />
            Farmer at heart, dancer in spirit <br />
            Software engineer by design
          </div>
        </div>
        <div className="about__social-links d-flex gap-4 mt-4 justify-content-center">
          <SocialIcon
            bgColor="#96e7e8"
            className="about__icon"
            url="https://www.linkedin.com/in/meredith-white-925eastbay"
          />
          <SocialIcon
            bgColor="#96e7e8"
            className="about__icon"
            url="https://github.com/merwhite11"
          />
          <div
            className="about__resume-container about__icon"
            onClick={handleDownload}
          >
            <FaRegFileAlt size="1.5rem" />
          </div>
          <SocialIcon
            bgColor="#96e7e8"
            className="about__icon"
            url="mailto:meredith.white91@gmail.com"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
