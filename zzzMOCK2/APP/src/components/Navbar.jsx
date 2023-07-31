import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  
  return (
    <div  style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"10px" ,padding:"10px",backgroundColor:"lightgreen",
  }}
    >
      <Link to='/' >Dashboard</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>SignUp</Link>

    </div>
  )
}

export default Navbar
