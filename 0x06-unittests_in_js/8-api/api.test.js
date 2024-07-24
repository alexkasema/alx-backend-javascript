const { expect } = require('chai');
const request = require('request');

describe('Test for the index page:', function () {
  describe('GET /', function () {
    it('Returns expected status code and body response', function (done) {
      const URL = 'http://localhost:7865';
      request.get(URL, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
