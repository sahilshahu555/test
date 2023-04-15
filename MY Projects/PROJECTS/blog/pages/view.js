import navbar from "../components/navbar.js";
import {  deleteBlog, getData } from "../utils/util.js";

let Navbar=document.getElementById("navbar")

Navbar.innerHTML=navbar();

let container=document.getElementById("containerV");

let blogId=localStorage.getItem("blogId");

async function fetchBlogBy(blogId){
    let url=`http://localhost:3000/blogs/${blogId}`

    let data= await getData(url);
   
    
    displayDataView(data,container);
}

fetchBlogBy(blogId);

 function displayDataView(elm,container){

    let box= document.createElement("div")
        box.id="boxV"
  
        let title= document.createElement("h1")
        title.textContent=elm.title;

        let id= document.createElement("b")
        id.textContent="ID :- "+elm.id;

        let desc= document.createElement("p")
        desc.textContent=elm.desc;

        let author= document.createElement("p")
        author.textContent="Author :- "+elm.author;
        author.id="author"

        
        let editBtn=document.createElement("button")
        editBtn.textContent="Edit"
        editBtn.addEventListener("click",function(){
            location.href="edit.html"
            localStorage.setItem("blogId",elm.id)
        })

        let deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        deleteBtn.addEventListener("click", async function(){
            await deleteBlog(` http://localhost:3000/blogs/${elm.id}`);
            location.href="index.html"
        })

        let miniBox= document.createElement("div")
        miniBox.id="miniBox"

        miniBox.append(editBtn,deleteBtn)

        // appending 
        box.append(title,desc,author,miniBox)
        container.append(box) 
 }




