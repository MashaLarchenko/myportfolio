import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/Larchenko_Maria_CV.pdf";

export default function Navigation() {
  return (
    <header className='header'>
      <nav className='topNav'>
        <Link to="/">
          About
        </Link>
        <a href={resume}>
          Resume
        </a>
        <Link to="/portfolio">
          Portfolio
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
