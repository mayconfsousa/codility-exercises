/**
 *
 * Test:   https://app.codility.com/programmers/trainings/9/count_conforming_bitmasks
 * Result: https://app.codility.com/demo/results/trainingMG2S5D-QRK
 *
 */

function getConformsCount(value) {
  const binaryString = value.toString(2).padStart(30, '0');
  const binaryArray = binaryString.split('');
  const numOfZeroes = binaryArray.filter((x) => x === '0').length;
  return Math.pow(2, numOfZeroes);
}

function solution(A, B, C) {
  const conformsWithA = getConformsCount(A);
  const conformsWithB = getConformsCount(B);
  const conformsWithC = getConformsCount(C);
  const conformsWithAB = getConformsCount(A | B);
  const conformsWithBC = getConformsCount(B | C);
  const conformsWithAC = getConformsCount(A | C);
  const conformsWithABC = getConformsCount(A | B | C);

  return (
    conformsWithA +
    (conformsWithB - conformsWithAB) +
    (conformsWithC - (conformsWithAC + conformsWithBC - conformsWithABC))
  );
}

module.exports = solution;
