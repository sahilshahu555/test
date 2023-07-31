import React from 'react'
import{Route,Routes}from "react-router-dom"
import HomeTodo from '../pages/HomeTodo'
import AddTodo from '../pages/AddTodo'
import EditTodo from '../pages/EditTodo'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<HomeTodo/>} />
      <Route path="/add" element={<AddTodo/>} />
      <Route path="/edit/:id" element={<EditTodo/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      
    </Routes>
  )
}

export default AllRoutes
