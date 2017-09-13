const assert = require('chai').assert;
const { application, min, max } = require('../app.js');

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

const malformedShortSeed = [
  [0,0,0,0],
  [1,0,1,1,1],
  [1,1,1,1,1,0,1,1],
  [0,1]
];

const malformedRowSeed = [
  [0,0,0,0],
  [1,0,1,1,1],
  [1,1,1,1,1,0,1,1],
  [0,1],
  [0,0,0,0,0,1,1]
];

const invalidCellsSeed = [
  [0,1,3,0,0],
  [1,0,0,1,1],
  [1,1,0,0,1],
  [0,1,7,0,0],
  [8,0,0,3,1]
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
    assert.deepEqual(application(3), `Currently this app only supports grid sizes from ${min} to ${max}. Please provide a valid size.`);
    assert.deepEqual(application(1000), `Currently this app only supports grid sizes from ${min} to ${max}. Please provide a valid size.`);
  });

  //CHECK SEED VALIDITY
  it('refuses malformed sized seed', () => {
    assert.deepEqual(application(5, malformedShortSeed), `Currently this app only supports grid sizes from ${min} to ${max}. Please provide a valid seed.`);
  });

  it('refuses malformed seed rows', () => {
    assert.deepEqual(application(5, malformedRowSeed), 'The amount of columns must equal the amount of rows.');
  });

  it('refuses invalid cells', () => {
    assert.deepEqual(application(5, invalidCellsSeed), 'Cells should be set to 1 or 0.');
  });

  //CHECK PROVIDED TEST SEED
  it('provides the expected next lifecycle of test seed', () => {
    assert.deepEqual(application(5, testSeed), testSeedNextLife);
  });
});
