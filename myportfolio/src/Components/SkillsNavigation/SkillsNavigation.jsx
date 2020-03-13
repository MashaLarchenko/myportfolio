import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import "./header.css";

export default function SkillsNavigation() {
  // let style = {};
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container className="nav_container" maxWidth="md">
      <Link to="/" className="nav" onClick={onTop}>
        <div>About</div>
      </Link>
      <Link to="/skills" className="nav">
        <div>Skills</div>
      </Link>
      <Link to="/portfolio" className="nav">
        <div>Portfolio</div>
      </Link>
      <Link to="/contact" className="nav">
        <div>Contact</div>
      </Link>
    </Container>
  );
}
