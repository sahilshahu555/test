document.querySelector("form").addEventListener("submit", addData);

var dataArr=JSON.parse(localStorage.getItem("schedule"))||[];

function addData(event){
    event.preventDefault();
   var dataObj={
    matchNum : document.getElementById("matchNum").value,
    teamA : document.getElementById("teamA").value,
    teamB : document.getElementById("teamB").value,
    date : document.getElementById("date").value,
    venue : document.getElementById("venue").value
   }
   if(dataObj.matchNum=="" ){
    alert("Please fill all information")
    return;
     }
   dataArr.push(dataObj);
   localStorage.setItem("schedule",JSON.stringify(dataArr));

    document.getElementById("matchNum").value="Match Number"
    document.getElementById("teamA").value="Select Team A"
    document.getElementById("teamB").value="Select Team b"
    document.getElementById("date").value="Enter date"
    document.getElementById("venue").value="Select Venue"
}