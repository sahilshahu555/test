var matchArr=JSON.parse(localStorage.getItem("schedule"))||[];

displayFun(matchArr);

function filterVenue(){
    var select=document.getElementById("filterVenue").value;

    var filterArr= matchArr.filter(function(elm){
      if(select === "none" ){
        return 1;
    }else{ 
        return elm.venue === select;
    }
   });

    displayFun(filterArr);
}

function displayFun(array){
     
    document.querySelector("tbody").textContent="";

    array.map(function(elm){
     
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
        td6.textContent="Favourite";
        td6.setAttribute("id","Favourite")
        td6.addEventListener("click", function(){addFav(elm)});

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    });
   var favArr=JSON.parse(localStorage.getItem("favourites"))||[];

    function addFav(elm){
      favArr.push(elm);
      localStorage.setItem("favourites",JSON.stringify(favArr));
    }
};