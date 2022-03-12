
// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, 
// write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangleA = {
      length: 20,
      width: 4
    };
// * isSquare - Returns whether the rectangle is a square or not

let rectangleLength = rectangleA.length;
let rectangleWidth = rectangleA.width;
const isSquare = function ( length, width ) {
    if ( length === width){
        return 'it is square';
    }else{
        return "it is not sqaure";
    }
}
console.log(isSquare(rectangleLength,rectangleWidth));

const area = function (length,width){
    return length*width;
}
console.log(`Are is ${area(rectangleLength,rectangleWidth)}`);

const perimeter =function(length,width){
    return 2 * ( length + width );
}
console.log(perimeter(rectangleLength,rectangleWidth));


// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, 
// write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```
const triangleA = {
    sideA: 7,
    sideB: 8,
    sideC: 9
    };

const sideA = triangleA.sideA;
const sideB = triangleA.sideB;
const sideC = triangleA.sideC;

const isEquilateral = function(a,b,c){
    if( a === b && b === c ){
        return 'it is equilateral!';
    }else{
        return ' it is NOT equilateral'
    }
}
console.log(isEquilateral(sideA,sideB,sideC));

const isIsosceles = function (a,b,c) {
    if( a===b && b===c ) {
        return 'it is equilateral and isosceles!';
    }else if (a === b || b === c || a === c ){
        return 'it is isosceles!';
    }else{
        return 'it is not isosceles';
    }
}
console.log(isIsosceles(sideA,sideB,sideC))

const triangleArea = function(a,b,c) {
    let s = (a+b+c)/2
    return "Triangle Area is " + Math.sqrt(
    s*(s-a)*(s-b)*(s-c)
    );
}
console.log(triangleArea(sideA,sideB,sideC));

const isObtuse = function(a,b,c){
    let longestSide;
    longestSide = Math.max(a,b,a);
    if(longestSide = a){
        if( a**2 <= b**2 + c**2){
            return "triangle is not obtuse";
        }else{
            return "triangle is obtuse";
        }
    }else if(longestSide = b){
        if( b**2 <= a**2 + c**2){
            return "triangle is not obtuse";
        }else{
            return "triangle is obtuse";
        }
    }else{
        if( c**2 <= a**2 + b**2){
            return "triangle is not obtuse";
        }else{
            return "triangle is obtuse";
        }
    }
}
console.log(isObtuse(sideA,sideA,sideC));