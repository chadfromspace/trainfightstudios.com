import React, { Component } from "react";
import "./style.css";
import aboutme from "../../assets/img/aboutme.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="aboutMe">
        <h2>Chad DuBay</h2>
        <img className="aboutMe" alt="A person in blue light." src={aboutme}/><br></br><br></br>
        <h5>I'm a Full Stack Web Developer, Graphic Designer, and Game Developer from Atlanta, GA.</h5>
      </div>
    );
  }
}

export default About;