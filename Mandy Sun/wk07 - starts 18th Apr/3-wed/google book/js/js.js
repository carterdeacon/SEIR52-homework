console.log("hello")

const findBook = function(){
    const images = document.getElementsByTagName('img');
    const l = images.length;
    for (var i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);
    }
    const xhr = new XMLHttpRequest();

    const bookName = document.getElementById("book-name").value
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
          return; // Nothing to do yet so exit the function.
        }
        const data = JSON.parse( xhr.responseText );
            for(let i=0; i<data["items"].length;i++){
            const imgURL = data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"]
            const img = document.createElement('img');
            img.src = imgURL;
            document.getElementById("img-container").appendChild(img);
        }
      };
      xhr.open('GET', url);
      xhr.send(); 
      
}

 document.getElementById('search-button').addEventListener('click', findBook)