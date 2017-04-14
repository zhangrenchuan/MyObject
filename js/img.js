/**
 * Created by 冷昕轩 on 2017/2/16.
 */
var imgList = document.querySelectorAll(".img-3d img");
var btn1 = document.querySelector("#btnImg");
var len = imgList.length;

var rotateDeg = 360/len;

for(var i = 0; i<len; i++){
    //先旋转,再位移
    imgList[i].style.transform = "rotateY("+ rotateDeg*i +  "deg) translateZ(-310px)";
    //创建自定义属性
    imgList[i].dataset.rotateDeg = rotateDeg*i;
}

btn1.onclick = function (){
    for(var i = 0; i<len; i++){
        //获取之前的旋转角度
        var lastDeg = imgList[i].dataset.rotateDeg;
        imgList[i].style.transition = "2s";
        imgList[i].style.transform = "rotateY("+ (parseInt(lastDeg) + rotateDeg) + "deg) translateZ(-310px)";

    }
};