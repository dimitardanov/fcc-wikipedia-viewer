

function createOSQueryData (data, query) {
  data.search = query;
  return data;
}

function isValidQueryStr (query) {
  return query.length > 0;
}

function transformOSData (data) {
  var res = [];
  for (var i = 0; i < getNumResults(data); i++) {
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
