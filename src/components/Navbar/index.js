import React, { Component } from "react";
import "./style.css";
import trainfightStudios from "../../assets/img/TrainfightStudiosLogo.png";

class Navbar extends Component {

  render() {
    return (
      <div>
          <nav className="navbar">
            <img alt="Trainfight Studios Logo" className="headerImage mt-4 mb-2" src={trainfightStudios}/>
          </nav>
      </div>
    );
  }
}

export default Navbar;