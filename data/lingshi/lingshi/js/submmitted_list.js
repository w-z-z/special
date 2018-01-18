
var shopping_obj ={
    //选项卡切换
        tab_toggle:function(){
        $("#tab_button div").click(function(){
            $(this).parent().find("div").removeClass("active");
            $(this).addClass("active");
            var url = $(this).data("link");
            var html = "";
            if(url==2){
                html="<div class='active'>"
                   +"<div class='content'>"
                        +"<div class='box-content'>"
                            +"<ul class='submit_list'>"
                                +"<li>"
                                 +"<div>"
                                  +  "<div class='resource-bundle'>"
                                   +     "<div class='resource-warp'>"
                                    +        "<div class='resource resource-time'><span>2017-10-31</span><b class='resource-type'>媒体资源包清单</b></div>"
                                     +       "<div class='resource resource-type'>清单号：68894138772055226</div>"
                                      +      "<div class='resource resource-tel'>联系人信息：王XX  136XXXXXXXX</div>"
                                       + "</div>"
                                        +"<div class='boundle-content'>选择的资源包：形象输出资源包</div>"
                                   +" </div>"
                                    +"<div class='download'><a href=''>下载合作协议</a></div>"
                                +" </div>"
                                +"</li>"
                                 +"<li>"
                                 +"<div>"
                                   +" <div class='resource-bundle'>"
                                       +" <div class='resource-warp'>"
                                          +" <div class='resource resource-time'><span>2017-10-31</span><b class='resource-type'>媒体资源包清单</b></div>"
                                           +" <div class='resource resource-type'>清单号：68894138772055226</div>"
                                           +" <div class='resource resource-tel'>联系人信息：王XX  136XXXXXXXX</div>"
                                       +" </div>"
                                       +" <div class='boundle-content img-content'><span>图片选择：3张</span>授权品类：食品、化妆品</div>"
                                   +" </div>"
                                   +" <div class='download'><a href=''>下载合作协议</a></div>"
                                +" </div>"
                                +"</li>"
                           +" </ul>"
                       +" </div>"
                    +"</div>"
                +"</div>";


            }else{
                html="<div>"
            +"<div class='shopping-title'>"
            +    "<div class='content'>"
            +    "<i class='shopping-icon'></i><span>图库采购清单</span>"
            +   "</div>"
            +"</div>"
            +"<div class='content'>"
            +    "<div class='shopping-content'>"
            +        "<ul class='imgs_list'>"
            +            "<li>"
            +                 "<div class='shopping-img'>"
            +                    "<img src='./img/photo_list.jpg' alt=''>"
            +                    "<span class='c-close'>&times;</span>"
            +                 "</div></li> "
            +            "<li>"
            +                 "<div class='shopping-img'>"
            +                    "<img src='./img/photo_list.jpg' alt=''>"
            +                    "<span class='c-close'>&times;</span>"
            +                 "</div></li> "         
            +            "<li>"
            +                 "<div class='shopping-img'>"
            +                  "<img src='./img/photo_list.jpg' alt=''>"
            +                    "<span class='c-close'>&times;</span>"
            +                 "</div></li> "
            +           "<li>"
            +                 "<div class='shopping-img'>"
            +                    "<img src='./img/photo_list.jpg' >"
            +                    "<span class='c-close'>&times;</span>"
            +                 "</div></li> "
            +            "<li>"
            +                 "<div class='shopping-img'>"
            +                    "<img src='./img/photo_list.jpg' alt=''>"
            +                    "<span class='c-close'>&times;</span>"
            +                 "</div></li> "
            +            "<li class='elem-placerholder'>"
            +                 "<div class='c-empty'>"
            +                    "<span>&nbsp;</span>"
            +                 "</div></li> "
            +        "</ul>"
            +        "<div class=''>"
            +            "<div class='IP-author'>IP授权渠道</div>"
            +            "<div>"
            +                "<ul class='authorized ' id='channel'><li>商超</li><li>线上电商渠道</li><li>全国连锁渠道</li><li>区域性连锁渠道</li><li>KA</li><li>其他特殊渠道</li></ul>"
            +            "</div>"
            +        "</div>"
           +         "<div class=''>"
           +             "<div class='IP-author'>预计产品生产数量规模：</div>"
           +             "<div>"
           +                 "<ul class='authorized' id='scale'><li>1万以内</li><li>1~10万</li><li>10~50万</li><li>50~100万</li><li>50万以上</li></ul>"
           +             "</div>"
           +         "</div>"
           +         "<div class=''>"
           +             "<div class='IP-author'>IP授权品类：</div>"
           +             "<div>"
           +                 "<div class='authorized author-cate'>"
            +                    "<ul class='cate' id='cate'><li class='active'>食品</li><li >服饰</li><li>家居</li><li>化妆</li><li>电子</li><li>箱包</li><li>电器</li></ul>"
            +                    "<div class='cate-goods' id='goods'>"
            +                        "<ul><li data-goodsID='1'>干果蜜饯</li><li data-goodsID='2'>干果蜜饯</li><li data-goodsID='3'>干果蜜饯</li><li data-goodsID='4'>干果蜜饯</li><li data-goodsID='5'>干果蜜饯</li><li data-goodsID='6'>干果蜜饯</li><li data-goodsID='7'>干果蜜饯</li><li data-goodsID='8'>干果蜜饯</li><li data-goodsID='9'>干果蜜饯</li></ul>"
            +                    "</div>"
            +                    "<div class='selected-lists'>"
            +                        "<div class='selected-goods' id='selected-goods'>"
            +                        "已选择："
            +                        "</div>"
            +                   " </div>"
            +                "</div> "
            +            "</div>"
            +        "</div>"
            +        "<div class=''>"
            +            "<div class='IP-author' >IP授权权益：</div>"
            +            "<div>"
            +                "<ul class='authorized' id='equity'><li>独家</li><li>非独家</li></ul>"
            +            "</div>"
            +        "</div>"
            +        "<div class=''>"
            +            "<div class='IP-author'>填写联系方式</div>"
            +            "<div class='form-list'>"
            +               "<div><label><i></i>姓 &nbsp; &nbsp;<span>名：</span></label><input type='text'></div>"
            +               "<div><label><i></i>公 &nbsp; &nbsp;<span>司：</span></label><input type='text'></div>"
            +               "<div><label><i></i>电 &nbsp; &nbsp;<span>话：</span></label><input type='text'> </div>"
            +               "<div><label><i></i>市 场 需 <span>求：</span></label><textarea></textarea></div>"
            +            "</div>"
            +        "</div>"
            +        "<div class='shopping-submit'>"
            +            "<div class='submit-tip'>"
            +                "<p>注意：合作费用仅为图库费用，不包括媒介资源包费用。<br>由于媒体资源的特殊性，暂未开通媒体资源费用，提交清单后，工作人员第一时间与您取得联系，为您提供折扣后的媒介资源包报价"
            +                "</p>"
            +            "</div>"
            +            "<div class='estimated-cost'>"
            +                "<div>预计核算费用</div>"
            +                "<div class='settlement-mode'>"
            +                   "<div class='type-first  active'>"
            +                        "<span>结算方案一：</span>"
            +                        "<b>¥ 50,000.0</b>"
            +                    "</div>"
            +                    "<div class='type-second type-first'>"
            +                        "<span>结算方案二：</span>"
            +                        "<b>¥ 25,000.0+15%分成</b>"
            +                    "</div>"
            +                "</div>"
            +            "</div>"
            +        "</div>"
            +        "<div class='submit-button'>"
            +            "<a  data-toggle='modal' data-target='#modal_view'><b>提交图库采购清单</b></a>"
            +                "<div class='modal fade' tabindex='-1' role='dialog' id='modal_view'>"
            +                  "<div class='modal-dialog' role='document'>"
            +                    "<div class='modal-content'>"
            +                      "<div class='modal-body'>"
            +                          "<div class='modal-pop'>"
            +                            "<h1>提交成功<span></span></h1>"
            +                            "<p>3秒后跳转</p>"
            +                         "</div>"
            +                     "</div>"
            +                    "</div>"
            +                  "</div>"
            +                "</div>"
            +        "</div>"
            +    "</div>"
            +" </div>"
        +"</div>";
            }
            $("#tab_container").html(html);
        });
    },
    //删除图片采集图片
    delete_img:function(){
        $(".tab-content ").on("click",".c-close",function(e){
            var grand_parent = $(this).parent().parent();
            var root_parent = $(this).parent().parent().parent();
            grand_parent.remove();
            if($(".imgs_list li").first().hasClass("elem-placerholder")&&$(".imgs_list li").last().hasClass("elem-placerholder")){
                root_parent.remove();
            }
        })
    },
    //ip授权权益 预计生产数量规模 ip授权品类 单选效果
    single_select:function(){
        $(".tab-content ").on("click","#scale li,#cate li,#equity li",function(e){
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        });
        $(".tab-content ").on("click","#channel li",function(e){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }else{
                $(this).addClass("active");
            }
        });
        $(".tab-content ").on("click","#goods li",function(e){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
                var goods_id = $(this).data("goodsid");
                var selector = "#selected-goods i[data-goodsid='"+goods_id+"']";
                $(selector).parent().remove();
            }else{
                $(this).addClass("active");
                var goods_name = $(this).html();
                var goods_id = $(this).data("goodsid");
                var html_str = "";
                html_str += "<div class='goods_name'><b>"+goods_name+"</b><i data-goodsID="+goods_id+">x</i></div>";
                $("#selected-goods").append(html_str);
            }
        });
        $(".tab-content ").on("click",".settlement-mode .type-first",function(e){
            $(this).parent().find(".type-first").removeClass("active");
            $(this).addClass("active");
        });
        $(".tab-content ").on("click",".goods_name i",function(e){
            var goods_id = $(this).data("goodsid");
            var selector = "#goods ul li[data-goodsid='"+goods_id+"']";
            $(selector).removeClass("active");
            $(this).parent().remove();
        });
    }

}
shopping_obj.tab_toggle();
shopping_obj.delete_img();
shopping_obj.single_select();