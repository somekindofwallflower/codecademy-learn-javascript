console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let solution = function() {
      function makeShoppingList(item1="milk", item2="bread", item3="eggs") {}
    };

    let isMatchOne = Structured.match(code, solution);

    assert.isOk(isMatchOne, 'Did you assign a default value of `"milk"` to  `item1`, `"bread"` to `item2`, and `"eggs"` to `item3` in the function declaration for `makeShoppingList()`?');
  });
});
