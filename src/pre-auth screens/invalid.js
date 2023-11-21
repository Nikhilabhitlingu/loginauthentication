


import React from 'react'
import { useNavigate } from 'react-router-dom'

function Invalid() {

    const navigate=useNavigate()
 const handleButton=()=>{
    navigate('/')
}


  return (
    <>
   <h1>please login to route internal pages</h1>
   <button onClick={handleButton}>Click to login</button>
   </>
  )
}

export default Invalid