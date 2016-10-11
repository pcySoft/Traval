window.onload=function () {
    var oH=document.getElementsByClassName('hover')
    var oDiv=document.getElementsByClassName('extend')
    for(i=0;i<oH.length;i++){
        (function (x) {
            oH[x].onmouseover=function () {
                if(oDiv[x].offsetHeight>0){
                    oH[x].className="hover";
                    oDiv[x].className="extend";
                }
                else{
                    toback();
                    oDiv[x].className+=" toShow";
                }
            }
        })(i);
        (function (x) {
            oH[x],oDiv[x].onmouseleave=function () {
                if(oDiv[x].offsetHeight>0){
                    oH[x].className="hover";
                    oDiv[x].className="extend";
                }
            }
        })(i);
    }
    function toback() {
        for(j=0;j<oH.length;j++){
            oH[j].className="hover";
            oDiv[j].className="extend"
        }
    }
}