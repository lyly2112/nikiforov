import React from 'react';
import ServicesContainer from '../ServicesContainer';

function ServicesPage() {
    return (
        <div className="main-container">
            <span className="main-container__header">My services</span>
            <ServicesContainer />
        </div>
    )
}

export default ServicesPage;