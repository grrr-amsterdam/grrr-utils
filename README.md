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
import closest from '@grrr/utils/functions/closest.mjs';
```

## Documentation

View the [documentation](https://github.com/grrr-amsterdam/grrr-utils/tree/master/docs) for all functions and examples of their usage.

### Objects & Arrays

- [deepCopy](docs/README.md#deepCopy)
- [head](docs/README.md#head)
- [last](docs/README.md#last)
- [map](docs/README.md#map)
- [not](docs/README.md#not)
- [omit](docs/README.md#omit)
- [pick](docs/README.md#pick)
- [prop](docs/README.md#prop)
- [reverse](docs/README.md#reverse)
- [sample](docs/README.md#sample)
- [tail](docs/README.md#tail)
- [take](docs/README.md#take)
- [takeLast](docs/README.md#takeLast)

### Functional

- [compose](docs/README.md#compose)
- [curry](docs/README.md#curry)
- [debounce](docs/README.md#debounce)
- [memoize](docs/README.md#memoize)
- [tap](docs/README.md#tap)
- [throttle](docs/README.md#throttle)

### DOM & Browser

- [closest](docs/README.md#closest)
- [escapeHtml](docs/README.md#escapeHtml)
- [htmlToElement](docs/README.md#htmlToElement)
- [preventDefault](docs/README.md#preventDefault)
- [preventingDefault](docs/README.md#preventingDefault)
- [trapFocus](docs/README.md#trapFocus)
- [triggerEvent](docs/README.md#triggerEvent)
- [unescapeHtml](docs/README.md#unescapeHtml)

### Miscellaneous

- [defined](docs/README.md#defined)
- [parseJson](docs/README.md#parseJson)
- [uuid](docs/README.md#uuid)
