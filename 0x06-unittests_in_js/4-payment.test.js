const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('Test sendPaymentRequestToApi function:', function () {
  it('Ensures correct out put of the calculateNumber function:', function () {
    const stubUtilsFunction = sinon.stub(Utils, 'calculateNumber');
    stubUtilsFunction.returns(10);

    const spyLog = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubUtilsFunction.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyLog.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtilsFunction.restore();
    spyLog.restore();
  });
});
