nie.define("common", function() {
    var e = {
        init: function() {
            this.bind()
        },
        bind: function() {
            var e = this;
            $(".btnOrder").click(function() {
                e.showPop("inputPop", "orderBox")
            }), $("#gzGzh").click(function() {
                e.showPop("attention", "att_Box")
            }), $(".container").on("click", ".attention,.close", function() {
                e.hidePop()
            })
        },
        scrollHandle: function() {
            function e() {
                t = $(document.body)[0].scrollHeight - n - a.height(), o = document.body.scrollTop || document.documentElement.scrollTop, console.log(o, t), o >= t ? $(".navBox").addClass("poab") : $(".navBox").removeClass("poab")
            }
            var o, t, n = $(window).height(),
                a = $(".site_bottom");
            $(window).scroll(function() {
                e()
            }), e()
        },
        touchsj: function(e) {
            e.preventDefault()
        },
        getAngle: function(e, o) {
            return 180 * Math.atan2(o, e) / Math.PI
        },
        getDirection: function(e, o, t, n) {
            var a = this,
                r = t - e,
                i = n - o,
                c = 0;
            if (Math.abs(r) < 2 && Math.abs(i) < 2) return c;
            var d = a.getAngle(r, i);
            return d >= -135 && -45 >= d ? c = 1 : d > 45 && 135 > d ? c = 2 : d >= 135 && 180 >= d || d >= -180 && -135 > d ? c = 3 : d >= -45 && 45 >= d && (c = 4), c
        },
        changePage: function() {
            var e = this,
                o = $("#LoadingMark");
            o.addClass("remove"), o.remove(), $("#wrap").addClass("active"), $(".page").eq(0).addClass("on"), $(".logo,.sound_button").addClass("on"), document.addEventListener("touchstart", function(e) {
                startx = e.touches[0].pageX, starty = e.touches[0].pageY
            }, !1), document.addEventListener("touchend", function(o) {
                var t, n;
                t = o.changedTouches[0].pageX, n = o.changedTouches[0].pageY;
                var a = e.getDirection(startx, starty, t, n);
                switch (a) {
                    case 0:
                        alert("\u672a\u6ed1\u52a8\uff01");
                        break;
                    case 1:
                        alert("\u5411\u4e0a\uff01");
                        break;
                    case 2:
                        alert("\u5411\u4e0b\uff01");
                        break;
                    case 3:
                        alert("\u5411\u5de6\uff01");
                        break;
                    case 4:
                        alert("\u5411\u53f3\uff01")
                }
            }, !1)
        },
        orderInit: function() {
            {
                var e = this;
                nie.require("nie.util.gameorder_m")
            }
            GameOrder.init({
                container: "#gameOrderCtn",
                channel: "gw",
                option: {
                    phone_type: 1,
                    captcha_type: 2,
                    email_type: 0
                },
                product: "269_878_2019_09_04",
                callback: function(o, t) {
                    return o ? (alert("\u606d\u559c\u60a8\u9884\u7ea6\u6210\u529f\uff01"), e.orderNUmInit(), GameOrder.hide(), GameOrder.clear()) : alert(t), !0
                }
            });
            var o;
            $(".container").on("click", ".btnOrder", function() {
                $("body,html").addClass("noscroll"), GameOrder.show(), e.showPop("orderPop", "orderBox"), o = $(window).scrollTop()
            }), $("input").blur(function() {
                $(window).scrollTop(o)
            }), $(".orderBox .close-btn").click(function() {
                GameOrder.hide(), GameOrder.clear(), e.hidePop(), $("body,html").removeClass("noscroll")
            })
        },
        showPop: function(e, o) {
            var t = $("." + e);
            if ("inputPop" != e && t.height($("body").height()), $(".pop").removeClass("on"), t.addClass("on"), "attention" != e && "inputPop" != e) {
                var n = $(window).scrollTop() + (document.documentElement.clientHeight / 2 - t.find("." + o).height() / 2);
                t.find("." + o).css({
                    top: n,
                    "margin-top": 0
                })
            }
            if ("inputPop" == e) {
                var n = $(window).scrollTop() + (document.documentElement.clientHeight / 2 - t.height() / 2);
                t.css({
                    top: n,
                    "margin-top": 0
                }), $(".Layer").addClass("on")
            }
        },
        hidePop: function() {
            $(".pop,.Layer").removeClass("on")
        }
    };
    e.init()
});