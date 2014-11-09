var Case = require('case')

module.exports = function (dictionary, content) {
  for (var key in dictionary) {
    var value = dictionary[key]
      , table = replacements(key, value)
    for (var _key in table) content = content.replace(_key, table[_key], 'g')
  }
  return content
}

function replacements (key, value) {
  var table = { }
  table[key] = value
  table[Case.capital(key)] = Case.capital(value)
  table[Case.snake(key)] = Case.snake(value)
  table[Case.lower(key)] = Case.lower(value)
  table[Case.upper(key)] = Case.upper(value)
  return table
}

