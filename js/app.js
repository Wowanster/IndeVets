const header=document.querySelector(".header");
const loginModal=document.querySelector(".login");
const loginClose=document.querySelector(".login__close")

//login
document.addEventListener("click",function(event){
   if(event.target.classList.contains('nav--active')){
   loginModal.classList.add('login--active');
   }
});

loginModal.addEventListener('click',function(event){
    if(event.target.classList.contains('login__close')){
        loginModal.classList.remove('login--active');
    }
})

//burger
const burger=document.querySelector('.burger');
const burgerLink=document.querySelector('.burger__link');
const burgerBack=document.querySelector('.burger__background');
burger.addEventListener('click', function(){
    burger.classList.toggle('burger--active');
    burgerBack.classList.toggle('burger--isAct');
    if(burger.classList.contains('burger--active')){
        burgerLink.classList.add("burger__menu");}
    else{
        burgerLink.classList.remove("burger__menu");
    }
});
document.addEventListener('click',function(event){
    if(event.target.classList.contains('burger__background')){
        remove();
    }
});

//remuve class burger active
function remove(){
    burger.classList.remove('burger--active');
    burgerLink.classList.remove('burger__menu');
    burgerBack.classList.remove('burger--isAct');
};

//window resize
window.addEventListener('resize',function(){
    if(document.documentElement.clientWidth>768){
        remove();
    }
})

//scroll

document.addEventListener('click',function(event){
    let anhors=event.target.hash;
    event.preventDefault();
    if(anhors!=undefined && anhors!=""){
        document.querySelector(anhors).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
        remove(); 
    }
})
