const { expect } = require('chai');

const solution = require('../../src/4_AlgorithmicSkills/4_ArrayInversionCount');

function buildTest(A, expected) {
  it(`should return ${expected} for input A = ${JSON.stringify(A)}`, () => {
    const result = solution(A);
    expect(result).to.be.eql(expected);
  });
}

describe('4. Algorithmic Skills - 4. ArrayInversionCount', () => {
  buildTest([-1, 6, 3, 4, 7, 4], 4);
  buildTest([6, 4, 7, -1, 5, 4], 9);
  buildTest([6, 4, 7, -1, 5, 4, 9, 1], 15);
});
