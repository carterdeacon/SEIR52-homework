console.log("Console is ready");

const fetchBook = function () {
  const bookName = document.getElementById("bookname-input").value;

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://www.googleapis.com/books/v1/volumes?q=title:${bookName}`
  );
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse(xhr.responseText);

    const bookTitle = data.items[0].volumeInfo.title;
    const bookCover = data.items[0].volumeInfo.imageLinks.thumbnail;
    const bookAuthor = data.items[0].volumeInfo.authors[0].toUpperCase();

    if (document.body.contains(document.querySelector("div"))) {
      document.querySelector("div").innerHTML = "";
    }

    const div = document.createElement("div");
    div.innerHTML = `<p class="title">Your book title is ${bookTitle}</p>
                    <p><img src=${bookCover} alt="Book-cover-img" /></p> 
                    <p class="author">Written by ${bookAuthor} </p>`;
    document.body.appendChild(div);
  };
  document.getElementById("bookname-input").value = "";
};

document.getElementById("search-btn").addEventListener("click", fetchBook);
