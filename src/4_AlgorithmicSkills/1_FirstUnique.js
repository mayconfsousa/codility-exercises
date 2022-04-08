/**
 *
 * Test:   https://app.codility.com/programmers/trainings/4/first_unique
 * Result: https://app.codility.com/demo/results/trainingTP4H2Z-YBP
 *
 */

function solution(A) {
  const result = -1;

  const numberOfOcurrenciesMap = new Map();
  const uniqueList = new Set();

  for (let num of A) {
    let count = numberOfOcurrenciesMap.get(num) || 0;
    count++;

    numberOfOcurrenciesMap.set(num, count);

    if (count === 1) uniqueList.add(num);
    else uniqueList.delete(num);
  }

  return uniqueList.size > 0 ? uniqueList.values().next().value : -1;
}

module.exports = solution;
