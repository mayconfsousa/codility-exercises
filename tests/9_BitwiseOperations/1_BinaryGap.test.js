const { expect } = require('chai');

const solution = require('../../src/9_BitwiseOperations/1_BinaryGap');

function buildTest(N, expected) {
  it(`should return ${expected} for input N = ${N}`, () => {
    const result = solution(N);
    expect(result).to.be.eql(expected);
  });
}

describe('9. Bitwise Operations - 1. BinaryGap', () => {
  buildTest(1041, 5);
  buildTest(15, 0);
  buildTest(32, 0);
});
