$("body").css("font-family", "Arial, sans-serif");
$("h1").css("text-align", "center");
const $kitty = $(".kitty");
const $top = $kitty.css("top", `${window.innerHeight - 300}` + "px");
let $leftStart = $kitty.css("left", "0px");
let walkBack = false;

//---Cat Walks Right----
let catWalksRight = function () {
	let $left = parseInt($kitty.css("left"));
	let newLeft = $left + 8;
	$kitty.css("left", newLeft + "px");
	if (newLeft > window.innerWidth - 300) {
		clearInterval(timer);
		$kitty.css("transform", "scaleX(-1");
		walkBack = setInterval(catWalksLeft, 40);
	}
};
let timer = setInterval(catWalksRight, 40);

//----Cat Walks Back----
let catWalksLeft = function () {
	let $left = parseInt($kitty.css("left"));
	let newLeft = $left - 8;
	$kitty.css("left", newLeft + "px");
	if (newLeft < window.innerWidth - window.innerWidth) {
		clearInterval(walkBack);
		$kitty.css("transform", "scaleX(1");
		timer = setInterval(catWalksRight, 40);
	}
};
