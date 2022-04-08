const { expect } = require('chai');

const solution = require('../../src/9_BitwiseOperations/3_SparseBinaryDecomposition');

function isSparse(num) {
  return (num & (num >>> 1)) === 0;
}

function buildTest(N) {
  const result = solution(N);
  const diff = N - result;

  it(`the result value ${result} should be one part of a sparse decomposition of ${N}`, () => {
    expect(isSparse(result)).to.be.eql(true);
    expect(isSparse(diff)).to.be.eql(true);
  });
}

describe('9. Bitwise Operations - 3. SparseBinaryDecomposition', () => {
  buildTest(0);
  buildTest(5);
  buildTest(26);
  buildTest(1000000000);
});
