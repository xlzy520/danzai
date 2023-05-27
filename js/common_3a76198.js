var commonAction = function() {
        var n = !1,
            t = function() {
                var n = {
                    _urlRoot: "",
                    _traditional: !0,
                    _doAjax: function(n, t, e, i) {
                        return i = "function" == typeof i ? i : this.ajaxError, $.ajax({
                            url: this._urlRoot + n,
                            data: t,
                            traditional: this._traditional,
                            crossDomain: !0,
                            xhrFields: {
                                withCredentials: !0
                            },
                            async: !1,
                            dataType: "post" == t.type ? "json" : "jsonp",
                            type: "post" == t.type ? "POST" : "GET",
                            success: function(n) {
                                1 == n.success || 1 == n.status || 1 == n.succ || 200 == n.code || 1 == t.status || 200 == n.status || "ok" == n.status ? e && e(n) : i && i(n)
                            },
                            error: function() {
                                i && i({
                                    msg: "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5"
                                })
                            }
                        })
                    },
                    _fakeAjax: function(n, t) {
                        return setTimeout(function() {
                            n(t)
                        }, 500)
                    },
                    ajaxError: function(n) {
                        alert(n.msg)
                    }
                };
                return n
            },
            e = t(),
            i = {
                initScreen: function(n) {
                    $("html").css("font-size", document.documentElement.clientWidth / 375 * 312.5 + "%"), n && n()
                },
                onorientationchange: function() {
                    function n() {
                        if (90 == window.orientation || -90 == window.orientation) $("#forhorview").css("display", "block");
                        else {
                            {
                                setTimeout(i.initScreen, 300)
                            }
                            $("#forhorview").css("display", "none")
                        }
                    }
                    0 == $("#forhorview").length && $("body").append("<div id='forhorview'><p>\u63a8\u8350\u4f7f\u7528\u7ad6\u5c4f\u6d4f\u89c8\u54e6~</p></div>"), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(t) {
                        n(t)
                    }, !1)
                },
                preloadImg: function() {
                    for (var n = [], t = $("#preload_list img"), e = t.length; e--;) n.push(t.eq(e).data("src"));
                    var i = $("#LoadingMark");
                    n.length ? o.imgLoader.init(n, function() {
                        window.Page && new Page, i.addClass("remove")
                    }, function(n) {
                        i.find(".value").text(n + "%"), i.find("i").width(n + "%")
                    }).load() : (i.remove(), window.Page && new Page)
                },
                fixList: function() {
                    $(".newsList").each(function(n, t) {
                        function e(n) {
                            return n.length < a ? n : n.substr(0, a - 2) + "..."
                        }
                        var i, o = $(t),
                            r = o.find("li"),
                            a = 20,
                            s = 4;
                        a = void 0 === o.attr("data-textLength") ? a : o.attr("data-textLength"), s = void 0 === o.attr("data-rows") ? s : o.attr("data-rows"), r.length >= s ? o.find(".newsMore").show() : o.find(".newsMore").hide();
                        for (var n = r.length; n--;) i = $.trim(r.eq(n).find("a").html()), r.eq(n).find("a").html(e(i))
                    })
                },
                fixBanner: function() {
                    for (var n = $("#slideBox .bd li").length, t = "", e = 0; n > e; e++) t += "<li></li>";
                    $("#slideBox .hd ul").html(t), $(".slideTxtBox ul").each(function(n, t) {
                        $(t).find("li").length < 4 && $(t).find(".more").hide()
                    })
                },
                bindPrototype: function() {
                    Number.prototype.pad2 = function() {
                        return this.pad()
                    }, Number.prototype.pad = function(n) {
                        n || (n = 2);
                        for (var t = String(this), e = 0, i = ""; e < n - t.length; e++) i += "0";
                        return i + t
                    }, Date.prototype.format = function(n) {
                        var t = new Date,
                            t = this,
                            e = t.getMonth() + 1,
                            i = t.getHours(),
                            o = t.getMinutes(),
                            r = t.getDate(),
                            a = t.getSeconds(),
                            s = {
                                yyyy: t.getFullYear(),
                                yy: String(t.getFullYear()).substr(2),
                                MM: e.pad2(),
                                M: e,
                                dd: r.pad2(),
                                d: r,
                                HH: i.pad2(),
                                H: i,
                                mm: o.pad2(),
                                m: o,
                                ss: a.pad2(),
                                s: a,
                                fff: t.getMilliseconds().pad(3)
                            };
                        return n.replace(/([a-zA-Z]+)/g, function(n, t) {
                            return void 0 === s[t] ? t : s[t]
                        })
                    }
                }
            },
            o = {
                imgLoader: {
                    _srcs: [],
                    _onLoaded: null,
                    _onLoading: null,
                    load: function() {
                        function n() {
                            ++r, a._onLoading && a._onLoading(Math.floor(r / o * 100)), r === o && a._onLoaded && a._onLoaded()
                        }
                        var t, e, i = this._srcs,
                            o = i.length,
                            r = 0,
                            a = this;
                        if (!o) return a._onLoaded && a._onLoaded(), this;
                        for (e = o; e--;) t = new Image, t.src = i[e], t.onload = n;
                        return this
                    },
                    init: function(n, t, e) {
                        return this._srcs = n.slice(0), this._onLoaded = t, this._onLoading = e, this
                    }
                },
                formatNumber: function(n) {
                    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                },
                validPhone: function(n) {
                    return /^(13|14|15|16|17|18|19)\d{9}$/.test(n)
                },
                validAccount: function(n) {
                    return !(!n || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/gi.test(n))
                },
                validMail: function(n) {
                    return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(n)
                },
                updateUrl: function(n) {
                    window.history.pushState && window.history.pushState(null, null, n)
                },
                replaceUrl: function(n) {
                    window.history.pushState && window.history.replaceState(null, null, n)
                },
                queryString: function(n, t) {
                    t = void 0 === t ? location.search : t;
                    var e = new RegExp("(?:&|/?)" + n + "=([^&$]+)").exec(t);
                    return e ? e[1] : ""
                },
                stringFormat: function(n) {
                    var t, e = typeof n,
                        i = arguments;
                    switch (e) {
                        case "string":
                            t = n.replace(/({(\d+?)})/g, function(n, t, e) {
                                return i[1 * e + 1]
                            })
                    }
                    return t
                },
                is_weixin: function() {
                    var n = navigator.userAgent.toLowerCase();
                    return "micromessenger" == n.match(/MicroMessenger/i) ? !0 : !1
                },
                is_qq: function() {
                    var n = navigator.userAgent.toLowerCase();
                    return "qq" != n.match(/qq/i) || n.match(/MicroMessenger/i) ? !1 : !0
                },
                is_weibo: function() {
                    var n = navigator.userAgent.toLowerCase();
                    return "weibo" == n.match(/WeiBo/i) ? !0 : !1
                }
            },
            r = {
                versions: function() {
                    {
                        var n = navigator.userAgent;
                        navigator.appVersion
                    }
                    return {
                        trident: n.indexOf("Trident") > -1,
                        presto: n.indexOf("Presto") > -1,
                        webKit: n.indexOf("AppleWebKit") > -1,
                        gecko: n.indexOf("Gecko") > -1 && -1 == n.indexOf("KHTML"),
                        mobile: !!n.match(/AppleWebKit.*Mobile.*/),
                        ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
                        iPhone: n.indexOf("iPhone") > -1,
                        iPad: n.indexOf("iPad") > -1,
                        webApp: -1 == n.indexOf("Safari")
                    }
                }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            },
            a = function(t) {
                return void 0 !== t && (n = !!t), n
            },
            s = function() {
                i.initScreen(), i.onorientationchange(), i.preloadImg(), i.fixBanner(), i.bindPrototype()
            };
        return {
            browser: r,
            debug: a,
            remote: e,
            InitRemote: t,
            fn: o,
            init: s
        }
    }(),
    ca = commonAction;
$(function() {
    commonAction.init()
});