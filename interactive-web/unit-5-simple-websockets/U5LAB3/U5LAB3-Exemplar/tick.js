/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

export default async function tick(count, page) {
  return Array
    .from({ length: count })
    .reduce((tickChain) => tickChain.then(() => _tick(page)), Promise.resolve());
}

async function _tick(page, duration = 1000) {
  // eslint-disable-next-line no-shadow
  return page.evaluate(([duration]) => window.__clock.tick(duration), [duration]);
}
