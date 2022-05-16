// const fetchBook = function (event) {
//     event.preventDefault();
//     const title = document.getElementById('title').value;
//     const xhr = new XMLHttpRequest();

    

//     xhr.open('Get', 'https://www.googleapis.com/books/v1/volumes?q=title' + title);
//     //xhr.open('Get', 'http://books.google.com/books/content?id=Ts8vEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');
//     //const find = "items".[0]."volumeInfo"."imageLinks"."thumbnail" 
//     xhr.send();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) {
//             return;
//         }
//         const data = Json.parse(xhr.responseText);
//         const cover = data.items[0].volumeInfo.imageLinks.thumbnail
//         document.getElementById('cover').setAttribute('src', cover);
//         // let newImg = document.createElement('img');
//         // newImg.innerHTML = data.img
//         // document.body.appendChild('img')

// const form = document.getElementById('search');
// form.addEventListener('submit', fetchBook);
// console.log(fetchBook);
//     };
// };


const fetchCover = function (event) {
    event.preventDefault(); // stay on this page: don't try to send the form data back to the server.

    const title = document.getElementById('title').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
    xhr.send(); // takes time -- asynchronous
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        const data = JSON.parse(xhr.responseText);
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.getElementById('cover').setAttribute('src', cover);
    };
};

const form = document.getElementById('search');
form.addEventListener('submit', fetchCover);