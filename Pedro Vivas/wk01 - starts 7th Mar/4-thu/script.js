//Geometry function lab
console.log("Part 1: Rectangle");
console.log("_________________");
const rectangleA = {
    length: 4,
    width: 4
};

const rectangleB = {
    length: 4,
    width: 8
};

const isSquare = function(rect) {
    return rect.length === rect.width;
}

const area = function(rect) {
    return rect.length * rect.width;
}

const perimeter = function(rect) {
    return (rect.length * 2) + (rect.width * 2);
}

//TEST CASES
console.log(isSquare(rectangleA)); //square
console.log(isSquare(rectangleB)); //not square
console.log(area(rectangleA)); // 4*4
console.log(area(rectangleB)); // 4*8
console.log(perimeter(rectangleA)); // (4*2) + (4*2)
console.log(perimeter(rectangleB)); // (4*2) + (8*2)


//Triangle
console.log("PART 2: Triangles");
console.log("_________________");
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

//obtuse triangle
const triangleC = {
    sideA: 3,
    sideB: 4,
    sideC: 6
};

//Equilateral triangle = all sides same length
const isEquilateral = function(triObj) {
    return triObj.sideA === triObj.sideB && triObj.sideB === triObj.sideC;
};

//Isosceles triangle = 2 sides equal length
const isIsosceles = function(triObj) {
    return triObj.sideA === triObj.sideB || triObj.sideA === triObj.sideC || triObj.sideB === triObj.sideC;
};
//Heron's area of triangle:
//area of triangle = Sqr of s(s-a)(s-b)(s-c), where s = (a+b+c)/2; a,b,c = side length;
const triArea = function(triObj) {
    let s = (triObj.sideA + triObj.sideB + triObj.sideC) / 2;
    let toSq = s * (s - triObj.sideA) * (s - triObj.sideB) * (s - triObj.sideB);
    let ans = Math.sqrt(toSq);
    return ans;
};

//Obtuse triangle = The sides of an obtuse triangle should satisfy the condition that the sum of the squares of any two sides is lesser than the square of the third side.
const isObtuse = function(triObj) {
    let squareA = Math.pow(triObj.sideA, 2);
    let squareB = Math.pow(triObj.sideB, 2);
    let squareC = Math.pow(triObj.sideC, 2);
    let arr = [squareA, squareB, squareC].sort((a,b)=> a-b); // = function(a,b) {return a - b};
    return arr[0] + arr[1] < arr[2];
};
//TEST CASES
console.log("isEquilateral");
console.log(isEquilateral(triangleA)); // not equilateral
console.log(isEquilateral(triangleB)); // equilateral
console.log(isEquilateral(triangleC)); // not equilateral
console.log("isIsosceles");
console.log(isIsosceles(triangleA)); // isosceles
console.log(isIsosceles(triangleB)); // isosceles
console.log(isIsosceles(triangleC)); // not isosceles
console.log("find Area");
console.log(triArea(triangleA));
console.log(triArea(triangleB));
console.log(triArea(triangleC));
console.log("isObtuse");
console.log(isObtuse(triangleA)); //not obtuse
console.log(isObtuse(triangleB)); //not obtuse
console.log(isObtuse(triangleC)); //obtuse


//Cash register
console.log("Cash Register");
console.log("_________________");
const cart1 = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
}

const cart2 = {
    soda: "2.20",
    chips: "3.40",
    brownies: "10.50",
    cake: "25",
    iceCream: "12.90"
}

const cashRegister = function(shopCart) {
    let sum = 0;
    for(let item in shopCart) {
        let price = shopCart[item];
        sum += parseFloat(price);
    }
    return sum;
}

//TEST CASES
console.log(cashRegister(cart1)); // total = 60.55
console.log(cashRegister(cart2)); // total = 54.00

//Credit Card Validation
const validateCreditCard = function(cc) {
    //remove  -
    //must be 16 chars, all numbers
    //final digit must be even
    //sum of all digits must be greater than 16
    //return { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
    const errorType = [
        "Must be 16 digits, all numbers",
        "Final digit not even",
        "Sum of all digits cannot not be < 16"
    ]
    let validation = {
        valid: true,
        number: cc,
        error: 'typeOf'
    };
    //remove "-"
    const stripCc = cc.split("-").join("");
    // check length
    if(stripCc.length < 16) {
        validation.error = errorType[0];
        validation.valid = false;
        return validation;
    }
    // last number is even
    if( parseInt(stripCc[15]) % 2 != 0) {
        validation.error = errorType[1];
        validation.valid = false;
        return validation;
    }
    // numbers only
    let sum = 0;
    for(let j = 0; j < stripCc.length; j++) {
        if((/[a-zA-Z]/).test(stripCc[j])) {
            validation.error = errorType[0];
            validation.valid = false;
            return validation;
        }
        //add all numbers
        sum += parseInt(stripCc[j]);
    }
    //if sum of all numbers < 16
    if (sum < 16) {
        validation.error = errorType[2];
        validation.valid = false;
    }

    return validation;
}

console.log(validateCreditCard('a923-3211-9c01-1112')); // characters not all numbers
console.log(validateCreditCard('9923-3211-9101-1111')); // last digit not even
console.log(validateCreditCard('7923-3211-9501-111')); // less than 16 numbers
console.log(validateCreditCard('1111-1111-1101-1110')); // sum of numbers < 16


//Javascript Bank
console.log("Javascript Bank");
console.log("_________________");

let accounts = [{owner: "John Doe", balance: 2500}, {owner: "Maddison Li", balance: 4500}];

const addAccount = function(name, startBalance) {
    //params: str, number
    accounts.push({owner: name, balance: startBalance});
    return `new account added: owner: ${name}, starting balance: ${startBalance}`;
};

const deposit = function(accOwner, cashToAdd) {
    let receipt = [];
    for (let i = 0; i < accounts.length; i++) {
        let name = accounts[i].owner;
        let currBalance = accounts[i].balance;
        if (accOwner === name) {
            accounts[i].balance = currBalance + cashToAdd; 
            receipt = [cashToAdd, name, accounts[i].balance];
            break;
        }
    }
    return `${receipt[0]} added to ${receipt[1]}'s account. new Balance: ${receipt[2]}`;
};

const withdraw = function(accOwner, cashWithdraw) {
    let receipt = [];
    for (let i = 0; i < accounts.length; i++) {
        let name = accounts[i].owner;
        let currBalance = accounts[i].balance;
        if (accOwner === name) {
            accounts[i].balance = currBalance - cashWithdraw; 
            receipt = [cashWithdraw, name, accounts[i].balance];
            break;
        }
    }
    return `${receipt[0]} withdrawn from ${receipt[1]}'s account. new Balance: ${receipt[2]}`;
};

//TEST CASES
console.log(accounts.length); // check number of accounts;
console.log(addAccount("Jamie Lanister", 12000)); //Add new account
console.log(accounts.length); // check new account added;
console.log(deposit("John Doe", 500)); // deposit money to an account
console.log(withdraw("Maddison Li", 1300)); // withdraw money from an account
console.log(accounts); //check deposit and withdraw from accounts


//?? withdraw and deposit not working yet!!!