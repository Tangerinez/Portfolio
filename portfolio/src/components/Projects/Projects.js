import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCards/ProjectCards";

const Projects = props => {
  return (
    <div className="projects-container" id={props.id}>
      <div className="projects-text">Projects</div>
      <div className="flex-line-white"></div>
      <div className="card-container">
        <ProjectCard
          imgURL="./wavely-about-page.png"
          alt="wavely-about-page"
          cardTitle="Wavely About Page"
          description="React + HTML5 + CSS3 + Node.js"
          sourceURL="https://github.com/gregtang1234?tab=repositories"
          appURL="https://about.wavely.com/"
        />
        <ProjectCard
          imgURL="./locals.png"
          alt="locals"
          cardTitle="Locals"
          description="React.js + HTML + CSS + Node.js/Express.js + MongoDB"
          sourceURL="https://github.com/Tangerinez/Locals"
          appURL="http://fathomless-bastion-86766.herokuapp.com"
        />
        <ProjectCard
          imgURL="./clicky-game.png"
          alt="clicky-game"
          cardTitle="Clicky Game"
          description="React.js + HTML + CSS/Bootstrap"
          sourceURL="https://github.com/Tangerinez/ReactMemoryGame"
          demoURL="memory-game.mov"
        />
        <ProjectCard
          imgURL="./swolemates.png"
          alt="swolemates"
          cardTitle="Swolemates"
          description="Vanilla.js/JQuery + HTML + CSS/Bootstrap + Firestore"
          sourceURL="https://github.com/Tangerinez/Swolemates.io"
          appURL="https://tangerinez.github.io/Swolemates.io/"
        />
        <ProjectCard
          imgURL="./tranquil.png"
          alt="tranquil"
          cardTitle="Tranquil"
          description="Vanilla.js + HTML + CSS/Materialize + Node.js/Express.js + SQL"
          sourceURL="https://github.com/Tangerinez/TranquiL"
          appURL="https://rugged-gunnison-25361.herokuapp.com/"
        />
        <ProjectCard
          imgURL="./react-chatroom.png"
          alt="react-chatroom"
          cardTitle="React Chatroom"
          description="React.js + HTML + CSS + Node.js + Pusher ChatKit API"
          sourceURL="https://github.com/Tangerinez/React-Chat-App"
          demoURL="chatroom-demo.mov"
        />
        {/* <ProjectCard
          imgURL="./shopping-cart.png"
          alt="shopping-cart"
          id="shopping-cart"
          cardTitle="Vue Shopping Cart"
          description="Vue.js + HTML + CSS + Node.js"
          sourceURL="https://github.com/Tangerinez/Vue-Shopping-Cart"
          demoURL="shopping-cart.mov"
        />
        <ProjectCard
          imgURL="./friend-finder.png"
          alt="friend-finder"
          id="friend-finder"
          cardTitle="Friend Finder"
          description="Vanilla.js + HTML + CSS + Node.js/Express.js"
          sourceURL="https://github.com/Tangerinez/FriendFinder"
          demoURL="friend-finder.mov"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
