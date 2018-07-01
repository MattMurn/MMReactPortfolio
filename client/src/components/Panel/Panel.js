import React from 'react'
import './Panel.css'

  const Panel = (props) => (
  
    <div className={props.className}>
        {props.children}
        
    </div>
  
)

export default Panel