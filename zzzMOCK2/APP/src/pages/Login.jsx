import React from 'react'
import {Box,Button , FormControl, FormLabel,Input} from "@chakra-ui/react";
import {useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../Redux/action';
const Login = () => {
  const navigate=useNavigate()
  const [user,setUser]=useState({
    email:"", password:"",
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const dispatch = useDispatch();
  const handleSubmit=(e,user)=>{
       e.preventDefault()
     axios.get("https://abcd-zc44.onrender.com/users")
     .then(({data})=>{
      let AuthUser= data.filter((elm)=>{
        return user.email=== elm.email && user.password === elm.password;
      });
        if(AuthUser){
          dispatch(authenticate(true))
          alert("login successful")
          navigate("/")
        setUser({
          email: '',
          password: ''
        })
        }else{
          dispatch(authenticate(false))
          alert("login Failed")
          setUser({ email: '', password:''})
        }
     })
    
  }
  return (
    <Box>
      <FormControl style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",gap:"10px" ,width:"30%",margin:"auto" ,padding:"10px",backgroundColor:"lightcoral"}}>
       

        <FormLabel>Email</FormLabel>
        <Input type='text' name="email" value={user.email} onChange={handleChange} />

        <FormLabel>Password</FormLabel>
        <Input type='text' name="password" value={user.password} onChange={handleChange} />

        <Button onClick={(e)=>{handleSubmit(e,user)}}>Submit</Button>
      </FormControl>
    </Box>
  )
}

export default Login
