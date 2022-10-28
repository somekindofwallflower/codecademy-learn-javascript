console.log = function() {};
var rewire = require('rewire')
const { assert, expect } = require('chai');
const fs = require('fs');


describe('', function () {
  it('', function() {
    let appModule;
    try {
        appModule = rewire("../main.js")
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }
    let factory
    try {
      factory = appModule.__get__('robotFactory')
    }  catch (e) {
      expect(true, 'Did you define a function called `robotFactory`?').to.equal(false);
    }
    const newObj = factory('model', true)

    expect(newObj.model, 'Did you assign the `model` property to have a value of `model`?').to.deep.equal('model');
    expect(newObj.mobile, 'Did you assign the `mobile` property to have a value of `mobile`?').to.deep.equal(true);
    expect(newObj.beep.toString(), 'Did you add a `console.log()` statement to the `beep` method?').to.match(/console\.log\(/)
    expect(newObj.beep.toString(), 'Did you log `\'Beep Boop\'` to the console in the `beep` method?').to.match(/[`'"][Bb]eep [Bb]oop/)
  });
});
