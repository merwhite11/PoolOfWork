import React, { useState } from "react";
import { Col, Row, Container, Header } from "react-bootstrap";
import "./Homepage.scss";
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
          <div className="mt-md-3">
            <h3 className="float-md-start mb-0">Meredith White</h3>
            <nav className="justify-content-center float-md-end">
              <a className="nav__link fw-bold py-1 px-0">Writing</a>
              <a className="nav__link fw-bold py-1 px-0">Dance</a>
              <a className="nav__link fw-bold py-1 px-0">About</a>
            </nav>
          </div>
        </header>
        <main className="cover">
          <h1 className="title">Pool of Work</h1>
        </main>
      </div>
    </Container>
  );
};

export default Homepage;
