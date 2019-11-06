import React from "react";
import Bio from "../Bio/Bio";
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
        <div className="about-text">About</div>
        <div className="flex-line"></div>
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
    );
  }
}

export default About;
