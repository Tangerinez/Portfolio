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
        aboutScroll: 600,
        projectScroll: 1788,
        contactScroll: 2490
      });
    }
    if (window.innerWidth >= 500 && window.innerWidth < 550) {
      this.setState({
        aboutScroll: 600,
        projectScroll: 1788,
        contactScroll: 2524
      });
    }
    if (window.innerWidth >= 550 && window.innerWidth < 600) {
      this.setState({
        aboutScroll: 600,
        projectScroll: 1758,
        contactScroll: 2524
      });
    }
    if (window.innerWidth >= 600 && window.innerWidth < 650) {
      this.setState({
        aboutScroll: 600,
        projectScroll: 1736,
        contactScroll: 2560
      });
    }
    if (window.innerWidth >= 650 && window.innerWidth < 700) {
      this.setState({
        aboutScroll: 600,
        projectScroll: 1724,
        contactScroll: 2580
      });
    }
    if (window.innerWidth >= 700 && window.innerWidth < 750) {
      this.setState({
        aboutScroll: 600,
        projectScroll: 1696,
        contactScroll: 2610
      });
    }
    if (window.innerWidth >= 750 && window.innerWidth < 768) {
      this.setState({
        aboutScroll: 600,
        projectScroll: 1696,
        contactScroll: 2630
      });
    }
    if (window.innerWidth >= 768 && window.innerWidth < 800) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1570,
        contactScroll: 2540
      });
    }
    if (window.innerWidth >= 800 && window.innerWidth < 825) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1570,
        contactScroll: 2450
      });
    }
    if (window.innerWidth >= 825 && window.innerWidth < 850) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1550,
        contactScroll: 2450
      });
    }
    if (window.innerWidth >= 850 && window.innerWidth < 900) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1510,
        contactScroll: 2410
      });
    }
    if (window.innerWidth >= 900 && window.innerWidth < 950) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1470,
        contactScroll: 2430
      });
    }
    if (window.innerWidth >= 950 && window.innerWidth < 1000) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1470,
        contactScroll: 2460
      });
    }
    if (window.innerWidth >= 1000 && window.innerWidth < 1024) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1470,
        contactScroll: 2494
      });
    }
    if (window.innerWidth >= 1024 && window.innerWidth < 1040) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1430,
        contactScroll: 2472
      });
    }
    if (window.innerWidth >= 1040 && window.innerWidth < 1080) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1430,
        contactScroll: 2490
      });
    }
    if (window.innerWidth >= 1080 && window.innerWidth < 1200) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1430,
        contactScroll: 2150
      });
    }
    if (window.innerWidth >= 1200 && window.innerWidth < 1250) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2166
      });
    }
    if (window.innerWidth >= 1250 && window.innerWidth < 1300) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2180
      });
    }
    if (window.innerWidth >= 1300 && window.innerWidth < 1350) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2196
      });
    }
    if (window.innerWidth >= 1350 && window.innerWidth < 1400) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2210
      });
    }
    if (window.innerWidth >= 1400 && window.innerWidth < 1450) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2232
      });
    }
    if (window.innerWidth >= 1450 && window.innerWidth < 1500) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2250
      });
    }
    if (window.innerWidth >= 1500) {
      this.setState({
        aboutScroll: 592,
        projectScroll: 1410,
        contactScroll: 2290
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
