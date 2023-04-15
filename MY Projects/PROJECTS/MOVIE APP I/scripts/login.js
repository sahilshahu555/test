

document.getElementById("submit").addEventListener("click", signIn)

function signIn(event){
    event.preventDefault();

       let user=false;

       let email = document.getElementById("email").value;
       let password=document.getElementById("password").value;

       let dataArr=JSON.parse(localStorage.getItem("account"))||[];

       dataArr.map(function(elm){

        if(email== elm.email && password==elm.password){
            user =true;
            alert("login Successful ")
            window.location.replace("index.html") 
        }

       })
       if(user==false){
        alert("Please Enter Valid Email & Password")
      }
    
       

    let form=document.querySelector("form");
    form.reset();
}