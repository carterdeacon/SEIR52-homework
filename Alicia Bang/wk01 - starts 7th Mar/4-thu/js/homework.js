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

const rectangle = function (x, y){
    console.log(`Length: ${ x }`);
    console.log(`Width: ${ y }`);
    if ( x === y) {
        const isSquare = (`This is a square.`);
        console.log(isSquare);
    } else {
    let area = x * y;
    console.log(`The area is ${ area }.`);
    let perimeter = 2 * (x + y);
    console.log(`The perimeter is ${ perimeter }.`);
    }
};

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

const triangle = function (sideA, sideB, sideC) {
    if ( sideA === sideB && sideB === sideC ) {
        const isEquilateral = (`This is an equilateral triangle.`);
        console.log(isEquilateral);
    } else if ( sideA === sideB && sideB != sideC || sideA != sideB && sideB === sideC || sideA === sideC && sideB != sideC) {
        const isIsosceles = (`This is an isosceles triangle.`);
        console.log(isIsosceles);
    } else {
        const isObtuse = (`This is an obtuse triangle.`);
        console.log(isObtuse);
    }
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * ((s - sideA) * (s - sideB) * (s - sideC)));
    console.log(`The area of the triangle is ${ area }.`);

};

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
// ```

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
}
const cashRegister = function (cartForParty) {
    const items = Object.keys(cartForParty);
    const sum = 0;

    for (let i = 0; i <items.length; i++) {
        const itemName = items[i];
        const itemPrice = cartForParty[itemName];
        sum += Number.parseFloat(itemPrice);
    }
    return sum;
}