import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // All social media icons from brands

function Footer(){
    return(
        <div className='footer-backdrop'>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
        </div>
    )
}
export default Footer;