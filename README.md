# Utils

[![Build Status](https://travis-ci.com/grrr-amsterdam/grrr-utils.svg?branch=master)](https://travis-ci.com/grrr-amsterdam/grrr-utils)


### JavaScript utility library, by Grrr

- No dependencies
- Includes functional and DOM utility functions
- Lightweight and untranspiled

## Installation

Using npm:

```shell
npm install @grrr/utils
```

Note: depending on your setup additional configuration might be needed ([see below](#usage-with-build-tools)).

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

Please see the [functions directory](https://github.com/grrr-amsterdam/grrr-utils/tree/master/functions) for available functions.

TODO: add documentation for included functions.

## Usage with build tools

This package is published with untranspiled JavaScript. All files are in the form of ECMAScript Modules (ESM), with `.mjs` as file extension. This means that you'll need to transpile the used functions yourself, especially when used on the web.

Not every build tool or bundler will recognize `.mjs` files correctly, and not every setup will transpile these files when they're in the `node_modules` folder. Here's a list with commonly used tools and usage instructions:

#### Webpack

The latest version of Webpack should transpile `.mjs` files properly when used with the default Babel loader ([babel-loader](https://github.com/babel/babel-loader)).

#### Rollup

The latest version of Rollup should transpile `.mjs` files properly when used with the default Babel plugin ([rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)).

#### Browserify

Use the following [babelify](https://github.com/babel/babelify#why-arent-files-in-node_modules-being-transformed) settings to transform `.mjs` files in the `node_modules`:

```js
global: true,
ignore: /\/node_modules\/(?!.*.*\/.*.mjs)/,
```

The [esmify](https://github.com/mattdesl/esmify) plugin might also prove to be useful.

#### Babel

If you're transpiling with Babel in any other setup, use the following ignore pattern to properly ignore the `node_modules` and allow `.mjs` files to be transpiled:

```js
ignore: [/\/node_modules\/(?!.*.*\/.*.mjs)/],
```

This can be added in your `babel.config.js`, `.babelrc` or `package.json`; quotes will be necessary for JSON-based configurations.

#### Node

Run Node with support for [ECMAScript Modules](https://nodejs.org/api/esm.html) enabled:

```shell
node --experimental-modules my-app.mjs
```
