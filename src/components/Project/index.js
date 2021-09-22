import React, { Component } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import androidLogo from "../../assets/img/AndroidLogo.png";
import iOSLogo from "../../assets/img/iOSLogo.png";

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

  render() {
    return (
      <div className="row">
        <div className="col mr-1 ml-1 mt-1 mb-4">
          <Card className="text-center projectCard" key={this.props.id}>
            <Card.Body>
               <img alt={this.props.description} src={this.props.img}></img>
               <a href={this.props.URL1}>
                    <img
                        alt={this.props.description}
                        src={androidLogo}
                        className="androidIcon col-6 mt-4 mr-4"
                        variant="primary">
                    </img>
               </a>
               <a href={this.props.URL2}>
                    <img
                        alt={this.props.description}
                        src={iOSLogo}
                        className="iOSIcon col-6 mt-4 ml-4"
                        variant="primary">
                    </img>
               </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Project;