import React from 'react';
import WorkWithMe from './WorkWithMe';
import avatar from '../images/avatar.jpg'

function AboutPage(){
    return (
            <div className="main-container">
                <div className="main-container__header">Who is behind?</div>
                <div className="bio-container">
                        <img className="photo" src={avatar} alt="Avatar" />
                    <div className="bio">
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit, fusce dapibus, tellus ac cursus commodo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula.</p>
                    </div>
                </div>
                <WorkWithMe/>
            </div>
    )
}

export default AboutPage;       