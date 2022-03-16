console.log("The console is ready to display results");

// Part 1, Rectangle
console.log(`Part 1, Rectangle`);

const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 8,
  width: 4,
};

const isSquare = function (rectangle) {
  return rectangle.length === rectangle.width;
};

const areaOfRectangle = function (rectangle) {
  return rectangle.length * rectangle.width;
};

const perimeterOfRectangle = function (rectangle) {
  return 2 * (rectangle.length + rectangle.width);
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));
console.log(areaOfRectangle(rectangleA));
console.log(areaOfRectangle(rectangleB));
console.log(perimeterOfRectangle(rectangleA));
console.log(perimeterOfRectangle(rectangleB));

// Part 2, Triangle
console.log(`Part 2, Triangle`);

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4,
};

const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

const triangleC = {
  sideA: 3,
  sideB: 7,
  sideC: 9,
};

const isEquilateral = function (triangle) {
  return triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
};

console.log(`Equilateral triangle check`);
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));

const isIsosceles = function (triangle) {
  return (
    triangle.sideA === triangle.sideB ||
    triangle.sideA === triangle.sideC ||
    triangle.sideB === triangle.sideC
  );
};

console.log(`Isosceles triangle check`);
console.log(isIsosceles(triangleA)); //True as equilateral triangles are also isosceles
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));

// Obtuse triangle - 3, 7 and 9
// Squaring each side = 9, 49 and 81
// sum of the squares of the short sides = 9 + 49 = 58
// 58 < 81 Obtuse Triangle

const isObtuse = function (triangle) {
  const sqauredNum = function (side) {
    return Math.pow(side, 2);
  };
  let sideA = triangle.sideA;
  let sideB = triangle.sideB;
  let sideC = triangle.sideC;

  let squaredSideA = sqauredNum(sideA);
  let squaredSideB = sqauredNum(sideB);
  let squaredSideC = sqauredNum(sideC);

  if (sideA > sideB && sideA > sideC) {
    return squaredSideA > squaredSideB + squaredSideC;
  } else if (sideB > sideA && sideB > sideC) {
    return squaredSideB > squaredSideA + squaredSideC;
  } else {
    return squaredSideC > squaredSideA + squaredSideB;
  }
};
console.log(`Obtuse triangle check`);
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));

// Area of triangle = A = √[s(s-a)(s-b)(s-c)]
// where s is perimeter,
//  s = (a + b + c)/2

const perimeterOfTriangle = function (triangle) {
  return (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
};

const areaOfTriangle = function (triangle) {
  let sideA = triangle.sideA;
  let sideB = triangle.sideB;
  let sideC = triangle.sideC;
  let perimeter = perimeterOfTriangle(triangle);
  let squaredArea =
    perimeter * (perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC);
  let area = Math.sqrt(squaredArea).toFixed(2);
  return area;
};
console.log(`Area of triangle`);
console.log(areaOfTriangle(triangleA));
console.log(areaOfTriangle(triangleB));
console.log(areaOfTriangle(triangleC));

// Part 3, The Cash Register

console.log(`The Cash Register -`);
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

const cashRegister = function (shoppingCart) {
  const pricesArr = Object.values(shoppingCart);
  let totalPrice = 0;
  for (let i = 0; i < pricesArr.length; i++) {
    totalPrice += Number(pricesArr[i]);
  }
  return totalPrice;
};
console.log(cashRegister(cartForParty));

// Part 4, Credit Card Validation

console.log(`Credit Card Validation -`);

const isValidCard = function (fullCardNumber) {
  const creditCardNumber = fullCardNumber.split("-").join(""); // Removing -(dashes) from card number
  const cardNumberAsANumber = Number(creditCardNumber);
  const cardNumberAsArray = creditCardNumber.split("");

  const totalSum = function (arr1) {
    let sum = 0;
    for (const el of arr1) {
      sum += Number(el);
    }
    return sum;
  };

  const isNumber = function (num) {
    return num >= 0 && num <= 9;
  };

  const result = {
    valid: false,
    number: fullCardNumber,
    error: "",
  };

  if (creditCardNumber.length === 16) {
    for (let i = 0; i < creditCardNumber.length; i++) {
      let currentChar = creditCardNumber[i];
      let currentcharAsNumber = Number(currentChar);
      if (!isNumber(currentcharAsNumber)) {
        // test for numeric characters
        result.error = `invalid characters`;
        return result;
      } else {
        if (creditCardNumber[0] !== currentChar) {
          // test if atleast two different characters are used
          if (cardNumberAsANumber % 2 === 0) {
            // test if last umber is even
            let sumOfDigits = totalSum(cardNumberAsArray);
            if (sumOfDigits > 16) {
              // test if sum of digits greater than 16
              result.valid = true;
              delete result.error;
              return result;
            } else {
              result.error = "sum less than 16";
              return result;
            }
          } else {
            result.error = "odd final number";
            return result;
          }
        }
      }
    }
    result.error = "all characters are same";
    return result;
  } else {
    result.error = "Length not equal to 16";
    return result;
  }
};

console.log(isValidCard("a923-3211-9c01-1112")); // returns invalid characters
console.log(isValidCard("6666-6666-6666-1666")); // returns valid
console.log(isValidCard("6666-6666-6666-6666")); // returns invalid - all characters are same
console.log(isValidCard("6666-6666-6666-1667")); // returns invalid - odd final number
console.log(isValidCard("4444-4444-4444-4444")); // returns invalid - all characters are same
console.log(isValidCard("1111-1111-1111-1110")); // reuturns invalid - sum less than 16
console.log(isValidCard("6666-6666-6666-6661")); // returns invalid - odd final number
console.log(isValidCard("6666-6666-6666-1666")); // returns valid

// Part - 5 JavaScript Bank

console.log("JavaScript Bank");

let account1 = {
  owner: "Tim",
  balance: 2000,
};

let account2 = {
  owner: "Peter",
  balance: 5000,
};

let account3 = {
  owner: "Mary",
  balance: 7000,
};

const bank = {
  accounts: [],
};

const addAccount = function (account) {
  bank.accounts.push(account);
  return bank;
};

const depositMoney = function (obj1, amount) {
  obj1.balance += amount;
  return obj1;
};

const withdrawMoney = function (obj1, amount) {
  obj1.balance -= amount;
  return obj1;
};

const allAccountsSum = function (bank) {
  let sum = 0;
  for (const account of bank.accounts) {
    sum += account.balance;
  }
  return sum;
};

addAccount(account1);
console.log(bank.accounts);
console.log(depositMoney(account1, 500));
addAccount(account2);
console.log(bank.accounts);
console.log(withdrawMoney(account2, 200));
addAccount(account3);
console.log(allAccountsSum(bank));
console.log(bank);
console.log(bank.accounts);
