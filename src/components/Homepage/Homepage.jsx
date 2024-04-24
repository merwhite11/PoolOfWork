import React, { useState } from 'react';
import { Col, Row, Container, Header } from 'react-bootstrap';
import './Homepage.scss';
// import '../../scss/main.scss'
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
    //hompage class here
      <Container className="d-flex text-center">
        <div className="homepage d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
            <div>
            <h3 className="float-md-start mb-0 mt-3">Meredith White</h3>
            <nav className="nav nav__masthead justify-content-center float-md-end">
              <a className="nav__link fw-bold py-1 px-0 active">Writing</a>
              <a className="nav__link fw-bold py-1 px-0">Dance</a>
              <a className="nav__link fw-bold py-1 px-0">About</a>
            </nav>
            </div>
        </header>
        <Row className="homepage-row align-itemsjustify-content-center">
          <Col className="col-6 align-self-center text-center">Pool of Work</Col>
        </Row>
        </div>
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