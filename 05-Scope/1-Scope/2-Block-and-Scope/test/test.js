console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const $newVar = logCitySkyline();
      console.log($newVar);
    };

    let structureTwo = function() {
      let $newVar = logCitySkyline();
      console.log($newVar);
    };

    let structureThree = function() {
      var $newVar = logCitySkyline();
      console.log($newVar);
    };

    let structureFour = function() {
      console.log(logCitySkyline());
    };


    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    let isMatchThree = Structured.match(code, structureThree);

    let savedToVar = [isMatchOne, isMatchTwo, isMatchThree].some(el => !!el)

    let isMatchFour = Structured.match(code, structureFour);


    assert.isOk(savedToVar || isMatchFour, 'Did you `console.log()` the value of calling `logCitySkyline()`?');
  });
});
