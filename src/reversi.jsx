import {othelloBase} from "../src/othelloBase.jsx";

var cssBase='#base';
var cssScore='#score';
var cssStart='#start';
var cssTdebug='#tdebug';
var cssCheck="input[name='c']";
var comWait = 1000;

$(() => {
  //マス目の数 
   let _len = 8;
   var b =  new othelloBase(cssBase, _len);
   //初期設定(真ん中に配置)
   b.init();
   b.draw();
   
   //自分のオセロ
   $(cssBase).on('myOthello', (e,base,posX,posY,myColor,enemy) => {
     setMyOthello(base,
                  posX,
                  posY,
                  myColor,
                  enemy);
   });
   
   //敵オセロ
   $(cssBase).on('enemyOthello', () => {
     setTimeout(setAOnce, comWait, b, b.comColor);
   });

   //得点    
   $(cssBase).on('Score', (e, base) => {
     setScore(base);
   });

   //スタート
   $(cssStart).on('click', () => {
     b.init();
     b.draw();

     b.yourColor = Number($(`${cssCheck}:checked`).val());
     b.comColor = (b.yourColor + 1) % 2;
     
     if (b.myTurn!=b.yourColor){
       $(cssBase).trigger('enemyOthello',[setAOnce,b,b.comColor]);
     }
   });

   //クリックのイベントハンドラを登録
   $(cssBase).on('click', (e) => {
      var rect = $(cssBase).offset();
      var x = ~~((e.pageX - rect.left) / b.iwidth);
      var y = ~~((e.pageY - rect.top)  / b.iwidth);
      var c = b.yourColor;
      $(cssBase).trigger('myOthello',[b,x,y,c,b.comColor]);
   });

   //タッチのイベントハンドラを登録
   $(cssBase).on('touchstart', (e) => {
      var rect = e.target.getBoundingClientRect();
      var touch = e.originalEvent.touches[0];
     
      var x = ~~((touch.clientX - rect.left) / b.iwidth);
      var y = ~~((touch.clientY - rect.top) / b.iwidth);
      var c = b.yourColor;
      $(cssBase).trigger('myOthello',[b,x,y,c,b.comColor]);
   });
});

var setScore = (b) => {
  //得点
  var black=b.score(b.yourColor);
  var white=b.score(b.comColor); 

  //終了判定
  var e = b.addTrialAll(0) + b.addTrialAll(1);
  
  if (e==0){
    //end
      var res;
      if (black > white){
        res = "win!";
      } else if(black==white) {
        res = "draw";
      } else {
        res = "lose";
      }
      $(cssScore).val(`${res} Score: ${black} : ${white}`);
  } else {
      $(cssScore).val( `Score: ${black} : ${white}`);
      b.asistAll(b.myTurn % 2);
  }
};

var setMyOthello = (b,x,y,c,comColor) => {
      if (c!=(b.myTurn % 2)){
        return;
      }
      $(cssTdebug).val("");
      var d = b.add(x,y,c);
      if(d==0){
        $(cssTdebug).val( "You can't put it!");
        return;
      }
      b.draw();
      
      b.myTurn ++;
      $(cssBase).trigger('Score',[b]);
      $(cssBase).trigger('enemyOthello',[setAOnce,b,comColor]);
};

//
var setAOnce = (_base,_color) => {
  _base.myTurn++;
  var e = _base.addAll2One(_color % 2);
  if (e==0){
    $(cssTdebug).val('pass:' + _color % 2);
  }
  e = _base.addTrialAll((_color + 1) % 2);
  $(cssBase).trigger('Score',[_base]);
};
