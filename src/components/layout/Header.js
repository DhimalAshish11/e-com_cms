import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Link href="/" className="navbar-brand">
          E-commerce Store
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Sign In
            </Link>
            <Link to="/new-admin" className="nav-link">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
