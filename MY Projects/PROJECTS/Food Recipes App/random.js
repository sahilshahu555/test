import navbar from './components/navbar.js'
import { getData,displayData } from './utils/util.js';

let navbarCon=document.getElementById("navbar");
let result=document.getElementById("result");

 window.onload=async function fun(){
try {
   
        result.textContent="";
        
        
        let url=`https://www.themealdb.com/api/json/v1/1/random.php`
        let response= await getData(url)
        // console.log(response)
        displayData(response,result)
     
      
    
} catch (error) {
    console.log(error)
}

}

navbarCon.innerHTML=navbar();