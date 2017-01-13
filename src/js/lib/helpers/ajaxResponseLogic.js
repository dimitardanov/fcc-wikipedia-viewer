

function success (funcs) {
  return function (data) {
    if (funcs.hasResults(data)) {
      var res = funcs.transformData(data);
      funcs.renderResults(res);
    } else {
      funcs.renderNoResultsMsg();
    }
  };
}


function error (funcs) {
  return function (status) {
    funcs.error(status);
  };
}


module.exports = {
  success: success,
  error: error
};
