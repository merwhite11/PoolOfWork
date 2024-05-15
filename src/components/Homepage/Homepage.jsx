import React, { useState } from "react";
import { Col, Row, Container, Header } from "react-bootstrap";
import "./Homepage.scss";
import Writing from '../Writing/Writing.jsx';
// import Dance from '../Dance/Dance.jsx';
import Dance from '../Dance/Dance2.jsx'
import About from '../About/About.jsx'
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
    <div className="outer">

    <section className="cover text-center">
      <div className="cover__container d-flex w-100 p-3 mx-auto flex-column">
        <header className="cover__navbar mb-auto">
          <div className="mt-md-3">
            <h3 className="float-md-start mb-0">Meredith White</h3>
            <nav className="justify-content-center float-md-end">
              <a className="cover__navbar-link fw-bold py-1 px-0">Writing</a>
              <a className="cover__navbar-link fw-bold py-1 px-0">Dance</a>
              <a className="cover__navbar-link fw-bold py-1 px-0">About</a>
            </nav>
          </div>
        </header>
        <main role="main" className="cover__header-container d-flex align-items-center justify-content-center">
          <h1 className="display-1 cover__header">Pool of Work</h1>
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
