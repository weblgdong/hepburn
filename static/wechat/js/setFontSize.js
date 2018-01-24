var scale = 750/1334;
var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
var isAndorid = /(Android)/i.test(navigator.userAgent);
var timer = null;

//设置字体
function setFontSize(h){
    var w = h*scale || window.innerWidth;
    if(h){
        var Big = document.getElementById('big');
        Big.style.width = w+'px';
        Big.style.minHeight = h+'px';
        Big.style.backgroundSize = 'auto 100%';
    }
    document.documentElement.style.fontSize = 100*w/750 + 'px';
}
setFontSize();

//手机横竖屏时 改变大小，Andorid手机切换有延迟 故开定时器
window.addEventListener(shuping, function (){
    clearTimeout(timer);
    timer = setTimeout(setFontSize, isAndorid?300:0);
}, false);