import { CoinCounter } from './../src/CoinCounter.js';

test("the function returns 16 for 16 qaurters", () => {
  expect(CoinCounter(4.99)).toEqual(16);
});