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
                <span className="home-page-bottom_intro">I do portraiture in natural scenic, Pacific North West 
                backgrounds of your choice or mine. I provide prints of my landscape or conceptual photography to 
                decorate and bring ambiance to your work or life space. I take photos of your product for inventory or 
                showcase. Lastly in adventurer spirit I take adventure photos to capture that special moment of being
                 one with your element.
                </span>
                <Gallery />
                <WorkWithMe />
            </div>
        </div>
    )
}

export default HomePage;