const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber')
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(spy).to.have.been.calledWith('SUM', 100, 20);
  });

  it('should return the same value as Utils.calculateNumber', () => {
    const expectedResult = Utils.calculateNumber('SUM', 100, 20);
    const actualResult = sendPaymentRequestToApi(100, 20);
    chai.expect(actualResult).to.equal(expectedResult);
  });
});