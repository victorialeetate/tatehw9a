class Account {
    constructor(owner) {
      this.owner = owner;
      this.balance = 0;
    }
  
    credit(amount) {
      this.balance += amount;
    }
  
    describe() {
      return `${this.owner} has a balance of $${this.balance}`;
    }
  }
  
  module.exports = Account;