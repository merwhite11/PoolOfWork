import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (event, targetSection) => {
    event.preventDefault();
    navigate('/', { state: { targetSection } });
  };

  return (

    <header className="cover__navbar mb-auto">
    <div className="mt-md-3">
      <h3 className="float-md-start mb-0" href="welcome" onClick={(e) => handleNavigation(e, 'welcome-section')}>Meredith White</h3>
      <nav className="justify-content-center float-md-end">
        <a className="cover__navbar-link fw-bold py-1 px-0" href="#writing-section" onClick={(e) => handleNavigation(e, 'writing-section')}>Writing</a>
        <a className="cover__navbar-link fw-bold py-1 px-0" href="#dance-section" onClick={(e) => handleNavigation(e, 'dance-section')}>Dance</a>
        <a className="cover__navbar-link fw-bold py-1 px-0" href="#about-section" onClick={(e) => handleNavigation(e, 'about-section')}>About</a>
      </nav>
    </div>
  </header>
    );
}

export default NavBar;