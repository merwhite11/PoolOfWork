import React, {useState} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {


  return (
    <Navbar className="nav-bar py-0" data-bs-theme="light">
    <Container className="nav-content">
      <Nav>
        <Navbar.Brand className="nav-brand" href="#welcome">Meredith White</Navbar.Brand>
        </Nav>
        <Nav>
        <Nav.Link className="nav-link" href="#writing">Writing</Nav.Link>
        <Nav.Link className="nav-link" href="#dance">Dance</Nav.Link>
        <Nav.Link className="nav-link" href="#about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default NavBar;