import React from "react";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import ProjectCard from './Components/Portfolio/ProjectCard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {createBrowserHistory} from 'history'
import "./App.css";

function App() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/portfolio/project/:id" component={ProjectCard} />
    </Router>
  );
}

export default App;
