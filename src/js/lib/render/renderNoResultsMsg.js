

function renderNoResultsMsg (data, template, $parent) {
  $parent.html(template(data));
}

module.exports = renderNoResultsMsg;
