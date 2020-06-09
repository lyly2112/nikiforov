import React from 'react';
import ServicesContainer from '../ServicesContainer';
import Reviews from '../Reviews';

function ServicesPage() {
    return (
        <div className="main-container">
            <span className="main-container__header">My services</span>
            <ServicesContainer />
            <Reviews />
        </div>
    )
}

export default ServicesPage;