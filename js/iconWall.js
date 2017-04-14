/**
 * Created by 冷昕轩 on 2017/2/16.
 */
//绑定刷新按钮
var btnRefreshDom = document.querySelector("#btnRefresh");

var iconRefreshDom = document.querySelector("#iconRefresh");

//绑定所有图片li
var img3dList = document.querySelectorAll(".img-icon");
//定义总列数
var lineCount = 6;
//获取列表长度
var lenx = img3dList.length;
//记录单击次数
var clickTimes = 1;

btnRefreshDom.onclick = function (){
    //1. 旋转,刷新图标
    iconRefreshDom.style.transform = "rotate(" + 360*clickTimes + "360deg)";
    iconRefreshDom.style.transition = ".5s";

    //2.图片3d旋转效果
    for (var i = 0; i < lenx; i++) {
        //根据元素索引位置和总序列号获取每列的编号
        var colNum = i%lineCount;
        //根据元素索引位置和总序列号获取每行的编号
        var rowNum = parseInt(i/lineCount);

        var delayTime = (colNum+rowNum)*100;

        img3dList[i].style.transition =".8s "+ delayTime + "ms";
        img3dList[i].style.transform = "rotateY(" + 180*clickTimes + "deg)"
    }
    clickTimes++;
};