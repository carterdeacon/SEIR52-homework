

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('body').css({'font-family': 'Arial, sans-serif', 'color': 'blue'});
$('span#Nickname').prepend('Mehran Falahati'); // id must be uniqe and specefic but class can be used multitimes 
$('span#Favorites').append('<strong>Choclate</strong> and <em>Sleeping</em>'); // em makes it iralic and strong makes it bold
$('span#hometown').html('Sydney'); // just add more stuff inside of the string or you can add text. as well 


// eq does array length is jquery
//console.log($('li'))

//****hard way to do, it is not the jQuery way  */
// $('li').each(function(){  //each is foing same as for loope
//      $(this).addClass('listitem'); // this mention 'li', it is a method
// })

$('li').addClass('listitem')  // if you wants to add to one of them you just select $('li:first')

$('.listitem').css('color', 'red');

// $('<img>').attr('src', 'http://www.fillmurray.com/300/400').appendTo('body'); // chaining all together 

$('<img src=http://www.fillmurray.com/300/400>').appendTo('body');

//$child.appendTo('parrent')
//$parrent.append('child')


// const $image = $('<img>'.attr('src', 'http://www.fillmurray.com/250/400'));
// $('<img>').append('$image');


// let pageNode = document.body
// pageNode.style.fontFamily = 'Arial, sans-serif';

// document.getElementById('nickname')
// nickname.innerHTML = 'Mehran Falahati'

// document.getElementById('favorites')
// favorites.innerHTML = 'sleeping'

// document.getElementById('hometown')
// hometown.innerHTML = 'Sydney'



// const lis = document.getElementsByTagName('li');
// for (let i = 0; i < lis.length; i++) {
//      const item = lis[i];
//      item.className = 'listitem';
// }
   


// const image = document.createElement('img');
// //console.log( image );
// image.src = 'http://www.fillmurray.com/250/400';
// document.body.appendChild(image);


