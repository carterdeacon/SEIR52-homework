import React from "react";
import bootstrap from "bootstrap";

const Search = (props) => {

    const handleInput = (event) => {
        props.querySearch(event.target.value);
    };

    return (
        <div>
            <input onInput={ handleInput
            } placeholder="Who's that pokemon" />
        </div>
    );

};

export default Search;