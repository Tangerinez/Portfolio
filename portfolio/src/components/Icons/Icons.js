import React from "react";
import "./Icons.css";

function Icon() {
  return (
    <div className="social-media-logos">
      <a href="https://www.facebook.com/gregory.tang.73">
        <img
          src={require("../images/facebook-logo.png")}
          alt="facebook-logo"
          className="social-media-img facebook-logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/gregory-tang-041127153/">
        <img
          src={require("../images/linkedin-logo.png")}
          alt="linkedin-logo"
          className="social-media-img twitter-logo"
        />
      </a>
      <a href="https://github.com/Tangerinez">
        <img
          src={require("../images/github-logo.png")}
          alt="github-logo"
          className="social-media-img github-logo"
        />
      </a>
    </div>
  );
}
export default Icon;
