import React from 'react';
import fog from '../images/fog.jpg';
import rainbow from '../images/rainbow.jpg';


function Gallery() {
    return (
        <div className="gallery-container">
                <div className="gallery__photo" style={{ backgroundImage: `url(${fog})`}}>
                <div className="gallery__name">Landscape</div>
                </div>
                <div className="gallery__photo" style={{ backgroundImage: `url(${rainbow})`}}>
                <div className="gallery__name">Landscape</div>
                </div>
                <div className="gallery__photo" style={{ backgroundImage: `url(${rainbow})`}}>
                <div className="gallery__name">Landscape</div>
                </div>
            
        </div>
    )
}

export default Gallery;