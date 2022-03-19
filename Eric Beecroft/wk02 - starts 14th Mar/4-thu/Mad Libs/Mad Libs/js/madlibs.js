// Mad Libs

// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

// DOM
// const button = document.getElementById('lib-button');
// const story = document.getElementById('story');

// const makeMadLib = function () {
//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const person = document.getElementById('person').value;
//     story.innerHTML = `${ person } really likes ${ adjective } ${ noun }s.`;
//   };

// button.addEventListener('click', makeMadLib);

$('#lib-button').click(function() {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const person = $('#person').val();
  
  $('#story').text(`${person} really likes ${adjective} ${noun}s.`);
});