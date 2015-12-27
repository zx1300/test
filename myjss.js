function getEle(ele){
    return document.querySelector(ele);
}
var main = getEle("#main");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
var desW = 640;
var desH = 960;
if(winW/winH>desW/desH){
    main.style.webkitTransform = "scale("+winW/desW+")";
}else{
    main.style.webkitTransform = "scale("+winH/desH+")";
}
var oStart=getEle(".start");
var oCir = getEle(".cir");
var oH3=getEle(".start h3");
var oAd = getEle(".ad");
function fnRote(){
    oCir.style.webkitTransform="scale(1)";
    oH3.style.webkitTransform="translate(0,0)";
    oAd.style.webkitTransform = "translate(0,0)";
}
setTimeout(fnRote,1000);

oStart.addEventListener("touchstart",function(){
        this.remove();
        fnAfter.about();
},false);

var oAbout = getEle(".about");
var oP=document.querySelectorAll(".about .paras p");
var oExP=getEle(".experience p");
var oIs=document.querySelectorAll(".experience h3 i");
var oDls=document.querySelectorAll(".skill dl");
var oE=getEle(".experience");
var oSkill=getEle(".skill")

var fnAfter={
    about:function(){
        var _this=this;
        setTimeout(_this.touch,1000);
        setTimeout(_this.experience,3000);
        setTimeout(_this.skill,6000);
    },
    touch:function(){
        /*[].forEach.call(oP,function(){
            oP.style.color="#fff";
        })*/
        for(var i=0;i<oP.length;i++){
            /*oP[i].style.color="#fff";*/
            oP[i].style.webkitTransform = "translate(0,0)";
        }
    },
   experience:function(){
        oAbout.remove();
       oExP.style.webkitTransform="rotate(0) scale(1)";
       setTimeout(function(){oIs[0].style.webkitAnimation="iMove 1s";},0);
       setTimeout(function(){oIs[1].style.webkitAnimation="iMove 1s";},200);
       setTimeout(function(){oIs[2].style.webkitAnimation="iMove 1s";},300);
       setTimeout(function(){oIs[3].style.webkitAnimation="iMove 1s";},400);

       setTimeout(function(){oE.remove();},3000);
   },
    skill:function(){
        for(var i=0;i<oDls.length;i++){
            var val=130*i+"px";
            oDls[i].style.webkitTransform="translate(0,"+val+")";
        }
        setTimeout(function(){oSkill.remove();},3000);
    }
};






