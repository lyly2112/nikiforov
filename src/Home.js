import React from 'react';

function Home() {
    return (
      <div>
        <h1>Test</h1>
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
        <div className="intoduction">
          <p>I'm Sergei Nikiforov, a freelance photographer 
            specializing in landscape, advertorial and conceptual 
            photography, based in Seattle. Here you will be able 
            to find my latest and favorite shots.</p>
        </div>
        <div className="gallery">
          <div className="gallery_elem">
            <div className="photo"></div>
            <div className="gallery_elem_name">Landscape</div>
          </div>
          <div className="gallery_elem">
            <div className="photo"></div>
            <div className="gallery_elem_name"></div>
          </div>
          <div className="gallery_elem">
            <div className="photo"></div>
            <div className="gallery_elem_name">Stree Photography</div>
          </div>
        </div>
        <div className="work_with_me">
          <div className="lets_header"></div>
          <div className="lets_text"></div>
          <div className="contact_button"></div>
        </div>
        <div className="footer">
          <div className="footer_signature">© 2020 Sergei Nikiforov. All rights reserved. Theme by Majestic Bay.</div>
        </div>
      </div>
    )
}

export default Home;