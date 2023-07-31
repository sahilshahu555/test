import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",
                justifyContent:"space-around",
                backgroundColor:"gray",
                alignItems: "center"
    }}>
      <h2><Link to="/" style={{textDecoration:"none",
    color:"black"}}>Welcome to Todo App</Link></h2>

       <h2 ><Link to="/add" style={{textDecoration:"none",
    color:"black"}}>Add Todo</Link></h2>

    <h2 ><Link to="/signup" style={{textDecoration:"none",
    color:"black"}}>Create Account</Link></h2>

<h2 ><Link to="/login" style={{textDecoration:"none",
    color:"black"}}>Login</Link></h2>

    </div>
  )
}

export default Navbar
