const secretWord = ['F', 'O', 'X'];
let guessArray = [secretWord.length];
let guessed = true;
let reward = 0


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
            reward += (Math.floor(Math.random() * 1000)+200)*i
            console.log(`${guessword} is in the word!`);
            //console.log(guessArray);
            guessed = true;
        }
        else
        {
            if (reward > 500)
            {
                reward -= 500
            }
            guessed = false;
        }
    }

    if (guessArray.toString() == secretWord.toString())
    {
        console.log(`Hooray you guessed the word! Your Prize is $${reward}`);
        return secretWord.toString();
    }
    else if (guessed == false)
    {
        wordFunct();
    }
}
console.log(wordFunct());