/********************************************************************************
 ** @auth： Lin
 ** @date： 2019/12/9 10:34
 ** @desc： 头部和侧边导航栏控制
 ** @Ver:  V1.0.0
 *********************************************************************************/
//侧边悬浮导航
jQuery.fn.anchorGoWhere = function(options){
    var obj = jQuery(this);
    var defaults = {target:0, timer:500};
    var o = jQuery.extend(defaults,options);
    obj.each(function(i){
        jQuery(obj[i]).click(function(){
            var _rel = jQuery(this).attr("href").substr(1);
            switch(o.target){
                case 1:
                    var _targetTop = jQuery("#"+_rel).offset().top;
                    jQuery("html,body").animate({scrollTop:_targetTop},o.timer);
                    break;
                case 2:
                    var _targetLeft = jQuery("#"+_rel).offset().left;
                    jQuery("html,body").animate({scrollLeft:_targetLeft},o.timer);
                    break;
            }
            return false;
        });
    });
};
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        var menu = $(".floor_guide");
        var items = $(".floor");

        var curId = "";

        items.each(function(){
            var m = $(this);
            var itemsTop = m.offset().top;
            if(top > itemsTop-200){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        //给相应的楼层设置cur,取消其他楼层的cur
        var curLink = menu.find(".current");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("current");
            menu.find( "[href=" + curId + "]" ).addClass("current");
        }
        // console.log(top);
    });
    $(".floor_guide a").anchorGoWhere({target:1});
    $(".goTop").anchorGoWhere({target:1});
});

$(function () {
    var gao=($(window).height()/2);
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
        return true;
    } else{
        $(window).scroll(function () {
            var toTop = $(this).scrollTop();
            if (toTop >= 100) {
                $('.header').addClass('header_fixed');
            } else {
                $(".header").removeClass('header_fixed');
            }
            if (toTop >= 500) {
                $('.goTop').css('display','block');
            } else {
                $('.goTop').css('display','none');
            }
            if (toTop >= 700) {
                $('.floor_guide').show();
            } else{
                $('.floor_guide').hide();
            }
        })
    }
});