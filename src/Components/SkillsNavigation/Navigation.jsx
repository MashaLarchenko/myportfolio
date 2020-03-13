import React from "react";
import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <header className='header'>
      <nav className='topNav'>
        <Link to="/">
          About
        </Link>
        <Link to="/skills">
          Skills
        </Link>
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
