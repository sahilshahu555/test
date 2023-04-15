let dataArr=JSON.parse(localStorage.getItem("account"))||[];

document.querySelector("form").addEventListener("submit",setData);

function setData(event){
    event.preventDefault();

    let dataObj={
        name: document.getElementById("name").value,
        contact:document.getElementById("contact").value,
        email: document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

   if( dataObj.name=="" || dataObj.contact=="" || dataObj.email=="" || dataObj.password =="" ){
    alert("Please fill All the fields ")
    return;
   }

    dataArr.push(dataObj);
    localStorage.setItem("account",JSON.stringify(dataArr));

    alert("Sign Up SuccessFull")
    
    let form=document.querySelector("form");
    form.reset();

}