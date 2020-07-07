import React from 'react';
import fog from '../images/fog.jpg';
import rainbow from '../images/rainbow.jpg';
import eva from '../images/eva.jpg';
import gatorade from '../images/gatorade.jpg';

function Gallery() {
    return (
        <div className="gallery-container">
            <div className="gallery__photo" style={{ backgroundImage: `url(${fog})` }}>
                <span className="gallery__name">Landscape</span>
            </div>
            <div className="gallery__photo" style={{ backgroundImage: `url(${gatorade})` }}>
                <span className="gallery__name">Street Photography</span>
            </div>
            <div className="gallery__photo" style={{ backgroundImage: `url(${eva})` }}>
                <span className="gallery__name">Portrait</span>
            </div>
        </div>
    )
}

export default Gallery;