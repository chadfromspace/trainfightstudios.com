import React, { Component } from "react";
import "./style.css";
import {Link} from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <div>
          <nav className="navbar links">
              <h4 className="mr-4">
                <Link to="/projects">Projects</Link>
              </h4>
              <h4>
                <Link to="/contact">Contact</Link>
              </h4>
          </nav>
      </div>
    );
  }
}

export default Navbar;