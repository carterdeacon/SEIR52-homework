console.log("mad-libs.js linked");

// ## Mad Libs

// Start with this webpage, which has several input elements and a button:
 const $userInput = $(`<h1>Mad Libs</h1><ul><li>Noun (plural): <input type="text" id="noun"><li>Adjective:<input type="text" id="adjective"><li>Someone's Name: <input type="text" id="person"></ul><button id="lib-button">Lib it!</button><div id="story"></div>`);

 $endOfPage.before($userInput);

 // - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
 const makeMadLib = function () {
    // retrieve the current values of the form input elements
    const noun = $("#noun").val();
    const adjective = $("#adjective").val();
    const name = $("#person").val();
 
    const story = `${ name } really likes ${ adjective } ${ noun }.`;
    $("#story").html(story);
 };

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
const $libButton = $("#lib-button");
$libButton.on("click", makeMadLib);

pageRule();