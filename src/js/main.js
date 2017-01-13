
// var templates = require('./compiledTemplates/templates');
//var HBRS = require('handlebars');


$(function() {
  var osData = require('./lib/data/opensearchData.js');
  var search = require('./lib/ajax/wikiSearch.js');
  var helpers = require('./lib/helpers/helpers.js');
  var logFuncs = require('./lib/helpers/ajaxResponseLogic.js');
  var renderResults = require('./lib/render/renderResults');
  var renderNoResultsMsg = require('./lib/render/renderNoResultsMsg.js');

  var wikiURL = 'https://en.wikipedia.org/w/api.php';

  var $searchBtn = $('#search-btn');
  var $query = $('#query');

  function renderResultsWrapper (data) {
    var template = require('./lib/templates/opensearchResult.hbs');
    var $container = $('#results');
    $container.html('');
    return renderResults(data, template, $container);
  }

  function renderNoResultsMsgWrapper (query) {
    var template = require('./lib/templates/noResultsMsg.hbs');
    var $container = $('#results');
    var data = {search: query};
    return function () {
      renderNoResultsMsg(data, template, $container);
    };
  }

  $searchBtn.on('click', function (evt) {
    evt.preventDefault();
    var query = $query.val();
    query = query.trim();
    if (helpers.isValidQueryStr(query)) {
      var qdata = helpers.createOSQueryData(osData, query);
      var funcs = {
        hasResults: helpers.hasResults,
        transformData: helpers.transformOSData,
        renderResults: renderResultsWrapper,
        renderNoResultsMsg: renderNoResultsMsgWrapper(query),
        error: function (status) {console.log(status);}
      };
      var osrlf = {
        success: logFuncs.success(funcs),
        error: logFuncs.error(funcs)
      };
      search(wikiURL, qdata, osrlf);

    } else {
      console.log('empty query');
    }
  });

});
