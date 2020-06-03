import unescapeHtml from '../functions/unescapeHtml';

describe('unescapeHtml', () => {
  test('Unescapes HTML.', () => {
    const escapedTemplate = `&lt;button id=&#34;button&#34;&gt;Click me&lt;/button&gt;`;
    const unescapedTemplate = `<button id="button">Click me</button>`;

    expect(unescapeHtml(escapedTemplate)).toEqual(unescapedTemplate);
    expect(unescapeHtml(unescapedTemplate)).toEqual(unescapedTemplate);
    expect(unescapeHtml('')).toEqual('');
  });
});
