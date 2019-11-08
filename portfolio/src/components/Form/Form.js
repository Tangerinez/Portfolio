import React from "react";
import "./Form.css";

function validateName(name) {
  const nameErrors = [];
  if (name.length === 0) {
    nameErrors.push("Name can't be empty!");
  }
  return nameErrors;
}

function validateEmail(email) {
  const emailErrors = [];
  if (email.length < 5) {
    emailErrors.push("Email should be at least 5 characters long!");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    emailErrors.push("Email should contain a @!");
  }
  if (email.indexOf(".com") === -1) {
    emailErrors.push("Email should contain .com!");
  }
  return emailErrors;
}

function validateMessage(message) {
  const messageErrors = [];
  if (message.length < 1) {
    messageErrors.push("Type a message!");
  }
  return messageErrors;
}

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameErrors: [],
    emailErrors: [],
    messageErrors: []
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;
    const nameErrors = validateName(name);
    const emailErrors = validateEmail(email);
    const messageErrors = validateMessage(message);

    if (nameErrors.length > 0) {
      this.setState({ nameErrors });
    } else {
      this.setState({ nameErrors: [] });
    }
    if (emailErrors.length > 0) {
      this.setState({ emailErrors });
    } else {
      this.setState({ emailErrors: [] });
    }
    if (messageErrors.length > 0) {
      this.setState({ messageErrors });
    } else {
      this.setState({ messageErrors: [] });
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    const { nameErrors, emailErrors, messageErrors } = this.state;
    return (
      <form
        className="form-container"
        onSubmit={this.handleSubmit}
        action="gtang159@gmail.com"
      >
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={evt => this.setState({ name: evt.target.value })}
          formNoValidate
        />
        <div className="error-message">{nameErrors}</div>
        <input
          placeholder="Enter email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })}
          formNoValidate
        />
        {emailErrors.map(error => (
          <div key={error} className="error-message">
            {error}
          </div>
        ))}
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
          value={this.state.message}
          onChange={evt => this.setState({ message: evt.target.value })}
        />
        <div className="error-message">{messageErrors}</div>
        <input className="form-button" type="submit" value="SUBMIT"></input>
      </form>
    );
  }
}

export default Form;
