import React from 'react';
import NavbarServices from './NavbarServices';
import WorkWithMe from './WorkWithMe';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Swetch,
    Route,
    Link
} from "react-router-dom";

function AboutMePage(){
    return (
        <dev className="about_me">
                        <div>About me</div>

            <NavbarServices/>
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

export default AboutMePage;