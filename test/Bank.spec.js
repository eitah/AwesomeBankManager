// test file
const expect = require('chai').expect;
const Bank = require('../lib/Bank');

describe('Bank', () => {
  describe('#constructor', () => {
    it('should build an bank with initial values', () => {
      const b1 = new Bank('First Awesome Bank of CompoZed');
      expect(b1.name).to.equal('First Awesome Bank of CompoZed');
      expect(b1.accounts).to.be.length(0);
      expect(b1.value).to.equal(0);
    });
  });
});
