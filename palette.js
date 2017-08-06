/*
*  方法
*     功能
*     line、pencil、圆、多边形、矩形、虚线
*     撤销、保存、新建
*     裁切
*  属性
*    描述
*    线宽、颜色、fill、stroke
*
*
*  Palette(canvas,ctx)
* */


 function Palette(obj,ctx){
     this.obj = obj
     this.ctx = ctx;
      // 宽高
     this.width = obj.width;
     this.height =  obj.height;

     // 历史
     this.history= [];

     // 样式  线宽、颜色、type、bian、jiao
     this.lineWidth = 1;
     this.lineCap = 'round'
     this.fillStyle = '#000000';
     this.strokeStyle = '#000000';
     // 填充、描边
     this.type = 'stroke';
     this.bian = 5;
     this.jiao = 5;
 }

 Palette.prototype={
     init:function(){
         this.ctx.lineWidth = this.lineWidth;
         this.ctx.lineCap = this.lineCap;
         this.ctx.fillStyle = this.fillStyle;
         this.ctx.strokeStyle = this.strokeStyle;
     },
     line:function(){
         let self = this;
        self.obj.onmousedown = function(e){
              let ox = e.offsetX,oy = e.offsetY;
             self.obj.onmousemove = function(e){
                 let cx= e.offsetX,cy = e.offsetY;
                 self.ctx.clearRect(0,0,self.width,self.height);
                 if(self.history.length>0){
                     self.ctx.putImageData( self.history[self.history.length-1],0,0);
                 }
                 self.init();
                 self.ctx.beginPath();
                 self.ctx.moveTo(ox,oy);
                 self.ctx.lineTo(cx,cy);
                 // self.ctx.closePath();
                 self.ctx.stroke();
                 // 线宽、颜色
             }
             self.obj.onmouseup = function(){
                self.history.push( self.ctx.getImageData(0,0,self.width,self.height));
                 self.obj.onmouseup = null;
                 self.obj.onmousemove = null;
             }
        }
     },
     pencil:function(){

     },
     rect:function(){
          // rect(0,0,100,100)
         let self= this;
         self.obj.onmousedown =function(e){
              let ox = e.offsetX,oy = e.offsetY;
             self.obj.onmousemove = function(e){
                 let  cx = e.offsetX,cy = e.offsetY;
                 let  w =cx-ox,h = cy-oy;
                 self.ctx.clearRect(0,0,self.width,self.height);
                 if(self.history.length>0){
                   self.ctx.putImageData( self.history[self.history.length-1],0,0)
                 }
                 self.ctx.beginPath();
                 self.ctx.rect(ox,oy,w,h);
                 self.ctx.closePath();
                 self.ctx.stroke();
             }
             self.obj.onmouseup = function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                 self.obj.onmousemove =null;
                 self.obj.onmouseup =null;
             }
         }
     },
     circle:function(){

     }


 }