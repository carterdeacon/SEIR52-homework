
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

// - Iterate through the array of books. For each book, create a p element 
// with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, 
// and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

const $list = $('<ul></ul>');

for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const $listItem = $(`<li>${ book.title } by ${ book.author }</li>`)

    if (book.alreadyRead) {
        $listItem.addClass('alreadyRead');
    }

    $list.append($listItem);
}

$list.appendTo('body'); 
