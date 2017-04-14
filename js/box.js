/**
 * Created by 冷昕轩 on 2017/2/16.
 */
var box3dDom = document.querySelector("#box3d");
var rotateDeg = 0;

setInterval(function (){
    box3dDom.style.transform = "rotateY(" + rotateDeg + "deg)  rotateX(" + rotateDeg + "deg)";
    rotateDeg++;
},30)