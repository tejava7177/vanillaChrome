const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
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
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    //greeting.innerText = "hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log("username");
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
//loginButton.addEventListener("click", btnClick);

