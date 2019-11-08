import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCards/ProjectCards";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-text">Projects</div>
      <div className="flex-line-white"></div>
      <div className="card-container">
        <ProjectCard imgURL="./wavely-about-page.png" alt="wavely-about-page" />
        <ProjectCard imgURL="./locals.png" alt="locals" />
        <ProjectCard imgURL="./tranquil.png" alt="tranquil" />
        <ProjectCard imgURL="./react-chatroom.png" alt="react-chatroom" />
        <ProjectCard imgURL="./clicky-game.png" alt="clicky-game" />
        <ProjectCard imgURL="./swolemates.png" alt="swolemates" />
        <ProjectCard imgURL="./friend-finder.png" alt="friend-finder" />
        <ProjectCard imgURL="./shopping-cart.png" alt="shopping-cart" />
      </div>
    </div>
  );
}

export default Projects;
