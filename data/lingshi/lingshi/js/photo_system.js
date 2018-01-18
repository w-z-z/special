/*兼容不支持 bind方法的函数*/
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
}
/*点击删除自己*/
$(".choose_info").on("click",".choose_delete",function(){
    $(this).parent(".choose_info_list").remove()
    var  b_n= $(this).parent(".choose_info_list").data("number")
    $( ".photo_content .photo_content_list  .photo_detail  div[data-number='"+b_n+"']").children().attr("src","img/add.jpg");
});
/*点击增加内容*/
$(".photo_content ").on("click",".choose",function(){
        var  datanumber = $(this).data("number");
        var choosetext  =$(this).prev(".photo_detail_text").children(".name_info").text()
    var img_src=$(this).children("img").attr("src");
        var newdom =$("<div data-number="+datanumber+" class='choose_info_list'> "+
            "<span class='choose_info_name'>"+choosetext+"</span>" +
            "<span class='choose_delete'>×</span>" +
            "</div>");
    if(img_src=="./img/right.jpg"){
        /*删除*/
       $(this).children("img").attr("src","img/add.jpg");
        var number = $(this).data("number");
        var selector = "#choose_info div[data-number='"+number+"']";
        $(selector).remove();
    } else {
        /*增加*/
        $(this).children("img").attr("src","img/right.jpg");
        $("#choose_info").append(newdom)
    }
})
/*点击展开搜索框*/
var temp3=true
$(".photo_search>.search_icon").click(function(){
    if(temp3){
        $(".photo_search>input").css("display","block")
        $(".photo_search>input").val("")
        $(this).css("color","grey")
        temp3=false
    }else{
        $(".photo_search>input").css("display","none")
        $(this).css("color","white")
        temp3=true
    }
})
$(".photo_search>input").keydown(function(){
    $(".search_suggest").css("display","block")
})
$(".photo_search>input").blur(function(){
    $(".search_suggest").css("display","none")
})
/*提示框*/
function tooltipout(){
    $(".tooltip_note").css("display","block")
    var num=3
    console.log(num)
    counttime=setInterval(function(){
        num--
        $("#overtime").html(num)
        if(num==0){
            clearInterval(counttime)
            window.location.href="submitted_list.html"
        }
    },1000)
    $("#overtime").html("3")
}
//变量t就是滚动条滚动时，到顶部的距离
var hh=$(window).height()+50
var t =document.documentElement.scrollTop||document.body.scrollTop;
var h=document.body.scrollHeight
var bb= h-t
if(bb<=hh){
    $(".media_submit").removeClass("absorption")
}else{
    $(".media_submit").addClass("absorption")
}
$(window).on("scroll",function(e){
    //变量t就是滚动条滚动时，到顶部的距离
    var hh=$(window).height()+50
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    var h=document.body.scrollHeight
    var bb= h-t
    if(bb<=hh){
        $(".photo_submit").removeClass("absorption")
    }else{
        $(".photo_submit").addClass("absorption")
    }
});
var numm = 3
/*当窗口滚动到图片第5排图片时。向容器追加一个加载动画节点 并发起请求 请求完成下面的图片加载出来完成后 再一次显示出来 同时gif*/
/*异步加载动画*/
$(window).scroll(function() {
    // 如果滚动的高度加上窗口的高度等于页面的高度就是到了底部
    //变量t就是滚动条滚动时，到顶部的距离
    var hh=$(window).height()+350
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    var h=document.body.scrollHeight
    var bb= h-t
    if(bb<=hh){
        if($(".lodingboximg").length<1){
            numm--
            if(numm<1){
            }else{
                var img_dom= $("<div  class=\"lodingboximg\"><img src='./img/loding.gif'/></div>");
                $(".photo_content").append(img_dom)
                var img_info = [
                    {"data-number":"19","src":"img/ip_photo/NHH/NHH_02_multi_01.jpg","name_info":"  NHH_02_multi_04","detil1":"主题：美食、生日、甜品","sug":"品类建议：","detil2":"食品、礼品、化妆品、饰品、饮料"},
                    {"data-number":"20","src":"img/ip_photo/NHH/NHH_02_multi_02.jpg","name_info":"  NHH_02_multi_04","detil1":"主题：美食、生日、甜品","sug":"品类建议：","detil2":"食品、礼品、化妆品、饰品、饮料"},
                    {"data-number":"21","src":"img/ip_photo/NHH/NHH_02_multi_03.jpg","name_info":"  NHH_02_multi_04","detil1":"主题：美食、生日、甜品","sug":"品类建议：","detil2":"食品、礼品、化妆品、饰品、饮料"},
                    {"data-number":"22","src":"img/ip_photo/NHH/NHH_02_multi_04.jpg","name_info":"  NHH_02_multi_04","detil1":"主题：美食、生日、甜品","sug":"品类建议：","detil2":"食品、礼品、化妆品、饰品、饮料"},
                    {"data-number":"23","src":"img/ip_photo/NHH/NHH_02_multi_05.jpg","name_info":"  NHH_02_multi_04","detil1":"主题：美食、生日、甜品","sug":"品类建议：","detil2":"食品、礼品、化妆品、饰品、饮料"},
                    {"data-number":"24","src":"img/ip_photo/NHH/NHH_02_multi_06.jpg","name_info":"  NHH_02_multi_04","detil1":"主题：美食、生日、甜品","sug":"品类建议：","detil2":"食品、礼品、化妆品、饰品、饮料"}
                ]
                for(var p=0 ;p<img_info.length;p++){
                    var img_dom_new =$(" <div  style='display:none' data-number="+ img_info[p].name_info+" class=\"photo_content_list\">\n" +
                        "            <img src="+ img_info[p].src+ ">\n" +
                        "            <div class=\"photo_detail\">\n" +
                        "                <div class=\"photo_detail_text\">\n" +
                        "                    <div class=\"name_info\">\n" +
                        img_info[p].name_info +
                        "                    </div>\n" +
                        "                    <div>\n" +
                        "                        <span>"+img_info[p].detil1+"</span>\n" +
                        "                    </div>\n" +
                        "                    <div>\n" +
                        "                        "+img_info[p].sug+"<span>"+img_info[p].detil2+"</span>\n" +
                        "                    </div>\n" +
                        "                </div>\n" +
                        "                <div class=\"choose\">\n" +
                        "                    <img src=\"img/add.jpg\"/>\n" +
                        "                </div>\n" +
                        "            </div>\n" +
                        "        </div>")
                    $(".photo_content").append(img_dom_new)
                }
            }
            var imgbox = $(".photo_content>.photo_content_list>img");
            for(var m= 0;m<imgbox.length;m++){
                $(imgbox[m]).load(function(){
                  $(this).parent(".photo_content_list").css("display","block")
                });
            }
                $(".lodingboximg").remove()
        }
    }
});
