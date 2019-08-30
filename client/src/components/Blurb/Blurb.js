import React from 'react'
import './Blurb.css'

  const Blurb = ({className, children, id}) => (
  
    <div className={className} id={id}>
        {children}
    </div>   
);
export default Blurb;

