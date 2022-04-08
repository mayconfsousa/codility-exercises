/**
 *
 * Test:   https://app.codility.com/programmers/trainings/4/str_symmetry_point
 * Result: https://app.codility.com/demo/results/trainingU92M8F-KSA
 *
 */

function solution(S) {
  let result = -1;

  if (S.length === 0 || S.length % 2 === 0) return result;

  const middleIndex = Math.floor(S.length / 2);

  const strArray = S.split('');

  const containsReversal = strArray.slice(middleIndex + 1).every((char, i) => char === strArray[middleIndex - 1 - i]);

  if (containsReversal) result = middleIndex;

  return result;
}

module.exports = solution;
