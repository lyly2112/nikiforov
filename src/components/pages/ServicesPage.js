import React from 'react';
import ServicesContainer from '../ServicesContainer';
import Reviews from '../Reviews';

function ServicesPage() {
    return (
        <div className="main-container">
            <div className="main-container__header">My services</div>
            <ServicesContainer />
            <Reviews />
        </div>
    )
}

export default ServicesPage;