import React from 'react';
import photography from '../images/photography.jpg';
import film from '../images/film.jpg';
import video from '../images/video.jpg';
import retouching from '../images/retouching.jpg';


function ServicesContainer() {
    return (
        <div className="services-container">
            <span className="services-container_header">Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas sed diam eget risus varius blandit sit amet non magna.</span>
            <div className="services-list">
                <div className="services-list_column">
                    <span className="service__header">
                        <img className="service__image" src={photography} alt="Photography" />
                        <h1>Photography</h1>
                    </span>
                    <span className="service__header">
                        <img className="service__image" src={video} alt="Motion video" />
                        <h1>Motion video</h1>
                    </span>
                </div>
                <div className="services-list_column">
                    <span className="service__header">
                        <img className="service__image" src={retouching} alt="Retouching" />
                        <h1>Retouching</h1>
                    </span>
                    <span className="service__header">
                        <img className="service__image" src={film} alt="Film photography" />
                        <h1>Film photography</h1>
                    </span>                </div>
            </div>
        </div>
    )
}

export default ServicesContainer;