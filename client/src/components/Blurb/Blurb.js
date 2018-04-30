import React from 'react'
import './Blurb.css'

  const Blurb = ({ nameClass, children}) => (
  
    <div className="blurb">
        {children}
    </div>
  
)

export default Blurb

