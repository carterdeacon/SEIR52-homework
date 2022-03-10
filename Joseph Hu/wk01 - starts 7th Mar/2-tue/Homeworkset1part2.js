//PART 1
//function that squares a number

const squareNumber = function(number)
{
    let sqrt = Math.sqrt(number);
    return sqrt
}
//squareNumber(9);

//function that halves a number

const halfNumber = function(number)
{
    let half = number/2;
    return half
}
//halfNumber(10);

//function that finds the percent of two numbers

const percentOf = function( firstNum, secondNum)
{
    let percentage = firstNum/secondNum * 100
    return percentage
}
//percentOf(50, 100);

//function that finds the area of a circle

const areaOfCircle = function ( radius )
{
    let area = Math.PI * radius ** 2;
    return area
}
//areaOfCircle(5);

const multiFunc = function (number)
{
    let half = halfNumber(number);

    let square = squareNumber(half);

    let area = areaOfCircle(square);

    let percentage = percentOf(area, square);

    return console.log(percentage);
}

multiFunc(20);