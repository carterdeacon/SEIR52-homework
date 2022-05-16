// # Exercises: Events

// ## Mad Libs

// Start with this webpage, which has several input elements and a button:
// ```html

// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Add an event listener to the button so that it calls a makeMadLib function when clicked.


// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

//const $button = $('#lib-button');

const makeMadLib = function () {

  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const name = $('#person').val();
  const story = `${ name } really likes ${ adjective } ${ noun }.`
  $('#story').text(story); // if we use prepend it will add continuesly when we click the button
  //console.log('make mad lib');
}
//$button.on('click', makeMadLib);

$('#lib-button').on('click', makeMadLib)