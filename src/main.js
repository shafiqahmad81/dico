import Swiper from 'swiper';
import './style.css';


import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 70,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const hamburgerIcon = document.getElementById('hamburger-icon');
const mainMenu = document.getElementById('main-menu');
const closeIcon = document.getElementById('close-icon');


hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.remove('hidden');
})
closeIcon.addEventListener('click', () => {
  mainMenu.classList.add('hidden');
})
