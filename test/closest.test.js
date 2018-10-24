import closest from '../src/closest';

describe('closest', () => {
  test('Finds parent nodes, or itself whenever it matches the predicate.', () => {
    document.body.innerHTML = `
      <article id="root-article">
        <h1>My title</h1>
        <p lang="la">Lorem ipsum dolor sit amet</p>
        <footer>
          <article id="footer-article">
            <div lang="la" id="footer-div">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </article>
        </footer>
      </article>
    `;

    expect(closest(x => x.hasAttribute('id'), document.querySelector('footer')))
      .toEqual(document.querySelector('#root-article'));

    expect(closest(x => x.hasAttribute('id'))(document.getElementById('footer-div')))
      .toEqual(document.getElementById('footer-div'));

    expect(closest(x => x.getAttribute('lang') === 'la', document.querySelector('footer p')))
      .toEqual(document.querySelector('#footer-div'));

    expect(closest(x => x.getAttribute('lang') === 'fr', document.querySelector('footer p')))
      .toBeUndefined();

    expect(closest(x => x, document.getElementById('none')))
      .toBeUndefined();

  });
});
