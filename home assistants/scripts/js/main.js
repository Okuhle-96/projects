let menu_btn = document.querySelector(".menu-btn-container");

// AOS.init({
//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     duration: 1000 // values from 0 to 3000, with step 50ms
// });

menu_btn.addEventListener("click", toggleMenu);

function toggleMenu() {
	menu_btn.classList.toggle("active");
	document.querySelector(".nav-container").classList.toggle("active");
}