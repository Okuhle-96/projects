// VARIABLE DECLARATIONS
const menuBtn = document.querySelector('.menu-btn');


// EVENT LISTENERS
menuBtn.addEventListener('click', toggleMenu);


// FUNCTION DECLARATIONS
function toggleMenu() {
     let mobileMenu = document.querySelector('.mobile-menu');
     mobileMenu.classList.toggle('active');

     if(mobileMenu.classList.contains('active')) {
          menuBtn.textContent = 'Close';
     } else {
          menuBtn.textContent = 'Menu';
     }
}
