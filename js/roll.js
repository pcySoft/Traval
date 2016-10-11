window.onload=function () {
    var oRoll=document.getElementById('roll');
    var oLeft=document.getElementById('left');
    var oRight=document.getElementById('right');
    var oUl=document.getElementById('ul');
    var distance=oRoll.offsetWidth-2;
    var num=0;
    oRight.onclick=function(){
        if(num==(-1)){return;}
        else{
            num--;
            oUl.style.left=(distance+9)*num+'px';
        }
    }
    oLeft.onclick=function () {
        if(num=0){return;}
        oUl.style.left=(distance*num-9)+'px';
    }
}