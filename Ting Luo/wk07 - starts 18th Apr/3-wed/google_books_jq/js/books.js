const fetchBooks = function(e){
    e.preventDefault();
    const value = $('input').val();
    $.ajax("https://www.googleapis.com/books/v1/volumes?q="+value).done(function(data) {
        $('h3').text( data.items[0].volumeInfo.title);
        $('img').attr('src',data.items[0].volumeInfo.imageLinks.thumbnail);
    });
};

$('#search').on("submit",fetchBooks);
