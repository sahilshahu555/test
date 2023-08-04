import React from 'react'

import{Routes, Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx"
import Login from "../pages/Login.jsx"
import Signup from "../pages/Signup.jsx"

import { useSelector } from 'react-redux'

const AllRoutes = () => {
  const {auth}=useSelector((store)=>store);
  return (
    <div>
     <Routes>
        <Route path="/" element={auth? <Dashboard/>: <Login/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
