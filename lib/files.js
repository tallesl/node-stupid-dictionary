var fs = require('fs')
  , path = require('path')
  , safeRequire = require('safe-require')

exports.dictionary = function (filepath)  {
  filepath = filepath || path.join(process.cwd(), './dictionary.json')
  
  var dictionary = readFile(filepath)
  return JSON.parse(dictionary)
}

exports.toReplace = function (filepath) {
  if (!filepath) {
      console.error('You should provide the filepath to the original content to be replaced with the "--to-replace" argument.')
      process.exit(1)
  }

  return readFile(filepath)
}

function readFile (filepath) {
  try {

    return fs.readFileSync(filepath.toString(), 'utf8')

  } catch (err) {

    if (err.code === 'ENOENT') {
      console.error('Coundn\'t find "' + filepath + '"')
      process.exit(1)
    } else throw err

  }
}