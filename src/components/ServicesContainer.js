import React from 'react';

function ServicesContainer() {
    return (
        <div className="services-container">
            <span className="services-container_header">Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas sed diam eget risus varius blandit sit amet non magna.</span>
            <div className="services-list">
                <div className="services-list_column">
                    <span className="service__header">Photography</span>
                    <span className="service__header">Motion video</span>
                </div>
                <div className="services-list_column">
                    <span className="service__header">Retouching</span>
                    <span className="service__header">Film photography</span>
                </div>
            </div>
        </div>
    )
}

export default ServicesContainer;