import React, {useState} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {


  return (

    <header className="cover__navbar mb-auto">
    <div className="mt-md-3">
      <h3 className="float-md-start mb-0" href="welcome">Meredith White</h3>
      <nav className="justify-content-center float-md-end">
        <a className="cover__navbar-link fw-bold py-1 px-0" href="#writing-section">Writing</a>
        <a className="cover__navbar-link fw-bold py-1 px-0" href="#dance-section">Dance</a>
        <a className="cover__navbar-link fw-bold py-1 px-0" href="#about-section">About</a>
      </nav>
    </div>
  </header>
    );
}

export default NavBar;