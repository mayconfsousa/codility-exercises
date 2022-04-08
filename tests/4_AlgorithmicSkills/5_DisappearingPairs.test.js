const { expect } = require('chai');

const solution = require('../../src/4_AlgorithmicSkills/5_DisappearingPairs');

function buildTest(S, expected) {
  it(`should return ${expected} for input S = "${S}"`, () => {
    const result = solution(S);
    expect(result).to.be.eql(expected);
  });
}

describe('4. Algorithmic Skills - 5. DisappearingPairs', () => {
  buildTest('ACCAABBC', 'AC');
  buildTest('ABCBBCBA', '');
  buildTest('BABABA', 'BABABA');
});
