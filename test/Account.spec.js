// test file
const expect = require('chai').expect;
const Account = require('../lib/Account');

describe('Account', () => {
  describe('#constructor', () => {
    const a1 = new Account('billybob');
    it('should build an account with initial values', () => {
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('billybob');
      expect(a1.balance).to.equal(0);
      expect(a1).to.have.property('accountNumber');
      expect(a1.accountNumber).to.have.length(36);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });
  describe('#makeDeposit', () => {
    const a1 = new Account('billybob');
    it('should deposit money into the account', () => {
      const d1 = 50;
      const response = a1.makeDeposit(d1);
      expect(a1.balance).to.equal(d1);
      expect(a1.deposits).to.be.length(1);
      expect(a1.deposits).to.eql([d1]);
      expect(response).to.equal(d1);
    });
  });
  describe('#withdrawal', () => {
    it('should withdraw money from the account', () => {
      const a1 = new Account('billybob');
      const d1 = Math.floor(Math.random() * 1000) + 200;
      const testWithdrawal = Math.floor(Math.random() * 150);
      a1.makeDeposit(d1);
      const testResult = a1.makeWithdrawal(testWithdrawal);

      expect(a1.withdraws).to.be.length(1);
      expect(a1.balance).to.equal(d1 - testWithdrawal);
      expect(a1.balance).to.equal(testResult);
    });
    it('should now allow an overdraw of the account', () => {
      const a1 = new Account('billybob');
      a1.makeDeposit(100);
      const testResult = a1.makeWithdrawal(200);

      expect(a1.withdraws).to.be.length(0);
      expect(a1.balance).to.equal(100);
      expect(a1.balance).to.equal(testResult);
    });
  });
});
