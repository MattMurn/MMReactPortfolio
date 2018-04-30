import React from 'react'
import './Panel.css'

  const Panel = (props) => (
  
    <div className={props.projectClass}>
        {props.children}
        
    </div>
  
)

export default Panel