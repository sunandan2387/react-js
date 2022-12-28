import React from 'react'
import { useNavigate } from "react-router-dom";



const First = () => {
const navigate = useNavigate();
  const [name, setName] = React.useState('nothing')
  
  const handleChange = () => {
   
    navigate('/second', {state: {name}});
    localStorage.setItem("name",name)
}


  return (
    <div>
      <input type="text " placeholder='enter name' onChange={e=> setName(e.target.value)} />
      <button onClick={handleChange}>Submit</button>
    </div>
  )
}

export default First
