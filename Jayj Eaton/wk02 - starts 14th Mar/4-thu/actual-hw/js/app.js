//----about me----
$("body").css("font-family", "Arial, sans-serif");
$("#nickname").html("oldbettie");
$("#favorites").html("Drum & Bass, Electro, Punkrock");
$("#hometown").html("Perth");
//---this is----
// $(".about").each(function () {
// 	$(this).addClass("listitem");
// 	$(this).css("color", "red");
// });
//--same as-- jQuery is smart enough to not have to use loops
$(".about").addClass("listitem").css("color", "red");

//
//---this one stumped me errors getting the image to display was annoying
// let $image = $("<img>");
// $image.attr("src", "me.jpeg").appendTo(".container");
//---same as---
$('<img src="me.jpeg">').appendTo(".container");
//
//----books----
const books = [
	{ title: "The Design of EveryDay Things", author: "Don Norman", alreadyRead: false },
	{ title: "The Most Human Human", author: "Brian Christian", alreadyRead: true },
];
// i first wrote this as a normal function then changed it to be single line => function
books.forEach((book) => $("<p>").html(`${book.title} written by ${book.author}`).appendTo(".container"));
//
//----Lib it----
$("#lib-button").click(function () {
	const noun = $("#noun").val();
	const adj = $("#adjective").val();
	const person = $("#person").val();
	$(`<p class="todo">${person} really loves ${noun} ${adj}</p>`).appendTo("#story");
});
// ---removes the child element. note you have to use the parent to choose the child to delete --- this removes all items with class todo havnt figured out how to remove just 1
$("p").click(function () {
	$(this).remove();
});

//
//
//
// before jQuery
// const aTags = document.querySelectorAll("a");

// aTags.forEach((element) => {
// 	let imgHref = element.getAttribute("href");
// 	let thumbnail = youtube.generateThumbnailUrl(imgHref);
// 	let image = document.createElement("img");
// 	image.src = thumbnail;
// 	element.appendChild(image);
// });

//With jQuery
// const $links = $("a");

// for (let i = 0; i < $links.length; i++) {
// 	const $link = $links.eq(i); // acces element as jquery object
// 	const href = $link.attr("href"); //just the href src
// 	let thumbnail = youtube.generateThumbnailUrl(href);
// 	const $image = $("<img>");
// 	$image.attr("src", thumbnail);
// 	$link.prepend($image);
// }

// each is jquery forEach
$("a").each(function () {
	const href = $(this).attr("href");
	const thumbnail = youtube.generateThumbnailUrl(href);
	$("<img>").attr("src", thumbnail).prependTo(this);
});

// SMART WAY PROBABLY NOT WORTH IT
// $("a").each(function () {
// 	$(this).prepend($("<img>").attr("src", youtube.generateThumbnailUrl($(this).attr("href"))));
// });
