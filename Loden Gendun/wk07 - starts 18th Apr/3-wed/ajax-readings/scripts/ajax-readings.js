document.addEventListener('DOMContentLoaded', function() {
    const fetchBook= function () {
        let query = document.querySelector('input').value;
        const xhr = new XMLHttpRequest();
    
        xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${query}`);
        xhr.send();
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            };
    
            const data = JSON.parse(xhr.responseText);
    
            const titleelement = document.getElementById('title');
            let title = data.items[1].volumeInfo.title
            titleelement.innerText = title;
            const div = document.getElementById('cover');
            let thumbnail = data.items[1].volumeInfo.imageLinks.thumbnail;
            div.innerHTML = `<img src="${ thumbnail }" alt="searched novels cover">`;
        };
    };
    
    document.getElementById('fetch').addEventListener('click', fetchBook);
});

// data.items[1].volumeInfo.title // => "Ulysses"
// data.items[0].volumeInfo.imageLinks.thumbnail // => book cover image
