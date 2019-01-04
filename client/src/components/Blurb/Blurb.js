import React from 'react'
import './Blurb.css'

  const Blurb = (props) => (
  
    <div className={props.className}>
        {props.children}
    </div>
  
)

export default Blurb

