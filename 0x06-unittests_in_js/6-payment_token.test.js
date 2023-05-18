const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        chai.expect(result).to.include({data: 'Successful response from the API'});
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
});
