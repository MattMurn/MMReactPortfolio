import React from 'react';
import './Footer.css';

const Footer = props => {

    let date = new Date();
    return(
        <div className="footer">
            <div className="theme_color_light"> TELEPHONE 312 835 0105 | EMAIL MATTMURN@GMAIL.COM © {date.getFullYear().toString()}</div>
        </div>
    );
}

export default Footer;