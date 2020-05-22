import React from 'react';
import Gallery from './Gallery';
import WorkWithMe from './WorkWithMe';

function HomePage() {
    return (
    <div className="main-container">

      <div className="home-page__main-photo">
        <div className="home-page__intro-container">
            <p>Sergei Nikiforov</p>
            <p>freelance photographer</p>
            
        </div>
      
      </div>
        
        

      <Gallery/>
        <WorkWithMe/>
    </div>
    )
}

export default HomePage;