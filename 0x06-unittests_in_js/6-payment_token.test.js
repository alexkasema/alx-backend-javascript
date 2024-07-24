const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI:', function () {
  describe('When argument passed if true:', function () {
    it('Resolved to true.', function (done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.equal({ data: 'Successful response from the API' });
          done();
        })
        .catch((err) => done(err));
    });
  });
});
