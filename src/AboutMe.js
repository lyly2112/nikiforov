import React from 'react';
import NavbarShort from './NavbarShort';
import WorkWithMe from './WorkWithMe';
import Footer from './Footer';

function AboutMe(){
    return (
        <dev className="about_me">
                        <div>TEST3</div>

            <NavbarShort/>
            <dev className="bio_container">
                <dev className="photo"></dev>
                <dev className="bio"></dev>
            </dev>
            <dev className="skills_container">
                <dev className="skills_top">My Skills</dev>
                <dev className="skills"></dev>
            </dev>
            <WorkWithMe/>
            <Footer/>
        </dev>
    )
}

export default AboutMe;