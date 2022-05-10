const axios = require('axios');
const express = require('express');
const ejs = require('ejs');

// set server
const server = express();
server.set("view-engine", ejs);

const PORT = 1337;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/detail', (req, res) => {
    const book = req.query.book;
    axios.get('https://www.googleapis.com/books/v1/volumes?q=title:' + book).then((response)=>{
        // const img =response.data.items[0].volumeInfo.imageLinks.thumbnail;
        const allImg = response.data.items;
        const imageLinks = allImg.map((item)=>{
            if(item.volumeInfo.imageLinks !== undefined) {
                return item.volumeInfo.imageLinks.thumbnail
            }
        }).filter(function (el) {
            return el != null;
        });
        console.log(imageLinks);
        res.render('detail.ejs', {images: imageLinks});
    })
    
});



server.listen(PORT, ()=> console.log(`Server running http://localhost:${ PORT }`))