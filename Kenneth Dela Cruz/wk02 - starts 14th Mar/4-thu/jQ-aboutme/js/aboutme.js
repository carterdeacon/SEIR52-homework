// # Exercises: More DOM Manipulation

// ## About Me

// Start with this HTML and save it as "aboutme.html":
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// var pageNode = document.body;
// pageNode.style.fontFamily = 'Arial, sans-serif';

$('body').css('font-family','Arial, sans-serif');


// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// var spanNode = document.getElementById('nickname')
//  spanNode.innerHTML = 'papsi';

// document.getElementById('nickname').innerHTML = 'ken';
// document.getElementById('favorites').innerHTML = 'sleep';
// document.getElementById('hometown').innerHTML = 'Pamp';

$('#nickname').html('Ken');
$('#favorites').html('Sleep');
$('#hometown').html('Apalit');


// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// const lis = document.getElementsByTagName('li')

// for (let i = 0 ; i < document.getElementsByTagName('li').length ; i++){
//     let item = lis[i]
//     item.className = 'listitem';
//     // item.style.color = 'red';
// }

$('li').addClass('listItem');
$('.listItem').css('color', 'red');


// const colRed = document.getElementsByClassName('listitem');
// for (let i = 0 ; i < colRed.length ; i++){
// colRed[i].style.color = 'red'}

// const colRed = document.getElementsByClassName('listitem');
// colRed.style.color = 'red';


// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// const image = document.createElement('img');
// image.src ='http://www.fillmurray.com/400/400';
// document.body.appendChild(image);

$('<img>').attr('src','https://placebear.com/300/300').appendTo('body')




