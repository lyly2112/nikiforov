import React from 'react';
import NavbarShort from './NavbarShort';
import ServicesContainer from './ServicesContainer';
import Reviews from './Reviews';
import Footer from './Footer';

function Services() {
    return (
        <div>
            <div>Services</div>
            <NavbarShort/>
            <ServicesContainer/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default Services;