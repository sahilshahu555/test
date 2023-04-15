// Write code related to dashboard page here

let dataTask=JSON.parse(localStorage.getItem("task-list"))||[];
document.querySelector("#task-count").textContent=dataTask.length;
displayData(dataTask)
function filterFun(){
    let select=document.getElementById("filter").value;
    let fil=dataTask.filter(function(elm){
        if(select===""){return 1;}
        else{return elm.priority === select;}
    })
    displayData(fil);
}

function displayData(Arr){
    document.querySelector("tbody").textContent="";

    Arr.map(function(elm,index){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=elm.name;
        let td2=document.createElement("td");
        td2.textContent=elm.desc;
        let td3=document.createElement("td");
        td3.textContent=elm.start;
        let td4=document.createElement("td");
        td4.textContent=elm.end;
        let td5=document.createElement("td");
        td5.textContent=elm.priority;
        let td6=document.createElement("td");
        td6.textContent="Add To Progress";
        td6.addEventListener("click",function(){
            setData(elm,index);
        })       
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })    }

    
    let dataProgress=JSON.parse(localStorage.getItem("priority-list"))||[];
    function setData(elm,index){
        dataProgress.push(elm)
        localStorage.setItem("priority-list",JSON.stringify(dataProgress))
        dataTask.splice(index,1)
        localStorage.setItem("task-list",JSON.stringify(dataTask))
        displayData(dataTask)
    }

