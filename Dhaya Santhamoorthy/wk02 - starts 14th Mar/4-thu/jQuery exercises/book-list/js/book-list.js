
$(`body`).css("font-family", "Arial, sans-serif");
$bookList = (`<ul>`);

const books = [ 
    { title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false }, 
    { title: 'The Most Human Human', author: 'BrianChristian', alreadyRead: true }
];

books[0].url = `https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things`;
books[0].cover = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442460745i/840.jpg`
books[1].url = `https://www.goodreads.com/book/show/8884400-the-most-human-human`
books[1].cover = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400.jpg`

for ( const book of books ) {    
    const bookTitle = book.title;
    const bookAuthor = book.author;  
    const bookUrlLink = book.url;
    const bookCoverLink = book.cover;
    const bookToBeRead = book.alreadyRead;    
    let $singleBook = $(`<li>`);

    if ( bookToBeRead ) {
        $singleBook.addClass(`not-read`);
    } else {
        $singleBook.addClass(`already-read`);
    }

    $singleBook.html(`Title: ${ bookTitle },  <p>Author: ${ bookAuthor }, </p>
                      <p>You can find more about the book <a href = ${ bookUrlLink }>here</a>.</p>
                      <p><img src= ${ bookCoverLink }></p>`);
    
    $(`body`).append($singleBook);
    $(`p`).css("padding-left", "1.5em")
};