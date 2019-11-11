import React from "react";
import "./ViewWorkButton.css";
import Arrow from "../../Arrow/Arrow";
import { Link, animateScroll as scroll } from "react-scroll";

class ViewWorkButton extends React.Component {
  render() {
    return (
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-60}
      >
        <button
          className="work-btn"
          onClick={() => scroll.scrollTo("section3")}
        >
          <div className="btn-container">
            <div>View my work</div>
            <div className="arrow-container">
              <Arrow />
            </div>
          </div>
        </button>
      </Link>
    );
  }
}

export default ViewWorkButton;
