// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
(function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
(b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
"return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', function(event){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



let referrer_url = document.referrer;
function init() {
  $('body, html').css("overflow", "unset");
  $('nav').css("top", "0");
  if(test_phrases_interval){
    clearInterval(test_phrases_interval);
  }
  // if (performance.navigation.type == PerformanceNavigation.TYPE_RELOAD){
  //   referrer_url = 'slyoza';
  // }
    switch ($(".page_tag").text()) {
      case "products":
        init_products();
        break;
      case "products_main":
        init_products_main();
        break;
      case "osdi":
        init_osdi();
        break;
      case "index":
        init_index();
        break;
      case "eye_gym":
        init_gym();
        break;
      case "practical_advices":
        init_advices();
        break;
      case "videos":
        init_videos();
        break;
    }
    // referrer_url = 'slyoza';
}









$(document).ready(function() {

  if(window.location.href.indexOf("/ru") != -1){
    localStorage.setItem("lang", "ru");
    $("nav").load("/nav_ru.html");
  } else {
    $("nav").load("/nav.html", );
    localStorage.setItem("lang", "ua");
  }

  //waitiong for nav loading
  let load_interval = setInterval(() => {
    if (document.querySelector('.nav_grid')) {
      $(document).trigger("navLoaded");
      clearInterval(load_interval);
      console.log("interval");
    }
  }, 100);

  





  $('.scroll_top_btn').click(function(){
    $('body, document, html').animate({
      scrollTop: 0
    }, 1000);
  })
  $(document).on("navLoaded", () => {
    $('.lang_btn_ua').click(function () {
      let url = window.location.href;
      let pos = url.indexOf("/ru");
      let newUrl = url.slice(0, pos) + url.slice(pos + 3);
      window.location.href = newUrl;
    });
    $('.lang_btn_ru').click(function () {
      let url = window.location.href;
      let pos = url.indexOf(".ua");
      let newUrl = url.slice(0, pos + 3) + "/ru" + url.slice(pos + 3);
      window.location.href = newUrl;
    })
    $(".menu_btn_mobile").click(function () {
      $(this).toggleClass("is-active");
      $(".nav_content_holder").toggleClass("active_m");
      $("nav").toggleClass("shown");
    });
  });
  
  
	let prevScrollpos = window.pageYOffset;
  $(window).scroll(function(){
    if(window.pageYOffset > prevScrollpos && window.pageYOffset > 200){
      $('nav').css("top", "-75px");
    }else if(window.pageYOffset < prevScrollpos){
      $('nav').css("top", "0px");
    }
    if(window.pageYOffset>2*window.outerHeight){
      $('.scroll_top_btn').fadeIn(500);
    }else{
      $('.scroll_top_btn').fadeOut(500);
    }
    prevScrollpos = window.pageYOffset;
  })
});
$(window).on("load", function(){

});

document.addEventListener('swup:clickLink', (event) => {
  if (index_is_animating == true) {
    remove_eye_animations();
  }
  $('.nav_content_holder').removeClass('active_m');
  $('.menu_btn_mobile').removeClass('is-active');
});
document.addEventListener('swup:animationOutDone', (event) => {
  $('body, document, html').animate({
    scrollTop: 0
  }, 1);
});


//$('input[type=radio]:checked').length

function init_products_main() {
  if (window.location.href.indexOf("#eye_surface")>0) {
    $("body, document, html").animate(
      {
        scrollTop: $("#eye_surface").offset().top,
      },
      1000
    );
  } else if (window.location.href.indexOf("#eyelids")>0) {
    $("body, document, html").animate(
      {
        scrollTop: $("#eyelids").offset().top,
      },
      1000
    );
  } else if (window.location.href.indexOf("#tear_substitutes")>0) {
    $("body, document, html").animate(
      {
        scrollTop: $("#tear_substitutes").offset().top,
      },
      1000
    );
  }
  function startNavEvents() {
    $(".eye_surface_link, .products-top__category1").click(function (e) {
      if ($(".page_tag").text() == "products_main") {
        e.preventDefault();
        $("body, document, html").animate(
          {
            scrollTop: $("#eye_surface").offset().top,
          },
          1000
        );
      }
    });
    $(".eyelids_link, .products-top__category2").click(function (e) {
      if ($(".page_tag").text() == "products_main") {
        e.preventDefault();
        $("body, document, html").animate(
          {
            scrollTop: $("#eyelids").offset().top,
          },
          1000
        );
      }
    });
    $(".tear_substitutes_link, .products-top__category3").click(function (e) {
      if ($(".page_tag").text() == "products_main") {
        e.preventDefault();
        $("body, document, html").animate(
          {
            scrollTop: $("#tear_substitutes").offset().top,
          },
          1000
        );
      }
    });
  }
  $(document).on("navLoaded", startNavEvents);
  startNavEvents();
}


function init_gym(){
  function remove_from_other_gym(index){
    $('.gym_section').each(function(){
      if($(this).attr('index')!=index){
        $(this).removeClass('animate');
      }
    })
    
  }
  let prevScrollpos = window.pageYOffset;
  $(window).scroll(function(){
    if(window.pageYOffset > prevScrollpos && $('.page_tag').text() == "eye_gym"){
      //down
      for(let i = 7; i>0; i--){
        if($('.gym_section[index="'+i+'"]').offset().top < window.pageYOffset+window.outerHeight-$('.gym_section[index="'+i+'"]').outerHeight()){
          $('.gym_section[index="'+i+'"]').addClass('animate');
          remove_from_other_gym(i.toString());
          return;
        }
      }
    }else if(window.pageYOffset < prevScrollpos && $('.page_tag').text() == "eye_gym"){
      for(let i = 1; i<8; i++){
        if($('.gym_section[index="'+i+'"]').offset().top > window.pageYOffset){
          $('.gym_section[index="'+i+'"]').addClass('animate');
          remove_from_other_gym(i.toString());
          return;
        }
      }
    }
    prevScrollpos = window.pageYOffset;
  })
}

function init_advices(){
  function remove_from_other_adv(index){
    $('.advices_section').each(function(){
      if($(this).attr('index')!=index){
        $(this).find('.advices_image').removeClass('active');
      }
    })
    
  }
  let prevScrollpos = window.pageYOffset;
  $(window).scroll(function(){
    if(window.pageYOffset > prevScrollpos && $('.page_tag').text() == "practical_advices"){
      //down
      for(let i = 8; i>0; i--){
        if($('.advices_section[index="'+i+'"]').offset().top < window.pageYOffset+window.outerHeight-$('.advices_section[index="'+i+'"]').outerHeight()){
          $('.advices_section[index="'+i+'"]').find('.advices_image').addClass('active');
          remove_from_other_adv(i.toString());
          return;
        }
      }
    }else if(window.pageYOffset < prevScrollpos && $('.page_tag').text() == "practical_advices"){
      for(let i = 1; i<9; i++){
        if($('.advices_section[index="'+i+'"]').offset().top > window.pageYOffset){
          $('.advices_section[index="'+i+'"]').find('.advices_image').addClass('active');
          remove_from_other_adv(i.toString());
          return;
        }
      }
    }
    prevScrollpos = window.pageYOffset;
  })
}

/* =====================================================================
   Videos listing — client-side pagination (10 items per page)
   Brand-styled page switcher, built on the fly. Runs on first load and
   on every Swup transition into the videos page (via init() dispatcher).
   ===================================================================== */
function init_videos() {
  var $holder = $('.video_previews_holder');
  if (!$holder.length) return;

  var perPage = 10;
  var $items = $holder.children('.video_preview');
  var total = $items.length;

  // Nothing to paginate
  if (total <= perPage) return;

  var pageCount = Math.ceil(total / perPage);
  var current = 1;

  // Rebuild cleanly if a control already exists (defensive on re-init)
  var $container = $holder.parent();
  $container.find('.videos_pagination').remove();

  var $nav = $('<div class="videos_pagination" role="navigation" aria-label="Навігація сторінками відео"></div>');
  var $prev = $('<button type="button" class="videos_pagination__btn videos_pagination__btn--nav" data-nav="prev" aria-label="Попередня сторінка">&#8249;</button>');
  var $next = $('<button type="button" class="videos_pagination__btn videos_pagination__btn--nav" data-nav="next" aria-label="Наступна сторінка">&#8250;</button>');

  $nav.append($prev);
  for (var i = 1; i <= pageCount; i++) {
    $nav.append('<button type="button" class="videos_pagination__btn" data-page="' + i + '" aria-label="Сторінка ' + i + '">' + i + '</button>');
  }
  $nav.append($next);
  $holder.after($nav);

  function render() {
    $items.each(function (idx) {
      var onPage = (Math.floor(idx / perPage) + 1) === current;
      var $item = $(this).css('display', onPage ? '' : 'none');
      var $divider = $item.next('.videos_preview_divider');
      if ($divider.length) $divider.css('display', onPage ? '' : 'none');
    });
    $nav.find('.videos_pagination__btn[data-page]').each(function () {
      var active = parseInt($(this).attr('data-page'), 10) === current;
      $(this).toggleClass('videos_pagination__btn--active', active);
      if (active) { $(this).attr('aria-current', 'page'); }
      else { $(this).removeAttr('aria-current'); }
    });
    $prev.prop('disabled', current === 1)
         .toggleClass('videos_pagination__btn--disabled', current === 1);
    $next.prop('disabled', current === pageCount)
         .toggleClass('videos_pagination__btn--disabled', current === pageCount);
  }

  function goTo(page, scroll) {
    page = Math.max(1, Math.min(pageCount, page));
    current = page;
    render();
    if (scroll) {
      var $target = $('.video_previews_section');
      if ($target.length) {
        $('body, html').animate({ scrollTop: $target.offset().top - 80 }, 400);
      }
    }
  }

  $nav.on('click', '.videos_pagination__btn', function () {
    var $b = $(this);
    if ($b.attr('data-nav') === 'prev') { goTo(current - 1, true); }
    else if ($b.attr('data-nav') === 'next') { goTo(current + 1, true); }
    else { goTo(parseInt($b.attr('data-page'), 10), true); }
  });

  render(); // show page 1, no scroll
}
