import React from 'react';
import Navbar from './Navbar';

function Home() {
    return (
      <div>
        <h1>Test</h1>
        <Navbar/>
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
            <div className="gallery_elem_name">Street Photography</div>
          </div>
          <div className="gallery_elem">
            <div className="photo"></div>
            <div className="gallery_elem_name">Portrait</div>
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