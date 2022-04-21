const button = document.getElementById("search"); 
const fetchBook = function() { 
    const title  = document.getElementById("book").value;
    const book_url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;
    const xhr = new XMLHttpRequest;
    xhr.open('GET', book_url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;      
        }
        const data = JSON.parse(xhr.responseText);
        const book_cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        const bookSleeve = document.createElement('img');
        bookSleeve.src = book_cover;
        document.body.append(bookSleeve);
    }
} 
button.addEventListener('click', fetchBook);