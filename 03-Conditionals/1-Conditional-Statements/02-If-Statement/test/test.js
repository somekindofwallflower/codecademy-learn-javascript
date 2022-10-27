console.log = function() {};
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {

	let regie = /\( *sale *= *true *\)/g
	let regTest = regie.test(code)
	expect(regTest, "`sale = true` is assigning the `sale` variable the value `true`. If you want you can use a comparison operator (like `===`) in your condition. You can also just use `sale` itself").to.equal(false)

    let structureOne = function() {
      let sale = true;
      if(sale){
      }
    };

    let structureTwo = function() {
      if(sale){
        console.log($statement);
      }
    };

    varCallbacks = [
      function($statement){
        if($statement.value !== 'Time to buy!'){
          return {failure: 'Inside the code block of the `if` statement did you `console.log()` `\'Time to buy!\'`? Double check your spelling and syntax.'}
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo, { varCallbacks });

    assert.isOk(isMatchOne, 'Did you create an `if` statement with a condition of `sale` under the `sale` variable?')
    assert.isOk(isMatchTwo, varCallbacks.failure || 'Did you add a `console.log()` statement inside the code block of the `if` statement?');
    
  });
});
