import React from 'react'

import './Project.css'
// having issue with the logo
const projectLeft = (props) => (
    
    <div className="wrapper">
        <div className="imgContainer">
            <a href={props.deployment} target="_blank">
                <img className="projectOuter"
                    id={props.id}
                    src={props.src} 
                    alt=""
                    >    
                </img>
            </a>  
        </div>
        <div className="infoContainer">
            <a className="description" href={props.deployment} target="_blank"> {props.description} </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer" className="github"> {props.logo}</a>
        </div>
    </div>
)

export const ProjectRight = (props) => (
    
    <div className="wrapper">
        <div className="imgContainer">
            <a href={props.deployment} target="_blank">
                <img className="projectOuter"
                    id={props.id}
                    src={props.src} 
                    alt=""
                    >    
                </img>
            </a>  
        </div>
        <div className="infoContainer">
            <a className="description" href={props.deployment} target="_blank"> {props.description} </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer" className="github"> {props.logo}</a>
        </div>
    </div>
)

export const ProjectLeft = projectLeft;
// export const ProjectRight = projectRight;