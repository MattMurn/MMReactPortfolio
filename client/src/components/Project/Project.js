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
            <a className="description" href={props.deployment} target="_blank"> {props.description} </a>
            <a href={props.github} target="_blank" className="github"> {props.logo}</a>
        </div>
    </div>
)

export default Project