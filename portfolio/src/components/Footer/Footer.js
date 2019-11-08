import React from "react";
import "./Footer.css";
import Chevron from "../Chevron/Chevron";
import Icons from "../Icons/Icons";

function Footer() {
  return (
    <div className="footer-container">
      <Chevron />
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
