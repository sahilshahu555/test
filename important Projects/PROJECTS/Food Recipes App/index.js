import navbar from './components/navbar.js'
import { getData,displayData } from './utils/util.js';



let navbarCon=document.getElementById("navbar");   
let result=document.getElementById("result");
document.getElementById("search").addEventListener("keypress",fun)

 async function fun(e){
        try {
            if(e.key=== "Enter") {
                result.textContent="";
                let search= document.getElementById("search").value
                // console.log(search)
                let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
                let response= await getData(url)
                // console.log(response)
                displayData(response,result)
                let search1= document.getElementById("search").value=""
            }
            
        } catch (error) {   console.log(error) }

}

navbarCon.innerHTML=navbar();