import React ,{useState,useEffect}from 'react'

const Home = () => {
    const [data,setData]=useState([])
    const GetBlogs=()=>{
        fetch("http://localhost:3001/blogs",{
            method:"GET",
            headers:{
                 "Content-type":"application/json",
                "Auth": `Bearer ${localStorage.getItem("token")}`
                }  
        }).then((res)=> res.json())
        .then((res)=>setData(res))
        .catch((err)=>{console.log(err)})
    }
    const clearFun=()=>{ 
      localStorage.removeItem("token")
      GetBlogs()
    }

    useEffect(()=>{
        GetBlogs()
    },[])
    console.log(data.blogs)
  return (
    <div>
      <h1>Home Page</h1>
        <button onClick={clearFun}>Logout</button>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.blogs?(data.blogs?.map((elm,i)=>(
            <div>
                <h3>Blog no. : {i+1}</h3>
                <h4>Title: {elm.title}</h4>
                <h6>User ID: {elm.user_id}</h6>
                <h6>Author: {elm.author}</h6>
                <button>edit</button>
                <button>delete</button>
               
            </div>
        ))):(<h1>{data.msg}</h1>)}
      </div>
    </div>
  )
}

export default Home
