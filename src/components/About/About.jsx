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

// import BookList from './BookList.jsx'

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + 'Resume/Resume_5.24'; // Path to your PDF file
    link.download = 'MeredithWhite_Resume.pdf'; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section id="about-section" className="about">
      <Container className="about__container">
        <h1 className="display-2 d-flex flex-column justify-content-center text-center text-md-start">
          About
        </h1>
        <div className="text-center text-xl">
          <p className="about__text mt-2">
            Hydrophilic, linguophile living in the 415 <br />
            Writes, if not code, then probably prose <br />
            Farmer at heart, dancer in spirit <br />
            Software engineer by design
          </p>
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
          {/* <SocialIcon
            bgColor="#96e7e8"
            className="about__icon"
            url="https://www.youtube.com/@meredithwhite11"
          /> */}
          <div className="about__resume-container" onClick={handleDownload}>
          <FaRegFileAlt size="1.5rem"/>
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
