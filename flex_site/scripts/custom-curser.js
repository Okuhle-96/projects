const site_links = document.querySelectorAll("a")
const custom_cursor = document.querySelector(".custom-cursor");






// FUNCTION TO MAKE THE custom_cursor MOVEWITH THE MOUSE
document.addEventListener('mousemove', function(e) {
	// 	DYNAMICALLY ADJUST THE TOP POSITION OF THE custom_cursor BASED ON THE ACTUAL MOUSE
	custom_cursor.style.top = (e.pageY- 10) + "px";
	// 	DYNAMICALLY ADJUST THE LEFT POSITION OF THE custom_cursor BASED ON THE ACTUAL MOUSE
	custom_cursor.style.left = (e.pageX -10) + "px"; 
})






// 	HERE, WE LOOP THROUGH THE LIST 
site_links.forEach(function(link) {
	//	ADD A mouseover EVENT LISTENER TO EACH INDIVIDUAL link
	link.addEventListener("mouseover", function() {
		// 	WHEN THE link IS HOVERED ON, ADD THE expand CLASS
		custom_cursor.classList.add("expand");
	})
	//	ADD A mouseover EVENT LISTENER TO EACH INDIVIDUAL link
	link.addEventListener("mouseleave", function() {
		// 	WHEN THE MOUSE LEAVES THE Link, REMOVE THE expand CLASS
		custom_cursor.classList.remove("expand");
	})

	link.addEventListener("click", function() {
		toggleMenu();
	})
})