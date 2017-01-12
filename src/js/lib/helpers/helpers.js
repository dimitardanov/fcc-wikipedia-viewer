

function createOSQueryData (data, query) {
  data.search = query;
  return data;
}

function isValidQueryStr (query) {
  return query.length > 0;
}

function transformOSData (data) {
  var res = [];
  var len = data[1].length;
  for (var i = 0; i < len; i++) {
    var item = {};
    item.title = data[1][i];
    item.snippet = data[2][i];
    item.url = data[3][i];
    res.push(item);
  }
  return res;
}

function getNumResults (data) {
  return data[1].length;
}

module.exports = {
  createOSQueryData: createOSQueryData,
  isValidQueryStr: isValidQueryStr,
  transformOSData: transformOSData,
  getNumResults: getNumResults
};
