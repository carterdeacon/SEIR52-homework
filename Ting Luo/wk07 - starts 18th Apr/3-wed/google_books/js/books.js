const fetchBooks = function(){
    const xhr = new XMLHttpRequest();
    const book = document.querySelector("input").value;
    const p = document.getElementById("book-title");
    const image = document.getElementById('book-img');
    const author = document.getElementById("book-author");
    const description = document.getElementById("book-description")
    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${book}`);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4){
            return;
        }
        const type = xhr.getResponseHeader("content-type");
        if (type.includes("json")) {
            const data = JSON.parse(xhr.responseText);
            p.innerHTML = "Title: " + data.items[0].volumeInfo.title;
            author.innerHTML = "Authors: " + data.items[0].volumeInfo.authors[0];
            description.innerHTML = "Description: " + data.items[0].volumeInfo.description;
            image.src = `${data.items[0].volumeInfo.imageLinks.smallThumbnail}`;
        };
        
    };
    
};

document.getElementById("fetch-info").addEventListener("click", fetchBooks);