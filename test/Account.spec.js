//test file
const expect = require('chai').expect;
const Account = require('../lib/Account');

describe('Account', function(){
  describe('#constructor', function(){
    it('should build an account with initial values', function(){
      let randomBalance = Math.random() * 1000;
      a1 = new Account('billybob', randomBalance);
      //console.log(`AccountNum looks like: ${a1.accountNumber}`);
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('billybob');
      expect(a1.balance).to.equal(randomBalance);
      expect(a1).to.have.property('accountNumber');
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });

  });

});
