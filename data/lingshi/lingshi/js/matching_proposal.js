
/*折叠改变样式的函数*/
var header_content=$(".header_content");
var header_content_img=$(".header_content_icon>img");
var header_button = $("header_button")[0];
$(".content_list_header_in").data("status","open");
$(".content_list_header_in").click(function(){
    var status = $(this).data("status");
    var img_url = $(this).data("itarget");
    if(status=="open"){
       $(this).find(".header_content img")[0].setAttribute("src","./img/m_"+img_url+"_1.png");
        $(this).find(".header_content>div+div p").css("color","white");
        $(this).css("background"," #3D74CF");
        $(this).find(".header_button span").removeClass("glyphicon-menu-up");
        $(this).find(".header_button span").addClass("glyphicon-menu-down");
        $(this).find(".header_button").css("color","#3D74CF");
        $(this).find(".header_button").css("background","white");
        $(this).data("status","close");
    }else{
        $(this).find(".header_content img")[0].setAttribute("src","./img/m_"+img_url+".png");
        $(this).find(".header_content>div+div p").css("color","#3D74CF");
        $(this).find(".header_content>div+div p+p").css("color","#808080");
        $(this).css("background"," transparent");
        $(this).find(".header_button span").removeClass("glyphicon-menu-down");
        $(this).find(".header_button span").addClass("glyphicon-menu-up");
        $(this).find(".header_button").css("color","white");
        $(this).find(".header_button").css("background","#3D74CF");
        $(this).data("status","open");
    }
})
/*回到顶部*/

$(".to_top_button").click(function () {
    var speed=1000;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
//监听div大小变化的封装函数
(function($, h, c) {
    var a = $([]),
        e = $.resize = $.extend($.resize, {}),
        i,
        k = "setTimeout",
        j = "resize",
        d = j + "-special-event",
        b = "delay",
        f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {
                w: l.width(),
                h: l.height()
            });
            if (a.length === 1) {
                g();
            }
        },
        teardown: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) {
                clearTimeout(i);
            }
        },
        add: function(l) {
            if (!e[f] && this[k]) {
                return false;
            }
            var n;
            function m(s, o, p) {
                var q = $(this),
                    r = $.data(this, d);
                r.w = o !== c ? o: q.width();
                r.h = p !== c ? p: q.height();
                n.apply(this, arguments);
            }
            if ($.isFunction(l)) {
                n = l;
                return m;
            } else {
                n = l.handler;
                l.handler = m;
            }
        }
    };
    function g() {
        i = h[k](function() {
                a.each(function() {
                    var n = $(this),
                        m = n.width(),
                        l = n.height(),
                        o = $.data(this, d);
                    if (m !== o.w || l !== o.h) {
                        n.trigger(j, [o.w = m, o.h = l]);
                    }
                });
                g();
            },
            e[b]);
    }
})(jQuery, this);
/*调用*/
$(".matching_proposal_content").resize(function(){
    var c_height=$(".matching_proposal_content").height()
    if(c_height<1500){
        $(".to_top").css("display","none")
    }else{
        $(".to_top").css("display","block")
    }
});
$(".content_list_kv_lable>div").click(function(){
    $(this).parent().find("div").removeClass("active");
    $(this).addClass("active");
})
