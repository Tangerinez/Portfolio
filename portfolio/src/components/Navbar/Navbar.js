import React from "react";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-container">
      <div
        className="category navbar-home"
        // onClick={() => scroll.scrollTo(500)}
      >
        Home
      </div>
      <div
        className="category navbar-about"
        // onClick={() => scroll.scrollTo(500)}
      >
        About
      </div>
      <div
        className="category navbar-projects"
        // onClick={() => scroll.scrollTo(500)}
      >
        Projects
      </div>
    </div>
  );
}

export default Navbar;
