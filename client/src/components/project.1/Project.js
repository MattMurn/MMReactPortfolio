import React from 'react';
import './Project.css';
import IoSocialGithub from 'react-icons/lib/io/social-github';

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
            {/* title over image or icon. Currently looks like shit */}
                {props.title}
                <img src={props.src}/>
            </div>
            {/* consider using an anchor with the github icon */}
            <a name="github" className={props.className + " link_button"} 
                // onClick={props.onClick} 
                href={props.gitHub}
                target="_blank"
                ><IoSocialGithub size={25}/></a>
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