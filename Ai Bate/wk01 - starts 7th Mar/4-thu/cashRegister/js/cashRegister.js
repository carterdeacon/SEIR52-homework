// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart.
// Example

// ```
// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// console.log(Object.keys(cartForParty));
const cashRegister = function(){
let priceStrArray = (Object.values(cartForParty));
    priceNumArray = [];
    for(let i = 0 ; i < priceStrArray.length ; i++){
    priceNumArray.push(parseFloat(priceStrArray[i]))
    };// console.log(priceNumArray);
    sum = 0;
    for(let index = 0 ; index < priceNumArray.length ; index++){
        sum += priceNumArray[index] ;
    } return sum;
}
console.log(cashRegister());


// // Output
// cashRegister(cartForParty)); // 60.55
// ```


