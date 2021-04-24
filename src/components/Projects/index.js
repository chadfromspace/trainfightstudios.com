import React, { Component } from "react";
import "./style.css";
import Project from "../Project";
import db from "./db.json";
import spacetime from "../../assets/img/spacetime.png";
import interactiveportfolio from "../../assets/img/interactiveportfolio.png";
import game from "../../assets/img/game.png";

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
                projects: db,
                images: [
                spacetime,
                interactiveportfolio,
                game
                ]
        };
    }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        {this.state.projects.map((a,index)=>(
          <Project key={index}
          name={a.name}
          description={a.description}
          deployedURL={a.deployedURL}
          linkText={a.linkText}
          img={this.state.images[index]}/>
         ))}
      </div>
    );
  }
}

export default Projects;