import React from 'react';
import camera from '../images/camera.svg';
import video from '../images/video.svg';


function ServicesContainer() {
    return (
        <div className="main-container">
            <p className="services-container_header">Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <div className="services-list">
                <div className="services-list_row">
                    <div className="service">
                        <div className="service__icon">
                            <img src={camera} alt="camera" />
                        </div>
                        <div className="service_desription">
                            <h6 className="service__header">Photography</h6>
                            <p>Vivamus sagittis lacuson augue laoreet rutrum faucibus
                            dolor auctor. Cras mattis consectetur purus sit
                                amet fermentum.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service__icon">
                            <img src={video} alt="video" />
                        </div>
                        <div className="service_desription">
                            <h6 className="service__header">MOTION VIDEO</h6>
                            <p>Vivamus sagittis lacuson augue laoreet rutrum faucibus
                            dolor auctor. Cras mattis consectetur purus sit
                                amet fermentum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesContainer;