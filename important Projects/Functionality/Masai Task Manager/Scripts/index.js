// Write code related to Home page here 

let dataTask=JSON.parse(localStorage.getItem("task-list"))||[];

document.querySelector("form").addEventListener("submit",setData);

function setData(event){
    event.preventDefault()

  let dataObj={
    name:document.getElementById("name").value,

    desc:document.getElementById("desc").value,

    start:document.getElementById("start").value,

    end:document.getElementById("end").value,

    priority:document.getElementById("priority").value,


}

 dataTask.push(dataObj);

 localStorage.setItem("task-list",JSON.stringify(dataTask))

}