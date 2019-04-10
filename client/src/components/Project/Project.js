import React from 'react'

import './Project.css'
// having issue with the logo
export const Project = (props) => (
    
    <div className="wrapper">
        <div className="img_container">
            <a href={props.deployment} target="_blank">
                <img className={props.img_class}
                    id={props.id}
                    src={props.src} 
                    alt="blank"
                    >    
                </img>
            </a>
        </div>
        {/* <p className="description">{props.description}</p> */}
        <div className="info_container">
            <a className="title" href={props.deployment} target="_blank"> {props.title} </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer" className="github"> <IoSocialGithub size={25}/></a>
        </div>
    </div>
)

                    //                     logo={}


