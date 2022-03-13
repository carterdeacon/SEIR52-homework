console.log('Hola!');

// Objects

// Geometry Function Lab

// Part 1, Rectangle
// // Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
    length: 4,
    width: 9
  };

const isSquare = function (rec) {
    const verdict = 'Given rectangle is'
    if (rec.length === rec.width) {
        console.log(`${ verdict } a square.`);
    }
    else {
        console.log(`${ verdict } not a square.`);
    }
};
isSquare(rectangleA);
isSquare(rectangleB);

const area = function (rec) {
    const rectArea = rec.length * rec.width;
    console.log(`The area is ${ rectArea }.`);
};
area(rectangleA);
area(rectangleB);

const perimeter = function (rec) {
    const perimForm = (2*(rec.length + rec.width));
    console.log(`The perimeter is ${ perimForm }.`);
};
perimeter(rectangleA);
perimeter(rectangleB);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 18,
  sideB: 28,
  sideC: 39
};

const verdictTri = 'Given triangle is'

const isEquilateral = function (tri) {
    if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
        console.log(`${ verdictTri } Equilateral`);
    }
    else {
        console.log(`${ verdictTri } not Equilateral`);
    }
};
isEquilateral(triangleA);

const isIsosceles = function (tri) {
    if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC ) {
        console.log(`${ verdictTri } Isosceles`)
    }
    else {
        console.log(`${ verdictTri } not Isoceles`);
    }
};
isIsosceles(triangleA);

const areaTri = function (tri) {
    const s = ((tri.sideA + tri.sideB + tri.sideC) / 2);
    areaT = Math.sqrt(s * ( s - tri.sideA ) * ( s - tri.sideB ) * ( s - tri.sideC ));
    console.log(`The area of the triangle is ${ areaT }`)
};
areaTri(triangleA);

const isObtuse = function (tri) {
    let triangle = [tri.sideA, tri.sideB, tri.sideC];
    triangle = triangle.sort();
    if ( ( (triangle[0]**2) + (triangle[1]**2) < (triangle[2]**2) ) ) {
        console.log(`${ verdictTri } Obtuse` )
    }
};
isObtuse(triangleA);

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example:

// Input
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
//   Output
//   cashRegister(cartForParty)); // 60.55

const cashRegister = function (cart) {
    const price = Object.values(cartForParty);
    console.log(price);
};
cashRegister(cartForParty);

// const cashRegister = function (cart) {
//     let totalPrice = 0;
//     for ( let i = 0; i < cart.length; i++ ) {
//         totalPrice = totalPrice + place[i];
//     }
//     console.log(totalPrice);
// };
// cashRegister(cartForParty);

// const pantryTotal = function (place) {
//     let totalPrice = 0;
//     for ( let i=0; i < place.length; i++ ) {
//         totalPrice = totalPrice + place[i].cost;
//     }
//     console.log(totalPrice);
// }

// pantryTotal(house.kitchen.pantry);