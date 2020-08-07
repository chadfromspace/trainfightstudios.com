import React from 'react';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
        <div className="page">
            <Switch>
              <Route exact path="/" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;