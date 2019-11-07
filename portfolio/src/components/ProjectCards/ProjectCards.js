import React from "react";
import "./ProjectCards.css";

const ProjectCard = props => {
  return (
    <div className="each-card-wrap">
      <img src={props.imgURL} alt={props.alt} className="project-img"></img>
    </div>
  );
};

export default ProjectCard;
