const login=document.querySelector(".nav__in");
const loginModal=document.querySelector(".login");
const loginClose=document.querySelector(".login__close")

login.addEventListener("click",function(){
   loginModal.classList.add("login--active");
});

loginModal.addEventListener('click',function(event){
    if(event.target.classList.contains("login__close")){
        loginModal.classList.remove("login--active");
    }
})
