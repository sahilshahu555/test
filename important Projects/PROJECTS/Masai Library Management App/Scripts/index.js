// you can write your js code here

var dataArr= JSON.parse(localStorage.getItem("book-list"))||[];

document.querySelector("form").addEventListener("submit",setData);

function setData(event){
     event.preventDefault()

     let name=document.getElementById("name").value ;
     let author=document.getElementById("author").value ;
     let desc=document.getElementById("desc").value ;
     let added=document.getElementById("added").value ;
     let category=document.getElementById("category").value ;
     let price=document.getElementById("price").value ; 

     if(name==="" || author==="" || category==="" || desc==="" || added==="" || isNaN(price)){
        alert("Please fill all fields")
        return;
     }

    let dataObj={
        name:name,
        author:author,
        desc: desc,
        added:added,
        category:category,
        price:price
    }
dataArr.push(dataObj);
localStorage.setItem("book-list",JSON.stringify(dataArr))

}