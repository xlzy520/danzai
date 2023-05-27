nie.define("share", function() {
    var e = {
        shareTitle: $("#share_title").html(),
        shareDesc: $("#share_desc").html(),
        shareImg: $("#share_pic").attr("data-src")
    };
    MShare.init({
        title: e.shareTitle,
        desc: e.shareDesc,
        imgurl: e.shareImg,
        shareCallback: function() {},
        wxSdkCallback: function() {}
    }), MShare.setShare({
        is_start: !1,
        title: e.shareTitle,
        desc: e.shareDesc,
        imgurl: e.shareImg,
        callback: function() {}
    }), $("#btn_share").click(function() {
        MShare.showShare({
            guideText: "\u70b9\u51fb\u4e0a\u65b9<br/>\u5206\u4eab\u4fe1\u606f",
            qrcodeIcon: "https://webinput.nie.netease.com/img/party/icon.png"
        })
    })
});