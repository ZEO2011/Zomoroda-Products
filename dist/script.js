// Variables

let link = document.querySelectorAll("nav ul li");
let headerMenu = document.querySelector("nav button");
let navLink = document.querySelector("nav ul");
let appear = document.querySelector(".appear");
let appearLinks = document.querySelectorAll(".appear li a");
let projectBoxes = document.querySelectorAll("#projects .boxes .box img");
let contactInfo = document.querySelectorAll("#contact-us .boxes .box p");

// Header Button

headerMenu.onclick = function () {
	navLink.classList.toggle("appear");
	let headerMenuIcon = document.querySelector("nav button i");
	headerMenuIcon.classList.toggle("fa-xmark");
};

// go to up arrow

let scrollBtn = document.getElementById("scroll");
scrollBtn.style.display = "none";

scrollBtn.onclick = () => window.scrollTo(0, 0);

window.onscroll = function () {
	if (window.scrollY <= 800) scrollBtn.style.opacity = "0";
	else {
		scrollBtn.style.display = "block";
		scrollBtn.style.opacity = "1";
	}
};

// Contact us copy

contactInfo.forEach(function (el) {
	el.onclick = function (event) {
		document.execCommand(event.target.innerHTML.trim());
	};
});
