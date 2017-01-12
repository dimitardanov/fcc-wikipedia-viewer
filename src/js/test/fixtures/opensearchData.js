

var results = [
  'einstein',
  ['t0', 't1', 't2', 't3'],
  ['s0', 's1', 's2', 's3'],
  ['u0', 'u1', 'u2', 'u3']
];

var expected = [
  {title: 't0', snippet: 's0', url: 'u0'},
  {title: 't1', snippet: 's1', url: 'u1'},
  {title: 't2', snippet: 's2', url: 'u2'},
  {title: 't3', snippet: 's3', url: 'u3'},
];

module.exports = {
  results: results,
  expected: expected
};
