

function search (url, data, successFunc, errorFunc) {
  $.ajax({
    url: url,
    data: data,
    crossDomain: true,
    dataType: 'jsonp',
    success: function (data, status, jqxhr) {
      console.log('yay');
      successFunc(data);
    },
    error: function (status, jqxhr) {
      console.log('oops');
      errorFunc(status);
    }
  });
}

module.exports = search;
