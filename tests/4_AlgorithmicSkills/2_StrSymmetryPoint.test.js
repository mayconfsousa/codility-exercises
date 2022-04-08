const { expect } = require('chai');

const solution = require('../../src/4_AlgorithmicSkills/2_StrSymmetryPoint');

function buildTest(S, expected) {
  it(`should return ${expected} for input S = "${S}"`, () => {
    const result = solution(S);
    expect(result).to.be.eql(expected);
  });
}

describe('4. Algorithmic Skills - 2. StrSymmetryPoint', () => {
  buildTest('racecar', 3);
  buildTest('x', 0);
  buildTest('', -1);
  buildTest('ab', -1);
});
