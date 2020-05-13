import React from 'react';
import { Link } from 'react-router-dom';

function ContactButton () {
    return (
        <div className="contact-button-container">
            <div className="contact-button">
            <Link to="/contact" className="contact-button__text">Contact</Link>
        </div>
        </div>
        
    )
}

export default ContactButton;