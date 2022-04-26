import React from 'react';
import './Square.css'

const Square = (props) => {
    return(
        <button className="square" onClick={props.squareOnClick}>
            {props.value}
        </button>
    )
}

export default Square;