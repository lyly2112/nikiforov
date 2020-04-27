import React from 'react';

function NavbarHome() {
    return (
        <div className="navbar">
          <div className="navbar_menu">
            <div className="col">HOME</div>
            <div className="col">SERVICES</div>
            <div className="col">ABOUT</div>
            <div className="col">CONTACT</div>
          </div>
          <div className="name">
          <div className="my_name"><p>Sergei Nikiforov</p>
          <p>freelance photographer</p></div>
          </div>
        </div>
    )
}

export default NavbarHome;