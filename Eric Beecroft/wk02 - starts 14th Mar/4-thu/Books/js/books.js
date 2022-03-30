
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

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.

// DOM
// const list = document.createElement('ul');

// for ( let i=0; i<books.length; i++) {
//     const book = books[i];
//     const listItem = document.createElement('li'); // detached DOM nodes
//     listItem.innerHTML = `${ book.title } by ${ book.author }`;

//     if (book.alreadyRead) {
//         listItem.className = 'alreadyRead';
//     }

//     list.appendChild(listItem);
// }

// document.body.appendChild(list);

$(books).each(function () {
    const author = $(this).attr('author');
    const title = $(this).attr('title');
    // const alreadyRead = $(this).attr('alreadyRead');

    $('body').append(`<li>${title} by ${author}</li>`);

    if (books.alreadyRead) {
        $(this).addClass('alreadyRead');
    }
});

// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.


// Bonus: Change the style of the book depending on whether you have read it or not.