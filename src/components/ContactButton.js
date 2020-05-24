import React from 'react';
import { Link } from 'react-router-dom';

function ContactButton() {
    return (
            <div className="contact-button">
                <Link to="/contact" className="contact-button">Contact</Link>
            </div>

    )
}

export default ContactButton;