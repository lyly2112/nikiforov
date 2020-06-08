import React from 'react';
import Gallery from '../Gallery';
import WorkWithMe from '../WorkWithMe';
import rainbow from '../../images/rainbow.jpg';

function HomePage() {
    return (
        <div className="home-page-wrap">
            <div className="home-page__main-photo" style={{ backgroundImage: `url(${rainbow})` }}>
            <span className="home-page__intro-container">Sergei Nikiforov / freelance photographer</span>
            </div>
            <div className="home-page-bottom">
                <span className="home-page-bottom_intro">I'm Sergei Nikiforov, a freelance photographer specializing in landscape, 
                        advertorial and conceptual photography, based in Seattle. Here you will be 
                        able to find my latest and favorite shots.
                </span>
                <Gallery />
                <WorkWithMe />
            </div>
        </div>
    )
}

export default HomePage;