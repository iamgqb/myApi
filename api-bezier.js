//贝塞尔曲线api，返回的是保存了100个点数组，偶数下标存了X,奇数下标存了Y
function bezier(x1, y1, x2, y2){
    var map = [];
    //100个点
    for (var i=0; i<101; i++){
        var t = i/100;
        map[2*i]   = 3*x1*t*(1-t)*(1-t)+3*x2*t*t*(1-t)+t*t*t;// save X
        map[2*i+1] = 3*y1*t*(1-t)*(1-t)+3*y2*t*t*(1-t)+t*t*t;// save Y
    }
    return map;
}