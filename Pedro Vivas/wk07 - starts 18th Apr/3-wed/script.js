const searchButton = () => {
    const xhr = new XMLHttpRequest();
    let input = document.getElementById('input-box').value;
    const searchFor = document.createElement('h1');
    searchFor.innerHTML = `All books found for ${input} :`
    document.body.appendChild(searchFor)


    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${input}`);
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) {
            return;
        }
        const data = JSON.parse(xhr.responseText);
        
        let arr = data.items.length;
        for(let i=0; i< arr; i++) {
            bookData = data.items[String(i)];
            if(bookData.volumeInfo.printType === "BOOK") {
                const thumb = bookData.volumeInfo.imageLinks.thumbnail;
                const title = bookData.volumeInfo.title;
                const p = document.createElement('p');
                const t = document.createElement('h1');
                const img = document.createElement('img')
                t.innerHTML = title;
                img.setAttribute("src", thumb);
                p.append(t);
                p.append(img);
                document.body.appendChild(p);
            }
        }
    };
};


document.getElementById('fetch').addEventListener('click', searchButton);
