import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
const [user,setUser]=useState({
    email:"",
    password:"",
})
const handleChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3001/login",{
        method:"POST",
        headers:{ "Content-type":"application/json"},
        body:JSON.stringify(user)
    }).then((res)=> res.json())

    .then((res)=>{console.log(res)
      localStorage.setItem("token",res.token)
      alert("login Successful")
      navigate("/")
      setUser({ email:"", password:"" })
    })

    .catch((err)=>{console.log(err)})
}
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
       
        <input type="text" name="email" placeholder='enter email' value={user.email} onChange={handleChange}/>
        <input type="text" name="password" placeholder='enter password'  value={user.password} onChange={handleChange}/>
       
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
