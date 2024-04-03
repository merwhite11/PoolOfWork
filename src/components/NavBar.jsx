import React, {useState} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {


  return (
    <Navbar className="nav-bar" data-bs-theme="light">
    <Container>
      <Nav>
        <Navbar.Brand href="#welcome">Home</Navbar.Brand>
        </Nav>
        <Nav>
        <Nav.Link className="nav-bar" href="#writing">Writing</Nav.Link>
        <Nav.Link className="nav-bar" href="#dance">Dance</Nav.Link>
        <Nav.Link className="nav-bar" href="#about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default NavBar;