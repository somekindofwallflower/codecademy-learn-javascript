console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let checkThatTwoPlusTwoEqualsFourAMillionTimes
        try {
            var appModule = rewire("../app.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        try {
            checkThatTwoPlusTwoEqualsFourAMillionTimes = appModule.__get__("checkThatTwoPlusTwoEqualsFourAMillionTimes");
        } catch (e) {
            expect(true, 'Did you create checkThatTwoPlusTwoEqualsFourAMillionTimes?').to.equal(false);
        }
        let isTwoPlusTwo
        try {
            isTwoPlusTwo = appModule.__get__("isTwoPlusTwo");
        } catch (e) {
            expect(true, 'Did you create `isTwoPlusTwo`?').to.equal(false);
        }

        expect(isTwoPlusTwo, "`isTwoPlusTwo` should be a function.").to.be.an.instanceOf(Function);
        expect((isTwoPlusTwo === checkThatTwoPlusTwoEqualsFourAMillionTimes), "Your `isTwoPlusTwo` variable should have the value of the `checkThatTwoPlusTwoEqualsFourAMillionTimes` function?").to.equal(true)
    });
});