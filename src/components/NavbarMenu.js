import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMenu() {
    return (
      <div className="navbar-menu">
        <div className="navbar-menu__element">
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/services" style={{ textDecoration: 'none' }}>Services</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/about" style={{ textDecoration: 'none' }}>About Me</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>
    )
}

export default NavbarMenu;
