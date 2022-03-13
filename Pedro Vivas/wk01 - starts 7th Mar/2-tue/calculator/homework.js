//HW

//The calculator
const squareNumber = function(num) {
    let ans = `The result of squaring the number ${num} is ${Math.pow(num,2)}.`
    return ans;
};
console.log(squareNumber(3));

const halfNumber = function(num) {
    let ans = `Half of ${num} is ${num / 2}.`;
    return ans;
};
console.log(halfNumber(10));

const percentOf = function(num, base) {
    let perc = num / base * 100;
    let ans = `${num} is ${perc}% of ${base}.`;
    return ans;
};
console.log(percentOf(10, 20));

const areaOfCircle = function(radius) {
    let area = Math.PI * Math.pow(radius,2);
    return area;
};
console.log(areaOfCircle(4));
