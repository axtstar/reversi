import 'babel-polyfill';
import {othelloBase} from "../src/othelloBase.jsx";

var assert = require('chai').assert;
describe('reversi test run', () => {
  describe('constructor()',  () => {
    it('run  instantiate and two step',  () => {
      // init
      var target = new othelloBase('#base',8);
      target.init();
      target.draw();
      var cnt = 0;
      $( ()=>{
        setInterval(
          () => {
            target.addAll2One(cnt % 2);
            target.draw();
            var res =target.addTrialAll(0) + target.addTrialAll(1);
            if (res===0){
              //end of the game
             target.init();
             target.myTurn = 0;
            }
            else{
              cnt++;
            }
          },
          100,
          null);
      } );
    });    
  });
});
