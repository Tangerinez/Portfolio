import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="category navbar-home">Home</div>
      <div className="category navbar-about">About</div>
      <div className="category navbar-projects">Projects</div>
    </div>
  );
}

export default Navbar;
