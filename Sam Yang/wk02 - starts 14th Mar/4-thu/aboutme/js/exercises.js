//Create a new Javascript file and link to it with a script tag at the bottom.
//(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif"./
//(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
//Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
//Create a new img element and set its src attribute to a picture of you. Append that element to the page.

//document.getElementsByTagName("body");
//let fontBody = document.body;
//fontBody.style.fontFamily = "Arial, sans-serif";

// document.body.style.fontFamily = "Arial, sans-serif";

// const nickname = document.getElementById("nickname");
// nickname.innerHTML = "Spiderman";
// const favorites= document.getElementById("favorites");
// favorites.innerHTML = "cats";
// document.getElementById("hometown").innerHTML = "Mel";

// const lis = document.getElementsByTagName("li")
// for (let i = 0; i < lis.length; i ++) {
//     const item = lis[i];
//     item.className = "listitem";
// }


 
$("body").css("font-family", "Arial, sans-serif");
// $("body").css("font-family": "Arial, sans-serif");  // can do multiple changes at once, i.e. css("font-family": "Arial, sans-serif", "color" : "blue")
const $nickname = $("#nickname"); 
$nickname.html("Spiderman");    // $("nickname").html("spiderman") when you don't need this nickname as a variable and just need to change the text.

$("#favorites").text("cats");    //text will shows exactly what's in the bracket
$("#hometown").text("Melbourne");

//use jquery in a loop
// const $lis = $("li")
// for (let i = 0; i < $lis.length; i ++) {
//     const $li = $lis.eq(i);
//     $li.addClass("listitem");
// }

// .each takes a function and runs that for each element in the collection
// $lis.each(function() {
//     $(this).addClass("listitem")   //"this" will be the current element
// }) 

// simple version
$("li").addClass("listitem")

// const $image = $("<img>");   // creating; not selecting
// $image.attr("src, "https://i.imgur.com/enRL6HB.jpeg");
// $("body").append($image)

// const $image = $("<img src="http://www.fillmurray.com/250/400">");
// $("body").append($image);

$('<img src="https://www.fillmurray.com/250/400">').appendTo("body")
