// test file
const expect = require('chai').expect;
const Account = require('../lib/Account');

describe('Account', () => {
  describe('#constructor', () => {
    it('should build an account with initial values', () => {
      const a1 = new Account('billybob');
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('billybob');
      expect(a1.balance).to.equal(0);
      expect(a1).to.have.property('accountNumber');
      expect(a1.accountNumber).to.have.length(36);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });
});
