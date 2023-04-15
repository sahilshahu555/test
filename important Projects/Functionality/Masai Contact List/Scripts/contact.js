// Write code related to Contact page here
var dataArr=JSON.parse(localStorage.getItem("contact-list"))||[];
displayData(dataArr);
function filterFun(){
    var select= document.getElementById("filter").value;
    var filterArr = dataArr.filter(function(elm){
      if(select === ""){
        return 1;
      }else{
        return select === elm.type;
      }
    });
    displayData(filterArr);
}
function displayData(Arr){
    document.querySelector("tbody").textContent=""
    Arr.map(function(elm,index){

    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.textContent=elm.name
    var td2=document.createElement("td");
    td2.textContent=elm.desc
    var td3=document.createElement("td");
    td3.textContent=elm.addDate
    var td4=document.createElement("td");
    td4.textContent=elm.phone
    var td5=document.createElement("td");
    td5.textContent=elm.email
    var td6=document.createElement("td");
    td6.textContent=elm.type
    var td7=document.createElement("td");
    td7.textContent="Delete"
    td7.addEventListener("click",function(){dataDel(elm,index)})
    tr.append(td1,td2,td3,td4,td5,td6,td7)
    document.querySelector("tbody").append(tr);
    });
}
 var delArr=JSON.parse(localStorage.getItem("deleted-list"))||[];
function dataDel(elm,index){
delArr.push(elm);
localStorage.setItem("deleted-list",JSON.stringify(delArr));
dataArr.splice(index,1);
localStorage.setItem("contact-list",JSON.stringify(dataArr));
displayData(dataArr);
}