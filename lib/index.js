var files = require('./files')
  , replace = require('./replace')

module.exports = function (dictionaryPath, toReplacePath) {
  var dictionary = files.dictionary(dictionaryPath)
    , content = files.toReplace(toReplacePath)
  process.stdout.write(replace(dictionary, content))
}