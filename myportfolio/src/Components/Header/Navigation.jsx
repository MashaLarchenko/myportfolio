import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography';
import "./header.css";

export default function ButtonAppBar() {
  return (
      <header className="header">
        <nav>
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
  );
}
