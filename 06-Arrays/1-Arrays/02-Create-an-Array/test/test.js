console.log = function() {};
var rewire = require('rewire'),
    appModule = rewire('../main.js');
 
describe('', function () {
  it('Did you set the variable `hobbies` equal to an array?', function() {
  	expect(appModule.__get__('hobbies')).to.be.a('array');
  });
  
  it('Did you put three items in the `hobbies` array?', function() {
  	expect(appModule.__get__('hobbies')).to.have.length.above(2);
  });
  
  it('Did you put only strings in your `hobbies` array?', function() {
  	expect(appModule.__get__('hobbies')[0]).to.be.a('string');
    expect(appModule.__get__('hobbies')[1]).to.be.a('string');
    expect(appModule.__get__('hobbies')[2]).to.be.a('string');
  });
});