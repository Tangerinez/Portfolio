import React from "react";
import "./ProjectCards.css";

class ProjectCard extends React.Component {
  render() {
    let sourceButton;
    let appButton;
    if (this.props.sourceURL) {
      sourceButton = (
        <a href={this.props.sourceURL}>
          <button className="source-code-button">Source Code</button>
        </a>
      );
    }
    if (this.props.appURL) {
      appButton = (
        <a href={this.props.appURL}>
          <button className="app-button">Application</button>
        </a>
      );
    } else {
      appButton = (
        <a href="#">
          <button className="app-button">Demo</button>
        </a>
      );
    }
    return (
      <div className="each-card-wrap">
        <img
          src={this.props.imgURL}
          alt={this.props.alt}
          className="project-img"
          id={this.props.id}
        ></img>
        <div className="text">
          <div className="card-title">{this.props.cardTitle}</div>
          <div className="project-description">{this.props.description}</div>
          <div className="btn-container2">
            {appButton}
            {sourceButton}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
