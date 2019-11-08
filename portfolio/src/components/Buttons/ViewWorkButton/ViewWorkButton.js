import React from "react";
import "./ViewWorkButton.css";
import { animateScroll as scroll } from "react-scroll";
import Arrow from "../../Arrow/Arrow";

function ViewWorkButton() {
  return (
    <button className="work-btn" onClick={() => scroll.scrollTo(1568)}>
      <div className="btn-container">
        <div>View my work</div>
        <div className="arrow-container">
          <Arrow />
        </div>
      </div>
    </button>
  );
}

export default ViewWorkButton;
