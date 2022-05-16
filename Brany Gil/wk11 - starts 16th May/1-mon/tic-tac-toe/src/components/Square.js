import React from "react";

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `square`;

    return (
        <button onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;