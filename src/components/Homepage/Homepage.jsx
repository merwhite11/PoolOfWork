import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Homepage.scss';
import '../../scss/main.scss'
// import NavBar from '../NavBar.jsx';
// import Writing from './Writing.jsx';
// import Dance from './Dance.jsx';
// import About from './About.jsx';

const Homepage = () => {

  // const [clickedLink, setClickedLink] = useState('');

  // const updateNavLink = (href) => {
  //   setClickedLink(href)
  // }

  return (
      <Container className="homepage-container">
        <Row className="homepage-row d-flex align-itemsjustify-content-center">
          <Col className="col-6 align-self-center text-center">WELCOME SECTION</Col>
        </Row>
      </Container>
      /* <section id="welcome" className="welcome-section">
        <nav>
          <NavBar />
        </nav>
        <Container className="welcome-container d-flex align-items-center justify-content-center">
          Pool of Work
        </Container>
      </section>
      <section> <Writing /> </section>
      <section> <Dance /></section>
      <section> <About /></section> */
  );
}

export default Homepage;