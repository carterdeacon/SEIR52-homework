const getCover = function () {
    const title = document.getElementById("title").value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+title);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse(xhr.responseText);

        const p = document.createElement('p');
        p.innerHTML = data.items[0].volumeInfo.title;
        document.body.appendChild(p);

        const img = document.createElement('img');
        img.src = data.items[1].volumeInfo.imageLinks.thumbnail;
        document.body.appendChild(img);

    };
};

document.getElementById('submit').addEventListener('click', getCover);