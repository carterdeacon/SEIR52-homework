console.log('Hey !');

const fetchCover = function (event) {
    event.preventDefault();
    console.log('fetching the cover..');
    //get book title from imput
    const title = document.getElementById('title').value;
    console.log(title);
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
    xhr.send();
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState !== 4) return;
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.getElementById('cover').setAttribute('src', cover);
    };
    //create an xhr object
    //open the connection to google books
    //xhr.send
    //xhr.onreadystatechange
        //if readyState != 4
        //parse the JSON
        //extract the thumbnail
        //display the thumbnail
};

const form = document.getElementById('search');
form.addEventListener('submit', fetchCover);
