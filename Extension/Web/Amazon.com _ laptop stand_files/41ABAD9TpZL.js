(function(l){var r=window.AmazonUIPageJS||window.P,m=r._namespace||r.attributeErrors,b=m?m("AmazonRushFramework","AmazonRush"):r;b.guardFatal?b.guardFatal(l)(b,window):b.execute(function(){l(b,window)})})(function(l,r,m){l.when("a-ajax","a-util","3p-promise","rush-asset-loader","rush-util","rush-metrics-adapter","rush-dispatcher").register("rush-ajax-controller",function(b,f,d,e,a,k,c){function g(h,a){if(!h)throw Error(a);}function n(){}function u(h,a){var b=h[0],f=h[1]||{},n=f.assets||[];h=f.manifests||
[];var t;g(x(b),"`dispatch` chunk must have a name");g(p(n),"`payload.assets` must be an array");g(p(h),"`payload.manifests` must be an array");q(h,function(h){h&&x(h.name)&&(e.addManifest(h,a),n.push(h.name))});t=r(n,function(h){return new d(function(a,c){function b(){g++;1<g&&a()}var g=0;e.loadAsset(h,b,b);l(function(){k.incrementCount("rush-ajax-errors","asset-load-timeout");c(Error("Timeout loading asset: "+h))},1E4)})});return new d(function(h){d.all(t).then(function(){c.trigger(b,{data:f,memo:a});
h({name:b,payload:f,memo:a})})["catch"](function(){document.location.reload(!0)})})}function B(h){return(new d(function(a){e.addManifest(h[0]);a()}))["catch"](function(){k.incrementCount("rush-ajax-errors","add-manifest-error");document.location.reload(!0)})}function t(h,a,c){var b=h[0],g;"title"===b?document.title=h[1]:"dispatch"===b?(g=u(h.slice(1),c),g.then(function(h){a(h.name,h.payload,h.memo)})):"manifest"===b?g=B(h.slice(1)):(a(h,c),g=d.resolve());return g}var l=f.delay,q=f.each,m=f.extend,
p=f.isArray,v=a.isFunction,x=a.isNotBlank,r=f.map;return function(h,a){var c,k,f,p=[];c=a&&a.success||n;k=a&&a.error||n;f=a&&a.chunk||n;g(v(c),"`success` must be a function");g(v(k),"`error` must be a function");g(v(f),"`chunk` must be a function");return new d(function(g,n){a=m({memo:null,headers:{}},a);a.success=function(a,h,b){d.all(p).then(function(){c(a,h,b);g({response:a,statusText:h,xhr:b})})["catch"](function(a){k(b,h,a);n({xhr:b,statusText:h,error:a})})};a.error=function(a,h,c){k(a,h,c);
n({xhr:a,statusText:h,error:c})};a.chunk=function(h){p.push(t(h,f,a.memo))};a.headers=m(a.headers||{},{"x-amazon-rush-fingerprints":e.fingerprints()});b.ajax(h,a)})}});"use strict";l.when("A","R","rush-util","rush-controller-api","rush-dom","rush-page-state-dispatcher").register("rush-application-api",function(b,f,d,e,a,k){return function(c,g){var f=document.body,u=null;if(!d.isNotBlank(g)||!c)throw Error("[invalid arguments] valid signature is (application:R.ApplicationBase, applicationAttribution:String)");
g=b.trim(g);u=e(g);return b.extend(u,{setupComponents:function(c){a.scan(c||f)},teardownComponents:function(c){a.unscan(c||f)},addRoute:function(a,b){c.addRoute(c,a,function(){try{return b.apply(null,arguments)}catch(c){u.log.fatal(c,"[pattern\x3d"+a+"]: "+u.log.getErrorMessage(c))}})},startPageStateDispatcher:k.start})}});"use strict";l.when("rush-controller-api","rush-logger","rush-util").register("rush-application-public-api",function(b,f,d){return function(e,a){if(!d.isNotBlank(e)||!d.isNotBlank(a))throw Error("[invalid arguments] valid signature is (appName:String, attribution:String)");
return{getAttribution:function(){return a},getName:function(){return e},onStart:function(){},onStop:function(){},attachController:function(a,c){try{return c(b(a))}catch(g){f.logError(a,"error in the controller handler",g)}}}}});"use strict";l.when("A","rush-ajax-controller","rush-dispatcher","rush-attributed-error-logger","rush-util").register("rush-controller-api",function(b,f,d,e,a){return function(b){var c=e.create(b);return{ajax:f,on:function(a,b){return d.on(a,function(){try{return b.apply(null,
arguments)}catch(e){c.fatal(e,"[event\x3d"+a+"]: "+c.getErrorMessage(e))}})},trigger:d.trigger,log:c,util:a,logError:function(b,e){a.isNullOrUndefined(e)&&b instanceof Error&&(e=b,b=c.getErrorMessage(e));c.fatal(e,b)}}}});"use strict";l.when("A","rush-dom","rush-dispatcher","rush-attributed-error-logger","rush-metadata","rush-util").register("rush-component-api",function(b,f,d,e,a,k){return function(c,b){var n=e.create(b);return{on:function(a,b){return d.on(a,function(){try{return b.apply(null,arguments)}catch(e){n.fatal(e,
"[component\x3d"+c+"][event\x3d"+a+"]: "+n.getErrorMessage(e))}})},trigger:d.trigger,teardown:function(){},remove:f.remove,append:f.append,insertBefore:f.insertBefore,insertAfter:f.insertAfter,replace:f.replace,removeChildren:f.removeChildren,replaceInnerHTML:f.replaceInnerHTML,getMetadataForElem:a.getMetadataForElem,util:k,log:n,logError:function(a,b){k.isNullOrUndefined(b)&&a instanceof Error&&(b=a,a=n.getErrorMessage(b));n.fatal(b,"[component\x3d"+c+"]: "+a)}}}});"use strict";l.when("A").register("rush-component-properties",
function(b){return function(f){function d(){k=(k=f.getAttribute("data-component-props"))?b.parseJSON(k):{}}function e(a){throw Error("Component properties ."+a+"() is DEPRECATED.");}var a=f.getAttribute?m:null,k=f.getAttribute?m:{};return{elem:function(){return f},type:function(){a===m&&(a=f.getAttribute("data-component-type"));return a},prop:function(a){k===m&&d();return k[a]},propKeys:function(){k===m&&d();return b.keys(k)},id:function(){e("id")},key:function(){e("key")},parent:function(){e("parent")},
children:function(){e("children")}}}});"use strict";l.when("A","rush-component-properties","rush-util").register("rush-dom",function(b,f,d){function e(a){return!(!a.hasAttribute||!a.hasAttribute("data-component-id"))}function a(a){return!(!a||1!==a.nodeType)}function k(a){for(var c=a.length;c--;){var b=a[c];if(!b||!b.nodeType)return!1}return!0}function c(a){return"string"===typeof a}function g(a,c){var b=null;l.now(c).execute(function(c){c&&(b=new c(f(a)))});return b}function n(a,c){var b=x[c];if(c=
b&&b(f(a))||g(a,c))return b=p++,a.setAttribute&&a.setAttribute("data-component-id",b),v[b]=c}function u(c){var g=[],f,d,p;if(A){c=b.isArray(c)?c:[c];if(!k(c))throw Error("[invalid arguments] valid signature is scan(elements:Node|Array\x3cNode\x3e)");c=b.filter(c,function(c){return a(c)});b.each(c,function(a){a.hasAttribute&&a.hasAttribute("data-component-type")&&!e(a)&&g.push(a);g=g.concat(q(a).find("[data-component-type]").filter(":not([data-component-id])").get())});d=0;for(p=g.length;d<p;d++)c=
g[d],(f=c.getAttribute&&c.getAttribute("data-component-type"))&&(e(c)||n(c,f))}}function m(c){b.isArray(c)||(c=[c]);if(!k(c))throw Error("[invalid arguments] valid signature is unscan(elements:Node|Array\x3cNode\x3e)");c=b.filter(c,function(c){return a(c)});b.each(c,function(a){var c=q(a),b=[],h;e(a)&&b.push(a);b=b.concat(c.find("[data-component-id]").get());for(a=b.length;a--;){c=b[a];h=c.getAttribute("data-component-id");var g=v[h];delete v[h];(h=g)&&r(h.teardown)&&h.teardown();c.removeAttribute&&
c.removeAttribute("data-component-id")}})}function t(b,g){if(!a(b)||!c(g))throw Error("[invalid arguments] valid signature is append(parentElem:Node.ELEMENT_NODE, appendingContent:String)");d.isBlank(g)||(b=q(b),g=q(g),b.append(g),u(g.get()))}function w(c){if(!a(c))throw Error("[invalid arguments] valid signature is removeChildren(parentElem:Node.ELEMENT_NODE)");c=q(c);m(c.children().get());c.empty()}var q=b.$,r=q.isFunction,p=1,v={},x={},A=!0;return{scan:u,scanFor:function(c,g){var f='[data-component-type\x3d"'+
g+'"]',p=[],v,t;c=b.isArray(c)?c:[c];if(!k(c))throw Error("`elements` must be either an element or a list of elements.");if(d.isBlank(g))throw Error("`componentName` must be a non-empty string.");c=b.filter(c,function(c){return a(c)});b.each(c,function(a){(a.getAttribute&&a.getAttribute("data-component-type"))!==g||e(a)||p.push(a);p=p.concat(q(a).find(f).filter(":not([data-component-id])").get())});v=0;for(t=p.length;v<t;v++)c=p[v],e(c)||n(c,g)},disableScanning:function(){A=!1},enableScanning:function(){A=
!0},unscan:m,remove:function(c){if(!a(c))throw Error("[invalid arguments] valid signature is remove(elem:Node.ELEMENT_NODE)");c.parentNode&&(m(c),c.parentNode.removeChild(c))},append:t,insertBefore:function(b,g){if(!a(b)||!c(g))throw Error("[invalid arguments] valid signature is insertBefore(target:Node.ELEMENT_NODE, newContent:String)");d.isBlank(g)||(g=q(g),q(b).before(g),u(g.get()))},insertAfter:function(b,g){if(!a(b)||!c(g))throw Error("[invalid arguments] valid signature is insertBefore(target:Node.ELEMENT_NODE, newContent:String)");
d.isBlank(g)||(g=q(g),q(b).after(g),u(g.get()))},replace:function(b,g){var e;if(!a(b)||!c(g))throw Error("[invalid arguments] valid signature is replace(oldElem:Node.ELEMENT_NODE, newContent:String)");e=q(b);d.isNotBlank(g)&&(g=q(g),e.after(g),u(g.get()));m(b);e.remove()},removeChildren:w,replaceInnerHTML:function(b,g){if(!a(b)||!c(g))throw Error("[invalid arguments] valid signature is replaceInnerHTML(parentElem:Node.ELEMENT_NODE, newInnerContent:String)");w(b);t(b,g)},registerComponent:function(a,
c){if(d.isBlank(a))throw Error("A non-empty component name is required for registerComponent(name:String, callback:function)");if(!r(c))throw Error("A component callback function is required for registerComponent(name:String, callback:function)");a=b.trim(a);if(x[a])throw Error("Component has already been registered: "+a);x[a]=c}}});"use strict";l.when("A","rush-util").register("rush-metadata",function(b,f){function d(a){var e=a&&a.getAttribute&&a.getAttribute("data-metadata-key"),e=e&&b.state(e)||
{};e.html=a?f.outerHTML(a):"";return e}var e=b.$;return{getMetadataForElem:function(a){a=e(a)[0];return d(a)},getMetadata:function(a){var b=[];a=e(a||document).find("[data-metadata-key]");var c,g=a.length||0;for(c=0;c<g;c++)b.push(d(a[c]));return b}}});l.when("jQuery","rush-util","rush-attributed-error-logger").register("rush-dispatcher",function(b,f,d){function e(){}function a(a,c){return function(){var b=a.indexOf(c);-1!==b&&(a[b]=e)}}var k=d.create("rush-dispatcher"),c=f.assert,g=f.isNotBlank,
n=b.isFunction,l=b.trim,m={};return{trigger:function(a,b){var e=0,f;c(g(a),"must provide an event name");a=l(a);for(f=m[a]||[];e<f.length;){try{f[e](b)}catch(d){k.error(d,"A handler for event `"+a+"` failed to execute")}e++}},on:function(b,e){c(g(b),"must provide an event name");c(n(e),"must provide an event callback function");m[b]=m[b]||[];b=m[b];b.push(e);return a(b,e)}}});"use strict";l.when("A","rush-dispatcher","rush-util").register("rush-page-state-dispatcher",function(b,f,d){function e(a,
e){a=a||{};e=e||{};b.each(a,function(a,b){if(!0===e||!0===e[b]){a=[].concat(a);for(var g=0,d=a.length;g<d;g++)f.trigger(b,{data:[a[g]],memo:c})}})}var a=d.isObject,k=!1,c;return{start:function(g){k||(k=!0,g=g||{},a(g)&&(g.dispatchedByRushPageStateDispatcher=!0),c=g,g=b.state("rush-dispatch"),e(g,!0),b.state.bind("rush-dispatch",e))},isDispatchedByPageState:function(a){return a&&a.memo===c}}});l.when("rush-error-logger").register("rush-attributed-error-logger",function(b){return{create:function(f){return{getErrorMessage:b.getErrorMessage,
fatal:function(d,e){b.fatal(d,e,f)},error:function(d,e){b.error(d,e,f)},warn:function(d,e){b.warn(d,e,f)},logErrorWrapper:function(d,e,a){return b.logErrorWrapper(d,e,f,a)}}}}});l.register("rush-console-logger",function(){function b(b){return function(){}}function f(){console&&console.log&&console.log.apply(console,arguments)}return{log:b(f),warn:b(function(){console&&console.warn?console.warn.apply(console,arguments):f.apply(null,arguments)}),error:b(function(){console&&console.error?console.error.apply(console,
arguments):f.apply(null,arguments)})}});l.when("rush-console-logger").register("rush-error-logger",function(b){function f(e,a,f,c){a={message:a,logLevel:f,attribution:c};b.log(a);if(e)switch(f){case "FATAL":case "ERROR":b.error(e);break;case "WARN":b.warn(e);break;default:b.log(e)}r.ueLogError&&r.ueLogError(e,a)}var d={fatal:function(b,a,d){f(b,a,"FATAL",d)},error:function(b,a,d){f(b,a,"ERROR",d)},warn:function(b,a,d){f(b,a,"WARN",d)},logError:function(b,a,f){d.fatal(f,a,b)},getErrorMessage:function(b){try{return b instanceof
Error?b.message:JSON.stringify(b)}catch(a){return"could not get the error message"}},logErrorWrapper:function(b,a,f,c){return function(){try{return b.apply(a,arguments)}catch(g){c||(c=d.getErrorMessage(g)),d.fatal(g,c,f)}}}};return d});l.when("rush-error-logger").register("rush-logger",function(b){return b});"use strict";l.when("A","R","rush-dom","rush-util","rush-logger","rush-component-api","rush-application-api","rush-application-public-api").register("rush-framework",function(b,f,d,e,a,k,c,g){function n(){!1===
q&&(q=!0,t=t.concat(w),w=[],y())}var l=b.$.isFunction,r=b.$.proxy,t=[],w=[],q=!1,y=function(){var a;a=b.throttle(function(){var a=0,c;c=t.length;if(3<=c)d.scan(document.body);else for(;a<c;a++)d.scanFor(document.body,t[a]);t=[]},25);return function(){t.length&&a()}}();return{attachApp:function(a,d,k,n){var h=!1,q=[],t,z;if(!e.isNotBlank(a)||!e.isNotBlank(d)||!l(k))throw Error("[invalid arguments] valid signature is attachApp(appName:String, attribution:String, handler:function(api:RushApplicationAPI))");
a=b.trim(a);d=b.trim(d);z=new f.ApplicationBase(a);n=b.extend({alternativeUrl:m},n);z.addRoute=function(){var a=Array.prototype.slice.call(arguments);h?f.addRoute.apply(f,a):q.push(a)};t=c(z,d);a=g(a,d);a=b.extend(a,k(t));z.load=r(a.onStart,a);z.unload=r(a.onStop,a);h=!0;b.each(q,function(a){f.addRoute.apply(f,a)});f.start(n.alternativeUrl);return a},registerComponent:function(a,c,g){if(e.isBlank(a))throw Error("A non-empty component name is required for registerComponent(componentName:String, componentAttribution:String, componentSetup:function).");
if(e.isBlank(c))throw Error("A non-empty component attribution is required for registerComponent(componentName:String, componentAttribution:String, componentSetup:function).");if(!l(g))throw Error("A component setup function is required for registerComponent(componentName:String, componentAttribution:String, componentSetup:function).");d.registerComponent(a,function(e){var d=b.extend(k(a,c),e),f=[],n=d.on;d.on=function(a){var c=n.apply(null,arguments);f.push([a,c]);return c};try{g(d)}catch(m){d.log.fatal(m,
'Component setup failure in component "'+a+'".')}return{teardown:function(){b.each(f,function(c){var b=c[0];c=c[1];if(l(c))try{c()}catch(g){d.log.fatal(g,'Component teardown failure in component "'+a+'" during on("'+b+'") teardown.')}});if(l(d.teardown))try{d.teardown()}catch(c){d.log.fatal(c,'Component teardown failure in component "'+a+'" during the custom component teardown.')}}}});!0===q?(t.push(a),setTimeout(y,0)):w.push(a)},turnOnAutoScanner:n,turnOffAutoScanner:function(){q=!1},enableAllScanning:function(){d.enableScanning();
d.scan(document.body);n()},disableAllScanning:function(){d.disableScanning();q=!1}}});"use strict";l.register("rush-metrics-adapter",function(){function b(){}var f,d,e,a;f=r.uet||b;d=r.ues||b;e=r.ue&&r.ue.count||b;a=r.uex||b;return{setTimer:function(a,c,b,d){f(a,c,b,d)},setValue:function(a,c,b){d(a,c,b)},setCount:function(a,c,b,d){d=d?d:{};c&&(d.scope=c);e(a,b,d)},incrementCount:function(a,c,b){b=b?b:{};c&&(b.scope=c);c=(e(a,m,b)||0)+1;e(a,c,b)},publish:function(b,c,g){a(b,c,g)}}});"use strict";l.when("rush-metrics-adapter",
"A").register("rush-metrics",function(b,f){var d={wb:1},e=0,a,k;f=f.createClass({_metricsAdapter:m,_isPublished:!1,_scope:m,init:function(a,g){this._scope=(a||"amazonRush").substring(0,26)+e++;this._metricsAdapter=g||b},getMetricsAdapter:function(){return this._metricsAdapter},isPublished:function(){return this._isPublished},validateIsNotPublished:function(){return this.isPublished()?!1:!0},setTimer:function(a,b,d){this.validateIsNotPublished()?this.getMetricsAdapter().setTimer(a,this._scope,b,d):
this.getMetricsAdapter().incrementCount("s-metrics-published-"+a);return this},setValue:function(a,b){this.validateIsNotPublished()&&this.getMetricsAdapter().setValue(a,this._scope,b);return this},setCount:function(a,b){this.validateIsNotPublished()&&this.getMetricsAdapter().setCount(a,this._scope,b);return this},loadComplete:function(a){this.validateIsNotPublished()&&(this.getMetricsAdapter().publish("ld",this._scope,a),this._isPublished=!0)}});a=f.extend({_hasRequestId:!1,_hasSecondRequestId:!1,
_isLoadWaiting:!1,_loadWaitingOptions:m,init:function(a,b){this._super(a,b);this.clientTimeBased();this.beginRequest()},clientTimeBased:function(){return this.setValue("ctb","1")},beginRequest:function(){return this.setTimer("tc")},beginResponse:function(){return this.setValue("t0",+new Date)},responseComplete:function(){return this.setTimer("be")},setRequestId:function(a){if(!0!==this._hasRequestId)return a&&this.validateIsNotPublished()&&(this._hasRequestId=!0,this.setValue("id",a),!0===this._isLoadWaiting&&
this.loadComplete(this._loadWaitingOptions)),this},setSecondRequestId:function(a){if(!0!==this._hasSecondRequestId)return a&&this.validateIsNotPublished()&&(this._hasSecondRequestId=!0,this.setValue("id2",a)),this},criticalFeatureComplete:function(a){return this.setTimer("cf",m,a)},aboveTheFoldComplete:function(a){return this.setTimer("af",m,a)},functionalComplete:function(a){return this.setTimer("fn",m,a)},counterReady:function(a,b){return this.setCount(a,b)},loadComplete:function(a){!0!==this._hasRequestId?
(this._isLoadWaiting=!0,this._loadWaitingOptions=a):this._super(a)}});k=f.extend({init:function(a,b){this._super(a,b);this.bodyBegin()},setTimer:function(a,b,e){b=b||d;return this._super(a,b,e)},bodyBegin:function(){return this.setTimer("bb")},criticalFeatureComplete:function(a){return this.setTimer("cf",m,a)},loadComplete:function(a){a=a||d;this._super(a)}});return{newPageTransitionScope:function(b,d){return new a(b,d)},newWidgetScope:function(a,b){return new k(a,b)}}});"use strict";l.when("A","rush-metrics",
"rush-dispatcher").register("rush-page-transition-metrics",function(b,f,d){function e(a){y=f.newPageTransitionScope(null,a)}function a(){y||e();return y}function k(c){var d;d=b.$.isArray(c)?c[0].requestId:c.requestId;c=b.$.isArray(c)?c[0].secondRequestId:c.secondRequestId;d&&a().setRequestId(d);c&&a().setSecondRequestId(c)}function c(){e();a().beginRequest()}function g(){a().beginResponse()}function l(){a().responseComplete()}function m(b){a().criticalFeatureComplete(b.timeOverride)}function r(b){a().aboveTheFoldComplete(b.timeOverride)}
function t(b){a().functionalComplete(b.timeOverride)}function w(b){a().counterReady(b.counter,b.value)}function q(){a().loadComplete()}var y,p={RECEIVED_METRICS_INFO:"rushMetricsEvents:metricsInfo",BEGIN_REQUEST:"rushMetricsEvents:beginRequest",BEGIN_RESPONSE:"rushMetricsEvents:beginResponse",RESPONSE_COMPLETE:"rushMetricsEvents:responseComplete",CRITICAL_FEATURE_COMPLETE:"rushMetricsEvents:criticalFeatureComplete",ABOVE_THE_FOLD_COMPLETE:"rushMetricsEvents:aboveTheFoldComplete",FUNCTIONAL_COMPLETE:"rushMetricsEvents:functionalComplete",
COUNTER_READY:"rushMetricsEvents:counterReady",LOAD_COMPLETE:"rushMetricsEvents:loadComplete"};d.on(p.RECEIVED_METRICS_INFO,k);d.on(p.BEGIN_REQUEST,c);d.on(p.BEGIN_RESPONSE,g);d.on(p.RESPONSE_COMPLETE,l);d.on(p.CRITICAL_FEATURE_COMPLETE,m);d.on(p.ABOVE_THE_FOLD_COMPLETE,r);d.on(p.FUNCTIONAL_COMPLETE,t);d.on(p.COUNTER_READY,w);d.on(p.LOAD_COMPLETE,q);return{EVENTS:p,createNewPageTransitionScope:e,receivedMetricsInfo:k,beginRequest:c,beginResponse:g,responseComplete:l,criticalFeatureComplete:m,aboveTheFoldComplete:r,
functionalComplete:t,counterReady:w,loadComplete:q}});"use strict";l.execute("rush-feature-browser-support",function(){function b(b,e){f&&f.tag&&f.tag("supports:"+b+":"+("function"===typeof e?"true":"false"))}var f=r.ue;b("mutationobserver",r.MutationObserver);b("getelementsbyclassname",document.getElementsByClassName);b("map",r.Map)});"use strict";l.when("rush-ajax-controller","rush-dispatcher","rush-dom","rush-metadata","rush-page-transition-metrics","rush-page-state-dispatcher","rush-util").register("Rush",
function(b,f,d,e,a,k,c){return{ajax:b,trigger:f.trigger,on:f.on,startPageStateDispatcher:k.start,isDispatchedByPageState:k.isDispatchedByPageState,scan:d.scan,unscan:d.unscan,remove:d.remove,removeChildren:d.removeChildren,append:d.append,replace:d.replace,replaceInnerHTML:d.replaceInnerHTML,getMetadataForElem:e.getMetadataForElem,getMetadata:e.getMetadata,metrics:{EVENTS:a.EVENTS},util:c}});"use strict";l.when("jQuery","a-util").register("rush-util",function(b,f){var d=f.trim,e={outerHTML:function(a){return a.outerHTML?
a.outerHTML:b("\x3cdiv\x3e").append(b(a).clone()).html()},isObject:function(a){return"object"===typeof a&&null!==a},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isNullOrUndefined:function(a){return null===a||a===m},isNotBlank:function(a){return"string"===typeof a&&""!==d(a)},isBlank:function(a){return!e.isNotBlank(a)},setIfEmpty:function(a,b,c){a[b]===m&&(a[b]=c)},makeComponentId:function(a,b){return e.isNotBlank(a)&&e.isNotBlank(b)?a+":"+b:""},freeze:function(a){return Object.freeze?
Object.freeze(a):a},isFunction:b.isFunction,assert:function(a,b){if(!a)throw Error(b);}};return e.freeze(e)})});