import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMenu() {
    return (
      <div>
        <div className="logo">Sergei Nikiforov</div>
        <div className="navbar-menu">
        <div className="navbar-menu__element">
          <Link to="/" className="navbar-menu__text">Home</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/services" className="navbar-menu__text">Services</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/about" className="navbar-menu__text">About Me</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/contact" className="navbar-menu__text">Contact</Link>
        </div>
      </div>
      </div>

    )
}

export default NavbarMenu;
