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

  describe('GET /cart/:id(numeric) endpoint:', function () {
    it('Returns expected output for positive id number', function (done) {
      const URL = 'http://localhost:7865/cart/7';
      request.get(URL, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 7');
        done();
      });
    });
  });

  describe('GET /cart/:id(numeric) endpoint:', function () {
    it('Returns expected output for negative id number', function (done) {
      const URL = 'http://localhost:7865/cart/-7';
      request.get(URL, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/:id(non-numeric) endpoint:', function () {
    it('Returns expected output for non numeric id number', function (done) {
      const URL = 'http://localhost:7865/cart/ab72';
      request.get(URL, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('POST /login with data passed in body endpoint:', function () {
    it('Returns expected output welcoming user with name', function (done) {
      const URL = 'http://localhost:7865/login';
      request.post(URL, { json: { userName: 'Alex' } }, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Alex');
        done();
      });
    });
  });

  describe('GET /available_payments endpoint:', function () {
    it('Returns the payment methods', function (done) {
      const URL = 'http://localhost:7865/available_payments';
      request.get(URL, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body))
          .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
        done();
      });
    });
  });
});
