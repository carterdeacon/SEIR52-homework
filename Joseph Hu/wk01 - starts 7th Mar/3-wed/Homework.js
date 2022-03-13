//Wednesday 9th March Homework Joseph Hu

//MAX OF TWO NUMBERS

const maxOfTwoNumbers = function (num1, num2)
{
    if (num1 > num2)
    {
        return num1;
    }
    else if (num1 == num2)
    {
        return `equal`;
    }
    else 
    {
        return num2;
    }
}
//console.log(maxOfTwoNumbers(6,10));

//MAX OF THREE NUMBERS

const maxOfThree = function (num1, num2, num3)
{
    let array = [num1, num2, num3];
    return Math.max(...array);
}
//console.log(maxOfThree(3, 20, 8))

//VOWEL OR NOT

const isVowel = function(char)
{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(char))
    {
        return true;
    }
    else
    {
        return false;
    }
}
//console.log(isVowel('v'))

const sumArray = function(array)
{
    let sum=0

    for (i=0; i<array.length; i++)
    {
        sum += array[i];
    }
    return sum
}

//console.log(sumArray([1,2,3,4]));

const multiplyArray = function(array)
{
    let sum=0

    for (i=0; i<array.length; i++)
    {
        if (sum == 0)
        {
            sum = array[i];
        }
        else
        {
            sum *= array[i];
        }
    }
    return sum;
}
//console.log(multiplyArray([1,2,3,4]));

const reverseString = function(string)
{
    let revStr = "";
    
    for (i = string.length-1 ; i >= 0; i--)
    {
        //console.log(string[i]);
        revStr += string[i];
    }
    return revStr;
}
//console.log(reverseString("jag testar"))

const findLongestWord = function(array)
{
    let wordLength = 0
    let longestWord;

    for (i = 0; i < array.length; i++)
    {
        if (wordLength < array[i].length)
        {
            wordLength = array[i].length;
            longestWord = array[i]
        }
        else
        {
            continue;
        }
    }
    return `${longestWord} is the longest word with ${wordLength} letters`
}
//console.log(findLongestWord(["Hello", "hi", "sup", "wassssup"]));

const filterLongWords = function(array, i)
{
    let temp = [];

    for (j= 0; j < array.length; j++)
    {
        if (array[j].length > i)
        {
            temp.push(array[j])
        }
        continue;
    }
    return temp
}

//console.log(filterLongWords(['a', 'hello', 'fidget', 'hexagon' ,'is'], 5))


