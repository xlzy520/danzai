nie.define("PopVideo",function(){var i=function(i){i=$.extend({btn:""},i||{}),this.$btn=$(i.btn),this.init()};return i.prototype={init:function(){function i(i){return Math.floor(Math.random()*i)+1}var o=$("#Jvideo");if(!o[0]){var n=document.createElement("div");n.id="Jvideo",n.className="m-video",n.innerHTML='<div class="m-video-con"></div>',document.body.appendChild(n),o=$("#Jvideo")}var e=o.find(".m-video-con");this.$btn.on("click",".playVideo",function(){function n(){setTimeout(function(){a.play()},240)}var t=$(this).attr("data-video");if(t){var r='<a href="javascript:;" class="close" title="\u5173\u95ed"></a><video src="'+t+'" controls="controls" autoplay preload id="tsvideo"></video>';e.html(r),o.show();var a=document.getElementById("tsvideo");a.addEventListener("canplay",n,!1),e.on("click",".close",function(){o.hide(),e.html(""),ca.browser.versions.qqBrowser&&ca.browser.versions.ios&&window.history.pushState(null,null,window.location.href.split("?")[0]+"?_t="+i(9999999))})}else alert("\u656c\u8bf7\u671f\u5f85\uff01")}),o.unbind().bind("click",function(){o.hide(),e.html(""),ca.browser.versions.qqBrowser&&ca.browser.versions.ios&&window.history.pushState(null,null,window.location.href.split("?")[0]+"?_t="+i(9999999))}),e.unbind().bind("click",function(i){i.stopPropagation()})}},{create:function(o){return new i(o)}}});var popvideo=nie.require("PopVideo");popvideo.create({btn:".main"});