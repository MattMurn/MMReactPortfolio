import React from 'react';
import './Skills.css'
 

const Skills = (props) => (
    
        <ul className="skill_list">{props.techLogo}<div className="skill_name">{props.name}</div></ul>


)

export default Skills;