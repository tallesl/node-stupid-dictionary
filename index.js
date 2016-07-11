'use strict'

const Case = require('case')

module.exports = (dictionary, content) => {
  for (const key in dictionary) {
    const table = replacements(key, dictionary[key])
    for (const _key in table) {
      content = content.replace(_key, table[_key], 'g')
    }
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
