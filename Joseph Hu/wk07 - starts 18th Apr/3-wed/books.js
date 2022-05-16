
const fetchBook = function(event){
    event.preventDefault();
    //get an XHR object
    const xhr = new XMLHttpRequest();
    //open the URL
    let book = document.getElementById("book_title").value
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
    //send the request
    
    xhr.send(); //asynchronous

    //automatic callback function when the ready state changes
    xhr.onreadystatechange = function(){

        if (xhr.readyState !== 4){
            return;
        }

        const data = JSON.parse(xhr.responseText);

        let cover = data.items[0].volumeInfo.imageLinks.thumbnail
        let author = data.items[0].volumeInfo.authors[0]
        let info = data.items[0].volumeInfo.description

        document.getElementById("cover").src = cover
        document.getElementById("author").innerHTML = author
        document.getElementById("info").innerHTML = info
        document.getElementById("title").innerHTML = book
        document.getElementById('book_title').value = ''
        document.getElementById('card').style.display='flex';

    };


};

// document.getElementById('fetch').addEventListener('click',fetchBook)
//A form allows you to use keystroke enter instead of submitting button only
const form = document.getElementById('search')
//form has a submit event
form.addEventListener('submit',fetchBook);