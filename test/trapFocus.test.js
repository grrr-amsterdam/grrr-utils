import trapFocus from '../functions/trapFocus';

describe('trapFocus', () => {
  test(`Traps focus in the rootNode except the focusNode and
    leaves existing tabindex="-1" nodes intact`, () => {
    document.body.innerHTML = `
      <article>
        <a id="foo" href="#foo">Lorem ipsum dolor sit amet</a>
        <a id="bar" href="#bar" tabindex="-1">Lorem ipsum dolor sit amet</a>
        <button id="button">Lorem ipsum dolor sit amet</button>
        <section id="modal" role="dialog" aria-modal="true">
          <h1>Modal</h1>
          <p>Lorem ipsum dolor sit amet</p>
          <button id="close">Close this modal</button>
        </section>
      </article>
    `;

    const foo = document.querySelector('#foo');
    const bar = document.querySelector('#bar');
    const button = document.querySelector('#button');
    const modal = document.querySelector('#modal');
    const close = document.querySelector('#close');

    const focusTrap = trapFocus(modal);

    expect(foo.getAttribute('tabindex')).toEqual('-1');
    expect(bar.getAttribute('tabindex')).toEqual('-1');
    expect(button.getAttribute('tabindex')).toEqual('-1');
    expect(modal.getAttribute('tabindex')).toBeNull();
    expect(close.getAttribute('tabindex')).toBeNull();

    focusTrap.release();

    expect(foo.getAttribute('tabindex')).toBeNull();
    expect(bar.getAttribute('tabindex')).toEqual('-1');
    expect(button.getAttribute('tabindex')).toBeNull();
    expect(modal.getAttribute('tabindex')).toBeNull();
    expect(close.getAttribute('tabindex')).toBeNull();

    focusTrap.retrap();

    expect(foo.getAttribute('tabindex')).toEqual('-1');
    expect(bar.getAttribute('tabindex')).toEqual('-1');
    expect(button.getAttribute('tabindex')).toEqual('-1');
    expect(modal.getAttribute('tabindex')).toBeNull();
    expect(close.getAttribute('tabindex')).toBeNull();
  });
});
