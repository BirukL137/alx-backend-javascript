const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', () => {
  let console_spy;

  beforeEach(() => {
    console_spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    console_spy.restore();
  })
  
  it('should log "The total is: 120" once', () => {
    sendPaymentRequestToApi(100, 20);
    assert(console_spy.calledOnceWith('The total is: 120'));
  });

  it('should log "The total is: 20" once', () => {
    sendPaymentRequestToApi(10, 10);
    assert(console_spy.calledOnceWith('The total is: 20'));
  });
});
