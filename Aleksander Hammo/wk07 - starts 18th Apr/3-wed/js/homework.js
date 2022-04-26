const getBook = function (event) {

    event.preventDefault();

    const title = document.getElementById('title').value
    const xhr = new XMLHttpRequest();

    //open the URL
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
    //send the request
    xhr.send();
    //any 
    xhr.onreadystatechange = function () {
            if (xhr.readyState !==4) return;
            const data = JSON.parse(xhr.responseText);
            const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
            document.getElementById('cover').setAttribute('src', cover)
    };
};

const form = document.getElementById('search');
form.addEventListener('submit', getBook)
