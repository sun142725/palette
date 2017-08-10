function Palette(obj,ctx,mask,colorf,colors){
     this.obj=obj;
     this.mask=mask;
     this.ctx=ctx;
     this.fillStyle='#000';
     this.strokeStyle='#000';
     this.lineWidth=2;
     this.width=obj.width;
     this.height=obj.height;
     this.history=[];
     this.type='stroke';
     this.lineCap = 'round';
     this.bian=5;
     this.jiao=5;
     this.colorf=colorf;
     this.colors=colors;
     // this.temp="";
}
Palette.prototype= {
    init: function () {
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = this.lineCap;
    },
    dashline: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.setLineDash([5, 10]);
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    line: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                // console.log(self.width);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.setLineDash([0, 0]);
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    pencil: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            if (self.history.length > 0) {
                self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
            }
            self.init();
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                // self.ctx.clearRect(0,0,self.width,self.height);
                console.log(self.width);
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    circle: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;

            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.arc(ox, oy, Math.abs(mx - ox), 0, 2 * Math.PI);
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    triangle: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;

            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.lineTo(ox, my);
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    rect: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;

            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.lineTo(ox, my);
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    roundrect: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                let num, num2;
                if (Math.abs(mx - ox) >= Math.abs(my - oy)) {
                    num = num2 = Math.abs(my - oy) / 5;
                } else if (Math.abs(mx - ox) < Math.abs(my - oy)) {
                    num = num2 = Math.abs(mx - ox) / 5;
                }
                if (mx < ox && my < oy) {
                    num *= -1;
                    num2 *= -1;
                }
                ;
                if (mx < ox && my > oy) {
                    num *= -1;
                }
                ;
                if (mx > ox && my < oy) {
                    num2 *= -1;
                }
                ;
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox + num, oy);
                self.ctx.lineTo(mx - num, oy);
                self.ctx.quadraticCurveTo(mx, oy, mx, oy + num2);
                self.ctx.lineTo(mx, my - num2);
                self.ctx.quadraticCurveTo(mx, my, mx - num, my);
                self.ctx.lineTo(ox + num, my);
                self.ctx.quadraticCurveTo(ox, my, ox, my - num2);
                self.ctx.lineTo(ox, oy + num2);
                self.ctx.quadraticCurveTo(ox, oy, ox + num, oy);
                // self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    //五角星
    polygon: function () {
        let self = this, num = this.jiao;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            let angle = 360 / (num * 2) / 180 * Math.PI;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                let radius = Math.sqrt((cx - ox) * (cx - ox) + (cy - oy) * (cy - oy));     //勾股定理    Math.pow()平方
                self.init();
                self.ctx.beginPath();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.moveTo(ox + radius, oy);
                let newx = 0, newy = 0;
                for (let i = 0; i < num * 2; i++) {
                    if (i % 2 == 0) {
                        newx = ox + radius * Math.cos(angle * i);
                        newy = oy + radius * Math.sin(angle * i);
                        self.ctx.lineTo(newx, newy);
                    } else {
                        newx = ox + radius / 3 * Math.cos(angle * i);
                        newy = oy + radius / 3 * Math.sin(angle * i);
                        self.ctx.lineTo(newx, newy);
                    }

                }
                self.ctx.closePath();
                self.ctx[self.type]();

            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    //五边形
    topolygon: function () {
        let self = this, num = this.bian;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            let angle = (360 / num) / 180 * Math.PI;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                let radius = Math.sqrt((cx - ox) * (cx - ox) + (cy - oy) * (cy - oy));     //勾股定理    Math.pow()平方
                self.init();
                self.ctx.beginPath();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }

                self.ctx.moveTo(ox + radius, oy);
                for (let i = 0; i < num; i++) {
                    let newx = ox + radius * Math.cos(angle * i);
                    let newy = oy + radius * Math.sin(angle * i);
                    self.ctx.lineTo(newx, newy);
                }
                self.ctx.closePath();
                self.ctx[self.type]();

            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    word: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            let div = document.createElement('div');
            div.style.cssText = `min-width:100px;height:40px;position:absolute;left:${ox}px;top:${oy}px`;
            div.contentEditable = true;
            self.temp = self.ctx.getImageData(ox, oy, 100, 40)
            self.mask.appendChild(div);
            self.mask.onmousedown = null;
            self.drag(ox, oy, 100, 40, div);
            div.onblur = function () {
                self.ctx.font = self.font;
                self.ctx.textAlign = self.textAlign;
                self.ctx.textBaseline = self.textBaseline;
                let texts = this.innerText;
                self.ctx.fillText(texts, this.offsetLeft, this.offsetTop);
                this.remove();
                self.area = null;
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.word()
            }
        }
    },
    rubber: function (w, eraser) {
        let self = this;
        eraser.style.fontSize = w + 'px';
        eraser.style.lineHeight = w + 'px';
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            eraser.style.left = `${ox}px`;
            eraser.style.top = `${oy}px`;
            eraser.style.width = `${w}px`;
            eraser.style.height = `${w}px`;
            eraser.style.display = 'block';
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                if (mx < 0) {
                    mx = 0;
                }
                if (mx > self.width - w) {
                    mx = self.width - w
                }
                if (my < 0) {
                    my = 0;
                }
                if (my > self.height - w) {
                    my = self.height - w
                }
                eraser.style.left = `${mx}px`;
                eraser.style.top = `${my}px`;
                self.ctx.clearRect(mx, my, w, w);
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
                eraser.style.display = 'none';
            }
        }
    },
    fill: function () {
        this.init();
        this.type = 'fill';
        this.fillStyle = this.colorf.value;
    },
    strok: function () {
        this.init();
        this.type = 'stroke';
        this.strokeStyle = this.colors.value;
    },
    empty: function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.history.push(this.ctx.getImageData(0, 0, this.width, this.height));
    },
    cut: function (cutobj) {
        let self = this;
        let minx, miny, w, h;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                minx = mx < ox ? mx : ox;
                miny = my < oy ? my : oy;
                w = Math.abs(mx - ox);
                h = Math.abs(my - oy);
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                cutobj.style.display = 'block';
                cutobj.style.left = minx + 'px';
                cutobj.style.top = miny + 'px';
                cutobj.style.width = w + 'px';
                cutobj.style.height = h + 'px';
            }
            self.mask.onmouseup = function () {
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
                self.temp = self.ctx.getImageData(minx, miny, w, h);
                self.ctx.clearRect(minx, miny, w, h);
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.ctx.putImageData(self.temp, minx, miny);
                self.drag(minx, miny, w, h, cutobj);
            }

        }

    },
    drag: function (x, y, w, h, cutobj) {
        let self=this;
        self.mask.onmousemove=function (e) {
            let ex=e.offsetX,ey=e.offsetY;
            if(ex > x && ex<x+w && ey>y && ey<h+y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
            }
        }
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let cx=ox-x,cy=oy-y;
            if(ox > x && ox<x+w && oy>y && oy<h+y) {
                self.mask.style.cursor = "move";
            } else {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                cutobj.style.display='none';
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.cut(cutobj);
                self.mask.style.cursor = "default";
                return ;
            }
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                let left=mx-cx;
                let top=my-cy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w;
                }
                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h;
                }
                cutobj.style.left=left+'px';
                cutobj.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp,left,top);
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drag(x, y, w, h, cutobj);
            }
        }

},
    newc:function(obj){
      obj.innerHTML=`
            <div class="mask">
                <i class="iconfont icon-xiangpi"></i>
            </div>
            <canvas width="1000" height="600">
`
    },
    save:function(){
        let data=this.obj.toDataURL('image.png').replace('data:image/png','data:stream/octet');
        location.href=data;
        // window.open(data);
    },
    down:function(){
        // let data=this.obj.toDataURL('image.png').replace('data:image/png','data:stream/octet');
        // location.href=data;
        let self = this;
        // let data=self.obj.toDataURL('/image.png')
        // console.log(data)
        //
        let data = 'http://baidu.com'
        window.location='data'
    },
    revoke:function(){
        let self=this;
        if(self.history.length>0){
            let last=self.history.pop();
            self.ctx.putImageData(last,0,0)
        }
        if(self.history.length==0){
            self.ctx.clearRect(0,0,self.width,self.height)
        }
    },
    controls:function(){
        let self=this;
        document.body.onkeydown=function(e){
            if(e.ctrlKey && e.keyCode==90){
                if(self.history.length>0){
                    let last=self.history.pop();
                    self.ctx.putImageData(last,0,0)
                }
                if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height)
                }
            }
        }
    },
};