import React from "react";
import "./ViewWorkButton.css";
import { animateScroll as scroll } from "react-scroll";
import Arrow from "../../Arrow/Arrow";

class ViewWorkButton extends React.Component {
  state = {
    projectScroll: 1880
  };

  listenScrollEvent = e => {
    if (window.innerWidth >= 450 && window.innerWidth < 500) {
      this.setState({
        projectScroll: 1788
      });
    }
    if (window.innerWidth >= 500 && window.innerWidth < 550) {
      this.setState({
        projectScroll: 1788
      });
    }
    if (window.innerWidth >= 550 && window.innerWidth < 600) {
      this.setState({
        projectScroll: 1758
      });
    }
    if (window.innerWidth >= 600 && window.innerWidth < 650) {
      this.setState({
        projectScroll: 1736
      });
    }
    if (window.innerWidth >= 650 && window.innerWidth < 700) {
      this.setState({
        projectScroll: 1724
      });
    }
    if (window.innerWidth >= 700 && window.innerWidth < 750) {
      this.setState({
        projectScroll: 1696
      });
    }
    if (window.innerWidth >= 750 && window.innerWidth < 768) {
      this.setState({
        projectScroll: 1696
      });
    }
    if (window.innerWidth >= 768 && window.innerWidth < 800) {
      this.setState({
        projectScroll: 1570
      });
    }
    if (window.innerWidth >= 800 && window.innerWidth < 825) {
      this.setState({
        projectScroll: 1570
      });
    }
    if (window.innerWidth >= 825 && window.innerWidth < 850) {
      this.setState({
        projectScroll: 1550
      });
    }
    if (window.innerWidth >= 850 && window.innerWidth < 900) {
      this.setState({
        projectScroll: 1510
      });
    }
    if (window.innerWidth >= 900 && window.innerWidth < 950) {
      this.setState({
        projectScroll: 1470
      });
    }
    if (window.innerWidth >= 950 && window.innerWidth < 1000) {
      this.setState({
        projectScroll: 1470
      });
    }
    if (window.innerWidth >= 1000 && window.innerWidth < 1024) {
      this.setState({
        projectScroll: 1470
      });
    }
    if (window.innerWidth >= 1024 && window.innerWidth < 1040) {
      this.setState({
        projectScroll: 1430
      });
    }
    if (window.innerWidth >= 1040 && window.innerWidth < 1080) {
      this.setState({
        projectScroll: 1430
      });
    }
    if (window.innerWidth >= 1080 && window.innerWidth < 1200) {
      this.setState({
        projectScroll: 1430
      });
    }
    if (window.innerWidth >= 1200 && window.innerWidth < 1250) {
      this.setState({
        projectScroll: 1410
      });
    }
    if (window.innerWidth >= 1250 && window.innerWidth < 1300) {
      this.setState({
        projectScroll: 1410
      });
    }
    if (window.innerWidth >= 1300 && window.innerWidth < 1350) {
      this.setState({
        projectScroll: 1410
      });
    }
    if (window.innerWidth >= 1350 && window.innerWidth < 1400) {
      this.setState({
        projectScroll: 1410
      });
    }
    if (window.innerWidth >= 1400 && window.innerWidth < 1450) {
      this.setState({
        projectScroll: 1410
      });
    }
    if (window.innerWidth >= 1450 && window.innerWidth < 1500) {
      this.setState({
        projectScroll: 1410
      });
    }
    if (window.innerWidth >= 1500) {
      this.setState({
        projectScroll: 1410
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <button
        className="work-btn"
        onClick={() => scroll.scrollTo(this.state.projectScroll)}
      >
        <div className="btn-container">
          <div>View my work</div>
          <div className="arrow-container">
            <Arrow />
          </div>
        </div>
      </button>
    );
  }
}

export default ViewWorkButton;
