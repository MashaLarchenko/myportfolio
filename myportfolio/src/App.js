import React from "react";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import ProjectCard from './Components/Portfolio/ProjectCard'

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Navigation from "./Components/SkillsNavigation/Navigation";

function App() {
  return (
    <Router>
      <Route exact path="/" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/project/:id" component={ProjectCard} />
      {/* <Navigation /> */}
    </Router>
  );
}

export default App;
