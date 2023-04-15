var Container;

export function send(container){
        Container=container;
    }
 export async function getData(url){
   try {
    let res= await fetch(url);
    let data = res.json()
    return data;
   } catch (error) {
    console.log(error)
   }
};

export async function fetchBlogs (){

    try {
     
     
     let url=`http://localhost:3000/blogs`
 
     let data=await getData(url);
 
      displayData(data,Container);
 
    } catch (error) {
     console.log(error)
    }
 }

 export function displayData (data,Container){
    
    Container.textContent="";
    data.map((elm)=>{
      
        let box= document.createElement("div")
        box.id="box"
  
        let title= document.createElement("h2")
        title.textContent=elm.title;

        let id= document.createElement("b")
        id.textContent="ID :- "+elm.id;

        let desc= document.createElement("p")
        desc.textContent=elm.desc;

        let author= document.createElement("b")
        author.textContent="Author :- "+elm.author;

        let viewBtn=document.createElement("button")
        viewBtn.id="viewBtn"
        viewBtn.textContent="View"
        viewBtn.addEventListener("click",function(){
            location.href="view.html"
            localStorage.setItem("blogId",elm.id)
        })

        let editBtn=document.createElement("button")
        editBtn.id="editBtn"
        editBtn.textContent="Edit"
        editBtn.addEventListener("click",function(){
            location.href="edit.html"
            localStorage.setItem("blogId",elm.id)
        })

        let deleteBtn=document.createElement("button")
        deleteBtn.id="deleteBtn"
        deleteBtn.textContent="Delete"
        deleteBtn.addEventListener("click", async function(){
            await deleteBlog(` http://localhost:3000/blogs/${elm.id}`);
            
        })

        let miniBox= document.createElement("div")
        miniBox.id="miniBox"

        miniBox.append(viewBtn,editBtn,deleteBtn)

        // appending 
        box.append(id,title,author,miniBox)
        Container.append(box)

    })
    
};



export async function deleteBlog(url){

  try {
      await fetch(url,{
        method: "DELETE",
      });
      fetchBlogs();

  } catch (error) {
    console.log(error)
  }
    
}