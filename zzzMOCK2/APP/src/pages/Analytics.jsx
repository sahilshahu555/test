import { Box } from '@chakra-ui/react'
import React from 'react'
import { Chart,ArcElement,Tooltip,Legend} from "chart.js"
import {Pie}  from "react-chartjs-2";


Chart.register(ArcElement,Tooltip,Legend);

const Analytics = () => {
   const dataIncome={
       labels:["one","two","three"],
      datasets:[{data:[3,6,9], backgroundColor:["red","grey","skyblue"]}]
   };
   const dataExpense={
    labels:["Four","five","six"],
    datasets:[{data:[4,5,6], backgroundColor:["green","black","yellow"]}]
   }
   const options ={};

   
  return (
    <Box style={{display:"flex",justifyContent:"space-evenly"}}>
      <Box>
          <h1 style={{fontSize:"28px" ,textAlign:"center",fontWeight:"bold"}}>Income</h1>
          <Pie data={dataIncome} options={options}></Pie>
      </Box>
      <Box>
        <h1 style={{fontSize:"28px" ,textAlign:"center",fontWeight:"bold"}}>Expenses</h1>
          <Pie data={dataExpense} options={options}></Pie>
      </Box>
    </Box>
  )
}

export default Analytics
