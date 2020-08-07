import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>
          I prefer to be contacted via LinkedIn.
         <a href="https://www.linkedin.com/in/chad-dubay-a17a501aa/">LinkedIn</a>
         <a href="chadfromspace.github.com">GitHub</a>
        </p>
      </div>
    );
  }
}

export default Contact;