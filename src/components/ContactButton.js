import React from 'react';
import { Link } from 'react-router-dom';

function ContactButton() {
    return (
                <Link to="/contact" className="contact-button">Contact</Link>

    )
}

export default ContactButton;