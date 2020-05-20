import React from 'react';
import ServicesContainer from './ServicesContainer';
import Reviews from './Reviews';


function ServicesPage() {
    return (
        <div className="service-page-container">
            <div className="main-container">
            <div className="main-container__header">My services</div>
                <ServicesContainer/>    
            </div>
            <Reviews/>
            {/* <Footer/> */}
        </div>
    )
}

export default ServicesPage;