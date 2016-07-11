#!/usr/bin/env node

const argv = require('minimisty')
const fs = require('fs')
const path = require('path')
const pkg = require('./package')
const stupidDictionary = require('.')

if (argv.h || argv.help) help()
else if (argv.v || argv.version) console.log(version)
else replace()

function help () {
  console.log('This is a "stupid" word replacer.')
  console.log('It reads the words to replace from a dictionary, replaces the words in the file you want to, and then outputs the result to stdout.')
  console.log()
  console.log('The dictionary must be a valid json file.')
  console.log()
  console.log('You must provide a file from which the contents will be read with "--to-replace".')
  console.log('There is also "--dictionary" if you don\'t want to use the default "./dictionary.json" path.')
}

function version () {
  console.log(pkg.version)
}

function replace () {
  const dictionary = readDictionary(argv.dictionary)
  const content = readContent(argv['to-replace'])

  process.stdout.write(stupidDictionary(dictionary, content))
}

function readDictionary (filepath) {
  filepath = filepath || path.join(process.cwd(), './dictionary.json')

  return JSON.parse(readFile(filepath))
}

function readContent (filepath) {
  if (filepath) return readFile(filepath)

  console.error('Provide the filepath to the original content to be replaced with the "--to-replace" argument.')
  process.exit(1)
}

function readFile (filepath) {
  try {
    return fs.readFileSync(filepath.toString(), 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`Coundn't find "${filepath}"`)
      process.exit(1)
    } else throw err
  }
}
