// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

$('#lib-button').on('click', function(){
    $('#story').text(`${$('#person')[0].value} really likes ${$('#adjective')[0].value } ${$('#noun')[0].value}`);
});




// const noun = document.getElementById('noun'); //console.log to check if it's null.
// const adjective = document.getElementById('adjective');
// const personName = document.getElementById('person');
// const story = document.getElementById('story');

// //Add an event listener to the button so that it calls a makeMadLib function when clicked.
// const createSentence = function () {
//     //Add an event listener to the button so that it calls a makeMadLib function when clicked.
//     story.innerHTML = personName.value +' really likes '+ adjective.value + " "+ noun.value;
// }

// const button = document.getElementById('lib-button');
// button.addEventListener('click', createSentence);