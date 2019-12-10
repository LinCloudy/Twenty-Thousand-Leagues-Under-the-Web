/********************************************************************************
 ** @auth： Lin
 ** @date： 2019/12/9 10:12
 ** @desc： 主页业务控制
 ** @Ver:  V1.0.0
 *********************************************************************************/
var app = {};

//商品类别导航栏切换
app.changeCategory = function changeCategory() {
    var show_category = $.cookie('show_category');
    if (show_category == "true" || show_category == null) {
        $(".catalogs_list").addClass("block");
    } else {
        $(".catalogs_list").removeClass("block");
    }
    $(".catalogs_title").click(function () {
        if ($(".catalogs_list").hasClass("block")) {
            $(".catalogs_list").removeClass("block");
            $(".catalogs_list").hide();
            $.cookie("show_category", "false", { expires: 0, path: '/' });
        } else {
            $(".catalogs_list").addClass("block");
            $(".catalogs_list").show();
            $.cookie("show_category", "true", { expires: 7, path: '/' });
        }
    })
};
app.init = function () {

};
