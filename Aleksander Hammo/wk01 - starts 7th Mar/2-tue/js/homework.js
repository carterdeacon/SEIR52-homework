//THE CALCULATOR

//PART 1

const squareNumber = function (num) { // calculates square of number
    solution = num * num;
    console.log(`The result of squaring ${num} is ${solution}`);
};

squareNumber(3)

// question => why does my console display "underfined" after returning the functions?

const halfNumber = function (halfNum) { // calculates half of number
    solution = halfNum / 2;
    console.log(`Half of ${halfNum} is ${solution}`);
};

halfNumber(5)

const percentOf = function (percentNum1, percentNum2) { // calculates what percentage the first number is of the second number
    solution = (percentNum1/percentNum2) * 100;
    console.log(`${percentNum1} is ${solution}% of ${percentNum2}`);
};

percentOf(4, 50.26548245743669)

const areaOfCircle = function (radius) { // calculates area of circle with given radius

        solution = radius * radius * Math.PI
        console.log(`The area for a circle with radius ${radius} is ${solution}`)
};

areaOfCircle(4)

//PART 2

const squareNumber1 = function (num) { 
    solution = num * num;
    return solution
};

const halfNumber1 = function (halfNum) { 
    solution = halfNum / 2;
    return solution
};


const percentOf1 = function (percentNum1, percentNum2) { 
    solution = (percentNum1/percentNum2) * 100;
    return solution
};


const areaOfCircle1 = function (radius) { 

        solution = radius * radius * Math.PI
        return solution
};

const allTogetherNow = function (num) { //need to block out the console.log within the functions and swap them with a return in order to get an integer in the console -- only integers will work for this function. Question: is there any way to do this without directly editing the code? I.e. can you only get an integer result from within backticks?
    
    const half = halfNumber1(num);
    const square = squareNumber1(half);
    const area = areaOfCircle1(square);
    const percent = percentOf1(square, area);
    return percent
}

console.log(allTogetherNow(4))

