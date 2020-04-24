import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
          <div className="navbar_menu">
            <div className="col">HOME</div>
            <div className="col">SERVICES</div>
            <div className="col">ABOUT</div>
            <div className="col">CONTACT</div>
          </div>
          <div className="name">
            <div className="name_top"></div>
            <div className="name_bottom"></div>
          </div>
        </div>
    )
}

export default Navbar;