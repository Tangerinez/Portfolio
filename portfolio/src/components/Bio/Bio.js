import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <div className="bio-container">
      <div className="bio-content1">
        I am a software engineer and frontend developer who has a passion for
        creating easy to use, intuitive UX/UI.
      </div>
      <div className="bio-content2">
        Currently, I work as a software engineer in San Mateo for a startup
        called Wavely. There, I work on the full frontend development process
        for many of our pages, which involves collaborating with designers and
        product managers to create the best user experiences.
      </div>
      <div className="bio-content2">
        Aside from coding, I enjoy exercising, exploring and writing reviews
        about new restaurants, playing computer games, and spending time with my
        friends, family, and girlfriend. Below is a picture of my girlfriend and
        I on a random hill in the Dogpatch district of San Francisco - we had
        just finished a day of dog walking!
      </div>
    </div>
  );
}

export default Bio;
