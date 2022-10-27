console.log = () => {}
const fs = require('fs');
const { expect } = require('chai')
const rewire = require('rewire');

const code = fs.readFileSync('main.js', 'utf8');


describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../main.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.\n').to.equal(false);
        }
        let numOfSlices
        try {
            numOfSlices = appModule.__get__("numOfSlices");
        } catch (e) {
            expect(true, 'Did you create a variable named `numOfSlices`?\n').to.equal(false);
        }
      
      const regex = /var\s*numOfSlices/g;
			const found = regex.test(code);
      expect(found, 'Did you use the `var` keyword to create the `numOfSlices` variable?\n').to.be.true;

        expect(numOfSlices, "`numOfSlices` should be a number value. Expected `numOfSlices` to be a number but found it to be: `" + typeof numOfSlices + "`.").to.be.a('number');
        

        expect(numOfSlices, "`numOfSlices` should have a value of `8`. Expected `numOfSlices` to equal 8 but found it to equal `" + numOfSlices + "`.").to.equal(8);
    });
});