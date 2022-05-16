import React, { Component } from 'react';

class Square extends Component{
    render(){
        return(
            <button className = 'square'>

            </button>
        );
    }
}

class Board extends Component{
    renderSquare(i){
        return <Square />
    }
}