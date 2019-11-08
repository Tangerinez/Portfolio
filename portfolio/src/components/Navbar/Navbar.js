import React from "react";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="category navbar-home" onClick={() => scroll.scrollTo(0)}>
        Home
      </div>
      <div
        className="category navbar-about"
        onClick={() => scroll.scrollTo(686)}
      >
        About
      </div>
      <div
        className="category navbar-projects"
        onClick={() => scroll.scrollTo(1568)}
      >
        Projects
      </div>
      <div
        className="category navbar-contact"
        onClick={() => scroll.scrollTo(2834)}
      >
        Contact
      </div>
    </div>
  );
}

export default Navbar;
