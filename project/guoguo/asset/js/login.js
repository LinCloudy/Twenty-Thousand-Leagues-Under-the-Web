/********************************************************************************
 ** @auth： Lin
 ** @date： 2019/12/12 13:39
 ** @desc： <---->
 ** @Ver:  V1.0.0
 *********************************************************************************/
$(function () {
    //登录转换
    $(".login-tab-l").click(function(){
        $(".login-box").hide();
        $(".QR-login").show();
        $(".login-tab-l a").addClass('checked');
        $(".login-tab-r a").removeClass('checked')
    });
    $(".login-tab-r").click(function(){
        $(".login-box").show();
        $(".QR-login").hide();
        $(".login-tab-r a").addClass('checked');
        $(".login-tab-l a").removeClass('checked')
    });
})