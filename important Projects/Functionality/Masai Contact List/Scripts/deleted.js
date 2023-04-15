// Write code related to Deleted page here
// Write code related to Contact page here
var dataArr=JSON.parse(localStorage.getItem("deleted-list"))||[];

displayData(dataArr);
function displayData(Arr){
    Arr.map(function(elm){
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
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);
    });
}

