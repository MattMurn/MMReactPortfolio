import React from 'react';
import './Project.scss';

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
            {/* img goes here. */}
            "THIS IS THE CONTENT PROJECT"
            </div>
            {/* Think about changing this to anchor tag */}
            <button className={props.className + " link_button"}>GITHUB</button>
        </div>
    )
}

export const RevealProject = props => {
    return (
        <div className="inner_info">
            <div className={props.className}>
            {/* This needs to be replaced with {props.text} */}
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                "tell them about the sick project that you've been worrking on here."
                
            </div>
        </div>
    )
}