// const getBook = function (){
    // use Jquery to get textt from input
    // Assign to search
    //     const xhr = new XMLHttpRequest();
    //     const search = 'ulysses'
    //     xhr.open('GET', `http://www.googleapis.com/books/v1/volumes?q=title:${search}`);
    //     xhr.send();
    //     console.log(xhr.responseText);
    
    
    
    //     xhr.onreadystatechange = function(){
    //         if (xhr.readyState !==4){
    //             return;
    //         }
    //         const data = JSON.parse(xhr.responseText);
    //         const p = document.createElement('p');
    //         debugger
    //         p.innerHTML = data.text;
    //         document.body.appendChild(p);
            
    //     };
    // };
    
    // document.getElementById('fetch').addEventListener('click',fetchBook);
    // getBook();
    

const fetchCover = function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const xhr= new XMLHttpRequest();

    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+ title);
    xhr.send();

    console.log(xhr.responseText);
    xhr.onreadystatechange = function(){
        if (xhr.readyState !==4) return;    
        const data = JSON.parse(xhr.responseText);
       const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
       document.getElementById('cover').setAttribute('src',cover);
    };
    
};

const form = document.getElementById('search');

button.addEventListener('submit',fetchCover);