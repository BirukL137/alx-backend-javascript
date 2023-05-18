const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const stub_calc = sinon.stub(Utils, 'calculateNumber').returns(10);
    const console_spy = sinon.stub(console, 'log');

    sendPaymentRequestToApi(100, 20);
    
    chai.expect(stub_calc.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    chai.expect(console_spy.calledWithExactly('The total is: 10')).to.be.true;

    stub_calc.restore();
    console_spy.restore();
  });
});
