import React from 'react';
import Gallery from './Gallery';
import WorkWithMe from './WorkWithMe';

function HomePage() {
    return (
    <div className="home-page-container">
      <div className="main-container>">
      <div className="home-page__main-photo">
        <img src={require('../images/home-page-photo.jpg')} alt="mountain"/> 
      </div>
        <div className="home-page__intro-container">
            <p>Sergei Nikiforov</p>
            <p>freelance photographer</p>
            <p>I am Sergei Nikiforov, a freelance photographer 
            specializing in landscape, advertorial and conceptual
            photography, based in Seattle. Here you will be able 
            to find my latest and favorite shots.</p>
        </div>
        <Gallery/>
        <WorkWithMe/>
      </div>
      {/* <Footer/> */}
    </div>
    )
}

export default HomePage;