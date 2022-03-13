console.log("geometry script functional")

// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:


// ```javascript
// const rectangleA = {
    //   length: 4,
    //   width: 4
    // };
    // ```
    
// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
        return true;
    };
    return false;
};
    
// * area - Returns the area of the rectangle
const areaSquare = function(rectangle) {
    return rectangle.width * rectangle.length;
};
    
// * perimeter - Returns the perimeter of the rectangle
const perimeter = function(rectangle) {
    return 2 * rectangle.width + 2 * rectangle.length;
};

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// ```javascript
// const triangleA = {
    //   sideA: 3,
    //   sideB: 4,
    //   sideC: 4
    // };
    // ```
    
// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC && triangle.sideB === triangle.sideC) {
        return true;
    }
    return false;
}

// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function(triangle) {
    let equalSides = 0;
    if (triangle.sideA === triangle.sideB) {
        equalSides++;
    }
    if (triangle.sideA === triangle.sideB) {
        equalSides++;
    }
    if (triangle.sideB === triangle.sideC) {
        equalSides++;
    }
    if (equalSides == 2) {
        return true;
    }
    return false;
}

// * area - Returns the area of the Triangle
const areaTriangle = function(triangle) {
    //triangle sides
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;

    //triangle perimeter
    const perimeter = triangle.sideA + triangle.sideB + triangle.sideC;
    //half perimeter
    const s = perimeter / 2;

    //Herons Formula
    area = Math.sqrt(s * (s - a) *(s - b) * (s - c));
    
    return area;
}

//------FOR TESTING------
// acute example
const triangleA = {
    sideA: 208,
    sideB: 172,
    sideC: 157
  };
  // obtuse example
  const triangleB = {
    sideA: 158,
    sideB: 93,
    sideC: 101
  };
//------------------------


// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function(triangle) {
    //function that finds longer of two sides
    const longerSide = function(side1, side2) {
        if (side1 > side2) {
            return side1;
        }
        return side2;
    };

    // finds hypotenuse with longerSide function
    let hypotenuse = longerSide(triangle.sideA, triangle.sideB);
    hypotenuse = longerSide(hypotenuse, triangle.sideC);

    // Function checks if provided side is an opposite
    const opposite = function(side) {
        if (side != hypotenuse) {
            return true;
        };
        return false;
    }

    // Check if each side is an opposite side using above function
    const opposites = [];
    if (opposite(triangle.sideA)) {
        opposites.push(triangle.sideA);
        console.log("One opposite side is ", triangle.sideA, "long.");
    };
    if (opposite(triangle.sideB)) {
        opposites.push(triangle.sideC);
        console.log("One opposite side is ", triangle.sideB, "long.");
    };
    if (opposite(triangle.sideC)) {
        opposites.push(triangle.sideC);
        console.log("One opposite side is ", triangle.sideC, "long.");
    };
    console.log("The Hypotenuse is ", hypotenuse, "long.");

    //Formula for a hypotenuse: a^2 + b^2 < c^2
    if ((opposites[0] * opposites[0]) + (opposites[1] * opposites[1])< hypotenuse * hypotenuse) {
        return true;
    }
    return false;
}