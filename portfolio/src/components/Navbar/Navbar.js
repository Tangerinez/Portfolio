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
        onClick={() => scroll.scrollTo(718)}
      >
        About
      </div>
      <div
        className="category navbar-projects"
        onClick={() => scroll.scrollTo(1702)}
      >
        Portfolio
      </div>
    </div>
  );
}

export default Navbar;
