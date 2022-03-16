const cat = document.querySelector(".kitty");
cat.style.top = window.innerHeight - cat.height + "px";
cat.style.left = "0px";
cat.style.rotate = "0deg";
let walkBackTimer = false;

let catWalks = function () {
	let left = parseInt(cat.style.left);
	let newLeft = left + 10;
	cat.style.left = newLeft + "px";
	if (newLeft > window.innerWidth - cat.width) {
		clearInterval(timer);
		cat.style.transform = "scaleX(-1)";
		walkBackTimer = setInterval(catWalksBack, 30);
	}
};
let timer = setInterval(catWalks, 30);

let catWalksBack = function () {
	let left = parseInt(cat.style.left);
	let newLeft = left - 10;
	cat.style.left = newLeft + "px";
	if (newLeft < window.innerWidth - window.innerWidth) {
		clearInterval(walkBackTimer);
		cat.style.transform = "scaleX(1)";
		timer = setInterval(catWalks, 30);
	}
};
