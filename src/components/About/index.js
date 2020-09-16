import React, { Component } from "react";
import "./style.css";
import aboutme from "../../assets/img/aboutme.png";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="aboutMe container">
        <h2>Chad DuBay</h2>
        <img className="aboutMe" alt="A person in blue light." src={aboutme}/><br></br><br></br>
        <h5 className="col-6">
        I'm a Full Stack Web Developer, Graphic Designer, and Game Developer from Atlanta, GA.
        This portfolio was coded with React. Be sure to check out my&nbsp;
        <a href="https://chadfromspace.github.io/InteractivePortfolio">Interactive Portfolio</a>&nbsp;that was coded with C# using Unity.
        (The Unity Web Application does not currently support mobile.)
        </h5>
      </div>
    );
  }
}

export default About;