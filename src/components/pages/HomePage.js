import React from 'react';
import Gallery from '../Gallery';
import WorkWithMe from '../WorkWithMe';
import rainbow from '../../images/rainbow.jpg';

function HomePage() {
    return (
        <div className="home-page-wrap">
            <div className="home-page__main-photo" style={{ backgroundImage: `url(${rainbow})` }}>
            <div className="home-page__intro-container">Sergei Nikiforov / freelance photographer</div>
            </div>
            <div className="home-page-bottom">
                <div className="home-page-bottom_intro">I'm Sergei Nikiforov, a freelance photographer specializing in landscape, 
                        advertorial and conceptual photography, based in Seattle. Here you will be 
                        able to find my latest and favorite shots.
                </div>
                <Gallery />
                <WorkWithMe />
            </div>
        </div>
    )
}

export default HomePage;