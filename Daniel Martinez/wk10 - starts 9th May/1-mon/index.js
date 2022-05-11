const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/result', (req, res) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ req.query.home }`).then( (response) => {
        res.render('result.ejs', {pokemon: req.query.home, gif: response.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny,
        image: response.data.sprites.other.dream_world.front_default });
    });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));