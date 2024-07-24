const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Test calculateNumber function given an operation:', function () {
  describe('The sum of two integers:', function () {
    it('Should return 7.', function () {
      expect(calculateNumber('SUM', 4, 3)).to.equal(7);
    });
  });
  describe('Subtracting a float and an integer (round up):', function () {
    it('Should return 1.', function () {
      expect(calculateNumber('SUBTRACT', 2.7, 2)).to.equal(1);
    });
  });
  describe('Subtraction of two floats:', function () {
    it('Should return -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('Division of two floats:', function () {
    it('Should return 0.2.', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('Division by 0:', function () {
    it('Should return Error.', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
  describe('The sum of two floats with boarderline:', function () {
    it('Should return 6.', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
});
