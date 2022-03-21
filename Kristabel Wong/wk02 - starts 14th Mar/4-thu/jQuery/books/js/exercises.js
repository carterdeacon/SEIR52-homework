var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        cover: 'https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780465050659&w=&h=570'
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        cover: 'https://play-lh.googleusercontent.com/nWZrA2c2YGcZ7Bt6xQ7gLAt0Ccu5d-BkvXRr68OjUoIfCtfUSOoGtTQVWR8ESJwyMzZ4rqGQHlHG=s200-rw'
    }
];

//Create a webpage with an h1 of "My Book List".

// const heading = $('<h1>My Book List</h1>'); // --> one way and another below
// $('body').append(heading);

$('<h1>').html('My Book List').prependTo('body'); //--> putting appendTo puts it below the script tags (bottom of the body)


// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

// console.log(books[0].title);

for (let i = 0; i < books.length; i++) {
    const $p = $('<p>'); // creates a paragraph every loop
    const title = books[i].title;
    const author = books[i].author;
    const text = `${title} by ${author}`;
    $p.html(text).insertAfter('h1'); // didn't want to append as that puts it under script

};

// $('<p>').each(function () {
//     $('<p>').html(`${books.title} by ${books.author}`).appendTo('body');
// })



// books.forEach(book => {
//     $('<p>').html(`${book.title} by ${book.author}`).appendTo('body');
// })

let $p2 = $('p').eq(1);

$('<h3>').html('Putting my booklist into a list').insertAfter($p2);

//Bonus: Use a ul and li to display the books. 
$('<ul>').appendTo('body'); // create a UL first as we dont want to loop it (only need one)

for (let i = 0; i < books.length; i++) {
    const title = books[i].title;
    const author = books[i].author;
    const text = `${title} by ${author}`;
    $('<li>').html(text).appendTo('ul');

};

// $('<ul>').appendTo('body') // don't know why this doesn't work..
// $('ul').each(function () {
//     const title = books[i].title;
//     const author = books[i].author;
//     const text = `${title} by ${author}`;
//     $('<li>').html(text).appendTo(this);
// })

//Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.



for (let i = 0; i < books.length; i++) {
    const $li = $('li').eq(i);
    let img = books[i].cover;
    $('<img>').attr('src', img).appendTo($li);
    $('img').css({'height': '200px', 'display': 'block', 'padding': '10px 0',});
};

//Bonus: Change the style of the book depending on whether you have read it or not.

for (let i = 0; i < books.length; i++) {
    const $li = $('li').eq(i);
    const read = books[i].alreadyRead;
    if (read) {
        $li.css('opacity','0.5');
    }
}

$('<button>').html('Hide books already read').insertAfter('ul');
$('button').css({'margin-left': '20px', 'position': 'absolute', 'top' : '680px'});

$('button').click(function () {
    for (let i = 0; i < books.length; i++) {
        const $li = $('li').eq(i);
        const read = books[i].alreadyRead;
        if (read) {
            $li.toggle(); // hides books already read 
        }
    }
})