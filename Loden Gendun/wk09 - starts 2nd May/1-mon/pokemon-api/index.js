import express from 'express';
import ejs from 'ejs';

import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex();

const server = express();
server.set('view-engine', ejs);

const PORT = 5555;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/display', (req, res) => {
    console.log(`Looking up "${req.query.name}"`);
    pokedex.getPokemonSpeciesByName(req.query.name.toLowerCase(), (response, error) => {
        if (!error) {
            const {name, evolution_chain, id, pokedex_numbers, evolves_from_species, form_descriptions, habitat, flavor_text_entries} = response;
            console.log(response)
            res.render('display.ejs', { name: name, evolution_chain: evolution_chain, id: id, pokedex_numbers: pokedex_numbers, habitat: habitat, flavor_text_entries: flavor_text_entries });
        } else {
            console.log(error);
        }
    });
});

server.listen(PORT, () => console.log(`Now listening on http://localhost:${ PORT }`));