// Write code related to Done page here 

let dataDon=JSON.parse(localStorage.getItem("done-list"))||[];

displayData(dataDon)

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

       
       
        tr.append(td1,td2,td3,td4,td5)

        document.querySelector("tbody").append(tr)

    })
}

