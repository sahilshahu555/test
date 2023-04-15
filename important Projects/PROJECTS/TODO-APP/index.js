let todos=[]
let todoContainer=document.getElementById("todoContainer");


async function getTodo(){

try {
    
  let res= await fetch("http://localhost:3000/todos");

  let data= await res.json();
  todos=data;
  console.log(todos);
  displayTodos()

} catch (error) {
    console.log(error)
}

}

function displayTodos(){
todoContainer.textContent="";
    todos.map(function(elm){
     
        let ID=document.createElement("b");
        ID.textContent=elm.id
       

        let list=document.createElement("li");
        list.textContent=elm.task;
       let box=document.createElement("div");
       box.id="box"
        box.append(ID,list)
        todoContainer.append(box);
    })
}

async function addTodo(){
    try {
       let newTodo=document.getElementById("newTodoInput").value
       console.log(newTodo)
       
       let res= await fetch("http://localhost:3000/todos",{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
       },
       body:JSON.stringify({
        "task":newTodo
       })
       });

    } catch (error) {
        console.log(error)
    }
}

async function deleteTodo(){
try {
    let delID=document.getElementById("deleteTodoID").value

    let res= await fetch("http://localhost:3000/todos/"+ Number(delID),{

      method: "DELETE"

    });
} catch (error) {
    console.log(error)
}
}

async function updateTodo(){
    try {
       let updateID=document.getElementById("updateById").value
       
       updateText=document.getElementById("updatedText").value
       
       let res= await fetch("http://localhost:3000/todos/"+Number(updateID),{
       method:"PATCH",
       headers:{
        "Content-Type":"application/json",
       },
       body:JSON.stringify({
        "task":updateText
       })
       });

    } catch (error) {
        console.log(error)
    }
}


getTodo();

// CRUD: CREATE, READ, UPDATE and DELETE.
// GET - READ
// POST - CREATE
// PUT/ PATCH - UPDATE
// DELETE - DELETE

