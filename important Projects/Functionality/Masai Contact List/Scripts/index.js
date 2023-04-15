// Write code related to Home page here
document.querySelector("form").addEventListener("submit",setData);

var dataArr=JSON.parse(localStorage.getItem("contact-list"))||[];

function setData(event){
    event.preventDefault();

    dataObj={
        name :document.getElementById("name").value,
        desc :document.getElementById("desc").value,
        addDate :document.getElementById("addDate").value,
        phone :document.getElementById("phone").value,
        email :document.getElementById("email").value,
        type :document.getElementById("type").value,
    }
    dataArr.push(dataObj);
    localStorage.setItem("contact-list",JSON.stringify(dataArr));
}
