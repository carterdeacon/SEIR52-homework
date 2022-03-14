
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4,
 
}

const rectangleB ={
  length: 6,
  width: 8
}
 const isSquare = function(){
    if (rectangleA.length === rectangleA.width){
        console.log('The shape is a square');
    } else {
        console.log('false');
    }
 }
 
 isSquare(rectangleA);

const area = function (){
  let total = (rectangleA.length * rectangleA.width) ;
  console.log( total);

}
area(rectangleA);

const perimeter = function (){
  let sum = (rectangleA.width + rectangleA.width + rectangleA.length + rectangleA.length);
  console.log(sum);
}
perimeter(rectangleA);

// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(){
  if (triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC && triangleA.sideC === triangleA.sideA){
      console.log('the triangle is equilateral');
  } else {
      console.log('the triangle is not cool bro');
  }
}
isEquilateral(triangleA);

const isIsosceles = function(){
  if (triangleA.sideC === triangleA.sideB){
      console.log("the triangle is in isolation cause it is isosceles")
  } else {
      console.log( `the triangle is once again not cool bro`)
  }
}
isIsosceles(triangleA);

const areaTriangle = function(){
    let areaSum = (triangleA.sideA + triangleA.sideB + triangleA.sideC)/ 2 ; //herons formula
    console.log(areaSum); 
}
areaTriangle(triangleA);

const isObtuse = function(){
  let obtuseCheck = triangleA.sideC **2 > (triangleA.sideB ** 2 + triangleA.sideA **2);
  if( obtuseCheck = false){
      console.log(`triangle is obtuse`);
  } else {
      console.log(`triangle is not obtuse`);
  }
}
isObtuse(triangleA);