/**
 * Created by 冷昕轩 on 2017/2/16.
 */
var itemDom = document.querySelector("#item");
//创建表盘的60个刻度
for (var i = 0; i < 60; i++) {

    var liDom = document.createElement("li");

    liDom.style.transform = "rotate("+i*6+"deg)";

    itemDom.appendChild(liDom);
}


var secondDom = document.querySelector("#second");
var minDom = document.querySelector("#min");
var hourDom = document.querySelector("#hour");
setInterval(function () {

    var dateObj = new Date();
    //控制秒针的时间
    var sec = dateObj.getSeconds();
    secondDom.style.transform = "rotate("+ sec*6 +"deg)";
    //控制分针的时间
    var min = dateObj.getMinutes() + sec/60;
    minDom.style.transform = "rotate("+ min*6 +"deg)";
    //控制时针的时间
    var hour = dateObj.getHours() + min/60;
    hourDom.style.transform = "rotate("+ hour*30 +"deg)"


},1000);
