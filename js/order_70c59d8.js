nie.define("Order", function() {
    var e = nie.require("nie.util.newgame_m"),
        i = !1,
        t = {
            init: function() {
                e.init({
                    channel: "netease",
                    product: "344_990_2020_12_31",
                    code: "7eaf9ca507fb7ae9",
                    target: ".orderBtn",
                    submitBefore: function() {
                        return !0
                    },
                    callback: function(i, t, n) {
                        return i ? (e.hide(), void $(".resultPop").addClass("on").find("resultTip").html("\u9884\u7ea6\u6210\u529f\uff01")) : n && 201 == n.status ? (e.hide(), alert(n.msg), !0) : !1
                    },
                    modules: [],
                    os_link: {
                        getCode: "https://dora.webcgi.163.com/api/344_990_2020_12_31/get_authcode_apnt",
                        getCodeHash: {
                            mobile: "mobile"
                        },
                        order: "https://dora.webcgi.163.com/api/344_990_2020_12_31/verify_authcode",
                        orderHash: {
                            mobile: "mobile"
                        }
                    }
                })
            }
        };
    return MShare.init({
        debug: !1,
        tag: ["wx-open-launch-weapp"],
        ready: function() {
            0 == i && (t.init(), i = !0)
        }
    }), 0 == i && (t.init(), i = !0), {
        fn: t
    }
});