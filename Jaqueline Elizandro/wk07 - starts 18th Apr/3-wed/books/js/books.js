const fetchBook = function() {
    const xhr = new XMLHttpRequest();
    const search = document.getElementById("search").value;
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${search}`);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }
        const data = JSON.parse(xhr.responseText);
        data.items.forEach(function(book) {
            const img = document.createElement('img');
            img.src = (book).volumeInfo.imageLinks.smallThumbnail;
            document.body.appendChild(img);
        });
        
    };
};

document.getElementById('fetch').addEventListener('click', function() {
    let imgs = document.querySelectorAll('img')
    if (imgs.length !== 0) {
        imgs.forEach(function(img) {
            (img).remove();
        });
    };
    fetchBook()
});
    