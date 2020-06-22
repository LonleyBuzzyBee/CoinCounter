import { CoinCounter } from './../src/CoinCounter.js';

test("the function returns 16 for 16 qaurters", () => {
  expect(CoinCounter(4.99, [0,0,0,0])).toEqual(["19 quarters","2 dimes",0,"4 pennies"]);
});

test("the function returns '4 pennies' for 0.04", () => {
  expect(CoinCounter(0.04, [0,0,0,0])).toEqual([0,0,0,"4 pennies"]);
});