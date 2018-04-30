import React from 'react'

import './Project.css'
// having issue with the logo
const Project = (props) => (
    
    <div className="wrapper">
        <a href={props.deployment} target="_blank">
            <img className="projectOuter"
                id={props.id}
                src={props.src} 
                alt=""
                >    
            </img>
        </a>  
        <div className="infoContainer">
            <div className="description"> {props.description} </div>
            <a href={props.github} target="_blank" className="github"> {props.logo}</a>
        </div>
    </div>
)

export default Project