// you can write your js code here
var dataArr= JSON.parse(localStorage.getItem("buy-list"))||[];

displayData(dataArr)

function displayData(arr){

    arr.map(function(elm,index){
    let tr=document.createElement("tr");

    let td1=document.createElement("td")
    td1.textContent=elm.name;

    let td2=document.createElement("td")
    td2.textContent=elm.author;

    let td3=document.createElement("td")
    td3.textContent=elm.desc;

    let td4=document.createElement("td")
    td4.textContent=elm.added;

    let td5=document.createElement("td")
    td5.textContent=elm.category;

    
    let td6=document.createElement("td")
    td6.textContent=elm.price;

    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr);
   })
}