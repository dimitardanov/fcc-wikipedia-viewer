

function search (url, data, funcs) {
  $.ajax({
    url: url,
    data: data,
    crossDomain: true,
    dataType: 'jsonp',
    success: function (data, status, jqxhr) {
      funcs.success(data);
    },
    error: function (status, jqxhr) {
      funcs.error(status);
    }
  });
}

module.exports = search;
