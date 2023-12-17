
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    centeredSlides: true,
    breakpoints:{
        0:{
            slidesPerView:0,
        },
        568:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        },
        
    },
});


let search = document.querySelector('.search-box');
document.querySelector('#search').onclick = () =>{
    search.classList.toggle('active');
   nav.classList.remove('active');
}

 
let nav = document.querySelector('.nav');
document.querySelector('#burger').onclick = () =>{
    nav.classList.toggle('active');
    search.classList.remove('active');

}
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});
    





  