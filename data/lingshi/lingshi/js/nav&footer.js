/**
 * Created by Administrator on 2017-11-12.
 */

$(function () {
    /*导航条*/
    var nav=$("<div  class=\"navout\">\n" +
        "<div class=\"nav_in_one\">\n" +
        "<div class=\"nav\">\n" +
        "<div class=\"nav_header\">\n" +
        "    <div class=\"nav_logo\">\n" +
        "        <img  src=\"./img/logo.png\"/>\n" +
        "        <span  >CBE CLOUD</span>\n" +
        "    </div>\n" +
        "    <div style='float: right'>\n" +
        "      <a href=\"submitted_list.html\"> \n" +
        "        <span class=\"nav_h_text\">\n" +
        "            <img src=\"./img/car.png\"/>\n" +
        "            <span>采购清单</span>\n" +
        "        </span>\n" +
        "        </a>\n" +
        "        <span class=\"person\">\n" +
        "            &nbsp;\n" +
        "            <img src=\"./img/person.png\"/>\n" +
        "               <span>个人账号</span>\n" +
        "            <span class=\"glyphicon collapse_button  glyphicon-chevron-down\" ></span>\n" +
        "             <div class=\"collapse_info\">\n" +
        "                 <div><a href=\"index.html\">个人信息</a></div>\n" +
        "                 <div><a href=\"register.html\">退出登录</a></div>\n" +
        "             </div>\n" +
        "        </span>\n" +
        "    </div>\n" +
        "</div>" +
        "</div>\n" +
        "</div>\n" +
        "<div class=\"nav_content_out\">\n" +
        "<div class=\"nav_content\">\n" +
        "    <ul class=\"nav_content_ul\">\n" +
        "        <li  >\n" +
        "            <a  style=\"padding: 0;border:none \" href=\"#\"><span class=\"glyphicon glyphicon-menu-hamburger\"></span>&nbsp; &nbsp;系统导航</a>\n" +
        "            <div class=\"nav_content_collapse_div\">\n" +
        "                <ul class=\"nav_content_collapse_ul\">\n" +      
        "                    <li><a href=\"recommend.html\">匹配系统</a><span class=\"glyphicon glyphicon-menu-right\"></span></li>\n" +
        "                    <li><a href=\"media_system.html\">媒介系统</a><span class=\"glyphicon glyphicon-menu-right\"></span></li>\n" +
        "                    <li><a href=\"photo_system.html\">图片系统</a><span class=\"glyphicon glyphicon-menu-right\"></span></li>\n" +
        "                    <li><a href=\"submitted_list.html\">IP采购系统</a><span class=\"glyphicon glyphicon-menu-right\"></span></li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </li>\n" +
        "        <li>\n" +
        "            <span class=\"oblong\"></span>\n" +
        "            <a  href=\"recommend.html\">匹配系统</a>\n" +
        "        </li>\n" +
        "        <li>\n" +
        "            <span class=\"oblong\"></span>\n" +
        "            <a href=\"media_system.html\">媒介系统</a>\n" +
        "        </li>\n" +
        "        <li>\n" +
        "            <span class=\"oblong\"></span>\n" +
        "            <a  href=\"photo_system.html\">图库系统</a>\n" +
        "        </li>\n" +
        "        <li>\n" +
        "            <span class=\"oblong\"></span>\n" +
        "            <a  href=\"submitted_list.html\">IP采购系统</a>\n" +
        "        </li>\n" +
        "    </ul>\n" +
        "</div>"+
        "</div>")
     $("#nav").html(nav)
    var temp= true
    var  temp1=true
    /*点击展开*/
    $(".person").click(function(){
        if(temp){
            $(".collapse_button").removeClass(" glyphicon-chevron-down")
            $(".collapse_button").addClass(" glyphicon-chevron-up")
            $(".collapse_button").css("background-color","#182B48")
            $(".collapse_info").css("background-color","#182B48")
            $(".collapse_info").css("display","block")
            temp=false
        }else{
            $(".collapse_button").removeClass(" glyphicon-chevron-up")
            $(".collapse_button").addClass(" glyphicon-chevron-down")
            $(".collapse_info").css("background-color","inherit")
            $(".collapse_info").css("display","none")
            $(".collapse_button").css("background-color","inherit")
            temp=true
        }
    })
    /*导航hover*/
    $((".nav_content_ul>li")).hover(function(){
        if($(this).hasClass("li-active")){
            return
        }
        if(temp1){
            $(this).css("background","white")
            $($(this).children("a")).css("color","#3D74CF")
            $($(this).children(".nav_content_collapse_div")).css("display","block")
            temp1=false
        }else{
            $(this).css("background","inherit")
            $($(this).children("a")).css("color","white")
            $($(this).children(".nav_content_collapse_div")).css("display","none")
            temp1=true
        }
    })
     /*页脚*/
    var footer=$("<div class=\"footer\">\n" +
        "<div class=\"footerinfo\">\n" +
        "    <div>\n" +
        "        <img src=\"img/logo.png\"/>\n" +
        "    </div >\n" +
        "    <div class=\"footer_text\">\n" +
        "        Copyright ? 2015-2020 ChocolateBox. All Rights Reserved. 京ICP备12345678号-11\n" +
        "    </div>\n" +
        "</div>\n" +
        "</div>")
    $("#footer").html(footer)
    window.onload=function(){
        $('#status').fadeOut();
        $('#preloader').delay(300).fadeOut('slow');

    }
    /*palceholder 兼容ie*/
    $(function(){
        //判断浏览器是否支持placeholder属性
        supportPlaceholder='placeholder'in document.createElement('input');
        placeholder=function(input){
            var text = input.attr('placeholder');
            defaultValue = input.defaultValue;
            if(!defaultValue){
                input.val(text).addClass("phcolor");
            }
            input.focus(function(){
                if(input.val() == text){
                    $(this).val("");
                }
            })
            input.blur(function(){
                if(input.val() == ""){
                    $(this).val(text).addClass("phcolor");
                }
            });
            //输入的字符不为灰色
            input.keydown(function(){
                $(this).removeClass("phcolor");
            })
        }
        //当浏览器不支持placeholder属性时，调用placeholder函数
        if(!supportPlaceholder){
            $('input').each(function(){

                text = $(this).attr("placeholder");

                if($(this).attr("type") == "text"){

                    placeholder($(this));
                }
            })
        }
    })
    /*弹框定位*/
    function tooltip(){
        var currentheight=$(window).height()/2-150+"px"
        var currentwidth=$(window).width()/2-250+"px"
        $(".tooltip_note>div").css("top",currentheight)
        $(".tooltip_note>div").css("left",currentwidth)
    }
    tooltip()
    if($(".pagename").data().pagename=="recommend"){
        $($(".nav_content_ul>li")[1]).addClass("li-active")
    }else if($(".pagename").data().pagename=="meidia"){
        $($(".nav_content_ul>li")[2]).addClass("li-active")
    }else if($(".pagename").data().pagename=="photo"){
        $($(".nav_content_ul>li")[3]).addClass("li-active")
    }else if($(".pagename").data().pagename=="summitted"){
        $($(".nav_content_ul>li")[4]).addClass("li-active")
    }else if($(".pagename").data().pagename==undefined){
        $($(".nav_content_ul>li")[1]).addClass("li-active")
    }
})