const memberA = () => {
  var min=1;
  var max=6;
  var randomNumber=Math.floor( Math.random()*( max - min + 1 )+min )

  var memberA= document.getElementById("member-a")
  memberA.textContent=randomNumber;

 return randomNumber
};



const memberB = () => {
  var min=1;
  var max=6;
  var randomNumber=Math.floor( Math.random()*( max - min + 1 )+min )
  var memberB= document.getElementById("member-b")
  memberB.textContent=randomNumber;
 return randomNumber
};

const memberC = () => {
  var min=1;
  var max=6;
  var randomNumber=Math.floor( Math.random()*( max - min + 1 )+min )

  var memberC= document.getElementById("member-c")
  memberC.textContent=randomNumber;

 return randomNumber
};

const findWinner = (val1, val2, val3) => {
  var memberA= document.getElementById("member-a")
  var memberB= document.getElementById("member-b")
  var memberC= document.getElementById("member-c")
  var winner= document.getElementById("winner")



  var arr=[val1, val2, val3];
  arr=arr.sort((a,b)=>b-a)

 if(val1== arr[0]){
    winner.textContent="The winner : Member A";
    memberA.style.backgroundColor="green";
      if(val2>val3){
          memberB.style.backgroundColor="yellow";
          memberC.style.backgroundColor="red";
      }else{
          memberB.style.backgroundColor="red";
          memberC.style.backgroundColor="yellow";
      }
 }
 else if(val2== arr[0]){
    winner.textContent="The winner : Member B";
    memberB.style.backgroundColor="green";
      if(val1>val3){
          memberA.style.backgroundColor="yellow";
          memberC.style.backgroundColor="red";
      }else{
          memberA.style.backgroundColor="red";
          memberC.style.backgroundColor="yellow";
      }
}

else if(val3== arr[0]){
  winner.textContent="The winner : Member C";
  memberC.style.backgroundColor="green";
    if(val1>val2){
        memberA.style.backgroundColor="yellow";
        memberB.style.backgroundColor="red";
    }else{
        memberA.style.backgroundColor="red";
        memberB.style.backgroundColor="yellow";
    }
}


    if(val1== val2 && val2==val3){
      memberA.style.backgroundColor="blue";
      memberB.style.backgroundColor="blue";
      memberC.style.backgroundColor="blue";
      winner.textContent="It's a draw!";
    }
    else if(val1 == val2 ){
      memberA.style.backgroundColor="blue";
      memberB.style.backgroundColor="blue";
      if(val3>val1){
        winner.textContent="The winner : Member C";
      }else{ winner.textContent="It's a draw!";}
    }

    else if(val1 == val3 ){
      memberA.style.backgroundColor="blue";
      memberC.style.backgroundColor="blue";
      if(val2>val3){
        winner.textContent="The winner : Member B";
      }else{ winner.textContent="It's a draw!";}
    }

    else if(val2 == val3 ){
      memberB.style.backgroundColor="blue";
      memberC.style.backgroundColor="blue";
      if(val1>val3){
        winner.textContent="The winner : Member A";
      }else{ winner.textContent="It's a draw!";}
    }

};

window.onload = function () {
  //  get the button here and add click event
  var btn=document.getElementById("roll")
  btn.addEventListener("click",() =>{
    findWinner(memberA(),memberB(),memberC())
  })
};

// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    memberA,
    memberB,
    memberC,
    findWinner,
  };
}
