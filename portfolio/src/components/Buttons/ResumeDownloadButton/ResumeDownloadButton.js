import React from "react";
import "./ResumeDownloadButton.css";

function ResumeDownloadButton() {
  return (
    <a href="./gregory-tang-resume.pdf" target="_blank" className="resume-href">
      <button className="resume-download-button">
        <div className="resume-download-container">Resume</div>
      </button>
    </a>
  );
}

export default ResumeDownloadButton;
