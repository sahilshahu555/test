import navbar from "../components/navbar.js";
import {fetchBlogs,send}  from "../utils/util.js";

let Navbar=document.getElementById("navbar")

Navbar.innerHTML=navbar();
 const container=document.getElementById("container1");

 send(container);
 
fetchBlogs();

