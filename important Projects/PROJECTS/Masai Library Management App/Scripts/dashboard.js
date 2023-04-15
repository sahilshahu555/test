// you can write your js code 
var dataArr= JSON.parse(localStorage.getItem("book-list"))||[];
document.querySelector("#book-count").textContent=dataArr.length;
displayData(dataArr)

function filfun(){
    let select=document.getElementById("filter").value;

    let fill=dataArr.filter(function(elm){
        if(select===""){return 1;}
        else{return select === elm.category;}
    })
  displayData(fill)
}

function displayData(arr){
    document.querySelector("tbody").textContent="";
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
    td6.textContent="Buy";
    td6.addEventListener("click",function(){setBuy(elm,index)})
    let td7=document.createElement("td")
    td7.textContent="Add";
    td7.addEventListener("click",function(){setBook(elm,index)})

    let td8=document.createElement("td")
    td8.textContent=elm.price;

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)

    document.querySelector("tbody").append(tr);
   })
}
var dataBuy= JSON.parse(localStorage.getItem("buy-list"))||[];

function setBuy(elm,index){
dataBuy.push(elm)
localStorage.setItem("buy-list",JSON.stringify(dataBuy))

dataArr.splice(index,1);
localStorage.setItem("book-list",JSON.stringify(dataArr))
displayData(dataArr);

}

var dataBook= JSON.parse(localStorage.getItem("bookmark-list"))||[];

function setBook(elm,index){

    dataBook.push(elm)
    localStorage.setItem("bookmark-list",JSON.stringify(dataBook))


    dataArr.splice(index,1);
localStorage.setItem("book-list",JSON.stringify(dataArr))
displayData(dataArr);

}