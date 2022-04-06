// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

const isSquare = function(length, width) { //to see if true
    
    // const isSquare = function (length, width) { // QUESTION: how can you run a function within a function?
        if (length === width) {
            return 'rectangle is a square';
        }
        else {
            return 'rectangle is not square';
        }    
    };

    const area = function (length, width) {
        return length * width
    };
    
    let perimeter = function (length, width) {
        return (length + width) * 2
    };

    console.log(isSquare(2,3))
    console.log(area(4, 6))
    console.log(perimeter(5, 6))

const isEquilateral = function (a, b, c) {
    if (a === b && b === c) { //question: why can't you run a==b==c
        return 'This triangle is equilateral'
    }
    else {
        return 'This triangle is not equilateral'
    }
}

console.log(isEquilateral(4, 4, 4))



// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

