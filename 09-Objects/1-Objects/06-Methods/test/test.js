console.log = function() {}
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(e, 'Try checking your code again. You likely have a syntax error.\n').to.not.exist;
        }
        let retreatMessage
        try {
            retreatMessage = appModule.__get__("retreatMessage");
        } catch (e) {
            expect(e, 'Did you delete the `retreatMessage` variable?\n').to.not.exist;
        }
        let alienShip
        try {
            alienShip = appModule.__get__("alienShip");
        } catch (e) {
            expect(e, 'Did you create an `alienShip` object?\n').to.not.exist;
        }
        let retreat = alienShip.retreat
        expect(retreat, "`retreat` should be a method on your `alienShip` object.").to.be.an.instanceOf(Function);
        });
});