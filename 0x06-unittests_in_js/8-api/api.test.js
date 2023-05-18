const request = require('request');
const { expect } = require('chai');

describe('Test the root path', () => {
  describe('GET /', () => {
    it('Welcome to the payment system', (done) => {
      const app = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(app, function (_error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
