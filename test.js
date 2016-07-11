'use strict'

/* global it */

const assert = require('assert')
const replace = require('.')

it('should replace correctly', () => {
  // arrange
  const toReplace = 'A new study finds that senators and other congressional leaders are increasingly likely to view election results on their smartphone.'
  const expected = 'A tumblr post finds that elf lords and other river spirits are increasingly likely to view eating contest results on their pokédex.'
  const dictionary = {
    'Allegedly': 'Kinda probably',
    'Car': 'Cat',
    'Congressional leaders': 'River spirits',
    'Could not be reached for comment': 'Is guilty and everyone knows it',
    'Election': 'Eating contest',
    'Electric': 'Atomic',
    'Google Glass': 'Virtual Boy',
    'Homeland security': 'Homestar Runner',
    'New study': 'Tumblr post',
    'Rebuild': 'Avenge',
    'Senator': 'Elf-lord',
    'Smartphone': 'Pokédex',
    'Space': 'Spaaace',
    'Witnesses': 'These dudes I know'
  }

  // act
  const actual = replace(dictionary, toReplace)

  // assert
  assert.strictEqual(actual, expected)
})
