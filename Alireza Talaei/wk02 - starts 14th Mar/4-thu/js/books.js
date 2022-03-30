console.log("woow");

var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];



// // homework
$('<ul>').appendTo('body');


for (let i = 0; i < books.length; i++) {  
    const $book = books[i];
    console.log($book);
    const title = $book.title;
    const author = $book.author;
    const $list = $('<li>');
    $list.appendTo('ul');
    $list.append(title + ' by ' + author);
    if($book.alreadyRead) {       
        $list.addClass("alreadyRead");
    }       
}
