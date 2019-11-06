import React from "react";
import Ghost from "../Ghost/Ghost";
import IntroText from "../IntroText/IntroText";
import ViewWorkButton from "../Buttons/ViewWorkButton/ViewWorkButton";
import Navbar from "../Navbar/Navbar";
import Icons from "../Icons/Icons";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <Navbar />
      <div className="banner-content">
        <div className="left-container">
          <IntroText />
          <ViewWorkButton />
        </div>
        <Ghost />
        {/* <Icons /> */}
      </div>
      <Icons />
    </div>
  );
}

export default Banner;
