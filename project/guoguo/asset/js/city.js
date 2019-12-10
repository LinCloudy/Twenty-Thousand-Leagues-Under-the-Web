var cityFn = {
    init: function () {
        this.bindEvent();
        this.hot = true;
    },
    bindEvent: function () {
        var self = this;

        $(".citylist dd a").on('click', function () {
            self.hot = false;
            var _all = $(this).parent().children("a").length;
            if ($(".city-hot-tab").length > 0) {
                $(".city-hot-tab").remove();
            }
            $(".citylist").find(".citylist-tab").remove();
            var _num = $(this).index() + 1;

            self.cityListShow(_all, _num, $(this));
        });

        $(".city-hot").on('click', 'a', function () {
            self.hot = true;
            $(".city-hot-tab").remove();
            $(".citylist").find(".citylist-tab").remove();
            var _num = $(this).index() - 1;

            self.cityHotShow(_num, $(this));
        });

        $('.city').on('mouseenter', function () {
            $(this).addClass('current');
        });

        $('.city').on('mouseleave', function () {
            $(this).removeClass('current');
        });

    },
    cityListShow: function (all, num, me) {
        var self = this;
        var _base = 5;
        var _multiple = parseInt((num - 1) / _base) + 1;
        var _arrow = (num - 1) % _base;

        if (all < _multiple * _base) {
            self.cityListTab(me, me.parent().find("a").eq(all - 1), _arrow);
        } else {
            self.cityListTab(me, me.parent().children("a").eq(_multiple * _base - 1), _arrow);
        }

    },
    cityHotShow: function (num, me) {
        var self = this;

        self.cityListTab(me, me.parent(), num);
    },
    cityListTab: function (me, that, arrow) {

        $('.city').unbind('mouseleave');
        setTimeout(function () {
            $('.city').on('mouseleave', function () {
                $(this).removeClass('current');
            });
        }, 100);
        var self = this;
        // console.log(me.text());
        $("#citylist a").removeClass("_selected");
        me.addClass("_selected");

        $.get("/handler/SelectAreaByPriorId", { areaId: me.attr("aid") }, function (data) {

            if (data && data.length > 0) {
                var _text = '';
                _text += '<div class="citylist-tab">';
                $(data).each(function (index, item) {

                    _text += '<a href="javascript:;" v="' + item.WebCode + '" aid="' + item.AreaId + '" _type="' + item.DeliveryType + '">' + item.AreaName + '</a>';
                })
                _text += '<i class="arrow"></i></div>';

                //that.after(_text);
                $(".citylist").find(".arrow").css("left", 12 + arrow * (me.width() + 8));


                if (self.hot) {
                    that.after('<div class="city-hot-tab clearfix">' + _text + '</div>');
                    $(".city-hot-tab").find(".arrow").css("left", 99 + arrow * (me.width() + 21));
                } else {
                    that.after('<div class="citylist-tab">' + _text + '</div>');
                    $(".citylist").find(".arrow").css("left", 12 + arrow * (me.width() + 8));
                }

                $(".citylist-tab a").on("click", function () {
                    app.changecity(this);
                })
            } else {
                app.changecity(me);
            }

        });
        
    }
};
$(function () {
    cityFn.init();

    $(".citytab span").mouseover(function () {
        var index = $(this).index(".citytab span");
        $(this).addClass("active").siblings().removeClass("active");
        $($(".citylist")[index]).addClass("active").siblings().removeClass("active");
    });
    $("#citylist .headline a").on("click", function () {

        $("._selected").removeClass("_selected");

        $(this).addClass("_selected");

        app.changecity(this);
    })
})
