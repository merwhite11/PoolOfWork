import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from './NavBar.jsx';
import About from './About.jsx';
import Writing from './Writing.jsx';
import Dance from './Dance.jsx';
import Contact from './Contact.jsx';


const Homepage = () => {
  return (
    <div>
      <section id="welcome" className="welcome-section">
        <nav>
          <NavBar />
        </nav>
        <Container className="welcome-container d-flex align-items-center justify-content-center">
          Pool of Work
        </Container>
      </section>
      {/* <section> <About /></section> */}
      <section> <Writing /> </section>
      <section> <Dance /></section>
      <section> <About /></section>
    </div>
  );
}

export default Homepage;