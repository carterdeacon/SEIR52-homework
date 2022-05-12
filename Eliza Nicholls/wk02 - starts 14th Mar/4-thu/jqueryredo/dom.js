console.log('Hello Handsome!')

$( '#nickname' ).html(function( index, oldHtml ) {
    return oldHtml + 'SENOIR DING DONG'
  });
  $( '#favorites' ).html(function( index, oldHtml ) {
    return oldHtml + 'whipping doorbells'
  });
  $( '#hometown' ).html(function( index, oldHtml ) {
    return oldHtml + 'not shelbyville'
  });

  $('h1').css({'font-size': '50px', 'font-family': 'times new roman', 'color': 'pink'});

  $('li').css({'font-size': '14px', 'font-family': 'times new roman', 'color': 'blue'});




//     Create a new Javascript file and link to it with a script tag at the bottom.
//     (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// document.getElementsByTagName('body')
// let fontBody = document.body;
// fontBody.style.fontFamily = 'Arial, sans-serif';

// $('innerHTML').attr('span')

//     (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
//     Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// document.getElementById('nickname')
// let myName = document.nickname;
// nickname.innerHTML = "poo head"

// document.getElementById('favorites')
// let myFavorites = document.Favorites;
// favorites.innerHTML = "lying on floor"

// document.getElementById('hometown')
// let myHometown = document.hometown;
// hometown.innerHTML = "Land of Poo"

const lis = document.getElementsByTagName('li');


    // for (let i = 0; i < lis.length; i++){
    //     const item = lis[i];
    //     item.className = 'listitem';
    // }





//     Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// The Book List

// Keep track of which books you read and which books you want to read!

//     Create a webpage with an h1 of "My Book List".
//     Create a new Javascript file and link to it with a script tag at the bottom.
//     Copy this array of books:

// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];

//     Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
//     Bonus: Use a ul and li to display the books.
//     Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
//     Bonus: Change the style of the book depending on whether you have read it or not.
