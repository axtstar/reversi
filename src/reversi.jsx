import {othelloBase} from "../src/othelloBase.jsx";

var myturn = 0;
var yourColor = 0;
var comColor = 1;

$(() => {
  //マス目の数 
   let _len = 8;
   var b =  new othelloBase('#base',_len);
   yourColor = 0;
   comColor = (yourColor + 1) % 2;
   //初期設定(真ん中に配置)
   b.addForce(_len / 2 - 1,_len / 2 - 1, 1);
   b.addForce(_len / 2, _len / 2, 1);
   b.addForce(_len / 2 - 1, _len / 2, 0);
   b.addForce(_len / 2,_len / 2 - 1, 0);
   b.draw();
   
   //自分のオセロ
   $("#base").on('myOthello', (e,base,posX,posY,myColor,enemy) => {
     setMyOthello(base,
                  posX,
                  posY,
                  myColor,
                  enemy);
   });
   
   //敵オセロ
   $("#base").on('enemyOthello', () => {
     setTimeout(setAOnce,2000,b,comColor);
   });

   //得点    
   $("#base").on('Score', (e,base) => {
     setScore(base);
   });

   //スタート
   $("#start").on('click', () => {
     $("#base").off('fire');
     
     b.init();
     b.draw();

     yourColor = Number($("input[name='c']:checked").val());
     comColor = (yourColor + 1) % 2;
     
     myturn = 0;

     if (myturn!=yourColor){
       $("#base").trigger('enemyOthello',[setAOnce,b,comColor]);
     }
   });

   //クリックのイベントハンドラを登録
   $("#base").on('click', (e) => {
      var rect = $("#base").offset();
      var x = ~~((e.pageX - rect.left) / b.iwidth);
      var y = ~~((e.pageY - rect.top)  / b.iwidth);
      var c = yourColor;
      $("#base").trigger('myOthello',[b,x,y,c,comColor]);
   });

   //タッチのイベントハンドラを登録
   $("#base").on('touchstart', (e) => {
      var rect = e.target.getBoundingClientRect();
      var touch = e.originalEvent.touches[0];
     
      var x = ~~((touch.clientX - rect.left) / b.iwidth);
      var y = ~~((touch.clientY - rect.top) / b.iwidth);
      var c = yourColor;
      $("#base").trigger('myOthello',[b,x,y,c,comColor]);
   });
});

var setScore = (b) => {
  //得点
  var black=b.score(yourColor);
  var white=b.score(comColor); 

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
      $("#score").val(res + " Score: " + black + ":" + white);
  } else {
      $("#score").val( "Score: " + black + ":" + white);
      b.asistAll(myturn % 2);
  }
};

var setMyOthello = (b,x,y,c,comColor) => {
      if (c!=(myturn % 2)){
        return;
      }
      $('#tdebug').val( "");
      var d = b.add(x,y,c);
      if(d==0){
        $('#tdebug').val( "You can't put it!");
        return;
      }
      b.draw();
      
      myturn ++;
      $("#base").trigger('Score',[b]);
      $('#base').trigger('enemyOthello',[setAOnce,b,comColor]);
};

var setAOnce = (_base,_color) => {
  myturn++;
  var e = _base.addAll2One(_color % 2);
  if (e==0){
    $('#tdebug').val('pass:' + _color % 2);
  }
  e = _base.addTrialAll((_color + 1) % 2);
  $("#base").trigger('Score',[_base]);
};
