import React from "react";
import "./Form.css";

function validate(name, email, message) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  if (message.length < 8) {
    errors.push("Password should be at least 6 characters long");
  }

  return errors;
}

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: []
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;
    const errors = validate(name, email, message);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form
        className="form-container"
        onSubmit={this.handleSubmit}
        action="gtang159@gmail.com"
      >
        {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={evt => this.setState({ name: evt.target.value })}
        />

        <input
          placeholder="Enter email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })}
        />

        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
          value={this.state.message}
          onChange={evt => this.setState({ password: evt.target.value })}
        />

        <input className="form-button" type="submit" value="SUBMIT"></input>
      </form>
    );
  }
}

export default Form;
