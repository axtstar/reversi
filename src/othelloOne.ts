/////////////////////////////////////
//オセロ一個
/////////////////////////////////////
export class othelloOne {
  protected posX:any
  protected posY:any
  protected sbt:any
  protected parent:any

  constructor(_x:any, _y:any, _sbt:any,_base:any){
    //property
    this.posX  = _x;
    this.posY  = _y;
    this.sbt = _sbt;
    this.parent = _base;
    return this;
  }
  clear(){
    this.posX = -1;
    this.posY = -1;
    this.sbt = -1;
  }
  draw(){
     //drawing othello
     var xx = this.parent.iwidth / 2;
     
     this.parent.context.beginPath();
     var fillColor= (this.sbt==0 ? 'rgb(0,0,0)' : 'rgb(255,255,255)');
     this.parent.context.strokeStyle = fillColor;
     this.parent.context.fillStyle = fillColor;
     this.parent.context.arc(this.posX * this.parent.iwidth + xx, this.posY * this.parent.iwidth + xx, xx - 2, 0 , Math.PI * 2, false);
     this.parent.context.fill();
  }
  drawSmall(){
     var xx = this.parent.iwidth / 2;     
     this.parent.context.beginPath();
     var strokeColor= (this.sbt==0 ? 'rgb(0,0,0)' : 'rgb(255,255,255)');
     this.parent.context.strokeStyle = strokeColor;
     this.parent.context.arc(this.posX * this.parent.iwidth + xx, this.posY * this.parent.iwidth + xx, xx / 2 , 0 , Math.PI * 2, false);
     this.parent.context.stroke();
  }
}
