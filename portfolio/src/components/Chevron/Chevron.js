import React from "react";
import "./Chevron.css";
import { animateScroll as scroll } from "react-scroll";

function Chevron() {
  return (
    <div className="chevron-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        x="0px"
        y="0px"
        className="chevron"
        fill="#f9f9fc"
        onClick={() => scroll.scrollTo(0)}
      >
        <path d="M17,13a1,1,0,0,1-.71-.29L12,8.41,7.71,12.71a1,1,0,0,1-1.41-1.41l5-5a1,1,0,0,1,1.41,0l5,5A1,1,0,0,1,17,13Z" />
        <path d="M17,18a1,1,0,0,1-.71-.29L12,13.41,7.71,17.71a1,1,0,0,1-1.41-1.41l5-5a1,1,0,0,1,1.41,0l5,5A1,1,0,0,1,17,18Z" />
      </svg>
    </div>
  );
}

export default Chevron;
