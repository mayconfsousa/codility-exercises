const { expect } = require('chai');

const solution = require('../../src/9_BitwiseOperations/2_CountConformingBitmasks');

function buildTest(A, B, C, expected) {
  it(`should return ${expected} for input A = ${A}, B = ${B}, C = ${C}`, () => {
    const result = solution(A, B, C);
    expect(result).to.be.eql(expected);
  });
}

describe('9. Bitwise Operations - 2. CountConformingBitmasks', () => {
  buildTest(1073741727, 1073741631, 1073741679, 8);
});
