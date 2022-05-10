const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);

const PORT = 4000;

server.get("/", (req, res) => {
    res.render("home.ejs");
});

server.get("/info", (req, res) => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`)
        .then((response) => {
            res.render("info.ejs", {
                name: req.query.pokemon,
                species: response.data.species.name,
                image: response.data.sprites.front_default,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                type: response.data.types[0].type.name,
            });
        });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
