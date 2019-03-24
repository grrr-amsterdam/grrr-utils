// import disableDocumentFocus from '../functions/disableDocumentFocus';
//
// describe('disableDocumentFocus', () => {
//   test('Finds parent nodes, or itself whenever it matches the predicate.', () => {
//     document.body.innerHTML = `
//       <article>
//         <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" tabindex="-1"></svg>
//         <a id="link" href="#foo">Lorem ipsum dolor sit amet</a>
//         <section id="modal" role="dialog" aria-modal="true">
//           <h1>Modal</h1>
//           <p>Lorem ipsum dolor sit amet</p>
//           <button id="close">Close this modal</button>
//         </section>
//       </article>
//     `;
//
//     const svg = document.querySelector('#svg');
//     const link = document.querySelector('#link');
//     const modal = document.querySelector('#modal');
//     const close = document.querySelector('#close');
//
//     expect(svg.getAttribute('tabindex')).toEqual('-1');
//
//     disableDocumentFocus(modal);
//
//     expect(svg.getAttribute('tabindex')).toEqual('-1');
//     expect(link.getAttribute('tabindex')).toEqual('-1');
//     expect(modal.getAttribute('tabindex')).toBeNull();
//     expect(close.getAttribute('tabindex')).toBeNull();
//
//     expect(svg.hasCustomFocusDisabled).toBeUndefined();
//     expect(link.hasCustomFocusDisabled).toBeTruthy();
//     expect(modal.hasCustomFocusDisabled).toBeUndefined();
//     expect(close.hasCustomFocusDisabled).toBeUndefined();
//   });
// });
