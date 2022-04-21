


const fetchBook = function () {
    const xhr = new XMLHttpRequest(); //xhr =  x for XML, h for Http, r for response
    const bookInfo = document.getElementById('bookInfo').value;
    console.log(bookInfo);

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookInfo }`);
    xhr.send(); //asynchronous so the print line below will show above the send request because theres a slight delay

    // a function inside this bit of the xhr object gets called automatically
    // its a callback
    xhr.onreadystatechange = function () {

        if (xhr.readyState !== 4) {
            return; // exit the function: nothing to do yet
        }

        const data = JSON.parse(xhr.responseText); // string
        const title = document.createElement('h2');
        const image = document.createElement('img');
        const description = document.createElement('p');

        title.innerHTML = data.items[0].volumeInfo.title;
        description.innerHTML = data.items[0].volumeInfo.description; 
        image.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;

        document.getElementById('container').appendChild(title);
        document.getElementById('container').appendChild(description);
        document.getElementById('container').appendChild(image);

    }
};


document.getElementById('fetch').addEventListener('click', fetchBook);



// data.items[0].volumeInfo.title 
// data.items[0].volumeInfo.description 
// data.items[0].volumeInfo.imageLinks.smallThumbnail 