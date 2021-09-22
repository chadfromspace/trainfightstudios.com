import React, { Component } from "react";
import "./style.css";
import Project from "../Project";
import db from "./db.json";
import spacetime from "../../assets/img/SpacetimeVideoGame.png";
import portfolio from "../../assets/img/Portfolio.gif";
import tbof from "../../assets/img/tbof.png";

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
                projects: db,
                images: [
                tbof,
                spacetime,
                portfolio
                ]
        };
    }

  render() {
    return (
      <div>
        {this.state.projects.map((a,index)=>(
          <Project key={index}
          name={a.name}
          description={a.description}
          URL1={a.URL1}
          URL2={a.URL2}
          img={this.state.images[index]}/>
         ))}
      </div>
    );
  }
}

export default Projects;