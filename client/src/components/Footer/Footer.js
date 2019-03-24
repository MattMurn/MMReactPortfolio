import React from 'react';
import './Footer.css';

const Footer = props => {

    let date = new Date();
    return(
        <div className="footer">
            <div className="theme_color_light">  © {date.getFullYear().toString()} M M</div>
        </div>
    );
}

export default Footer;