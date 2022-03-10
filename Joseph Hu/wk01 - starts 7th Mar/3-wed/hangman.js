const secretWord = ['F', 'O', 'X'];
let guessArray = [secretWord.length];
let guessed = true;
let counter = 0


const wordFunct = function()
{   
    
    guessword = prompt("Please enter a letter").toUpperCase();
    if (typeof(guessword) != 'string' && guessword.length != 1)
    {
        wordFunct();
    }

    for (i = 0; i < secretWord.length; i++)
    {
        if (secretWord[i] == guessword)
        {
            guessArray[i] = secretWord[i];
            console.log(`${guessword} is in the word!`);
            //console.log(guessArray);
            guessed = true;
        }
        else
        {
            counter += 1
            guessed = false;
        }
    }
    if (counter == 6)
    {
        console.log(`Hangman! You died :(`);
        return secretWord.toString();
    }
    else if (guessArray.toString() == secretWord.toString() && counter < 6)
    {
        console.log(`Hooray you guessed the word!`);
        return secretWord.toString();
    }
    else if (guessed == false)
    {
        wordFunct();
    }

}
console.log(wordFunct());