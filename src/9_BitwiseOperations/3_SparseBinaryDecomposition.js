/**
 *
 * Test:   https://app.codility.com/programmers/trainings/9/sparse_binary_decomposition
 * Result: https://app.codility.com/demo/results/training2HNQFQ-PMK
 *
 */

function isSparse(num) {
  return (num & (num >>> 1)) === 0;
}

function solution(N) {
  if (isSparse(N)) return N;

  const nBits = N.toString(2).split('');
  const sparseBits = [];

  for (let i = 0; i < nBits.length; i++) {
    const bit = nBits[i];
    sparseBits.push(i === 0 || sparseBits[i - 1] === '1' ? '0' : bit);
  }

  return parseInt(sparseBits.join(''), 2);
}

module.exports = solution;
