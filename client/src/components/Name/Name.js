import React from 'react';
import './Name.css';

const Name = (props) => (
    <div className={props.wrapper}>

        <div className={props.classPrefix}> {props.prefix}</div>
        <div className={props.classSuffix}>{props.suffix}</div>
    </div>
)

export default Name;