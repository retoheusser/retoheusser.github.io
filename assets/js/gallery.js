"use strict";!function(i,t,e){var n=function(t,n){var s={auto:!1,arrows:!1,dots:!1,interval:5e3,duration:600,pause:!1,transition:"sliding","transition-md":"sliding","transition-sm":"sliding",viewport:"lg",imagenr:!1,"imagenr-md":!1,"imagenr-sm":!1};this.$element=i(t),this.$slidesContainer=this.$element.find(".slides"),this.$window=i(e),this.liNr=this.$element.find(".slide ul li").length,this.$slides=!1,this.isRunning=void 0,this.slideCount=null,this.currentSlide=0,this.isInTool=document.body.hasAttribute("data-istool"),this.options=i.extend({},s,n),this.lazyTimeout=!1,this.init()};n.prototype={init:function(){var i=this;this.checkHash(function(){i.hasCaption=i.$element.data("settings").indexOf("captionwiththumbnail=true")>-1&&e.navigator.userAgent.indexOf("MSIE")>0,i.setPortraits(),i.setViewport(),i.createSlides(1),i.$element.on("lazyloadFinished",function(){i.setElementHeight(),i.setPortraits(),clearTimeout(i.lazyTimeout),i.lazyTimeout=setTimeout(function(){i.addZoom()},500)}),i.options.shopThumbs&&i.createShopThumbs(),i.hasCaption&&(i.$slidesContainer.css("display","inline-block").find(".slide").css("display","inline-block"),i.captionOverflow()),e._monoLoader.windowLoaded||i.$window.on("load",function(){i.setElementHeight()}),i.$element.find("li a").on("mouseover",function(t){i.formatTitleNewLine(t,["<br/>","<br />","<br>"])}),i.$window.on("resize",function(){var t=i.viewport;i.setViewport(),i.viewport!==t&&i.createSlides(),i.hasCaption&&setTimeout(function(){i.captionOverflow()},50),i.setElementHeight()}),i.setElementHeight(function(){["Puppeteer/imageSizesCrawler","PhantomJS/monoTool"].includes(e.navigator.userAgent)||(i.$slidesContainer.find(".slide").hide(),i.$slidesContainer.find(".slide").eq(0).show())})})},setPortraits:function(){this.$element.find("img").each(function(t,e){var n=new Image;n.onload=function(){this.height>this.width&&i(e).addClass("portrait")},n.src=i(e).attr("src")})},setViewport:function(){this.$window.width()<768?this.viewport="sm":this.$window.width()<1200?this.viewport="md":this.viewport="lg"},createSlides:function(t){var n=this.options.imagenr?parseInt(this.options.imagenr):99999;"sm"==this.viewport?this.options["imagenr-sm"]?n=parseInt(this.options["imagenr-sm"]):this.options["imagenr-md"]&&(n=parseInt(this.options["imagenr-md"])):"md"==this.viewport&&this.options["imagenr-md"]&&(n=parseInt(this.options["imagenr-md"])),n&&this.$slidesContainer.find(".slide").length>1&&(this.$slidesContainer.find(".slide:not([data-firstslide]) li").appendTo(this.$slidesContainer.find(".slide[data-firstslide] ul.pics")),this.$slidesContainer.find(".slide:not([data-firstslide])").remove()),t&&(this.$slidesContainer.find(".slide").removeAttr("data-firstslide"),this.$slidesContainer.find(".slide").attr("data-firstslide",!0)),this.$element.find(".dots, .arrowAfter, .arrowBefore").remove();for(var s=0;s<parseInt(this.liNr/n);s++){var a=this.$element.find(".slide[data-firstslide] ul li");if(a.length>n)for(var r=i('<div class="slide"><ul class="pics clear"></ul></div>').appendTo(this.$slidesContainer),o=0;n>o;o++)a[n+o]&&i(a[n+o]).appendTo(r.find("ul.pics"))}if(this.$slides=this.$slidesContainer.find(".slide"),this.slideCount=this.$slides.length,this.slideCount>1&&(this.initSlider(),this.isInTool&&e.parent.iframeGrids&&e.parent.iframeGrids.remakeGridsStyle()),this.$element.data("slidesCreated",!0),this.addZoom(),void 0!==i("body").attr("data-enablefocusindication")){var d=this.$slides.find("li a");d.attr("tabindex","").css("outline-style","solid");var l=d.css("outlineWidth");d.removeAttr("tabindex").css({"outline-style":""}),d.each(function(i,t){t.style.setProperty("--outlinewidth",l)})}},createShopThumbs:function(){var t=this;this.$shopThumbsList=this.$element.find(".shopThumbsList").length?this.$element.find(".shopThumbsList"):i('<ul class="shopThumbsList clear"></ul>').insertAfter(this.$slidesContainer),this.$shopThumbsList.empty(),this.$slides.each(function(e,n){var s=i(n).find("li").clone();s.find("a").contents().unwrap(),s.find("> *:not(.thumb)").remove(),t.$shopThumbsList.append(s)}),this.bindShopThumbsEvent()},bindShopThumbsEvent:function(){var t=this;this.$shopThumbsList.on("click","li",function(){var e=t.$shopThumbsList.find("li").index(i(this));t.changeSlide(e)}),this.addZoom()},addZoom:function(){return 0===i("html[data-req]").length||document.documentElement.clientWidth<1200?!1:void(i("html").attr("data-req").indexOf("zoom")>-1&&e._monoLoader.utils.waitFor(function(){return"function"==typeof e.$.fn.mlens},function(){i(".slides >.slide img").each(function(t,e){i(e).mlens({imgSrc:i(e).attr("src"),zoomLevel:1.4,borderSize:1,lensSize:["30%","30%"]})})}))},initSlider:function(){var e=this;return this.options.dots&&this.createDots(),this.options.arrows&&this.createArrows(),this.isInTool?!1:(e.slideCount>0&&e.start(),e.getTransitionEffect().match(/FadeIn/)&&e.hideNotVisibleSlides(e.$slidesContainer.find(".slide").not(".slide[data-firstslide]")),!t.touchevents&&e.options.pause&&e.slideCount>0&&e.$slidesContainer.on({mouseenter:function(){e.stop()},mouseleave:function(){e.start()}}),e.$slides.each(function(t,e){i(e).attr("aria-hidden","true").attr("tabindex","-1")}),e.$slidesContainer.on("quickswipeleft",function(){e.$slidesContainer.find(".slide:first").css("margin-left",""),e.start(),e.nextSlide(1,!1)}),e.$slidesContainer.on("quickswiperight",function(){e.$slidesContainer.find(".slide:first").css("margin-left",""),e.start(),e.previousSlide(1,!1)}),e.$slidesContainer.on("swipeleft",function(i){e.$slidesContainer.find(".slide:first").css("margin-left",""),e.start(),i.delta.x>e.$slidesContainer.width()/2&&e.nextSlide(1,!0)}),void e.$slidesContainer.on("swiperight",function(i){e.$slidesContainer.find(".slide:first").css("margin-left",""),e.start(),i.delta.x>e.$slidesContainer.width()/2&&e.previousSlide(1,!0)}))},start:function(){var i=this;i.isRunning&&clearInterval(i.isRunning),i.options.auto&&(i.isRunning=setInterval(function(){i.nextSlide()},i.options.interval))},stop:function(){clearInterval(this.isRunning),this.isRunning=void 0},setElementHeight:function(t){var n=this,s=this.getCurrentViewportTransition(),a=this.$element.find(".slide.normalizeSize"),r=this.$element.find("> .slides");a.removeClass("normalizeSize"),this.getTransitionEffect().match(/FadeIn/)||r.css("height",""),this.isInTool||"sliding"==this.options[s]?r.find(".slide").css({opacity:"",display:""}):_monoLoader.utils.waitFor(function(){var t=i("body").find(".gallery,.imagelist,.catalog,.shopfilter").not(".hidden-"+n.viewport);if(t.length){var s=t.length,a=0;return t.each(function(t,n){(i(n).is(":visible")||i(n.closest(".row")).hasClass("hidden-"+e._monoLoader.utils.getViewport()))&&a++}),s==a&&"true"===i('link[href$="gallery.css"]').attr("data-loaded")}return!0},function(){r.css("height",n.getPicSlideHeight()+"px"),a.addClass("normalizeSize"),"function"==typeof t&&t()})},formatTitleNewLine:function(t,e){for(var n=i(t.currentTarget),s=0;s<e.length;s++)n.attr("title").includes(e[s])&&n.attr("title",n.attr("title").replaceAll(e[s],"\n"))},destroy:function(){this.$element.find(".dots, .arrowAfter, .arrowBefore").remove(),this.$element.data("monogallery",null),this.$slidesContainer.find(".slide:not([data-firstslide]) li").appendTo(this.$slidesContainer.find(".slide[data-firstslide] ul.pics")),this.$slidesContainer.find(".slide:not([data-firstslide])").remove(),this.$slidesContainer.find(".slide[data-firstslide]").removeAttr("data-firstslide")},nextSlide:function s(i,t){var e=this,n=void 0;void 0===t&&(t=!0);var a=e.getTransitionEffect();switch(a){case"sliding":var r=i?i:1,o=0;n=e.$slidesContainer.find(".slide").first(),t?(e.$slidesContainer.css({dummy:""}),e.$slidesContainer.animate({dummy:-100*r},{duration:e.options.duration,step:function(i){var t=i+100*o;-100>=t?(e.$slidesContainer.append(n.css("margin-left","")),n=e.$slidesContainer.find(".slide").first(),o++):n.css("margin-left",t+"%")},complete:function(){e.currentSlide=e.$slides.index(n),e.updateActiveDot(),e.updateSlideAria(),n.css("margin-left","")}})):(e.$slidesContainer.append(n.css("margin-left","")),n=e.$slidesContainer.find(".slide").first(),e.currentSlide=e.$slides.index(n),e.updateActiveDot(),e.updateSlideAria(),n.css("margin-left",""));break;case"slowFadeIn":case"fastFadeIn":var d=e.$slidesContainer.find(".slide"),l="fastFadeIn"==a?400:1e3;n=e.$slidesContainer.find('.slide[data-active="true"]').length?e.$slidesContainer.find('.slide[data-active="true"]'):d.first();var s=n.is(e.$slidesContainer.find(".slide:last"))?e.$slidesContainer.find(".slide").first():n.next();void 0!==i&&(s=n.nextAll(".slide").eq(i-1)),e.isInlineHeightSet(e.$slidesContainer)||e.setSlidesContainerHeight(),e.fadeAnimation(n,s,l),e.currentSlide=e.$slides.index(s),e.updateActiveDot(),e.updateSlideAria()}},previousSlide:function(i,t){var e=this,n=void 0;void 0===t&&(t=!0);var s=e.getTransitionEffect();switch(s){case"sliding":var a=i?i:1,r=0;n=e.$slidesContainer.find(".slide").last(),t?(e.$slidesContainer.prepend(n.css("margin-left","-100%")),e.$slidesContainer.css({dummy:""}),e.$slidesContainer.animate({dummy:100*a},{duration:e.options.duration,step:function(i){var t=i-100*r;t>100?(e.$slidesContainer.prepend(e.$slidesContainer.find(".slide").last().css("margin-left","-100%")),n.css("margin-left",""),n=e.$slidesContainer.find(".slide").first(),r++):n.css("margin-left",-(100-t)+"%")},complete:function(){e.currentSlide=e.$slides.index(n),e.updateActiveDot(),e.updateSlideAria(),n.css("margin-left","")}})):(e.$slidesContainer.prepend(e.$slidesContainer.find(".slide").last().css("margin-left","-100%")),n.css("margin-left",""),n=e.$slidesContainer.find(".slide").first(),e.currentSlide=e.$slides.index(n),e.updateActiveDot(),e.updateSlideAria(),n.css("margin-left",""));break;case"fastFadeIn":case"slowFadeIn":var o=e.$slidesContainer.find(".slide"),d="fastFadeIn"==s?400:1e3;n=e.$slidesContainer.find('.slide[data-active="true"]').length?e.$slidesContainer.find('.slide[data-active="true"]'):o.last();var l=n.is(e.$slidesContainer.find(".slide:first"))?e.$slidesContainer.find(".slide").last():n.prev();void 0!==i&&(l=n.prevAll(".slide").eq(i-1)),e.fadeAnimation(n,l,d),e.currentSlide=e.$slides.index(l),e.updateActiveDot(),e.updateSlideAria()}e.updateSlideAria()},changeSlide:function(i){i!==this.currentSlide&&(i>this.currentSlide?this.nextSlide(i-this.currentSlide):this.previousSlide(this.currentSlide-i),this.addZoom())},fadeAnimation:function(t,e,n,s){t.stop(),e.stop(),t.removeAttr("data-active").animate({opacity:0},{duration:n,queue:!1,complete:function(){i(this).addClass("normalizeSize").css({display:"none",position:"",top:"",left:""}),"function"==typeof s&&s()}}),e.css({}).removeClass("normalizeSize").css({opacity:0,display:"block",position:"absolute",top:0,left:0}).animate({opacity:1},{duration:n,queue:!1}).attr("data-active",!0)},getTransitionEffect:function(){var i=this.getCurrentViewportTransition();return this.options.hasOwnProperty(i)?this.options[i]:"sliding"},getCurrentViewportTransition:function(){return"lg"==this.viewport?"transition":"transition-"+this.viewport},isInlineHeightSet:function(i){return void 0!==i.attr("style")&&-1!==i.attr("style").indexOf("height")},setSlidesContainerHeight:function(){this.$slidesContainer.css({height:this.getFirstSlideHeight()+"px"})},getFirstSlideHeight:function(){return this.$slidesContainer.find(".slide[data-firstslide]").height()},hideNotVisibleSlides:function(t){t.each(function(t,e){return i(e).css({display:"none"})})},getPicSlideHeight:function(){var t=[];return this.$slidesContainer.find(".slide").find(".pics").each(function(e,n){return t.push(i(n).height())}),Math.max.apply(Math,t)},createDots:function(){var t=this;t.$slidesContainer.find(".dots").length&&t.$slidesContainer.find(".dots").remove();var e=i('<ul class="dots"></ul>');t.$slides.each(function(n){var s=i("<li></li>");e.append(s),0===n&&e.find("li:eq(0)").addClass("active"),t.isInTool||s.on("click",function(){t.changeSlide(e.find("li").index(s))})}),t.$element.find(".slides").append(e)},updateActiveDot:function(i){var t=i?i:this.currentSlide;this.$slidesContainer.find(".dots li").removeClass("active"),this.$slidesContainer.find(".dots li:eq("+t+")").addClass("active")},updateSlideAria:function(){var t=this;t.$slides.each(function(e,n){var s="true",a=-1;e===t.currentSlide&&(s="false",a=0),i(n).attr("aria-hidden",s).attr("tabindex",a)})},createArrows:function(){var t=this;if(!this.$slidesContainer.find(".arrowBefore").length){var n=this.$element.data("beforeText")||"Before",s=this.$element.data("afterText")||"After",a=i('<a href="#" class="arrow arrowBefore" title="'+n+'" aria-label="'+n+'">&#xF104;</a>'),r=i('<a href="#" class="arrow arrowAfter" title="'+s+'" aria-label="'+s+'">&#xF105;</a>');this.$slidesContainer.prepend([a,r]),a.add(r).on("mousedown",function(){t.stop()}),a.on("click",function(i){i.preventDefault(),t.start(),t.previousSlide(),e._mtr&&e._mtr.track("gallery_prev")}),r.on("click",function(i){i.preventDefault(),t.start(),t.nextSlide(),e._mtr&&e._mtr.track("gallery_next")})}},captionOverflow:function(){this.$slidesContainer.find(".caption").each(function(t,e){i(e).width(i(e).parent().width())})},checkHash:function(t){var n=this,s=i("body").attr("id"),a=this.$element.attr("id"),r=this.$element.attr("class");if(r.includes("instagramfeed")){var o=this.$element.attr("data-cache-hash");o?i.get(e.location.url,{p:s,m:a,hash:o}).done(function(e){i(e).attr("data-cache-hash")!==o&&i(n.$element.replaceWith(e)),t()}):t()}else t()}},i.fn.monogallery=function(t){return this.each(function(){i.data(this,"monogallery")||i.data(this,"monogallery",new n(this,t))})}}(jQuery,Modernizr,window),$('[data-req*="gallery"]').each(function(i,t){function e(i){if(!i)return{};var t={},e=i.split(",");return $(e).each(function(i,e){var n=e.split("=");n[0]=n[0].replace(" ",""),t[n[0]]="true"==n[1]||"false"==n[1]?"true"==n[1]:n[1]}),t}$(t).monogallery(e($(t).attr("data-settings")))});