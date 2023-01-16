const registerForm=document.querySelector('[data-register]')
const username=document.querySelector('#userName');
const email=document.querySelector('#email');
const firstName=document.querySelector('#firstName');
const lastName=document.querySelector('#lastName');
const age=document.querySelector('#age');
const error=document.querySelector('.error');
const password=document.querySelector('#password');

//get deals by register
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const clientName=firstName.value
    const requestBody = {
      username: username.value,
      email:email.value,
      firstName:firstName.value,
      lastName:lastName.value,
      age:age.value,
      password: password.value
    };
    const res = await fetch("http://localhost:4015/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await res.json();
    localStorage.setItem('token',JSON.stringify(data))
    localStorage.setItem('firstName',username.value)
    if(localStorage.getItem("token")){
      window.location.assign("http://127.0.0.1:5501/client/results.html")
  }
    console.log(clientName);
  });