const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const spy_calc = sinon.spy(Utils, 'calculateNumber');
    const console_spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    
    chai.expect(spy_calc.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    chai.expect(console_spy.calledWithExactly('The total is: 120')).to.be.true;

    spy_calc.restore();
    console_spy.restore();
  });
});
