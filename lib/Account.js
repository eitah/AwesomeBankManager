const uuid = require('uuid');

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  this.accountNumber = uuid.v4();
  this.deposits = [];
  this.withdraws = [];
};




module.exports = Account;
