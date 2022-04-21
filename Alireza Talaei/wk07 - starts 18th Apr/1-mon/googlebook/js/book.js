



const fetchFact = function () {    
    const xhr = new XMLHttpRequest();
    const search = $('#book_name').val();       
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${search}`);   
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; 
        }
        const data = JSON.parse(xhr.responseText);                        
        const image_src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
        $('img').attr('src', image_src);
        const p = document.createElement('img');
        document.body.append(p);
    };
};


document.getElementById('book').addEventListener('click', fetchFact);
