const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function btnClick(){
    // console.dir(loginInput);
    // console.log("click!");
    console.log(loginInput.value);

}


loginButton.addEventListener("click", btnClick);