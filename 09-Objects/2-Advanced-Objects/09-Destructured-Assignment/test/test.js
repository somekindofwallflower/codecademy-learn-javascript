console.log = function() {};
var rewire = require('rewire');
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    const robotRegex = /const\s+robot\s*=\s*\{\s*model\s*:\s*(['"`])1E78V2\1\s*,\s*energyLevel\s*:\s*100\s*,\s*functionality\s*:\s*\{\s*beep\s*\(\s*\)\s*\{\s*console\s*\.\s*log\s*\(\s*(['"`])Beep\s+Boop\2\s*\)\s*;?\s*\}\s*,\s*fireLaser\s*\(\s*\)\s*\{\s*console\s*\.\s*log\s*\(\s*(['"`])Pew\s+Pew\3\s*\)\s*;?\s*\}\s*,?\s*\}\s*,?\s*\}\s*;?/;
    
    let appModule;
    try {
      appModule = rewire('../main.js')
    } catch(e) {
			assert.isOk(false, 'Looks like you have an error. Double check your syntax.')
    }

    let structureTwo =  function() {
      const { functionality } = robot;
    }

    let isMatchOne = code.match(robotRegex);
    let isMatchTwo = Structured.match(code, structureTwo);

    assert.isOk(isMatchOne, 'Please don\'t change the `robot` object.')
    assert.isOk(isMatchTwo, 'Did you use destructed assignment to create a variable `functionality` that references the `functionality` property of `robot`?')
		
    let functionality 
    try {
      functionality = appModule.__get__('functionality')
    } catch(e) {
			expect(true, 'Did you declare a variable named functionality?').to.equal(false);
    }
    
		assert.typeOf(functionality.beep, 'function', "Did you use destructed assignment to create a variable `functionality` that references `robot.functionality`?");
    assert.typeOf(functionality.fireLaser, 'function', "Did you use destructed assignment to create a variable `functionality` that references `robot.functionality`?");
   });
});
