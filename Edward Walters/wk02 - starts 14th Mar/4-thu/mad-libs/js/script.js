// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const makeMadLib = function(){
    const noun = $('#noun').val();
    // const noun = document.getElementById('noun').value;
    const adj = $('#adjective').val();
    // const adj = document.getElementById('adjective').value;
    const person = $('#person').val();
    // const person = document.getElementById('person').value;
    
    // const storyDiv = document.getElementById('story');
    $('#story').text(`${person} really likes ${adj} ${noun}s.`);
    // storyDiv.innerHTML = `${person} really likes ${adj} ${noun}s.`;
    
}
$('#lib-button').on('click', makeMadLib);
// document.getElementById('lib-button').addEventListener('click', makeMadLib);




