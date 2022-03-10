//PART 1
//function that squares a number

const squareNumber = function(number)
{
    let sqrt = Math.sqrt(number);
    return console.log(`The result of squaring the number ${ number } is `+sqrt);
}
squareNumber(9);

//function that halves a number

const halfNumber = function(number)
{
    let half = number/2;
    return console.log(`Half of ${ number } is `+half);
}
halfNumber(10);

//function that finds the percent of two numbers

const percentOf = function( firstNum, secondNum)
{
    let percentage = firstNum/secondNum * 100
    return console.log(`${ firstNum } is `+percentage+`% of ${ secondNum }`);
}
percentOf(50, 100);

//function that finds the area of a circle

const areaOfCircle = function ( radius )
{
    let area = Math.PI * radius ** 2;
    return console.log(`The area of a circle with radius ${ radius} is `+area.toFixed(2));
}
areaOfCircle(5);

