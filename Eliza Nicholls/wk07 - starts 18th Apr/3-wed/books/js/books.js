console.log('Hey !');
const fetchBook  = function () {
    //get an XHR object
    const xhr = new XMLHttpRequest();
    //open the URL
    const search = "ulysses"
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ search }`);
    //send the request
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; 
        }
        const data = JSON.parse(xhr.responseText);
        const p = document.createElement('p');
        debugger
        p.innerHTML = data.text;
        document.body.appendChild(p);
        console.log(xhr.responseText, xhr.readyState);
    };
};

document.getElementById('fetch').addEventListener('click', fetchBook);
fetchBook();