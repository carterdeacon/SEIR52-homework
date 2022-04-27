

var fetchCover = function () {

    title = document.getElementById('title').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
    xhr.send(); // asynchronous
    
    console.log( xhr.responseText ); 

    xhr.onreadystatechange = function () {
        if (xhr.readyState !==4 ){
                return; 
        }

        const data = JSON.parse(xhr.responseText); 
        const image = document.getElementById('book_image')
        
        image.src = data.items[0].volumeInfo.imageLinks.thumbnail;

    };
};


document.getElementById('fetch').addEventListener('click', fetchCover);
