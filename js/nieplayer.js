var NiePlayer = function(e, t) {
    function i(e, t) {
        var i = new Image;
        i.crossOrigin = "*", i.onload = function() {
            t(i)
        }, i.src = e
    }

    function o(e, t) {
        if (d(e)) {
            var i = e.className,
                o = new RegExp(t, "g"),
                s = i.match(o);
            s || (e.className += (e.className.length > 0 ? " " : "") + t)
        }
    }

    function s(e, i) {
        i = i || function() {};
        var o = function(e, o) {
            var s = t.createElement("script");
            s.type = "text/javascript", s.onload = function() {
                s.onload = null, s.onerror = null, o()
            }, s.onerror = function() {
                s.onload = null, s.onerror = null, i({
                    message: e + "\u4f9d\u8d56\u672a\u52a0\u8f7d\u6210\u529f\uff01"
                })
            }, s.src = a + "/" + e, t.body.appendChild(s)
        };
        ! function s() {
            e.length > 0 ? o(e.shift(), s) : i()
        }()
    }
    var n = navigator.userAgent.toLowerCase(),
        a = e.location.host.indexOf(".163.com") > -1 ? "https://nie.res.netease.com/comm/js/nie/util" : "https://comm.res.easebar.com/js/nie/util",
        r = function() {
            var e = (/applewebKit.*mobile.*/i.test(n), /micromessenger/i.test(n)),
                t = (/yixin/i.test(n), /weibo/i.test(n)),
                i = /fban|fbav/i.test(n),
                o = (/(iphone|ipod)/i.test(n), /ipad/i.test(n), /huaweibrowser/i.test(n)),
                s = /vivobrowser/i.test(n),
                a = /heytapbrowser/i.test(n),
                r = /ucbrowser/i.test(n),
                d = / qq/i.test(n),
                u = /mqqbrowser/i.test(n),
                h = /safari/i.test(n),
                l = /chrome|crios/i.test(n);
            return e ? "weixin" : t ? "weibo" : d ? "qq" : u ? "mqq" : r ? "uc" : i ? "fb" : o ? "huawei" : s ? "vivo" : a ? "oppo" : l ? "chrome" : h && !l ? "safari" : "other"
        },
        d = "object" == typeof HTMLElement ? function(e) {
            return e instanceof HTMLElement
        } : function(e) {
            return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
        },
        u = r(),
        h = function() {
            var e = /android/i.test(n),
                t = /(iphone|ipod|ipad)/i.test(n);
            return e ? "android" : t ? "ios" : "pc"
        },
        l = h(),
        p = {
            status: null,
            callbacks: []
        },
        c = t.createElement("link");
    c.href = a + "/nieplayer/css/nieplayer.css", c.rel = "stylesheet", t.head.appendChild(c);
    var f = function(e) {
        this.container = t.querySelector(e.container), o(this.container, "nieplayer"), this.video = null, this.canvas = null, this.fullScreen = "undefined" != typeof e.fullScreen ? e.fullScreen : !1, this.width = Number(e.videoWidth), this.height = Number(e.videoHeight), this.poster = "string" == typeof e.poster ? e.poster : null, this.muted = "undefined" != typeof e.muted ? e.muted : !1, this.autoplay = "undefined" != typeof e.autoplay ? e.autoplay : !1, this.currentPiontIndex = 0, this.timePoints = e.points, this.mp4Url = e.mp4Url, this.tsUrl = e.tsUrl, this.mpegPlayer = null, this.isPause = !0, this.enableAudio = "undefined" != typeof e.enableAudio ? e.enableAudio : !0, this.isStarted = !1, this.QQBclick = !1, this.loopStart = null, this.loopEnd = null, this.loop = "undefined" != typeof e.loop ? e.loop : !1, this.loadTsFirstFrame = "undefined" != typeof e.loadTsFirstFrame ? e.loadTsFirstFrame : !1, this.useTsMode = "undefined" != typeof e.useTsMode ? e.useTsMode : !1, this.disableGl = "undefined" != typeof e.disableGl ? e.disableGl : !0, this.chunkSize = "undefined" != typeof e.tsChunkSize ? e.tsChunkSize : 1048576, this.mode = "video", this.tsOptions = {
            disableWebAssembly: !0,
            progressive: !0
        }, e.tsOptions && (this.tsOptions.disableWebAssembly = "undefined" != typeof e.tsOptions.disableWebAssembly ? e.tsOptions.disableWebAssembly : !0, this.tsOptions.progressive = "undefined" != typeof e.tsOptions.progressive ? e.tsOptions.progressive : !0, this.tsOptions.preserveDrawingBuffer = "undefined" != typeof e.tsOptions.preserveDrawingBuffer ? e.tsOptions.preserveDrawingBuffer : !1), this.onPoint = function(t) {
            "function" == typeof e.onPoint && e.onPoint(t)
        }, this.onStart = function() {
            "function" == typeof e.onStart && e.onStart(), this.isStarted = !0
        }, this.onload = function() {
            "function" == typeof e.onload && e.onload()
        }, this.onPlaying = function(t) {
            "function" == typeof e.onPlay && e.onPlay(t)
        }, this.onTimeupdate = function(t) {
            "function" == typeof e.onTimeupdate && e.onTimeupdate(t)
        }, this.onPause = function(t) {
            "function" == typeof e.onPause && e.onPause(t)
        }, this.onEnd = function() {
            this.isPause = !0, "function" == typeof e.onEnd && e.onEnd()
        }, this.onInited = function() {
            "function" == typeof e.onInited && e.onInited()
        }, this.onStalled = function() {
            "function" == typeof e.onStalled && e.onStalled()
        }, this.dealVideo()
    };
    f.prototype.useVideoTag = function() {
        var e = this;
        this.video = t.createElement("video"), this.video.preload = "auto", this.video.setAttribute("x-webkit-airplay", "true"), this.video.setAttribute("airplay", "allow"), this.video.setAttribute("webkit-playsinline", "true"), this.video.setAttribute("playsinline", "true"), this.video.setAttribute("webkit-controls", "no"), this.video.setAttribute("preload", "auto"), this.loop && this.video.setAttribute("loop", "loop"), this.autoplay && ("weixin" == u && "ios" == l ? t.addEventListener("WeixinJSBridgeReady", function() {
            e.playVideoTag()
        }, !1) : (this.video.setAttribute("muted", !0), this.video.muted = !0, this.video.setAttribute("autoplay", "autoplay"))), this.video.addEventListener("loadedmetadata", function() {
            e.refreshView(e.video.videoWidth, e.video.videoHeight)
        }, !1), this.video.addEventListener("ended", function() {
            e.onEnd()
        }, !1), this.video.addEventListener("timeupdate", function() {
            !e.width && e.video.currentTime > 1e-4 && e.refreshView(e.video.videoWidth, e.video.videoHeight), e.video.currentTime > .01 && !e.isStarted && (e.poster && o(e.poster, "hide"), e.onStart()), e.onTimes(e.video.currentTime)
        }, !1), this.video.src = this.mp4Url, this.container.appendChild(this.video), this.onload()
    }, f.prototype.createVideoCanvas = function() {
        this.video.style.display = "none", this.mode = "canvas", this.canvas = t.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.container.appendChild(this.canvas)
    }, f.prototype.useTsVideo = function() {
        var e = this;
        if ("undefined" == typeof JSMpeg) return p.callbacks.push(function() {
            e.useTsVideo()
        }), null == p.status && (p.status = "loading", s(["nieplayer/js/jsmpeg.min.js"], function(e) {
            return e ? console.log("loadmpegjs", e.message) : void p.callbacks.forEach(function(e) {
                e()
            })
        })), !1;
        this.mode = "ts";
        var i = t.createElement("canvas");
        this.container.appendChild(i);
        var n = {
            canvas: i,
            loop: this.loop,
            autoplay: this.autoplay,
            decodeFirstFrame: this.loadTsFirstFrame,
            muted: this.muted,
            audio: this.enableAudio,
            disableWebAssembly: this.tsOptions.disableWebAssembly,
            progressive: this.tsOptions.progressive,
            preserveDrawingBuffer: this.tsOptions.preserveDrawingBuffer,
            chunkSize: this.chunkSize,
            onVideoDecode: function() {
                e.width ? e.refreshView(e.width, e.height) : console.log("time", e.mpegPlayer.currentTime), e.mpegPlayer.currentTime > 1e-4 && !e.isStarted && e.poster && o(e.poster, "hide"), e.mpegPlayer.wantsToPlay && !e.isStarted && e.onStart(), e.onTimes(e.mpegPlayer.currentTime)
            },
            onSourceEstablished: function() {
                e.onload()
            },
            onSourceCompleted: function() {},
            onPlay: function() {},
            onEnded: function() {
                e.onEnd()
            },
            onStalled: function(t) {
                e.onStalled(), console.log("onStalled", t)
            }
        };
        e.width && (n.width = e.width, n.height = e.height), this.mpegPlayer = new JSMpeg.Player(this.tsUrl, n), this.onInited()
    }, f.prototype.iphoneFix = function(e, t) {
        "undefined" == typeof enableInlineVideo ? s(["nieplayer/js/iphone-inline-video.js"], function(i) {
            return i ? console.log("loadInlineJS", i.message) : (enableInlineVideo(e), void t())
        }) : (enableInlineVideo(e), t())
    }, f.prototype.dealVideo = function() {
        var e = this;
        if (this.useTsMode ? this.useTsVideo() : "ios" == l ? "uc" == u ? this.useTsVideo() : (this.useVideoTag(), "mqq" == u ? this.createVideoCanvas() : "weixin" != u && "qq" != u && "safari" != u && "chrome" != u ? this.iphoneFix(this.video, function() {
                e.autoplay && e.play()
            }) : this.autoplay && this.play()) : "android" == l ? "weixin" == u && this.autoplay ? this.useTsVideo() : "weixin" == u || "huawei" == u || "weibo" == u || "qq" == u ? (this.useVideoTag(), ("weixin" == u || "qq" == u) && (this.video.setAttribute("x5-video-player-type", "h5"), this.video.setAttribute("x5-video-player-fullscreen", "false"))) : e.useTsVideo() : this.useVideoTag(), this.poster) {
            var e = this;
            i(this.poster, function(t) {
                e.poster = t, e.container.appendChild(e.poster)
            })
        }
    }, f.prototype.updateCanvas = function() {
        this.video.paused || (this.ctx.drawImage(this.video, 0, 0), requestAnimationFrame(this.updateCanvas.bind(this)))
    }, f.prototype.playts = function() {
        this.mpegPlayer.play(), this.onPlaying()
    }, f.prototype.playVideoTag = function() {
        this.video.play(), this.onPlaying()
    }, f.prototype.loadTsNextFrame = function() {
        "ts" == this.mode && this.mpegPlayer.startLoading()
    }, f.prototype.play = function() {
        if (this.isPause)
            if (this.isPause = !1, "ts" == this.mode) this.mpegPlayer.audio && !this.mpegPlayer.audioOut.unlocked && this.mpegPlayer.audioOut.unlock(function() {
                this.playts()
            }.bind(this)), this.playts();
            else if ("canvas" == this.mode)
            if (this.QQBclick) this.playVideoTag(), this.updateCanvas();
            else {
                this.video.play();
                var e = this;
                setTimeout(function() {
                    e.video.pause(), setTimeout(function() {
                        e.QQBclick = !0, e.playVideoTag(), e.updateCanvas()
                    }, 0)
                }, 0)
            }
        else this.playVideoTag()
    }, f.prototype.reset = function() {}, f.prototype.replay = function() {
        this.stop();
        var e = this;
        setTimeout(function() {
            e.play()
        }, 300)
    }, f.prototype.onTimes = function(e) {
        if (this.timePoints && this.currentPiontIndex < this.timePoints.length && e > this.timePoints[this.currentPiontIndex].time) {
            var t = this.currentPiontIndex;
            this.currentPiontIndex++, this.onPoint({
                point: this.timePoints[t],
                pointIndex: t,
                currentTime: e
            })
        }
        this.onTimeupdate(e)
    }, f.prototype.stop = function() {
        this.pause(!0), this.isStarted = !1, this.currentPiontIndex = 0, "ts" == this.mode ? (this.mpegPlayer.setCurrentTime(0), this.mpegPlayer.startTime = 0) : this.video.currentTime = 0
    }, f.prototype.pause = function(e) {
        this.isPause || (this.isPause = !0, "ts" == this.mode ? this.mpegPlayer.pause() : this.video.pause(), e || this.onPause())
    };
    var y = !1;
    return f.prototype.refreshView = function(e, t) {
        y || (this.width = e, this.height = t, "canvas" == this.mode && this.canvas && (this.canvas.width = e, this.canvas.height = t), y = !0)
    }, f.prototype.destroy = function() {
        "ts" == this.mode && this.mpegPlayer.destroy()
    }, {
        create: function(e) {
            return new f(e)
        }
    }
}(window, document, void 0);