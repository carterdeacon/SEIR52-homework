const express = require('express'); 
const ejs = require('ejs'); 
const axios = require("axios");
const book_url = `https://www.googleapis.com/books/v1/volumes?q=title:`;
const server = express();
server.set('view-engine', ejs); 

const PORT = 3000; 

server.get('/', (req,res) => {
    res.render('home.ejs');
}); 

server.get('/info', (req,res) => {
    const searchUrl = `${ book_url}${ req.query.cover }`;
    axios(searchUrl).then((res) => {

    const foundCover = res.data.items[0].volumeInfo.imageLinks.thumbnail;
    console.log(foundCover);
        
        });
    // res.render('cover.ejs', { cover: res.data.items[0].volumeInfo.imageLinks.thumbnail });
    res.render('cover.ejs', { cover: `${ foundCover }` });
}); 

//ToDO - cover does not render  - this is failing .....

server.listen(PORT, () => console.log(`server running http://localhost:${ PORT }`))
