import React from "react";
import Ghost from "../Ghost/Ghost";
import IntroText from "../IntroText/IntroText";
import ViewWorkButton from "../Buttons/ViewWorkButton/ViewWorkButton";
import ResumeDownloadButton from "../Buttons/ResumeDownloadButton/ResumeDownloadButton";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="left-container">
          <IntroText />
          <ViewWorkButton />
          <ResumeDownloadButton />
        </div>
        <Ghost />
      </div>
    </div>
  );
}

export default Banner;
