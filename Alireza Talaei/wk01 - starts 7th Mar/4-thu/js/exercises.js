// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    lenght: 4,
    width: 4
};

const rectangleB = {
    lenght: 2,
    width: 4
};

const isSquare = function (rec) {
        if (rec.length === rec.width) {
        return "This is a rectangle"
    }
    else {
        return "This is not a rectangle"
    }
};

const areaOfRec = function (rec) {
    const area = rec.lenght * rec.width;
    return area;
};

const primeter = function (rec) {
    const primeter = (rec.lenght + rec.width) * 2;
    return primeter;
};

// Part 2, Triangle
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

const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
};

const triangleC = {
    sideA: 5,
    sideB: 4,
    sideC: 3
};

const triangleD = {
    sideA: 5,
    sideB: 4,
    sideC: 10
};

const isEquilateral = function (tri) {
    if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return "Triangle is equilateral"
}
else {
    return "Triangle is not equilateral"
}
};

const isIsosceles = function (tri) {
    if (tri.sideA === tri.sideB || tri.sideB === tri.sideC) {
    return "Triangle is isosceles"
}
else {
    return "Triangle is not isosceles"
}
};

const isObtuse = function (tri) {
    let greatestSide = tri.sideA;
    let smallSide1 = tri.sideB;
    let smallSide2 = tri.sideC;

    if (smallSide1 > greatestSide){
        let a = greatestSide;
        greatestSide = smallSide1;
        smallSide1 = a;
    }
    if (smallSide2 > greatestSide){
        let a = greatestSide;
        greatestSide = smallSide2;
        smallSide2 = a;
    }
    if ((greatestSide * greatestSide) > ((smallSide1 * smallSide1) + (smallSide2 * smallSide2)) ) {
    return "Triangle is obtuse"
    }
    else {
    return "Triangle is not obtuse"
    }
};


const areaOfTri = function (tri) {
    const S =  (tri.sideA + tri.sideB + tri.sideC) / 2;
    const area = Math.sqrt(S * (S - tri.sideA) * (S - tri.sideB) * (S - tri.sideC));
    return area;
};

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

  const cartForParty2 = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
  };

const cashRegister = function (cashObject) {
    let arrayOfCash = Object.values(cashObject);
    let total = 0;
    for(let i = 0; i < arrayOfCash.length; i++) {
        total = Number(arrayOfCash[i]) + total;
    }
    return total;     
};


// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16


const validateCrediCard = function (card) {
//here I don't know how to remove 4 "-" from the string so I did it 4 times.
    let card1 = card.replace("-", "");
    let card2 = card1.replace("-", "");
    let card3 = card2.replace("-", "");
    let card4 = card3.replace("-", "");
    let cardNumber = [];
    let sum = 0;
    let repeatNumber = 0;
    for (let i = 0; i < card4.length; i++) {
        let a = Number(card4[i]);
        if (isNaN(a)){
            console.log(`error! ${card4[i]} is not a number`);
            return false;
        }
       cardNumber.push(a);
       sum = sum + a;
    };
    for (let j = 0; j < cardNumber.length; j++) {
        if (cardNumber[j] === cardNumber[j-1]) {
            repeatNumber++;
        }
    }
    if (cardNumber.length < 16) {
        console.log("Please enter 16 digits for your card.")
    }
    
    if (sum < 16 || cardNumber[15] % 2 === 1 || repeatNumber === 15 ) {
        return false;
    }
    else {
        return true;
    }
};

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.




const addAccount = function(object) {
    bankAccount.push(object);
    return "Customer was successfully added"
}

const balance = function () {
    sum = 0;
    for(i = 0; i < bankAccount.length; i++) {
        sum = sum + bankAccount[i].balance;
    }
    return sum;
}

const deposite = function (name, money) {
    for(i = 0; i < bankAccount.length; i++) {
        let searchName = bankAccount[i].customerName;
        if(name === searchName){
            bankAccount[i].balance = bankAccount[i].balance + money;
            console.log(`${money}$ was deposited to ${searchName} account`);
            break ; //Please have a look at my codes here. I don't know why the function does not terminate here. It prints both messages in the console.
        }
        else {
            console.log("Customer name was not found.")
        }
    }
}

const withdraw = function (name, money) {
    for(i = 0; i < bankAccount.length; i++) {
        let searchName = bankAccount[i].customerName;
        if(name === searchName){
            bankAccount[i].balance = bankAccount[i].balance - money;
            console.log(`${money}$ was withdrawn from ${searchName} account`);
            break ; //same issue here as mentioned in the previous deposite function.
        }
        else {
            console.log("Customer name was not found.")
        }
    }
}

const bankAccount = [];
accountName1 = {
    customerName: "John Smith",
    balance: 100
}

accountName2 = {
    customerName: "Alireza Talaei",
    balance: 200
}
bankAccount.push(accountName1);
bankAccount.push(accountName2);

console.log(bankAccount);
