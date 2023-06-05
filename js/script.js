

var register = document.querySelector(".register-link")
var registerBox = document.querySelector(".login-box")
var login = document.querySelector(".login-link")
var closeIcon = document.querySelector(".close")
var loginBtn = document.querySelector(".bbb-btn")

register.addEventListener("click", ()=>{
    registerBox.classList.add("register-box-hight")
})

login.addEventListener("click", ()=>{
    registerBox.classList.remove("register-box-hight")
})

loginBtn.addEventListener("click", ()=>{
    registerBox.classList.add("open")
})

closeIcon.addEventListener("click", ()=>{
    registerBox.classList.remove("open")
})