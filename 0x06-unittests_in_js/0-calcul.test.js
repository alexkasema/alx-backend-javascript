const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber function:', function () {
  describe('The sum of two integers:', function () {
    it('Should return 7.', function () {
      assert.strictEqual(calculateNumber(4, 3), 7);
    });
  });
  describe('The sum of a float and an integer (round up):', function () {
    it('Should return 5.', function () {
      assert.strictEqual(calculateNumber(2.7, 2), 5);
    });
  });
  describe('The sum of a float and an integer (round down):', function () {
    it('Should return 10.', function () {
      assert.strictEqual(calculateNumber(5.4, 5), 10);
    });
  });
  describe('The sum of two floats:', function () {
    it('Should return 8.', function () {
      assert.strictEqual(calculateNumber(4.3, 3.8), 8);
    });
  });
  describe('The sum of two floats with boarderline:', function () {
    it('Should return 3.', function () {
      assert.strictEqual(calculateNumber(1.5, 1.4), 3);
    });
  });
});
