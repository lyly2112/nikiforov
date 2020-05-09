import React from 'react';
import WorkWithMe from './WorkWithMe';
// import Footer from './Footer';

function AboutPage(){
    return (
        <div className="about-page-container">
            <div>About</div>
            {/* <NavbarServices/> */}
            <div className="about-page__main">
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
            {/* <Footer/> */}
        </div>
    )
}

export default AboutPage;