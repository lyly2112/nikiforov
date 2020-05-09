import React from 'react';
// import NavbarServices from './NavbarServices';
import ServicesContainer from '../ServicesContainer';
import Reviews from '../Reviews';


function ServicesPage() {
    return (
        <div className="service-page-container">
            <div>Services</div>
            {/* <NavbarServices/> */}
            <div className="service-page__main">
                <ServicesContainer/>    
            </div>

            <Reviews/>
            {/* <Footer/> */}
        </div>
    )
}

export default ServicesPage;