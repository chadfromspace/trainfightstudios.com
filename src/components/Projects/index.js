import React, { Component } from "react";
import "./style.css";
import Project from "../Project";
import db from "./db.json";

class Projects extends Component {
  state = {
   projects: db
   };

  render() {
    return (
      <div>
        {this.state.projects.map((a,index)=>(
            <Project key={index}
                name={a.name}
                description={a.description}
                deployedURL={a.deployedURL}
                repositoryURL={a.repositoryURL}
                img={a.img}/>
         ))}
      </div>
    );
  }
}

export default Projects;