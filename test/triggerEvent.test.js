import triggerEvent from '../functions/triggerEvent';

describe('triggerEvent', () => {
  test('Triggers synthetic event for the given input and event type', () => {
    document.body.innerHTML = `
      <input id="foo"/>
      <input id="bar"/>
    `;
    const foo = document.querySelector('#foo');
    const bar = document.querySelector('#bar');

    const inputCallbackFoo = jest.fn();
    const blurCallbackFoo = jest.fn();
    const blurCallbackBar = jest.fn();

    foo.addEventListener('input', inputCallbackFoo);
    foo.addEventListener('blur', blurCallbackFoo);
    bar.addEventListener('blur', blurCallbackBar);

    triggerEvent(foo, 'input');
    expect(inputCallbackFoo).toHaveBeenCalled();
    expect(inputCallbackFoo.mock.calls.length).toBe(1);

    triggerEvent(foo, 'blur');
    expect(blurCallbackFoo).toHaveBeenCalled();
    expect(blurCallbackFoo.mock.calls.length).toBe(1);

    triggerEvent(foo, 'blur');
    triggerEvent(foo, 'blur');
    expect(inputCallbackFoo.mock.calls.length).toBe(1);
    expect(blurCallbackFoo.mock.calls.length).toBe(3);
    expect(blurCallbackBar).not.toHaveBeenCalled();

    expect(() => triggerEvent(bar)).toThrow();
    expect(blurCallbackBar).not.toHaveBeenCalled();

    triggerEvent(bar, 'blur');
    expect(blurCallbackBar.mock.calls.length).toBe(1);
  });
});
