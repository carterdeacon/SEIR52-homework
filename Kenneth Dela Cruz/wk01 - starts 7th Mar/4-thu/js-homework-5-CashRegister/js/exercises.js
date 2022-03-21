// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
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

const cashRegister = function(sCart){
        let itemPrice =  Object.values(sCart);
        let totalPrice = 0; 
        for (let i = 0; i < itemPrice.length; i++){
            totalPrice += parseFloat(itemPrice[i]);       
        }
        console.log('The total price is ', totalPrice)
}

cashRegister(cartForParty);

// // Output
// cashRegister(cartForParty)); // 60.55
// ```
