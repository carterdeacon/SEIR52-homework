
console.log("The console is at your command now!")


const squareNumber = function(num) {
    const squaredNumber = Math.pow(num, 2);
    console.log(`The result of squaring the number ${num} is ${squaredNumber}.`);
    return squaredNumber;
}

squareNumber(9);

const halfNumber = function(num) {
    const halvedNumber = num / 2;
    console.log(`Half of ${num} is ${halvedNumber}.`);
    return halvedNumber;
}

halfNumber(22);


const percentOf = function(num1, num2) {
    const resultPercentage = (num1 / num2)*100;
    console.log(`${num1} is ${resultPercentage}% of ${num2}.`);
    return resultPercentage;
}

percentOf(16,4);


const areaofCircle = function(radius) {
    const area = (Math.PI * radius * radius).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${area}.`);
    return area;
}

areaofCircle(4);


const finalResult = function(num) {     
    let halvedfNumber = halfNumber(num);
    let squaredNumber  = squareNumber(halvedfNumber);
    let area = areaofCircle(squaredNumber);
    let result = percentOf(squaredNumber, area).toFixed(2);
    return result;
}

console.log(`The final result after all the calculations is ${finalResult(10)}%`);