import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {



    renderSquare(i){
        // here this.props.boardSquares return an array with 9 elements.
        return(
            <Square
                value={this.props.boardSquares[i]}
                squareOnClick={()=>this.props.boardOnClick(i)}
            />
        )
    }
    render() {
        return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        )
    }
}

export default Board; 