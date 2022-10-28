console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    const robotRegex = /const\s+robot\s*=\s*{\s*model\s*:\s*(['"`])SAL-1000\1\s*,\s*mobile\s*:\s*true\s*,\s*sentient\s*:\s*false\s*,\s*armor\s*:\s*(['"`])Steel-plated\2\s*,\s*energyLevel\s*:\s*75\s*,?\s*}\s*;?/;

    let structureTwo = function() {
      const robotKeys = Object.keys(robot)
    }

    let isMatchOne = code.match(robotRegex);
    let isMatchTwo = Structured.match(code, structureTwo);

    assert.isOk(isMatchOne, "Please don't change the `robot` object.")
    assert.isOk(isMatchTwo, "Did you add the missing argument to `Object.keys()`?")
  });
});
