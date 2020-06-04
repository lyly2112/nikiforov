import React from 'react';
import Gallery from './Gallery';
import WorkWithMe from './WorkWithMe';

function HomePage() {
    return (
<div className="home-page-wrap">
      <div className="home-page__main-photo">
        <div className="home-page__intro-container">
            <p>Sergei Nikiforov / freelance photographer</p>     
      </div>
      

      
    </div>
    <div className="home-page-bottom">
        <div className="home-page-bottom_intro">
            <p>
            I'm Sergei Nikiforov, a freelance photographer specializing in landscape, advertorial and conceptual photography, based in Seattle. Here you will be able to find my latest and favorite shots.
            </p>
        </div>
    <Gallery/>
        <WorkWithMe/>
    </div>
    
        </div>
    )
}

export default HomePage;