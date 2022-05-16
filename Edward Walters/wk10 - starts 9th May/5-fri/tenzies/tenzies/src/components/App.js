import React from 'react';
import Die from './Die'
import {nanoid} from "nanoid"; 
import Confetti from 'react-confetti';


function App() {
  

  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const value = (Math.floor(Math.random()*6) +1 );
      newDice.push({ 
        value: value, 
        isHeld: false,
        id: nanoid() 
      });
    }
    return newDice;
  };

  const holdDice = (id) => {
      setDice(prevDice => prevDice.map(die => {
        if (die.id === id) {
          return {...die, isHeld: !die.isHeld}
        } else {
          return die;
        }
      }))
  }
     
 
  const rollDice = () => {
    setDice(prevDice => prevDice.map(die => {
      if (die.isHeld) {
        return die;
      } else {
        return {...die, value: Math.floor(Math.random()*6) +1 }
      }
    }));
  };

  const newGame = () => {
    setTenzies(false);
    setDice(allNewDice());
  };

  const checkForWin = () => {
    const held = dice.every(die => die.isHeld === true);
    const same = dice.every(die => dice[0].value === die.value);
    if (held && same) {
      setTenzies(true);
    }
   
  };


  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(()=>{
    checkForWin();
  }, [dice])

  const diceElements = dice.map(die => <Die key={die.id} id={die.id} value={die.value} isHeld = {die.isHeld} holdDice={holdDice}/>);

  return (
    <main className="App">
      { tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className="container">
          { diceElements }
      </div>
      <button 
          className='button-roll' 
          onClick={tenzies ? newGame : rollDice }
        >
          {tenzies ? 'New Game' : 'Roll' }
      </button>
    </main>
  );
}

export default App;
