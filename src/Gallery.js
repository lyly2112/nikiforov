import React from 'react';

function Gallery() {
    return (
        <div className="gallery">   
            <div className="gallery_elem">
                <div className="photo"></div>
                <div className="gallery_elem_name">Landscape</div>
            </div>
            <div className="gallery_elem">
                <div className="photo"></div>
                <div className="gallery_elem_name">Street Photography</div>
            </div>
            <div className="gallery_elem">
                <div className="photo"></div>
                <div className="gallery_elem_name">Portrait</div>
            </div>
        </div>
    )
}

export default Gallery;