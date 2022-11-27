const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.getElementById("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos";
let toDos = [];


function deleteTodo(event) {
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //console.log(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;      //변수값을 저장한다.
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos;                   //배열을 새로고고침 하지 않고 유지
    //paresedToDos.forEach((item) => console.log("this is the turn off", item));
    paresedToDos.forEach(paintTodo);        //새로고침을 해도 리스트가 남아있음.
}

