import React from "react";
import "./Footer.css";
import Icons from "../Icons/Icons";

function Footer() {
  return (
    <div className="footer-container">
      <Icons />
      <div className="info-flex-wrap">
        <div className="footer-info-container">
          Gregory Tang<span className="copyright">©2019</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
