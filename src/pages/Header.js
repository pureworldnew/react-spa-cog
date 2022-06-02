import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  let myStyle = {
    textDecoration: "none",
  };

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              width="100"
              height="100"
            />
          </Navbar.Brand>
          <Nav className="mr-auto nav-wrapper">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="addstudent" className="nav-item">
              Add Student
            </NavLink>
            <NavLink to="addstudent" className="nav-item">
              About Us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
