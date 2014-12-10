var path = require('path');
require('chai').should();

var FacebookAdsApi = require(path.join(__dirname, '..', 'src/api.js'));

describe('Api', function() {
  'use strict';

  var token = 'a1b2c3d4e5';

  describe('constructor', function() {
    it('exists', function() {
      FacebookAdsApi.should.be.a('function');
    });

    it('throws an error if no token is given', function() {
      FacebookAdsApi.should.throw(Error);
    });

    it('throws no error if token is given', function() {
      FacebookAdsApi.bind(FacebookAdsApi, token).should.not.throw(Error);
    });
  });

  describe('token functions', function() {
    it('gets the token', function() {
      var api = new FacebookAdsApi(token);
      api.getToken().should.be.equal(token);
    });

    it('sets the token', function() {
      var api = new FacebookAdsApi(token);
      var newToken = '5e4d3c2b1a';
      api.setToken(newToken).getToken().should.be.equal(newToken);
    });
  });
});
