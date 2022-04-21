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

            try {
                const coverElement = document.getElementById('cover');
                const thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
                coverElement.innerHTML = `<img src="${ thumbnail }" alt="searched novels cover">`;
            }
            catch {};
            try {
                const publishElement = document.getElementById('publisher')
                const publisher = data.items[0].volumeInfo.publisher
                publisherElement.innerText = publisher;
            } 
            catch {};
            try { 
                const blurbElement = document.getElementById('blurb');
                const blurb = data.items[0].volumeInfo.description;
                if (blurb) { blurbElement.innerText = blurb };
            }
            catch {};

            const titleElement = document.getElementById('title');
            let authors = data.items[0].volumeInfo.authors
            const title = data.items[0].volumeInfo.title
            titleElement.innerHTML = `${title}<br>by ${authors}.`;

            if (authors != undefined) {
                if (authors.length > 2) {
                    authors = authors.subarray(0, authors.length-1).join(', ') + ' and ' + authors[authors.length-1];
                } else if (authors.length > 1) {
                    authors = authors.join(' and ')
                };
            };
        };
    };
    
    document.getElementById('fetch').addEventListener('click', fetchBook);
});
