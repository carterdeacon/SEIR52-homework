/*******************************************/
const conLog = function(input) {
    console.log(input);
}
/*******************************************/

/*
# Geometry Function Lab

### Part 1, Rectangle

Given the following a `rectangle` object like the one below, write the following functions which 
accept a `rectangle` object as an argument:

* isSquare - Returns whether the rectangle is a square or not
* area - Returns the area of the rectangle
* perimeter - Returns the perimeter of the rectangle

```javascript
const rectangleA = {
  length: 4,
  width: 4
};
```
*/

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
    length: 12,
    width: 4
  };

// f1  isSquare

const isSquare = function ( rectangle ) {
    let result = false; 

    if ( rectangle.length === rectangle.width ) {
        result = true
    }
    let text = "This geometrical object is a square: "; 
    result = text + result;
    return result; 
}

conLog(`rectangleA: ${ isSquare(rectangleA) }`);
conLog(`rectangleB: ${ isSquare(rectangleB) }`);

//f2 area

const rectangleArea = function (rectangle) {

    let result;
    let area = rectangle.length * rectangle.width;
    result = `The rectangle's area ${ area } units`;

    return result;

}
conLog(`rectangleA: ${ rectangleArea(rectangleA) }`);
conLog(`rectangleB: ${ rectangleArea(rectangleB) }`);

//f3 perimeter

const rectanglePerimeter = function (rectangle) {

    let result;
    let perimeter = 2 * (rectangle.length + rectangle.width);
    result = `The rectangle's perimeter ${ perimeter } units`;

    return result;

}
conLog(`rectangleA: ${ rectanglePerimeter(rectangleA) }`);
conLog(`rectangleB: ${ rectanglePerimeter(rectangleB) }`);

/*
### Part 2, Triangle

Given the following a `triangle` object like the one below, write the following functions 
which accept a `triangle` object as an argument:

* isEquilateral - Returns whether the triangle is equilateral or not
* isIsosceles - Returns whether the triangle is isosceles or not
* area - Returns the area of the Triangle
* isObtuse - Returns whether the triangle is obtuse or not

```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
```
*/

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };
  const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
  };
  const triangleC = {
    sideA: 4,
    sideB: 5,
    sideC: 6
  };
  const triangleD = {
    sideA: 6,
    sideB: 6,
    sideC: 9
  };
  const consoleText = {
    equiTri:    "This geometrical object is an Equilateral triangle: ",
    isoTri:     "This geometrical object is an Isoceles triangle: ",
    obtTri:     "This geometrical object is an Obtuse triangle: "
  };

  const isEquilateral = function (triangle) {
    let result = false;
    if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC ) {
            result = true;
    }    
    return result; 
  }

  conLog(`triangleA: ${ consoleText.equiTri } ${ isEquilateral(triangleA) }`);
  conLog(`triangleB: ${ consoleText.equiTri } ${ isEquilateral(triangleB) }`);

  const isIsosceles = function (triangle) {
    let result = false;
    if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC ) {
            result = true;
    }
    return result; 
  }

  conLog(`triangleA: ${ consoleText.isoTri } ${ isIsosceles(triangleA) }`);
  conLog(`triangleB: ${ consoleText.isoTri } ${ isIsosceles(triangleB) }`);
  conLog(`triangleC: ${ consoleText.isoTri } ${ isIsosceles(triangleC) }`);

  const pyCalcObtuse = function (c, a, b) {
    let result = false;
    let hypSum  = ( c * c );
    let aSum = ( a * a );
    let bSum = ( b * b ); 
    if (hypSum > (aSum + bSum)) {
      result = true;
    }
    return result;
  }

  const isObtuse = function (triangle) {
    let result;
    let isEqui = isEquilateral(triangle);           //check equilateral function 1st : equilateral != obtuse 
        if (isEqui) {
            result = false;
         } else {
             // find the longest side : a, b , or c 
             // check the 2 non-longest !=== cos that can't be obtuse 
             // call calc function: Sum of the squares of the smaller 2 sides < the longest side squared - OBTUSE TRIANGLE
           let max =  Math.max(triangle.sideA, triangle.sideB,triangle.sideC); 
            if ( max === triangle.sideA ) {
                  if (max === triangle.sideB || max === triangle.sideC ) {
                      //can't be obtuse
                        result = false; 
                        return result;
                 }
               result = pyCalcObtuse(triangle.sideA,triangle.sideB,triangle.sideC);
           }  else if ( max === triangle.sideB ) {
                  if (max === triangle.sideA || max === triangle.sideC ) {
                      //can't be obtuse
                        result = false; 
                        return result;
                 }
               result = pyCalcObtuse(triangle.sideB,triangle.sideA,triangle.sideC);
           } else if ( max === triangle.sideC ) {
                 if (max === triangle.sideA || max === triangle.sideB ) {
                     //can't be obtuse
                       result = false; 
                       return result;
                 }
                result = pyCalcObtuse(triangle.sideC,triangle.sideA,triangle.sideB);
           } 
         }
    return result; 
  }
  conLog(`triangleA: ${ consoleText.obtTri } ${ isObtuse(triangleA) }`);
  conLog(`triangleB: ${ consoleText.obtTri } ${ isObtuse(triangleB) }`);
  conLog(`triangleC: ${ consoleText.obtTri } ${ isObtuse(triangleC) }`);
  conLog(`triangleD: ${ consoleText.obtTri } ${ isObtuse(triangleD) }`);

/*
# The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). 
The function should return the total price of the shopping cart.
Example

```
// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
```
*/
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function( Sum ) {
    conLog("started ok ");
    let array  = Object.values(cartForParty);
    let myTotal = 0;
   
    for (let i = 0; i < array.length; i++) {

        myTotal = parseInt(array[i]) + myTotal; 
      //console.log(`${Sum[key]}`);
      conLog(myTotal);
  }
  
  // Got to here but didn't finish it  - returns NaN at index 1 - zombied out.
  // fairly confident i could figure it out but would rather have the feedback. 
  //got no further

  ///return "10.66";

}

cashRegister(cartForParty);




/*
# Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function 
called validateCreditCard that returns true or false.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16

The following credit card numbers are valid:

- `9999-9999-8888-0000`
- `6666-6666-6666-1666`

The following credit card numbers are invalid:

- `a923-3211-9c01-1112` invalid characters
- `4444-4444-4444-4444` only one type of number
- `1111-1111-1111-1110` sum less than 16
- `6666-6666-6666-6661` odd final number

## Example
```
validateCreditCard('9999-9999-8888-0000'); // Returns: true
```

*Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

*Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

```
{ valid: true, number: 'a923-3211-9c01-1112' } 
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
```

*Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? 
Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/
