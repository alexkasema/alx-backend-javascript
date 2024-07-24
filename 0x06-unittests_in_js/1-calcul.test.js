const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test calculateNumber function given an operation:', function () {
  describe('The sum of two integers:', function () {
    it('Should return 7.', function () {
      assert.strictEqual(calculateNumber('SUM', 4, 3), 7);
    });
  });
  describe('Subtracting a float and an integer (round up):', function () {
    it('Should return 1.', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 2), 1);
    });
  });
  describe('Subtraction of two floats:', function () {
    it('Should return -4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('Division of two floats:', function () {
    it('Should return 0.2.', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('Division by 0:', function () {
    it('Should return Error.', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
  describe('The sum of two floats with boarderline:', function () {
    it('Should return 6.', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
});
