import React from 'react';
import Board from './Board';
import './Game.css';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerHistory: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            moveNumber: 0,
        };
        console.log(this.state.playerHistory[this.state.playerHistory.length -1].squares);
    }
    

    onClickHandler(i) {
        console.log("it is working here");
        const history = this.state.playerHistory.slice(0, this.state.moveNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        // if winning condition return "X or "O"
        // if squares[i] is already taken (return "X" or "O")
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        // else update useState.
        squares[i] = this.state.xIsNext? "X" : "O";
        this.setState({
            playerHistory: history.concat([{
                squares: squares,
            }]),
            moveNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(move) {
        this.setState({
            moveNumber: move,
            xIsNext: (move % 2 ) === 0, //odd step are "X" turn
        });
    }
    
    render() {
        const history = this.state.playerHistory; //array of objects
        const current = history[this.state.moveNumber]; // last object in the array
        // if winner is not null, return winner, otherwise, return next player.
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = "Winner is  " + winner;
        }else{
            status = "Next Player is " + (this.state.xIsNext? "X" : "O");
        }
        console.log(status);

        // step variable refers to the current fhistory element value
        // move variable refers to the current history element index
        const moves = history.map((step , move) => {
            const description = move?
                "Go to move # " + move : "Go to game start";
            return(
                // React automatically uses key to decide which components to update.
                <li key={move}>
                    <button onClick={()=> this.jumpTo(move)}>
                        {description}
                    </button>
                </li>
            ); 
        })


        // pass two props to Board: this current squares array as well as function called onClick.
        // the onClick function will return a function as value and pass index 'i' as an argument.
        return(
            <div className="game">
                <div className="game-board">
                    <Board 
                        boardSquares={current.squares}
                        boardOnClick={(i) =>this.onClickHandler(i) }
                    />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
        )
    };
}

const calculateWinner = (array)=> {
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a,b,c] = winningConditions[i];
        if(array[a] && array[a]===array[b] && array[a]===array[c]){
            return array[a];
        }
        
    }
    return null;
}


export default Game;
