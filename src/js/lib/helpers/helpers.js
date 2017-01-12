

function createOSQueryData (data, query) {
  data.search = query;
  return data;
}

function isValidQueryStr (query) {
  return query.length > 0;
}

function transformOSData (data) {
  var res = [];
  data = data.slice(1);
  var len = data[0].length;
  for (var i = 0; i < len; i++) {
    var item = {};
    item.title = data[0][i];
    item.snippet = data[1][i];
    item.url = data[2][i];
    res.push(item);
  }
  return res;
}

module.exports = {
  createOSQueryData: createOSQueryData,
  isValidQueryStr: isValidQueryStr,
  transformOSData: transformOSData
};
