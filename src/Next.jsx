import React, {useState, useEffect} from 'react'




const Next = () => {

  const [data, setData] = useState('');
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'))
    if (name) {
      setData(name)
    }
  },[])

  return (
    <div>

      <h1>{data}</h1>
    </div>
  )
}

export default Next
