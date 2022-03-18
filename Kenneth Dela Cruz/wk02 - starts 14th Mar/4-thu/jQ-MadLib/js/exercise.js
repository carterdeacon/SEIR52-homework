// ## Mad Libs

// Start with this webpage, which has several input elements and a button:
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title></title>
//  </head>
//  <body>
 
//  <h1>Mad Libs</h1>
 
//  <ul>
//   <li>Noun: <input type="text" id="noun">
//   <li>Adjective: <input type="text" id="adjective">
//   <li>Someone's Name: <input type="text" id="person">
//  </ul>
 
//  <button id="lib-button">Lib it!</button>
  
//  <div id="story"></div>
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const makeMadLib = function(){
  $('#story').html(`${$('#person').val()} is a ${$('#adjective').val()} ${$('#noun').val()}!`);
}

$('#lib-button').on('click', makeMadLib);

// const button1 = document.getElementById('lib-button');

// const makeMadLib = function (){
//   const noun1 = document.getElementById('noun').value;
//   const noun2 = document.getElementById('adjective').value;
//   const noun3 = document.getElementById('person').value;

//   const divStory = document.getElementById('story');
//   divStory.innerHTML = `${noun3} loves feeling ${noun2} ${noun1}.`;
  
// }

// button1.addEventListener('click', makeMadLib);

// console.log('hey')
