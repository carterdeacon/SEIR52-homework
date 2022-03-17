var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }];


for (let i = 0; i < books.length; i++) {
    $('body').append($('<p>').html(`${books[i].title} by ${books[i].author}`))
};




