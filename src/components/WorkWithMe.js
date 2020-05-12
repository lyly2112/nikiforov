import React from 'react';
import ContactButton from './ContactButton';


function WorkWithMe () {
return (
    <div className="work-with-me-container">
        <div className="work-with-me__header">Let's Work Together</div>
        <div className="work-with-me__paragraph"><p>Vivamus sagittis lacus 
            vel augue laoreet rutrum faucibus dolor auctor. 
        Donec sed odio dui. Nullam id dolor id nibh ultricies
         vehicula ut id elit. Vestibulum id ligula porta felis 
         euismod semper.</p></div>
        <ContactButton/>

    </div>
)
}

export default WorkWithMe;