'use strict';mix_d("SBXGwentV2Cards__multi-card-creative-desktop:multi-card-creative-desktop__-1v5GlZv","exports tslib @c/dom @c/metrics @c/logger @c/aui-feature-detect @c/aui-utils @p/a-ajax @c/pagemarker".split(" "),function(w,t,p,G,H,I,J,K,L){function k(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var u=k(p),x=k(G),M=k(H),N=k(I),O=k(J),P=k(K),Q=k(L),y=function(a,b){return"matches"in a?a.matches(b):0<=l(b).indexOf(a)},e=function(a,b){b=b||u["default"].cardRoot;return!a||y(b,a)?
b:b.querySelector(a)},l=function(a,b){return Array.prototype.slice.call((b||u["default"].cardRoot).querySelectorAll(a))},f=function(a,b){return(b=e("["+a+"]",b))?b.getAttribute(a):null},z=function(a,b){a:{for(var d="["+a+"]";b&&b!==u["default"].cardRoot;){if(y(b,d))break a;b=b.parentElement}b=null}return b?b.getAttribute(a):null},h,R=(h={},h.e="basebe.ClientErrors.4",h.i="basebe.Impressions.5",h.c="basebe.Clicks.4",h.s="basebe.Swipes.4",h.v="basebe.Viewabilities.4",h.vc="basebe.VisualCompleteness.6",
h),A=function(){return(f("data-card-metrics-id")||"").split("_")[0]||null},S=function(){var a=f("data-wl");return a?a.split(","):null},T=function(){var a=e().ownerDocument.defaultView;return a.innerWidth+"x"+a.innerHeight},B=function(a){M["default"].log(a,"ERROR","base-be--"+(A()||"unknown"))},U=function(a,b){var d,c=/\?([^#]+)/.exec(b.href);if(c){c=c[1].split("&");var g=null;try{for(var q=t.__values(c),n=q.next();!n.done;n=q.next()){var f=n.value;if(0===f.indexOf("ref_=")){g=f;break}}}catch(v){var e=
{error:v}}finally{try{n&&!n.done&&(d=q.return)&&d.call(q)}finally{if(e)throw e.error;}}e=g?(e=g.split("=").pop()||"")?e.split("_"):[]:[]}else e=[];d={};if(5<e.length){d.el=e.pop()||null;a:{var h;try{for(var k=t.__values(e),r=k.next();!r.done;r=k.next()){var l=r.value;if(/^\d+$/.test(l)){var m=l;break a}}}catch(v){var p={error:v}}finally{try{r&&!r.done&&(h=k.return)&&h.call(k)}finally{if(p)throw p.error;}}m=null}d.index=m;d.asin=z("data-asin",b);d.type=z("data-avar",b)}a.c(d)},V=function(a,b){var d=
e().ownerDocument.defaultView,c=function(c){2!==c.button&&(U(a,b),c.metaKey||c.altKey||c.shiftKey||c.ctrlKey||1===c.button||"_blank"===b.target||(c.preventDefault(),d.setTimeout(function(){d.open(b.href,b.target||"_top")},50)))};b.addEventListener("click",c);b.addEventListener("auxclick",c)},W=function(a){l("[href]").forEach(function(b){V(a,b)})},X=function(a,b){if(b)for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},Y=function(a){var b=a.anonymizedRequestId,d=a.campaignId,
c=a.slotName,g=function(a,g){try{x["default"].event(X({anonymizedRequestId:b,campaignId:d,slotName:c},g),"base-be",R[a],{ssd:!0})}catch(ja){}};return{i:g.bind(null,"i"),v:g.bind(null,"v"),vc:g.bind(null,"vc"),c:g.bind(null,"c"),s:g.bind(null,"s"),e:function(a){g("e",a&&{name:a.name,message:a.message,stack:a.stack})}}},Z=function(a,b){var d=null,c=null;a.addEventListener("touchstart",function(a){d=a.touches[0].pageX});a.addEventListener("touchmove",function(a){null===d&&(d=a.touches[0].pageX);c=a.touches[0].pageX});
a.addEventListener("touchend",function(){null!==d&&null!==c&&b(c-d);d=c=null})},aa=function(a){if(N["default"].isSupported("touch")){var b=function(b){var d=Math.abs(b);30<d&&a.s({direction:0>b?"left":"right",length:d})};l("[data-track-swipe]").forEach(function(a){return Z(a,b)})}},ba=function(a,b){var d=e().ownerDocument.defaultView,c,g=function(){c||(c=d.setTimeout(a,b))};g.cancel=function(){d.clearTimeout(c);c=0};return g},C=function(a,b,d){void 0===d&&(d=25);var c=O["default"].throttle(b,d),g=
e().ownerDocument.defaultView;g.addEventListener(a,c);return function(){g.removeEventListener(a,c)}},D=function(a,b,d){return 0<=a?Math.min(d-a,b-a):0<b?Math.min(Math.min(b,d),b-a):0},ca=function(a){var b=function(){var a=e(),b=d,c=a.getBoundingClientRect();if(a=c.width*c.height){var f=c.top,k=c.bottom,h=c.left,l=c.right,m=e().ownerDocument.defaultView;c=m.innerHeight;h=D(h,l,m.innerWidth);f=D(f,k,c);.5<=h*f/a?b():b.cancel()}},d=ba(function(){c();a.v()},1E3),c=C("scroll",b);b()},da=function(a){var b=
Date.now(),d=l("img"),c=d.length,g=0,e=function(){++g===c&&a.vc({delay:Date.now()-b})};d.forEach(function(a){null!==f("data-lazy",a)&&null!==f("data-src",a)?a.addEventListener("load",function(){a.src===a.dataset.src&&e()}):a.complete?e():a.addEventListener("load",e)})},E=function(a,b){void 0===b&&(b=1);x["default"].count("sbxGwentClient"+a,b)},m={log:function(a){var b=e().ownerDocument.defaultView;var d=f("data-iid");(b=d&&b.sbxGwentClient&&"number"===typeof b.sbxGwentClient[d]?Date.now()-b.sbxGwentClient[d]:
null)?E(a,b):E("NoPageTime")}},ea=function(a){var b=a.url,d=a.onSuccess,c=a.onError;b||c();P["default"].get(b,{success:function(a){a&&"ok"===a.status?d(a):c()},error:c,abort:c})},fa=function(a,b,d,c){try{var g=JSON.parse(a);return"/gp/aq-feedback/lazyLoad/handler/af-link-handler.html?pl="+encodeURIComponent(JSON.stringify({adCreativeMetaData:{adCreativeId:g[0],adId:b,campaignId:d,adImpressionId:g[1],adNetwork:"aax",adProgramId:1010},adPlacementMetaData:{adElementId:g[2],pageType:g[3],pageUrl:g[4],
searchTerms:g[5],slotName:c}}))}catch(q){return null}},ha=function(){var a=f("data-ad-feedback");if(a){var b=f("data-slot"),d=f("data-aid"),c=f("data-cid");a=fa(a,d,c,b);ea({url:a,onSuccess:function(a){var b=a.html,c=e('[data-id="afb-content"]');c&&b&&(c.innerHTML=b);if(a=a.script)b=e().ownerDocument.createElement("script"),b.type="text/javascript",b.innerHTML=a,e().appendChild(b);m.log("AdFeedbackSuccess")},onError:function(){var a=e('[data-id="afb-fallback"]');a&&(a.style.display="block");m.log("AdFeedbackFallback")}})}},
F=function(){l('[data-id="cta"]').forEach(function(a){if(a.parentElement){var b=e('[data-id*="cta-fallback"]',a.parentElement),d=e(".a-truncate",a),c=e(".a-truncate-full",a);d&&c&&(c.clientHeight>d.clientHeight&&b?(b.style.display="block",a.parentElement.removeChild(a)):(b=a.parentElement.getAttribute("aria-hidden"),b&&"false"!==b||(b=a.getAttribute("data-label")||c.innerHTML,a.parentElement.setAttribute("aria-label",b)),(d=e('[data-id*="cta-chevron"]',a))&&!c.hasAttribute("data-chevron")&&(c.setAttribute("data-chevron",
"true"),a=c.innerHTML.split(" "),b=a.pop(),d=d.innerHTML,c.innerHTML="<span>"+a.join(" ")+' </span><span style="white-space:pre">'+b+"&nbsp;"+d+"</span>")))}})},ia=function(a){var b=f("data-src",a)||"",d=f("data-srcset",a)||"",c=a.cloneNode();c.removeAttribute("data-src");c.removeAttribute("data-srcset");c.removeAttribute("data-lazy");c.srcset=d;c.src=b;a.parentNode&&a.parentNode.insertBefore(c,a);c.onload=function(){a.style.opacity="0";m.log("LazyLoaded")}};p=function(a){var b=a.asinMapper,d=a.onLoad;
return function(){return t.__awaiter(void 0,void 0,void 0,function(){return t.__generator(this,function(a){switch(a.label){case 0:return m.log("Loaded"),[4,Q["default"].pageReady];case 1:a.sent();m.log("Ready");try{var c=e(".sbx-no-js",void 0);c&&c.classList.remove("sbx-no-js");try{var h=Y({anonymizedRequestId:f("data-rid"),campaignId:f("data-cid"),slotName:f("data-slot")});h.i({asins:[].map.call(l("[data-asin]"),b),creativeType:A(),creativeVariation:f("data-var"),market:f("data-mrkt"),version:f("data-ts"),
viewport:T(),weblabs:S()});W(h);da(h);ca(h);aa(h)}catch(n){B(n)}F();C("resize",F);l('img[data-lazy="true"]').forEach(ia);d&&d()}catch(n){B(n)}return[2]}})})}}({asinMapper:function(a){return{id:f("data-asin",a),prime:!!e(".a-icon-prime",a),price:!!e(".a-price",a),savings:!0,rating:f("data-rt",a),badge:f("data-deal",a)}},onLoad:function(){ha()}});w._operationNames=[];w.card=p});
