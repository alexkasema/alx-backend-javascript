const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('Test sendPaymentRequestToApi function:', function () {
  it('Ensures correct out put of the calculateNumber function:', function () {
    const spyUtilsFunction = sinon.spy(Utils, 'calculateNumber');
    const spyLog = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtilsFunction.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyLog.calledOnceWithExactly('The total is: 120')).to.be.true;

    spyUtilsFunction.restore();
    spyLog.restore();
  });
});
