const { expect } = require('chai');

const solution = require('../../src/0_Demo/1_MissingInteger');

function buildTest(A, expected) {
  it(`should return ${expected} for input A = ${JSON.stringify(A)}`, () => {
    const result = solution(A);
    expect(result).to.be.eql(expected);
  });
}

describe('0. Demo - 1. MissingInteger', () => {
  buildTest([1, 3, 6, 4, 1, 2], 5);
  buildTest([1, 2, 3], 4);
  buildTest([-1, -3], 1);
});
