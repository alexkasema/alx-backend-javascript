const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('Test sendPaymentRequestToApi function:', function () {
  let spyLog;
  beforeEach(function () {
    // Runs before each  test in this block
    spyLog = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Runs after each test in this block
    spyLog.restore();
  });

  it('Ensures correct output with (100, 20) as arguments:', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spyLog.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyLog.calledOnce).to.be.true;
  });

  it('Ensures correct output with (10, 10) as arguments:', function () {
    sendPaymentRequestToApi(10, 10);

    expect(spyLog.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyLog.calledOnce).to.be.true;
  });
});
