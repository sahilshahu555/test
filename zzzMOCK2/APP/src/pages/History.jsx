import { Box ,Button} from '@chakra-ui/react'
import axios from 'axios'
import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'

const History = () => {
const dispatch=useDispatch()
const {trackerArray}=useSelector((store)=>store)
  const getData=()=>{
    axios.get("https://abcd-zc44.onrender.com/Tracker")
    .then((res)=>dispatch({type:"TRACKER",payload:res.data}))
    .catch((err)=>{console.log(err)})
  }

  const deleteData=(id)=>{
    axios.delete(`https://abcd-zc44.onrender.com/Tracker/${id}`)
    .then((res)=>getData()).catch((err)=>{console.log(err)})
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(trackerArray)
  return (
    <Box>
      <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"bold"}}>History</h1>
      {trackerArray?.map((elm,i)=>(
        <Box key={i} style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"10px" ,width:"70%",margin:"auto" ,padding:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"10px"}}>
          <Box>
            <h2>{elm.category}</h2>
            <p>{elm.date}</p>
            <p>{elm.type}</p>
          </Box>
          <Box>
            {elm.type==="Income"?(
               <h4 style={{color:"green"}}>+{elm.amount}</h4>
            ):(
               <h4 style={{color:"red"}}>-{elm.amount}</h4>
            )}
            <Box>
              <Button>Edit</Button>
              <Button onClick={()=>{deleteData(elm.id)}}>Delete</Button>
            </Box>
          </Box>

        </Box>
      ))}
    
   </Box>
  )
}

export default History
