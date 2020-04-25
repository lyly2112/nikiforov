import React from 'react';
import Navbar_short from './Navbar_short';
import Work_with_me from './Work_with_me';
import Footer from './Footer';

function About_me(){
    return (
        <dev className="about_me">
                        <div>TEST3</div>

            <Navbar_short/>
            <dev className="bio_container">
                <dev className="photo"></dev>
                <dev className="bio"></dev>
            </dev>
            <dev className="skills_container">
                <dev className="skills_top">My Skills</dev>
                <dev className="skills"></dev>
            </dev>
            <Work_with_me/>
            <Footer/>
        </dev>
    )
}

export default About_me;