// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle


const rectangleA = {
   length: 4,
   width: 4
};

const isSquare = function(square){
    if(square.length === square.width){
        console.log(`This is a square.`);
    } else {
        console.log(`This is not a square.`)
    }
}

isSquare(rectangleA);

const recArea = function(areaRc){
    areaOfRec = areaRc.length * areaRc.width;
    console.log(`The Area is ${areaOfRec}.`);
}

recArea(rectangleA);

const perimeter = function(rPerm){
    periOf = 2 * (rPerm.length + rPerm.width);
    console.log(`The Perimeter is ${periOf}.`)
}

perimeter(rectangleA);



// ### Part 2, Triangle 

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
   sideA: 3,
   sideB: 4,
   sideC: 4
};

const isEquilateral = function(triangle){
    let A = triangle.sideA
        B = triangle.sideB
        C = triangle.sideC
    if (A === B && B === C && A === C){
        console.log(`The triangle is equilateral.`);
    } else {
        console.log(`The triangle is not equilateral.`);
    }
};

isEquilateral(triangleA);

const isIsosceles = function(triangle){
    let A = triangle.sideA
        B = triangle.sideB
        C = triangle.sideC
    if ((A === B && B !== C && C !== A) || (B === C && C !==A && A !== B) || (C === A && A !== B && B !== C)){
        console.log(`The triangle is Isosceles.`);
    } else {
        console.log(`The triangle is not Isosceles.`);
    }
};

isIsosceles(triangleA);

const trArea = function(triangle){
    let A = triangle.sideA;
        B = triangle.sideB;
        C = triangle.sideC;
        S = (A+B+C)/2
        areaOfTr = Math.sqrt((S*(S-A)*(S-B)*(S-C)));
        console.log(`The Area of the triangle is ${areaOfTr}`);
};
    
trArea(triangleA);

const isObtuse = function(triangle){
    let A = triangle.sideA
        B = triangle.sideB
        C = triangle.sideC
    if ((A !== B && B !== C && C !== A) || (B !== C && C !==A && A !== B) || (C !== A && A !== B && B !== C )){
        console.log(`The triangle is Obtuse.`);
    } else {
        console.log(`The triangle is not Obtuse.`);
    }
};

isObtuse(triangleA);
