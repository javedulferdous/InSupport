'use strict';mix_d("P13NSCCards__p13n-desktop-carousel:p13n-desktop-carousel__Q8WQ0n7v","exports tslib @c/aui-carousel @c/dom @c/remote-operations @c/scoped-dom @p/A @p/a-carousel-framework @c/logger".split(" "),function(t,e,w,x,y,z,A,B,C){function f(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var D=f(w),E=f(y),r=f(z),l=f(A),F=f(B),m=f(C),u=/(?=[ \-\/])|(?=[\u3105-\u312F])|(?=[\u31A0-\u31BA])|(?=[\u4E00-\u9FD5])|(?=[\u3400-\u4DB5])|(?=[\uF900-\uFAFF])|(?=[\u3040-\u309F])|(?=[\u30A0-\u30FF])|(?=[\u3190-\u319F])/,
v=/[^\/\-\[\]():\s]/,G=function(a){var b=l["default"].$("<div>")[0];b.classList.add("p13n-sc-offscreen-truncate");var g=parseInt(a.getAttribute("data-rows")||"2",10),e=function(){var b=a.innerHTML;a.innerHTML="&hellip;";var k=a.clientHeight;a.innerHTML=b;return k}();if(g){if(e){var f=function(a){b.innerHTML=a;return Math.round(b.clientHeight/e)<=g},q=function(c,k){c=c.split(k);var d=Math.floor(a.clientWidth/12),p=function(h){b.classList.add("p13n-sc-offscreen-truncate");b.style.overflow="hidden";
b.textContent=h;a.appendChild(b);h=a.clientWidth>=a.scrollWidth;a.removeChild(b);return h},e=function(a){var b=a.length-d;a.trim().length>d&&!p(a)&&Array.prototype.slice.call(a).map(function(a,c){return c>d&&c<=b&&v.test(a)?"&shy;"+a:a});return a};return c.map(function(a){return e(a)}).join("")};return{truncate:function(){var c=a.innerHTML.trim(),e=a.textContent||"";c=q(c,u);a.appendChild(b);if(f(c))a.removeChild(b),a.innerHTML=c;else{var d=c.split(u);for(var p=1,g=d.length,h,l,n=0;p!==g;)if(h=Math.floor((g+
p)/2),l=d.slice(0,h).join("")+"&hellip;",f(l)){if(1>=g-h){for(n=h;0<n&&!v.test(d[n-1]);)n--;break}p=h}else g=h;d=0===n?void 0:d.slice(0,n).join("")+"&hellip;";d?(a.innerHTML=d,a.setAttribute("title",e)):(m["default"].log("Unable to successfully truncate line "+c,"ERROR"),a.removeChild(b))}}}}m["default"].log("Truncation element does not have a line height or it is zero","ERROR")}else m["default"].log("Truncation element missing necessary line number data","ERROR")},H=function(a){a=a.getElementsByClassName("p13n-sc-truncate");
Array.prototype.slice.call(a).map(function(a){var b=G(a);b&&(b.truncate(),a.classList.add("p13n-sc-truncated"),a.classList.remove("p13n-sc-truncate"),a.className=a.className.replace(/p13n-sc-line-clamp-\d/g,""))})},I={initCarousel:function(a){return e.__awaiter(void 0,void 0,void 0,function(){var b,g,f,m,q,c,k;return e.__generator(this,function(d){switch(d.label){case 0:return b=r["default"].cardRoot.classList.contains("p13n-sc-shoveler")?r["default"].cardRoot:r["default"].cardRoot.getElementsByClassName("p13n-sc-shoveler")[0],
g=E["default"].setup(["getCarouselItems"]),f=F["default"].getCarousel(x.unscope(b)),m=D["default"].getCarousel(b),q=b.dataset||{},c=f.getAttr("name"),k=function(){l["default"].loadDynamicImage("[data-name]='"+c+"' .p13n-sc-dynamic-image");H(b);null===a||void 0===a?void 0:a(b)},[4,m.initialized];case 1:return d.sent(),l["default"].on("a:carousel:"+c+":change:pageSize",k),l["default"].on("a:carousel:"+c+":change:loading",k),l["default"].on("a:carousel:"+c+":change:animating",k),k(),m.attachRemoteOperation(function(a){var b=
a.indexes;a=a.ids;return g.getCarouselItems(e.__assign(e.__assign({},q),{ids:a,indexes:b,offset:String(b[0]||0)}))}),[2]}})})}};t._operationNames=["getCarouselItems"];t.card=function(){return e.__awaiter(void 0,void 0,void 0,function(){return e.__generator(this,function(a){switch(a.label){case 0:return[4,I.initCarousel()];case 1:return a.sent(),[2]}})})}});
