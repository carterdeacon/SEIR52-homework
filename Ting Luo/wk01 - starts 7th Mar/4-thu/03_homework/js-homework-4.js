// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

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
    length: 4,
    width: 4,
    isSquare = function() {
        return this.length === this.width;
    },
    rectangleArea = function() {
        return this.length * this.width;
    },
    perimeter = function() {
        return 2* (this.length + this.width);
    }
}

/*
const isSquare = function(rectangleObject) {
    if (rectangleObject.length === rectangleObject.width) {
        return true;
    }else{
        return false;
    }
};
const rectangleArea = function(rectangleObject) {
    return rectangleObject.length * rectangleObject.width;
}
const perimeter = function(rectangleObject) {
    return 2 * (rectangleObject.length + rectangleObject.width);
}
*/

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

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
const isEquilateral = function (triangle) {
    let sideA = triangle.sideA;
    let sideB = triangle.sideB;
    let sideC = triangle.sideC;
    if (sideA === sideB && sideB ===sideC) {
        return true;
    }else{
        return false;
    }
};

const isIsosceles = function (triangle) {
    if (triangle.sideA === triangle.sideB) {
        return true;
    }else {
        return false;
    }
};
const triangleArea = function (triangle) {
    let sideA = triangle.sideA;
    let sideB = triangle.sideB;
    let sideC = triangle.sideC;
    let s = ( sideA + sideB + sideC ) / 2;
    let area = Math.sqrt (s * (s - sideA) * (s - sideB) * (s - sideC));
    return area;
};
const isObtuse = function (triangle) {
    let sideA = triangle.sideA;
    let sideB = triangle.sideB;
    let sideC = triangle.sideC;
    let sideArray = [sideA, sideB, sideC];
    sideArray.sort(function(a,b) {
        return a-b;
    });
    let squareLongerSide = Math.pow(sideArray[2],2);
    let squareShortSides = Math.pow(sideArray[1],2) + Math.pow(sideArray[0],2);
    if (squareLongerSide > squareShortSides) {
        return true;
    }else {
        return false;
    }
}

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 6,
};
console.log(isObtuse(triangleA));
