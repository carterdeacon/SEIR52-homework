const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

// Basic setup
const server = express();
server.set("view-engine", ejs);

const PORT = 1337;

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/result", (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.title}`)
    .then((response) => {
      res.render("result.ejs", {
        bookTitle: req.query.title.toUpperCase(),
        bookCover:
          response.data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"],
        bookAuthor:
          response.data["items"][0]["volumeInfo"]["authors"][0].toUpperCase(),
      });
    });
});

server.listen(PORT, () => {
  console.log(`Server listening at http:localhost:${PORT}`);
});
