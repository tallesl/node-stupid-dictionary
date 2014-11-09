#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
  , dictionary = argv.dictionary
  , index = require('../lib/index')
  , toReplace = argv['to-replace']
  , version = require('../package.json').version

var help = 'This is a "stupid" word replacer.\n\
It reads the words to replace from a dictionary, replaces the words in the file you want to, and then outputs the result to stdout.\n\
\n\
The dictionary must be a valid json file.\n\
\n\
You must provide a file from which the contents will be read with "--to-replace".\n\
There is also "--dictionary" if you don\'t want to use the default "./dictionary.json" path.'

if (argv.h || argv.help) console.log(help)
else if (argv.v || argv.version) console.log(version)
else index(dictionary, toReplace)

