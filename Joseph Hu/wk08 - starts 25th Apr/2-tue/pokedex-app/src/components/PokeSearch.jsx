import React, { Component } from 'react'
import SearchForm from './SearchForm';
import PokeShow from './PokeShow'
import axios from 'axios'
import _ from 'lodash'

export default class PokeSearch extends Component {
  
  constructor(){
      super();
      this.state={
          pokemon: {
            type:[],
            moves:[],
            success: null
          }
      };
    this.fetchPokemon = this.fetchPokemon.bind(this)
  }
  
  //this fetches the pokemon queried in the searchform.jsx state
  fetchPokemon(query){
      console.log('submitted')

    const pokeURL = `http://pokeapi.co/api/v2/pokemon/${query}/`
    axios(pokeURL).then((response)=>{
        console.log(response)
        const name = _.capitalize(response.data.name)
        const type = response.data.types.map((type)=> type.type.name)
        const moves = response.data.moves.map((move)=>move.move.name)
        const pokenum = response.data.id
        const image = response.data.sprites.other.home.front_default
        this.setState({pokemon:{name:name, type:type, moves:moves, pokenum:pokenum, image:image, success:true}})
    }).catch((error)=>{
      if (error.response){
        this.setState({sucess: false})
      }
    })
  

  }
  
    render() {
    return (
      <div>
          {/* The job of SearchForm is to get pokemon information */}
          <SearchForm onSubmit={this.fetchPokemon}/>
          {/* The job of PokeShow is to display the pokemon as cards */}
          <PokeShow pokemon={this.state.pokemon}/>
      </div>
      
    )
  }
}

