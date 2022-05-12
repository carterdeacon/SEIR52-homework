/**
 * Import modules
 */
const express = require("express");
const axios = require("axios");
const ejs = require("ejs");

/**
 * Express config
 */
const app = express();
const PORT = 3000;
app.set("view-engine", ejs);

app.get("/", (req, res) => {
  res.render("wordsearch.ejs");
});

app.get("/result", (req, res) => {
  const searchParam = req.query.search;
  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchParam}`)
    .then((response) => {
      const dict = response.data[0];
      res.render("result.ejs", {
        word: dict.word,
        phonetic: dict.phonetic,
        definition: dict.meanings[0].definitions[0].definition,
        audio: dict.phonetics[0].audio,
      });
    });
});

/**
 * Render search page results
 */

/**
 * Open listening port
 */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
