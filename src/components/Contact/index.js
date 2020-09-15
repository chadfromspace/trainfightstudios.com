import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>I prefer to be contacted via LinkedIn.</h2>
        <br></br>
        <p><a href="https://www.linkedin.com/in/chad-dubay-a17a501aa/">LinkedIn</a><br></br></p>
        <p><a href="chadfromspace.github.com">GitHub</a></p>
      </div>
    );
  }
}

export default Contact;