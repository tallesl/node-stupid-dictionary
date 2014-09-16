var argv = process.argv.slice(0)

// removing first argument since it's the name of the script
// and also the word 'node' (if present as first argument)
argv.splice(0, argv[0] == 'node' ? 2 : 1)

// returns the number of occurrences of the passed argument
exports.exists = function (arg) {
  return argv.indexOf(arg) > -1
}

// returns true if the passed argument appears more than once
exports.isntSingle = function (arg) {
  return exports.exists(arg) ? argv.length > 1 : undefined
}

// get the argument next to the one passed
// beware repeated arguments: this function always uses the first found
exports.next = function (arg) {
  var i = argv.indexOf(arg)
  if (i != -1) return argv[i + 1]
}

