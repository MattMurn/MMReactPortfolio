import React from 'react';
import './Name.css';

const Name = (props) => (
    <div className="name_wrapper">
        <div className="name_container" onClick={props.clickHandler}>
            <div className="name_"> {props.first}</div>
            <div className={props.name_s}>{props.first_s} </div>
        </div>
        <div className="last_name_container">
            <div className="name_">{props.last} </div>
            <div className={props.name_s}>{props.last_s} </div>
        </div>
    </div>
)

export default Name;