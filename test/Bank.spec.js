// test file
const expect = require('chai').expect;
const Bank = require('../lib/Bank');
const Account = require('../lib/Account');

describe('Bank', () => {
  describe('#constructor', () => {
    it('should build an bank with initial values', () => {
      const b1 = new Bank('First Awesome Bank of CompoZed');
      expect(b1.name).to.equal('First Awesome Bank of CompoZed');
      expect(b1.accounts).to.be.length(0);
    });
  });
  describe('#addAccount', () => {
    it('should add an account to the array', () => {
      const b1 = new Bank('First Awesome Bank of CompoZed');
      const a1 = new Account('billybob');
      // a1.makeDeposit(50);
      b1.addAccount(a1);
      expect(b1.accounts).to.be.length(1);
      expect(b1.accounts[0].accountNumber).to.equal(a1.accountNumber);
      // do we need to test for the value of the account?
    });
  });
  describe('#getValue', () => {
    it('should calculate and return the value of the bank', () => {
      const b1 = new Bank('Second Awesome Bank of CompoZed');
      const b2 = new Bank('Yet Another Awesome Bank of CompoZed');
      const b3 = new Bank('AllTheMoneyz');

      const a1 = new Account('itslunchtime');
      const a2 = new Account('ImHungry');
      const a3 = new Account('BoatyMcBoatface');

      a1.makeDeposit(1000);
      a2.makeDeposit(200);
      a3.makeDeposit(500);

      b1.addAccount(a1);
      b1.addAccount(a2);

      b3.addAccount(a3);
      a3.makeWithdrawal(200);

      expect(b1.getValue()).to.eql(1200);
      expect(b2.getValue()).to.eql(0);
      expect(b3.getValue()).to.eql(300);
    });
  });
});
