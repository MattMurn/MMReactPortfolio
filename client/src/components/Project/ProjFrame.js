import React from 'react'


export const ProjFrame = (props, { children }) => {
  return (

      <ul className="list-group">
        {children}
        {props.title}
      </ul>
    
  );
};



export default ProjFrame;