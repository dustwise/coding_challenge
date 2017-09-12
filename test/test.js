const assert = require('chai').assert;
const { application } = require('../app.js');

const testSeed = [
  [0,1,0,0,0],
  [1,0,0,1,1],
  [1,1,0,0,1],
  [0,1,0,0,0],
  [1,0,0,0,1]
];

const testSeedNextLife = [
  [0,0,0,0,0],
  [1,0,1,1,1],
  [1,1,1,1,1],
  [0,1,0,0,0],
  [0,0,0,0,0]
];

describe('Application', () => {
  //DATA VALIDITY
  it('refuses no grid sizing provided', () => {
    assert.deepEqual(application(), "Please, at a minimum, provide a grid size.");
  });

  it('refuses invalid input types', () => {
    assert.deepEqual(application("jared"), "Please provide a valid grid size.");
    assert.deepEqual(application({number: 2}), "Please provide a valid grid size.");
  });

  it('refuses invalid grid sizing numbers', () => {
    assert.deepEqual(application(3), "Currently this app only supports grid sizes from 5 to 250.");
    assert.deepEqual(application(1000), "Currently this app only supports grid sizes from 5 to 250.");
  });

  //CHECK PROVIDED TEST SEED
  it('provides the expected next lifecycle of test seed', () => {
    assert.deepEqual(application(5, testSeed), testSeedNextLife);
  });
  // it('returns desired result', () => {
  //   assert.deepEqual(application(arguments), 'desired result')
  // })
});
