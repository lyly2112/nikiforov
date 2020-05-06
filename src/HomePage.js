import React from 'react';
import Gallery from './Gallery';
import WorkWithMe from './WorkWithMe';
// import Footer from './Footer';
// import NavbarMenu from './NavbarMenu';

function HomePage() {
    return (
    <div className="homePageContainer">
      {/* <NavbarMenu/> */}
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
      {/* <Footer/> */}
    </div>
    )
}

export default HomePage;