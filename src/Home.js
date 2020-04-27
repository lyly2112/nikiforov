import React from 'react';
import Navbar from './Navbar';
import Gallery from './Gallery';
import WorkWithMe from './WorkWithMe';
import Footer from './Footer';

function Home() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <Navbar/>
        <div className="intoduction">
          <p>I'm Sergei Nikiforov, a freelance photographer 
            specializing in landscape, advertorial and conceptual 
            photography, based in Seattle. Here you will be able 
            to find my latest and favorite shots.</p>
        </div>
        <Gallery/>
        <WorkWithMe/>
        <Footer/>
      </div>
    )
}

export default Home;