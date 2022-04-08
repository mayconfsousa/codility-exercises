/**
 *
 * Test:   https://app.codility.com/programmers/trainings/4/disappearing_pairs
 * Result: https://app.codility.com/demo/results/training3MVJEQ-4HU
 *
 */

function solution(S) {
  let result = '';

  const strArray = S.split('');

  for (const char of strArray) {
    const lastResultCharIndex = result.length - 1;
    const lastResultChar = result[lastResultCharIndex];

    if (char === lastResultChar) result = result.substring(0, lastResultCharIndex);
    else result += char;
  }

  return result;
}

module.exports = solution;
