/* eslint-disable func-names */
function Bank(name) {
  this.name = name;
  this.accounts = [];
}

Bank.prototype.addAccount = function (newAccount) {
  this.accounts.push(newAccount);
};

Bank.prototype.getValue = function () {
  if (this.accounts.length === 0) { return 0; }
  return this.accounts.map(n => n.balance).reduce((agg, n) => agg + n);
};

module.exports = Bank;
