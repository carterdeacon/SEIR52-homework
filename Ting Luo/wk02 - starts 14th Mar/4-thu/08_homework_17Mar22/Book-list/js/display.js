
var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: 'https://m.media-amazon.com/images/I/410RTQezHYL._AC_SY580_.jpg'
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url:'https://images.penguinrandomhouse.com/cover/9780307476708'
    }
];
//Create a webpage with an h1 of "My Book List".

$('body').append($('<h1></h1>').text ('My Book List'));



//Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

for (var i = 0; i<books.length; i++) {
    const element = books[i];
    $('body').append($('<p/>)').text(`'${element.title}' by ${element.author}`));
};

var list = $('<ul/>').appendTo($('body'));
for (var i = 0; i<books.length; i++) {
    let element = books[i];
    /*let listItem = $('<li/>').text(`${element.title} by ${element.author}`);
    $('<img>').attr('src', element.url).css({'width':'130px','height':'200px'}).appendTo(listItem);   
    
    if(element.alreadyRead){
        $(listItem).css({'color':'blue'});
    }
    $(listItem).appendTo(list);*/

    $('<img>').attr('src', element.url).css({'width':'130px','height':'200px'}).appendTo($('<li/>').text(`${element.title} by ${element.author}`).appendTo(list));
    if (element.alreadyRead){
        $('li').eq(i).css({'color':'blue'});
    }
};


