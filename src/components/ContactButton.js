import React from 'react';
import { Link } from 'react-router-dom';

function ContactButton () {
    return (
        <div className="contact-button-container">
            <div className="contact-button">
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
        </div>
        </div>
        
    )
}

export default ContactButton;