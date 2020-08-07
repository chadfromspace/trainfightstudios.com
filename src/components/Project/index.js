import React, { Component } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Project extends Component {
  state = {};

  render() {
    return (
      <div>
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
    );
  }
}

export default Project;