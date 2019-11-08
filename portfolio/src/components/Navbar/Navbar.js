import React from "react";
import "./Navbar.css";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import { animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  state = {
    navBarBorderColor: "#0f2027",
    aboutScroll: 678,
    projectScroll: 1880,
    contactScroll: 2522
  };

  listenScrollEvent = e => {
    if (window.scrollY > this.state.aboutScroll - 2) {
      this.setState({ navBarBorderColor: "#00a4a6" });
    } else {
      this.setState({ navBarBorderColor: "#0f2027" });
    }
    if (window.innerWidth >= 450 && window.innerWidth < 500) {
      this.setState({
        aboutScroll: 688,
        contactScroll: 2560
      });
    }
    if (window.innerWidth >= 500 && window.innerWidth < 600) {
      this.setState({
        projectScroll: 1864,
        contactScroll: 2600
      });
    }
    if (window.innerWidth >= 600 && window.innerWidth < 700) {
      this.setState({
        projectScroll: 1814,
        contactScroll: 2650
      });
    }
    if (window.innerWidth >= 700 && window.innerWidth < 750) {
      this.setState({
        projectScroll: 1774,
        contactScroll: 2694
      });
    }
    if (window.innerWidth >= 750 && window.innerWidth < 768) {
      this.setState({
        contactScroll: 2710
      });
    }
    if (window.innerWidth >= 768 && window.innerWidth < 800) {
      this.setState({
        aboutScroll: 670,
        projectScroll: 1690,
        contactScroll: 2650
      });
    }
    if (window.innerWidth >= 800 && window.innerWidth < 825) {
      this.setState({
        aboutScroll: 668,
        projectScroll: 1648,
        contactScroll: 2512
      });
    }
    if (window.innerWidth >= 825 && window.innerWidth < 850) {
      this.setState({
        projectScroll: 1596
      });
    }
    if (window.innerWidth >= 850 && window.innerWidth < 90) {
      this.setState({
        projectScroll: 1590
      });
    }
    if (window.innerWidth >= 900 && window.innerWidth < 950) {
      this.setState({
        projectScroll: 1548,
        contactScroll: 2490
      });
    }
    if (window.innerWidth >= 950 && window.innerWidth < 1000) {
      this.setState({
        contactScroll: 2530
      });
    }
    if (window.innerWidth >= 1000 && window.innerWidth < 1040) {
      this.setState({
        contactScroll: 2554
      });
    }
    if (window.innerWidth >= 1040 && window.innerWidth < 1080) {
      this.setState({
        projectScroll: 1510,
        contactScroll: 2560
      });
    }
    if (window.innerWidth >= 1080 && window.innerWidth < 1140) {
      this.setState({
        contactScroll: 2200
      });
    }
    if (window.innerWidth >= 1140 && window.innerWidth < 1200) {
      this.setState({
        contactScroll: 2224
      });
    }
    if (window.innerWidth >= 1200 && window.innerWidth < 1250) {
      this.setState({
        projectScroll: 1490,
        contactScroll: 2230
      });
    }
    if (window.innerWidth >= 1250 && window.innerWidth < 1300) {
      this.setState({
        contactScroll: 2250
      });
    }
    if (window.innerWidth >= 1300 && window.innerWidth < 1350) {
      this.setState({
        contactScroll: 2264
      });
    }
    if (window.innerWidth >= 1350 && window.innerWidth < 1400) {
      this.setState({
        contactScroll: 2284
      });
    }
    if (window.innerWidth >= 1400 && window.innerWidth < 1450) {
      this.setState({
        contactScroll: 2300
      });
    }
    if (window.innerWidth >= 1450 && window.innerWidth < 1500) {
      this.setState({
        contactScroll: 2320
      });
    }
    if (window.innerWidth >= 1500) {
      this.setState({
        contactScroll: 2340
      });
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
          onClick={() => scroll.scrollTo(this.state.aboutScroll)}
        >
          About
        </div>
        <div
          className="category navbar-projects"
          onClick={() => scroll.scrollTo(this.state.projectScroll)}
        >
          Projects
        </div>
        <div
          className="category navbar-contact"
          onClick={() => scroll.scrollTo(this.state.contactScroll)}
        >
          Contact
        </div>
        <ResumeDownload />
      </div>
    );
  }
}

export default Navbar;
