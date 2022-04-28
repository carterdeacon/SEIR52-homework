import React from 'react'
import styled from 'styled-components';

const PokeShow = ({pokemon}) => {
 
  return (
      <>
      {pokemon.success?
                <Card>
                    <div className="card">

                        <img src={pokemon.image} alt={pokemon.name} />

                        <div className='details'>
                            <h2>{pokemon.name}</h2>

                            <h3>#{pokemon.pokenum}</h3>
                            <div>
                                <h3>Types</h3>
                                <h4>{pokemon.type.map((type)=><li key={pokemon.type.indexOf(type)}>{type}</li>)}</h4>
                            </div>
                            <div className='moves'>
                                <h3>Moves</h3>
                                <ul>{pokemon.moves.map((type)=><li key={pokemon.type.indexOf(type)}>{type}</li>)}</ul>
                            </div>
                        </div>
                    </div>
            </Card>
        : <div className='noresult'>
            <h3 >Pokemon is not in the Pokedex</h3>
        </div>}
    </>
  )
}

const Card = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top: 10vh;
    .card{
        background-color: white;
        padding: 8px;
        border-radius: 12px;
        border: 1px solid #BACDD8;
        display: flex;
        align-items: center;
        margin-bottom: 5%;
    }
    img{
        display: flex;
        border-radius: 12px;
        height: 400px;
        object-fit: cover;

    }
    .moves{
        border-radius: 2em;
        display: grid;   
        background-color: #BACDD8;

    }

    h3{
        text-align: center;
    }

    ul{
        display: grid;
        list-style: none;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        text-align: center;
        align-items: center;
        justify-items:center;
        padding-right: 40px;
    }
    li{
        list-style: none; 
    }
    h4{
        text-align: center;
    }

    .details{
        padding: 16px;
        text-align: center;
    }
`

export default PokeShow