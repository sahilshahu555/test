import React,{useState} from 'react'
import {Button, Box,VStack} from "@chakra-ui/react"
import  Tracker  from './Tracker'
import Analytics from "./Analytics"
import History from "./History"

const Dashboard = () => {
  const [active,setActive]=useState("Tracker");

  const renderFun=()=>{
    switch (active) {
      case "Analytics" : return <Analytics/>;
      case "History" : return <History/>;  
      default:  return <Tracker />;  
    }
  }
  return (
    <Box>
    < Box
    style={{display:"flex",
    justifyContent:"space-evenly",padding:"10px",backgroundColor:"skyblue",
    width:"70%", margin:"auto"}}
    >

      <Button
       onClick={()=>{setActive("Tracker")}}
       color={active==="Tracker"?"blue":"grey"}
       >Tracker</Button>

      <Button
       onClick={()=>{setActive("Analytics")}}
       color={active==="Analytics"?"blue":"grey"}
      >Analytics</Button>

      <Button
       onClick={()=>{setActive("History")}}
       color={active==="History"?"blue":"grey"}
      >History</Button>

     
    </Box>
   
      <Box >{renderFun()}</Box>

    </Box>
  )
}

export default Dashboard
