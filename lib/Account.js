/* eslint-disable func-names */
const uuid = require('uuid');


function Account(name) {
  this.name = name;
  this.balance = 0;
  this.accountNumber = uuid.v4();
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.makeDeposit = function (amount) {
  this.deposits.push(amount);
  this.balance += amount;
  return this.balance;
};

Account.prototype.makeWithdrawal = function (amount) {
  if (amount > this.balance) { return this.balance; }

  this.withdraws.push(amount);
  this.balance -= amount;
  return this.balance;
};

module.exports = Account;
