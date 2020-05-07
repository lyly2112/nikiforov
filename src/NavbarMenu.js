import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMenu() {
    return (
      <div className="navbar-menu">
        <div className="navbar-menu__element">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/services">Services</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/about">About Me</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
}

export default NavbarMenu;
