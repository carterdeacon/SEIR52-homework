const fetchBook = function () {
  const bookTitle = document.getElementById("search-field").value;
  let url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`;
  // Get a new object by starting an XML request
  const xhr = new XMLHttpRequest();
  // Prepares an HTTP request to be sent - takes 2 params. 1st =  GET or POST request, 2nd = URL to where you want to send the request
  xhr.open("GET", url);
  // Send the request
  xhr.send();
  // Wait until the statechange is complete
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText); // Change the response into JS object

    const title = data["items"][0]["volumeInfo"]["title"];
    const imageUrl = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];

    const p = document.createElement("p");
    p.innerText = title;
    document.body.appendChild(p);

    const img = document.createElement("img");
    img.src = imageUrl;
    document.body.appendChild(img);
  };
};

document.getElementById("search-button").addEventListener("click", fetchBook);
