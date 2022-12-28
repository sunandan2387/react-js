import React from 'react'
import { useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

const Second = () => {
    // const {state} = useLocation();
    // const { name } = state;
    
    const { state } = useLocation()
    const {name} = state
    
  return (
    <div>
          <span>Name:</span>
          <p>{name}</p>
    </div>
  )
}

export default Second
