import React ,{useState,useEffect}from 'react'

const HomeTodo = () => {
    const [data,setData]=useState([])

    const getTodos=()=>{
     fetch("http://localhost:3000/blogs/",{
        headers:{
            "Content-Type": "application/json",
            "Auth":`Bearer ${localStorage.getItem('token')}`
        }
     })
     .then((res)=> res.json())
     .then((res)=>{console.log(res)
         setData(res.blogs)}
     )
     .catch((err)=>{console.log(err)})
    }
useEffect(()=>{
    getTodos()
},[])
console.log(data)
  return (
    <div >
       <h1 style={{textAlign:"center"}}>Home Page </h1>
       <div style={{display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
        {data?.map((elm,i)=>(
            <div style={{textAlign:"left",margin:"20px",border:"1px solid red",padding:"10px"}}>
                <h3>Blog no :{ i+1}</h3>
                <h4>Title : {elm.title}</h4>
                <p>Desc : {elm.description}</p>
                <p>Author : {elm.user_name}</p>
            </div>
        ))}
       </div>
    </div>
  )
}

export default HomeTodo
