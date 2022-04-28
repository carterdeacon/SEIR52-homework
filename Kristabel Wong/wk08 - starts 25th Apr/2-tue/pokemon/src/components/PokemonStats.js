import React from 'react';

const PokemonStats = (props) => {

    
    return (
        <div className='pokemonInfo'>
            
            <h1 className='pokeName'>{ props.setPokemon.name }</h1>
            <div className='pokeImage'>
                <img src={ props.setPokemon.image} className='pokemonImage'/>
            </div>
            <h3>Species: { props.setPokemon.species }</h3>
            <h3>Type: { props.setPokemon.type}</h3>
            <h3>Attack: { props.setPokemon.attack}</h3>
            <h3>Defense: { props.setPokemon.defense}</h3>
            <h3>HP: { props.setPokemon.hp}</h3>
        </div>
    )
}

export default PokemonStats;