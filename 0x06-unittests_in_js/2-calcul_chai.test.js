const assert = require('assert');
const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6', function () {
      const res = calculateNumber('SUM', 1.4, 4.5);
      chai.expect(res).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4', function () {
      const res = calculateNumber('SUBTRACT', 1.4, 4.5);
      chai.expect(res).to.equal(-4);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2', function () {
      res = calculateNumber('DIVIDE', 1.4, 4.5);
      chai.expect(res).to.equal(0.2);
    });
  });

  describe('DIVIDE', function () {
    it('should return Error', function () {
      const res = calculateNumber('DIVIDE', 1.4, 0);
      chai.expect(res).to.be.a('string');
      chai.expect(res).to.equal('Error');
    });
  });
});
