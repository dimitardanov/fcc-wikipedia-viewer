

function createOSQueryData (data, query) {
  data.search = query;
  return data;
}

function isValidQueryStr (query) {
  return query.length > 0;
}


module.exports = {
  createOSQueryData: createOSQueryData,
  isValidQueryStr: isValidQueryStr
};
