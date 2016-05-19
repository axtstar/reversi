import {othelloOne} from "../src/othelloOne.jsx";

/////////////////////////////////////
//オセロのマス目
//base class
/////////////////////////////////////
export class othelloBase {
  constructor(_cssBase,  _rpt){
    this.baseName= _cssBase;
    this.rpt=_rpt;
    this.canvas=$(this.baseName).get(0);
    this.iwidth = (this.canvas.width - 1) / _rpt;
    this.context = this.canvas.getContext('2d');
    this.othellos = [];
    
    this.yourColor = 0;
    this.comColor = 1;
    this.myTurn=0;
    
    return this;
  }
  
  //initial
  // reset whole reversi cells to 0 and put 2 by 2 cells
  init(){
     $(this.cssBase).off('fire');    
    this.othellos.splice(0,this.othellos.length);

     this.addForce(this.rpt / 2 - 1,this.rpt / 2 - 1, 1);
     this.addForce(this.rpt / 2, this.rpt / 2, 1);
     this.addForce(this.rpt / 2 - 1, this.rpt / 2, 0);
     this.addForce(this.rpt / 2,this.rpt / 2 - 1, 0);
     
     this.myTurn=0;
  }
  
  //put a cell among all posible location
  addAll2One(c){
    var ts = [];
    var index=0;
    
    for(var x=0; x < this.rpt ; x++){
      for(var y=0; y < this.rpt ; y++){
        var e = this.addTrial(x,y,c);
        if (e > 0){
          ts[index]=x * this.rpt + y;
          index++;
        }
      }
    }

   //select random value
   var m = Math.floor( Math.random() * (ts.length) );
   var ret =ts[m];
  
    if (ret==-1){
      return 0;
    }

    var xx = ~~(ret / this.rpt);
    var yy = ret % this.rpt;
    ret = this.add(xx,yy,c);
    this.draw();
    return ret;
  }
  
  //guide circle for helpness to which location is available
  asistAll (c){
    var ret = 0;
    for(var x=0; x < this.rpt ; x++){
      for(var y=0; y < this.rpt ; y++){
        var e = this.addTrial(x,y,c);
        if (e > 0){
          var a = new othelloOne(x,y,c,this);
          a.drawSmall();
        }
      }
    }
    return ret;
  }
  
  //check the available location
  addTrialAll (c){
    var ret = 0;
    for(var x=0; x < this.rpt ; x++){
      for(var y=0; y < this.rpt ; y++){
        var e = this.addTrial(x,y,c);
        ret = ret + e;
      }
    }
    return ret;
  }
  
  //culculate score
  score(_sbt){
    var ret = 0;
    for(var i=0; i < this.othellos.length ; i++){
      var cell =  this.othellos[i];
      if ( cell != null ){
        if ( cell.sbt == _sbt ){ ret++; }
      }    
    }
    return ret;
  }
  
  //force add a cell due to reset a game
  addForce(_x,_y,_c){
    if (this.getOthelloC(_x, _y)==-1){
      var ox= new othelloOne(_x,_y,_c,this);
      this.setOthello(ox);
      $(this.baseName).on('fire', () => {ox.draw();});
    }
    return;
  }
  
  //virtual trial put the cell
  addTrial(_x,_y,_c){
    var ret = 0;
    if (this.getOthelloC(_x, _y)==-1){
      var ox= new othelloOne(_x,_y,_c,this);
      ret = this.doOthello(ox,true);
    }
    return ret;
  }
  
  //actual put the cell
  add(_x,_y,_c){
    var ret = 0;
    if (this.getOthelloC(_x, _y)==-1){
      var ox= new othelloOne(_x,_y,_c,this);
      ret = this.doOthello(ox,false);
      if (ret!=0){
        this.setOthello(ox);
        $(this.baseName).on('fire', () => {ox.draw();});
      }
    }
    return ret;
  }
  setOthello(_othello){
    this.othellos.push(_othello);
    return;
  }
  getOthello(_x,_y){
    for (var i=0;i<this.othellos.length;i++){
      var e = this.othellos[i];
      if (e.posX == _x && e.posY==_y){
        return e;
      }
    }
    return null;
  }
  getOthelloC(_x,_y){
    if (this.getOthello(_x,_y)==null){
      return -1;
    }
    return this.getOthello(_x,_y).sbt; 
  }
  doOthello(_othello,_trial){
    var ret = 0;
    ret += this.doOthelloDetail(_othello,0,_trial);
    ret += this.doOthelloDetail(_othello,1,_trial);
    ret += this.doOthelloDetail(_othello,2,_trial);
    ret += this.doOthelloDetail(_othello,3,_trial);
    ret += this.doOthelloDetail(_othello,4,_trial);
    ret += this.doOthelloDetail(_othello,5,_trial);
    ret += this.doOthelloDetail(_othello,6,_trial);
    ret += this.doOthelloDetail(_othello,7,_trial);
    
    return ret;
  }
  doOthelloBit(_x,_y,_dim,_num){
    switch(_num){
      case 0:
        _x[_dim]++;
        break;
      case 1:
        _x[_dim]--;
        break;
      case 2:
        _y[_dim]++;
        break;
      case 3:
        _y[_dim]--;
        break;
      case 4:
        _x[_dim]++;
        _y[_dim]++;
        break;
      case 5:
        _x[_dim]--;
        _y[_dim]--;
        break;
      case 6:
        _x[_dim]++;
        _y[_dim]--;     
        break;
      case 7:
        _x[_dim]--;
        _y[_dim]++;     
        break;
    }
    return;
  }
  doOthelloDetail(_othello,_num,_trial){
    var ret = 0;
    
    //
    var x = [];
    var y = [];

    x[0] = _othello.posX;
    y[0] = _othello.posY;

    //隣接しているセルが自分と同じもしくはundefの場合は何もしない
    //隣接
    this.doOthelloBit(x,y,0,_num);
    if (this.getOthelloC(x[0], y[0])==-1){
      return ret;
    }

    if ( this.getOthelloC(x[0], y[0])==_othello.sbt){
      return ret;
    }

    //隣接から検索
    var cx = null;
    var cy = null;
    x[1] = x[0];
    y[1] = y[0];
    while(0 <= x[1] && x[1] < this.rpt && 0 <= y[1] && y[1] < this.rpt){
      if (this.getOthelloC(x[1],y[1])==-1){
        break;
      }
      if (this.getOthelloC(x[1],y[1])==_othello.sbt){
        cx = x[1];
        cy = y[1];
        break;
      }
      //
      this.doOthelloBit(x,y,1,_num);
    }

    if (cx!=null || cy!=null){
      x[1] = _othello.posX;
      y[1] = _othello.posY;
      this.doOthelloBit(x,y,1,_num);
      x[2] =  x[1];
      y[2] =  y[1];
      while( (cx - x[2])*(x[2] - x[1]) >=0 && (cy - y[2])*(y[2] - y[1]) >=0 ){
        ret++;
        if (_trial==false){
          //実際に裏返しする
          this.getOthello(x[2],y[2]).sbt =_othello.sbt;
        }
        this.doOthelloBit(x,y,2,_num);
      }
    }
    
    return ret;
  }
  // オセロの描画を行う
  draw(){
    for (var x=0; x < this.rpt ; x++)
    {
       for (var y=0; y < this.rpt ; y++)
       {
            this.context.fillStyle = "green";
            this.context.fillRect(x * this.iwidth, y * this.iwidth ,this.iwidth,this.iwidth); 
            this.context.strokeStyle = "rgb(0, 0, 0)";
            this.context.strokeRect(x * this.iwidth, y * this.iwidth ,this.iwidth,this.iwidth); 
       }
    }
    $(this.baseName).trigger('fire');
  }
}