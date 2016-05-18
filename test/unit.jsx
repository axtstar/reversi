import 'babel-polyfill';

var assert = require('chai').assert;
describe('reversi test run', () => {
  describe('constructor()',  () => {
    it('should return 1 when the value is instantiate',  () => {
      // init
      var b = new test(100);
      assert.equal(100, b.a);
      
    });
  });
});

class test {
  constructor(a){
    this.a = a;
  }
}