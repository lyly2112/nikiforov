import React from 'react';
import WorkWithMe from './WorkWithMe';
// import Footer from './Footer';

function AboutPage(){
    return (
        <dev className="about">
            <div>About</div>

            {/* <NavbarServices/> */}
            <dev className="bio_container">
                <dev className="photo"></dev>
                <dev className="bio"></dev>
            </dev>
            <dev className="skills_container">
                <dev className="skills_top">My Skills</dev>
                <dev className="skills"></dev>
            </dev>
            <WorkWithMe/>
            {/* <Footer/> */}
        </dev>
    )
}

export default AboutPage;