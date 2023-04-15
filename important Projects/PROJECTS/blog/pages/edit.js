import navbar from "../components/navbar.js";
import {  deleteBlog, getData } from "../utils/util.js";

let Navbar=document.getElementById("navbar")

Navbar.innerHTML=navbar();

let container=document.getElementById("containerE");

let blogId=localStorage.getItem("blogId");

async function fetchBlogBy(blogId){
    let url=`http://localhost:3000/blogs/${blogId}`

    let data= await getData(url);
   
    
    displayDataView(data,container);
}

fetchBlogBy(blogId);

 function displayDataView(elm,container){

    let box= document.createElement("div")
        box.id="boxE"
  
        let titleName= document.createElement("h3")
        titleName.textContent="Edit Title";

        let title= document.createElement("input")
        title.value=elm.title;
       
        let descE= document.createElement("h3")
        descE.textContent="Edit Description";

        let desc= document.createElement("textarea")
        desc.textContent=elm.desc;

        let authorE= document.createElement("h3")
        authorE.textContent="Edit Author Name";

        let author= document.createElement("input")
        author.value=elm.author;
        
        let editBtn=document.createElement("button")
        editBtn.textContent="Edit Blog"
        editBtn.addEventListener("click", async function () {
            try {
              let blogData = {
                title: title.value,
                desc: desc.value,
                author:author.value,
              };
              await fetch(`http://localhost:3000/blogs/${blogId}`, {
                method: "PUT",
                body: JSON.stringify(blogData),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              location.href = "index.html";
            } catch (error) {
              console.log(error);
            }
          });

        let miniBox= document.createElement("div")
        miniBox.id="miniBox"

        miniBox.append(editBtn)

        // appending 
        box.append(titleName,title,descE,desc,authorE,author,miniBox)
        container.append(box) 
 }






