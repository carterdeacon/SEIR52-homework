const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const app = express();
app.set('view-engine', ejs);
const PORT = 6969;

app.get('/', (req, res) => {
    res.render('search.ejs');
});

app.get('/result', (req, res) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ req.query.search }`).then( (response) => {
        res.render('result.ejs', {pokemon: req.query.search, gif: response.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny,
        image: response.data.sprites.other.dream_world.front_default });
    });
});

app.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));