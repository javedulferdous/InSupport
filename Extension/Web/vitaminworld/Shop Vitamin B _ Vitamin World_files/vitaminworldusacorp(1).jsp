Array.prototype.filter||(Array.prototype.filter=function(t,e){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var r=this.length>>>0,n=new Array(r),o=this,l=0,i=-1;if(void 0===e)for(;++i!==r;)i in this&&t(o[i],i,o)&&(n[l++]=o[i]);else for(;++i!==r;)i in this&&t.call(e,o[i],i,o)&&(n[l++]=o[i]);return n.length=l,n}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,r;if(null===this||void 0===this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),r=0;r<o;){var l;r in n&&(l=n[r],t.call(e,l,r,n)),r++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var r;if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return-1;var l=0|e;if(l>=o)return-1;for(r=Math.max(l>=0?l:o-Math.abs(l),0);r<o;){if(r in n&&n[r]===t)return r;r++}return-1}),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,r,n,o=document,l=[];if(o.querySelectorAll)return o.querySelectorAll("."+t);if(o.evaluate)for(r=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=o.evaluate(r,o,null,0,null);n=e.iterateNext();)l.push(n);else for(e=o.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+t+"(\\s|$)"),n=0;n<e.length;n++)r.test(e[n].className)&&l.push(e[n]);return l}),document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),n.push(e);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(o){if("function"!=typeof o&&("object"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var l,i,s=[];for(l in o)t.call(o,l)&&s.push(l);if(e)for(i=0;i<n;i++)t.call(o,r[i])&&s.push(r[i]);return s}}()),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty;
if (typeof usi_commons === 'undefined') {
	usi_commons = {
		
		debug:location.href.indexOf("usidebug") != -1,
		
		log:function(msg) {
			if (this.debug) {
				if (msg instanceof Error) {
					console.log(msg.name + ': ' + msg.message);
				} else {
					console.log.apply(console, arguments);
				}
			}
		},
		log_error: function(msg) {
			if (this.debug) {
				if (msg instanceof Error) {
					console.log('%c USI Error:', usi_commons.log_styles.error, msg.name + ': ' + msg.message);
				} else {
					console.log('%c USI Error:', usi_commons.log_styles.error, msg);
				}
			}
		},
		log_success: function(msg) {
			if (this.debug) {
				console.log('%c USI Success:', usi_commons.log_styles.success, msg);
			}
		},
		dir:function(obj) {
			if (this.debug) {
				console.dir(obj);
			}
		},
		log_styles: {
			error: 'color: red; font-weight: bold;',
			success: 'color: green; font-weight: bold;'
		},
		domain: "https://www.upsellit.com",
		cdn: "https://upsellit-14516.kxcdn.com",
		is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
		device: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'desktop',
		gup:function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.href);
			if (results == null) return "";
			else return results[1];
		},
		load_script:function(source, callback) {
			if (source.indexOf("//www.upsellit.com") == 0) source = "https:"+source; //upgrade non-secure requests
			var docHead = document.getElementsByTagName("head")[0];
			if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = source;
			if (typeof callback == "function") newScript.onload = callback;
			docHead.appendChild(newScript);
		},
		load_display:function(usiQS, usiSiteID, usiKey, callback) {
			usiKey = usiKey || "";
			var source = this.domain + "/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey;
			this.load_script(source, callback);
		},
		load_facebook:function(usiQS, usiSiteID, usiKey) {
		},
		load_view:function(usiHash, usiSiteID, usiKey, callback) {
			if (typeof(usi_force) != "undefined" || location.href.indexOf("usi_force") != -1 || (usi_cookies.get("usi_sale") == null && usi_cookies.get("usi_launched") == null && usi_cookies.get("usi_launched"+usiSiteID) == null)) {
				usiKey = usiKey || "";
				var usi_append = "";
				if (this.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + this.gup("usi_force_date");
				else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
				if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_id_cache") != null) usi_append += "&usi_id_cache=" + usi_cookies.get("usi_id_cache");
				if (this.debug) usi_append += "&usi_referrer="+encodeURIComponent(location.href);
				var source = this.domain + "/view.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
				if (typeof(this.last_view) !== "undefined" && this.last_view == usiSiteID+"_"+usiKey) return;
				this.last_view = usiSiteID+"_"+usiKey;
				if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') usi_js.cleanup();
				this.load_script(source, callback);
			}
		},
		load_precapture:function(usiQS, usiSiteID, callback) {
			var source = this.domain + "/hound/monitor.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&domain=" + encodeURIComponent(this.domain);
			this.load_script(source, callback);
		},
		load_mail:function(qs, siteID, callback) {
			var source = this.domain + "/mail.jsp?qs=" + qs + "&siteID=" + siteID + "&domain=" + encodeURIComponent(this.domain);
			this.load_script(source, callback);
		},
		send_prod_rec:function(siteID, info, real_time) {
			var result = false;
			try {
				var data = [siteID, info.name, info.link, info.pid, info.price, info.image];
				if (data.indexOf(undefined) == -1) {
					var queryString = [siteID, info.name.replace(/\|/g, "&#124;"), info.link, info.pid, info.price, info.image].join("|");
					if (info.extra) queryString += "|" + info.extra;
					var filetype = real_time ? "jsp" : "js";
					this.load_script(this.domain + "/active/pv2." + filetype + "?" + encodeURIComponent(queryString));
					result = true;
				}
			} catch (e) {
				this.report_error(e);
				result = false;
			}
			return result;
		},
		report_error:function(err) {
			if (err == null) return;
			if (typeof err === 'string') err = new Error(err);
			if (!(err instanceof Error)) return;
			if (typeof(usi_commons.error_reported) !== "undefined") {
			    return;
            }
            usi_commons.error_reported = true;
			if (location.href.indexOf('usishowerrors') !== -1) throw err;
			else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack));
			usi_commons.log_error(err.message);
			usi_commons.dir(err);
		},
		gup_or_get_cookie: function(name, expireSeconds, forceCookie) {
			if (typeof usi_cookies === 'undefined') {
				usi_commons.log_error('usi_cookies is not defined');
				return;
			}
			expireSeconds = (expireSeconds || usi_cookies.expire_time.day);
			if (name == "usi_enable") expireSeconds = usi_cookies.expire_time.hour;
			var value = null;
			var qsValue = usi_commons.gup(name);
			if (qsValue !== '') {
				value = qsValue;
				usi_cookies.set(name, value, expireSeconds, forceCookie);
			} else {
				value = usi_cookies.get(name);
			}
			return (value || '');
		}
	};
}
if (typeof usi_app === 'undefined') {
	try {
		if("undefined"==typeof usi_cookies&&(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,o,i){try{var n=-1;if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n=t.getTime()}var r=window.top||window,s=0;null!=o&&-1!=o.indexOf("=")&&(o=o.replace(new RegExp("=","g"),"USIEQLS")),null!=o&&-1!=o.indexOf(";")&&(o=o.replace(new RegExp(";","g"),"USIPRNS"));for(var u=r.name.split(";"),c="",a=0;a<u.length;a++){var l=u[a].split("=");3==l.length?(l[0]==e&&(l[1]=o,l[2]=n,s=1),null!=l[1]&&"null"!=l[1]&&(c+=l[0]+"="+l[1]+"="+l[2]+";")):""!=u[a]&&(c+=u[a]+";")}0==s&&(c+=e+"="+o+"="+n+";"),r.name=c}catch(e){}},flush_window_name:function(e){try{for(var o=window.top||window,i=o.name.split(";"),n="",t=0;t<i.length;t++){var r=i[t].split("=");3==r.length&&(0==r[0].indexOf(e)||(n+=i[t]+";"))}o.name=n}catch(e){}},get_from_window_name:function(e){try{for(var o=(window.top||window).name.split(";"),i=0;i<o.length;i++){var n=o[i].split("=");if(3==n.length){if(n[0]==e)if(-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),!("-1"!=n[2]&&usi_cookies.datediff(n[2])<0))return"undefined"==typeof usi_cookieless&&usi_cookies.create_cookie(n[0],t,usi_cookies.datediff(n[2])/1e3),usi_results=[t,n[2]],usi_results}else if(2==n.length){var t;if(n[0]==e)return-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),usi_results=[t,(new Date).getTime()+6048e5],usi_results}}}catch(e){}return null},datediff:function(e){return e-(new Date).getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),o=e[e.length-1];if("com"==o||"net"==o||"org"==o||"us"==o||"co"==o||"ca"==o)return e[e.length-2]+"."+e[e.length-1]}catch(e){}return document.domain},create_cookie:function(e,o,i){if(!1!==navigator.cookieEnabled){var n="";if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n="; expires="+t.toGMTString()}var r="samesite=none;";0==location.href.indexOf("https://")&&(r+="secure;");var s=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(s=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(o)+n+"; path=/;domain="+s+"; "+r}},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;for(var o=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var t=i[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(o))return decodeURIComponent(t.substring(o.length,t.length))}return null},del:function(e){usi_cookies.set(e,null,-100)},get:function(e){var o=null,i=usi_cookies.get_from_window_name(e);if(null!=i&&i.length>1)try{o=decodeURIComponent(i[0])}catch(e){return i[0]}else o=usi_cookies.read_cookie(e);return null==o?null:o},get_json:function(e){var o=null,i=usi_cookies.get(e);if(null==i)return null;try{o=JSON.parse(i)}catch(e){i=i.replace(/\\"/g,'"');try{o=JSON.parse(JSON.parse(i))}catch(e){try{o=JSON.parse(i)}catch(e){}}}return o},search_cookies:function(e){e=e||"";var o=[];return document.cookie.split(";").forEach(function(i){var n=i.split("=")[0].trim();""!==e&&0!==n.indexOf(e)||o.push(n)}),o},set:function(e,o,i,n){"undefined"!=typeof usi_nevercookie&&(n=!1),void 0===i&&(i=-1);try{o=o.replace(/(\r\n|\n|\r)/gm,"")}catch(e){}if("undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",o+"",i),"undefined"==typeof usi_cookieless||n||null==o){if(null!=o){if(null==usi_cookies.read_cookie(e))if(!n)if(usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count)return void usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);o.length>usi_cookies.max_cookie_length&&(usi_cookies.report_error('Cookie "'+e+'" truncated ('+o.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length),o=o.substring(0,usi_cookies.max_cookie_length-1))}usi_cookies.create_cookie(e,o,i)}},set_json:function(e,o,i,n){var t=JSON.stringify(o).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,t,i,n)},flush:function(e){e=e||"usi_";var o,i,n,t=document.cookie.split(";");for(o=0;o<t.length;o++)0==(i=t[o]).trim().toLowerCase().indexOf(e)&&(n=i.trim().split("=")[0],usi_cookies.del(n));usi_cookies.flush_window_name(e)},print:function(){for(var e=document.cookie.split(";"),o="",i=0;i<e.length;i++){var n=e[i];0==n.trim().toLowerCase().indexOf("usi_")&&(console.log(n.trim()+" (cookie)"),o+=","+n.trim().toLowerCase().split("=")[0]+",")}var t=(window.top||window).name.split(";");for(i=0;i<t.length;i++){var r=t[i].split("=");if(3==r.length&&0==r[0].indexOf("usi_")&&-1==o.indexOf(","+r[0]+",")){var s=r[1];-1!=s.indexOf("USIEQLS")&&(s=s.replace(new RegExp("USIEQLS","g"),"=")),-1!=s.indexOf("USIPRNS")&&(s=s.replace(new RegExp("USIPRNS","g"),";")),console.log(r[0]+"="+s+" (window.name)")}}},value_exists:function(){var e,o;for(e=0;e<arguments.length;e++)if(""===(o=usi_cookies.get(arguments[e]))||null===o||"null"===o||"undefined"===o)return!1;return!0},report_error:function(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup))try{""!=usi_commons.gup("usi_email_id")&&usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0)}catch(e){usi_commons.report_error(e)}
"undefined"==typeof usi_dom&&(usi_dom={},usi_dom.get_elements=function(e,t){return t=t||document,Array.prototype.slice.call(t.querySelectorAll(e))},usi_dom.count_elements=function(e,t){return t=t||document,usi_dom.get_elements(e,t).length},usi_dom.get_nth_element=function(e,t,n){var o=null;n=n||document;var r=usi_dom.get_elements(t,n);return r.length>=e&&(o=r[e-1]),o},usi_dom.get_first_element=function(e,t){if(""===(e||""))return null;if(t=t||document,"[object Array]"===Object.prototype.toString.call(e)){for(var n=null,o=0;o<e.length;o++){var r=e[o];if(null!=(n=usi_dom.get_first_element(r,t)))break}return n}return t.querySelector(e)},usi_dom.get_element_text_no_children=function(e,t){var n="";if(null==t&&(t=!1),null!=(e=e||document)&&null!=e.childNodes)for(var o=0;o<e.childNodes.length;++o)3===e.childNodes[o].nodeType&&(n+=e.childNodes[o].textContent);return!0===t&&(n=usi_dom.clean_string(n)),n.trim()},usi_dom.clean_string=function(e){if("string"==typeof e){return(e=(e=(e=(e=(e=(e=(e=e.replace(/[\u2010-\u2015\u2043]/g,"-")).replace(/[\u2018-\u201B]/g,"'")).replace(/[\u201C-\u201F]/g,'"')).replace(/\u2024/g,".")).replace(/\u2025/g,"..")).replace(/\u2026/g,"...")).replace(/\u2044/g,"/")).replace(/[^\x20-\xFF\u0100-\u017F\u0180-\u024F\u20A0-\u20CF]/g,"").trim()}},usi_dom.encode=function(e){if("string"==typeof e){var t=encodeURIComponent(e);return t=t.replace(/[-_.!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},usi_dom.get_closest=function(e,t){for(e=e||document,"function"!=typeof Element.prototype.matches&&(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});null!=e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},usi_dom.get_classes=function(e){var t=[];return null!=e&&null!=e.classList&&(t=Array.prototype.slice.call(e.classList)),t},usi_dom.add_class=function(e,t){if(null!=e){var n=usi_dom.get_classes(e);-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" "))}},usi_dom.string_to_decimal=function(e){var t=null;if("string"==typeof e)try{var n=parseFloat(e.replace(/[^0-9\.-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.string_to_integer=function(e){var t=null;if("string"==typeof e)try{var n=parseInt(e.replace(/[^0-9-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.get_currency_string_from_content=function(e){if("string"!=typeof e)return"";try{e=e.trim();var t=e.match(/^([^\$]*?)(\$(?:[\,\,]?\d{1,3})+(?:\.\d{2})?)(.*?)$/)||[];return 4===t.length?t[2]:""}catch(e){return usi_commons.log("Error: "+e.message),""}},usi_dom.get_absolute_url=function(){var e;return function(t){return(e=e||document.createElement("a")).href=t,e.href}}(),usi_dom.format_number=function(e,t){var n="";if("number"==typeof e){t=t||0;var o=e.toFixed(t).split(/\./g);if(1==o.length||2==o.length)n=o[0].replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3==0?","+e:e}),2==o.length&&(n+="."+o[1])}return n},usi_dom.format_currency=function(e,t,n){var o="";return e=Number(e),!1===isNaN(e)&&("object"==typeof Intl&&"function"==typeof Intl.NumberFormat?(t=t||"en-US",n=n||{style:"currency",currency:"USD"},o=e.toLocaleString(t,n)):o=e),o},usi_dom.to_decimal_places=function(e,t){if(null!=e&&"number"==typeof e&&null!=t&&"number"==typeof t){if(0==t)return parseFloat(Math.round(e));for(var n=10,o=1;o<t;o++)n*=10;return parseFloat(Math.round(e*n)/n)}return null},usi_dom.trim_string=function(e,t,n){return n=n||"",(e=e||"").length>t&&(e=e.substring(0,t),""!==n&&(e+=n)),e},usi_dom.attach_event=function(e,t,n){var o=usi_dom.find_supported_element(e,n);usi_dom.detach_event(e,t,o),o.addEventListener?o.addEventListener(e,t,!1):o.attachEvent("on"+e,t)},usi_dom.detach_event=function(e,t,n){var o=usi_dom.find_supported_element(e,n);o.removeEventListener?o.removeEventListener(e,t,!1):o.detachEvent("on"+e,t)},usi_dom.find_supported_element=function(e,t){return(t=t||document)===window?window:!0===usi_dom.is_event_supported(e,t)?t:t===document?window:usi_dom.find_supported_element(e,document)},usi_dom.is_event_supported=function(e,t){return null!=t&&void 0!==t["on"+e]},usi_dom.is_defined=function(e,t){if(null==e)return!1;if(""===(t||""))return!1;var n=!0,o=e;return t.split(".").forEach(function(e){!0===n&&(null==o||"object"!=typeof o||!1===o.hasOwnProperty(e)?n=!1:o=o[e])}),n},usi_dom.observe=function(e,t,n){var o=location.href,r=window.MutationObserver||window.WebkitMutationObserver;return t=t||{onUrlUpdate:!1,observerOptions:{childList:!0,subtree:!0}},function(e,n){var i=null,u=function(){var e=location.href;t.onUrlUpdate&&e!==o?(n(),o=e):n()};return r?(i=new r(function(e){var r=location.href,i=e[0].addedNodes.length||e[0].removedNodes.length;i&&t.onUrlUpdate&&r!==o?(n(),o=r):i&&n()})).observe(e,t.observerOptions):window.addEventListener&&(e.addEventListener("DOMNodeInserted",u,!1),e.addEventListener("DOMNodeRemoved",u,!1)),i}}(),usi_dom.params_to_object=function(e){var t={};""!=(e||"")&&e.split("&").forEach(function(e){var n=e.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):1===n.length&&(t[decodeURIComponent(n[0])]=null)});return t},usi_dom.object_to_params=function(e){var t=[];if(null!=e)for(var n in e)!0===e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+(null==e[n]?"":encodeURIComponent(e[n])));return t.join("&")},usi_dom.interval_with_timeout=function(e,t,n,o){if("function"!=typeof e)throw new Error("usi_dom.interval_with_timeout(): iterationFunction must be a function");if(null==t)t=function(e){return e};else if("function"!=typeof t)throw new Error("usi_dom.interval_with_timeout(): timeoutCallback must be a function");if(null==n)n=function(e){return e};else if("function"!=typeof n)throw new Error("usi_dom.interval_with_timeout(): completeCallback must be a function");var r=(o=o||{}).intervalMS||20,i=o.timeoutMS||2e3;if("number"!=typeof r)throw new Error("usi_dom.interval_with_timeout(): intervalMS must be a number");if("number"!=typeof i)throw new Error("usi_dom.interval_with_timeout(): timeoutMS must be a number");var u=!1,l=new Date,a=setInterval(function(){var o=new Date-l;if(o>=i)return clearInterval(a),t({elapsedMS:o});!1===u&&(u=!0,e(function(e,t){if(u=!1,!0===e)return clearInterval(a),(t=t||{}).elapsedMS=new Date-l,n(t)}))},r)},usi_dom.load_external_stylesheet=function(e,t,n){if(""!==(e||"")){""===(t||"")&&(t="usi_stylesheet_"+(new Date).getTime());var o={url:e,id:t},r=document.getElementsByTagName("head")[0];if(null!=r){var i=document.createElement("link");i.type="text/css",i.rel="stylesheet",i.id=o.id,i.href=e,usi_dom.attach_event("load",function(){if(null!=n)return n(null,o)},i),r.appendChild(i)}}else if(null!=n)return n(null,o)},usi_dom.ready=function(e){void 0!==document.readyState&&"complete"===document.readyState?e():window.addEventListener?window.addEventListener("load",e,!0):window.attachEvent?window.attachEvent("onload",e):setTimeout(e,5e3)},usi_dom.fit_text=function(e,t){t||(t={});var n={multiLine:!0,minFontSize:.1,maxFontSize:20,widthOnly:!1},o={};for(var r in n)t.hasOwnProperty(r)?o[r]=t[r]:o[r]=n[r];var i=Object.prototype.toString.call(e);function u(e,t){var n,o,r,i,u,l,a,s;r=e.innerHTML,u=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"),10),i=function(e){var t=window.getComputedStyle(e,null);return(e.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10))/u}(e),o=function(e){var t=window.getComputedStyle(e,null);return(e.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10))/u}(e),i&&(t.widthOnly||o)||(t.widthOnly?usi_commons.log("Set a static width on the target element "+e.outerHTML):usi_commons.log("Set a static height and width on the target element "+e.outerHTML)),-1===r.indexOf("textFitted")?((n=document.createElement("span")).className="textFitted",n.style.display="inline-block",n.innerHTML=r,e.innerHTML="",e.appendChild(n)):n=e.querySelector("span.textFitted"),t.multiLine||(e.style["white-space"]="nowrap"),l=t.minFontSize,s=t.maxFontSize;for(var c=l,d=1e3;l<=s&&d>0;)d--,a=s+l-.1,n.style.fontSize=a+"em",n.scrollWidth/u<=i&&(t.widthOnly||n.scrollHeight/u<=o)?(c=a,l=a+.1):s=a-.1;n.style.fontSize!==c+"em"&&(n.style.fontSize=c+"em")}"[object Array]"!==i&&"[object NodeList]"!==i&&"[object HTMLCollection]"!==i&&(e=[e]);for(var l=0;l<e.length;l++)u(e[l],o)});
"undefined"==typeof usi_ajax&&(usi_ajax={},usi_ajax.get=function(e,t){try{return usi_ajax.get_with_options({url:e},t)}catch(e){usi_commons.report_error(e)}},usi_ajax.get_with_options=function(e,t){null==t&&(t=function(){});var r={};if((e=e||{}).headers=e.headers||[],null==XMLHttpRequest)return t(new Error("XMLHttpRequest not supported"),r);if(""===(e.url||""))return t(new Error("url cannot be blank"),r);try{var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.setRequestHeader("Content-type","application/json"),e.headers.forEach(function(e){""!==(e.name||"")&&""!==(e.value||"")&&a.setRequestHeader(e.name,e.value)}),a.onreadystatechange=function(){if(4===a.readyState){r.status=a.status,r.responseText=a.responseText||"";var e=null;return 0!==String(a.status).indexOf("2")&&(e=new Error("http.status: "+a.status)),t(e,r)}},a.send()}catch(e){return usi_commons.report_error(e),t(e,r)}},usi_ajax.post=function(e,t,r){try{return usi_ajax.post_with_options({url:e,params:t},r)}catch(e){usi_commons.report_error(e)}},usi_ajax.post_with_options=function(e,t){null==t&&(t=function(){});var r={};if((e=e||{}).headers=e.headers||[],e.paramsDataType=e.paramsDataType||"string",e.params=e.params||"",null==XMLHttpRequest)return t(new Error("XMLHttpRequest not supported"),r);if(""===(e.url||""))return t(new Error("url cannot be blank"),r);try{var a=new XMLHttpRequest;a.open("POST",e.url,!0),"formData"===e.paramsDataType||("object"===e.paramsDataType?(a.setRequestHeader("Content-type","application/json; charset=utf-8"),e.params=JSON.stringify(e.params)):a.setRequestHeader("Content-type","application/x-www-form-urlencoded")),e.headers.forEach(function(e){""!==(e.name||"")&&""!==(e.value||"")&&a.setRequestHeader(e.name,e.value)}),a.onreadystatechange=function(){if(4===a.readyState){r.status=a.status,r.responseText=a.responseText||"",r.responseURL=a.responseURL||"";var e=null;return 0!==String(a.status).indexOf("2")&&(e=new Error("http.status: "+a.status)),t(e,r)}},a.send(e.params)}catch(e){return usi_commons.report_error(e),t(e,r)}},usi_ajax.form_post=function(e,t,r){try{r=r||"post";var a=document.createElement("form");a.setAttribute("method",r),a.setAttribute("action",e),null!=t&&"object"==typeof t&&Object.keys(t).forEach(function(e){var r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name",e),r.setAttribute("value",t[e]),a.appendChild(r)}),document.body.appendChild(a),a.submit()}catch(e){usi_commons.report_error(e)}},usi_ajax.put_with_options=function(e,t){null==t&&(t=function(){});var r={};if((e=e||{}).headers=e.headers||[],null==XMLHttpRequest)return t(new Error("XMLHttpRequest not supported"),r);if(""===(e.url||""))return t(new Error("url cannot be blank"),r);try{var a=new XMLHttpRequest;a.open("PUT",e.url,!0),a.setRequestHeader("Content-type","application/json"),e.headers.forEach(function(e){""!==(e.name||"")&&""!==(e.value||"")&&a.setRequestHeader(e.name,e.value)}),a.onreadystatechange=function(){if(4===a.readyState){r.status=a.status,r.responseText=a.responseText||"";var e=null;return 0!==String(a.status).indexOf("2")&&(e=new Error("http.status: "+a.status)),t(e,r)}},a.send()}catch(e){return usi_commons.report_error(e),t(e,r)}},usi_ajax.get_with_script=function(e,t,r){try{var a={};null==t&&(t=!0);var n="usi_"+(new Date).getTime(),s=document.getElementsByTagName("head")[0];top.location!=location&&(s=parent.document.getElementsByTagName("head")[0]);var o=document.createElement("script");o.id=n,o.type="text/javascript",o.src=e,o.addEventListener("load",function(){if(!0===t&&s.removeChild(o),null!=r)return r(null,a)}),s.appendChild(o)}catch(e){usi_commons.report_error(e)}},usi_ajax.listener=function(e){if(null==e&&(e=!1),null!=XMLHttpRequest){var t=this;t.ajax=new Object,t.clear=function(){t.ajax.requests=[],t.ajax.registeredRequests=[],t.ajax.scriptLoads=[],t.ajax.registeredScriptLoads=[]},t.clear(),t.register=function(e,r,a){try{var n={method:e=(e||"*").toUpperCase(),url:r=r||"*",callback:a=a||function(){}};t.ajax.registeredRequests.push(n)}catch(e){usi_commons.report_error(e)}},t.registerScriptLoad=function(e,r){try{var a={url:e=e||"*",callback:r=r||function(){}};t.ajax.registeredScriptLoads.push(a)}catch(e){usi_commons.report_error(e)}},t.registerFormSubmit=function(t,r){try{null!=t&&usi_dom.attach_event("submit",function(a){if(!0===e&&usi_commons.log("USI AJAX: form submit"),null!=a&&!0===a.returnValue){a.preventDefault();var n={action:t.action,data:{},e:a},s=["submit"];if(Array.prototype.slice.call(t.elements).forEach(function(e){try{-1===s.indexOf(e.type)&&("checkbox"===e.type?!0===e.checked&&(n.data[e.name]=e.value):n.data[e.name]=e.value)}catch(e){usi_commons.report_error(e)}}),null!=r)return r(null,n);a.returnValue=!0}},t)}catch(e){usi_commons.report_error(e)}},t.listen=function(){try{t.ajax.originalOpen=XMLHttpRequest.prototype.open,t.ajax.originalSend=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=function(r,a){r=(r||"").toUpperCase(),a=a||"",a=usi_dom.get_absolute_url(a),!0===e&&usi_commons.log("USI AJAX: open["+r+"]: "+a);var n={method:r,url:a,openDate:new Date};t.ajax.requests.push(n);var s=null;t.ajax.registeredRequests.forEach(function(e){e.method!=r&&"*"!=e.method||(a.indexOf(e.url)>-1||"*"==e.url)&&(s=e)}),null!=s&&(!0===e&&usi_commons.log("USI AJAX: Registered URL["+r+"]: "+a),this.requestObj=n,this.requestObj.callback=s.callback),t.ajax.originalOpen.apply(this,arguments)},XMLHttpRequest.prototype.send=function(r){var a=this;null!=a.requestObj&&(!0===e&&usi_commons.log("USI AJAX: Send Registered URL["+a.requestObj.method+"]: "+a.requestObj.url),""!=(r||"")&&(a.requestObj.params=r),a.addEventListener?a.addEventListener("readystatechange",function(){t.ajax.readyStateChanged(a)},!1):t.ajax.proxifyOnReadyStateChange(a)),t.ajax.originalSend.apply(a,arguments)},t.ajax.readyStateChanged=function(t){if(4===t.readyState&&null!=t.requestObj&&(t.requestObj.completedDate=new Date,!0===e&&usi_commons.log("Completed: "+t.requestObj.url),null!=t.requestObj.callback)){var r={requestObj:t.requestObj,responseText:t.responseText};return t.requestObj.callback(null,r)}},t.ajax.proxifyOnReadyStateChange=function(e){var r=e.onreadystatechange;null!=r&&(e.onreadystatechange=function(){t.ajax.readyStateChanged(e),r()})},document.head.addEventListener("load",function(e){if(null!=e&&null!=e.target&&""!=(e.target.src||"")){var r=e.target.src,a={url:r=usi_dom.get_absolute_url(r),completedDate:new Date};t.ajax.scriptLoads.push(a);var n=null;if(t.ajax.registeredScriptLoads.forEach(function(e){(r.indexOf(e.url)>-1||"*"==e.url)&&(n=e)}),null!=n&&null!=n.callback)return n.callback(null,a)}},!0),usi_commons.log("USI AJAX: listening ...")}catch(e){usi_commons.report_error(e),usi_commons.log("usi_ajax.listener ERROR: "+e.message)}},t.unregisterAll=function(){t.ajax.registeredRequests=[],t.ajax.registeredScriptLoads=[]}}});
"undefined"==typeof usi_data&&(usi_data={},usi_data.data_store=function(e){this.keyFieldName=e,this.cookieName="usi_data_"+e,this.items=usi_cookies.get_json(this.cookieName)||[],this.get_item=function(e){return usi_array.get_item(this.items,this.keyFieldName,e)},this.save_value=function(e,t,i){var s=this.get_item(e);return null==s&&((s={})[this.keyFieldName]=e,this.items.push(s)),s[t]=i,usi_cookies.set_json(this.cookieName,this.items,usi_cookies.expire_time.day),s},this.get_value=function(e,t){var i=null,s=this.get_item(e);return null!=s&&1==s.hasOwnProperty(t)&&(i=s[t]),i},this.attach_metadata=function(e){var t=null;if(null!=e&&1==e.hasOwnProperty(this.keyFieldName)&&null!=(t=this.get_item(e[this.keyFieldName])))for(var i in t)1==t.hasOwnProperty(i)&&(e[i]=t[i]);return t}},usi_data.new_guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},usi_data.get_session_id=function(){var e=null;return null!=usi_cookies.get("USI_Session")?e=usi_cookies.get("USI_Session"):null!=usi_cookies.get("USI_DataHound")?e=usi_cookies.get("USI_DataHound"):null!=usi_cookies.get("usi_sess")?e=usi_cookies.get("usi_sess"):(e="usi_sess_"+usi_data.new_guid(),usi_cookies.set("usi_sess",e,usi_cookies.expire_time.day)),e},usi_data.save_session_data=function(e,t,i,s){var n={};i=i||"0";var a=usi_data.get_session_id(),o=usi_commons.domain+"/hound/saveData.jsp?siteID="+i+"&USI_value="+encodeURIComponent(t)+"&USI_name="+encodeURIComponent(e)+"&USI_Session="+encodeURIComponent(a);usi_ajax.get_with_script(o,!0,function(e,t){return null!=e&&null!=s?s(e,n):null!=s?s(null,n):void 0})},usi_data.save_session_items=function(e,t,i){var s={sessionID:usi_data.get_session_id()};t=t||"0";var n=0;e.forEach(function(a){usi_data.save_session_data(a.name,a.value,t,function(t,a){if((n+=1)==e.length&&(usi_commons.log("Saved Session items: "+s.sessionID),null!=i))return i(s)})})},usi_data.get_session_data=function(e,t){var i=usi_commons.domain+"/hound/getSessionData.jsp?s="+e,s="usi_"+(new Date).getTime();if(""!==e){var n=document.getElementsByTagName("head")[0];top.location!=location&&(n=parent.document.getElementsByTagName("head")[0]);var a=document.createElement("script");a.id=s,a.type="text/javascript",a.src=i,a.addEventListener("load",function(){var i=null;if("undefined"!=typeof usi_data&&void 0!==usi_data.sessionData&&(i=usi_data.sessionData[e]||null),n.removeChild(a),null!=t)return t(null,i)}),n.appendChild(a)}},usi_data.is_item_on_list=function(e,t,i,s,n){var a={};if(""===(e||"")&&null!=callback)return callback(new Error("companyID cannot be blank."),a);if(""===(i||"")&&null!=callback)return callback(new Error("item cannot be blank."),a);var o=usi_commons.cdn+"/utility/lookup_suppression.jsp?companyID="+e+"&product="+encodeURIComponent(i);""!==(t||"")&&(o+="&label="+encodeURIComponent(t)),""!==(s||"")&&(o+="&callback="+encodeURIComponent(s));var u=usi_dom.object_to_params(n);""!=u&&(o+="&"+u);var _="usi_"+(new Date).getTime(),l=document.getElementsByTagName("head")[0];top.location!=location&&(l=parent.document.getElementsByTagName("head")[0]);var r=document.createElement("script");r.id=_,r.type="text/javascript",r.src=o,r.addEventListener("load",function(){l.removeChild(r)}),l.appendChild(r)},usi_data.get_qs_or_cookie_item=function(e,t){t=t||usi_cookies.expire_time.day;var i=null,s=usi_commons.gup(e);return""!==s?(i=s,usi_cookies.set(e,i,t)):i=usi_cookies.get(e),i||""},usi_data.build_form_data_object=function(e,t){var i=null;return null==t&&(t=!0),null!=e&&(i={},usi_dom.get_elements("*",e).forEach(function(e){if(e.hasAttribute("name")){var s=e.getAttribute("name")||"";if(""!==s){var n=e.value||"";(""!==n||t)&&(i[s]=n)}}})),i});
'undefined'==typeof usi_url&&(usi_url={},usi_url.URL=function(a){a=a||location.href;var b=document.createElement('a');if(b.href=a,this.full=b.href||'',this.protocol=(b.protocol||'').split(':')[0],this.host=b.host||'',-1!=this.host.indexOf(':')&&(this.host=this.host.substring(0,this.host.indexOf(':'))),this.port=b.port||'',this.hash=b.hash||'',this.baseURL='',this.tld='',this.domain='',this.subdomain='',this.domain_tld='',''!==this.protocol&&''!==this.host){this.baseURL=this.protocol+'://'+this.host+'/';var c=this.host.split(/\./g);if(2<=c.length){if(-1<['co','com','org','net','int','edu','gov','mil'].indexOf(c[c.length-2])&&2===c[c.length-1].length){var d=c.pop(),e=c.pop();this.tld=e+'.'+d}else this.tld=c.pop()}0<c.length&&(this.domain=c.pop(),0<c.length&&(this.subdomain=c.join('.'))),this.domain_tld=this.domain+'.'+this.tld}var f=b.pathname||'';0!==f.indexOf('/')&&(f='/'+f),this.path=new usi_url.Path(f),this.params=new usi_url.Params((b.search||'').substr(1))},usi_url.URL.prototype.build=function(a,b,c){var d='';return''!==this.protocol&&''!==this.host&&(null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!0),!0==a&&(d+=this.protocol+':'),d+='//'+this.host,''!==this.port&&(d+=':'+this.port),!0==b&&(d+=this.path.full,!0==c&&0<Object.keys(this.params.parameters).length&&(d+='?',d+=this.params.build()))),d},usi_url.Path=function(a){a=a||'',this.full=a,this.directories=[],this.filename='';for(var b=a.substr(1).split(/\//g);0<b.length;)1===b.length?this.filename=b.shift():this.directories.push(b.shift());this.has_directory=function(a){return-1<this.directories.indexOf(a)},this.contains=function(a){return-1<this.full.indexOf(a)}},usi_url.Params=function(a){a=a||'',this.full=a,this.parameters=function(a){var b={};if(1===a.length&&''===a[0])return b;for(var c,d,e,f=0;f<a.length;f++)if(e=a[f].split('='),c=e[0]&&e[0].replace(/\+/g,' '),d=e[1]&&e[1].replace(/\+/g,' '),1===e.length)b[c]='';else try{b[c]=decodeURIComponent(d)}catch(a){b[c]=d}return b}(a.split('&')),this.count=Object.keys(this.parameters).length,this.get=function(a){return a in this.parameters?this.parameters[a]:null},this.has=function(a){return a in this.parameters},this.set=function(a,b){this.parameters[a]=b,this.count=Object.keys(this.parameters).length},this.remove=function(a){!0===this.has(a)&&delete this.parameters[a],this.count=Object.keys(this.parameters).length},this.build=function(){var a=this,b=[];for(var c in a.parameters)!0===a.parameters.hasOwnProperty(c)&&b.push(c+'='+encodeURIComponent(a.parameters[c]));return b.join('&')},this.remove_usi_params=function(a){var b=this;for(var c in a=a||[],-1===a.indexOf('usi_')&&a.push('usi_'),b.parameters)if(!0===b.parameters.hasOwnProperty(c)){var d=!1;a.forEach(function(a){0===c.indexOf(a)&&(d=!0)}),d&&b.remove(c)}},this.remove_all=function(){var a=this;for(var b in a.parameters)!0===a.parameters.hasOwnProperty(b)&&a.remove(b)}});
"undefined"==typeof usi_split_test&&(usi_split_test={split_test_name:"usi_dice_roll",split_group:"-1",split_siteID:"-1",split_test_cookie_length:7,get_split_var:function(t){if(t=t||"",null==usi_cookies.get("usi_visitor_id"+t)){var i="v_"+Math.random().toString(36).substring(7)+"_"+Math.round((new Date).getTime()/1e3)+"_"+t;return usi_cookies.set("usi_visitor_id"+t,i,86400*this.split_test_cookie_length,!0),i}return usi_cookies.get("usi_visitor_id"+t)},report_test:function(t,i){var s=document.getElementsByTagName("head")[0],e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","//www.upsellit.com/utility/split_test.jsp?siteID="+t+"&group="+i+"&usi_visitor_id="+this.get_split_var(t)),s.appendChild(e),void 0!==usi_split_test.set_verification&&setTimeout("usi_split_test.set_verification("+i+");",1e3)},get_group:function(t){return usi_cookies.get(this.split_test_name+t)},instantiate:function(t,i,s){null==usi_cookies.get(this.split_test_name+t)||s?(0===i||i&&""!=i?this.split_group=i:Math.random()>.5?this.split_group="0":this.split_group="1",this.report_test(t,this.split_group),usi_cookies.set(this.split_test_name+t,this.split_group,86400*this.split_test_cookie_length,!0)):this.split_group=usi_cookies.get(this.split_test_name+t)}});

		usi_cookieless = true;
		usi_app = {};
		usi_cookies.max_cookies_count = 30;
		usi_app.main = function () {
			// General
			usi_app.url = new usi_url.URL(location.href.toLowerCase());
			usi_app.coupon = usi_cookies.value_exists("usi_coupon_applied") ? "" : usi_commons.gup_or_get_cookie("usi_coupon", usi_cookies.expire_time.week, true);

			// Pages
			usi_app.is_cart_page = usi_app.url.path.full === "/cart";
			usi_app.is_checkout_page = usi_app.url.path.full === "/checkout" || usi_app.url.path.full === "/shipping";
			usi_app.is_billing_page = usi_app.url.path.full === "/billing" || usi_app.url.path.full === "/billing";
			usi_app.is_confirmation_page = usi_app.url.path.full === "/CONFIRMATION";

			// Booleans
			usi_app.force_group = usi_commons.gup_or_get_cookie('usi_force_group');
			usi_app.is_enabled = usi_commons.gup_or_get_cookie("usi_enable", usi_cookies.expire_time.day, true) != "";
			usi_app.is_suppressed = usi_app.is_confirmation_page;

			// check suppressions
			if (usi_app.is_suppressed) {
				usi_commons.log("Company is suppressed");
				return;
			}

			// monitor for cart
			if (!usi_app.cart_interval) usi_app.start_cart_monitor();

			// rebuild cart, usi_rebuild={{SESSIONID}} on email destination link
			if (usi_commons.gup("usi_rebuild") != "") {
				usi_data.get_session_data(usi_commons.gup("usi_rebuild"), usi_app.rebuild);
				return;
			}

			// apply coupons
			if (usi_app.coupon != "") {
				if (usi_app.is_cart_page && Number(usi_cookies.get("usi_subtotal")) > 75) {
					if (usi_cookies.get("usi_clicked") != null) {
						return usi_app.link_injection("https://www.anrdoezrs.net/click-2681135-14305952?sid=chat", usi_app.apply_coupon);
					}
					return usi_app.apply_coupon();
				} else if (usi_app.is_billing_page && Number(usi_cookies.get("usi_subtotal")) > 75) {
					if (usi_cookies.get("usi_clicked") != null) {
						return usi_app.link_injection("https://www.anrdoezrs.net/click-2681135-14305952?sid=chat", usi_app.apply_coupon);
					}
					return usi_app.apply_coupon();
				}
				// load boost bar
				usi_app.boostbar.load();
			}

			// load campaigns
			usi_app.load();
		};

		usi_app.load = function () {
			usi_commons.log("usi_app.load()");

			if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') {
				usi_js.cleanup();
			}

			if (Number(usi_cookies.get("usi_subtotal")) > 75) {
				// Enabled on active-cart > $75
				// $10 off $110 TT
					usi_commons.load_view("WzU7meKMu4gt6SlNFbDDkDc", "31595", usi_commons.device);
			} else if (Number(usi_cookies.get("usi_subtotal")) > 0) {
				// Enabled on active-cart $1-$75
				// $5 off $75 TT
				usi_commons.load_view("gkkFz5KZLofnhETYPVqphnv", "30825", usi_commons.device);
			}

			if (usi_app.is_checkout_page) {
				// PC Cart Rebuilder
				if (Number(usi_cookies.get("usi_subtotal")) > 75) {
					// $10 off $110 TT
					usi_commons.load_precapture("CmdhEly6WPD9OoR5EgjKtjK", "31601");
				} else if (Number(usi_cookies.get("usi_subtotal")) > 0) {
					// $5 off $75 TT
					usi_commons.load_precapture("y0Vuls9AksjaPBUSJjJ06Gc", "31597");
				}
			}
		};

		usi_app.link_injection = function (src, callback) {
			usi_cookies.del("usi_clicked");
			var usi_dynamic_div = document.createElement("div");
			usi_dynamic_div.innerHTML = "<iframe style='width:1px;height:1px' src='" + src + "'></iframe>";
			usi_dynamic_div.onload = callback;
			document.getElementsByTagName('body')[0].appendChild(usi_dynamic_div);
			usi_commons.log("[ link_injection ] Link Injection Success");
		};

		usi_app.apply_coupon = function() {
			usi_commons.log("usi_app.apply_coupon()");
			if  (document.querySelector("#dwfrm_cart_couponCode") != null) {
				var coupon_input = document.querySelector("#dwfrm_cart_couponCode");
			} else if (document.querySelector("#dwfrm_billing_couponCode") != null) {
				var coupon_input = document.querySelector("#dwfrm_billing_couponCode");
			}
			var coupon_button = document.querySelector("#add-coupon");
			if (coupon_input !== null && coupon_button !== null) {
				coupon_input.value = usi_app.coupon;
				usi_app.boostbar.close();
				usi_cookies.set("usi_coupon_applied", usi_app.coupon, usi_cookies.expire_time.week);
				usi_cookies.del("usi_coupon");
				usi_app.coupon = "";
				coupon_button.disabled = false;
				coupon_button.click();
				usi_commons.log("Coupon applied");
			} else {
				if (usi_app.coupon_attempts == undefined) {
					usi_app.coupon_attempts = 0;
				} else if (usi_app.coupon_attempts >= 5) {
					usi_commons.report_error("Coupon elements not found");
					return;
				}
				usi_app.coupon_attempts++;
				usi_commons.log("Coupon elements missing, trying again. Tries: " + usi_app.coupon_attempts);
				setTimeout(usi_app.apply_coupon, 1000);
			}
		};

		usi_app.start_cart_monitor = function(){
			usi_commons.log("usi_app.start_cart_monitor()");
			var monitor_cart = function() {
				var item_count = document.querySelectorAll('.mini-cart-product').length;
				// only update if cart item count changes
				if (item_count > 0 && item_count != usi_app.item_count) {
					usi_app.item_count = item_count;
					usi_app.save_cart();
					// check if data has changed and load campaigns
					usi_app.main();
				}
			};
			monitor_cart();
			if (!usi_app.cart_interval) {
				usi_app.cart_interval = setInterval(monitor_cart, 1000);
			}
		};

		usi_app.save_cart = function(){
			usi_commons.log("usi_app.save_cart()");
			var prod_prefix = "usi_prod_";

			// Delete existing cookies
			usi_cookies.flush(prod_prefix);

			usi_app.prod_array = usi_app.scrape_mini_cart();

			if (typeof usi_app.prod_array != "undefined") {
				usi_app.save_array({
					prefix: prod_prefix,
					array: usi_app.prod_array,
					max: 3
				});
			}
			usi_commons.log(usi_app.prod_array);

			var usi_cart = usi_app.prod_array.map(function (product) {
				return {
					pid: product.pid,
					qty: product.qty,
					cgid: product.cgid
				}
			});
			usi_commons.log("cart rebuilder info", usi_cart);
			usi_cookies.set_json("usi_cart", usi_cart, usi_cookies.expire_time.week);

			var cart_total = usi_app.scrape_total();
			if (typeof cart_total != "undefined" && cart_total > 0) {
				usi_cookies.set("usi_subtotal", encodeURIComponent(cart_total), usi_cookies.expire_time.week);
			}
			usi_commons.log(cart_total);
		};
		usi_app.save_array = function(options) {
			usi_commons.log("usi_app.save_array()");
			try {
				options.array.forEach(function(product, index){
					var prop;
					if (index >= options.max) return;
					for (prop in product) {
						if (product.hasOwnProperty(prop)) {
							usi_cookies.set(options.prefix + prop + "_" + (index + 1), encodeURIComponent(product[prop]), usi_cookies.expire_time.week);
						}
					}
				});
			} catch (err) {
				usi_commons.report_error(err);
			}
		};
		usi_app.scrape_total = function() {
			usi_commons.log("usi_app.scrape_total()");
			try {
				var subtotal = document.querySelector('.mini-cart-subtotals .value');
				if (subtotal != null) {
					subtotal = usi_dom.string_to_decimal(subtotal.textContent).toFixed(2);
					return subtotal;
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};
		usi_app.scrape_mini_cart = function() {
			usi_commons.log("usi_app.scrape_mini_cart()");
			try {
				var cart_rows = usi_dom.get_elements('.mini-cart-product');
				var prod_array = [], product;
				// Scrape cart info
				cart_rows.forEach(function(container, index){
					product = {};
					product.link = container.querySelector(".mini-cart-name a").href;
					product.cgid = product.link.split("cgid=")[1];
					product.image = container.querySelector(".mini-cart-image img").src;
					product.name = container.querySelector(".mini-cart-name").textContent.trim();
					product.price = container.querySelector(".mini-cart-price").textContent.trim();
					product.pid = container.querySelector(".og-offer").getAttribute("data-og-product");
					product.qty = container.querySelector(".mini-cart-qty .value").textContent.trim();
					prod_array.push(product);
				});
				return prod_array;
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.boostbar = {
			load: function(){
				usi_commons.log("usi_app.boostbar.load()");
				if (usi_cookies.get("usi_boostbar") == "closed") return;
				var bb_text, remainder;

				if (Number(usi_cookies.get("usi_subtotal")) < 75) {
					remainder = 75 - Number(usi_cookies.get("usi_subtotal"));
					bb_text = 'Add $' + remainder.toFixed(2) + ' to get $5 off your order!';
				} else if (Number(usi_cookies.get("usi_subtotal")) < 110 && Number(usi_cookies.get("usi_subtotal")) > 75) {
					remainder = 110 - Number(usi_cookies.get("usi_subtotal"));
					bb_text = 'Add $' + remainder.toFixed(2) + ' to get $10 off your order!';
				} else {
					bb_text = 'Your coupon will be applied on cart page!';
				}
				var usi_boost_css = [
					'#usi_boost_close {height:100%; width:5%; right:5%; top:0; bottom:0; position:absolute; color:#fff; font-size:2em; text-decoration:none;}',
					'#usi_boost_container {position:fixed; bottom:0; left:0; right:0; width:100%; text-align:center; font-size:1.25em; background:#115e67; color:#fff; padding:1em 2.5em; line-height: 1; z-index:2147483647;}'
				].join('');
				usi_app.boostbar.place_css(usi_boost_css);

				var usi_boost_container = document.createElement('div');
				usi_boost_container.innerHTML = [
					'<div id="usi_boost_container">',
					'<a id="usi_boost_close" href="javascript:usi_app.boostbar.close();">&times;</a>',
					bb_text,
					'</div>'
				].join('');
				document.body.appendChild(usi_boost_container);
			},
			place_css:function(css) {
				usi_commons.log("usi_app.boostbar.place_css()");
				var usi_css = document.createElement("style");
				usi_css.type = "text/css";
				if (usi_css.styleSheet) usi_css.styleSheet.cssText = css;
				else usi_css.innerHTML = css;
				document.getElementsByTagName('head')[0].appendChild(usi_css);
			},
			close: function(){
				usi_commons.log("usi_app.boostbar.close()");
				var bar = document.getElementById('usi_boost_container');
				usi_cookies.set("usi_boostbar", "closed", usi_cookies.expire_time.week);
				if (bar != null) {
					bar.parentNode.removeChild(bar);
				}
			}
		};

		usi_app.rebuild = function(err, response){
			usi_commons.log("usi_app.rebuild()");
			if (response) {
				// save array of pids, or other info if needed, in session as 'usi_cart'
				var usi_cart = response.usi_cart;
				// Show message while rebuilding
				var alert = document.querySelector(".cart-empty");
				if (alert != null) alert.innerHTML = "One moment while we rebuild your cart...";
				usi_app.add_items_to_cart(usi_cart);
				usi_commons.log(response);
			} else {
				usi_commons.report_error(err);
			}
		};
		usi_app.add_items_to_cart = function(usi_cart) {
			usi_commons.log("usi_app.add_items_to_cart()");
			if (usi_cart.length === 0) {
				// refresh when cart is updated
				location.href = "https://www.vitaminworld.com/cart";
				return;
			}

			var item = usi_cart.shift();

			// check if the item is already in the cart
			var cart_has_item = false;
			if (usi_app.prod_array != undefined) {
				cart_has_item = usi_app.prod_array.filter(function(i){
					return i.pid == item.pid;
				}).length > 0;
			}

			if (cart_has_item) {
				// if cart already has item, skip the current item and go to the next one
				usi_commons.log("Skipping product");
				usi_app.add_items_to_cart(usi_cart);
			} else {
				// if cart does NOT have the item, post
				usi_commons.log("Adding product");
				// update this with whatever is needed to add a product
				usi_ajax.post_with_options({
					url: "https://www.vitaminworld.com/on/demandware.store/Sites-vitaminworld_us-Site/default/Cart-AddProduct?format=ajax",
					params: "MaxQuantity=50&Quantity=" + item.qty + "&uuid=&cartAction=update&pid=" + item.pid + "&cgid=" + item.cgid + "&list=undefined"
				}, function () {
					usi_app.add_items_to_cart(usi_cart);
				});
			}
		};

		usi_dom.ready(function(){
			try {
				usi_app.main();
			} catch (err) {
				usi_commons.report_error(err);
			}
		});
	} catch(err) {
		usi_commons.report_error(err);
	}
}
