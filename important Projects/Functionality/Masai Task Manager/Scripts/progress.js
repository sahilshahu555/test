// Write code for the Progress page here 

let dataProgress=JSON.parse(localStorage.getItem("priority-list"))||[];

displayData(dataProgress)

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
        td6.textContent="Add ";
        td6.addEventListener("click",function(){
            setDone(elm,index);
        })
       
        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)

    })
}

let dataDone=JSON.parse(localStorage.getItem("done-list"))||[];

    function setDone(elm,index){

        dataDone.push(elm)
        localStorage.setItem("done-list",JSON.stringify(dataDone))

        dataProgress.splice(index,1)
        localStorage.setItem("priority-list",JSON.stringify(dataProgress))
        displayData(dataProgress)
    }