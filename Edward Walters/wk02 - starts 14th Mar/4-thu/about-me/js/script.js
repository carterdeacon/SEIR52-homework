
// - Create a new Javascript file and link to it with a script tag at the bottom.

// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".


$('body').css('font-family', 'Arial, sans-serif');
// document.body.style.fontFamily = 'Arial, sans-serif';


// const nicknameEl = document.getElementById('nickname');
// const favoritesEl = document.getElementById('favorites');
// const hometownEl = document.getElementById('hometown');

// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
$('#nickname').text('Ed');
// nicknameEl.innerText = 'Ed';
$('#favorites').text('Coffee, Making Cool Stuff, Sleeping')
// favoritesEl.innerText = 'Coffee, Making cool stuff, Sleeping';
$('#hometown').text('Sydney');
// hometownEl.innerText = 'Sydney';

// const liElements = document.querySelectorAll('li');
// for (let li of liElements){
//     li.className = 'listitem';
// };

// // - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
$('li').addClass('listitem');
$('.listitem').css('color', 'red');



// const listItems = document.querySelectorAll('.listitem');
// for (let li of listItems){
//     li.style.color = 'red';
// };

// // - Create a new img element and set its src attribute to a picture of you. Append that element to the page.
$('body').append($('<img>').attr('src', 'https://imgur.com/sgzynAR.jpg'));



// const newImage = document.createElement('img');
// newImage.src = "https://imgur.com/sgzynAR.jpg";
// document.body.appendChild(newImage);










