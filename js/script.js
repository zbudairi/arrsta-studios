const menuNav = document.querySelector(".navbar");
const menuBar = document.querySelector(".hamburger");
const menuNavigation = document.querySelector(".menu");

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle("is-active");
    menuNavigation.classList.toggle('menu-active');
    

});

window.addEventListener('scroll',()=>{
    menuNav.classList.toggle('scrolled', window.scrollY > 0);

    windowPosition = window.scrollY > 200;
    menuBar.classList.toggle("btn-active", windowPosition);
   
});