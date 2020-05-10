import React from 'react';

function Gallery() {
    return (
        <div className="gallery-container">   
            <div className="gallery__elem">
                <div className="gallery__elem__photo"></div>
                <div className="gallery__elem__name">Landscape</div>
            </div>
            <div className="gallery__elem">
                <div className="photo"></div>
                <div className="gallery__elem__name">Street Photography</div>
            </div>
            <div className="gallery__elem">
                <div className="gallery__elem__photo"></div>
                <div className="gallery__elem__name">Portrait</div>
            </div>
        </div>
    )
}

export default Gallery;