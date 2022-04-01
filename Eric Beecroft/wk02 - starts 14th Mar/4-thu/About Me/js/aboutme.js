// About Me

// Create a new Javascript file and link to it with a script tag at the bottom.
console.log('wow');

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// DOM
// const body = document.body;
// body.style.fontFamily = 'Arial, sans-serif';

// jQuery two strings method
$('body').css('font-family', 'Arial, sans-serif');

// jQuery Object Method (you can set multiple values in the object)
$('body').css({'font-family': 'Arial, sans-serif', 'color': 'blue'})

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// DOM
// const nickName = document.getElementById('nickname');
// nickName.innerHTML = "Everyone just calls me Eric";

$('#nickname').html('Everyone just calls me Eric');

// DOM
// const favs = document.getElementById('favorites');
// favs.innerHTML = "Dallas Cowboys, Waratahs, Dallas Mavericks, LA Dodgers & Lakers fanboy cause their games are fun";

$('#favorites').html('Dallas Cowboys, Waratahs, Dallas Mavericks, LA Dodgers & Lakers fanboy cause their games are fun');

// DOM
// const hometown = document.getElementById('hometown');
// hometown.innerHTML = "Technically Houston (humid) but moved to Sydney (less humid) before I could form memories";

$('#hometown').html('Technically Houston (humid) but moved to Sydney (less humid) before I could form memories')

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// DOM
// const list = document.getElementsByTagName('li');

// for ( let i=0; i < list.length; i++) {
//     const item = list[i];
//     item.className = 'listitem';
// }

// jQuery loop (.each) - a middle ground

// $('li').each(function (){
//     $(this).addClass('listItem');
//     $(this).css('color', 'red');
// })

// Simplest version

$('li').addClass('listItem');
$('li').css('color', 'red');

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// DOM
// const meImg = document.createElement('img');
// meImg.src = 'https://celebritypictures.org/images/4169409/4169409_1.jpeg';
// body.appendChild(meImg);

$('<img src="https://celebritypictures.org/images/4169409/4169409_1.jpeg">').appendTo('body');