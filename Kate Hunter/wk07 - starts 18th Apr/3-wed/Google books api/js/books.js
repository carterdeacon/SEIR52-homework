
const title = document.querySelector(".title");
const image = document.querySelector(".image");
const bio = document.querySelector(".bio");

const getBook = function () {
    const search = document.querySelector('#search').value
    // get an XHR object
    const xhr = new XMLHttpRequest();
    // open the URL 
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${search}`);
   
    // send the request
    xhr.send(); //This line is asynchronous

    // // console.log the response
    // console.log( xhr.responseText );
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState !==4) {
            return;
        }
        
        const data =  JSON.parse(xhr.responseText);
        const book = data.items[0].volumeInfo
        title.innerHTML = book.title
        bio.innerHTML = book.description
        image.innerHTML = `<img src="${ book.imageLinks.smallThumbnail }">`
    };
}; 

document.getElementById('fetch').addEventListener('click', getBook);
 


//data.items[0].volumeInfo.title