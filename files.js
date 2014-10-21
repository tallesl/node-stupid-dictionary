var fs = require('fs')
  , path = require('path')

exports.loadDictionary = function (filepath)  {
  var filepath = filepath || path.join(process.cwd(), './dictionary.json')

  checkExistence(filepath)

  return require(filepath.toString())
}

exports.loadToReplace = function (filepath) {

  if (!filepath) {
      console.error(
        'You should provide the filepath to the original content to be replaced with the "--to-replace" argument.')
      process.exit(1)
  }

  checkExistence(filepath)

  return fs.readFileSync(filepath.toString(), 'utf8')
}

function checkExistence (filepath) {
  if (!fs.existsSync(filepath)) {
    console.error('Coundn\'t find ' + filepath)
    process.exit(1)
  }
}