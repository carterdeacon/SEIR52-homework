const accounts ={
  checkingBalance: 0,
  savingsBalance: 0,

  total: function(){
      return this.checkingBalance + this.savingsBalance
  },
  checkDeposit: function(amount){
      amount = Number(amount);
      this.checkingBalance += amount;
  },
  savingsDeposit: function(amount){
    amount = Number(amount);
    this.savingsBalance += amount;
},
  checkingWithdraw: function(amount){
      amount = Number(amount);
      if(amount <= this.checkingBalance){
     this.checkingBalance += amount;
    } 
  },
  savingsWithdraw: function(amount){
    amount = Number(amount);
    if(amount <= this.savingsBalance){
   this.savingsBalance += amount;
  }
},
}