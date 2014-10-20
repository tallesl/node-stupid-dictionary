# :book: Stupid Dictionary

[![dependencies](https://david-dm.org/tallesl/stupid-dictionary.png)](https://david-dm.org/tallesl/stupid-dictionary)
[![devDependencies](https://david-dm.org/tallesl/stupid-dictionary/dev-status.png)](https://david-dm.org/tallesl/stupid-dictionary#info=devDependencies)
[![npm module](https://badge.fury.io/js/stupid-dictionary.png)](http://badge.fury.io/js/stupid-dictionary)

[![npm](https://nodei.co/npm/stupid-dictionary.png?mini=true)](https://nodei.co/npm/stupid-dictionary/)

This is a *stupid* word replacer. It reads the words to replace from a
dictionary, replaces the words in the file you want to, and then outputs to
stdout the result.

The dictionary must be a valid json file.

You must provide a file from which the contents will be read with
`--to-replace [path]`. There is also `--dictionary` if you don't want to use
the default `./dictionary.json` path.

## Casing included

Upper, lower, snake and capital cases are automatically considered. So if you
have in your dictionary a key `google glass` with the value `virtual boy` it
replaces:

* *google glass* to *virtual boy*;
* *GOOGLE GLASS* to *VIRTUAL BOY*;
* *google_glass* to *virtual_boy*;
* *Google Glass* to *Virtual Boy*.

## Usage

    $ npm install -g stupid-dictionary
    (...)
    $ ls
    dictionary.json nasa.txt
    $ cat dictionary.json
    { "google glass": "virtual boy", "space": "spaaace" }
    $ stupid-dictionary --to-replace nasa.txt
    NASA is looking into using Virtual Boy to assist astrounauts working in spaaace.

<p align="center">
    <a href="http://xkcd.com/1288/">
        <img src="http://imgs.xkcd.com/comics/substitutions.png">
    </a>
</p>

## Why it's *stupid*?

The whole content of the files are loaded into memory. That's why.
