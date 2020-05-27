import React from 'react';

function ServicesContainer() {
    return (
        <div className="services-container">
            <p className="services-container_header">Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <div className="services-list">
                <div className="services-list_column">
                            <h6 className="service__header">Photography</h6>
                            <h6 className="service__header">Motion video</h6>
                        </div>
                        <div className="services-list_column">
                            <h6 className="service__header">Retouching</h6>
                            <h6 className="service__header">Printing</h6>
                        </div>
                    </div>

                </div>
    )
}

export default ServicesContainer;