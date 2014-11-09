var assert = require('assert')
  , replace = require('../lib/replace')

it('should replace correctly', function () {

  // arrange
  var dictionary = {
    "Allegedly": "Kinda probably",
    "Car": "Cat",
    "Congressional leaders": "River spirits",
    "Could not be reached for comment": "Is guilty and everyone knows it",
    "Election": "Eating contest",
    "Electric": "Atomic",
    "Google Glass": "Virtual Boy",
    "Homeland security": "Homestar Runner",
    "New study": "Tumblr post",
    "Rebuild": "Avenge",
    "Senator": "Elf-lord",
    "Smartphone": "Pokédex",
    "Space": "Spaaace",
    "Witnesses": "These dudes I know"
  }
    , toReplace = 'A new study finds that senators and other congressional leaders are increasingly likely to view \
election results on their smartphone.'
    , expected = 'A tumblr post finds that elf lords and other river spirits are increasingly likely to view \
eating contest results on their pokédex.'

  // act
  var actual = replace(dictionary, toReplace)

  // assert
  assert.strictEqual(actual, expected)

})

