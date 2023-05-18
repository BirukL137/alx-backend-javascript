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

  describe('GET /cart/12', () => {
    it('Payment methods for cart 12', (done) => {
      const app = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };
      request(app, function (_error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/abc', () => {
    it('Payment methods for cart abc', (done) => {
      const app = {
        url: 'http://localhost:7865/cart/abc',
        method: 'GET',
      };
      request(app, function (_error, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/hello', () => {
    it('Payment methods for cart hello', (done) => {
      const app = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };
      request(app, function (_error, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments endpoint', () => {
    it('Returns an object with payment_methods property', (done) => {
      const app = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
        json: true,
      };
      request(app, function (_error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      });
    });
  });

  describe('POST /login endpoint', () => {
    it('Returns a welcome message with the username Betty', (done) => {
      const app = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: true,
        body: { userName: 'Betty'},
      };
      request(app, function (_error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
