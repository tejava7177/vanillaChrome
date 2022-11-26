const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.getElementById("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos";
let toDos = [];


function deleteTodo(event){
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos(){
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //console.log(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;      //변수값을 저장한다.
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos;
    //paresedToDos.forEach((item) => console.log("this is the turn off", item));
    paresedToDos.forEach(paintTodo);
}

