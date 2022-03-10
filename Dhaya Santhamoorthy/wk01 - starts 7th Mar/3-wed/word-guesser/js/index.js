console.log("The word guesser is here!");


const answer = ["F", "A", "X"];
let guess = [ '_', '_', '_'];
let prize = 0;
let attempt = 0;
let attemptsArray = [];

const guessLetter = function (character) {    
    character = character.toUpperCase();
    if ( attemptsArray.includes(character) ){
        console.log(`You have used the character before, try with a different character`);
    } else {   
        attemptsArray.push( character );   
    if ( attempt < 6){
        for ( let i = 0; i < answer.length; i++){
            if (character === answer[i]) {
                guess[i] = character;
                console.log(`You found a new letter!`);
                console.log(`The current guess now is ${ guess.join("") }`); 
                prize += Math.floor(Math.random()*50);    // Generating a random prize value           
                console.log(`Your current prize is ${ prize }$`);
            } 
        }   
        if ( !answer.includes(character) ) {
            prize -= 5;  // Reducing the prize money for each wrong guess
            console.log(`Letter "${ character }" is a wrong guess, and your prize has reduced to ${ prize }$`);
            console.log(`This is your #${ attempt+1 } attempt`)
            attempt++; 
        }
        if ( !guess.includes("_") ) {
            console.log("You WON! You found the word.");
        } 
        else {        
            console.log(`Keep guessing!`);        
        }  
    } else {
        console.group(`You have run out of attempts and lost`);
        prize = 0;
    }
}       
};

guessLetter("a");
guessLetter("r");
guessLetter("R");
guessLetter("d");
guessLetter("X");
guessLetter("B");
guessLetter("o");
guessLetter("F");


