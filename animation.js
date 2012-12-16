// animation fade function
// with begin and end 

// begin DIY
var animation = function(option){

    var defaults = {
        type : undefined,
        node : null,
        interval : 50,   //单步执行时间
        speed : 0.2,     //单步渐变程度
        duration : 1000,  //淡入淡出过程中的暂留时间
        end : undefined   //渐变结束点
    }

    //init 
    var type = option.type,
        node = option.node,
        end  = option.end,
        interval = option.interval || defaults.interval,   
        speed  = option.speed || defaults.speed,  
        duration = option.duration || defaults.duration;
    
    var tar = node.style;
    var original, opacity;

    // isIE678判断，并取node原始透明度
    if ( 'opacity' in node.style ){
        var isIE = false;
        original = tar.opacity || 0;
    }
    else{
        var isIE = true;
        original = node.filters.alpha || 0; // 为什么要分步获取？直接node.filters.alpha.opacity 会报错
        original = original.opacity/100 || 0;
    }

    // fading函数用来设置透明度，ie与其他浏览器的不同方法
    var fading = function(percentNum){ // 0 <= percentNum <= 1
        if (!isIE){
            tar.opacity = percentNum;
        }
        else {
            tar.filter = 'alpha(opacity=' + (percentNum*100) + ')';                    
        }
    }

    //淡入
    var fadeIn = function(node, end){
        var opacity = original || 0;
        var end = end || 1;
        fading(opacity);
        var step = function(){
            opacity += speed;
            if (opacity <= end){
                fading(opacity);
                setTimeout(step, interval);
            }
            else {
                fading(end);
            }
        };
        setTimeout(step, 100);
    };
    //淡出
    var fadeOut = function(node, end){
        var opacity = original || 1;
        var end = end || 0;
        fading(opacity);
        var step = function(){
            opacity -= speed;
            if (opacity >= end){
                fading(opacity);
                setTimeout(step, interval);
            }
            else {
                fading(end);
            }
        };
        setTimeout(step, 100);
    };

    //淡入并直接淡出
    var fadeInOut = function(node, duration){
        fadeIn(node);
        setTimeout(function(){
            fadeOut(node);
        }, duration);
    }
    //渐变至特定点
    var fadeTo = function(node, end){
        if (end > original){
            fadeIn(node, end);
        }
        else 
            fadeOut(node, end);
    }

    switch (type){
        case 'fadeIn' : fadeIn(node);break;
        case 'fadeOut': fadeOut(node);break;
        case 'fadeInOut':fadeInOut(node, duration);break;
        case 'fadeTo':fadeTo(node, end);break;
        default: alert('wrong');
    }
};
// end DIY