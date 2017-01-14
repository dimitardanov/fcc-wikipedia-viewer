
var expect = require('chai').expect;
var sinon = require('sinon');
var arl = require('../lib/helpers/ajaxResponseLogic.js');

describe('ajaxResponseLogic module', function () {

  describe('success function', function () {
    beforeEach(function () {
      this.results = require('./fixtures/opensearchData.js').results;
      this.emptyResults = ['notfound', [], [], []];
      this.trData = 'transformed data';
      this.funcs = {
        hasResults: sinon.stub(),
        transformData: sinon.stub(),
        renderResults: sinon.spy(),
        renderNoResultsMsg: sinon.spy()
      };
      this.funcs.hasResults.withArgs(this.results).returns(true);
      this.funcs.hasResults.withArgs(this.emptyResults).returns(false);
      this.funcs.transformData.withArgs(this.results).returns(this.trData);
      this.sf = arl.success(this.funcs);
    });
    afterEach(function () {
      delete this.funcs;
      delete this.results;
      delete this.emptyResults;
      delete this.sf;
    });

    it('should call hasResults once if data has no results', function () {
      this.sf(this.emptyResults);
      expect(this.funcs.hasResults.calledOnce).to.be.true;
      expect(this.funcs.hasResults.calledWith(this.emptyResults)).to.be.true;
    });

    it('should call hasResults once if data has results', function () {
      this.sf(this.results);
      expect(this.funcs.hasResults.calledOnce).to.be.true;
      expect(this.funcs.hasResults.calledWith(this.results)).to.be.true;
    });

    it('should call once transformData if given non-empty results', function () {
      this.sf(this.results);
      expect(this.funcs.transformData.calledWith(this.results)).to.be.true;
      expect(this.funcs.transformData.calledOnce).to.be.true;
    });

    it('should not call transformData if given 0 results', function () {
      this.sf(this.emptyResults);
      expect(this.funcs.transformData.called).to.be.false;
    });

    it('should call render results func with tranformed data if given results', function () {
      this.sf(this.results);
      expect(this.funcs.transformData.calledWith(this.results)).to.be.true;
      expect(this.funcs.renderResults.calledOnce).to.be.true;
      expect(this.funcs.renderResults.calledWith(this.trData)).to.be.true;
    });

    it('should call render no results if none given', function () {
      this.sf(this.emptyResults);
      expect(this.funcs.renderResults.called).to.be.false;
      expect(this.funcs.renderNoResultsMsg.calledOnce).to.be.true;
    });
  });
});
