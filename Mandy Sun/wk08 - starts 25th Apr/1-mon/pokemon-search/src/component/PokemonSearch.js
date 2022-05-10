import axios from "axios";
import React, {Component} from "react";
import PokemonForm from "./PokemonForm";
import PokemonResult from "./PokemonResult";


class PokemonSearch extends Component{
    constructor(){
        super();
        this.state={
             image: "",
             name: "",
        }
        this.fetchPokemons = this.fetchPokemons.bind(this);
    }

    fetchPokemons(pokemon){

        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const pokemonParams={
            format: 'json',
            nojsoncallback: 1
        }
        axios(pokemonURL, {params: pokemonParams}).then ((response) => {
            this.setState({name: pokemon});
            this.setState({image: response.data.sprites.front_default});
        })
        
    }


    render(){
        return(
            <div>
               <PokemonForm onSubmit={ this.fetchPokemons }/>
               <PokemonResult image={this.state.image} name={this.state.name} abilities= {this.state.abilities}/>
            </div>
        )
    }
}

export default PokemonSearch;