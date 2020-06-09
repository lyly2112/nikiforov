import React from 'react';
import ContactButton from './ContactButton';

function WorkWithMe() {
    return (
        <div className="work-with-me-container">
            <span className="work-with-me__header">Let's Work Together</span>
            <span className="work-with-me__paragraph">Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
            Donec sed odio dui. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Vestibulum id ligula porta felis
            euismod semper.</span>
            <ContactButton />
        </div>
    )
}

export default WorkWithMe;