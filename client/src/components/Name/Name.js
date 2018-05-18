import React from 'react';
import './Name.css';

const Name = (props) => (
    <div className={props.wrapper}>

        <div className={props.name}> {props.first}</div>
        <div className={props.name}>{props.last}</div>
    </div>
)

export default Name;