# stupid-dictionary

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]

This is a word replacer.
It reads the words to replace from a dictionary, replaces the words in the file you want to, and then outputs the
results to stdout.

The dictionary must be a valid json file.

You must provide a file from which the contents will be read with `--to-replace [path]`.
There is also `--dictionary` if you don't want to use the default `./dictionary.json` path.

[build]:               https://travis-ci.org/tallesl/node-stupid-dictionary
[build-img]:           https://travis-ci.org/tallesl/node-stupid-dictionary.svg
[coverage]:            https://coveralls.io/r/tallesl/node-stupid-dictionary?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-stupid-dictionary/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-stupid-dictionary
[dependencies-img]:    https://david-dm.org/tallesl/node-stupid-dictionary.svg
[devdependencies]:     https://david-dm.org/tallesl/node-stupid-dictionary#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-stupid-dictionary/dev-status.svg
[npm]:                 https://www.npmjs.com/package/stupid-dictionary
[npm-img]:             https://badge.fury.io/js/stupid-dictionary.svg

## Usage

```
$ npm install -g stupid-dictionary
(...)
$ ls
dictionary.json nasa.txt
$ cat dictionary.json
{ "google glass": "virtual boy", "space": "spaaace" }
$ cat nasa.txt
NASA is looking into using Google Glass to assist astrounatus working in space.
$ stupid-dictionary --to-replace nasa.txt
NASA is looking into using Virtual Boy to assist astrounauts working in spaaace.
```

<p align="center">
    <a href="http://xkcd.com/1288/">
        <img src="http://imgs.xkcd.com/comics/substitutions.png">
    </a>
</p>
