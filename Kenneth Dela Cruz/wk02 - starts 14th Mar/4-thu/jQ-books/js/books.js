// ## The Book List


// Keep track of which books you read and which books you want to read!

// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
// ```javascript
var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];
  // ```
  // - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
  // - Bonus: Use a ul and li to display the books.
  // - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
  // - Bonus: Change the style of the book depending on whether you have read it or not.

  
$('<ul>').css('list-style-type','none').appendTo('body');

for (let i = 0 ; i < books.length ; i++){
    $('<li>').addClass(`book${i}`).html(`${books[i].title} by ${books[i].author}`).appendTo('ul')
}

$('<img>').addClass('img0').attr('src', 'http://www.fillmurray.com/30/30').prependTo('.book0');
$('<img>').addClass('img1').attr('src', 'http://www.placebear.com/30/30').prependTo('.book1');

$('img').css({'position' : 'relative', 'right' : '20px', 'top': '8px' })

for (let i = 0 ; i < books.length ; i++){
    if (!books[i].alreadyRead){
        image = '.img'+ i;
        $(image).css('opacity', '.08');
    }
}
console.log(!books[0].alreadyRead)


  
  
  




// // Keep track of which books you read and which books you want to read!

// // - Create a webpage with an h1 of "My Book List".
// // - Create a new Javascript file and link to it with a script tag at the bottom.
// // - Copy this array of books:
// // ```javascript
// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];
// // ```
// // - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.


// // for (let i = 0 ; i< books.length; i++){
// //     const book = books[i];
// //     const paragraph = document.createElement('p');
// //     paragraph.innerHTML = `${ book.title } by ${ book.author }`;
// //     document.body.appendChild(paragraph);
// // }
// // - Bonus: Use a ul and li to display the books.

// const list = document.createElement('ul');
// for (let i = 0 ; i< books.length; i++){
//     const book = books[i];
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `${ book.title } by ${ book.author }`;
//     list.appendChild(listItem);
// }
//     if (books.alreadyRead){
//         listItem.className = 'alreadyRead';
//     }

// document.body.appendChild(list)


// // - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// // - Bonus: Change the style of the book depending on whether you have read it or not.

