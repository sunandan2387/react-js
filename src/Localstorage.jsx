import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Localstorage = () => {
    const [name , setName] = useState('');
    useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name) )
},[name])


    return (
        <div>
            <h3>enter your name</h3>
            <input type="text" onChange={(e) => { setName(e.target.value) }} />
            <h3>enter your password</h3>
            <input type="password" />
            <Link to='next'><h5>click me</h5></Link>
        </div>
    )
}

export default Localstorage
