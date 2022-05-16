import React,{ useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Display from "./Display";

const JikanSearch = (props) => {
    const [items, setItems] = useState('');
    
        const handleQuery = (i) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${ i }`).then( ({data}) =>{
                setItems(data.sprites.versions["generation-v"]["black-white"].animated.front_shiny)
            });
        };

    console.log( items)
    return (
        <div>
            <Search querySearch={ handleQuery }/>
            <Display info={items}/>
        </div>
    );

};

export default JikanSearch;

