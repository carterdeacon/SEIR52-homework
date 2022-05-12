import express from 'express';
import ejs from 'ejs';
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

const server = express();
server.set('view-engine', ejs);
const PORT = 3000;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/result', (req, res) => {
    P.getPokemonByName(req.query.search.toLowerCase(), (response, error) => { 
        if(!error) {
            console.log(response)
            res.render('result.ejs', {resultData: response})
        } else {
            console.error(error);
            res.render('home.ejs');
        }
      });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));