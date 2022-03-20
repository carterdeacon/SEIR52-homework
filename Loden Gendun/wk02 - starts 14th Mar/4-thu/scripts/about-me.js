console.log("about-me.js linked");

// Start with this HTML and save it as "aboutme.html":
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
// ```


// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$("body").css("font-family", "Arial, sans-serif");

// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
$("#nickname").append("Lodedodeypodeypoo");
$("#favorites").append("Nah, I'm good thanks.");
$("#hometown").append("Clareville");

// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
$("li").addClass("listitem");
$("script").eq(0).before($("<style> .listitem { color: red } </style>"));

// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const $endOfPage = $("style");
$endOfPage.before($("<img src='http://www.fillmurray.com/250/400'>"));


const rule = $("<hr>");
const pageRule = function() {
    $endOfPage.before($("<hr>"));
};
pageRule();