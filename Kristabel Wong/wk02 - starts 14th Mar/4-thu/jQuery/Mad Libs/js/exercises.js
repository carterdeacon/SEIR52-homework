// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.") 


// const libButton = document.getElementById('lib-button');
// const story = document.getElementById('story');

// const makeMadLib = function () {
//     const noun = document.getElementById('noun').value;
//     const adj = document.getElementById('adjective').value;
//     const person = document.getElementById('person').value;
//     story.innerHTML = `${person} really likes ${adj} ${noun}.`;
// }

// libButton.addEventListener('click',makeMadLib);


$('button').click(function() {
    const noun = $('#noun').val();
    const adj = $('#adjective').val();
    const person = $('#person').val();

    $('#story').html(`${person} really likes ${adj} ${noun}!`);
})

$('<button>').html('Add style!').insertAfter('#lib-button');

let button2 = $('button').eq(1);

button2.click(function () {
    $('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.min.css">').insertAfter('title').toggle()
})

//^ not sure how to toggle back. i tried below but that doesnt seem to work. i know the above function just creates a link to style sheet every time which is why toggle doesnt work... but gets me to point A



// $('<link rel="stylesheet"').insertAfter('title')
// $('link').hide();

// let button2 = $('button').eq(1);

// button2.click(function () {
//     $('link').attr('href','https://cdn.jsdelivr.net/npm/water.css@2/out/light.min.css');
//     $('link').toggle();
// })

