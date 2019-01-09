import React from 'react';
import './Footer.css';

const Footer = props => {
    let date = new Date();
    return(
        <div className="footer">
            <div className="theme_color footer_contact"> TELEPHONE 312 835 0105 | EMAIL MATTMURN@GMAIL.COM</div>
            <div className="theme_color"> © {date.getFullYear().toString()}</div>
        </div>
    );
}

export default Footer;