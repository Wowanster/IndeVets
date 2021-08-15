
//login
const header=document.querySelector(".header");
const loginModal=document.querySelector(".login");
const loginClose=document.querySelector(".login__close");

document.addEventListener("click", function(event){
   if (event.target.classList.contains('nav--active')){
   loginModal.classList.add('login--active');
   }
});

loginModal.addEventListener('click',function(event){
    if (event.target.classList.contains('login__close')){
        loginModal.classList.remove('login--active');
    }
});

//burger
const burger=document.querySelector('.burger');
const burgerLink=document.querySelector('.burger__link');
const burgerBack=document.querySelector('.burger__background');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger--active');
    burgerBack.classList.toggle('burger--isAct');
    if (burger.classList.contains('burger--active')){
        burgerLink.classList.add("burger__menu");}
    else {
        burgerLink.classList.remove("burger__menu");
    }
});
document.addEventListener('click',function(event){
    if (event.target.classList.contains('burger__background')){
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

//scroll on click
document.addEventListener('click',function(event){
    let anhors=event.target.hash;
    if(anhors!=undefined && anhors!=""){
        event.preventDefault();
        document.querySelector(anhors).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
        remove(); 
    }
})

//scroll block
function onEntry(entry) {
    entry.forEach(function(change) {
      if (change.isIntersecting) {
        change.target.classList.add('section--show');
      }
    });
  }
  
let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let section=document.querySelectorAll('.section');
for (let elm of section) {
    observer.observe(elm);
  }
