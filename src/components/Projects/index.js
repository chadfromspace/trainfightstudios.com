import React, { Component } from "react";
import "./style.css";
import Project from "../Project";
import db from "./db.json";
import interactiveportfolio from "../../assets/img/interactiveportfolio.png";
import aboutme from "../../assets/img/aboutme.png";
import game from "../../assets/img/game.png";
import bruhub from "../../assets/img/bruHub.png";
import flexcity from "../../assets/img/flexCity.png";

class Projects extends Component {
  state = {
   projects: db,
   images: [interactiveportfolio,
   aboutme,
   game,
   bruhub,
   flexcity
   ]
   };

  render() {
    return (
      <div>
        <h1>Projects</h1>
        {this.state.projects.map((a,index)=>(
          <Project key={index}
          name={a.name}
          description={a.description}
          deployedURL={a.deployedURL}
          repositoryURL={a.repositoryURL}
          img={this.state.images[index]}/>
         ))}
      </div>
    );
  }
}

export default Projects;