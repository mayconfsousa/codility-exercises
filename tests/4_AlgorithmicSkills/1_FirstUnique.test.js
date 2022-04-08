const { expect } = require('chai');

const solution = require('../../src/4_AlgorithmicSkills/1_FirstUnique');

function buildTest(A, expected) {
  it(`should return ${expected} for input A = ${JSON.stringify(A)}`, () => {
    const result = solution(A);
    expect(result).to.be.eql(expected);
  });
}

describe('4. Algorithmic Skills - 1. FirstUnique', () => {
  buildTest([4, 10, 5, 4, 2, 10], 5);
  buildTest([1, 4, 3, 3, 1, 2], 4);
  buildTest([6, 4, 4, 6], -1);
});
