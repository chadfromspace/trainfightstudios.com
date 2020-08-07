import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>I prefer to be contacted via LinkedIn.</p>
        <br></br>
        <p><a href="https://www.linkedin.com/in/chad-dubay-a17a501aa/">LinkedIn</a><br></br></p>
        <p><a href="chadfromspace.github.com">GitHub</a></p>
      </div>
    );
  }
}

export default Contact;