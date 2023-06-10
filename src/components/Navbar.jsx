import React from 'react'

const Navbar = () => {
  return (
    <div style={{marginBottom:'80px', display:'flex', justifyContent:'space-around'}}>
        
        <a href="/login"> Login </a>
        <a href="/register"> Register </a>
        <a href="/profile"> Profile </a>
        <a href="/getEmi"> Emi </a>


    </div>
  )
}

export default Navbar