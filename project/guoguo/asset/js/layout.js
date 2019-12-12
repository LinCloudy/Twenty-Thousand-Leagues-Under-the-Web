/********************************************************************************
 ** @auth： Lin
 ** @date： 2019/12/9 15:45
 ** @desc： 初始化布局
 ** @Ver:  V1.0.0
 *********************************************************************************/
$(function () {


    //我的易果
    $('.myyiguo').hover(function(){
        $(this).addClass('current');
    },function(){
        $(this).removeClass('current');
    });

    //手机易果
    $('.mobile').hover(function(){
        $(this).addClass('current');
    },function(){
        $(this).removeClass('current');
    });

    //购物车
    $('.shopping_cart').hover(function(){
        $('.shopping_list').fadeIn("0");
    },function(){
        $('.shopping_list').delay(1000).fadeOut("1000");
    });
    $('.shopping_list ul li').hover(function(){
        $(this).find('.del').css('visibility','visible');
    },function(){
        $(this).find('.del').css('visibility','hidden');
    });

    //轮播图
    $(".prev,.next").hover(function () {
        $(this).fadeTo("show", 0.7);
    }, function () {
        $(this).fadeTo("show", 0.3);
    });
    $(".banner-slider").hover(function () {
        $(this).find(".prev,.next").fadeTo("show", 0.3);
    }, function () {
        $(this).find(".prev,.next").hide();
    });
    $(".banner-slider").slide({
        titCell: ".b-dot ul", mainCell: ".b-slider", effect: "fold", autoPlay: true, interTime: 4500, autoPage: true,
        endFun: function (i, c) {
            $(".b-slider li").removeClass("current").eq(i).addClass("current");
        }
    });
    
    //商品类别导航栏
    $('.catalogs').hover(function(){
        $('.catalogs .catalogs_list').show();
    },function(){
        $('.catalogs .catalogs_list').hide();
    });
    $('.catalogs_list .item').hover(function(){
        $(this).addClass('current');
        $(this).find('.sub_item').show();
    },function(){
        $(this).removeClass('current');
        $(this).find('.sub_item').hide();
    });

});