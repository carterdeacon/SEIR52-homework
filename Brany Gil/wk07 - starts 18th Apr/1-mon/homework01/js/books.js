const fetchFact = function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=Jwas');
    xhr.send();


};