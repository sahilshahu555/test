import React from 'react'
import{Link}from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"yellow"}}>
      <Link to="/" style={{textDecoration:"none"}}><h2>Welcome to Blog App</h2></Link>
      <Link to="/signup" style={{textDecoration:"none"}}><h2>Create Account</h2></Link>
      <Link to="/Login" style={{textDecoration:"none"}}><h2>Login</h2></Link>

    </div>
  )
}

export default Navbar
