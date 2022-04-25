const cat = document.querySelector(".kitty");
cat.style.top = window.innerHeight - cat.height + "px";
cat.style.left = "0px";
let walkBackTimer = false;
const button = document.querySelector(".button");
const blender = document.querySelector(".blender");
const bloodsplat = document.querySelector(".blood1");

blender.style.top = "-400px";
let blenderPosition = false;
let suck = false;
let newTop = 0;
let newLeft = 0;

//cat walking loop catWalks-catWalksBack
let catWalks = function () {
	let left = parseInt(cat.style.left);
	let newLeft = left + 8;
	cat.style.left = newLeft + "px";
	if (newLeft > window.innerWidth - cat.width) {
		clearInterval(timer);
		cat.style.transform = "scaleX(-1)";
		walkBackTimer = setInterval(catWalksBack, 40);
	}
};
let timer = setInterval(catWalks, 40);

let catWalksBack = function () {
	let left = parseInt(cat.style.left);
	let newLeft = left - 8;
	cat.style.left = newLeft + "px";
	if (newLeft < window.innerWidth - window.innerWidth) {
		clearInterval(walkBackTimer);
		cat.style.transform = "scaleX(1)";
		timer = setInterval(catWalks, 40);
	}
};

//on blend button press stops cat and starts blender move
const blendCat = function () {
	clearInterval(walkBackTimer);
	clearInterval(timer);
	blend = setInterval(blenderOn, 50);
};

//blender moves to position then calls suck cat funct
let blenderOn = function () {
	let top = parseInt(blender.style.top);
	newTop = top + 2;
	blender.style.top = newTop + "px";
	if (newTop + 270 > 0) {
		clearInterval(blend);
		suck = setInterval(suckCat, 100);
	}
};

//sucks cat into tube
let suckCat = function () {
	// cat top position
	let catTop = parseInt(cat.style.top);
	let newCatTop = blender.style.bottom + 5;
	cat.style.top = newCatTop + "px";
	// cat left position
	let catLeft = parseInt(cat.style.left);
	let newCatLeft = (window.innerWidth - cat.width) / 2;
	cat.style.left = newCatLeft + "px";
	setTimeout(blood, 4000);
};

//circle thats a very poor representation of blood apears on the ground could of just found a vector or image on google but figured it wasnt important
let blood = function () {
	bloodsplat.style.opacity = 1;
};

button.addEventListener("click", blendCat);
