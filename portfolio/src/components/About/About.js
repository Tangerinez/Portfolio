import React from "react";
import Bio from "../Bio/Bio";
import Carousel from "../Carousel/Carousel";
import "./About.css";

class About extends React.Component {
  state = {
    imgURL: "./profile-photo1.png"
  };

  // onHover = () => {
  //   this.setState({ imgURL: "./profile-photo2.png" });
  // };

  // onLeave = () => {
  //   this.setState({ imgURL: "./profile-photo1.png" });
  // };

  render() {
    return (
      <div className="about-container">
        <div className="about-text" id="about">
          About
        </div>
        <div className="flex-line"></div>
        <div className="about-content">
          <Bio />
          <div className="profile-photo-container">
            <img
              src={this.state.imgURL}
              className="profile-img"
              alt="profile-img"
              // onMouseOver={this.onHover}
              // onMouseLeave={this.onLeave}
            ></img>
          </div>
        </div>
        <div className="carousel-container">
          <div className="stack-text">
            My interests lie strongly in using React.js and Vue.js along with
            HTML5, CSS3, and related technologies to create seamless client-side
            experiences for all individuals.
          </div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default About;
