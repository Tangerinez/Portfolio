import React from "react";
import "./ResumeDownloadButton.css";

function ResumeDownloadButton() {
  return (
    <a href="./gregory-tang-resume.png" download className="resume-href">
      <button className="resume-download-button">
        <div className="resume-download-container">
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 30"
            x="0px"
            y="0px"
            fill="#f7f7ff"
            className="download"
          >
            <path
              fillRule="evenodd"
              d="M22,16 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,16 L4,16 L4,20 L20,20 L20,16 L22,16 Z M13,12.5857864 L16.2928932,9.29289322 L17.7071068,10.7071068 L12,16.4142136 L6.29289322,10.7071068 L7.70710678,9.29289322 L11,12.5857864 L11,2 L13,2 L13,12.5857864 Z"
            />
          </svg>
        </div>
      </button>
    </a>
  );
}

export default ResumeDownloadButton;
