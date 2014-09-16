# Stupid Dictionary
[![NPM version](https://badge.fury.io/js/stupid-dictionary.png)]
(http://badge.fury.io/js/stupid-dictionary)

This is a *stupid* word replacer. It reads the words to replace from a
dictionary, replaces the words in the file you want to, and then outputs to
stdout the result.

The dictionary must be a valid json file.

You must provide a file from which the contents will be read with
`--to-replace [path]`. There is also `--dictionary` if you don't want to use
a different filepath than the default `./dictionary.json`.

**Note**: The whole content of the files are loaded into memory. That's why it's
*stupid*.
