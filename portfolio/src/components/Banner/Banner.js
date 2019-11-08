import React from "react";
import Ghost from "../Ghost/Ghost";
import IntroText from "../IntroText/IntroText";
import ViewWorkButton from "../Buttons/ViewWorkButton/ViewWorkButton";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="left-container">
          <IntroText />
          <ViewWorkButton />
        </div>
        <Ghost />
      </div>
      {/* <Icons /> */}
    </div>
  );
}

export default Banner;
