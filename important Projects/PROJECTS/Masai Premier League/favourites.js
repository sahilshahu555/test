var favArr=JSON.parse(localStorage.getItem("favourites"))||[];

displayFav();

function displayFav(){
    document.querySelector("tbody").textContent=""
    favArr.map(function(elm, index){
     
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.textContent=elm.matchNum;

        var td2=document.createElement("td");
        td2.textContent=elm.teamA;

        var td3=document.createElement("td");
        td3.textContent=elm.teamB;

        var td4=document.createElement("td");
        td4.textContent=elm.date;

        var td5=document.createElement("td");
        td5.textContent=elm.venue;

        var td6=document.createElement("td");
        td6.textContent="Delete";

        td6.addEventListener("click", function(){removeFav(index)});

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    });
  

    function removeFav(index){
      favArr.splice(index,1);
      localStorage.setItem("favourites",JSON.stringify(favArr));
      displayFav();
    }
};