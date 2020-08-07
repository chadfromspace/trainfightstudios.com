import React, { Component } from "react";
import "./style.css";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="aboutMe">
        <figure>
        <img className="aboutMe" alt="A person in blue light." src={"./assets/img/aboutme.png"}/><br></br><br></br>
        <h5>I'm a Full Stack Web Developer, Graphic Designer, and Game Developer from Atlanta, GA</h5>
        </figure>
      </div>
    );
  }
}

export default About;