// Exercises: More DOM Manipulation

// About Me

// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// dom
// document.body.style.fontFamily = "Arial, sans-serif";

// jquery
$('body').css('font-family', 'Arial, sans-serif'); 

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// dom
// document.getElementById('nickname').innerText = 'Jaque';
// document.getElementById('favorites').innerText = 'pizza, ice cream, pasta';
// document.getElementById('hometown').innerText = 'Tijucas';

// jquery
$('#nickname').text('Jaque');
$('#favorites').text('pizza, ice cream, pasta');
$('#hometown').text('Tijucas');

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// dom
// const li = document.getElementsByTagName('li');
// for (let i = 0; i < li.length; i++) {
//     li[i].className = 'listitem';
// }
// console.log(li);

// jquery
$('li').addClass('listitem').css('color', 'red');

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// dom
// const img = document.createElement('img');
// img.src = 'http://placekitten.com/200/300';
// document.body.appendChild(img);

// jquery
$('<img>').attr('src', 'http://placekitten.com/200/300').appendTo('body');