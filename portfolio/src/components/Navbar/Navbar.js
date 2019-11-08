import React from "react";
import "./Navbar.css";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import { animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  state = {
    navBarBorderColor: "#0f2027"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 606) {
      this.setState({ navBarBorderColor: "#00a4a6" });
    } else {
      this.setState({ navBarBorderColor: "#0f2027" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div
        className="navbar-container"
        style={{ borderBottom: `3px solid ${this.state.navBarBorderColor}` }}
      >
        <div
          className="category navbar-home"
          onClick={() => scroll.scrollTo(0)}
        >
          Home
        </div>
        <div
          className="category navbar-about"
          onClick={() => scroll.scrollTo(610)}
        >
          About
        </div>
        <div
          className="category navbar-projects"
          onClick={() => scroll.scrollTo(1450)}
        >
          Projects
        </div>
        <div
          className="category navbar-contact"
          onClick={() => scroll.scrollTo(2738)}
        >
          Contact
        </div>
        <ResumeDownload />
      </div>
    );
  }
}

export default Navbar;
