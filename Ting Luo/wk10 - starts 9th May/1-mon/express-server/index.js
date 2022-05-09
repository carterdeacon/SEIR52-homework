const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const { response } = require('express');

const server = express();
server.set('view-engine', ejs);

PORT = '1337';

server.get('/', (req, res)=> {
    res.render('home.ejs');
})

server.get("/books", (req,res)=> {
    console.log(req.query);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.title}`).then((response)=> {
        res.render('books.ejs', {
            title: req.query.title,
            author: response.data["items"][0]["volumeInfo"]["authors"][0],
            cover: response.data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
        });
    })
})

server.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));
