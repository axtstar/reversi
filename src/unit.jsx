import 'babel-polyfill';
import {othelloOne} from "../src/othelloOne.jsx";

var assert = require('chai').assert;
describe('reversi test run', () => {
  describe('constructor()',  () => {
    it('should return 1 when the value is instantiate',  () => {
      // init
      var b = new test(100);
      assert.equal(100, b.a);
      
      // class othelloOne
      var o = new othelloOne(2,2,0,'base');
      assert.equal(2,o.posX);
      
    });
  });
});

class test {
  constructor(a){
    this.a = a;
  }
}