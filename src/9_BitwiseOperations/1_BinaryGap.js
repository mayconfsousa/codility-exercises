/**
 *
 * Test:   https://app.codility.com/programmers/trainings/9/binary_gap
 * Result: https://app.codility.com/demo/results/trainingXYDUWS-X3C
 *
 */

function solution(N) {
  const binaryStr = N.toString(2);

  let max = 0;
  let count = 0;
  let isCounting = false;

  for (let char of binaryStr) {
    if (char === '1') {
      if (isCounting) max = Math.max(count, max);
      isCounting = true;
      count = 0;
    } else {
      count++;
    }
  }

  return max;
}

module.exports = solution;
