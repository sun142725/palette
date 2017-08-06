window.onload=function(){
    let canvas=document.querySelector('canvas');
    let mask=document.querySelector('.mask');
    let ctx=canvas.getContext('2d');
    let draw=document.querySelector('.draw');
    let dashline=document.querySelector('.icon-xuxian');
    let line=document.querySelector('.icon-zhixianceliang');
    let pencil=document.querySelector('.icon-qianbi');
    let circle=document.querySelector('.icon-yuan');
    let triangle=document.querySelector('.icon-sanjiaoxing');
    let rect=document.querySelector('.icon-juxing');
    let roundrect=document.querySelector('.icon-yuanjiaojuxing');
    let polygon=document.querySelector('.icon-wujiaoxingkong');
    let topolygon=document.querySelector('.icon-iconfontwubianxing');
    let word=document.querySelector('.icon-wenzi');
    let fill=document.querySelector('.icon-tianchong');
    let inputf=document.querySelector('.inputf>input');
    let strok=document.querySelector('.icon-miaobian');
    let inputs=document.querySelector('.inputs>input');
    let cut=document.querySelector('.icon-caijian');
    let rubber=document.querySelector('.icon-xiangpi');
    let eraser=document.querySelector('.draw>.icon-xiangpi');
    let empty=document.querySelector('.icon-qingkong');
    let newc=document.querySelector('.icon-iconfontxinjian');
    let revoke=document.querySelector('.icon-iocnchexiao');
    let save=document.querySelector('.icon-baocun');
    let cutdiv = document.querySelector('.cutdiv')
    let palette=new Palette(canvas,ctx,mask,inputf,inputs);
    console.log(eraser);
    palette.controls();
    palette.fill();
    palette.strok();
    dashline.onclick=function () {
        palette.dashline();
    };
    line.onclick=function(){
        palette.line();
    };
    pencil.onclick=function(){
        palette.pencil();
    };
    circle.onclick=function(){
        palette.circle();
    };
    triangle.onclick=function(){
        palette.triangle();
    };
    rect.onclick=function(){
        palette.rect();
    };
    roundrect.onclick=function(){
        palette.roundrect()
    };
    polygon.onclick=function(){
        palette.jiao=prompt('请问您需要几角形？',5);
        palette.polygon()
    };
    topolygon.onclick=function(){
        palette.bian=prompt('请问您需要几边形？',5);
        palette.topolygon()
    };
    fill.onclick=function(){
      palette.fill();
    };
    inputf.onchange=function(){
      palette.fill();
    };
    strok.onclick=function(){
        palette.strok();
    };
    inputs.onchange=function(){
        palette.strok();
    };
    cut.onclick=function(){
        palette.cut(cutdiv);
    };
    rubber.onclick=function(){
        let w=prompt('请输入您所希望的橡皮大小','10')
        palette.rubber(w,eraser)
    };
    empty.onclick=function(){
        palette.empty();
    };
    revoke.onclick=function(){
        palette.revoke();
    };
    save.onclick=function(){
        palette.save();

    };
    word.onclick=function(){
        palette.word()
    };
    newc.onclick=function(){
        palette.empty()
    };
};