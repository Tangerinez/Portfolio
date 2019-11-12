import React from "react";
import "./Navbar.css";
// import ResumeDownload from "../ResumeDownload/ResumeDownload";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  state = {
    navBarBorderColor: "#0f2027"
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  listenScrollEvent = e => {
    if (window.scrollY > 628) {
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
        <div className="category navbar-home" onClick={this.scrollToTop}>
          Home
        </div>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-60}
        >
          <div
            className="category navbar-about"
            onClick={() => scroll.scrollTo("section2")}
          >
            About
          </div>
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-60}
        >
          <div
            className="category navbar-projects"
            onClick={() => scroll.scrollTo("section3")}
          >
            Projects
          </div>
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-60}
        >
          <div
            className="category navbar-contact"
            onClick={() => scroll.scrollTo("section4")}
          >
            Contact
          </div>
        </Link>
        {/* <ResumeDownload /> */}
      </div>
    );
  }
}

export default Navbar;
