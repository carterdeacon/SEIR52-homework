// Mad Libs

// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")


// dom
// const makeMadLib = function () {
//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const person = document.getElementById('person').value;
//     const story = `${person} really likes ${adjective} ${noun}`;
//     document.getElementById('story').innerHTML = story;
// };

// const button = document.getElementById('lib-button');
// button.addEventListener('click', makeMadLib);

// jquery
const makeMadLib = function () {
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const person = $('#person').val();
    const story = `${person} really likes ${adjective} ${noun}`;
    $('#story').html(story);
}

$('#lib-button').click(makeMadLib);