window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	let btn = document.getElementById("theGreen")
	btn.addEventListener("click", wohoAlert);
};

// The listener function here
let wohoAlert = () => {
	alert("woohoo!")
};