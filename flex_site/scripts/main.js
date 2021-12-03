let nav_btn_container = document.querySelector(".menu-btn-container");







nav_btn_container.addEventListener("click", toggleMenu);
//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
// 	keyup EVENT, THEN RUN THE CALLBACK FUNCTION
document.body.addEventListener('keyup', function(e) {
	// IF THE e(EVENT) code IS EQUAL TO Space, THE tagName IS NOT EQUAL TO INPUT AND T THEN CHANGE THE THEME
	if(e.code == "Space" &&  e.target.tagName.toUpperCase() !== "INPUT" && e.target.tagName.toUpperCase() !== "TEXTAREA") {
		// 	CALL THE toggleTheme() FUNCTION
		toggleTheme();
	}
})

document.body.addEventListener('keydown', function(e) {
	// IF THE e(EVENT) code IS EQUAL TO Space, THE tagName IS NOT EQUAL TO INPUT AND T THEN CHANGE THE THEME
	if(e.code == "Space" &&  e.target.tagName.toUpperCase() !== "INPUT" && e.target.tagName.toUpperCase() !== "TEXTAREA") {
		// 	CALL THE preventDefault() FUNCTION WHICH WILL STOP THAT ANOYING SCROLL WHEN YOU PRESS THE SPACE BAR
		e.preventDefault();
	}
})






function toggleMenu() {
	nav_btn_container.classList.toggle("active");
	document.querySelector(".nav-container").classList.toggle("active");
}

// FUNCTION TO MAKE THE THEME CHANGE
function toggleTheme() {
	//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
	// 	keyup EVENT, THEN toggle THE light-mode CLASS
	document.body.classList.toggle('light-mode');	

	if(document.body.classList.contains('light-mode')) {
		document.querySelector(".instructions-container").innerHTML = "<p>Press <span>space</span> to join us on the light side.</p>";
		// document.querySelector(".logo").src = "./images/logo_white.png";
	} else {
		document.querySelector(".instructions-container").innerHTML = "<p>Press <span>space</span> to join us on the dark side.</p>";
		// document.querySelector(".logo").src = "./images/logo.png";
	}
}

