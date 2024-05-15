import React from "react";
import { Container, Row } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/youtube';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/mailto';
import { FaEnvelope } from "react-icons/fa";
import "./About.scss";

// import BookList from './BookList.jsx'

const About = () => {
  return (
    <Container className="about__container">
      <h1 className="d-flex flex-column justify-content-center justify-content-md-start">
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
      <div className="about__social d-flex gap-2 justify-content-center">
        <SocialIcon url="https://linkedin.com"/>
        <SocialIcon url="https://github.com"/>
        <SocialIcon url="https://youtube.com"/>
        <SocialIcon url="https://mailto.com"/>

      </div>
    </Container>
  );
};

export default About;
