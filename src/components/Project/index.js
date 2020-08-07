import React, { Component } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../../assets/img/aboutme.png";
import img2 from "../../assets/img/aboutme.png";

class Project extends Component {
  state = {
    img1,
    img2
  };

  render() {
    return (
      <div className="row content">
        <div className="col-6 mt-4">
            <Card className="text-center projectCard" key={this.props.id}>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Body>
                   <img alt={this.props.description} src={this.props.img}/>
                   <Card.Text>
                        {this.props.description}
                   </Card.Text>
                   <a href={this.props.deployedURL}>
                        <Button className="mr-2" variant="primary">Website</Button>
                   </a>
                   <a href={this.props.repositoryURL}>
                        <Button variant="primary">Github Repository</Button>
                   </a>
              </Card.Body>
            </Card>
        </div>
      </div>
    );
  }
}

export default Project;