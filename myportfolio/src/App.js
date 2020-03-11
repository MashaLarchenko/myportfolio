import React from "react";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Header/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
