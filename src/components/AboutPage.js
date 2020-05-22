import React from 'react';
import WorkWithMe from './WorkWithMe';

function AboutPage(){
    return (
            <div className="main-container">
                <div className="main-container__header">Who is behind?</div>
                <div className="bio_container">
                    <div className="photo"></div>
                    <div className="bio"></div>
                </div>
                <div className="skills_container">
                    <div className="skills_top">My Skills</div>
                    <div className="skills"></div>
                </div>
                <WorkWithMe/>
            </div>
    )
}

export default AboutPage;       