import React from 'react';
import instagram from '../images/instagram.svg';
import artpal from '../images/artpal.png';
import { ExternalLink } from 'react-external-link';

function Footer() {
    return (
        <div className="footer">
            <span className="footer__signature__column">
                <span className="footer__bold">Sergei Nikiforov </span>
                All rights reserved
            </span>
            <div className="footer__signature__column">
                    <ExternalLink href="https://www.instagram.com/serjnike/">
                        <img className="social-media--footer" src={instagram} alt="instagram"></img>
                    </ExternalLink>
                    <ExternalLink href="https://www.artpal.com/Sergeinikiforoff">
                        <img className="social-media--footer" src={artpal} alt="artpal"></img>
                    </ExternalLink>
            </div>
            <span className="footer__signature__column">Site by
                <span className="footer__bold"> Majestic Bay</span>
            </span>
        </div>
    )
}

export default Footer;