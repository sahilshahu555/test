import React ,{useState}from 'react'

const Signup = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        age:"",
        phone_number:""
    })
    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            name:user.name,
            email:user.email,
            password:user.password,
            age:Number(user.age),
            phone_number:Number(user.phone_number)
        }
        
        fetch("http://localhost:3000/signup",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        .then((res)=> res.json())
        .then((res)=>console.log(res))
        .catch((err)=>{console.log(err)})
    }

    

  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
      >
      <form onSubmit={handleSubmit}
       style={{display:"flex",justifyContent:"center",
       alignItems:"center",flexDirection:"column",
       width:"120%",margin:"20px",gap:"10px"
      }}
      >

       <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Enter Your Name'/>

       <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email'/>

       <input type="text" name="password" value={user.password} onChange={handleChange} placeholder='Enter Your Password'/>
       
       <input type="number" name="age" value={user.age} onChange={handleChange} placeholder='Enter Your Age'/>

       <input type="number" name="phone_number" value={user.phone_number} onChange={handleChange} placeholder='Enter Your Phone number'/>

       <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
