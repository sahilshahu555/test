import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate();
const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
   
})
const handleChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3001/signup",{
        method:"POST",
        headers:{ "Content-type":"application/json"},
        body:JSON.stringify(user)
    }).then((res)=> res.json())

    .then((res)=>{console.log(res)
    alert("Signup Successful")
    navigate("/login")
    setUser({  name:"",email:"", password:"" })
    })
    
    .catch((err)=>{console.log(err)})
}
console.log(user)
  return (
    <div  >
      <form onSubmit={handleSubmit}
        style={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            flexDirection:"column",
            gap:"20",padding:"20px"
        }}
      >
        <input type="text" name="name" placeholder='enter name' value={user.name} onChange={handleChange}/>
        <input type="text" name="email" placeholder='enter email' value={user.email} onChange={handleChange}/>
        <input type="text" name="password" placeholder='enter password'  value={user.password} onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
