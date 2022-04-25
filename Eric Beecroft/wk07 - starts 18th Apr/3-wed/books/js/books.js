// My solution

// const getCover = function () {
//     const title = document.getElementById("title").value;

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+title);
//     xhr.send();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) {
//             return;
//         }

//         const data = JSON.parse(xhr.responseText);

//         const p = document.createElement('p');
//         p.innerHTML = data.items[0].volumeInfo.title;
//         document.body.appendChild(p);

//         const img = document.createElement('img');
//         img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
//         document.body.appendChild(img);

//     };
// };

// document.getElementById('submit').addEventListener('click', getCover);

// Joel's Solution
const fetchCover = function (event) {
    event.preventDefault(); // Stay on this page and don't default reload

    const title = document.getElementById('title').value;
    const xhr = new XMLHttpRequest();

    // open the connection to Google Books
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
    xhr.send(); // takes time - asynchronous
    console.log(xhr.responseText); // empty string
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return; // No curlies - get out of the function quickly
        const data = JSON.parse(xhr.responseText);
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.getElementById('cover').setAttribute('src', cover);
    };
};

const form = document.getElementById('search');

form.addEventListener('submit', fetchCover);