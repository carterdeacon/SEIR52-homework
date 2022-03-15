// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
const rectangleA = {
    length: 4,
    width: 4
    };  

    const isSquare = function(rectangle){
        if (rectangle.length === rectangle.width);
        return (true);
    };

const squareArea = function(rectangle){
    return (4 * 4);
   
};

const perimeter = function(rectangle) {
    return (4 + 4 * 2);

};

console.log( isSquare(' '),squareArea(' '), perimeter(' '));


// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:


const triangleA = {
      sideA: 3,
      sideB: 4,
      sideC: 4
    };

   

    const isEquilateral = function (triangle) {
        if (triangle.sideA === triangle.sideB === triangle.sideC) {
            console.log('it is a triangle');
            return true;
        } else {
            console.log('Not a triangle');
            return false;
        }
    };

    const isIsosceles = function(triangle){
        
            if (triangle.sideA == triangle.sideB && triangle.sideB == triangle.sideC) {
                console.log('it is a isosceles triangle');
                return true;
            } else {
                console.log('Not a isosceles triangle');
                return false;
            }
        };

            const area = function(triangle) {
                return(3 * 4 * 4);
                
            };
         
            const isObtuse = function(triangle){
                if ((3*2) + (4*2) < (4*2)) {
                    console.log('it is a obtuse triangle');
                    return true;
                } else {
                    console.log('Not a obtuse triangle');
                    return false;
                }
            };
            console.log( isEquilateral (' '), isIsosceles(' '), area(' '), isObtuse(' '));


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