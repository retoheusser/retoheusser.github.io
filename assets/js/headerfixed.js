"use strict";var _monoFixedHeader={$window:$(window),$header:$("header"),$nextEl:$("header").next(),$designElement:$(".designRow:has(header)"),headerInfo:{},isInTool:document.body.hasAttribute("data-istool"),settingsArr:[],designPadding:0,init:function(){return this.settingsArr=this.$header.attr("data-settings")?this.$header.attr("data-settings").split(","):[],this.bindMinify(),this.isInTool||$("[data-hideheader]").length?!1:(this.getHeaderInfo(),this.settingsArr.filter(function(e){return/^headerfixed-/.test(e)})&&this.bindResize(),this.settingsArr.length?this.settingsArr.indexOf("headerfixed-"+this.checkVP())>=0&&this.bindScroll():this.bindScroll(),void($("div.row > a.rowanchor").length&&this.$header.is("header[data-underheaderrow]")&&$("div.row > a.rowanchor").css({position:"relative",top:this.headerInfo.height})))},bindResize:function(){var e=this,t=this.checkVP();this.$window.on("resize.headerfixed",function(){e.getHeaderInfo(!0),e.isFixed&&e.setHeaderPos(),t!==e.checkVP()&&(t=e.checkVP(),e.settingsArr.length&&(e.unbindScroll(),e.settingsArr.indexOf("headerfixed-"+e.checkVP())>=0&&e.bindScroll()))})},checkVP:function(){return $(window).width()<768?"sm":$(window).width()<1199?"md":"lg"},setHeaderPos:function(){this.$header.css("left",this.headerInfo.left),this.$header.css("right",this.headerInfo.right)},getHeaderInfo:function(e){this.headerInfo={top:e?this.headerInfo.top:this.$header.offset().top,left:this.isFixed?this.$header.parent().offset().left:this.$header.offset().left,right:this.isFixed?parseFloat(document.body.offsetWidth)-parseFloat(this.$header.parent().offset().left+this.$header.parent().outerWidth()):parseFloat(document.body.offsetWidth)-parseFloat(this.$header.offset().left+this.$header.outerWidth()),height:this.$header.outerHeight()}},bindScroll:function(){var e=this,t=!1;this.$window.scrollTop()>this.headerInfo.top&&(t=!0,this.toggleFixed()),this.$window.on("scroll.headerfixed",function(){var i=e.$window.scrollTop();!t&&i>e.headerInfo.top?(t=!0,e.toggleFixed(!t)):t&&i<=e.headerInfo.top&&(t=!1,e.toggleFixed(!t))})},unbindScroll:function(){this.$window.off("scroll.headerfixed"),this.toggleFixed(!0),this.$header.removeClass("headerFixed")},toggleFixed:function(e){var t=$(".module.nav").length&&$(".module.nav").toArray().some(function(e){return $(e).data("mononav")&&$(e).data("mononav").options.push});t&&this.getHeaderInfo(!0),this.$header.is("header[data-underheaderrow]")||this.$nextEl.css({"margin-top":e?"":parseInt(this.$nextEl.css("margin-top"))+this.headerInfo.height}),this.$header.toggleClass("headerFixed"),this.$header.css({left:e?"":this.headerInfo.left,right:e?"":this.headerInfo.right}),this.isFixed=!e},bindMinify:function(){var e=this;if(this.designPadding=this.$designElement.length?parseInt(this.$designElement.css("padding-top"))+1:0,this.settingsArr.indexOf("headerminify-"+this.checkVP())>=0){var t=0,i=0,s=$(document),h=0,d=$(window),r=0,n=0,o=0,a=0;d.on("scroll",function(){if(t=e.$header.outerHeight(),h=s.height(),r=d.height(),n=d.scrollTop(),a=o-n,i=parseInt(e.$header.css("top"))+a,n-e.designPadding<=0)e.$header.css("top",0);else if(a>0)e.$header.css("top",i>0?0:i);else if(0>a){if(n+r>=h-t)return!1;e.$header.css("top",Math.abs(i)>t?-t:i)}o=n})}}};_monoFixedHeader.init();