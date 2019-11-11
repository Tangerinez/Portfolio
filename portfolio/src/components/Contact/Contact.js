import React from "react";
import "./Contact.css";
import Form from "../Form/Form";

const Contact = props => {
  return (
    <div className="contact-container" id={props.id}>
      <div className="contact-title">Contact</div>
      <div className="flex-line-dark"></div>
      <div className="contact-small-text">
        Want to know more or even collaborate? Send me a message!
      </div>
      <Form />
    </div>
  );
};

export default Contact;
