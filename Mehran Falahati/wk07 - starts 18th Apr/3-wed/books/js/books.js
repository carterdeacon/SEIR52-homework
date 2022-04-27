const fetchFact = function () {

    // use jquery the get text form input
    let search = $('#book').val()

    // assign to search

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ search }`)

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }
        const data = JSON.parse(xhr.responseText)
        const p = document.createElement('img')

        const image = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
        $('img').attr('src', image)
        document.body.appendChild(p)
    };
};

document.getElementById('go').addEventListener('click', fetchFact);