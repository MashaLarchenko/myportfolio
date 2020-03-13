import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import { Link } from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import resume from "../../assets/Larchenko_Maria_CV.pdf";

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
      <a href={resume} className="nav">
        <div>Resume</div>
      </a>
      <Link to="/portfolio" className="nav">
        <div>Portfolio</div>
      </Link>
      <Link to="/contact" className="nav">
        <div>Contact</div>
      </Link>
    </Container>
  );
}
