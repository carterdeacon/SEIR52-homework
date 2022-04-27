import React, { Component } from 'react';
import axios from 'axios';

import SearchPokemon from './SearchPokemon';
import PokemonStats from './PokemonStats';

class Pokemon extends Component {

    constructor() {
        super();

        this.state = {
            info: [],
            pokemonChosen: false,
        };

        this.fetchInfo = this.fetchInfo.bind(this);
    }

    fetchInfo(pokemonName) {

        axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            console.log(response.data);
            const setPokemon = ({
                name: pokemonName, 
                species: response.data.species.name, 
                image: response.data.sprites.front_default, 
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat, 
                type: response.data.types[0].type.name,
            })

            this.setState({
                info: setPokemon,
                pokemonChosen: true,
            });
        })
    }

    render() {
        return (
            <div>
                <SearchPokemon onSubmit={ this.fetchInfo }/>
                <div className='pokedex'>
                    <PokemonStats setPokemon={ this.state.info }/>
                </div>
            </div>
        )
    }
}


export default Pokemon;