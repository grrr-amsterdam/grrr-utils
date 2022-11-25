# Utils

[![CI](https://github.com/grrr-amsterdam/grrr-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/grrr-amsterdam/grrr-utils/actions/workflows/ci.yml)

### JavaScript utility library

- No dependencies
- Includes functional and DOM utility functions
- Lightweight and untranspiled

### Developed with ❤️ by [GRRR](https://grrr.nl)

-   GRRR is a [B Corp](https://grrr.nl/en/b-corp/)
-   GRRR has a [tech blog](https://grrr.tech/)
-   GRRR is [hiring](https://grrr.nl/en/jobs/)
-   [@GRRRTech](https://twitter.com/grrrtech) tweets

## Documentation

[View the documentation](https://github.com/grrr-amsterdam/grrr-utils/tree/master/docs) for all available functions.

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
