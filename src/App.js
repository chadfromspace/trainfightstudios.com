import React from 'react';
import './App.css';
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
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
              <Route path="/*" component={Projects}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;