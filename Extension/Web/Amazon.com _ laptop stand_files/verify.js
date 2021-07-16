$dvbs.pubSub.subscribe('BeforeDecisionRender', '709b12fa6d8240c9addbe6c88ce59d8d', 'ModifyAdTagWithBsImpId', function(){var impId = '709b12fa6d8240c9addbe6c88ce59d8d';if($dvbs && $dvbs.tags[impId] && typeof($dvbs.tags[impId].tagAdtag) == 'string') {$dvbs.tags[impId].tagAdtag = $dvbs.tags[impId].tagAdtag.replace(/(?:\[url_encoded_publisher_data\]|%5Burl_encoded_publisher_data%5D|url_encoded_publisher_data|\[DV_IMP_ID\]|%5BDV_IMP_ID%5D|DV_IMP_ID)/g,encodeURIComponent('709b12fa6d8240c9addbe6c88ce59d8d'));}});setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'709b12fa6d8240c9addbe6c88ce59d8d',
                comparisonItems:[{name : 'cmp', value : 20712934},{name : 'plmt', value : 20714382}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_805115959570');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("709b12fa6d8240c9addbe6c88ce59d8d",false);$dvbs.pubSub.subscribe('BeforeDecisionRender', '709b12fa6d8240c9addbe6c88ce59d8d', 'wpdc', function() {try { var result = 0; var cur = window; var tryNum = 0; try {    while (!result && tryNum < 10) {        if (cur.maple != undefined) {            result = 1;            break;        }        if (cur == cur.parent)            break;        tryNum++;        cur = cur.parent;    } } catch (er) {}	if (result) {		$dvbs.registerEventCall('709b12fa6d8240c9addbe6c88ce59d8d', { dvp_maple: result});	}} catch (e) {}});var dvObj=$dvbs;var impId='709b12fa6d8240c9addbe6c88ce59d8d';var htmlRate=2;var runTag=-1;var lab=0;var sources=0;var adid='-4875594899650418603';var urlTypeId=1540;var ddt=1;var bundleID='';var date='20210124';var prefix='ch20210114';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){try{try{!function(){var u={},s=window,e=0,c="";try{for(;s.parent&&s!=s.parent&&s.parent.document&&(s=s.parent,!(10<e++)););}catch(e){}var d={};function m(e,t){d[e]=!!t}function t(e){var t=0;for(var r in e)e[r]&&(t+=Math.pow(2,r));return t}var r,n,l=function(e){for(var t={};0<e;){for(var r=1,n=0;2*r<=e;)r*=2,n++;t[n]=!0,e-=r}return t}(sources),h=s.document;m(0,s==window.top),m(1,""==h.title),m(2,s.innerWidth>s.screen.width);try{m(7,h.querySelector('script[src*="algovid.com"]')),m(9,s.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),m(10,-1!=h.title.indexOf("</>")),m(13,h.getElementById("adloaderframe")),s.top==s&&""==h.title&&(m(17,document.querySelectorAll("div.kk#kk")),(r=s.document.querySelectorAll("head style:nth-child(1)")[0])&&(m(14,(n=r.innerText.replace(/\s/g,"")).startsWith("div.kk")),m(18,-1!=n.indexOf("transform:scale(1);transform-origin:topcenter;background-color:")))),s.top==s&&(m(23,"top"==h.title),m(19,h.querySelector('iframe[src="subframe.html"]')),m(45,h.querySelector('iframe[src$=".html"]:not([src*="/"])'))),m(16,h.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),m(20,function(){try{return null!=h.querySelector('div[id="kt_player"][hiegth]')}catch(e){}}()),m(21,function(){try{return null!=h.querySelector('div[id="kt_player"][width]')}catch(e){}}()),m(22,function(){try{return null!=h.querySelector('script[src*="./newplayer.js"]')}catch(e){}}());s.document.getElementsByTagName("script");function a(){function e(e,t){for(var r=0;r<e.length;r++){var n=e.item(r).getBoundingClientRect();if(n.height*n.width>1.1*t)return u.dvp_adad=parseInt(n.width)+"x"+parseInt(n.height),1}}var t,r,n,a;3==ddt&&(n=(t=parseInt(s.document.documentElement.clientWidth||0))*(r=parseInt(s.document.documentElement.clientHeight||0)),u.dvp_adfr=t+"x"+r,0<(a=h.getElementsByTagName("video")).length&&m(33,!0),0==n?m(30,!0):(m(30,!1),e(a,n)&&m(6,!0),e(h.getElementsByTagName("iframe"),n)&&m(32,!0)));var o=[],c=h.querySelectorAll('script[src*="player/player.js?p="]');if(c&&0<c.length)for(m(29,!0),i=0;i<c.length;i++){(d=c[i].src)&&(l=d.match(/appb=([^&]*)/))&&l[1]&&o.push(l[1])}var d,l,p=h.querySelectorAll('script[id="aniviewJS"]');if(p&&0<p.length)for(m(29,!0),i=0;i<p.length;i++){(d=p[i].innerText)&&(l=d.match(/AV_APPPKGNAME=([^&]*)/))&&l[1]&&o.push(l[1])}u.dvp_acibv=o.join("_")}m(24,function(){try{return s.top==s&&(0<s.document.getElementsByClassName("asu").length||s.document.getElementsByClassName("kk").length)}catch(e){}}()),m(25,function(){try{return null!=h.querySelector('link[href="data:;base64,iVBORw0KGgo="]')}catch(e){}}()),a(),setTimeout(function(){a(),u.bsigr!=t(d)&&(m(31,!0),u.bsigr=t(d),dvObj.registerEventCall(impId,u),l[31]&&I(""))},3e3),m(34,!!s.__monet__),m(35,h.querySelector('span[class="ad-close"]')),m(36,h.querySelector('div[style="min-height: 250px; min-width: 300px;"]')),m(37,h.querySelector('script[src*="j.pubcdn.net"]')),m(38,h.querySelector('div[class="tick-im-container"]')),m(39,h.querySelector('div[style*="background-image: url("]')),u.dvp_ndp_sow=s&&s.outerWidth?s.outerWidth:"NA",u.dvp_ndp_soh=s&&s.outerHeight?s.outerHeight:"NA",u.dvp_ac_version="1305",m(40,h.querySelector('img[src*="dealsneartome.com"]')),m(41,h.querySelector('script[src*="sickads.com"]')),m(42,h.querySelector('div[id*="_place_"]')),m(43,h.querySelector('div[id*="_identification_"]')),m(44,!!s.__cads__),m(46,!!s.primisPlayerInit),m(47,!!s.srCallback),m(48,!!s.monti),m(49,!!s.CEDATO_INIT),m(4,h.querySelector("meta[http-equiv]")),m(5,h.querySelector("meta[charset]")),m(8,h.querySelector('meta[name="description"]')),u.dvp_ndp_meta=h.querySelectorAll("meta").length}catch(e){}navigator&&navigator.getBattery?navigator.getBattery().then(function(e){u.dvp_ndp2=e.charging,dvObj.registerEventCall(impId,u.dvp_ndp2)}):u.dvp_ndp2="NA",u.dvp_ndp6=s.navigator&&s.navigator.userActivation?s.navigator.userActivation.hasBeenActive:"NA";var o=Object.prototype.toString,p=Function.prototype.toString,f=/^\[object .+?Constructor\]$/,g=RegExp("^"+String(o).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(e){var t=typeof e;return"function"==t?g.test(p.call(e)):e&&"object"==t&&f.test(o.call(e))||!1}var y=window,_=0,w=!1,S=!1;try{for(;y.parent&&y!=y.parent&&y.parent.document&&(S|=!v(s.document.hasFocus),y=y.parent,w|=v(window.document.hasFocus)!=v(y.document.hasFocus),!(10<_++)););}catch(e){}m(26,s==window.top&&!v(y.document.hasFocus)),m(27,S),m(28,w),u.dvp_acifd=e;var q,b,E,k;new Date;function I(e){var n,a,t,o=s.location.hostname;function r(e,t){var r=new XMLHttpRequest;r.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+n+"/"+o+"/"+a+"_"+adid+"_"+impId+"_"+t+".html",!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.setRequestHeader("x-amz-acl","public-read"),r.send(e.document.documentElement.outerHTML)}3==ddt&&bundleID&&0<bundleID.length&&(o=0!=(2&urlTypeId)?s.location.hostname+"/"+bundleID:bundleID),(new Date).getTime()%100<htmlRate&&(1==lab||function(){if(1==runTag){if(0==sources)return 1;for(i in l)if(d[i])return c="bit_"+i,1}}())&&(0==(n=e+c).length&&(n="default"),a=function(){var e=[];for(i in d)d[i]&&e.push(i);return e.join("_")}()||"default",r(s,"top"),s!=window&&r(window,"iframe_tag"),s!=window.parent&&r(window.parent,"iframe_tag_parent"),s!=window.parent.parent&&r(window.parent.parent,"iframe_tag_parent_parent"),(t=h.getElementById("adloaderframe"))&&r(t.contentWindow,"iframe_top_child"),m(3,!0))}s==window.top&&(u.dvp_mref=(refm=h.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:""),(q=h.head)&&(q.children&&(u.dvp_acc=q.children.length),q.outerHTML&&(u.dvp_acl=q.outerHTML.length)),s.external&&(u.dvp_acwe=Object.keys(s.external).length),b=s.innerWidth>s.innerHeight,E=s.screen[b?"height":"width"],h.body.offsetWidth>E&&(u.dvp_vpos=h.body.offsetWidth+"-"+E+"-"+(b?1:0))),s==window.top&&s.performance&&s.performance.getEntries()&&s.performance.getEntries()[0]&&(k=s.performance.getEntries()[0],u.dvp_acpdr=Math.round(k.duration||k.responseEnd-k.fetchStart),u.dvp_acpdt=Math.round(k.domainLookupEnd-k.domainLookupStart),s.performance&&s.performance.navigation&&(u.dvp_acprc=s.performance.navigation.redirectCount),l[34]&&(u.dvp_acpws=s.innerWidth+"x"+s.innerHeight)),I(""),u.bsigr=t(d),dvObj.registerEventCall(impId,u)}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}});


try{__tagObject_callback_805115959570({ImpressionID:"709b12fa6d8240c9addbe6c88ce59d8d", ServerPublicDns:"tps626.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "709b12fa6d8240c9addbe6c88ce59d8d");}catch(e){}
try{__verify_callback_805115959570({
ResultID:2,
Passback:"",
AdWidth:160,
AdHeight:600});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "709b12fa6d8240c9addbe6c88ce59d8d");}catch(e){}
