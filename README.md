# Utils

[![Build Status](https://travis-ci.com/grrr-amsterdam/grrr-utils.svg?branch=master)](https://travis-ci.com/grrr-amsterdam/grrr-utils)

### JavaScript utility library

- No dependencies
- Includes functional and DOM utility functions
- Lightweight and untranspiled

Built with ❤️ by [GRRR](https://grrr.tech).

## Installation

```sh
$ npm install @grrr/utils
```

Note: depending on your setup [additional configuration might be needed](https://github.com/grrr-amsterdam/grrr-utils/wiki/Usage-with-build-tools), since this package is published with untranspiled JavaScript.

## Usage

Import a function and invoke it:

```js
import { closest } from '@grrr/utils';

const findParentFoo = closest(el => el.hasAttribute(`data-foo`));
```

Functions can also be imported from the function file itself:

```js
import closest from '@grrr/utils/functions/closest';
```

## Documentation

[View the documentation](https://github.com/grrr-amsterdam/grrr-utils/tree/master/docs) for all available functions.
