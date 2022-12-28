import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Apiscene = () => {

    const [name, setName] = useState('')
    
    const apicall = () => {
      axios.get("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      
            .then((response) => {
              const evrything = response.data;
              setName(evrything)
              console.log(response)
            })
         
    }
    useEffect(() => {
        apicall();
    },[])

  return (
    <div>
      <table>
        <thead>

        </thead>
        
          name.map(()=>{
          return(
        
          )

          })
        
      </table>
      {name}  
    </div>
  )
}

export default Apiscene
