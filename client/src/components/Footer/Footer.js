import React from 'react';
import './Footer.css';

const Footer = props => {

    let date = new Date();
    return(
        <footer className="footer">
        HEEL
            <div className="theme_color_light offset">© {date.getFullYear().toString()} M | M</div>
        </footer>
    );
}

export default Footer;