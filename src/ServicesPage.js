import React from 'react';
import NavbarServices from './NavbarServices';
import ServicesContainer from './ServicesContainer';
import Reviews from './Reviews';
import Footer from './Footer';

function ServicesPage() {
    return (
        <div>
            <div>Services</div>
            <NavbarServices/>
            <ServicesContainer/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default ServicesPage;