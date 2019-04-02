import React from 'react';
import './Footer.css';

const Footer = props => {

    let date = new Date();
    return(
        <footer className="footer">
            <div className="theme_color_dark offset">© {date.getFullYear().toString()} M | M</div>
        </footer>
    );
}

export default Footer;