const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
//const loginButton = loginForm.querySelector("button");

/*
function btnClick() {
    // console.dir(loginInput);
    // console.log("click!");
    console.log(loginInput.value);
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long");
    }
}
*/

function onLoginSubmit(event){
    event.preventDefault();
    //const username = loginInput.value;
    // console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    //greeting.innerText = "hello " + username;
    paintGreetings(username);
    //console.log("username");
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("click");
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


//link.addEventListener("click", handleLinkClick);
//loginButton.addEventListener("click", btnClick);

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //show the greeting
    paintGreetings(savedUsername);
    
}