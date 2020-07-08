import React from 'react';
import ContactButton from './ContactButton';

function WorkWithMe() {
    return (
        <div className="work-with-me-container">
            <span className="work-with-me__header">Let's Work Together</span>
            <span className="work-with-me__paragraph">If you would like to do a colab please
            feel free to reach out, I love working with other creatives or even translating
            your vision into a finished visual product.
</span>
            <ContactButton />
        </div>
    )
}

export default WorkWithMe;