const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.set('view-engine', ejs);

const PORT = 3000;

server.get('/', (req, res) => {
    res.render('home.ejs');
})

server.get('/show', (req, res) => {
    console.log(req.query.book)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${req.query.book}`).then((response) => {
        console.log(response.data.items[0])
        const cover = response.data.items[0].volumeInfo.imageLinks.thumbnail
        res.render('show.ejs', {book: req.query.book, cover: cover});
    })
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`))

// const fetchCover = function (event) {
//     event.preventDefault();

//     const title = $('#title').val()
//     $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`).done(function(data) {
//         const cover = data.items[0].volumeInfo.imageLinks.thumbnail
//         $('#cover').attr('src', cover);
//     });
// };

// $('#search').on('submit', fetchCover)