const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');


const fetchBook = function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${ searchInput.value } }`);
    searchInput.value = "";
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            return;
        };
        const data = JSON.parse(xhr.responseText);

        const h2 = document.createElement('h2');
        h2.innerHTML = data["items"][0]["volumeInfo"]["title"];
        resultsContainer.appendChild(h2);

        const img = document.createElement('img');
        img.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
        resultsContainer.appendChild(img);

        const h3 = document.createElement('h3');
        h3.innerHTML = data["items"][0]["volumeInfo"]["authors"].join(', ');
        resultsContainer.appendChild(h3);

        const p = document.createElement('p');
        p.innerHTML = data["items"][0]["volumeInfo"]["description"];
        resultsContainer.appendChild(p);

        const p2 = document.createElement('p');
        p2.innerHTML = "Published Date: " + data["items"][0]["volumeInfo"]["publishedDate"];
        resultsContainer.appendChild(p2);
    };
};

document.getElementById('search-btn').addEventListener('click', function (e) {
    e.preventDefault();
    resultsContainer.innerHTML = "";
    fetchBook();
})