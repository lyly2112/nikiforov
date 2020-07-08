import React from 'react';
import WorkWithMe from '../WorkWithMe';
import avatar from '../../images/avatar.jpg'

function AboutPage() {
    return (
        <div className="main-container">
            <span className="main-container__header">Who is behind?</span>
            <div className="bio-container">
                <img className="avatar" src={avatar} alt="Avatar" />
                <span className="bio">I do portraiture in natural scenic, Pacific North West backgrounds of your choice or mine. I provide prints of my landscape or conceptual photography to decorate and bring ambiance to your work or life space. I take photos of your product for inventory or showcase. Lastly in adventurer spirit I take adventure photos to capture that special moment of being one with your element.</span>
            </div>
            <WorkWithMe />
        </div>
    )
}

export default AboutPage;       