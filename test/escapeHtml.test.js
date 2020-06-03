import escapeHtml from '../functions/escapeHtml';

describe('escapeHtml', () => {
  test('Escapes HTML.', () => {
    const unescapedTemplate = `"><img src=/ onerror="alert('XSS')"></img>`;
    const escapedTemplateIncludingQuotes = `&quot;&gt;&lt;img src=/ onerror=&quot;alert(&#039;XSS&#039;)&quot;&gt;&lt;/img&gt;`;
    const escapedTemplateExcludingQuotes = `"&gt;&lt;img src=/ onerror="alert('XSS')"&gt;&lt;/img&gt;`;

    expect(escapeHtml(unescapedTemplate))
      .toEqual(escapedTemplateIncludingQuotes);
    expect(escapeHtml(unescapedTemplate, { quotes: false }))
      .toEqual(escapedTemplateExcludingQuotes);
    expect(escapeHtml('')).toEqual('');
  });
});
