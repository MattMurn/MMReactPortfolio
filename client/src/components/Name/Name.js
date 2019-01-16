import React from 'react';
import './Name.css';

export const Name = props => (

    <div className="name_wrapper">
        <div className="name_container" onClick={props.clickHandler}>
            <div className="first_name"> {props.first}</div>
            {/* <div className={props.name_s}>{props.first_s} </div> */}
        </div>
        <div className="name_container">
            <div className="last_name">{props.last} </div>
            {/* <div className={props.name_s}>{props.last_s} </div> */}
        </div>
    </div>
)
export const Initials = () => {
    
    return (
        <div className="initials_container">
            <div className="name_duplicate">M</div>
            <div className="name_duplicate">M</div>
        </div>
    )
}
