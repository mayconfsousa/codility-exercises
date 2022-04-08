/**
 *
 * Test:   https://app.codility.com/demo/take-sample-test
 * Result: https://app.codility.com/c/feedback/demo5ZQBTH-FE3
 *
 */

function solution(A) {
  const numbers = new Set();

  for (let num of A) {
    if (num > 0) numbers.add(num);
  }

  let result = 1;

  for (result; result <= numbers.size; result++) {
    if (!numbers.has(result)) break;
  }

  return result;
}

module.exports = solution;
