const assert = require('chai').assert;
const application = require('../app.js');

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


  // it('returns desired result', () => {
  //   assert.deepEqual(application(arguments), 'desired result')
  // })
});
