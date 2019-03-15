import htmlToElement from '../functions/htmlToElement';

describe('htmlToElement', () => {
  test('Converts a string to DOM node.', () => {
    const template = `<button id="button">Click me</button>`;
    const button = htmlToElement(template);
    document.body.appendChild(button);

    expect(button).toEqual(document.querySelector('#button'));
    expect(htmlToElement('none')).toBeUndefined();
  });
});
