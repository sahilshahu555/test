import React, { useState } from 'react'
import {Button, FormControl,FormLabel,Input,Select} from "@chakra-ui/react"
import axios from 'axios'

const Tracker = () => {
  const [data, setData] = useState({
    type: '',
    category: '',
    amount: '',
    date: '',
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://abcd-zc44.onrender.com/Tracker',data)
    .then((res) => {console.log('Data stored ');})
    .catch((error) => {console.error( error); });
     setData({
      type: '',
      category: '',
      amount: '',
      date: '',
     })
     alert("created ")
  }
  return (
    <>
    <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"bold"}}>Tracker</h1>

    <FormControl style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",gap:"10px" ,width:"30%",margin:"auto" ,padding:"10px",backgroundColor:"lightcoral"}}>
    
    
       <FormLabel>Type :</FormLabel>
        <Select type='text' name="type" value={data.type} onChange={handleChange} >
        <option value="#">Select Type</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
        </Select>
      {/*  */}
      <FormLabel>Category :</FormLabel>
        <Select type='text' name="category" value={data.type} onChange={handleChange} >
        {data.type==="Income"?(
        <>
         <option value="Salary">Salary</option>
         <option value="Gifts">Gifts</option>
         <option value="Refunds">Refunds</option>
         <option value="Other">Other</option>
        </>
        ):(
        <>
         <option value="Food & Drinks">Food & Drinks</option>
         <option value="Shopping">Shopping</option>
         <option value="Housing">Housing</option>
         <option value="Bills">Bills</option>
         <option value="Vehicle & Transport">Vehicle & Transport</option>
        <option value="Lifestyle">Lifestyle</option>
        </>)}
        </Select>
        {/* */}
          <FormLabel>Amount</FormLabel>
        <Input type='text' name="amount" value={data.amount} onChange={handleChange} />
      
      <FormLabel></FormLabel>
        <Input type='date' name="date" value={data.date} onChange={handleChange} />
     <Button colorScheme="blue" onClick={handleSubmit}>Create</Button>
  </FormControl>
   </>
  )
}

export default Tracker
