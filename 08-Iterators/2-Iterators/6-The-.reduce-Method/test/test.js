console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const newSum = newNumbers.reduce()
    };

    let isMatchOne = Structured.match(code, structureOne);

    assert.isOk(isMatchOne, 'Did you declare `newSum` using `const` and assign to it `newNumbers.reduce()`?')
  })
});
