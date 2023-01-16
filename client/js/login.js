const loginForm=document.querySelector('[data-login]');
const userName=document.querySelector('#userName');
const password=document.querySelector('#password');
const error=document.querySelector('.error');

//refresh every sign in
localStorage.clear()

//get deals by login
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const requestBody = {
      username: userName.value,
      password: password.value,
    };
    const res = await fetch("http://localhost:4015/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await res.json();
    const{token,username,errorMessage}=data

    if(errorMessage){error.innerHTML=JSON.stringify(errorMessage.message)}
    else{
    localStorage.setItem('token',token)
    localStorage.setItem('username',username)
    if(localStorage.getItem("token")){
      window.location.assign("http://127.0.0.1:5501/client/results.html")
  }}});