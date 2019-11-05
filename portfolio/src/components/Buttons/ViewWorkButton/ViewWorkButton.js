import React from "react";
import "./ViewWorkButton.css";
import Arrow from "../../Arrow/Arrow";

function ViewWorkButton() {
  return (
    <button className="work-btn">
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
