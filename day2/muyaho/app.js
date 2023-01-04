const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function LogInBtnClick() {
    const username = loginInput.value

    console.log(username)

}


// loginButton.addEventListener("click", LogInBtnClick)