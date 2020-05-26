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
    <Gallery/>
        <WorkWithMe/>
    </div>
    
        </div>
    )
}

export default HomePage;