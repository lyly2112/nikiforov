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
                    <dev className="photo"></dev>
                    <dev className="bio"></dev>
                </div>
                <div className="skills_container">
                    <dev className="skills_top">My Skills</dev>
                    <dev className="skills"></dev>
                </div>
                <WorkWithMe/>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default AboutPage;