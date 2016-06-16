const uuid = require('uuid');

function Account(name) {
  this.name = name;
  this.balance = 0;
  this.accountNumber = uuid.v4();
  this.deposits = [];
  this.withdraws = [];
}

module.exports = Account;
