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
    width="60%"
    // centerMode={true}
  >
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
    </div>
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
    </div>
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
    </div>
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
    </div>
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
    </div>
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
    </div>
    <div className="img-container">
      <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
    </div>
  </Carousel>
);
