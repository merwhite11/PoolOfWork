import React, { useState } from "react";
import { Col, Row, Container, Header } from "react-bootstrap";
import "./Homepage.scss";
import NavBar from '../../components/NavBar/NavBar.jsx';
import Writing from '../../components/Writing/Writing.jsx';
import Dance from '../../components/Dance/Dance.jsx'
import About from '../../components/About/About.jsx'


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
        <NavBar/>
        <main role="main" className="cover__header-container d-flex align-items-center justify-content-center">
          <h1 className="display-1 cover__header">Pool of Work</h1>
        </main>
      </div>
    </section>
    <section className="content d-flex my-5 flex-column">
    <Writing></Writing>
    {/* <Dance></Dance> */}
    </section>
    <About></About>
    </div>
  );
};

export default Homepage;
