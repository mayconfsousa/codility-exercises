const { expect } = require('chai');

const solution = require('../../src/4_AlgorithmicSkills/3_TreeHeight');

function buildTest(T, expected) {
  it(`should return ${expected} for input T = "${JSON.stringify(T)}"`, () => {
    const result = solution(T);
    expect(result).to.be.eql(expected);
  });
}

describe('4. Algorithmic Skills - 3. TreeHeight', () => {
  buildTest(
    {
      x: 5,
      l: { x: 3, l: { x: 20, l: null, r: null }, r: { x: 21, l: null, r: null } },
      r: { x: 10, l: { x: 1, l: null, r: null }, r: null },
    },
    2,
  );
  buildTest({ x: 5, l: null, r: null }, 0);
});
