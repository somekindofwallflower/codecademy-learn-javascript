console.log = function() {};
var rewire = require('rewire'),
    appModule = rewire('../main.js');
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant']
    };

    let structureTwo = function() {
      const foundAnimal = animals.findIndex();
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);

    assert.isOk(isMatchOne, 'Please don\'t change `animals`.')
    assert.isOk(isMatchTwo, 'Did you call the `.findIndex()` method on `animals` and assign it to `foundAnimal`?')
  });

  it('', function() {
    const foundAnimal = appModule.__get__('foundAnimal')
    expect(foundAnimal, 'Did you pass in a function to `.findIndex()` that returns the index of the element with the value of `\'elephant\'`?').to.deep.equal(7)
   });
});
