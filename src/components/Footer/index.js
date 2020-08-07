import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  state = {};

  render() {
    return (
      <div>
        <footer>
            Created with React. Be sure to check out my&nbsp;
            <a href="https://chadfromspace.github.io/InteractivePortfolio">Interactive Portfolio</a>&nbsp;that was create using Unity and C#.
        </footer>
      </div>
    );
  }
}

export default Footer;