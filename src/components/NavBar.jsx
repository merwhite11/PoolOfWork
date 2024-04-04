import React, {useState} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {


  return (
    <Navbar className="nav-bar py-0" data-bs-theme="light">
    <Container>
      <Nav>
        <Navbar.Brand href="#welcome">Home</Navbar.Brand>
        </Nav>
        <Nav>
        <Nav.Link className="ml-3" href="#writing">Writing</Nav.Link>
        <Nav.Link className="ml-3 mr-3" href="#dance">Dance</Nav.Link>
        <Nav.Link className="ml-3" href="#about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default NavBar;