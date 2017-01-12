var expect = require('chai').expect;
var h = require('../lib/helpers/helpers.js');

describe('helpers module', function() {

  describe('createOSQueryData function', function () {
    it('should set search key', function () {
      var data = {};
      var query = 'random-str';
      var result = h.createOSQueryData(data, query);
      expect(result.search).to.be.equal(query);
    });

    it('should overwrite any existing value of the search key', function () {
      var data = {search: 'prev-value'};
      var query = 'new-val';
      var result = h.createOSQueryData(data, query);
      expect(result.search).to.be.equal(query);
    });

    it('should not modify other object properties', function () {
      var data = {a: 'b', c: 'd', search: 'some-val'};
      var query = 'new-search-str';
      var expected = {a: 'b', c: 'd', search: 'new-search-str'};
      var result = h.createOSQueryData(data, query);
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe('isValidQueryStr function', function () {
    it('should return false if given an empty string', function () {
      var result = h.isValidQueryStr('');
      expect(result).to.be.false;
    });

    it('should return true if given a non-empty string', function () {
      var result = h.isValidQueryStr('123abc');
      expect(result).to.be.true;
    });
  });
});
