

function renderResults (data, template, $parent) {
  data.forEach(function(item) {
    $parent.append(template(item));
  });
}

module.exports = renderResults;
