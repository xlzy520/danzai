! function(e, t) {
    var n = function() {
            function e(e) {
                "string" == typeof e && (e = [e]);
                for (var n = 0; n < e.length; n++) t("#js_mshare_debug_list").append('<li style="word-break: break-all;border-bottom: 1px solid darkred;">' + e[n] + "</li>")
            }
            var n = '<div style="position: fixed;left: 0;bottom: 0;width:100%;z-index:100;">						<a id="js_mshare_debug_btn" href="javascript:void(0)" style="display: block;width:40px;height:40px;background:orangered;color:white;text-decoration: none;font-size: 40px;text-align: center;line-height: 50px;">^</a>						<ul id="js_mshare_debug_list" style="background:white;display: block;list-style:none;width:100%;margin: 0;padding: 0;border: 1px solid orangered;max-height: 400px;overflow: auto;font-size: 14px;display: none;">						</ul>					</div>',
                r = !1,
                o = [];
            return {
                init: function() {
                    r = !0, t(document.body).append(n), t("#js_mshare_debug_btn").bind("click", function() {
                        t("#js_mshare_debug_list").toggle()
                    }), e(o), o = []
                },
                log: function(t) {
                    r ? e(t) : o.push(t)
                }
            }
        }(),
        r = function() {
            function t(e) {
                var t = document.createElement("a");
                t.href = e, this.url = e, this.get = function(e) {
                    var t = new RegExp("(?:&|/?)" + e + "=([^&$]+)").exec(this.url);
                    return t ? t[1] : ""
                }, this.set = function(e, n) {
                    var r = this.get(e);
                    r ? t.search = t.search.replace(new RegExp(e + "=([^&$]+)"), e + "=" + n) : t.search += t.search.indexOf("?") > -1 ? "&" + e + "=" + n : "?" + e + "=" + n, this.url = t.href
                }
            }

            function n(e) {
                for (var t = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], r = 0; e > r; r++) pos = Math.round(Math.random() * (n.length - 1)), t += n[pos];
                return t
            }

            function r(e) {
                return "string" != typeof e ? e : e.indexOf("%25") > -1 ? e : encodeURIComponent(e)
            }
            return {
                UrlParse: function(e) {
                    return new t(e)
                },
                randomWord: n,
                getStore: function(t) {
                    return e.localStorage ? e.localStorage.getItem(t) : ""
                },
                setStore: function(t, n) {
                    return e.localStorage ? e.localStorage.setItem(t, n) : void 0
                },
                encode: r
            }
        }(),
        o = function() {
            function n(e, t) {
                var n = document,
                    r = n.head || n.getElementsByTagName("head")[0] || n.documentElement,
                    o = n.createElement("script");
                o.onload = t, o.onerror = function() {}, o.async = !0, o.src = e[0], r.appendChild(o)
            }

            function r(e, t) {
                var n = {};
                for (var r in e) n[r] = e[r];
                for (var r in t) n[r] = t[r];
                return n
            }

            function o(e) {
                var n = "https://wxsign.nie.netease.com/sharecom/wxjs.php";
                location.href.indexOf("eggy-go.com") > -1 && (n = "https://wxsign.nie.netease.com/sharecom/wxjs_wx514c8f26b11fc6e2.php"), location.href.indexOf("eggygogame.com") > -1 && (n = "https://wxsign.nie.netease.com/sharecom/wxjs_wx8e82ca6b5aa7a550.php"), t.ajax({
                    url: n,
                    data: {
                        url: location.href,
                        type: "jsonp"
                    },
                    async: !1,
                    dataType: "jsonp",
                    success: function(t) {
                        t.appId && e(t)
                    }
                })
            }

            function a(t) {
                n([p], function(n) {
                    n.config || (n = e.wx), o(function(e) {
                        var r = ["onMenuShareTimeline", "onMenuShareQQ", "onMenuShareAppMessage", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "showOptionMenu", "hideOptionMenu"],
                            o = [];
                        t.wxapi && t.wxapi.length && (r = r.concat(t.wxapi)), t.wxtag && t.wxtag.length && (o = o.concat(t.wxtag)), n.config({
                            debug: !1,
                            appId: e.appId,
                            timestamp: e.timestamp,
                            nonceStr: e.nonceStr,
                            signature: e.signature,
                            jsApiList: r,
                            openTagList: o
                        }), n.ready(function() {
                            _ = !0;
                            var e = [];
                            t.hideMoments && e.push("menuItem:share:timeline"), t.hideFriend && e.push("menuItem:share:appMessage"), e.length && n.hideMenuItems({
                                menuList: e
                            }), w && s(w), t.ready && t.ready()
                        }), n.error(function() {})
                    })
                })
            }

            function i() {
                n([m], function() {
                    _ = !0, w && c(w)
                })
            }

            function s(e) {
                if (!_) return void(w = e);
                var t = {
                    title: e.title,
                    desc: e.desc,
                    link: e.url,
                    imgUrl: e.imgurl,
                    type: "",
                    dataUrl: "",
                    success: function() {},
                    cancel: function() {}
                };
                wx.onMenuShareAppMessage(r(t, {
                    success: function() {
                        e.callback && e.callback({
                            type: 1,
                            type_en: "friend",
                            channel: g
                        })
                    }
                })), wx.onMenuShareQQ(r(t, {
                    success: function() {
                        e.callback && e.callback({
                            type: 3,
                            type_en: "qq",
                            channel: g
                        })
                    }
                })), wx.onMenuShareQZone(r(t, {
                    success: function() {
                        e.callback && e.callback({
                            type: 4,
                            type_en: "qzone",
                            channel: g
                        })
                    }
                })), wx.onMenuShareTimeline(r(t, {
                    success: function() {
                        e.callback && e.callback({
                            type: 2,
                            type_en: "moments",
                            channel: g
                        })
                    },
                    title: e.moments_title || e.title
                })), w = null
            }

            function c(t) {
                if (!_) return void(w = t);
                var n = {
                    title: t.title,
                    desc: t.desc,
                    share_url: t.url,
                    image_url: t.imgurl
                };
                e.mqq.data.setShareInfo(n), t.callback && t.callback({
                    type: 0,
                    channel: g
                }), w = null
            }

            function h(e) {
                var n = '<meta itemprop="image" content="' + e.imgurl + '" /> 					<meta name="description" itemprop="description" content="' + e.desc + '" />',
                    r = t("head meta[itemprop=image]")[0],
                    o = t("head meta[itemprop=description]")[0];
                r && o ? (r.content = e.imgurl, o.content = e.desc) : t("head").append(n), u(e)
            }

            function l(t) {
                if ("other" == g || t.type) {
                    var n = "";
                    switch (t.type) {
                        case "facebook":
                            n = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t.url) + "&picture=" + encodeURIComponent(t.imgurl) + "&description=" + encodeURIComponent(t.desc) + "&title=" + encodeURIComponent(t.title) + "&display=popup&ref=plugin&src=share_button";
                            break;
                        case "twitter":
                            n = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t.desc) + "&url=" + encodeURIComponent(t.url);
                            break;
                        case "line":
                            n = "https://lineit.line.me/share/ui?url=" + encodeURIComponent(t.url);
                            break;
                        case "weibo":
                            n = "http://service.weibo.com/share/share.php?c=nie&content=gb2312&source=nie&title=" + encodeURIComponent(t.title) + "&url=" + encodeURIComponent(t.url) + "&pic=" + t.imgurl;
                            break;
                        case "yixin":
                            n = "http://open.yixin.im/share?appkey=yx3ae08a776bf04178a583cb745fb6aa0c&type=webpage&url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&desc=" + encodeURIComponent(t.desc) + "&pic=" + encodeURIComponent(t.imgurl);
                            break;
                        case "qqzone":
                            n = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(t.title) + "&desc=" + encodeURIComponent(t.desc) + "&pics=" + encodeURIComponent(t.imgurl)
                    }
                    n && setTimeout(function() {
                        e.location.href = n
                    }, 300)
                } else switch (g) {
                    case "facebook":
                        e.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t.url) + "&picture=" + encodeURIComponent(t.imgurl) + "&description=" + encodeURIComponent(t.desc) + "&title=" + encodeURIComponent(t.title) + "&display=popup&ref=plugin&src=share_button", "facebook");
                        break;
                    case "twitter":
                        e.open("https://twitter.com/share?url=" + encodeURIComponent(t.url) + "&text=" + encodeURIComponent(t.desc), "twiiter");
                        break;
                    case "line":
                        e.open("line://msg/text/" + encodeURIComponent(t.url), "line");
                        break;
                    case "weibo":
                        e.open("http://service.weibo.com/share/share.php?c=nie&content=gb2312&source=nie&title=" + encodeURIComponent(t.title) + "&url=" + encodeURIComponent(t.url) + "&pic=" + t.imgurl, "weibo")
                }
                t.callback && t.callback({
                    type: 0,
                    channel: g
                })
            }

            function u(t) {
                if (document.title = t.title, e.history.replaceState) try {
                    e.history.replaceState(null, t.title, t.url)
                } catch (n) {
                    return t.callback && t.callback({
                        type: 0,
                        channel: g,
                        msg: n.message
                    })
                }
                t.callback && t.callback({
                    type: 0,
                    channel: g
                })
            }

            function d(e) {
                "wechat" == g ? a(e) : "qq" == g ? i() : _ = !0
            }
            var p = "//res.wx.qq.com/open/js/jweixin-1.6.0.js",
                m = "//open.mobile.qq.com/sdk/qqapi.js?_bid=152",
                f = {},
                g = "",
                v = "",
                _ = !1,
                w = null;
            return {
                initParam: function() {
                    var e = navigator.userAgent;
                    g = "other", v = "other", e.match(/MicroMessenger\/([\d\.]+)/i) && (g = "wechat"), e.match(/QQ\/([\d\.]+)/i) && (g = "qq"), e.match(/WeiBo/i) && (g = "weibo"), e.match(/\[FB|Facebook/i) && (g = "facebook"), e.match(/Twitter/i) && (g = "twitter"), e.match(/Line/i) && (g = "line"), "undefined" != typeof yyy && yyy.isInApp && yyy.isInApp() ? g = "music" : e.match(/NeteaseMusic/i) && (g = "music"), e.match(/iphone os|ipad/i) && (v = "ios"), e.match(/android/i) && (v = "android")
                },
                init: d,
                setShare: function(n) {
                    var r = t.extend({
                        title: document.title,
                        desc: document.desc,
                        url: e.location.href,
                        imgurl: "https://webinput.nie.netease.com/img/nie/icon.png/128"
                    }, n);
                    switch (f = r, g) {
                        case "wechat":
                            s(r);
                            break;
                        case "qq":
                            n.isnew ? h(r) : c(r);
                            break;
                        case "weibo":
                            u(r)
                    }
                },
                openShare: function(n) {
                    var r = t.extend({
                        title: document.title,
                        desc: document.desc,
                        url: e.location.href,
                        imgurl: "https://webinput.nie.netease.com/img/nie/icon.png/128"
                    }, n);
                    n.url ? f = r : f.type = n.type, l(f)
                },
                updateShare: function(e) {
                    f = t.extend(f, e), this.setShare(f)
                },
                getClient: function() {
                    return g
                },
                getOS: function() {
                    return v
                },
                getShareParam: function() {
                    return f
                }
            }
        }(),
        a = function() {
            function o(e, o) {
                "number" != typeof o && (o = 2e3);
                var a = function(e) {
                    var a = [],
                        s = "";
                    for (var c in e) e[c] && a.push(c + "=" + r.encode(e[c]));
                    if (s = i + "?" + a.join("&") + "&_t=" + Math.random(), o) {
                        var h = t("<iframe name='img_report' />");
                        h.css("display", "none").appendTo("body");
                        try {
                            t(h[0].contentWindow.document.body).append('<img src="' + s + '" />')
                        } catch (l) {
                            (new Image).src = s
                        }
                        setTimeout(function() {
                            h.remove()
                        }, o)
                    } else(new Image).src = s;
                    console.log(s), n.log(s)
                };
                setTimeout(function() {
                    a(e)
                }, o)
            }

            function a(e) {
                var t = [],
                    n = "";
                for (var o in e) e[o] && t.push(o + "=" + r.encode(e[o]));
                n = i + "?" + t.join("&") + "&_t=" + Math.random(), navigator && navigator.sendBeacon && navigator.sendBeacon(n, null)
            }
            var i = e.location.hostname.match(/\.163\.com|\.netease\.com|\.16163\.com|\.eggygogame\.com/i) ? "https://bee.tc.netease.com/record_one" : "https://bee.tc.easebar.com/record_one";
            return {
                report: o,
                closeReport: a
            }
        }(),
        i = function() {
            function n() {
                return p ? !1 : (r(), o(), a(), "other" == s.getClient() && c(), void(p = !0))
            }

            function r() {
                var e = document.createElement("link");
                e.href = "https://nie.res.netease.com/comm/js/nie/util/mshare/css/share-dialog/mobile-share.css", e.rel = "stylesheet", document.head.appendChild(e)
            }

            function o() {
                m = document.createElement("div"), m.id = "NIE-share-m", m.className = "NIE-share-m", document.body.appendChild(m);
                var e = '<%if( type == "other") {%>\n<div class="NIE-share_ctrl">\n    <div class="NIE-share_buttons">\n        <a class="NIE-share-btn_cp" href="javascript:void(0)"><i class="sharefont">&#xa0004;</i><em>\u590d\u5236\u94fe\u63a5</em></a>\n        <a class="NIE-share-btn_wx" href="javascript:void(0)"><i class="sharefont">&#xa0005;</i><em>\u5fae\u4fe1</em></a>\n        <a class="NIE-share-btn_wb" href="javascript:void(0)"><i class="sharefont">&#xa0003;</i><em>\u5fae\u535a</em></a>\n        <a class="NIE-share-btn_qq" href="javascript:void(0)"><i class="sharefont">&#xa0006;</i><em>QQ\u7a7a\u95f4</em></a>\n    </div>\n    <div class="NIE-share_qrcode">\n        <div>\n            <a class="NIE-btn-close "><i class="sharefont ">&#xa0001;</i></a>\n            <p><%=referText.qnCoder%></p>\n            <span></span>\n        </div>\n    </div>\n    <div class="NIE-share_link">\n        <div>\n            <a class="NIE-btn-close "><i class="sharefont ">&#xa0001;</i></a>\n            <p><%=referText.copyLink%></p>\n            <span></span>\n        </div>\n    </div>\n</div>\n<%}else{%>\n<div class="NIE-share-guide">\n    <div class="arrow_line">\n        <em></em><i></i><span></span>\n    </div>\n    <p><%=guideText%></p>\n</div>\n<%}%>',
                    n = tmpl(e, {
                        type: s.getClient(),
                        guideText: f.guideText,
                        referText: g
                    });
                m.innerHTML = n, m = t(m)
            }

            function a() {
                m[0].addEventListener("click", function(e) {
                    var n = e.target;
                    t(n).hasClass("NIE-btn-close") || t(n).parent().hasClass("NIE-btn-close") ? (i(), e.stopPropagation()) : (t(n).hasClass("NIE-share_buttons") || t(n).hasClass("NIE-share_qrcode") || t(n).hasClass("NIE-share_link") || t(n).hasClass("NIE-share-m")) && (m.removeClass("show"), setTimeout(function() {
                        m.hide(), i()
                    }, 300))
                }, !1), m[0].addEventListener("touchmove", function(e) {
                    e.preventDefault()
                }, !1), "other" == s.getClient() && (m.find(".NIE-share-btn_cp")[0].addEventListener("click", function(e) {
                    m.find(".NIE-share_ctrl").addClass("show_link"), e.stopPropagation()
                }, !1), m.find(".NIE-share-btn_wx")[0].addEventListener("click", function(e) {
                    h(), m.find(".NIE-share_ctrl").addClass("show_qrcode"), e.stopPropagation()
                }, !1), m.find(".NIE-share-btn_wb")[0].addEventListener("click", function() {
                    s.openShare({
                        type: "weibo"
                    })
                }, !1), m.find(".NIE-share-btn_qq")[0].addEventListener("click", function() {
                    s.openShare({
                        type: "qqzone"
                    })
                }, !1))
            }

            function i() {
                var e = m.find(".NIE-share_ctrl");
                e.removeClass(e.hasClass("show_qrcode") ? "show_qrcode" : "show_link")
            }

            function c() {
                m.find(".NIE-share_link div span")[0].innerHTML = l()
            }

            function h() {
                function t() {
                    var e = new d(r, {
                        width: 400,
                        height: 400,
                        icon: f.qrcodeIcon == v ? n : f.qrcodeIcon
                    });
                    e.makeCode(l())
                }
                if (e.location.hostname.indexOf(".163.com") < 0) {
                    var n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAHOyDIJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF9Z2k71hk////+s7S5gET/efp6BMj6ic2/vP07DxK/vn5+Le88nuE/Nzf/e3u////N/82YwAAABB0Uk5T////////////////////AOAjXRkAAAZnSURBVHjaRIxBDsAwCMNo6l3GNP7/25bSdTkQC0W2CFXCPpLs0LWQF8gvt/q8E1247y2ZhVmNXgaekv3eIYDgTH5+hBVITBYQk4+JnYUdZAXIVqhtTOxMDJxAFpDJzMTGBEIQR7IwcUGYjCwgaWSn8wMEYIMMlwAEQRhsuEaSne//tmJ2alf84sbBtxHKJP/Alpri0aIYwNxFY7KscieVTR4rbqvhAjo09E3vKZowbp4u7a74QDlAuKR9DjHmN53gYulrvpQqAKFkkAMhDALAgpRaYdv//1agat1Nk71onHiAGQz2H9Tf3XCh98/uK0htQnAh9kj0zEmCapAt0zW8b0h7pIg2DnmzrfMQBJcly4oEO4vtqqgBm1fPOH6saQiJr1L8zU8jC+PjbKJi6m+IAtVNw4dRb5813CYPMnPE/TSn9O6e43ihDHTMNenrllbqVo1OARgpoyQGQRiIYohAgOD9b9sNONZiW2XED2YNMfsS82ij/2sbvt3Jjoj0aH1n+7pi+iXMqtpGH5jD9SoszOKncLCFzsIEPGonJ9aiTX1xWCv5M+yColfDAdygjwIfnwc0yCFkMRMrBYHa2fX9vEQOjdthYrNIRkFweK0slhby7/YuJ7cL7UIJTXDRgr0uyDbEz3EAoEjwjKEC0pPRbuzzLKwBYVCD4vLI3mEz6STEpR6DIwNXtvqo8Sw9mXkS9ZThQLTmq+P+vI/TaWShdmI/pQkcF6ur/zXb3keod7uePsbsEbiD8Lte6IrtJQCr1aKjMAzD0iVdX9v4/789O2Vc2Q4xdCAmIeGlSRrb6cDbW9ztu+R6oZ6vipku0nX6LrBeBK56DRgwJq+Acef/pCCo/RlRZuufuRt/yCb5DCz2PLAkQDiLVHBatXIPmRKjt4Oa1cnFX3ma6Ba7ojR35AEoFjPOyC4S2ob3Sc8HcGVm+AqeSoqFgRiDkIqBnS48EdUAVMojQGdZB4pl00zCZ1+AUvcsSqjcfd+B1bZqFBWkh3BClYr016TdIXfgjD/RXKKNErS67Lbe1ToAkVNAODTGdZNP22V6dIWIlyg7yK/prmUSVtezEZj61oJC1VxuF/4IJkefsRbpvX1jQ8Xa1z5o3pKegLNwDyh0Wdxs6WmyAcx8BLKQ7DtjFGUWwKKR8OVDjtGNo/olbwtvYkM50epmBy/EizP632a0DT1GihwOmcbBdKCiqw8HypjFiPNlKnZy18XXHNTCMU0ry/m9vCcbXnysVmExHLPS158//Loi1oJQFVslYTrugQdjl7Qv27yY9n4D0DMPz8DqPN7+sVN8JKQf2Md0Ueyv+cyPALVY12LDIAwUYLZw/v9vqwGpndjOKPVTmpSz0Did1PvMG03kdSvaAdo/PntAO+X5BbR2IiJMgxthtnYu4lTAdS0zASsx9GonATZkFgqfADrAHEcDJwYr1HqzMTnrdwFZWPu3ruyMnAnZIFTnaHRwznm2Sh6oTGko3bW85BGRGxH93e0MRqBr+o1ERSY/LK+Jiby8RCFHj3k5f6Kp0htPAR2aYpORFs03Fp6E9eLVcO+VT4DC3dWWzsiO/gw8MtAEO7rJU4Tjhr33gFW8n6XX93EhVB2N6GvqOvjYRtTJizkkd542WuAf6VPTuSLpW2Tgg7zs+00V5YJbvA2gk+OZ7QNup/QxeJ0JCbxlsVE936DHKILM9/Wo/Uif56s26vb8L6IbjWaXYUfajYzMCH5sL8xhPwMxh2DFwCCarpG7Tfd56dIsQ9q73BS706UPUWaJoYC+3wR6XHAYud2s5HbWcYfmQr6nYrmetdyo2UiT+py+6FTs3dVaYDhWsaAP0o2rVMpUfgYuMIKn2ThI9PEaUG4KEhsfWaMmlm+jTNnITGiVIQO/UPx9Bhg51XkxxHHGbTwN28ZlqBlOqeLZG66fOQMk64qqfSm63eJCoIVLODDN9tUC8pFzGSQJnYgj3ag0uj8qd6pAl4LxqiJFci7+cleTZRTnU7hZulY91DhHJGs6EfjAlH29/AHN+ZUzKCE4+X9fe5EZt3ElVw68sU0yg061cvusllEdWke810OteUxfTgavWp4IN9xdicu5dYcEW2BY1+dIkvsxYru70qxfLdBSnzdd54Ik7wlYrqb21+rZV0AzGKtOUNmUl5Goz32kvm4T9dw/Cc5ZmvhBtN+moO3Him9Bb7vnB1JNXHQa2ih+AAAAAElFTkSuQmCC",
                        r = m.find(".NIE-share_qrcode span")[0];
                    r.innerHTML = "";
                    var o = new Image;
                    return o.onload = function() {
                        t()
                    }, o.onerror = function() {
                        t()
                    }, o.src = f.qrcodeIcon == v ? n : f.qrcodeIcon, !1
                }
                var a = m.find(".NIE-share_qrcode span");
                if (0 == a.find("img").length) {
                    var i = document.createElement("img");
                    i.src = "https://qrcode2.webapp.163.com/l?d=" + encodeURIComponent(l()) + "&l=" + encodeURIComponent(f.qrcodeIcon), a.append(i)
                } else a.find("img")[0].src = "https://qrcode2.webapp.163.com/l?d=" + encodeURIComponent(l()) + "&l=" + encodeURIComponent(f.qrcodeIcon)
            }

            function l() {
                return s.getShareParam().url
            }

            function u(e) {
                f = t.extend({
                    guideText: "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\u8fdb\u884c\u5206\u4eab",
                    qrcodeIcon: v
                }, e || {}), n(), setTimeout(function() {
                    m.show(), m.addClass("show")
                }, 50)
            }! function() {
                var e = {};
                this.tmpl = function t(n, r) {
                    var o = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);
                    return r ? o(r) : o
                }
            }();
            var d;
            ! function() {
                function t(e) {
                    this.mode = l.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
                    for (var t = 0, n = this.data.length; n > t; t++) {
                        var r = [],
                            o = this.data.charCodeAt(t);
                        o > 65536 ? (r[0] = 240 | (1835008 & o) >>> 18, r[1] = 128 | (258048 & o) >>> 12, r[2] = 128 | (4032 & o) >>> 6, r[3] = 128 | 63 & o) : o > 2048 ? (r[0] = 224 | (61440 & o) >>> 12, r[1] = 128 | (4032 & o) >>> 6, r[2] = 128 | 63 & o) : o > 128 ? (r[0] = 192 | (1984 & o) >>> 6, r[1] = 128 | 63 & o) : r[0] = o, this.parsedData.push(r)
                    }
                    this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
                }

                function n(e, t) {
                    this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
                }

                function r(e, t) {
                    if (void 0 == e.length) throw new Error(e.length + "/" + t);
                    for (var n = 0; n < e.length && 0 == e[n];) n++;
                    this.num = new Array(e.length - n + t);
                    for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n]
                }

                function o(e, t) {
                    this.totalCount = e, this.dataCount = t
                }

                function a() {
                    this.buffer = [], this.length = 0
                }

                function i() {
                    return "undefined" != typeof CanvasRenderingContext2D
                }

                function s() {
                    var e = !1,
                        t = navigator.userAgent;
                    return /android/i.test(t) && (e = !0, aMat = t.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (e = parseFloat(aMat[1]))), e
                }

                function c(e, t) {
                    for (var n = 1, r = h(e), o = 0, a = v.length; a >= o; o++) {
                        var i = 0;
                        switch (t) {
                            case u.L:
                                i = v[o][0];
                                break;
                            case u.M:
                                i = v[o][1];
                                break;
                            case u.Q:
                                i = v[o][2];
                                break;
                            case u.H:
                                i = v[o][3]
                        }
                        if (i >= r) break;
                        n++
                    }
                    if (n > v.length) throw new Error("Too long data");
                    return n
                }

                function h(e) {
                    var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                    return t.length + (t.length != e ? 3 : 0)
                }
                t.prototype = {
                    getLength: function() {
                        return this.parsedData.length
                    },
                    write: function(e) {
                        for (var t = 0, n = this.parsedData.length; n > t; t++) e.put(this.parsedData[t], 8)
                    }
                }, n.prototype = {
                    addData: function(e) {
                        var n = new t(e);
                        this.dataList.push(n), this.dataCache = null
                    },
                    isDark: function(e, t) {
                        if (0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
                        return this.modules[e][t]
                    },
                    getModuleCount: function() {
                        return this.moduleCount
                    },
                    make: function() {
                        this.makeImpl(!1, this.getBestMaskPattern())
                    },
                    makeImpl: function(e, t) {
                        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                        for (var r = 0; r < this.moduleCount; r++) {
                            this.modules[r] = new Array(this.moduleCount);
                            for (var o = 0; o < this.moduleCount; o++) this.modules[r][o] = null
                        }
                        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                    },
                    setupPositionProbePattern: function(e, t) {
                        for (var n = -1; 7 >= n; n++)
                            if (!(-1 >= e + n || this.moduleCount <= e + n))
                                for (var r = -1; 7 >= r; r++) - 1 >= t + r || this.moduleCount <= t + r || (this.modules[e + n][t + r] = n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r ? !0 : !1)
                    },
                    getBestMaskPattern: function() {
                        for (var e = 0, t = 0, n = 0; 8 > n; n++) {
                            this.makeImpl(!0, n);
                            var r = m.getLostPoint(this);
                            (0 == n || e > r) && (e = r, t = n)
                        }
                        return t
                    },
                    createMovieClip: function(e, t, n) {
                        var r = e.createEmptyMovieClip(t, n),
                            o = 1;
                        this.make();
                        for (var a = 0; a < this.modules.length; a++)
                            for (var i = a * o, s = 0; s < this.modules[a].length; s++) {
                                var c = s * o,
                                    h = this.modules[a][s];
                                h && (r.beginFill(0, 100), r.moveTo(c, i), r.lineTo(c + o, i), r.lineTo(c + o, i + o), r.lineTo(c, i + o), r.endFill())
                            }
                        return r
                    },
                    setupTimingPattern: function() {
                        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
                    },
                    setupPositionAdjustPattern: function() {
                        for (var e = m.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                            for (var n = 0; n < e.length; n++) {
                                var r = e[t],
                                    o = e[n];
                                if (null == this.modules[r][o])
                                    for (var a = -2; 2 >= a; a++)
                                        for (var i = -2; 2 >= i; i++) this.modules[r + a][o + i] = -2 == a || 2 == a || -2 == i || 2 == i || 0 == a && 0 == i ? !0 : !1
                            }
                    },
                    setupTypeNumber: function(e) {
                        for (var t = m.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                            var r = !e && 1 == (t >> n & 1);
                            this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                        }
                        for (var n = 0; 18 > n; n++) {
                            var r = !e && 1 == (t >> n & 1);
                            this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                        }
                    },
                    setupTypeInfo: function(e, t) {
                        for (var n = this.errorCorrectLevel << 3 | t, r = m.getBCHTypeInfo(n), o = 0; 15 > o; o++) {
                            var a = !e && 1 == (r >> o & 1);
                            6 > o ? this.modules[o][8] = a : 8 > o ? this.modules[o + 1][8] = a : this.modules[this.moduleCount - 15 + o][8] = a
                        }
                        for (var o = 0; 15 > o; o++) {
                            var a = !e && 1 == (r >> o & 1);
                            8 > o ? this.modules[8][this.moduleCount - o - 1] = a : 9 > o ? this.modules[8][15 - o - 1 + 1] = a : this.modules[8][15 - o - 1] = a
                        }
                        this.modules[this.moduleCount - 8][8] = !e
                    },
                    mapData: function(e, t) {
                        for (var n = -1, r = this.moduleCount - 1, o = 7, a = 0, i = this.moduleCount - 1; i > 0; i -= 2)
                            for (6 == i && i--;;) {
                                for (var s = 0; 2 > s; s++)
                                    if (null == this.modules[r][i - s]) {
                                        var c = !1;
                                        a < e.length && (c = 1 == (e[a] >>> o & 1));
                                        var h = m.getMask(t, r, i - s);
                                        h && (c = !c), this.modules[r][i - s] = c, o--, -1 == o && (a++, o = 7)
                                    }
                                if (r += n, 0 > r || this.moduleCount <= r) {
                                    r -= n, n = -n;
                                    break
                                }
                            }
                    }
                }, n.PAD0 = 236, n.PAD1 = 17, n.createData = function(e, t, r) {
                    for (var i = o.getRSBlocks(e, t), s = new a, c = 0; c < r.length; c++) {
                        var h = r[c];
                        s.put(h.mode, 4), s.put(h.getLength(), m.getLengthInBits(h.mode, e)), h.write(s)
                    }
                    for (var l = 0, c = 0; c < i.length; c++) l += i[c].dataCount;
                    if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
                    for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
                    for (; !(s.getLengthInBits() >= 8 * l || (s.put(n.PAD0, 8), s.getLengthInBits() >= 8 * l));) s.put(n.PAD1, 8);
                    return n.createBytes(s, i)
                }, n.createBytes = function(e, t) {
                    for (var n = 0, o = 0, a = 0, i = new Array(t.length), s = new Array(t.length), c = 0; c < t.length; c++) {
                        var h = t[c].dataCount,
                            l = t[c].totalCount - h;
                        o = Math.max(o, h), a = Math.max(a, l), i[c] = new Array(h);
                        for (var u = 0; u < i[c].length; u++) i[c][u] = 255 & e.buffer[u + n];
                        n += h;
                        var d = m.getErrorCorrectPolynomial(l),
                            p = new r(i[c], d.getLength() - 1),
                            f = p.mod(d);
                        s[c] = new Array(d.getLength() - 1);
                        for (var u = 0; u < s[c].length; u++) {
                            var g = u + f.getLength() - s[c].length;
                            s[c][u] = g >= 0 ? f.get(g) : 0
                        }
                    }
                    for (var v = 0, u = 0; u < t.length; u++) v += t[u].totalCount;
                    for (var _ = new Array(v), w = 0, u = 0; o > u; u++)
                        for (var c = 0; c < t.length; c++) u < i[c].length && (_[w++] = i[c][u]);
                    for (var u = 0; a > u; u++)
                        for (var c = 0; c < t.length; c++) u < s[c].length && (_[w++] = s[c][u]);
                    return _
                };
                for (var l = {
                        MODE_NUMBER: 1,
                        MODE_ALPHA_NUM: 2,
                        MODE_8BIT_BYTE: 4,
                        MODE_KANJI: 8
                    }, u = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    }, p = {
                        PATTERN000: 0,
                        PATTERN001: 1,
                        PATTERN010: 2,
                        PATTERN011: 3,
                        PATTERN100: 4,
                        PATTERN101: 5,
                        PATTERN110: 6,
                        PATTERN111: 7
                    }, m = {
                        PATTERN_POSITION_TABLE: [
                            [],
                            [6, 18],
                            [6, 22],
                            [6, 26],
                            [6, 30],
                            [6, 34],
                            [6, 22, 38],
                            [6, 24, 42],
                            [6, 26, 46],
                            [6, 28, 50],
                            [6, 30, 54],
                            [6, 32, 58],
                            [6, 34, 62],
                            [6, 26, 46, 66],
                            [6, 26, 48, 70],
                            [6, 26, 50, 74],
                            [6, 30, 54, 78],
                            [6, 30, 56, 82],
                            [6, 30, 58, 86],
                            [6, 34, 62, 90],
                            [6, 28, 50, 72, 94],
                            [6, 26, 50, 74, 98],
                            [6, 30, 54, 78, 102],
                            [6, 28, 54, 80, 106],
                            [6, 32, 58, 84, 110],
                            [6, 30, 58, 86, 114],
                            [6, 34, 62, 90, 118],
                            [6, 26, 50, 74, 98, 122],
                            [6, 30, 54, 78, 102, 126],
                            [6, 26, 52, 78, 104, 130],
                            [6, 30, 56, 82, 108, 134],
                            [6, 34, 60, 86, 112, 138],
                            [6, 30, 58, 86, 114, 142],
                            [6, 34, 62, 90, 118, 146],
                            [6, 30, 54, 78, 102, 126, 150],
                            [6, 24, 50, 76, 102, 128, 154],
                            [6, 28, 54, 80, 106, 132, 158],
                            [6, 32, 58, 84, 110, 136, 162],
                            [6, 26, 54, 82, 110, 138, 166],
                            [6, 30, 58, 86, 114, 142, 170]
                        ],
                        G15: 1335,
                        G18: 7973,
                        G15_MASK: 21522,
                        getBCHTypeInfo: function(e) {
                            for (var t = e << 10; m.getBCHDigit(t) - m.getBCHDigit(m.G15) >= 0;) t ^= m.G15 << m.getBCHDigit(t) - m.getBCHDigit(m.G15);
                            return (e << 10 | t) ^ m.G15_MASK
                        },
                        getBCHTypeNumber: function(e) {
                            for (var t = e << 12; m.getBCHDigit(t) - m.getBCHDigit(m.G18) >= 0;) t ^= m.G18 << m.getBCHDigit(t) - m.getBCHDigit(m.G18);
                            return e << 12 | t
                        },
                        getBCHDigit: function(e) {
                            for (var t = 0; 0 != e;) t++, e >>>= 1;
                            return t
                        },
                        getPatternPosition: function(e) {
                            return m.PATTERN_POSITION_TABLE[e - 1]
                        },
                        getMask: function(e, t, n) {
                            switch (e) {
                                case p.PATTERN000:
                                    return (t + n) % 2 == 0;
                                case p.PATTERN001:
                                    return t % 2 == 0;
                                case p.PATTERN010:
                                    return n % 3 == 0;
                                case p.PATTERN011:
                                    return (t + n) % 3 == 0;
                                case p.PATTERN100:
                                    return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                                case p.PATTERN101:
                                    return t * n % 2 + t * n % 3 == 0;
                                case p.PATTERN110:
                                    return (t * n % 2 + t * n % 3) % 2 == 0;
                                case p.PATTERN111:
                                    return (t * n % 3 + (t + n) % 2) % 2 == 0;
                                default:
                                    throw new Error("bad maskPattern:" + e)
                            }
                        },
                        getErrorCorrectPolynomial: function(e) {
                            for (var t = new r([1], 0), n = 0; e > n; n++) t = t.multiply(new r([1, f.gexp(n)], 0));
                            return t
                        },
                        getLengthInBits: function(e, t) {
                            if (t >= 1 && 10 > t) switch (e) {
                                case l.MODE_NUMBER:
                                    return 10;
                                case l.MODE_ALPHA_NUM:
                                    return 9;
                                case l.MODE_8BIT_BYTE:
                                    return 8;
                                case l.MODE_KANJI:
                                    return 8;
                                default:
                                    throw new Error("mode:" + e)
                            } else if (27 > t) switch (e) {
                                case l.MODE_NUMBER:
                                    return 12;
                                case l.MODE_ALPHA_NUM:
                                    return 11;
                                case l.MODE_8BIT_BYTE:
                                    return 16;
                                case l.MODE_KANJI:
                                    return 10;
                                default:
                                    throw new Error("mode:" + e)
                            } else {
                                if (!(41 > t)) throw new Error("type:" + t);
                                switch (e) {
                                    case l.MODE_NUMBER:
                                        return 14;
                                    case l.MODE_ALPHA_NUM:
                                        return 13;
                                    case l.MODE_8BIT_BYTE:
                                        return 16;
                                    case l.MODE_KANJI:
                                        return 12;
                                    default:
                                        throw new Error("mode:" + e)
                                }
                            }
                        },
                        getLostPoint: function(e) {
                            for (var t = e.getModuleCount(), n = 0, r = 0; t > r; r++)
                                for (var o = 0; t > o; o++) {
                                    for (var a = 0, i = e.isDark(r, o), s = -1; 1 >= s; s++)
                                        if (!(0 > r + s || r + s >= t))
                                            for (var c = -1; 1 >= c; c++) 0 > o + c || o + c >= t || (0 != s || 0 != c) && i == e.isDark(r + s, o + c) && a++;
                                    a > 5 && (n += 3 + a - 5)
                                }
                            for (var r = 0; t - 1 > r; r++)
                                for (var o = 0; t - 1 > o; o++) {
                                    var h = 0;
                                    e.isDark(r, o) && h++, e.isDark(r + 1, o) && h++, e.isDark(r, o + 1) && h++, e.isDark(r + 1, o + 1) && h++, (0 == h || 4 == h) && (n += 3)
                                }
                            for (var r = 0; t > r; r++)
                                for (var o = 0; t - 6 > o; o++) e.isDark(r, o) && !e.isDark(r, o + 1) && e.isDark(r, o + 2) && e.isDark(r, o + 3) && e.isDark(r, o + 4) && !e.isDark(r, o + 5) && e.isDark(r, o + 6) && (n += 40);
                            for (var o = 0; t > o; o++)
                                for (var r = 0; t - 6 > r; r++) e.isDark(r, o) && !e.isDark(r + 1, o) && e.isDark(r + 2, o) && e.isDark(r + 3, o) && e.isDark(r + 4, o) && !e.isDark(r + 5, o) && e.isDark(r + 6, o) && (n += 40);
                            for (var l = 0, o = 0; t > o; o++)
                                for (var r = 0; t > r; r++) e.isDark(r, o) && l++;
                            var u = Math.abs(100 * l / t / t - 50) / 5;
                            return n += 10 * u
                        }
                    }, f = {
                        glog: function(e) {
                            if (1 > e) throw new Error("glog(" + e + ")");
                            return f.LOG_TABLE[e]
                        },
                        gexp: function(e) {
                            for (; 0 > e;) e += 255;
                            for (; e >= 256;) e -= 255;
                            return f.EXP_TABLE[e]
                        },
                        EXP_TABLE: new Array(256),
                        LOG_TABLE: new Array(256)
                    }, g = 0; 8 > g; g++) f.EXP_TABLE[g] = 1 << g;
                for (var g = 8; 256 > g; g++) f.EXP_TABLE[g] = f.EXP_TABLE[g - 4] ^ f.EXP_TABLE[g - 5] ^ f.EXP_TABLE[g - 6] ^ f.EXP_TABLE[g - 8];
                for (var g = 0; 255 > g; g++) f.LOG_TABLE[f.EXP_TABLE[g]] = g;
                r.prototype = {
                    get: function(e) {
                        return this.num[e]
                    },
                    getLength: function() {
                        return this.num.length
                    },
                    multiply: function(e) {
                        for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                            for (var o = 0; o < e.getLength(); o++) t[n + o] ^= f.gexp(f.glog(this.get(n)) + f.glog(e.get(o)));
                        return new r(t, 0)
                    },
                    mod: function(e) {
                        if (this.getLength() - e.getLength() < 0) return this;
                        for (var t = f.glog(this.get(0)) - f.glog(e.get(0)), n = new Array(this.getLength()), o = 0; o < this.getLength(); o++) n[o] = this.get(o);
                        for (var o = 0; o < e.getLength(); o++) n[o] ^= f.gexp(f.glog(e.get(o)) + t);
                        return new r(n, 0).mod(e)
                    }
                }, o.RS_BLOCK_TABLE = [
                    [1, 26, 19],
                    [1, 26, 16],
                    [1, 26, 13],
                    [1, 26, 9],
                    [1, 44, 34],
                    [1, 44, 28],
                    [1, 44, 22],
                    [1, 44, 16],
                    [1, 70, 55],
                    [1, 70, 44],
                    [2, 35, 17],
                    [2, 35, 13],
                    [1, 100, 80],
                    [2, 50, 32],
                    [2, 50, 24],
                    [4, 25, 9],
                    [1, 134, 108],
                    [2, 67, 43],
                    [2, 33, 15, 2, 34, 16],
                    [2, 33, 11, 2, 34, 12],
                    [2, 86, 68],
                    [4, 43, 27],
                    [4, 43, 19],
                    [4, 43, 15],
                    [2, 98, 78],
                    [4, 49, 31],
                    [2, 32, 14, 4, 33, 15],
                    [4, 39, 13, 1, 40, 14],
                    [2, 121, 97],
                    [2, 60, 38, 2, 61, 39],
                    [4, 40, 18, 2, 41, 19],
                    [4, 40, 14, 2, 41, 15],
                    [2, 146, 116],
                    [3, 58, 36, 2, 59, 37],
                    [4, 36, 16, 4, 37, 17],
                    [4, 36, 12, 4, 37, 13],
                    [2, 86, 68, 2, 87, 69],
                    [4, 69, 43, 1, 70, 44],
                    [6, 43, 19, 2, 44, 20],
                    [6, 43, 15, 2, 44, 16],
                    [4, 101, 81],
                    [1, 80, 50, 4, 81, 51],
                    [4, 50, 22, 4, 51, 23],
                    [3, 36, 12, 8, 37, 13],
                    [2, 116, 92, 2, 117, 93],
                    [6, 58, 36, 2, 59, 37],
                    [4, 46, 20, 6, 47, 21],
                    [7, 42, 14, 4, 43, 15],
                    [4, 133, 107],
                    [8, 59, 37, 1, 60, 38],
                    [8, 44, 20, 4, 45, 21],
                    [12, 33, 11, 4, 34, 12],
                    [3, 145, 115, 1, 146, 116],
                    [4, 64, 40, 5, 65, 41],
                    [11, 36, 16, 5, 37, 17],
                    [11, 36, 12, 5, 37, 13],
                    [5, 109, 87, 1, 110, 88],
                    [5, 65, 41, 5, 66, 42],
                    [5, 54, 24, 7, 55, 25],
                    [11, 36, 12],
                    [5, 122, 98, 1, 123, 99],
                    [7, 73, 45, 3, 74, 46],
                    [15, 43, 19, 2, 44, 20],
                    [3, 45, 15, 13, 46, 16],
                    [1, 135, 107, 5, 136, 108],
                    [10, 74, 46, 1, 75, 47],
                    [1, 50, 22, 15, 51, 23],
                    [2, 42, 14, 17, 43, 15],
                    [5, 150, 120, 1, 151, 121],
                    [9, 69, 43, 4, 70, 44],
                    [17, 50, 22, 1, 51, 23],
                    [2, 42, 14, 19, 43, 15],
                    [3, 141, 113, 4, 142, 114],
                    [3, 70, 44, 11, 71, 45],
                    [17, 47, 21, 4, 48, 22],
                    [9, 39, 13, 16, 40, 14],
                    [3, 135, 107, 5, 136, 108],
                    [3, 67, 41, 13, 68, 42],
                    [15, 54, 24, 5, 55, 25],
                    [15, 43, 15, 10, 44, 16],
                    [4, 144, 116, 4, 145, 117],
                    [17, 68, 42],
                    [17, 50, 22, 6, 51, 23],
                    [19, 46, 16, 6, 47, 17],
                    [2, 139, 111, 7, 140, 112],
                    [17, 74, 46],
                    [7, 54, 24, 16, 55, 25],
                    [34, 37, 13],
                    [4, 151, 121, 5, 152, 122],
                    [4, 75, 47, 14, 76, 48],
                    [11, 54, 24, 14, 55, 25],
                    [16, 45, 15, 14, 46, 16],
                    [6, 147, 117, 4, 148, 118],
                    [6, 73, 45, 14, 74, 46],
                    [11, 54, 24, 16, 55, 25],
                    [30, 46, 16, 2, 47, 17],
                    [8, 132, 106, 4, 133, 107],
                    [8, 75, 47, 13, 76, 48],
                    [7, 54, 24, 22, 55, 25],
                    [22, 45, 15, 13, 46, 16],
                    [10, 142, 114, 2, 143, 115],
                    [19, 74, 46, 4, 75, 47],
                    [28, 50, 22, 6, 51, 23],
                    [33, 46, 16, 4, 47, 17],
                    [8, 152, 122, 4, 153, 123],
                    [22, 73, 45, 3, 74, 46],
                    [8, 53, 23, 26, 54, 24],
                    [12, 45, 15, 28, 46, 16],
                    [3, 147, 117, 10, 148, 118],
                    [3, 73, 45, 23, 74, 46],
                    [4, 54, 24, 31, 55, 25],
                    [11, 45, 15, 31, 46, 16],
                    [7, 146, 116, 7, 147, 117],
                    [21, 73, 45, 7, 74, 46],
                    [1, 53, 23, 37, 54, 24],
                    [19, 45, 15, 26, 46, 16],
                    [5, 145, 115, 10, 146, 116],
                    [19, 75, 47, 10, 76, 48],
                    [15, 54, 24, 25, 55, 25],
                    [23, 45, 15, 25, 46, 16],
                    [13, 145, 115, 3, 146, 116],
                    [2, 74, 46, 29, 75, 47],
                    [42, 54, 24, 1, 55, 25],
                    [23, 45, 15, 28, 46, 16],
                    [17, 145, 115],
                    [10, 74, 46, 23, 75, 47],
                    [10, 54, 24, 35, 55, 25],
                    [19, 45, 15, 35, 46, 16],
                    [17, 145, 115, 1, 146, 116],
                    [14, 74, 46, 21, 75, 47],
                    [29, 54, 24, 19, 55, 25],
                    [11, 45, 15, 46, 46, 16],
                    [13, 145, 115, 6, 146, 116],
                    [14, 74, 46, 23, 75, 47],
                    [44, 54, 24, 7, 55, 25],
                    [59, 46, 16, 1, 47, 17],
                    [12, 151, 121, 7, 152, 122],
                    [12, 75, 47, 26, 76, 48],
                    [39, 54, 24, 14, 55, 25],
                    [22, 45, 15, 41, 46, 16],
                    [6, 151, 121, 14, 152, 122],
                    [6, 75, 47, 34, 76, 48],
                    [46, 54, 24, 10, 55, 25],
                    [2, 45, 15, 64, 46, 16],
                    [17, 152, 122, 4, 153, 123],
                    [29, 74, 46, 14, 75, 47],
                    [49, 54, 24, 10, 55, 25],
                    [24, 45, 15, 46, 46, 16],
                    [4, 152, 122, 18, 153, 123],
                    [13, 74, 46, 32, 75, 47],
                    [48, 54, 24, 14, 55, 25],
                    [42, 45, 15, 32, 46, 16],
                    [20, 147, 117, 4, 148, 118],
                    [40, 75, 47, 7, 76, 48],
                    [43, 54, 24, 22, 55, 25],
                    [10, 45, 15, 67, 46, 16],
                    [19, 148, 118, 6, 149, 119],
                    [18, 75, 47, 31, 76, 48],
                    [34, 54, 24, 34, 55, 25],
                    [20, 45, 15, 61, 46, 16]
                ], o.getRSBlocks = function(e, t) {
                    var n = o.getRsBlockTable(e, t);
                    if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                    for (var r = n.length / 3, a = [], i = 0; r > i; i++)
                        for (var s = n[3 * i + 0], c = n[3 * i + 1], h = n[3 * i + 2], l = 0; s > l; l++) a.push(new o(c, h));
                    return a
                }, o.getRsBlockTable = function(e, t) {
                    switch (t) {
                        case u.L:
                            return o.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                        case u.M:
                            return o.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                        case u.Q:
                            return o.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                        case u.H:
                            return o.RS_BLOCK_TABLE[4 * (e - 1) + 3];
                        default:
                            return void 0
                    }
                }, a.prototype = {
                    get: function(e) {
                        var t = Math.floor(e / 8);
                        return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
                    },
                    put: function(e, t) {
                        for (var n = 0; t > n; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
                    },
                    getLengthInBits: function() {
                        return this.length
                    },
                    putBit: function(e) {
                        var t = Math.floor(this.length / 8);
                        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                    }
                };
                var v = [
                        [17, 14, 11, 7],
                        [32, 26, 20, 14],
                        [53, 42, 32, 24],
                        [78, 62, 46, 34],
                        [106, 84, 60, 44],
                        [134, 106, 74, 58],
                        [154, 122, 86, 64],
                        [192, 152, 108, 84],
                        [230, 180, 130, 98],
                        [271, 213, 151, 119],
                        [321, 251, 177, 137],
                        [367, 287, 203, 155],
                        [425, 331, 241, 177],
                        [458, 362, 258, 194],
                        [520, 412, 292, 220],
                        [586, 450, 322, 250],
                        [644, 504, 364, 280],
                        [718, 560, 394, 310],
                        [792, 624, 442, 338],
                        [858, 666, 482, 382],
                        [929, 711, 509, 403],
                        [1003, 779, 565, 439],
                        [1091, 857, 611, 461],
                        [1171, 911, 661, 511],
                        [1273, 997, 715, 535],
                        [1367, 1059, 751, 593],
                        [1465, 1125, 805, 625],
                        [1528, 1190, 868, 658],
                        [1628, 1264, 908, 698],
                        [1732, 1370, 982, 742],
                        [1840, 1452, 1030, 790],
                        [1952, 1538, 1112, 842],
                        [2068, 1628, 1168, 898],
                        [2188, 1722, 1228, 958],
                        [2303, 1809, 1283, 983],
                        [2431, 1911, 1351, 1051],
                        [2563, 1989, 1423, 1093],
                        [2699, 2099, 1499, 1139],
                        [2809, 2213, 1579, 1219],
                        [2953, 2331, 1663, 1273]
                    ],
                    _ = function() {
                        var e = function(e, t) {
                            this._el = e, this._htOption = t
                        };
                        return e.prototype.draw = function(e) {
                            function t(e, t) {
                                var n = document.createElementNS("http://www.w3.org/2000/svg", e);
                                for (var r in t) t.hasOwnProperty(r) && n.setAttribute(r, t[r]);
                                return n
                            }
                            var n = this._htOption,
                                r = this._el,
                                o = e.getModuleCount();
                            Math.floor(n.width / o), Math.floor(n.height / o), this.clear();
                            var a = t("svg", {
                                viewBox: "0 0 " + String(o) + " " + String(o),
                                width: "100%",
                                height: "100%",
                                fill: n.colorLight
                            });
                            a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(a), a.appendChild(t("rect", {
                                fill: n.colorDark,
                                width: "1",
                                height: "1",
                                id: "template"
                            }));
                            for (var i = 0; o > i; i++)
                                for (var s = 0; o > s; s++)
                                    if (e.isDark(i, s)) {
                                        var c = t("use", {
                                            x: String(i),
                                            y: String(s)
                                        });
                                        c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), a.appendChild(c)
                                    }
                        }, e.prototype.clear = function() {
                            for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
                        }, e
                    }(),
                    w = "svg" === document.documentElement.tagName.toLowerCase(),
                    y = w ? _ : i() ? function() {
                        function t() {
                            this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
                        }

                        function n(e, t) {
                            var n = this;
                            if (n._fFail = t, n._fSuccess = e, null === n._bSupportDataURI) {
                                var r = document.createElement("img"),
                                    o = function() {
                                        n._bSupportDataURI = !1, n._fFail && _fFail.call(n)
                                    },
                                    a = function() {
                                        n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n)
                                    };
                                return r.onabort = o, r.onerror = o, r.onload = a, void(r.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                            }
                            n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n)
                        }
                        if (this._android && this._android <= 2.1) {
                            var r = 1 / e.devicePixelRatio,
                                o = CanvasRenderingContext2D.prototype.drawImage;
                            CanvasRenderingContext2D.prototype.drawImage = function(e, t, n, a, i, s, c, h) {
                                if ("nodeName" in e && /img/i.test(e.nodeName))
                                    for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * r;
                                else "undefined" == typeof h && (arguments[1] *= r, arguments[2] *= r, arguments[3] *= r, arguments[4] *= r);
                                o.apply(this, arguments)
                            }
                        }
                        var a = function(e, t) {
                            this._bIsPainted = !1, this._android = s(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
                        };
                        return a.prototype.draw = function(e) {
                            var t = this._elImage,
                                n = this._oContext,
                                r = this._htOption,
                                o = e.getModuleCount(),
                                a = r.width / o,
                                i = r.height / o,
                                s = Math.round(a),
                                c = Math.round(i);
                            t.style.display = "none", this.clear();
                            for (var h = 0; o > h; h++)
                                for (var l = 0; o > l; l++) {
                                    var u = e.isDark(h, l),
                                        d = l * a,
                                        p = h * i;
                                    n.strokeStyle = u ? r.colorDark : r.colorLight, n.lineWidth = 1, n.fillStyle = u ? r.colorDark : r.colorLight, n.fillRect(d, p, a, i), n.strokeRect(Math.floor(d) + .5, Math.floor(p) + .5, s, c), n.strokeRect(Math.ceil(d) - .5, Math.ceil(p) - .5, s, c)
                                }
                            this._bIsPainted = !0
                        }, a.prototype.makeImage = function() {
                            this._bIsPainted && n.call(this, t)
                        }, a.prototype.isPainted = function() {
                            return this._bIsPainted
                        }, a.prototype.clear = function() {
                            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
                        }, a.prototype.round = function(e) {
                            return e ? Math.floor(1e3 * e) / 1e3 : e
                        }, a
                    }() : function() {
                        var e = function(e, t) {
                            this._el = e, this._htOption = t
                        };
                        return e.prototype.draw = function(e) {
                            for (var t = this._htOption, n = this._el, r = e.getModuleCount(), o = Math.floor(t.width / r), a = Math.floor(t.height / r), i = ['<table style="border:0;border-collapse:collapse;">'], s = 0; r > s; s++) {
                                i.push("<tr>");
                                for (var c = 0; r > c; c++) i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + o + "px;height:" + a + "px;background-color:" + (e.isDark(s, c) ? t.colorDark : t.colorLight) + ';"></td>');
                                i.push("</tr>")
                            }
                            i.push("</table>"), n.innerHTML = i.join("");
                            var h = n.childNodes[0],
                                l = (t.width - h.offsetWidth) / 2,
                                u = (t.height - h.offsetHeight) / 2;
                            l > 0 && u > 0 && (h.style.margin = u + "px " + l + "px")
                        }, e.prototype.clear = function() {
                            this._el.innerHTML = ""
                        }, e
                    }();
                d = function(e, t) {
                    if (this._htOption = {
                            width: 256,
                            height: 256,
                            typeNumber: 4,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: u.H,
                            icon: ""
                        }, "string" == typeof t && (t = {
                            text: t
                        }), t)
                        for (var n in t) this._htOption[n] = t[n];
                    "string" == typeof e && (e = document.getElementById(e)), this._android = s(), this._el = e, this._oQRCode = null, this._oDrawing = new y(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
                }, d.prototype.makeCode = function(e) {
                    function t() {
                        r._oQRCode = new n(c(e, r._htOption.correctLevel), r._htOption.correctLevel), r._oQRCode.addData(e), r._oQRCode.make(), r._el.title = e, r._oDrawing.draw(r._oQRCode)
                    }
                    var r = this;
                    if ("string" == typeof this._htOption.icon) {
                        var o = new Image;
                        o.onload = function() {
                            t();
                            var e = r._oDrawing._elCanvas,
                                n = e.getContext("2d");
                            n.save(), n.drawImage(this, 0, 0, this.width, this.height, 3 * r._htOption.width / 8, 3 * r._htOption.height / 8, r._htOption.width / 4, r._htOption.height / 4), n.restore(), r.makeImage()
                        }, o.onerror = function() {
                            t(), r.makeImage()
                        }, o.src = this._htOption.icon
                    } else t(), this.makeImage()
                }, d.prototype.makeImage = function() {
                    "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
                }, d.prototype.clear = function() {
                    this._oDrawing.clear()
                }, d.CorrectLevel = u
            }();
            var p = !1,
                m = null,
                f = {},
                g = {
                    qnCoder: "\u957f\u6309\u4fdd\u5b58\u4e8c\u7ef4\u7801\u5230\u672c\u5730<br />\u4f7f\u7528\u5fae\u4fe1\u8bc6\u522b\u8fdb\u884c\u5206\u4eab",
                    copyLink: "\u957f\u6309\u94fe\u63a5\u590d\u5236\u540e\u5206\u4eab\u7ed9\u597d\u53cb"
                },
                v = "https://nie.res.netease.com/comm/js/nie/util/mobishare2/logo_min.png";
            return {
                open: u
            }
        }(),
        s = e.MShare = function() {
            function s() {
                var t = r.UrlParse(e.location.href),
                    n = t.get("traceid"),
                    a = t.get("p_spanid"),
                    i = t.get("c_spanid"),
                    s = t.get("code"),
                    c = r.getStore("mshare_traceid"),
                    h = r.getStore("mshare_spanid"),
                    l = t.get("from"),
                    u = t.get("channel");
                if (f.scene = t.get("scene") || 2e3, f.share_key = t.get("share_key") || "", f.page_key = t.get("page_key") || "", l) switch (l) {
                    case "singlemessage":
                        f.scene = 2007;
                        break;
                    case "groupmessage":
                        f.scene = 2008;
                        break;
                    case "timeline":
                        f.scene = 2009
                }
                if (u && (f.channel = u), n ? g.traceid = n : c && !s ? g.traceid = c : (g.traceid = s && s.length > 5 ? s : "tra_" + r.randomWord(10), r.setStore("mshare_traceid", g.traceid)), a && i) {
                    var d = i.split(".")[0];
                    d = parseInt(d) + 1, h == i || "other" == o.getClient() ? (g.p_spanid = a, g.c_spanid = i) : (g.p_spanid = i, g.c_spanid = h && h.split(".")[0] == d ? h : d + "." + r.randomWord(5))
                } else g.p_spanid = h && h.indexOf("0.") > -1 ? h : "0." + r.randomWord(5), g.c_spanid = g.p_spanid;
                r.setStore("mshare_spanid", g.c_spanid)
            }

            function c() {
                for (var e = {}, n = 0; n < arguments.length; n++) arguments[n] && (e = t.extend(e, arguments[n]));
                return e
            }

            function h(t, n) {
                t = t || e.location.href, f.is_random && (t.match(/\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/[^\/]+\//i) ? t.match(/\/[a-zA-Z0-9]+\/[^\/]+\//i) || (t = t.replace(/(\/[a-zA-Z0-9]+\/)/i, function(e, t) {
                    return t + r.randomWord(16) + "/"
                })) : t = t.replace(/(\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/)/i, function(e, t) {
                    return t + r.randomWord(16) + "/"
                }));
                var o = r.UrlParse(t);
                if (o.set("traceid", g.traceid), o.set("p_spanid", g.p_spanid), o.set("c_spanid", g.c_spanid), n)
                    for (var a in n) o.set(a, n[a]);
                return o.url
            }

            function l() {
                var e = 0;
                t(document.body).on({
                    touchstart: function(t) {
                        var n = t.target;
                        clearTimeout(e), e = 0, n && n.tagName && "img" == n.tagName.toLowerCase() && n.className && "js_mshare_qrcode" == n.className && (e = setTimeout(function() {
                            if (e) {
                                var t = c(f, g, v, {
                                    monitor: "qrcode_save_action"
                                });
                                a.report(t)
                            }
                        }, 500))
                    },
                    touchmove: function() {
                        clearTimeout(e), e = 0
                    },
                    touchend: function() {
                        clearTimeout(e), e = 0
                    }
                })
            }

            function u() {
                l()
            }

            function d(e) {
                o.init(e)
            }

            function p() {
                o.initParam(), s(), u();
                var e = r.getStore("mshare_fake_user_id");
                e ? (f.fake_user_id = e, "elk_" + r.randomWord(7)) : (f.fake_user_id = "elk_" + r.randomWord(7), r.setStore("mshare_fake_user_id", f.fake_user_id)), f.plateform = o.getClient(), f.os = o.getOS(), m()
            }

            function m() {
                var n = 0;
                t(e).on("load", function() {
                    n = new Date
                }, !1), t(e).on("unload", function() {
                    if (0 == n) return !1;
                    var e = new Date - n,
                        t = c(f, g, {
                            monitor: "pageStay_action",
                            type: "avg",
                            value: e,
                            desc: "\u9875\u9762\u505c\u7559\u65f6\u95f4"
                        });
                    a.closeReport(t)
                }, !1)
            }
            var f = {
                    system: "buildin_js",
                    monitor: "open_action",
                    product: e.location.hostname,
                    activity: e.location.hostname + e.location.pathname.replace(/\/[^\/]+\.html/i, "/").replace(/\/\/+/gi, "/"),
                    scene: "",
                    plateform: "",
                    os: "",
                    fake_user_id: "",
                    share_key: "",
                    page_key: "",
                    gitCode: "",
                    is_random: !1
                },
                g = {
                    traceid: "",
                    p_spanid: "",
                    c_spanid: ""
                },
                v = null;
            return p(), {
                init: function(e, t) {
                    e = e || {}, "number" != typeof t && (t = 3e3), d({
                        hideMoments: e.hideMoments || !1,
                        hideFriend: e.hideFriend || !1,
                        wxapi: e.wxapi || [],
                        wxtag: e.tag || [],
                        ready: e.ready || function() {}
                    }), e.activity && (f.activity = e.activity), e.product && (f.product = e.product);
                    try {
                        f.gitCode = document.head.getElementsByTagName("meta").from.content.split("/")[1]
                    } catch (r) {}
                    e.is_random && (f.activity.match(/\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/[^\/]+\//i) ? f.activity = f.activity.replace(/(\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/)[^\/]+\//i, function(e, t) {
                        return t
                    }) : f.activity.match(/\/[a-zA-Z0-9]+\/[^\/]+\//i) && (f.activity = f.activity.replace(/(\/[a-zA-Z0-9]+\/)[^\/]+\//i, function(e, t) {
                        return t
                    })), f.is_random = e.is_random), e.debug && n.init();
                    var o = c(f, g, {
                        monitor: "open_action"
                    });
                    a.report(o, t)
                },
                setShare: function(e) {
                    var t = e.callback;
                    e.url = h(e.url), e.callback = function(e) {
                        try {
                            t(e)
                        } catch (n) {}
                        if (!e.type) return !1;
                        var r = c(f, g, v, {
                            monitor: "share_action",
                            shareto: e.type_en
                        });
                        a.report(r)
                    }, o.setShare(e)
                },
                openShare: function(e) {
                    var t = c(f, g, v, {
                        monitor: "share_action",
                        shareto: e.type || "moments"
                    });
                    a.report(t), e.url && (e.url = h(e.url)), o.openShare(e)
                },
                updateShare: function(e) {
                    e.url && (e.url = h(e.url)), o.updateShare(e)
                },
                loginReport: function(e) {
                    v = {
                        user_id: e.user_id,
                        user_name: e.user_name,
                        sex: e.sex
                    }, v = c(v, e);
                    var t = c(f, g, v, {
                        monitor: "auth_action"
                    });
                    a.report(t)
                },
                joinReport: function(e) {
                    var t = c(f, g, v, {
                        action_name: e.action_name,
                        monitor: "join_action"
                    });
                    a.report(t)
                },
                activityReport: function(e) {
                    var t = c(f, g, v, {
                        activity_name: e.activity_name
                    }, {
                        monitor: "finish_activity_action"
                    });
                    a.report(t)
                },
                shareReport: function(e) {
                    var t = c(f, g, v, {
                        monitor: "share_action",
                        shareto: "moments"
                    }, e);
                    a.report(t)
                },
                report: function(e, t) {
                    e.monitor || (e.monitor = "report_action");
                    var n = c(f, g, v, e);
                    a.report(n, t)
                },
                getShareUrl: function(e, t) {
                    var n = {};
                    return "qrcode" == t ? n.scene = 2012 : t && (n.channel = t), h(e, n)
                },
                getClient: function() {
                    return o.getClient()
                },
                getShareParam: function() {
                    return o.getShareParam()
                },
                showShare: function(e) {
                    return i.open(e)
                }
            }
        }()
}(window, window.Zepto || window.jQuery);