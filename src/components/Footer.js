import React from 'react';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';
import { ExternalLink } from 'react-external-link';

function Footer() {
    return (
        <div className="footer">
                <div className="footer__signature__column">
                    <span><b>Sergei Nikiforov </b></span>
                    <span>All rights reserved</span>
                </div>

                <div className="footer__signature__column">
                <ExternalLink href="https://www.instagram.com/serjnike/">
<img div className="social-media" src={instagram} alt="instagram"></img>
    </ExternalLink>
<ExternalLink href="https://www.youtube.com/">
<img div className="social-media" src={youtube} alt="youtube"></img>
</ExternalLink>

                </div>

            
                 
                <div className="footer__signature__column">
                    <span>Site by <b>Majestic Bay</b></span>
                </div>
            

        </div>
    )
}

export default Footer;