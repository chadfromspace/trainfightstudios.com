import React, { Component } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

  render() {
    return (
      <div className="row content">
        <div className="col-6 mt-2 mb-2">
          <Card className="text-center projectCard" key={this.props.id}>
            <Card.Header><h3>{this.props.name}</h3></Card.Header>
            <Card.Body>
               <img alt={this.props.description} src={this.props.img}></img>
               <Card.Text>
                    {this.props.description}
               </Card.Text>
               <a href={this.props.deployedURL}>
                    <Button className="mr-2" variant="primary">{this.props.linkText}</Button>
               </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Project;