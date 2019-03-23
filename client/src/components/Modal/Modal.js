import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';
export const Modal = props => {
    return(
        // outer class to toggle hide / show
        <div className="modal_show">
            <Link to="/">
                <button className="modal_close">X</button>        
            </Link>
            {/* inner modal to hold connect information*/}
            <div className="inner_modal">
                {props.children}
            </div>
        </div>
    )
}