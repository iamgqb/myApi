//用来获取某一元素相对位置,相对可是窗口
//配合 clientX, clientY可以计算鼠标的位置
//其中 actualLeft, actualTop就是元素的绝对位置,元素在document中的绝对位置

function getElementViewLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    var elementScrollLeft=document.body.scrollLeft || document.documentElement.scrollLeft; 
    return actualLeft-elementScrollLeft;
}

function getElementViewTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null){
        actualTop += current. offsetTop;
        current = current.offsetParent;
    }
    var elementScrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    return actualTop-elementScrollTop;
}