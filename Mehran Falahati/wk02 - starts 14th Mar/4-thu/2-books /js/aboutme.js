





// ## The Book List

// Keep track of which books you read and which books you want to read!

// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
// ```javascript
const books = [
  {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
  },
  {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
  }
];


//jQuery





  
// ```
// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.


// const list = document.createElement( 'ul' );
const $list = $('<ul></ul>');

for (let i = 0; i < books.length; i++) {
    const book = books[i]
    //const listItem = document.createElement('li'); // we never see it as far as we add it with appendChild //<p>
    const $listItem = $('<li></li>');
    //listItem.innerHTML = `${ book.title } by ${ book.author }`;
    $listItem.html(`${ book.title } by ${ book.author }`)
    if (book.alreadyRead) {
      $listItem.addClass('alreadyRead');
    }

    $list.append($listItem);
}
$list.appendTo('body');

//document.body.appendChild(list);

// - Bonus: Use a ul and li to display the books.


// - Bonus: Change the style of the book depending on whether you have read it or not.
