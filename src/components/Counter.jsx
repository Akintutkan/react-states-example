import { useState,useEffect } from "react";

import React from 'react'

const Counter = () => {
    const [number,setNumber] = useState(0)
    useEffect(() =>{
        console.log("component mount edildi")

    const interval = setInterval(() =>{
        setNumber((n) => n+1);
    },1000)

    return() => clearInterval(interval);
},[]);

useEffect(() =>{
    console.log("number state güncellendi")  
},[number]);
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number + 1)}>Click</button>
        </div>
  )
}

export default Counter