import React from 'react';
import './Project.css';

export const Project = props => {
    return (
        <div className="outer_project">
            { props.children }
        </div>
    )
}

export const ContentProject = props => {
    return (
        <div className="inner_container" 
        onClick={props.onClick} 
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}>

            <div className="img_container">
                {props.title}
                <img src={props.src}/>
            </div>
            <button name="github" className={props.className + " link_button"} onClick={props.onClick}>GITHUB</button>
        </div>
    )
}

export const RevealProject = props => {
    return (
        <div className="inner_info">
            <div className={props.className}>
            {/* This needs to be replaced with {props.text} */}
                {props.description}
            </div>
        </div>
    )
}