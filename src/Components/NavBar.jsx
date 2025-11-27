import React from "react";
import "../styles/navbar.css";
import icon from "../assets/icon2.png";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    // <div id="navbar" className="navbar">
    //   <div>
    //     <img className="icon_img" src={icon} alt="icon" />
    //     <h1>MacArEna lOpEz</h1>
    //   </div>
    //   <ul>
    //     <li>
    //       <a href="#hero">Home</a>
    //     </li>
    //     <li>
    //       <a href="#skills">Skills</a>
    //     </li>
    //     <li>
    //       <a href="#projects">Projects</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Contact</a>
    //     </li>
    //   </ul>
    // </div>
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        {/* Left branding */}
        <Navbar.Brand
          href="#hero"
          className="d-flex align-items-center flex-nowrap"
        >
          <img
            className="d-none d-md-block"
            src={icon}
            alt="icon"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <h1 style={{ fontSize: "1.4rem", margin: 0 }}>MacArEna lOpEz</h1>
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle aria-controls="main-navbar" className="flex-shrink-0" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
