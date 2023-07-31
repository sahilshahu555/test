import React from 'react'
import {Box,Button , FormControl, FormLabel,Input} from "@chakra-ui/react";
import {useState} from "react"
import axios from "axios"
const Signup = () => {
  const [user,setUser]=useState({
   name:"", email:"", password:"",
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e,user)=>{
       e.preventDefault()
     axios.post("https://abcd-zc44.onrender.com/users",user)
     alert("Sign Up Successful")
     setUser({name:"", email:"", password:""})
  }
  return (
    <Box>
      <FormControl style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",gap:"10px" ,width:"30%",margin:"auto" ,padding:"10px",backgroundColor:"lightcoral"}}>

        <FormLabel>Name</FormLabel>
        <Input type='text' name="name" value={user.name} onChange={handleChange} />

        <FormLabel>Email</FormLabel>
        <Input type='text' name="email" value={user.email} onChange={handleChange} />

        <FormLabel>Password</FormLabel>
        <Input type='text' name="password" value={user.password} onChange={handleChange} />

        <Button onClick={(e)=>{handleSubmit(e,user)}}>Submit</Button>
      </FormControl>
    </Box>
  )
}

export default Signup
