import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {Chart as Chartjs} from "chart.js/auto"
import { Box } from '@chakra-ui/react';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://abcd-zc44.onrender.com/Tracker');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


    function getRandomColors(length) {
      const colors = [];
      for (let i=0; i < length; i++) {
        colors.push('#' + Math.floor(Math.random() *16777215).toString(16));
      }
      return colors;
    }

    const dataIc= data.filter((elem)=>{ return elem.type==="Income" })

    const dataEx= data.filter((elem)=>{ return elem.type==="Expense" })

  return (
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
          <Box>
              <h2>Income</h2>
              {dataIc.length > 0 && (
                <Pie 
                  data={{
                    labels: dataIc.map((item) => item.category),
                    datasets: [{
                        data: dataIc.map((item) => item.amount),
                        backgroundColor: getRandomColors(dataIc.length)
                              }],
                  }}
                />
              )}
          
          </Box>
          <Box>
              <h2>Expense</h2>
              {dataEx.length > 0 && (
                <Pie 
                  data={{
                    labels: dataEx.map((item) => item.category),
                    datasets: [{
                        data: dataEx.map((item) => item.amount),
                        backgroundColor: getRandomColors(dataEx.length)
                              }],
                  }}
                />
              )}
          
          </Box>
    </div>
  );
};





export default Analytics


