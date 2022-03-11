
console.log("Less dead inside.")

//Geometry Fuction Lab

// Part 1 - Write a function which will parse an object as an argument.

// This is uncooked rice

const rectangleA = {
     length: 10,
     width: 12 
  };

 // This is a microwave
const isSquare = function (rec) { 
     if(rec.length === rec.width) {
       console.log(`This is a square.`);
  } else {
      console.log(`This is a rectangle`);
  }

  };


  // The rice is in the microwave
 
isSquare(rectangleA);

 
 
 // Part 2


 // This is uncooked rice
const triangleA = {
    sideA: 3,
    sideB: 3,
    sideC: 3 
 };

 const triangleB = {
    sideA: 2,
    sideB: 4,
    sideC: 4 
 };

// This is a microwave

const IsEquilteral = function (tri) {
    if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {}
        console.log(`The triangle is equilateral.`);  
    }     
    
    else(tri.sideA !== tri.sideB || tri.sideA !== tri.sideC) { 
         console.log(`The triangle is isosceles.`);       
}


// The rice is in the microwave

IsEquilateral(triangleA);
IsEquilateral(triangleB);