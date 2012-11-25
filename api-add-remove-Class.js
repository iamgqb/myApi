
function addClass(element, value){
    var classNames, tempClass;
    classNames = value.split( /\s+/ ); // !! /\s+/查找多个空格， 分割成多个class

    if ( !element.className && classNames.length == 1 ){
        element.className = value;        
    }
    else {
        tempClass = " " + element.className + " ";
        for ( var i = 0, l = classNames.length; i < l; i++ ){
            if ( tempClass.indexOf( " " + classNames[i] + " " ) < 0 ){
                tempClass += classNames[i] + " ";
            }
        }
        element.className = tempClass.replace(/^\s+|\s+$/g, ""); //去掉首尾空格
    }

}

function removeClass(element, value){
    var classNames, tempClass, itemClass;
    classNames = value.split( /\s+/ );


    if ( element.className ){
        tempClass = " " + element.className.replace(/[\r\t\n]/g, " ") + " "; // !! \t\r\n 把回车制表换行都转成空格

        for ( var i = 0, l = classNames.length; i < l; i++ ){
            while ( tempClass.indexOf( " " + classNames[i] + " " ) >= 0 ){
                tempClass = tempClass.replace( " " + classNames[i] + " ", " " );                
            }
        }
        element.className = tempClass.replace(/^\s+|\s+$/g, "");
    }
}

// 只能检测一个类
function hasClass(element, value){
    var formatClass, className;
    formatClass = " " + element.className.replace(/[\r\t\n]/g, " ") + " ";
    className = " " + value + " ";

    if ( formatClass.indexOf(className) >= 0 )
        return true;
    return false;
}