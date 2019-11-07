import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel
    infiniteLoop={true}
    autoPlay={true}
    stopOnHover={false}
    showStatus={false}
    showIndicators={false}
    showArrows={false}
    showThumbs={false}
    centerMode={true}
    centerSlidePercentage="60"
    transitionTime="1000"
    useKeyboardArrows={true}
  >
    <div className="img-container">
      <img src={require("../images/react.png")} alt="react" />
    </div>
    <div className="img-container">
      <img src={require("../images/redux.png")} alt="redux" />
    </div>
    <div className="img-container">
      <img src={require("../images/vue.png")} alt="vue" />
    </div>
    <div className="img-container">
      <img src={require("../images/html.png")} alt="html" />
    </div>
    <div className="img-container">
      <img src={require("../images/css.png")} alt="css" />
    </div>
    <div className="img-container">
      <img src={require("../images/node.png")} alt="node" />
    </div>
    <div className="img-container">
      <img src={require("../images/jest.png")} alt="jest" />
    </div>
    <div className="img-container">
      <img src={require("../images/mongodb.png")} alt="mongodb" />
    </div>
    <div className="img-container">
      <img src={require("../images/mysql.png")} alt="mysql" />
    </div>
  </Carousel>
);
