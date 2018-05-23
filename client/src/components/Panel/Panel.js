import React from 'react'
import './Panel.css'

  const Panel = (props) => (
  
    <div className={props.class}>
        {props.children}
        
    </div>
  
)

export default Panel