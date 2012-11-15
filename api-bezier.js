//贝塞尔曲线api，返回的是保存了100个点数组map[i].x, map[i].y
function bezier(x1, y1, x2, y2){
    var map = [];
    //100个点
    for (var i=0; i<101; i++){
        var t = i/100;
        map[i] = {
            x : 3*x1*t*(1-t)*(1-t)+3*x2*t*t*(1-t)+t*t*t,// save X
            y : 3*y1*t*(1-t)*(1-t)+3*y2*t*t*(1-t)+t*t*t// save Y
        }
    }
    return map;
}