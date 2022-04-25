console.log("book-list.js linked");

// Keep track of which books you read and which books you want to read!

// - Create a webpage with an h1 of "My Book List".

$endOfPage.before($("<h1>My Book List</h1>"));

// - Copy this array of books:
var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
const $list = $("<ul>");
for (let i = 0; i < books.length; i++) {
    const title = books[i].title;
    const author = books[i].author;
    // Create p element
    const paragraph = (`<p> ${title} ${author} </p>`);
    // Add p element to DOM
    // - Bonus: Use a ul and li to display the books.
    $list.append($("<li>").append(paragraph));
};
$endOfPage.before($list);

// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

pageRule();