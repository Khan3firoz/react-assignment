import React from 'react';
import './Footer.css'
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Printest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';


const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="mainContaner">
                <div className="footer-logo">
                    <span>Shortly</span>
                </div>
                <ul className="features">
                    <span>Features</span>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                <ul className="resources">
                    <span>Resources</span>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
                <ul className="company">
                    <span>Company</span>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                </ul>
                <ul className="social">
                    <li><img src={Facebook} /></li>
                    <li><img src={ Twitter}/></li>
                    <li><img src={ Printest}/></li>
                    <li><img src={ Instagram}/></li>
                </ul>
                </div>
        </div>
    )
}

export default Footer
