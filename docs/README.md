# Documentation

A grouped list of functions based on their origin/usage:

### Objects & Arrays

- [deepCopy](#deepCopy)
- [head](#head)
- [last](#last)
- [map](#map)
- [not](#not)
- [omit](#omit)
- [pick](#pick)
- [prop](#prop)
- [reverse](#reverse)
- [sample](#sample)
- [tail](#tail)
- [take](#take)
- [takeLast](#takeLast)

### Functional

- [compose](#compose)
- [curry](#curry)
- [debounce](#debounce)
- [memoize](#memoize)
- [tap](#tap)
- [throttle](#throttle)

### DOM & Browser

- [closest](#closest)
- [escapeHtml](#escapeHtml)
- [htmlToElement](#htmlToElement)
- [preventDefault](#preventDefault)
- [preventingDefault](#preventingDefault)
- [trapFocus](#trapFocus)
- [triggerEvent](#triggerEvent)
- [unescapeHtml](#unescapeHtml)

### Miscellaneous

- [defined](#defined)
- [parseJson](#parseJson)
- [uuid](#uuid)

---

## Functions

All functions with usage examples:

### closest

Generic function for traversing a DOM, returning the first element matching the predicate function.

```js
const findParentFoo = closest(el => el.hasAttribute(`data-foo`));
```

### compose

Composer of functions. Will accept 0 or more functions. Execution order is right to left, as is traditional.

```js
const join = xs => xs.join(' ');
const split = xs => xs.split(' ');
const heads = xs => xs.map(x => x[0]);
const initials = compose(join, heads, split);

initials('Miles Davis'); //=> 'M D';
```

### curry

Curry a function. Will keep returning functions until the originally required arity has been reached.

```js
const multiply = (a, b) => a * b;
const curriedMultiply = curry(multiply);
const double = curriedMultiply(2);

double(4); //=> 8
```

### debounce

Creates a debounced function that delays invokation of the function until a specified time has elapsed since the last time the debounced function was invoked.

Returns a promise that resolves to the value returned by the debounced function.

```js
const resizeHandler = e => { /* ... */ }; // invoked 300ms after last `resize`

window.addEventListener('resize', debounce(resizeHandler, 300));

// or

const getWindowDimensions = debounce(() => { /* ... */ }, 300);
const resizeListener = async e => {
  const windowDimensions = await getWindowDimensions();
  // invoked 300ms after last `resize`
};

window.addEventListener('resize', resizeListener);
```

### deepCopy

Simple deep-copy function for cloning objects.

```js
const original = {
  foo: 'foo',
  config: {
    enabled: true,
  },
};

const copy = deepCopy(original);
copy.config.enabled = false; // => will not update `original.config.enabled`
```

### defined

Check if the argument is defined.

```js
let foo;
const bar = [];

defined(foo); //=> false
defined(bar); //=> true
```

### escapeHtml

Escapes HTML. Useful for sanitizing user input to prevent XSS attacks.

See also [unescapeHtml](#unescapeHtml).

```js
const html = `"><img src=/ onerror="alert('XSS')"></img>`;
escapeHtml(html) //=> &quot;&gt;&lt;img src=/ onerror=&quot;alert(&#039;XSS&#039;)&quot;&gt;&lt;/img&gt;
```

### head

Grab the head of a collection.

```js
head([2, 4, 8]); //=> 2
head('baz'); //=> 'b'
```

### htmlToElement

Convert an HTML string to DOM element.

```js
const button = htmlToElement(`
  <button class="foo" aria-hidden="true", aria-controls="bar"></button>
`);
```

### last

Grab the last item of a collection.

```js
last([2, 4, 8]); //=> 8
last('baz'); //=> 'z'
```

### map

Curried map implementation.

```js
const double = n => n * 2;
const doubleAll = map(double);

doubleAll([1, 2, 3, 4]); //=> [2, 4, 6, 8]
```

### memoize

Store results of function calls and return the cache when input arguments are the same.

```js
const foo = (x, y) => { /* heavy calculation */ };
const memoizedFoo = memoize(foo);

memoizedFoo(1, 2); // calculated
memoizedFoo(1, 2); // from memory
memoizedFoo(1, 2); // from memory
memoizedFoo(3, 4); // calculated
memoizedFoo(1, 2); // from memory
```

### not

Creates a new function, reversing the outcome of the original given function.

```js
const notAnArray = not(Array.isArray);

notAnArray(42); //=> true
notAnArray([]); //=> false
```

### omit

Return a partial copy of an object omitting the keys specified.

```js
omit(['a', 'c'], { a: 1, b: 2, c: 3, d: 4 }); //=> { b: 2, d: 4 }
```

### parseJson

Parse JSON in a safe way.

Will output a warning when `console` is defined and incorrect JSON is encountered.

```js
parseJson(`{"a":"foo","b":"bar"}`); //=> { a: 'foo', 'b': 'bar' }
parseJson(`{a:"foo",b:"bar"}`); //=> undefined
```

### pick

Return a partial copy of an object containing only the keys specified.

```js
pick(['a', 'c'], { a: 1, b: 2, c: 3, d: 4 }); //=> { a: 1, c: 3 }
```

### preventDefault

Call preventDefault on an event object. Might be combined with `tap` to create a chainable utility.

See also [preventingDefault](#preventingDefault).

```js
preventDefault(e);
```

### preventingDefault

Function decorator to create event listeners from common functions.

Avoids having to specify `e.preventDefault()` in functions, thus allowing the author to use them outside an event listener context.

```js
const submit = () => { /* ... */ };

form.addEventListener('submit', preventingDefault(submit));
```

### prop

Getter of object properties.

```js
prop('a', { a: 1, b: 2 }); //=> 1
```

### reverse

Return a reversed array of a collection.

```js
reverse([2, 4, 8]); //=> [8, 4, 2]
reverse('baz'); //=> ['z', 'a', 'b']
```

### sample

Grab a random item from a collection.

```js
sample([{ id: 1 }, { id: 2 }, { id: 3 }]); //=> { id: 3 }
sample(['foo', 'bar', 'baz']); //=> 'bar'
sample('foo bar'); //=> 'o'
```

### tail

Grab the tail (rest) of a collection.

```js
tail(['foo', 'bar', 'baz']); //=> ['bar', 'baz']
tail('foo bar'); //=> ['o', 'o', ' ', 'b', 'a', 'r']
```

### take

Grab the first n items of a collection.

```js
take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
take(2, 'foo bar'); //=> ['f', 'o']
```

### takeLast

Grab the last n items of a collection.

```js
takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
takeLast(2, 'foo bar'); //=> ['a', 'r']
```

### tap

Function for doing side-effects. The generated function returns whatever argument it receives, and executes the side-effect function in the middle.

Handy for chaining logs.

```js
foo().then(tap(x => console.log(x))).then(x => { /* ... */ });
```

### throttle

Throttle functions so they're invoked according to the given threshold. It is both a leading and trailing edge throttle, meaning that it will invoke the function immediately and will postpone calls to the 'next throttle invokation' unless a newer call is made.

Returns a promise that resolves to the value returned by the throttled function.

```js
const scrollHandler = e => { /* ... */ }; // invoked every 300ms during `scroll`

window.addEventListener('scroll', throttle(scrollHandler, 300));

// or

const getBackgroundColor = debounce(() => { /* ... */ }, 300);
const scrollListener = async e => {
  const backgroundColor = await getBackgroundColor();
  // invoked every 300ms during `scroll`
};

window.addEventListener('scroll', scrollListener);
```

### trapFocus

Trap focus in a specific DOM node. It accepts a second argument to specify the root node, which defaults to `document`.

Handy when building accessible modals/dialogs, overlays or navigation.

```js
const focusTrap = trapFocus(modal); // traps focus

focusTrap.release(); // releases focus
focusTrap.retrap(); // retraps focus again (initial nodes only)
```

### triggerEvent

Create and trigger a synthetic event ([new Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) combined with [dispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)).

Useful when updating the value of HTML inputs, while maintaining existing `addEventListener` callback behaviour. Defaults to a bubbling and cancelable event, but allows optional [Event properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#Properties) object as *third* argument.

```js
input.addEventListener('input', foo);
input.value = 25;
triggerEvent(input, 'input'); //=> `foo` is called

// with another type of event and `Event` constructor arguments
triggerEvent(input, 'blur', {
  composed: false,
});
```

### unescapeHtml

Unescapes HTML.

See also [escapeHtml](#escapeHtml).

```js
const html = `&lt;button id=&#34;button&#34;&gt;Click me&lt;/button&gt;`;
unescapeHtml(html) //=> <button id="button">Click me</button>
```

### uuid

Generate [RFC4122](https://tools.ietf.org/html/rfc4122) v4 compliant UUID.

Handy for generating dynamic ids for accessible components used multiple times on a page.

```js
uuid() //=> 367a0966-8f48-470c-a15f-b09069ca568e
```
