var tabDay = document.querySelector("#tabDay");
var tabWeek = document.querySelector("#tabWeek");
var articleHot = document.querySelector("#articleHot");

var tabContentDay = document.querySelector("#tabContentDay");
var tabContentWeek = document.querySelector("#tabContentWeek");

/*
 1.当鼠标悬浮在某一个Tab页签时,该tab的底边为白色
 2.其他的tab底边还原为#ececec

 3.tab的默认字体颜色#999,当鼠标悬浮进去显示black黑色

 4.当鼠标悬浮在某tab时,显示对应内容区(改变层级)
 */

/*
 onmouseover
 - 鼠标指针移动到指定的对象上时发生
 target
 - 事件属性可返回事件的目标节点（触发该事件的节点）
 - 语法:event.target
 */
articleHot.onmouseover = function (e){
    e=e||event;
    var targetDom =  e.target; //触发实际事件元素的dom

    //鼠标移动到tabDay时触发该节点的target
    if(targetDom.id=="tabDay"){
        //1.当鼠标移到日榜时,底边变成白色
        //2.其他页签还原
        tabDay.style.borderBottom = "1px #fff solid";
        tabWeek.style.borderBottom ="1px #ececec solid";

        //3.改变页签颜色
        tabDay.style.color = "black";
        tabWeek.style.color = "#999";

        //4.改变内容区层级显示
        tabContentDay.style.zIndex = 1;
        tabContentWeek.style.zIndex = 0;
    }


    //鼠标移动到tabWeek时触发该节点的target
    if(targetDom.id=="tabWeek"){
        //1.当鼠标移到周榜时,底边变成白色
        //2.其他页签还原
        tabWeek.style.borderBottom ="1px #fff solid";
        tabDay.style.borderBottom = "1px #ececec solid";

        //3.改变页签颜色
        tabWeek.style.color = "black";
        tabDay.style.color = "#999";

        //4.改变内容区层级显示
        tabContentWeek.style.zIndex = 1;
        tabContentDay.style.zIndex = 0;

    }

};
