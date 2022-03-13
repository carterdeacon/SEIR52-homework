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

const rectangle = function(x, y) {
     if (x === y) {
         return true;
    }   else {
        return false;
    }
}
const area = function(x, y) {
    return x * y;
    }
const perimeter = function(x, y) {
     return (x + y) * 2;
}

const shapeInfo = function(x, y) {
    if (rectangle(x, y)) {
        console.log('It is square with area of ' + area(x, y) + ' and perimeter of ' + perimeter(x, y))
    }   else {
        console.log('It is not square with area of ' + area(x, y) + ' and perimeter of ' + perimeter(x, y))
    }
}

shapeInfo(10, 10);
shapeInfo(12, 50);


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

const triangle = {
    side1: 10,
    side2: 10,
    side3: 20
};
const isEquilateral = function(side1, side2, side3) {
    if (side1 === side2 && side1 === side3 && side2 === side3) {
        return true;
    }   else {
        return false;
    }
}
const isIsosceles = function(side1, side2, side3) {
    if (side1 === side2 || side1 === side3 || side2 === side3) {
        return true
    }   else {
        return false;
    }
}
const areaTri = function(side1, side2, side3) {
    const s = side1 + side2 + side3;
    return Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
};


//a^2 + b^2 = c^2 
const isObtuse = function(side1, side2, side3) {
    if ((side1 * side2) + (side2 * side2) === (side3 * side3)) {
        return true;
    }   else {
        return false;
    }
}

isEquilateral(triangle.side1, triangle.side2, triangle.side3)
console.log(isEquilateral(triangle.side1, triangle.side2, triangle.side3)); //triangle.side1

isIsosceles(triangle.side1, triangle.side2, triangle.side3)
console.log(isIsosceles(triangle.side1, triangle.side2, triangle.side3));

areaTri(triangle.side1, triangle.side2, triangle.side3)
console.log(areaTri(triangle.side1, triangle.side2, triangle.side3));

isObtuse(triangle.side1, triangle.side2, triangle.side3)
console.log(isObtuse(triangle.side1, triangle.side2, triangle.side3));



// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55
// 






// i did my best to write the code but failed.
const shoppingCart = {
    banana: "1.25",
    milk: "2",
    softDrink: "5"
}

const cashRegister = function(itemName, itemPrice) {
    for (let i = 0; i < cashRegister.length ; i++);
    total.push(i);
    console.log(total(i));
}
cashRegister( "banana", 10);