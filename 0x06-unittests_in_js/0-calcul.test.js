const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber function:', function () {
  describe('The sum of two integers:', function () {
    it('Should return 4.', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });
  describe('The sum of a float and an integer (round up):', function () {
    it('Should return 5.', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });
  describe('The sum of a float and an integer (round down):', function () {
    it('Should return 5.', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });
  describe('The sum of two floats with boarderline:', function () {
    it('Should return 6.', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
});
