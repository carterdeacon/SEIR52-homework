import React from "react";


const PokemonResult = (props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} />
        </div>
    )
}

export default PokemonResult;