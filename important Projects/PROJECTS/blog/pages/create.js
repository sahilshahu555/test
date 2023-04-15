import navbar from "../components/navbar.js";

let Navbar=document.getElementById("navbar")

Navbar.innerHTML=navbar();

let container=document.getElementById("container")

 

function displayDataView(container){

    let box= document.createElement("div")
        box.id="boxC"
  
        let titleName= document.createElement("h3")
        titleName.textContent="Edit Title";

        let title= document.createElement("input")
        title.placeholder="Enter Title";
       
        let descE= document.createElement("h3")
        descE.textContent="Edit Description";

        let desc= document.createElement("textarea")
        desc.placeholder="Enter Description";


        let authorE= document.createElement("h3")
        authorE.textContent="Edit Author Name";

        let author= document.createElement("input")
        author.placeholder="Enter Author";

        
        let createBtn=document.createElement("button")
        createBtn.textContent="Create Blog"
        createBtn.addEventListener("click", async function () {
            try {
            
                let blog ={
                    title:title.value,
                    desc: desc.value,
                    author:author.value
                }
                await fetch (`http://localhost:3000/blogs`,{
                  
                     method: "POST", 
                     body: JSON.stringify(blog), 
                     headers:{"Content-Type": "application/json"},
                  } 
                )
                location.href = "index.html";
            } catch (error) {
              console.log(error);
            }
          });

        let miniBox= document.createElement("div")
        miniBox.id="miniBox"

        // miniBox.append(createBtn)

        // appending 
        box.append(titleName,title,descE,desc,authorE,author,createBtn)
        container.append(box) 
 }

 displayDataView(container);