
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"366",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window._astp.lib.googleAnalytics.transformEcommerce(",["escape",["macro",1],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=8,m=[{name:\"EMAIL\",regex:\/.{4}@.{4}\/g}],b={keyName:\"_transaction_ids\",cookieExpiresDays:365},p=function(a){if(window.Storage)return window.localStorage.getItem(a);var d=\"; \"+document.cookie;a=d.split(\"; \"+a+\"\\x3d\");if(2===a.length)return a.pop().split(\";\").shift()},q=function(a,d,b){if(window.Storage)window.localStorage.setItem(a,d);else{var e=new Date;e.setDate(e.getDate()+b);document.cookie=a+\"\\x3d\"+d+\";expires\\x3d\"+e.toUTCString()}},n=\"_ga_originalSendHitTask\";return function(a){window[n]=\nwindow[n]||a.get(\"sendHitTask\");\"number\"===typeof f\u0026\u0026a.set(\"dimension\"+f,a.get(\"clientId\"));a.set(\"sendHitTask\",function(a){var d=a,e=window[n],f=!0;try{if(\"object\"===typeof b\u0026\u0026b.hasOwnProperty(\"keyName\")\u0026\u0026b.hasOwnProperty(\"cookieExpiresDays\")\u0026\u0026\"undefined\"!==typeof a.get(\"\\x26ti\")){var c=a.get(\"\\x26ti\"),g=JSON.parse(p(b.keyName)||\"[]\");-1\u003Cg.indexOf(c)\u0026\u0026-1===[\"transaction\",\"item\"].indexOf(a.get(\"hitType\"))?f=!1:-1===g.indexOf(c)\u0026\u0026(g.push(c),q(b.keyName,JSON.stringify(g),b.cookieExpiresDays))}if(\"undefined\"!==\ntypeof m\u0026\u0026m.length){var h=a.get(\"hitPayload\").split(\"\\x26\");for(c=0;c\u003Ch.length;c++){var k=h[c].split(\"\\x3d\");try{var l=decodeURIComponent(decodeURIComponent(k[1]))}catch(r){l=decodeURIComponent(k[1])}m.forEach(function(a){l=l.replace(a.regex,\"[REDACTED \"+a.name+\"]\")});k[1]=encodeURIComponent(l);h[c]=k.join(\"\\x3d\")}a.set(\"hitPayload\",h.join(\"\\x26\"),!0)}f\u0026\u0026e(a)}catch(r){e(d)}})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.custKey"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(\"\"!=a)return a})();"]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":""
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.transactionID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.item.0.productInfo.productFulfillmentMethod"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;-1==",["escape",["macro",10],8,16],".toLowerCase().indexOf(\"pickup\")\u0026\u0026(a=",["escape",["macro",9],8,16],");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;",["escape",["macro",10],8,16],".toLowerCase().indexOf(\"pickup\")\u0026\u0026(a=",["escape",["macro",9],8,16],");return a})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"user.loginStatus"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"user.memberTier"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"user.userType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"user.loyaltyPoints"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"user.memberSinceDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.siteType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.eventMachineName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.experienceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a,c=",["escape",["macro",2],8,16],".ecommerce.purchase.products,b=0;b\u003Cc.length;b++)a=void 0==a?c[b].dimension51+\"|\":a+(c[b].dimension51+\"|\");return a=a.replace(\/\\|$\/,\"\")})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"voucherDiscount.voucherCode"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"voucherDiscount.voucherCodeIsValid"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"page.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.previousPageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.previousPageURL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"linkInfo.linkRegion"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"linkInfo.linkCategories"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"filterClicked.label"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"store.storeID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"store.storeName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"store.postalCode"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"store.city"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"store.stateProvince"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderDate"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderStatus"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderStoreType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderShippingStatus"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderMethod"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventDetails.checkoutType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.name"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.platform"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.brand"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.genre"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.subGenre"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.genreSubGenre"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.productID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.sku"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.siteSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.memberType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.productType"
    },{
      "function":"__dbg"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",54],
      "vtp_defaultValue":"UA-10897913-30",
      "vtp_map":["list",["map","key","true","value","UA-10897913-31"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",8],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",55],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^Staging and QA$","value","UA-10897913-31"],["map","key","^.*Draft.*$","value","UA-10897913-31"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",3]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",5]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["template",["macro",6]," : ",["macro",7]]],["map","index","3","dimension",["macro",8]],["map","index","4","dimension",["macro",9]],["map","index","5","dimension",["macro",11]],["map","index","6","dimension",["macro",12]],["map","index","7","dimension",["macro",11]],["map","index","62","dimension",["macro",5]],["map","index","9","dimension",["macro",13]],["map","index","10","dimension",["macro",14]],["map","index","11","dimension",["macro",15]],["map","index","12","dimension",["macro",16]],["map","index","13","dimension",["macro",17]],["map","index","14","dimension",["macro",18]],["map","index","15","dimension",["macro",19]],["map","index","16","dimension",["macro",20]],["map","index","17","dimension",["macro",21]],["map","index","18","dimension",["macro",22]],["map","index","19","dimension",["macro",23]],["map","index","20","dimension",["macro",24]],["map","index","21","dimension",["macro",25]],["map","index","22","dimension",["macro",26]],["map","index","23","dimension",["macro",27]],["map","index","24","dimension",["macro",28]],["map","index","25","dimension",["macro",29]],["map","index","26","dimension",["macro",21]],["map","index","27","dimension",["macro",21]],["map","index","28","dimension",["macro",30]],["map","index","29","dimension",["macro",31]],["map","index","30","dimension",["macro",32]],["map","index","31","dimension",["macro",33]],["map","index","32","dimension",["macro",34]],["map","index","33","dimension",["macro",35]],["map","index","34","dimension",["macro",21]],["map","index","35","dimension",["macro",36]],["map","index","36","dimension",["macro",37]],["map","index","37","dimension",["macro",38]],["map","index","38","dimension",["macro",39]],["map","index","39","dimension",["macro",40]],["map","index","40","dimension",["macro",41]],["map","index","41","dimension",["macro",42]],["map","index","52","dimension",["macro",43]],["map","index","53","dimension",["macro",44]],["map","index","54","dimension",["macro",45]],["map","index","55","dimension",["macro",46]],["map","index","56","dimension",["macro",47]],["map","index","57","dimension",["macro",48]],["map","index","58","dimension",["macro",49]],["map","index","59","dimension",["macro",50]],["map","index","60","dimension",["macro",51]],["map","index","61","dimension",["macro",18]],["map","index","71","dimension",["macro",52]],["map","index","72","dimension",["macro",53]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",56],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventDetails.downloadType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"listing.listingResults.item.0.itemListType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"listing.listingResults.item.0.productInfo.name"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product.0.productInfo.name"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"listing.listingResults.resultsCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.userExperience"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"listing.listingParams.searchInfo.searchTermEntered"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.metric26"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.XAASteps"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;\"instore\"==",["escape",["macro",63],8,16],"\u0026\u0026void 0!=",["escape",["macro",67],8,16],"?a=\"instore: \"+",["escape",["macro",67],8,16],":void 0!=",["escape",["macro",67],8,16],"\u0026\u0026(a=",["escape",["macro",67],8,16],");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageTemplateDesign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"modalinfo.userExperience"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"instore\"==",["escape",["macro",63],8,16],"||\"instore\"==",["escape",["macro",70],8,16],"?\"instore\":\"web\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageName"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"voucherDiscount.voucherType"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",75],8,16],".includes(",["escape",["macro",77],8,16],")||-1===",["escape",["macro",75],8,16],".indexOf(\"www\")?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;-1==",["escape",["macro",10],8,16],".toLowerCase().indexOf(\"pickup\")\u0026\u0026(a=1);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;",["escape",["macro",10],8,16],".toLowerCase().toLowerCase().indexOf(\"pickup\")\u0026\u0026(a=1);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",67],8,16],";if(\"Step-6 | Checkout order confirmation\"==a)return\"1\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.payment_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.tradeinOrderPlacedTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.tradeinOrderExpiryTime"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"storeSearch.selectAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product.0.productInfo.recZone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.zoneSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",87],8,16],";if(\"PLP\"==a)return\"1\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",67],8,16],";if(\"Step-3 | Citizen One card Approved\"==a)return\"1\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.price.sellingPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",90],8,16],";a=a?parseFloat(a).toFixed(2):\"\";var b=",["escape",["macro",91],8,16],";b=b?parseInt(b):\"\";return a=(a*=b)?parseFloat(a).toFixed(2):\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product.0.productInfo.productFulfillmentMethod"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product.0.productInfo.warrantyOption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.productStockStatus"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventDetails.checkoutStep"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventDetails.checkoutOption"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(-1\u003Cdocument.cookie.indexOf(\"akaas_CartThrottling\")){var c=\"akaas_CartThrottling\",a=document.cookie.match(\"(^|;)\\\\s*\"+c+\"\\\\s*\\x3d\\\\s*([^;]+)\");a=a?a.pop():\"\";if(-1\u003Ca.indexOf(\"rv\\x3d\")){c=\/rv=\\d+\/;var b=a.match(c)[0].replace(\"rv\\x3d\",\"\");a=\"\";25\u003E=b?a=\"Redirect:Fulfilment Tile old control\":25\u003Cb\u0026\u002650\u003E=b?a=\"Redirect:Fulfilment Tile new\":51\u003Cb\u0026\u0026100\u003E=b\u0026\u0026(a=\"Redirect:Fulfilment Tile old\");return a?a:\"\"}}else return\"\"}catch(d){console.log(d)}})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderPaymentTotal"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderSearch.result.orderNumItems"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.wisOrderType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],";return\"Trade in Order\"==a?\"62\":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkInfo.linkAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",103],8,16],";if(\"linkOpen\"==a)return\"1\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",103],8,16],";if(\"linkClick\"==a)return\"1\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",96],8,16],";if(2===a)return\"50\";if(3===a)return\"51\";if(4===a)return\"52\";if(5===a)return\"53\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",96],8,16],";if(\"4a\"===a)return\"74\";if(\"4b\"===a)return\"69\";if(\"5a\"===a)return\"75\";if(\"5b\"===a)return\"70\";if(\"5c\"===a)return\"71\";if(\"6a\"===a)return\"72\";if(\"6b\"===a)return\"73\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.beginCheckout"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",108],8,16],";if(\"1\"==a)return\"76\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.checkoutOption"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"price.tradeInRegularCashtAmount"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"price.tradeInRegularStoreCreditAmount"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"price.tradeInProCashAmount"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"price.tradeInProStoreCreditAmount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cmapi_cookie_privacy"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.total.revenue"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.sku"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"listing.listingParams.searchInfo.searchTermEntered"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",2],8,16],".ecommerce.purchase.products,c=[],d,e,a=0;a\u003Cb.length;a++)d=b[a].id,e=b[a].quantity,c.push({id:d,quantity:e});return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",2],8,16],".ecommerce.purchase.products,c=[],d,a=0;a\u003Cb.length;a++)d=b[a].id,c.push({id:d});return c})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",2],8,16],".ecommerce.purchase.products,c,a=0;a\u003Cb.length;a++)if(!c\u0026\u0026(b[a].category.match(\/collectibles|accessories|electronics|clothing\/gi)\u0026\u0026!b[a].variant.match(\/digital\/gi)||b[a].variant.match(\/pre-owned|refurbished\/gi))){c=!0;break}return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.item"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",126],8,16],";if(a){var e=a.length,b={};b=[];for(var c=0;c\u003Ce;c++){var d=a[c];b.push({id:d.productInfo.sku,price:d.price.sellingPrice,quantity:d.quantity})}return b}}catch(f){console.log(f)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.actionfield.list"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipmentType.shipmentSelected"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.creative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.promoClick.promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"modalinfo.metric26"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"modalinfo.XAASteps"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;\"instore\"==",["escape",["macro",70],8,16],"\u0026\u0026void 0!=",["escape",["macro",133],8,16],"?a=\"instore: \"+",["escape",["macro",133],8,16],":void 0!=",["escape",["macro",133],8,16],"\u0026\u0026(a=",["escape",["macro",133],8,16],");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productDetails.productSKU"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productDetails.selectedtTile1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productDetails.selectedtTile2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productDetails.selectedtTile3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var e=\"\",a=",["escape",["macro",135],8,16],";a=a?\"SKU:\"+a:\"\";var b=",["escape",["macro",136],8,16],";b=b?\"Tile1:\"+b:\"\";var c=",["escape",["macro",137],8,16],";c=c?\"Tile2:\"+c:\"\";var d=",["escape",["macro",138],8,16],";d=d?\"Tile3:\"+d:\"\";return e=[a,b,c,d].filter(Boolean).join(\"| \")}catch(f){console.log(f)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productInfo.productSKU"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productInfo.redirectType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageinfo.productCagtegory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageinfo.searchDepth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.productName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.orderId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.shipmentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorDetails.errorCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorDetails.errorTrigger"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorDetails.errorType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorDetails.errorMessage"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a,b=",["escape",["macro",1],8,16],";0\u003C=b.indexOf(\"Internal Search\")\u0026\u0026(a=1);return a}catch(c){console.log(c)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a,b=",["escape",["macro",1],8,16],";0\u003C=b.indexOf(\"Search Cancel\")\u0026\u0026(a=1);return a}catch(c){console.log(c)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",160],8,16],";return a?\":\"+a:\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.refund.actionField.orderType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",162],8,16],";return\"wis\"==a?\"63\":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",164],8,16],";if(\"payment Initiate\"==a)return\"47\";if(\"payment updated\"==a)return\"48\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.paymentType"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"storelocator-phone\"==",["escape",["macro",167],8,16],"?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",144],8,16],";if(\"subscribed\"==a)return\"54\";if(\"unsubscribed\"==a)return\"55\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.errorCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.errorAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.errorMessage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventCategory"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"page.pageCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".console-landing,.console-landing-hero-banner\")?!0:void 0;return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.price.basePrice"
    },{
      "function":"__d",
      "vtp_elementSelector":".credit-card-type\u003Espan",
      "vtp_selectorType":"CSS"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"RES_SESSIONID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.availability"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product.0.productInfo.productID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.total.tax"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.total.shippingCost"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.sku"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",20],
      "vtp_defaultValue":"div-gpt-ad-9896332-1",
      "vtp_map":["list",["map","key","xs","value","div-gpt-ad-2482376-1"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"step"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"listing.listingResults.itemListType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.affiliation"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.total.currency"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transaction.total.orderLevelDiscountCode"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventDetails.list"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"storeSearch.searchAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.brand"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.genre"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.genreSubGenre"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.platform"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.productID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productInfo.subGenre"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=ga.getAll()[0];return a.get(\"clientId\")}catch(b){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.metric28"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.metric29"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.metric30"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.metric31"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.metric32"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.0.productInfo.metric33"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analyticsCache.banner"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product[0].componentInfo.componentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product[0].componentInfo.componentName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product[0].componentInfo.componentSale"
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmDom"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.item.0.productInfo.checkoutOption"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"page.pageContext"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(-1\u003Cdocument.cookie.indexOf(\"akaas_CartTitleThrottling\")){var c=\"akaas_CartTitleThrottling\",a=document.cookie.match(\"(^|;)\\\\s*\"+c+\"\\\\s*\\x3d\\\\s*([^;]+)\");a=a?a.pop():\"\";if(-1\u003Ca.indexOf(\"rv\\x3d\")){c=\/rv=\\d+\/;var b=a.match(c)[0].replace(\"rv\\x3d\",\"\");a=\"\";5\u003E=b?a=\"Redirect:Cart Title old control\":5\u003Cb\u0026\u002610\u003E=b?a=\"Redirect:Cart Title new\":10\u003Cb\u0026\u0026100\u003E=b\u0026\u0026(a=\"Redirect:Cart Title old\");return a?a:\"\"}}else return\"\"}catch(d){console.log(d)}})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"#slick-slide00 \u003E div \u003E a \u003E picture \u003E img",
      "vtp_attributeName":"alt",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"listing.listingResults.item.0.productInfo.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventDetails.eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction.item.0.productInfo.tradeinWebOrderDate"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"application",
      "vtp_eventLabel":["macro",58],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Application Downloaded"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":38
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"listing viewed",
      "vtp_eventLabel":["macro",59],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Listing Viewed"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","7","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"listing item clicked",
      "vtp_eventLabel":["macro",60],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Listing Item Clicked"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":41
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","9","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"remove from cart",
      "vtp_eventLabel":["macro",61],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Cart Remove"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":42
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"registration",
      "vtp_eventLabel":"success",
      "vtp_dimension":["list",["map","index","1","dimension","UA - User Registered"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"logout",
      "vtp_eventLabel":"success",
      "vtp_dimension":["list",["map","index","1","dimension","UA - User Signed Out"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":44
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"store search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","14","metric",["macro",62]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["template",["macro",63],"search results"],
      "vtp_eventLabel":["macro",64],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Store Search"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":45
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","26","metric",["macro",66]]],
      "vtp_gaSettings":["macro",57],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Pageview"],["map","index","70","dimension",["macro",68]],["map","index","81","dimension",["macro",69]],["map","index","78","dimension",["macro",71]],["map","index","86","dimension",["macro",72]],["map","index","87","dimension",["macro",73]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":46
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","66","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"promo code added",
      "vtp_eventLabel":["macro",23],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Promo Cocde Added"],["map","index","20","dimension",["macro",24]],["map","index","19","dimension",["macro",23]],["map","index","102","dimension",["macro",74]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"checkout type",
      "vtp_eventLabel":["macro",42],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Payment Type Selected"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":48
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"login",
      "vtp_eventLabel":"success",
      "vtp_dimension":["list",["map","index","1","dimension","UA - User Signed In"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":49
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"document",
      "vtp_eventLabel":["macro",75],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Download Link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":50
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"click to call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",75],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Phone Number Clicked"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"order lookup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","22","metric",["macro",62]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"search",
      "vtp_eventLabel":["macro",36],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Order Searched"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":53
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"link click",
      "vtp_eventLabel":["macro",75],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Exit Link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":54
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",79]],["map","index","2","metric",["macro",80]],["map","index","3","metric",["macro",79]],["map","index","34","metric",["macro",81]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"transaction complete",
      "vtp_eventLabel":["macro",9],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Order Placed"],["map","index","78","dimension",["macro",71]],["map","index","85","dimension",["macro",82]],["map","index","99","dimension",["macro",83]],["map","index","100","dimension",["macro",84]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":55
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"store search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["template",["macro",63],"select"],
      "vtp_eventLabel":["macro",32],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Store Selected"],["map","index","64","dimension",["macro",35]],["map","index","63","dimension",["macro",34]],["map","index","62","dimension",["macro",33]],["map","index","61","dimension",["macro",32]],["map","index","60","dimension",["macro",31]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":56
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"product detail viewed",
      "vtp_eventLabel":["macro",61],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Product Detail Viewed"],["map","index","72","dimension",["macro",53]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"email",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"sign up submit",
      "vtp_dimension":["list",["map","index","1","dimension","UA - Email Subscription Completed"],["map","index","24","dimension",["macro",28]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"checkout option selected",
      "vtp_eventLabel":["macro",85],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Checkout Option Selected"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","8","metric","1"],["map","index","24","metric",["macro",86]],["map","index","25","metric",["macro",88]],["map","index","32","metric",["macro",89]],["map","index","56","metric",["macro",92]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"add to cart",
      "vtp_eventLabel":["macro",61],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Cart Add"],["map","index","68","dimension",["macro",93]],["map","index","69","dimension",["macro",94]],["map","index","73","dimension",["macro",95]],["map","index","78","dimension",["macro",71]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":60
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"email",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"sign up start",
      "vtp_dimension":["list",["map","index","1","dimension","UA - Email Subscription Started"],["map","index","24","dimension",["macro",28]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":61
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","12","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"guest - checkout",
      "vtp_eventLabel":"success",
      "vtp_dimension":["list",["map","index","1","dimension","UA - Guest Checked Out"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":62
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","42","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"cart viewed",
      "vtp_eventLabel":["template","step ",["macro",96],": ",["macro",97]],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Cart View"],["map","index","75","dimension",["macro",98]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"order lookup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","16","metric",["macro",99]],["map","index","15","metric",["macro",100]],["map","index",["macro",102],"metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"viewed",
      "vtp_eventLabel":["macro",36],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Order Viewed"],["map","index","69","dimension",["macro",40]],["map","index","40","dimension",["macro",41]],["map","index","38","dimension",["macro",39]],["map","index","37","dimension",["macro",38]],["map","index","36","dimension",["macro",37]],["map","index","35","dimension",["macro",36]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":64
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"list filter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Filter Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":65
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","38","metric",["macro",104]],["map","index","39","metric",["macro",105]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",28],
      "vtp_eventLabel":["macro",75],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Nav Link"],["map","index","25","dimension",["macro",29]],["map","index","24","dimension",["macro",28]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",2],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",106],"metric","1"],["map","index",["macro",107],"metric","1"],["map","index",["macro",109],"metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"checkout step encountered",
      "vtp_eventLabel":["template","step ",["macro",96],": ",["macro",97]],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Checkout Step Encountered"],["map","index","85","dimension",["macro",110]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"trade in",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","20","metric",["macro",111]],["map","index","19","metric",["macro",112]],["map","index","18","metric",["macro",113]],["map","index","17","metric",["macro",114]],["map","index","4","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"emailed estimate",
      "vtp_eventLabel":["macro",43],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Trade In Emailed"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",9],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",116],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1045657028",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"MXwUCMKN1QEQxOvN8gM",
      "vtp_url":["macro",117],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":108
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":109
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":139
    },{
      "function":"__cegg",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_usersNumericId":"00368247",
      "tag_id":140
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"secon0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"addto0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8062430",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":146
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":148
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":150
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":151
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":152
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_goalValue":["macro",116],
      "vtp_tagId":"4035452",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"VARIABLE_REVENUE",
      "tag_id":154
    },{
      "function":"__asp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"CWCJVNECPVH55FDDSNFWB4",
      "vtp_customerId":"HGAM45IRB5GXVJPUZ3AIJV",
      "vtp_conversionValueCurrency":"USD",
      "vtp_customData":["list",["map","key","product_fullfilment_method","value",["macro",10]],["map","key","order_id","value",["macro",9]],["map","key","product_id","value",["macro",119]]],
      "vtp_conversionValueInDollars":["macro",116],
      "tag_id":155
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"4035452",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":158
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",9],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",116],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1045657028",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"Rz2qCO_N1XMQxOvN8gM",
      "vtp_url":["macro",117],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":166
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"maink0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trans00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8062430",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":168
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_revenue":["macro",116],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",36],
      "vtp_enableProductReporting":true,
      "vtp_groupTag":"maink00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"reven00",
      "vtp_productData":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_dataSource":"JSON",
      "vtp_advertiserId":"8062430",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":169
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_revenue":["macro",116],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",9],
      "vtp_enableProductReporting":true,
      "vtp_groupTag":"maink00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"reven000",
      "vtp_productData":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_dataSource":"JSON",
      "vtp_advertiserId":"8062430",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":184
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"maink0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trans000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8062430",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":185
    },{
      "function":"__asp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"CWCJVNECPVH55FDDSNFWB4",
      "vtp_customerId":"HGAM45IRB5GXVJPUZ3AIJV",
      "vtp_conversionValueCurrency":"USD",
      "vtp_customData":["list",["map","key","product_id","value",["macro",119]],["map","key","product_fullfilment_method","value",["macro",10]],["map","key","order_id","value",["macro",9]]],
      "vtp_conversionValueInDollars":["macro",116],
      "vtp_segmentName":"ispu_conversion",
      "tag_id":186
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1045657028",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",117],
      "vtp_enableRdpCheckbox":true,
      "tag_id":187
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"trade in",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","21","metric",["macro",62]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"searched",
      "vtp_eventLabel":["macro",120],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Trade In Searched"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":188
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"trade in",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","20","metric",["macro",111]],["map","index","19","metric",["macro",112]],["map","index","18","metric",["macro",113]],["map","index","17","metric",["macro",114]],["map","index","4","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"saved estimate",
      "vtp_eventLabel":["macro",43],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Trade In Saved"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":189
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"trade in",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","20","metric",["macro",111]],["map","index","19","metric",["macro",112]],["map","index","18","metric",["macro",113]],["map","index","17","metric",["macro",114]],["map","index","4","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"printed estimate",
      "vtp_eventLabel":["macro",43],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Trade In Printed"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":190
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":191
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":193
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"onlin0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"kpi_g0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9300303",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":239
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":240
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"gener0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"kpi_g000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9300303",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":241
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"gener0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"kpi_g0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9300303",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":242
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"gener0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"kpi_g001",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9300303",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":243
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"onlin0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"kpi_g00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9300303",
      "vtp_ordinalStandard":["macro",118],
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":244
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",116]]],
      "vtp_revenue":["macro",116],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",9],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"thank0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"kpi_g0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9300303",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":245
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"hops impression",
      "vtp_eventLabel":["macro",61],
      "vtp_dimension":["list",["map","index","1","dimension","UA - HOPS Impression"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":247
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"hops unsuccessful",
      "vtp_eventLabel":["macro",61],
      "vtp_dimension":["list",["map","index","1","dimension","UA - HOPS Unsuccessful"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":248
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"hops successful",
      "vtp_eventLabel":["macro",61],
      "vtp_dimension":["list",["map","index","1","dimension","UA - HOPS Successful"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":249
    },{
      "function":"__cvt_10656696_278",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"2485086754916316",
      "vtp_standardEventName":"PageView",
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":258
    },{
      "function":"__cvt_10656696_278",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"2485086754916316",
      "vtp_objectPropertyList":["list",["map","name","value","value",["macro",116]],["map","name","currency","value","USD"],["map","name","contents","value",["macro",122]],["map","name","content_type","value","product"],["map","name","content_ids","value",["macro",123]]],
      "vtp_standardEventName":"Purchase",
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":259
    },{
      "function":"__cvt_10656696_278",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"2347808105484326",
      "vtp_standardEventName":"PageView",
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":260
    },{
      "function":"__cvt_10656696_278",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"2347808105484326",
      "vtp_objectPropertyList":["list",["map","name","value","value",["macro",116]],["map","name","currency","value","USD"],["map","name","contents","value",["macro",122]],["map","name","content_type","value","product"],["map","name","content_ids","value",["macro",123]]],
      "vtp_standardEventName":"Purchase",
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":261
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":265
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":266
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",121],["macro",65]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",57],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Pageview - Checkout Steps"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":267
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"checkout error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",124],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":320
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",79]],["map","index","2","metric",["macro",80]],["map","index","3","metric",["macro",79]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"high margin transaction complete",
      "vtp_eventLabel":["macro",9],
      "vtp_dimension":["list",["map","index","1","dimension","UA - High Margin - Order Placed"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":327
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_revenue":["macro",116],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",9],
      "vtp_enableProductReporting":true,
      "vtp_groupTag":"sale",
      "vtp_useImageTag":false,
      "vtp_activityTag":"purch0",
      "vtp_productData":["macro",127],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_dataSource":"JSON",
      "vtp_advertiserId":"10097590",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",117],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":329
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":337
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"recommendation modal",
      "vtp_eventLabel":["macro",128],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Recommendation Modal Product Clicked"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":342
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"Shipment selection | Get it this way click",
      "vtp_eventLabel":["macro",129],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Shipping type clicked"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":346
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"promotion viewed",
      "vtp_dimension":["list",["map","index","1","dimension","UA - Promotion Viewed - new"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":358
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","6","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"promotion clicked",
      "vtp_eventLabel":["template",["macro",130],":",["macro",131]],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Promotion Clicked - new"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":360
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","26","metric",["macro",132]]],
      "vtp_gaSettings":["macro",57],
      "vtp_dimension":["list",["map","index","1","dimension","UA - XAA Financing Enrollment"],["map","index","70","dimension",["macro",134]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":365
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["template","Product Option Selected : ",["macro",87]],
      "vtp_eventLabel":["macro",139],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":375
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["template","SKU :",["macro",140]," | ",["macro",141]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":377
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["template",["macro",142]," : ",["macro",143]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":387
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["macro",145],
      "vtp_dimension":["list",["map","index","89","dimension",["macro",146]],["map","index","4","dimension",["macro",147]],["map","index","68","dimension",["macro",148]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":393
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",149],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","37","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",150],
      "vtp_eventLabel":["macro",151],
      "vtp_dimension":["list",["map","index","74","dimension",["template",["macro",151]," : ",["macro",152]]],["map","index","21","dimension",["macro",25]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":419
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":422
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"SiteError",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","37","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",153],
      "vtp_eventLabel":["template",["macro",154],":",["macro",155]],
      "vtp_dimension":["list",["map","index","74","dimension",["template","SiteError : ",["macro",153]]],["map","index","21","dimension",["macro",25]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":425
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":427
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","35","metric",["macro",156]],["map","index","36","metric",["macro",157]]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",158],
      "vtp_eventLabel":["macro",159],
      "vtp_dimension":["list",["map","index","76","dimension",["macro",159]],["map","index","77","dimension",["macro",158]],["map","index","1","dimension","UA - Internal Search"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":431
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["macro",145],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":445
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","40","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["macro",145],
      "vtp_dimension":["list",["map","index","82","dimension",["template",["macro",145],"|",["macro",144]]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":447
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","41","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["template",["macro",145],["macro",161]],
      "vtp_dimension":["list",["map","index","83","dimension",["template",["macro",144],"|",["macro",145],"|",["macro",161]]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":448
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":452
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","46","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_dimension":["list",["map","index","90","dimension",["macro",144]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":465
    },{
      "function":"__paused",
      "vtp_originalTagType":"asp",
      "tag_id":474
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","49","metric","1"],["map","index",["macro",163],"metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":488
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",165],"metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",164],
      "vtp_eventLabel":["macro",166],
      "vtp_dimension":["list",["map","index","91","dimension",["macro",166]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":491
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Phone number",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"link click",
      "vtp_eventLabel":["macro",75],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Phone number Link Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":498
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":502
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",1],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",169],"metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["macro",145],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Communication Preference"],["map","index","92","dimension",["macro",145]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":504
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","67","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":"promo code removed",
      "vtp_eventLabel":["macro",23],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Promo Cocde Removed"],["map","index","20","dimension",["macro",24]],["map","index","19","dimension",["macro",23]],["map","index","102","dimension",["macro",74]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":512
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",170],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","37","metric","1"]],
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",171],
      "vtp_eventLabel":["macro",172],
      "vtp_dimension":["list",["map","index","74","dimension",["macro",172]],["map","index","21","dimension",["macro",25]],["map","index","1","dimension","UA - Checkout Step Error"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":524
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",173],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",57],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["macro",145],
      "vtp_dimension":["list",["map","index","1","dimension","UA - Checkout Step Events"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":525
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K7JVX52","nickname","Gamestop - ECP - Zone - Deg Digital"]],
      "vtp_boundaries":["list",["zb","_re",["macro",115],"3|undefined",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","jsm"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":526
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10656696_53",
      "tag_id":527
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10656696_56",
      "tag_id":528
    },{
      "function":"__evl",
      "vtp_elementId":"hopsModal",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"95",
      "vtp_onScreenDuration":"3000",
      "vtp_uniqueTriggerId":"10656696_232",
      "tag_id":529
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"#hopsResultModal .text-danger, #storePickupResultModal .cart-reservation-status.text-danger",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"95",
      "vtp_onScreenDuration":"1000",
      "vtp_uniqueTriggerId":"10656696_233",
      "tag_id":530
    },{
      "function":"__hl",
      "tag_id":531
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"p.error-message-text",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"10656696_319",
      "tag_id":532
    },{
      "function":"__jel",
      "tag_id":533
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"1000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10656696_442",
      "tag_id":534
    },{
      "function":"__cl",
      "tag_id":535
    },{
      "function":"__cl",
      "tag_id":536
    },{
      "function":"__cl",
      "tag_id":537
    },{
      "function":"__cl",
      "tag_id":538
    },{
      "function":"__cl",
      "tag_id":539
    },{
      "function":"__cl",
      "tag_id":540
    },{
      "function":"__cl",
      "tag_id":541
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10656696_476",
      "tag_id":542
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10656696_478",
      "tag_id":543
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10656696_479",
      "tag_id":544
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10656696_500",
      "tag_id":545
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var b=function(){var a=document.createElement(\"script\");a.src=\"https:\/\/static.audioeye.com\/ae.js\";a.type=\"text\/javascript\";a.setAttribute(\"async\",\"\");document.getElementsByTagName(\"body\")[0].appendChild(a)};\"complete\"!==document.readyState?window.addEventListener?window.addEventListener(\"load\",b):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",b):b()}();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.3\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/118903.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",154,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[],googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([1E3,0],[[970,90],\"fluid\",[728,90]]).addSize([821,0],[[728,90],\"fluid\"]).addSize([0,0],[]).build(),d=googletag.sizeMapping().addSize([1E3,0],[[1,1]]).addSize([0,0],[]).build(),b=googletag.sizeMapping().addSize([0,0],[[320,50],\"fluid\"]).addSize([821,0],[]).build(),e=googletag.sizeMapping().addSize([0,0],[[300,250],[320,50],\"fluid\"]).addSize([821,0],[]).build(),f=googletag.sizeMapping().addSize([0,0],[[1,1]]).addSize([821,0],[]).build(),\nc;void 0!==",["escape",["macro",13],8,16],"?\"guest\"==",["escape",["macro",13],8,16],"?c=\"F\":loginStatus=\"T\":loginStatus=\"T\";var g=void 0!==",["escape",["macro",14],8,16],"?\"free\"==",["escape",["macro",14],8,16],".toLowerCase()||\"pro\"==",["escape",["macro",14],8,16],".toLowerCase()?\"T\":\"F\":\"F\";var h=",["escape",["macro",20],8,16],";\"xs\"==h?(gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/Homepage\",[\"fluid\",[320,50]],\"marketing-1\").setTargeting(\"pos\",[\"HP_mweb_Top\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(b).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/Homepage\",\n[\"fluid\",[320,50]],\"marketing-2\").setTargeting(\"pos\",[\"HP_mweb_Middle\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(b).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/Homepage\",[\"fluid\",[320,50],[300,250]],\"marketing-3\").setTargeting(\"pos\",[\"HP_mweb_Bottom\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(e).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/Homepage\",[[1,1]],\"homepage-takeover\").setTargeting(\"pos\",\n[\"HP_mweb_Skin\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(f).addService(googletag.pubads()))):(gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/Homepage\",[\"fluid\",[970,90],[728,90]],\"marketing-1\").setTargeting(\"pos\",[\"HP_Top\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(a).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/Homepage\",[\"fluid\",[728,90]],\"marketing-2\").setTargeting(\"pos\",[\"HP_Middle\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(a).addService(googletag.pubads())),\ngptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/Homepage\",[\"fluid\",[728,90]],\"marketing-3\").setTargeting(\"pos\",[\"HP_Bottom\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(a).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/Homepage\",[[1,1]],\"homepage-takeover\").setTargeting(\"pos\",[\"HP_Skin\"]).setTargeting(\"ptype\",[\"Homepage\"]).defineSizeMapping(d).addService(googletag.pubads())));googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"gs_login\",\n[c]).setTargeting(\"gs_pur\",[g]).setTargeting(\"ix_apnx_om\",[\"V1\"]).setTargeting(\"ix_apnx_id\",[\"V1\"]).setTargeting(\"rpfl_elemid\",[\"V1\"]).setTargeting(\"rpfl_18112\",[\"V1\"]).setTargeting(\"hb_pb_rubicon\",[\"V1\"]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":160
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",155,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[],googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var c=googletag.sizeMapping().addSize([1E3,0],[\"fluid\",[970,90],[728,90]]).addSize([821,0],[\"fluid\",[728,90]]).addSize([0,0],[]).build(),k=googletag.sizeMapping().addSize([1E3,0],[[1,1]]).addSize([0,0],[]).build(),d=googletag.sizeMapping().addSize([0,0],[\"fluid\",[320,50],[300,250]]).addSize([821,0],[]).build(),l=googletag.sizeMapping().addSize([0,0],[[1,1]]).addSize([821,0],[]).build(),e;void 0!==",["escape",["macro",13],8,16],"?\"guest\"==",["escape",["macro",13],8,16],"?e=\"F\":loginStatus=\n\"T\":loginStatus=\"T\";var m=void 0!==",["escape",["macro",14],8,16],"?\"free\"==",["escape",["macro",14],8,16],".toLowerCase()||\"pro\"==",["escape",["macro",14],8,16],".toLowerCase()?\"T\":\"F\":\"F\";var a=",["escape",["macro",121],8,16],".split(\"\/\")[1];var f=",["escape",["macro",121],8,16],".split(\"\/\")[2];var g=",["escape",["macro",121],8,16],".split(\"\/\")[3];var h=",["escape",["macro",121],8,16],".split(\"\/\")[4];var n=",["escape",["macro",20],8,16],",b=\"\/110589567\/GSWeb\/\"+a+\"-\"+f+\"-\"+g+\"-\"+h;b=b.replace(\/\\-undefined\/g,\"\").replace(\/\\-+$\/,\"\");a=\"\/110589567\/GSmweb\/\"+a+\"-\"+f+\"-\"+g+\"-\"+h;a=a.replace(\/\\-undefined\/g,\n\"\").replace(\/\\-+$\/,\"\");\"xs\"==n?(gptadslots.push(googletag.defineSlot(a,[\"fluid\",[320,50]],\"storefront-1\").setTargeting(\"pos\",[\"Storefront_mweb_Top\"]).setTargeting(\"ptype\",[\"Storefront\"]).defineSizeMapping(d).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(a,[\"fluid\",[320,50]],\"storefront-2\").setTargeting(\"pos\",[\"Storefront_mweb_Middle\"]).setTargeting(\"ptype\",[\"Storefront\"]).defineSizeMapping(d).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(a,[[1,1]],\"homepage-takeover\").setTargeting(\"pos\",\n[\"Storefront_mweb_Skin\"]).setTargeting(\"ptype\",[\"Storefront\"]).defineSizeMapping(l).addService(googletag.pubads()))):(gptadslots.push(googletag.defineSlot(b,[\"fluid\",[970,90],[728,90]],\"storefront-1\").setTargeting(\"pos\",[\"Storefront_Top\"]).setTargeting(\"ptype\",[\"Storefront\"]).defineSizeMapping(c).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(b,[\"fluid\",[728,90]],\"storefront-2\").setTargeting(\"pos\",[\"Storefront_Middle\"]).setTargeting(\"ptype\",[\"Storefront\"]).defineSizeMapping(c).addService(googletag.pubads())),\ngptadslots.push(googletag.defineSlot(b,[[1,1]],\"homepage-takeover\").setTargeting(\"pos\",[\"Storefront_Skin\"]).setTargeting(\"ptype\",[\"Storefront\"]).defineSizeMapping(k).addService(googletag.pubads())));googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"gs_login\",[e]).setTargeting(\"gs_pur\",[m]).setTargeting(\"ix_apnx_om\",[\"V1\"]).setTargeting(\"ix_apnx_id\",[\"V1\"]).setTargeting(\"gs_sf\",[\"V1\"]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":162
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",156,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[],googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var c=googletag.sizeMapping().addSize([821,0],[\"fluid\",[728,90]]).addSize([0,0],[]).build(),d=googletag.sizeMapping().addSize([0,0],[\"fluid\",[320,50],[300,250]]).addSize([821,0],[]).build();void 0!==",["escape",["macro",13],8,16],"?\"guest\"!=",["escape",["macro",13],8,16],"\u0026\u0026(loginStatus=\"T\"):loginStatus=\"T\";void 0===",["escape",["macro",14],8,16],"||\"free\"!=",["escape",["macro",14],8,16],".toLowerCase()\u0026\u0026",["escape",["macro",14],8,16],".toLowerCase();var a=",["escape",["macro",121],8,16],".split(\"\/\")[1];var e=",["escape",["macro",121],8,16],".split(\"\/\")[2];\nvar f=",["escape",["macro",121],8,16],".split(\"\/\")[3];var g=",["escape",["macro",121],8,16],".split(\"\/\")[4];var h=",["escape",["macro",20],8,16],",b=\"\/110589567\/GSWeb\/\"+a+\"-\"+e+\"-\"+f+\"-\"+g;b=b.replace(\/\\-undefined\/g,\"\").replace(\/\\-+$\/,\"\");a=\"\/110589567\/GSmweb\/\"+a+\"-\"+e+\"-\"+f+\"-\"+g;a=a.replace(\/\\-undefined\/g,\"\").replace(\/\\-+$\/,\"\");\"xs\"==h?(gptadslots.push(googletag.defineSlot(a,[\"fluid\",[320,50]],\"SearchAd_1\").defineSizeMapping(d).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(a,[\"fluid\",[320,50],[300,250]],\"SearchAd_2\").setTargeting(\"pos\",\n[\"Browse_mweb_Bottom\"]).setTargeting(\"ptype\",[\"Browse\"]).defineSizeMapping(d).addService(googletag.pubads()))):(gptadslots.push(googletag.defineSlot(b,[\"fluid\",[728,90]],\"SearchAd_1\").defineSizeMapping(c).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(b,[\"fluid\",[728,90]],\"SearchAd_2\").defineSizeMapping(c).addService(googletag.pubads())));googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"rpfl_elemid\",[\"V1\"]).setTargeting(\"gs_kw\",[",["escape",["macro",176],8,16],"]);\ngoogletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",161,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[],googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var a=googletag.sizeMapping().addSize([821,0],[\"fluid\",[728,90]]).addSize([0,0],[]).build(),b=googletag.sizeMapping().addSize([0,0],[\"fluid\",[320,50]]).addSize([821,0],[]).build(),c;void 0!==",["escape",["macro",13],8,16],"?\"guest\"==",["escape",["macro",13],8,16],"?c=\"F\":loginStatus=\"T\":loginStatus=\"T\";var d=void 0!==",["escape",["macro",14],8,16],"?\"free\"==",["escape",["macro",14],8,16],".toLowerCase()||\"pro\"==",["escape",["macro",14],8,16],".toLowerCase()?\"T\":\"F\":\"F\";var e=",["escape",["macro",121],8,16],".split(\"\/\")[1];var f=",["escape",["macro",121],8,16],".split(\"\/\")[2];\nvar g=",["escape",["macro",121],8,16],".split(\"\/\")[3];var h=",["escape",["macro",20],8,16],";\"xs\"==h?(gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/search\",[\"fluid\",[320,50]],\"SearchAd_1\").setTargeting(\"pos\",[\"Search_mweb_Top\"]).setTargeting(\"ptype\",[\"Search\"]).defineSizeMapping(b).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/search\",[\"fluid\",[320,50]],\"SearchAd_2\").setTargeting(\"pos\",[\"Search_mweb_Bottom\"]).setTargeting(\"ptype\",[\"Search\"]).defineSizeMapping(b).addService(googletag.pubads()))):\n(gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/search\",[\"fluid\",[728,90]],\"SearchAd_1\").setTargeting(\"pos\",[\"Search_Top\"]).setTargeting(\"ptype\",[\"Search\"]).defineSizeMapping(a).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/search\",[\"fluid\",[728,90]],\"SearchAd_2\").setTargeting(\"pos\",[\"Search_Bottom\"]).setTargeting(\"ptype\",[\"Search\"]).defineSizeMapping(a).addService(googletag.pubads())));googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"rpfl_elemid\",\n[\"V1\"]).setTargeting(\"hb_pb_rubicon\",[\"V1\"]).setTargeting(\"ix_apnx_om\",[\"V1\"]).setTargeting(\"ix_apnx_id\",[\"V1\"]).setTargeting(\"gs_login\",[c]).setTargeting(\"gs_pur\",[d]).setTargeting(\"gs_kw\",[",["escape",["macro",176],8,16],"]).setTargeting(\"gs_sf\",[e]).setTargeting(\"gs_cat1\",[f]).setTargeting(\"gs_cat2\",[g]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":179
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",158,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[];var googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var logStatus;if(",["escape",["macro",13],8,16],"!==undefined)if(",["escape",["macro",13],8,16],"==\"guest\")logStatus=\"F\";else loginStatus=\"T\";else loginStatus=\"T\";var pur;if(",["escape",["macro",14],8,16],"!==undefined)if(",["escape",["macro",14],8,16],".toLowerCase()==\"free\"||",["escape",["macro",14],8,16],".toLowerCase()==\"pro\")pur=\"T\";else pur=\"F\";else pur=\"F\";var sfName;sfName=",["escape",["macro",121],8,16],".split(\"\/\")[1];var cat1;cat1=",["escape",["macro",121],8,16],".split(\"\/\")[2];var cat2;cat2=",["escape",["macro",121],8,16],".split(\"\/\")[3];var cat3;\ncat3=",["escape",["macro",121],8,16],".split(\"\/\")[4];var exp=",["escape",["macro",20],8,16],";var cPath=",["escape",["macro",2],8,16],".ecommerce.detail.products[0].category;cPath=cPath.toLowerCase();cPath=cPath.replace(\/[^a-zA-Z0-9 \\\/]\/g,\"\");var dPath=\"\/110589567\/GSWeb\/\"+cPath;dPath=dPath.replace(\/\\s+\/g,\"-\");gptadslots.push(googletag.defineSlot(dPath,[[1,1]],\"div-gpt-ad-5291622-1\").setTargeting(\"ptype\",[\"PDP\"]).addService(googletag.pubads()));googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"gs_login\",[logStatus]).setTargeting(\"gs_pur\",\n[pur]).setTargeting(\"gs_sf\",[sfName]).setTargeting(\"gs_rtg\",[\"V1\"]).setTargeting(\"gs_prodpr\",[",["escape",["macro",177],8,16],"]).setTargeting(\"gs_pub\",[\"V1\"]).setTargeting(\"gs_cat1\",[cat1]).setTargeting(\"gs_cat2\",[cat2]).setTargeting(\"sku\",[",["escape",["macro",119],8,16],"]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(true);googletag.enableServices()});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",160,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[],googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var k=googletag.sizeMapping().addSize([821,0],[\"fluid\",[728,90]]).addSize([0,0],[]).build(),l=googletag.sizeMapping().addSize([0,0],[\"fluid\",[320,50]]).addSize([821,0],[]).build(),m;void 0!==",["escape",["macro",13],8,16],"?\"guest\"==",["escape",["macro",13],8,16],"?m=\"F\":loginStatus=\"T\":loginStatus=\"T\";var n=void 0!==",["escape",["macro",14],8,16],"?\"free\"==",["escape",["macro",14],8,16],".toLowerCase()||\"pro\"==",["escape",["macro",14],8,16],".toLowerCase()?\"T\":\"F\":\"F\";for(var a=",["escape",["macro",2],8,16],".ecommerce.purchase.products,\nd,e,c,f,g,h=0,b=0;b\u003Ca.length;b++)void 0==d?d=a[b].dimension49+\"|\":d+=a[b].dimension49+\"|\",void 0==e?e=a[b].price.toString()+\"|\":e+=a[b].price.toString()+\"|\",void 0==h?h=a[b].quantity+\"|\":h+=a[b].quantity+\"|\",a[b].dimension42.toLowerCase().includes(\"digital\")?void 0==c?c=a[b].condition+\"|\":c+=\"T|\":void 0==c?c=\"F|\":c+=\"F|\",void 0==f?f=a[b].dimension47+\"|\":f+=a[b].dimension47+\"|\",void 0==g?g=a[b].category+\"|\":g+=a[b].category+\"|\";e=e.replace(\/\\|$\/,\"\");d=d.replace(\/\\|$\/,\"\");h=h.toString();c=c.replace(\/\\|$\/,\n\"\");f=f.replace(\/\\|$\/,\"\");g=g.replace(\/\\|$\/,\"\");e=e.replace(\/undefined\\|\/,\"\");d=d.replace(\/undefined\\|?\/,\"\");h=h.toString().replace(\/undefined\\|?\/,\"\");c=c.replace(\/undefined\\|?\/,\"\");f=f.replace(\/undefined\\|?\/,\"\");g=g.replace(\/undefined\\|?\/,\"\");a=",["escape",["macro",20],8,16],";\"xs\"==a?(gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/OrderConfirmation\",[\"fluid\",[320,50]],\"OrderConfirm_1\").setTargeting(\"pos\",[\"OCP_mweb_Top\"]).defineSizeMapping(l).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSmweb\/OrderConfirmation\",\n[\"fluid\",[320,50]],\"OrderConfirm_2\").setTargeting(\"pos\",[\"OCP_mweb_Bottom\"]).defineSizeMapping(l).addService(googletag.pubads()))):(gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/OrderConfirmation\",[\"fluid\",[728,90]],\"OrderConfirm_1\").setTargeting(\"pos\",[\"OCP_Top\"]).defineSizeMapping(k).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(\"\/110589567\/GSweb\/OrderConfirmation\",[\"fluid\",[728,90]],\"OrderConfirm_2\").setTargeting(\"pos\",[\"OCP_Bottom\"]).defineSizeMapping(k).addService(googletag.pubads())));\ngoogletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"gs_login\",[m]).setTargeting(\"sku\",[d]).setTargeting(\"ordvalue\",[",["escape",["macro",116],8,16],"]).setTargeting(\"paymethod\",[",["escape",["macro",178],8,16],"]).setTargeting(\"prodprice\",[e]).setTargeting(\"qty\",[h]).setTargeting(\"gs_pur\",[n]).setTargeting(\"digitalsku\",[c]).setTargeting(\"platform\",[f]).setTargeting(\"platformproduct\",[g]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",162,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a=56683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar myCriteoVar=setInterval(myCriteoTag,1E3);function myCriteoTag(){var c=getCriteoCookie(\"RES_SESSIONID\")||",["escape",["macro",179],8,16],";if(void 0!=c){var a=",["escape",["macro",20],8,16],";a=\"xs\"==a?\"mobile\":\"web\";a=\"viewHome_\"+a;var b=",["escape",["macro",5],8,16],";void 0==b\u0026\u0026(b=\"\");window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",id:c},{event:\"setCustomerId\",id:b},{event:\"viewHome\",page_id:a});clearInterval(myCriteoVar)}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a=56683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1===window.location.pathname.indexOf(\"\/cart\/\")\u0026\u0026-1===window.location.pathname.indexOf(\"\/checkout\/\")\u0026\u0026-1===window.location.pathname.indexOf(\"\/products\/\")){var vCat=void 0==",["escape",["macro",176],8,16],"?\"viewCategory_\":\"viewSearchResult_\",vEv=void 0==",["escape",["macro",176],8,16],"?\"viewCategory\":\"viewSearchResult\",query;",["escape",["macro",176],8,16],"\u0026\u0026(query=",["escape",["macro",176],8,16],".match(\/^find .*\/)?void 0:",["escape",["macro",176],8,16],");var exType=",["escape",["macro",20],8,16],";exType=\"xs\"==exType?\"mobile\":\"web\";var pType=vCat+exType;\nif(\"undefined\"!==typeof dataLayer){var index=dataLayer.findIndex(function(a){return\"Listing Viewed\"==a.event});if(\"undefined\"!==typeof dataLayer[index].listing\u0026\u0026\"undefined\"!==typeof dataLayer[index].listing.listingResults\u0026\u0026\"undefined\"!==typeof dataLayer[index].listing.listingResults.item[0]\u0026\u0026\"undefined\"!==typeof dataLayer[index].listing.listingResults.item[0].productInfo\u0026\u0026\"undefined\"!==typeof dataLayer[index].listing.listingResults.item[0].productInfo.category\u0026\u0026\"undefined\"!==typeof dataLayer[index].listing.listingResults.item[0].productInfo.productID){for(var cat=\ndataLayer[index].listing.listingResults.item[0].productInfo.category,skus=[],i=0;i\u003CdataLayer[index].listing.listingResults.item.length;i++)skus.push(dataLayer[index].listing.listingResults.item[i].productInfo.productID);\"object\"==typeof skus\u0026\u0026(window.testVAR=skus,\"\"==skus[0]\u0026\u0026(skus=[\"none\"]))}else cat=\"\",skus=[\"none\"],console.log(\"Datalayer missing\")}else cat=",["escape",["macro",2],8,16],".ecommerce.impressions[0].category;cat=cat.replace(\/[^a-z0-9 \/]+\/gi,\"\");cat=cat.replace(\/ \\\/ \/g,\"\\x3e\");cat=cat.replace(\/\\\/\/g,\n\"\\x3e\");var rvi=",["escape",["macro",179],8,16],",ci=",["escape",["macro",5],8,16],";void 0==ci\u0026\u0026(ci=\"\");void 0!=query?(window.criteo_q=window.criteo_q||[],window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",id:rvi},{event:\"setCustomerId\",id:ci},{event:vEv,item:skus,keywords:query,page_number:1,page_id:pType})):(window.criteo_q=window.criteo_q||[],window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",id:rvi},{event:\"setCustomerId\",id:ci},{event:vEv,\nitem:skus,category:cat,page_number:1,page_id:pType}))}}catch(a){console.log(a)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",162,1]],
      "unlimited":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a=56683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar myCriteoTO=setTimeout(myCriteoInt,2E3);\nfunction myCriteoInt(){function e(){var d=getCriteoCookie(\"RES_SESSIONID\")||",["escape",["macro",179],8,16],";if(void 0!=d){var a=",["escape",["macro",20],8,16],";a=\"xs\"==a?\"mobile\":\"web\";a=\"viewItem_\"+a;if(-1\u003Cwindow.location.pathname.indexOf(\"\/products\/\")){var f=",["escape",["macro",119],8,16],",g=",["escape",["macro",90],8,16],",c=",["escape",["macro",180],8,16],",b=document.getElementsByClassName(\"global-availability\")[0].dataset.isPreorder;c=\"available\"==c.toLowerCase()||\"true\"==b.toLowerCase()\u0026\u0026\"not available\"==c.toLowerCase()?\"1\":\"0\"}b=",["escape",["macro",5],8,16],";\nvoid 0==b\u0026\u0026(b=\"\");window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",id:d},{event:\"setCustomerId\",id:b},{event:\"viewItem\",item:f,price:g,availability:c,page_id:a});clearInterval(h)}}var h=setInterval(e,1E3)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",162,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a=56683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar myCriteoVar=setInterval(myCriteoTag,1E3);\nfunction myCriteoTag(){var e=getCriteoCookie(\"RES_SESSIONID\")||",["escape",["macro",179],8,16],";if(void 0!=e){var b=",["escape",["macro",20],8,16],";b=\"xs\"==b?\"mobile\":\"web\";b=\"viewBasket_\"+b;for(var f=[],a,g,h,d=",["escape",["macro",2],8,16],".ecommerce.checkout.products,c=0;c\u003Cd.length;c++)a=d[c].dimension49,g=d[c].price,h=d[c].quantity,f.push({id:a,price:g,quantity:h});a=",["escape",["macro",5],8,16],";void 0==a\u0026\u0026(a=\"\");window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",\nid:e},{event:\"setCustomerId\",id:a},{event:\"viewBasket\",item:f,page_id:b});clearInterval(myCriteoVar)}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",162,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a=56683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar myCriteoVar=setInterval(myCriteoTag,1E3);\nfunction myCriteoTag(){var e=getCriteoCookie(\"RES_SESSIONID\")||",["escape",["macro",179],8,16],";if(void 0!=e){var b=",["escape",["macro",20],8,16],";b=\"xs\"==b?\"mobile\":\"web\";b=\"trackTransaction_\"+b;for(var f=[],a,g,h,d=",["escape",["macro",2],8,16],".ecommerce.purchase.products,c=0;c\u003Cd.length;c++)a=d[c].dimension49,g=d[c].price,h=d[c].quantity,f.push({id:a,price:g,quantity:h});a=",["escape",["macro",5],8,16],";void 0==a\u0026\u0026(a=\"\");window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",\nid:e},{event:\"setCustomerId\",id:a},{event:\"trackTransaction\",id:",["escape",["macro",9],8,16],",currency:\"USD\",page_id:b,item:f});clearInterval(myCriteoVar)}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",159,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\u003Cscript\u003Evar gptadslots=[],googletag=googletag||{cmd:[]};\u003C\/script\u003E\n\u003Cscript\u003Egoogletag.cmd.push(function(){var c=googletag.sizeMapping().addSize([821,0],[\"fluid\",[728,90]]).addSize([0,0],[]).build(),d=googletag.sizeMapping().addSize([0,0],[\"fluid\",[320,50]]).addSize([821,0],[]).build(),e;void 0!==",["escape",["macro",13],8,16],"?\"guest\"==",["escape",["macro",13],8,16],"?e=\"F\":loginStatus=\"T\":loginStatus=\"T\";var f=void 0!==",["escape",["macro",14],8,16],"?\"free\"==",["escape",["macro",14],8,16],".toLowerCase()||\"pro\"==",["escape",["macro",14],8,16],".toLowerCase()?\"T\":\"F\":\"F\";",["escape",["macro",121],8,16],".split(\"\/\");",["escape",["macro",121],8,16],".split(\"\/\");\n",["escape",["macro",121],8,16],".split(\"\/\");",["escape",["macro",121],8,16],".split(\"\/\");var g=",["escape",["macro",20],8,16],",a=\"\/110589567\/GSWeb\/Storelocator\";a=a.replace(\/\\\/undefined\/g,\"\").replace(\/\\\/+$\/,\"\");var b=\"\/110589567\/GSmweb\/Storelocator\";b=b.replace(\/\\\/undefined\/g,\"\").replace(\/\\\/+$\/,\"\");\"xs\"==g?(gptadslots.push(googletag.defineSlot(b,[\"fluid\",[320,50]],\"Storelocate_1\").setTargeting(\"pos\",[\"Storelocator_mweb_Top\"]).setTargeting(\"ptype\",[\"Storelocator\"]).defineSizeMapping(d).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(b,\n[\"fluid\",[320,50]],\"Storelocate_2\").setTargeting(\"pos\",[\"Storelocator_mweb_Bottom\"]).setTargeting(\"ptype\",[\"Storelocator\"]).defineSizeMapping(d).addService(googletag.pubads()))):(gptadslots.push(googletag.defineSlot(a,[\"fluid\",[728,90]],\"Storelocate_1\").setTargeting(\"pos\",[\"Storelocator_Top\"]).setTargeting(\"ptype\",[\"Storelocator\"]).defineSizeMapping(c).addService(googletag.pubads())),gptadslots.push(googletag.defineSlot(a,[\"fluid\",[728,90]],\"Storelocate_2\").setTargeting(\"pos\",[\"Storelocator_Bottom\"]).setTargeting(\"ptype\",\n[\"Storelocator\"]).defineSizeMapping(c).addService(googletag.pubads())));googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"gs_login\",[e]).setTargeting(\"gs_pur\",[f]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setForceSafeFrame(!1);googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":200
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",162,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a=56683\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar myCriteoVar=setInterval(myCriteoTag,1E3);\nfunction myCriteoTag(){var rid=getCriteoCookie(\"RES_SESSIONID\")||",["escape",["macro",179],8,16],";if(rid!=undefined){var exType=",["escape",["macro",20],8,16],";exType=exType==\"xs\"?\"mobile\":\"web\";var pType=\"addToCart_\"+exType;var pSku=",["escape",["macro",119],8,16],";var pPrice=",["escape",["macro",90],8,16],";var pQty=",["escape",["macro",91],8,16],";var rvi=rid,ci=",["escape",["macro",5],8,16],";if(ci==undefined)ci=\"\";window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:\"56683\"},{event:\"setRetailerVisitorId\",id:rvi},{event:\"setCustomerId\",\nid:ci},{event:\"addToCart\",item:[{id:pSku,price:pPrice,quantity:pQty}]});clearInterval(myCriteoVar)}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar value=",["escape",["macro",116],8,16],",valueInCents=100*value;window.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"trackRevenue\",tags:{revenue:valueInCents}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":250
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b,e,a,c){a=d.createElement(b);a.type=\"text\/java\"+b;a.async=!0;a.src=e+Math.floor(Date.now()\/864E5);c=d.getElementsByTagName(b)[0];c.parentNode.insertBefore(a,c)})(document,\"script\",\"\/\/a.sellpoint.net\/c\/6781\/sp.js?cv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":252
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar SPWORLD=SPWORLD||[];SPWORLD.push(",["escape",["macro",181],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":253
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var itemList=[],pId,pPrice,pQty,products=",["escape",["macro",2],8,16],".ecommerce.purchase.products,i=0;i\u003Cproducts.length;i++)pId=products[i].id,pPrice=products[i].price,pQty=products[i].quantity,pQty=pQty.toString(),itemList.push({sku:pId,price:pPrice,count:pQty});window.SPWORLD=window.SPWORLD||[];SPWORLD.push({type:\"track\",event:\"transaction\",orderid:",["escape",["macro",9],8,16],",total:",["escape",["macro",116],8,16],",items:itemList});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof SPWORLD\u0026\u0026SPWORLD.push({type:\"track\",event:\"addToCart\",qty:",["escape",["macro",91],8,16],",sku:",["escape",["macro",181],8,16],",price:",["escape",["macro",90],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",157,2]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript async=\"async\" src=\"https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript\u003Ewindow.googletag=window.googletag||{cmd:[]};\ngoogletag.cmd.push(function(){var k;void 0!==",["escape",["macro",13],8,16],"?\"guest\"==",["escape",["macro",13],8,16],"?k=\"F\":loginStatus=\"T\":loginStatus=\"T\";var l=void 0!==",["escape",["macro",14],8,16],"?\"free\"==",["escape",["macro",14],8,16],".toLowerCase()||\"pro\"==",["escape",["macro",14],8,16],".toLowerCase()?\"T\":\"F\":\"F\";for(var a=",["escape",["macro",2],8,16],".ecommerce.purchase.products,d,e,c,f,g,h=0,b=0;b\u003Ca.length;b++)void 0==d?d=a[b].dimension49+\"|\":d+=a[b].dimension49+\"|\",void 0==e?e=a[b].price.toString()+\"|\":e+=a[b].price.toString()+\"|\",void 0==h?h=\na[b].quantity+\"|\":h+=a[b].quantity+\"|\",a[b].dimension42.toLowerCase().includes(\"digital\")?void 0==c?c=a[b].condition+\"|\":c+=\"T|\":void 0==c?c=\"F|\":c+=\"F|\",void 0==f?f=a[b].dimension47+\"|\":f+=a[b].dimension47+\"|\",void 0==g?g=a[b].category+\"|\":g+=a[b].category+\"|\";e=e.replace(\/\\|$\/,\"\");d=d.replace(\/\\|$\/,\"\");h=h.toString();c=c.replace(\/\\|$\/,\"\");f=f.replace(\/\\|$\/,\"\");g=g.replace(\/\\|$\/,\"\");e=e.replace(\/undefined\\|\/,\"\");d=d.replace(\/undefined\\|?\/,\"\");h=h.toString().replace(\/undefined\\|?\/,\"\");c=c.replace(\/undefined\\|?\/,\n\"\");f=f.replace(\/undefined\\|?\/,\"\");g=g.replace(\/undefined\\|?\/,\"\");a=",["escape",["macro",20],8,16],";\"xs\"==a?googletag.defineSlot(\"\/110589567\/GSmweb\/PUAS\",[[1,1]],\"div-gpt-ad-2482376-1\").addService(googletag.pubads()):googletag.defineSlot(\"\/110589567\/GSweb\/PUAS\",[[1,1]],\"div-gpt-ad-9896332-1\").addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.pubads().setTargeting(\"gs_login\",[k]).setTargeting(\"sku\",[d]).setTargeting(\"ordvalue\",[",["escape",["macro",116],8,16],"]).setTargeting(\"paymethod\",\n[",["escape",["macro",178],8,16],"]).setTargeting(\"prodprice\",[e]).setTargeting(\"qty\",[h]).setTargeting(\"gs_pur\",[l]).setTargeting(\"digitalsku\",[c]).setTargeting(\"platform\",[f]).setTargeting(\"platformproduct\",[g]);googletag.pubads().collapseEmptyDivs();googletag.pubads().setCentering(!0);googletag.enableServices()});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":263
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.bvCallback=function(h){for(var f=[],d=",["escape",["macro",2],8,16],".ecommerce.purchase.products,g=document.querySelectorAll(\".confirm-details .card .item-attributes\"),a,c=0;c\u003Cd.length;c++){if(g[c].querySelector(\".preorder\")){a=g[c].querySelector(\".preorder\").innerText;a=a.split(\": \")[1];a=a.replace(\/\\\/\/gi,\"-\");var b=a=new Date(a);a=\"\"+(b.getMonth()+1);var e=\"\"+b.getDate();b=b.getFullYear()}else b=a=new Date,a=\"\"+(b.getMonth()+1),e=\"\"+b.getDate(),b=b.getFullYear();2\u003Ea.length\u0026\u0026(a=\"0\"+a);2\u003Ee.length\u0026\u0026\n(e=\"0\"+e);a=[b,a,e].join(\"-\");f.push({productID:d[c].id,name:d[c].name,category:d[c].category,price:d[c].price,quantity:d[c].quantity,shippingDate:a})}h.pixel.trackTransaction({currency:\"USD\",orderId:",["escape",["macro",9],8,16],",total:",["escape",["macro",116],8,16],",tax:",["escape",["macro",182],8,16],",shipping:",["escape",["macro",183],8,16],",items:f})};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":264
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){\"undefined\"===typeof a.MovableInkTrack\u0026\u0026(a.MovableInkTrack=b,c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.type=\"text\/javascript\",c.async=!0,c.src=\"\/\/\"+g+\"\/p\/js\/1.js\",a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)},d.parentNode.insertBefore(c,d))})(window,document,\"script\",\"cxkacncr.micpn.com\",\"mitr\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":268
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar purchaseInfo={revenue:",["escape",["macro",116],8,16],",identifier:",["escape",["macro",184],8,16],"},promoInfo={code:",["escape",["macro",23],8,16],",description:",["escape",["macro",23],8,16],"},productObjects=dataLayer.filter(function(a){if(\"Order Placed\"==a.event)return!0})[0].transaction.item.reduce(function(a,b){a.push({sku:b.productInfo.sku,name:b.productInfo.name,price:b.price.sellingPrice,quantity:b.quantity});return a},[]);\n(function(a,b,f,g,c,d,e){\"undefined\"===typeof a.MovableInkTrack\u0026\u0026(a.MovableInkTrack=c,d=b.createElement(f),e=b.getElementsByTagName(f)[0],d.type=\"text\/javascript\",d.async=!0,d.src=\"\/\/\"+g+\"\/p\/js\/1.js\",a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)},e.parentNode.insertBefore(d,e))})(window,document,\"script\",\"cxkacncr.micpn.com\",\"mitr\");\nfor(var i=0;i\u003CproductObjects.length;i++){var product=productObjects[i];product.sku\u0026\u0026mitr(\"addProduct\",{sku:product.sku,name:product.name,price:product.price,quantity:product.quantity,other:\"\"})}promoInfo\u0026\u0026promoInfo.code\u0026\u0026mitr(\"addPromo\",{code:promoInfo.code,description:promoInfo.description});mitr(\"send\",\"conversion\",{revenue:purchaseInfo.revenue,identifier:purchaseInfo.identifier});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar canonical=Array.from(document.getElementsByTagName(\"link\")).filter(function(a){if(\"canonical\"==a.rel)return!0})[0];canonical.href=\"https:\/\/www.gamestop.com\/video-games\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":271
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=1;a.src=\"https:\/\/cdn.quantummetric.com\/qscripts\/quantum-gamestop.js\";var b=document.getElementsByTagName(\"script\")[0];!window.QuantumMetricAPI\u0026\u0026b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Etry{if(\"undefined\"!==typeof dataLayer){var index=dataLayer.findIndex(function(a){return\"Page Loaded\"==a.event}),bannerCache=[];if(-1!==index\u0026\u0026\"undefined\"!==typeof dataLayer\u0026\u0026\"undefined\"!==typeof dataLayer[index]\u0026\u0026\"undefined\"!==typeof dataLayer[index].analyticsCache\u0026\u0026\"undefined\"!==typeof dataLayer[index].analyticsCache.banner\u0026\u0026(bannerCache=dataLayer[index].analyticsCache.banner,\"undefined\"!==typeof bannerCache)){var bannerLength=bannerCache.length;if(0\u003CbannerLength){var splitTag=1;20\u003E=bannerLength?\nsplitTag=2:20\u003CbannerLength\u0026\u002630\u003E=bannerLength?splitTag=3:30\u003CbannerLength\u0026\u002640\u003E=bannerLength?splitTag=4:40\u003CbannerLength\u0026\u002650\u003E=bannerLength?splitTag=5:50\u003CbannerLength\u0026\u002660\u003E=bannerLength?splitTag=6:60\u003CbannerLength\u0026\u002670\u003E=bannerLength?splitTag=7:70\u003CbannerLength\u0026\u002680\u003E=bannerLength?splitTag=8:80\u003CbannerLength\u0026\u002690\u003E=bannerLength?splitTag=9:90\u003CbannerLength\u0026\u0026100\u003E=bannerLength\u0026\u0026(splitTag=10);var rest=bannerCache.length%splitTag,restUsed=rest;partLength=Math.floor(bannerCache.length\/splitTag);for(var result=[],i=0;i\u003C\nbannerCache.length;i+=partLength){var end=partLength+i,add=!1;0!==rest\u0026\u0026restUsed\u0026\u0026(end++,restUsed--,add=!0);result.push(bannerCache.slice(i,end));add\u0026\u0026i++}bannerCache=result;for(i=0;i\u003CsplitTag;i++)dataLayer.push({ecommerce:{promoView:{promotions:bannerCache[i]}},event:\"Banner Impression\"})}}}}catch(a){console.log(a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":399
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=",["escape",["macro",9],8,16],",b=",["escape",["macro",116],8,16],";(new Image).src=\"https:\/\/pubads.g.doubleclick.net\/activity;xsp\\x3d4708011;qty\\x3d1;cost\\x3d\"+b+\";ord\\x3d\"+a+\"?\"})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":462
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Etry{var clickedURL=",["escape",["macro",75],8,16],";if(-1\u003CclickedURL.indexOf(\"\/deals\/gamestop-sale\"))var campaign_name=\"Black Friday Countdown Sale\",creative_name=\"Hero banner\";else campaign_name=",["escape",["macro",124],8,16],",campaign_name=\"undefined\"!==typeof campaign_name?campaign_name.trim():\"\",creative_name=\"SHOP BLACK FRIDAY CATEGORIES\";\"undefined\"!==typeof campaign_name\u0026\u0026dataLayer.push({event:\"Banner click\",ecommerce:{promoClick:{promotions:[{id:\"\",name:campaign_name,creative:creative_name,position:\"\"}]}}})}catch(a){console.log(a)};\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":467
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv id=\"marketing-1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"marketing-1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"marketing-2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"marketing-2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"marketing-3\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"marketing-3\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"homepage-takeover\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"homepage-takeover\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":159
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv id=\"console-landing-1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"storefront-1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"console-landing-2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"storefront-2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"console-landing-3\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"storefront-3\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":161
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv id=\"SearchAd_1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"SearchAd_1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"SearchAd_2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"SearchAd_2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\n\n\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cdiv id=\"",["escape",["macro",186],4],"\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(",["escape",["macro",186],8,16],")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":262
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv id=\"div-gpt-ad-5291622-1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"div-gpt-ad-5291622-1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv id=\"Storelocate_1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"Storelocate_1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"Storelocate_2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"Storelocate_2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\n\n\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":201
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv id=\"OrderConfirm_1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"OrderConfirm_1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"OrderConfirm_2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"OrderConfirm_2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\n\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":182
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cdiv id=\"SearchAd_1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"SearchAd_1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"SearchAd_2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"SearchAd_2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"SearchAd_1\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"SearchAd_1\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n\n\n\n\u003Cdiv id=\"SearchAd_2\"\u003E\n  \u003Cscript\u003Egoogletag.cmd.push(function(){googletag.display(\"SearchAd_2\")});\u003C\/script\u003E\n\u003C\/div\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":178
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCriteoCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":251
    },{
      "function":"__html",
      "priority":9223372036854775807,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(C){function x(k){if(v[k])return v[k].exports;var c=v[k]={i:k,l:!1,exports:{}};return C[k].call(c.exports,c,c.exports,x),c.l=!0,c.exports}var v={};x.m=C;x.c=v;x.d=function(k,c,f){x.o(k,c)||Object.defineProperty(k,c,{enumerable:!0,get:f})};x.r=function(k){\"undefined\"!=typeof Symbol\u0026\u0026Symbol.toStringTag\u0026\u0026Object.defineProperty(k,Symbol.toStringTag,{value:\"Module\"});Object.defineProperty(k,\"__esModule\",{value:!0})};x.t=function(k,c){if((1\u0026c\u0026\u0026(k=x(k)),8\u0026c)||4\u0026c\u0026\u0026\"object\"==typeof k\u0026\u0026k\u0026\u0026k.__esModule)return k;\nvar f=Object.create(null);if(x.r(f),Object.defineProperty(f,\"default\",{enumerable:!0,value:k}),2\u0026c\u0026\u0026\"string\"!=typeof k)for(var g in k)x.d(f,g,function(m){return k[m]}.bind(null,g));return f};x.n=function(k){var c=k\u0026\u0026k.__esModule?function(){return k[\"default\"]}:function(){return k};return x.d(c,\"a\",c),c};x.o=function(k,c){return Object.prototype.hasOwnProperty.call(k,c)};x.p=\"\";x(x.s=1)}([function(C,x){x=function(){};x.prototype.argumentsToArray=function(v){return 1===v.length?[v[0]]:Array.apply(null,\nv)};x.prototype.dataLayerGet=function(v,k,c){void 0===c\u0026\u0026(c=null);var f=c;return void 0!==(k=k||{})[\"static\"]?f=k[\"static\"]:k.$id\u0026\u0026(f=this.deepGet(v,k.$id)),null===f\u0026\u0026(f=c),f};x.prototype.deepGet=function(v,k){return k=k.replace(\/^\\\/properties\\\/\/,\"\").replace(\/\\\/items$\/,\"\").replace(\"\/items\/\",\"\/properties\/0\/\"),this.deepGetArray(v,k.split(\"\/properties\/\"))};x.prototype.deepGetArray=function(v,k){var c=v;0\u003Ck.length\u0026\u0026(c=k[0],k=k.slice(1),v=v[c],c=void 0===v?null:this.deepGetArray(v,k));return c};x.prototype.deepSetArray=\nfunction(v,k,c){return this.deepSetArrayMutable(this.copy(v),k,c)};x.prototype.copy=function(v){return JSON.parse(JSON.stringify(v))};x.prototype.assign=function(){if(Object.assign)return Object.assign.apply(this,arguments);var v=this.argumentsToArray(arguments),k=v.shift();return k\u0026\u0026v.forEach(function(c){for(var f in c)c.hasOwnProperty(f)\u0026\u0026(k[f]=c[f])}),k};x.prototype.deepSetArrayMutable=function(v,k,c){if(1\u003Ck.length){var f=k[0];k=k.slice(1);v[f]=v[f]||{};v[f]=this.deepSetArray(v[f],k,c)}else 1===\nk.length\u0026\u0026(v[k[0]]=c);return v};C.exports=new x},function(C,x,v){C=v(2);window._astp=new C(window);C=void 0;!C},function(C,x,v){var k=v(0),c=v(3),f=v(4),g=v(6),m=v(7),p=v(9),z=v(10);x=function(r){this.window=r;this.expectedDestinationMappingSchemaVersion=\"2.0.0\";this.defaultConfig={dataLayerName:\"dataLayer\",astpTriggerNodeId:\"ASTP_HEADER\",logLevel:\"error\",eventPrefix:\"ASTP\",debug:!1,validationSchema:{},proFeatures:!1}};k.assign(x.prototype,{init:function(r){var A=r.logLevel||this.defaultConfig.logLevel;\nthis.logger=new c(window,A);this.config=k.assign({},this.defaultConfig,r||{});this.logger.debug(\"core.init config:\",this.config);r=this.config.astpTriggerNodeId;this.debug=this.config.debug;(A=this.config.destinationMapping||null)\u0026\u0026this.setDestinationMapping(A);this._initAstpTriggerNode(r);this.validation=new f(this);this.lifecycle=new g(this);this.dataLayer=new m(this);this.lib={adobeAnalytics:new p(this),googleAnalytics:new z(this)}},setDestinationMapping:function(r){this.logger.debug(\"astp.setDestinationMapping\");\nthis.logger.debug(r);this._checkMappingSchemaVersion(r);this.destinationMapping=r},isDebug:function(){return this.debug},getDestinationMapping:function(r){if(r){var A=this.destinationMapping[r];return A||this.logger.warn(\"getDestinationMapping event not found:\",r),A}return this.destinationMapping},trigger:function(r){var A=window.document.createEvent(\"CustomEvent\"),E=this.config.eventPrefix+\":\"+r.event;delete k.assign({},r).event;A.initCustomEvent(E,!0,!0,r);window.document.getElementById(this.config.astpTriggerNodeId).dispatchEvent(A)},\nactivateValidations:function(){return this.validation.active=!0,!0},_initAstpTriggerNode:function(r){if(!document.getElementById(r)){this.logger.debug(\"Creating ASTP trigger node: \",r);var A=null,E=null,D=document.getElementsByTagName(\"head\");0\u003CD.length\u0026\u0026(A=D[0],(E=document.createElement(\"meta\")).setAttribute(\"name\",\"ASTP Trigger Node\"));E||(A=document.body?document.body:document.documentElement,E=document.createElement(\"script\"));E.setAttribute(\"id\",r);A.appendChild(E)}},_checkMappingSchemaVersion:function(r){var A=\nthis.expectedDestinationMappingSchemaVersion;if(r=r.schema_version){var E=\/(.*\\..*)\\.\/;if(E.test(A)\u0026\u0026E.test(r)){var D=E.exec(A);D=D[1];E.exec(r)[1]!==D\u0026\u0026this.logger.info(\"Mapping schema version mismatch. Expected version: %s, \\t Received version: %s\",A,r)}else this.logger.error(\"Unrecognized versions. Expected version: %s,\\t Received version: %s\",A,r)}else this.logger.error(\"No schema_version found in mapping. Expected version: %s\",A)}});C.exports=x},function(C,x,v){var k=v(0);x=function(c,f){this.window=\nc;this.levelOrder={debug:1,info:100,warn:150,error:200};this.levels={log:\"log\",debug:\"debug\",info:\"info\",warn:\"warn\",error:\"error\"};this.logLevel=f||this.levels.error};k.assign(x.prototype,{log:function(){var c=k.argumentsToArray(arguments);this._sendLog(this.levels.log,c)},debug:function(){var c=k.argumentsToArray(arguments);this._sendLog(this.levels.debug,c)},info:function(){var c=k.argumentsToArray(arguments);this._sendLog(this.levels.info,c)},warn:function(){var c=k.argumentsToArray(arguments);\nthis._sendLog(this.levels.warn,c)},error:function(){var c=k.argumentsToArray(arguments);this._sendLog(this.levels.error,c)},_sendLog:function(c,f){if(this.window.console\u0026\u00260\u003C=this._compareLogLevel(c,this.logLevel)){var g=this.window.console.log;switch(c){case this.levels.error:g=this.window.console.error;break;case this.levels.info:g=this.window.console.info;break;case this.levels.warn:g=this.window.console.warn;break;case this.levels.debug:g=this.window.console.debug}(g||this.window.console.log).apply(this.window.console,\nf)}},_compareLogLevel:function(c,f){return(this.levelOrder[c]||1E3)-(this.levelOrder[f]||1E3)}});C.exports=x},function(C,x,v){var k=v(5);x=function(c){this.active=!!c.debug;this.schemas=c.config.validationSchema||{};this.logger=c.logger};v(0).assign(x.prototype,{active:!1,init:function(){},validateEvent:function(c){var f=this,g=!0,m=[],p={};if(this.active){if(c.event){if(\"object\"==typeof this.schemas[c.event]){var z=k.validateMultiple(c,this.schemas[c.event]);(g=z.valid)?this.logger.debug(\"EVENT PAYLOAD VALIDATION PASSED:\",\nc):(z.errors.forEach(function(r){f.logger.error(\"EVENT PAYLOAD VALIDATION FAILED:\",r.message,r,c)}),z.missing.forEach(function(r){f.logger.error(\"EVENT PAYLOAD VALIDATION FAILED:\",r,c)}),m=z.errors.concat(z.missing))}}else g=!1,m.push(\"Missing event name at event.event\"),this.logger.error(\"EVENT PAYLOAD VALIDATION FAILED: Missing event name at event.event\");p.valid=g;p.errors=m}return p}});C.exports=x},function(C,x,v){var k,c;v=[];void 0===(c=\"function\"==typeof(k=function(){function f(a){return encodeURI(a).replace(\/%25[0-9][0-9]\/g,\nfunction(b){return\"%\"+b.substring(3)})}function g(a){var b=\"\";O[a.charAt(0)]\u0026\u0026(b=a.charAt(0),a=a.substring(1));var d=\"\",e=\"\",h=!0,l=!1,n=!1;\"+\"===b?h=!1:\".\"===b?(e=\".\",d=\".\"):\"\/\"===b?(e=\"\/\",d=\"\/\"):\"#\"===b?(e=\"#\",h=!1):\";\"===b?(e=\";\",d=\";\",l=!0,n=!0):\"?\"===b?(e=\"?\",d=\"\\x26\",l=!0):\"\\x26\"===b\u0026\u0026(e=\"\\x26\",d=\"\\x26\",l=!0);b=[];a=a.split(\",\");for(var q=[],u=0;u\u003Ca.length;u++){var t=a[u],B=null;-1!==t.indexOf(\":\")\u0026\u0026(B=t.split(\":\"),t=B[0],B=parseInt(B[1],10));for(var H={};K[t.charAt(t.length-1)];)H[t.charAt(t.length-\n1)]=!0,t=t.substring(0,t.length-1);B={truncate:B,name:t,suffices:H};q.push(B);b.push(t)}a=function(I){for(var F=\"\",Q=0,N=0;N\u003Cq.length;N++){var M=q[N],G=I(M.name);if(null===G||void 0===G||Array.isArray(G)\u0026\u00260===G.length||\"object\"==typeof G\u0026\u00260===Object.keys(G).length)Q++;else if(F+=N===Q?e:d||\",\",Array.isArray(G)){l\u0026\u0026(F+=M.name+\"\\x3d\");for(var R=0;R\u003CG.length;R++)0\u003CR\u0026\u0026(F+=M.suffices[\"*\"]\u0026\u0026d||\",\",M.suffices[\"*\"]\u0026\u0026l\u0026\u0026(F+=M.name+\"\\x3d\")),F+=h?encodeURIComponent(G[R]).replace(\/!\/g,\"%21\"):f(G[R])}else if(\"object\"==\ntypeof G){l\u0026\u0026!M.suffices[\"*\"]\u0026\u0026(F+=M.name+\"\\x3d\");R=!0;for(var W in G)R||(F+=M.suffices[\"*\"]\u0026\u0026d||\",\"),R=!1,F+=h?encodeURIComponent(W).replace(\/!\/g,\"%21\"):f(W),F+=M.suffices[\"*\"]?\"\\x3d\":\",\",F+=h?encodeURIComponent(G[W]).replace(\/!\/g,\"%21\"):f(G[W])}else l\u0026\u0026(F+=M.name,n\u0026\u0026\"\"===G||(F+=\"\\x3d\")),null!=M.truncate\u0026\u0026(G=G.substring(0,M.truncate)),F+=h?encodeURIComponent(G).replace(\/!\/g,\"%21\"):f(G)}return F};return a.varNames=b,{prefix:e,substitution:a}}function m(a){if(!(this instanceof m))return new m(a);for(var b=\na.split(\"{\"),d=[b.shift()],e=[],h=[],l=[];0\u003Cb.length;){var n=b.shift(),q=n.split(\"}\")[0];n=n.substring(q.length+1);q=g(q);h.push(q.substitution);e.push(q.prefix);d.push(n);l=l.concat(q.substitution.varNames)}this.fill=function(u){for(var t=d[0],B=0;B\u003Ch.length;B++){var H=h[B];t+=H(u);t+=d[B+1]}return t};this.varNames=l;this.template=a}function p(a,b){if(a===b)return!0;if(a\u0026\u0026b\u0026\u0026\"object\"==typeof a\u0026\u0026\"object\"==typeof b){if(Array.isArray(a)!==Array.isArray(b))return!1;if(Array.isArray(a)){if(a.length!==\nb.length)return!1;for(var d=0;d\u003Ca.length;d++)if(!p(a[d],b[d]))return!1}else{for(d in a)if(void 0===b[d]\u0026\u0026void 0!==a[d])return!1;for(d in b)if(void 0===a[d]\u0026\u0026void 0!==b[d])return!1;for(d in a)if(!p(a[d],b[d]))return!1}return!0}return!1}function z(a){return(a=String(a).replace(\/^\\s+|\\s+$\/g,\"\").match(\/^([^:\\\/?#]+:)?(\\\/\\\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\\\/?#]*)(?::(\\d*))?))?([^?#]*)(\\?[^#]*)?(#[\\s\\S]*)?\/))?{href:a[0]||\"\",protocol:a[1]||\"\",authority:a[2]||\"\",host:a[3]||\"\",hostname:a[4]||\"\",port:a[5]||\"\",pathname:a[6]||\n\"\",search:a[7]||\"\",hash:a[8]||\"\"}:null}function r(a,b){return b=z(b||\"\"),a=z(a||\"\"),b\u0026\u0026a?(b.protocol||a.protocol)+(b.protocol||b.authority?b.authority:a.authority)+function(d){var e=[];return d.replace(\/^(\\.\\.?(\\\/|$))+\/,\"\").replace(\/\\\/(\\.(\\\/|$))+\/g,\"\/\").replace(\/\\\/\\.\\.$\/,\"\/..\/\").replace(\/\\\/?[^\\\/]*\/g,function(h){\"\/..\"===h?e.pop():e.push(h)}),e.join(\"\").replace(\/^\\\/\/,\"\/\"===d.charAt(0)?\"\/\":\"\")}(b.protocol||b.authority||\"\/\"===b.pathname.charAt(0)?b.pathname:b.pathname?(a.authority\u0026\u0026!a.pathname?\"\/\":\"\")+\na.pathname.slice(0,a.pathname.lastIndexOf(\"\/\")+1)+b.pathname:a.pathname)+(b.protocol||b.authority||b.pathname?b.search:b.search||a.search)+b.hash:null}function A(a){return a.split(\"#\")[0]}function E(a,b){if(a\u0026\u0026\"object\"==typeof a)if(void 0===b?b=a.id:\"string\"==typeof a.id\u0026\u0026(b=r(b,a.id),a.id=b),Array.isArray(a))for(var d=0;d\u003Ca.length;d++)E(a[d],b);else for(d in\"string\"==typeof a.$ref\u0026\u0026(a.$ref=r(b,a.$ref)),a)\"enum\"!==d\u0026\u0026E(a[d],b)}function D(a){var b=J[a=a||\"en\"];return function(d){var e=b[d.code]||U[d.code];\nif(\"string\"!=typeof e)return\"Unknown error code \"+d.code+\": \"+JSON.stringify(d.messageParams);var h=d.params;return e.replace(\/\\{([^{}]*)\\}\/g,function(l,n){n=h[n];return\"string\"==typeof n||\"number\"==typeof n?n:l})}}function L(a,b,d,e,h){if(Error.call(this),void 0===a)throw Error(\"No error code supplied: \"+e);this.message=\"\";this.params=b;this.code=a;this.dataPath=d||\"\";this.schemaPath=e||\"\";this.subErrors=h||null;a=Error(this.message);if(this.stack=a.stack||a.stacktrace,!this.stack)try{throw a;}catch(l){this.stack=\nl.stack||l.stacktrace}}Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable(\"toString\"),d=\"toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor\".split(\" \"),e=d.length;return function(h){if(\"object\"!=typeof h\u0026\u0026\"function\"!=typeof h||null===h)throw new TypeError(\"Object.keys called on non-object\");var l=[],n;for(n in h)a.call(h,n)\u0026\u0026l.push(n);if(b)for(n=0;n\u003Ce;n++)a.call(h,d[n])\u0026\u0026l.push(d[n]);return l}}());\nObject.create||(Object.create=function(){function a(){}return function(b){if(1!==arguments.length)throw Error(\"Object.create implementation only accepts one parameter.\");return a.prototype=b,new a}}());Array.isArray||(Array.isArray=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)});Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),d=b.length\u003E\u003E\u003E0;if(0===d)return-1;var e=0;if(1\u003Carguments.length\u0026\u0026((e=Number(arguments[1]))!=\ne?e=0:0!==e\u0026\u0026e!==1\/0\u0026\u0026e!==-1\/0\u0026\u0026(e=(0\u003Ce||-1)*Math.floor(Math.abs(e)))),e\u003E=d)return-1;for(e=0\u003C=e?e:Math.max(d-Math.abs(e),0);e\u003Cd;e++)if(e in b\u0026\u0026b[e]===a)return e;return-1});Object.isFrozen||(Object.isFrozen=function(a){for(var b=\"tv4_test_frozen_key\";a.hasOwnProperty(b);)b+=Math.random();try{return a[b]=!0,delete a[b],!1}catch(d){return!0}});var O={\"+\":!0,\"#\":!0,\".\":!0,\"\/\":!0,\";\":!0,\"?\":!0,\"\\x26\":!0},K={\"*\":!0};m.prototype={toString:function(){return this.template},fillFromObject:function(a){return this.fill(function(b){return a[b]})}};\nvar w=function(a,b,d,e,h){if(this.missing=[],this.missingMap={},this.formatValidators=a?Object.create(a.formatValidators):{},this.schemas=a?Object.create(a.schemas):{},this.collectMultiple=b,this.errors=[],this.handleError=b?this.collectError:this.returnError,e\u0026\u0026(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey=\"tv4_validation_id\",this.validationErrorsKey=\"tv4_validation_errors_id\"),h\u0026\u0026(this.trackUnknownProperties=\n!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=d||D(\"en\"),\"string\"==typeof this.errorReporter)throw Error(\"debug\");if(this.definedKeywords={},a)for(var l in a.definedKeywords)this.definedKeywords[l]=a.definedKeywords[l].slice(0)};w.prototype.defineKeyword=function(a,b){this.definedKeywords[a]=this.definedKeywords[a]||[];this.definedKeywords[a].push(b)};w.prototype.createError=function(a,b,d,e,h,l,n){a=new L(a,b,d,e,h);return a.message=this.errorReporter(a,l,n),a};w.prototype.returnError=\nfunction(a){return a};w.prototype.collectError=function(a){return a\u0026\u0026this.errors.push(a),null};w.prototype.prefixErrors=function(a,b,d){for(;a\u003Cthis.errors.length;a++)this.errors[a]=this.errors[a].prefixWith(b,d);return this};w.prototype.banUnknownProperties=function(a,b){for(var d in this.unknownPropertyPaths){var e=this.createError(y.UNKNOWN_PROPERTY,{path:d},d,\"\",null,a,b);if(e=this.handleError(e))return e}return null};w.prototype.addFormat=function(a,b){if(\"object\"==typeof a){for(var d in a)this.addFormat(d,\na[d]);return this}this.formatValidators[a]=b};w.prototype.resolveRefs=function(a,b){if(void 0!==a.$ref){if((b=b||{})[a.$ref])return this.createError(y.CIRCULAR_REFERENCE,{urls:Object.keys(b).join(\", \")},\"\",\"\",null,void 0,a);b[a.$ref]=!0;a=this.getSchema(a.$ref,b)}return a};w.prototype.getSchema=function(a,b){var d;if(void 0!==this.schemas[a])return d=this.schemas[a],this.resolveRefs(d,b);var e=a,h=\"\";if(-1!==a.indexOf(\"#\")\u0026\u0026(h=a.substring(a.indexOf(\"#\")+1),e=a.substring(0,a.indexOf(\"#\"))),\"object\"==\ntypeof this.schemas[e]){d=this.schemas[e];a=decodeURIComponent(h);if(\"\"===a)return this.resolveRefs(d,b);if(\"\/\"!==a.charAt(0))return;a=a.split(\"\/\").slice(1);for(h=0;h\u003Ca.length;h++){var l=a[h].replace(\/~1\/g,\"\/\").replace(\/~0\/g,\"~\");if(void 0===d[l]){d=void 0;break}d=d[l]}if(void 0!==d)return this.resolveRefs(d,b)}void 0===this.missing[e]\u0026\u0026(this.missing.push(e),this.missing[e]=e,this.missingMap[e]=e)};w.prototype.searchSchemas=function(a,b){if(Array.isArray(a))for(var d=0;d\u003Ca.length;d++)this.searchSchemas(a[d],\nb);else if(a\u0026\u0026\"object\"==typeof a)for(d in\"string\"==typeof a.id\u0026\u0026function(h,l){if(l.substring(0,h.length)===h){var n=l.substring(h.length);if(0\u003Cl.length\u0026\u0026\"\/\"===l.charAt(h.length-1)||\"#\"===n.charAt(0)||\"?\"===n.charAt(0))return!0}return!1}(b,a.id)\u0026\u0026void 0===this.schemas[a.id]\u0026\u0026(this.schemas[a.id]=a),a)if(\"enum\"!==d)if(\"object\"==typeof a[d])this.searchSchemas(a[d],b);else if(\"$ref\"===d){var e=A(a[d]);e\u0026\u0026void 0===this.schemas[e]\u0026\u0026void 0===this.missingMap[e]\u0026\u0026(this.missingMap[e]=e)}};w.prototype.addSchema=\nfunction(a,b){if(\"string\"!=typeof a||void 0===b){if(\"object\"!=typeof a||\"string\"!=typeof a.id)return;a=(b=a).id}a===A(a)+\"#\"\u0026\u0026(a=A(a));this.schemas[a]=b;delete this.missingMap[a];E(b,a);this.searchSchemas(b,a)};w.prototype.getSchemaMap=function(){var a={},b;for(b in this.schemas)a[b]=this.schemas[b];return a};w.prototype.getSchemaUris=function(a){var b=[],d;for(d in this.schemas)a\u0026\u0026!a.test(d)||b.push(d);return b};w.prototype.getMissingUris=function(a){var b=[],d;for(d in this.missingMap)a\u0026\u0026!a.test(d)||\nb.push(d);return b};w.prototype.dropSchemas=function(){this.schemas={};this.reset()};w.prototype.reset=function(){this.missing=[];this.missingMap={};this.errors=[]};w.prototype.validateAll=function(a,b,d,e,h){var l;if(!(b=this.resolveRefs(b)))return null;if(b instanceof L)return this.errors.push(b),b;var n,q=this.errors.length,u=null,t=null;if(this.checkRecursive\u0026\u0026a\u0026\u0026\"object\"==typeof a){if(l=!this.scanned.length,a[this.validatedSchemasKey]){var B=a[this.validatedSchemasKey].indexOf(b);if(-1!==B)return this.errors=\nthis.errors.concat(a[this.validationErrorsKey][B]),null}if(Object.isFrozen(a)\u0026\u0026-1!==(n=this.scannedFrozen.indexOf(a))\u0026\u0026(B=this.scannedFrozenSchemas[n].indexOf(b),-1!==B))return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[n][B]),null;if(this.scanned.push(a),Object.isFrozen(a))-1===n\u0026\u0026(n=this.scannedFrozen.length,this.scannedFrozen.push(a),this.scannedFrozenSchemas.push([])),u=this.scannedFrozenSchemas[n].length,this.scannedFrozenSchemas[n][u]=b,this.scannedFrozenValidationErrors[n][u]=\n[];else{if(!a[this.validatedSchemasKey])try{Object.defineProperty(a,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(a,this.validationErrorsKey,{value:[],configurable:!0})}catch(H){a[this.validatedSchemasKey]=[],a[this.validationErrorsKey]=[]}t=a[this.validatedSchemasKey].length;a[this.validatedSchemasKey][t]=b;a[this.validationErrorsKey][t]=[]}}B=this.errors.length;b=this.validateBasic(a,b,h)||this.validateNumeric(a,b,h)||this.validateString(a,b,h)||this.validateArray(a,\nb,h)||this.validateObject(a,b,h)||this.validateCombinations(a,b,h)||this.validateHypermedia(a,b,h)||this.validateFormat(a,b,h)||this.validateDefinedKeywords(a,b,h)||null;if(l){for(;this.scanned.length;)l=this.scanned.pop(),delete l[this.validatedSchemasKey];this.scannedFrozen=[];this.scannedFrozenSchemas=[]}if(b||B!==this.errors.length)for(;d\u0026\u0026d.length||e\u0026\u0026e.length;)l=d\u0026\u0026d.length?\"\"+d.pop():null,h=e\u0026\u0026e.length?\"\"+e.pop():null,b\u0026\u0026(b=b.prefixWith(l,h)),this.prefixErrors(B,l,h);return null!==u?this.scannedFrozenValidationErrors[n][u]=\nthis.errors.slice(q):null!==t\u0026\u0026(a[this.validationErrorsKey][t]=this.errors.slice(q)),this.handleError(b)};w.prototype.validateFormat=function(a,b){if(\"string\"!=typeof b.format||!this.formatValidators[b.format])return null;var d=this.formatValidators[b.format].call(null,a,b);return\"string\"==typeof d||\"number\"==typeof d?this.createError(y.FORMAT_CUSTOM,{message:d},\"\",\"\/format\",null,a,b):d\u0026\u0026\"object\"==typeof d?this.createError(y.FORMAT_CUSTOM,{message:d.message||\"?\"},d.dataPath||\"\",d.schemaPath||\"\/format\",\nnull,a,b):null};w.prototype.validateDefinedKeywords=function(a,b,d){for(var e in this.definedKeywords)if(void 0!==b[e])for(var h=this.definedKeywords[e],l=0;l\u003Ch.length;l++){var n=h[l];n=n(a,b[e],b,d);if(\"string\"==typeof n||\"number\"==typeof n)return this.createError(y.KEYWORD_CUSTOM,{key:e,message:n},\"\",\"\",null,a,b).prefixWith(null,e);if(n\u0026\u0026\"object\"==typeof n){d=n.code;if(\"string\"==typeof d){if(!y[d])throw Error(\"Undefined error code (use defineError): \"+d);d=y[d]}else\"number\"!=typeof d\u0026\u0026(d=y.KEYWORD_CUSTOM);\nh=\"object\"==typeof n.message?n.message:{key:e,message:n.message||\"?\"};e=n.schemaPath||\"\/\"+e.replace(\/~\/g,\"~0\").replace(\/\\\/\/g,\"~1\");return this.createError(d,h,n.dataPath||null,e,null,a,b)}}return null};w.prototype.validateBasic=function(a,b,d){var e;return(e=this.validateType(a,b,d))?e.prefixWith(null,\"type\"):(e=this.validateEnum(a,b,d))?e.prefixWith(null,\"type\"):null};w.prototype.validateType=function(a,b){if(void 0===b.type)return null;var d=typeof a;null===a?d=\"null\":Array.isArray(a)\u0026\u0026(d=\"array\");\nvar e=b.type;Array.isArray(e)||(e=[e]);for(var h=0;h\u003Ce.length;h++){var l=e[h];if(l===d||\"integer\"===l\u0026\u0026\"number\"===d\u0026\u00260==a%1)return null}return this.createError(y.INVALID_TYPE,{type:d,expected:e.join(\"\/\")},\"\",\"\",null,a,b)};w.prototype.validateEnum=function(a,b){if(void 0===b[\"enum\"])return null;for(var d=0;d\u003Cb[\"enum\"].length;d++){var e=b[\"enum\"][d];if(p(a,e))return null}return this.createError(y.ENUM_MISMATCH,{value:\"undefined\"!=typeof JSON?JSON.stringify(a):a},\"\",\"\",null,a,b)};w.prototype.validateNumeric=\nfunction(a,b,d){return this.validateMultipleOf(a,b,d)||this.validateMinMax(a,b,d)||this.validateNaN(a,b,d)||null};var P=Math.pow(2,-51),V=1-P;w.prototype.validateMultipleOf=function(a,b){var d=b.multipleOf||b.divisibleBy;if(void 0===d)return null;if(\"number\"==typeof a){var e=a\/d%1;if(e\u003E=P\u0026\u0026e\u003CV)return this.createError(y.NUMBER_MULTIPLE_OF,{value:a,multipleOf:d},\"\",\"\",null,a,b)}return null};w.prototype.validateMinMax=function(a,b){if(\"number\"!=typeof a)return null;if(void 0!==b.minimum){if(a\u003Cb.minimum)return this.createError(y.NUMBER_MINIMUM,\n{value:a,minimum:b.minimum},\"\",\"\/minimum\",null,a,b);if(b.exclusiveMinimum\u0026\u0026a===b.minimum)return this.createError(y.NUMBER_MINIMUM_EXCLUSIVE,{value:a,minimum:b.minimum},\"\",\"\/exclusiveMinimum\",null,a,b)}if(void 0!==b.maximum){if(a\u003Eb.maximum)return this.createError(y.NUMBER_MAXIMUM,{value:a,maximum:b.maximum},\"\",\"\/maximum\",null,a,b);if(b.exclusiveMaximum\u0026\u0026a===b.maximum)return this.createError(y.NUMBER_MAXIMUM_EXCLUSIVE,{value:a,maximum:b.maximum},\"\",\"\/exclusiveMaximum\",null,a,b)}return null};w.prototype.validateNaN=\nfunction(a,b){return\"number\"!=typeof a?null:!0===isNaN(a)||a===1\/0||a===-1\/0?this.createError(y.NUMBER_NOT_A_NUMBER,{value:a},\"\",\"\/type\",null,a,b):null};w.prototype.validateString=function(a,b,d){return this.validateStringLength(a,b,d)||this.validateStringPattern(a,b,d)||null};w.prototype.validateStringLength=function(a,b){return\"string\"!=typeof a?null:void 0!==b.minLength\u0026\u0026a.length\u003Cb.minLength?this.createError(y.STRING_LENGTH_SHORT,{length:a.length,minimum:b.minLength},\"\",\"\/minLength\",null,a,b):\nvoid 0!==b.maxLength\u0026\u0026a.length\u003Eb.maxLength?this.createError(y.STRING_LENGTH_LONG,{length:a.length,maximum:b.maxLength},\"\",\"\/maxLength\",null,a,b):null};w.prototype.validateStringPattern=function(a,b){if(\"string\"!=typeof a||\"string\"!=typeof b.pattern\u0026\u0026!(b.pattern instanceof RegExp))return null;if(b.pattern instanceof RegExp)var d=b.pattern;else{var e=\"\",h=b.pattern.match(\/^\\\/(.+)\\\/([img]*)$\/);h?(d=h[1],e=h[2]):d=b.pattern;d=new RegExp(d,e)}return d.test(a)?null:this.createError(y.STRING_PATTERN,{pattern:b.pattern},\n\"\",\"\/pattern\",null,a,b)};w.prototype.validateArray=function(a,b,d){return Array.isArray(a)\u0026\u0026(this.validateArrayLength(a,b,d)||this.validateArrayUniqueItems(a,b,d)||this.validateArrayItems(a,b,d))||null};w.prototype.validateArrayLength=function(a,b){var d;return void 0!==b.minItems\u0026\u0026a.length\u003Cb.minItems\u0026\u0026(d=this.createError(y.ARRAY_LENGTH_SHORT,{length:a.length,minimum:b.minItems},\"\",\"\/minItems\",null,a,b),this.handleError(d))?d:void 0!==b.maxItems\u0026\u0026a.length\u003Eb.maxItems\u0026\u0026(d=this.createError(y.ARRAY_LENGTH_LONG,\n{length:a.length,maximum:b.maxItems},\"\",\"\/maxItems\",null,a,b),this.handleError(d))?d:null};w.prototype.validateArrayUniqueItems=function(a,b){if(b.uniqueItems)for(var d=0;d\u003Ca.length;d++)for(var e=d+1;e\u003Ca.length;e++)if(p(a[d],a[e])){var h=this.createError(y.ARRAY_UNIQUE,{match1:d,match2:e},\"\",\"\/uniqueItems\",null,a,b);if(this.handleError(h))return h}return null};w.prototype.validateArrayItems=function(a,b,d){if(void 0===b.items)return null;var e,h;if(Array.isArray(b.items))for(h=0;h\u003Ca.length;h++)if(h\u003C\nb.items.length){if(e=this.validateAll(a[h],b.items[h],[h],[\"items\",h],d+\"\/\"+h))return e}else{if(void 0!==b.additionalItems)if(\"boolean\"==typeof b.additionalItems){if(!b.additionalItems\u0026\u0026(e=this.createError(y.ARRAY_ADDITIONAL_ITEMS,{},\"\/\"+h,\"\/additionalItems\",null,a,b),this.handleError(e)))return e}else if(e=this.validateAll(a[h],b.additionalItems,[h],[\"additionalItems\"],d+\"\/\"+h))return e}else for(h=0;h\u003Ca.length;h++)if(e=this.validateAll(a[h],b.items,[h],[\"items\"],d+\"\/\"+h))return e;return null};w.prototype.validateObject=\nfunction(a,b,d){return\"object\"!=typeof a||null===a||Array.isArray(a)?null:this.validateObjectMinMaxProperties(a,b,d)||this.validateObjectRequiredProperties(a,b,d)||this.validateObjectProperties(a,b,d)||this.validateObjectDependencies(a,b,d)||null};w.prototype.validateObjectMinMaxProperties=function(a,b){var d,e=Object.keys(a);return void 0!==b.minProperties\u0026\u0026e.length\u003Cb.minProperties\u0026\u0026(d=this.createError(y.OBJECT_PROPERTIES_MINIMUM,{propertyCount:e.length,minimum:b.minProperties},\"\",\"\/minProperties\",\nnull,a,b),this.handleError(d))?d:void 0!==b.maxProperties\u0026\u0026e.length\u003Eb.maxProperties\u0026\u0026(d=this.createError(y.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:e.length,maximum:b.maxProperties},\"\",\"\/maxProperties\",null,a,b),this.handleError(d))?d:null};w.prototype.validateObjectRequiredProperties=function(a,b){if(void 0!==b.required)for(var d=0;d\u003Cb.required.length;d++){var e=b.required[d];if(void 0===a[e]\u0026\u0026(e=this.createError(y.OBJECT_REQUIRED,{key:e},\"\",\"\/required\/\"+d,null,a,b),this.handleError(e)))return e}return null};\nw.prototype.validateObjectProperties=function(a,b,d){var e,h;for(h in a){var l=d+\"\/\"+h.replace(\/~\/g,\"~0\").replace(\/\\\/\/g,\"~1\"),n=!1;if(void 0!==b.properties\u0026\u0026void 0!==b.properties[h]\u0026\u0026(n=!0,e=this.validateAll(a[h],b.properties[h],[h],[\"properties\",h],l)))return e;if(void 0!==b.patternProperties)for(var q in b.patternProperties){var u=new RegExp(q);if(u.test(h)\u0026\u0026(n=!0,e=this.validateAll(a[h],b.patternProperties[q],[h],[\"patternProperties\",q],l)))return e}if(n)this.trackUnknownProperties\u0026\u0026(this.knownPropertyPaths[l]=\n!0,delete this.unknownPropertyPaths[l]);else if(void 0!==b.additionalProperties)if(this.trackUnknownProperties\u0026\u0026(this.knownPropertyPaths[l]=!0,delete this.unknownPropertyPaths[l]),\"boolean\"==typeof b.additionalProperties){if(!b.additionalProperties\u0026\u0026(e=this.createError(y.OBJECT_ADDITIONAL_PROPERTIES,{key:h},\"\",\"\/additionalProperties\",null,a,b).prefixWith(h,null),this.handleError(e)))return e}else{if(e=this.validateAll(a[h],b.additionalProperties,[h],[\"additionalProperties\"],l))return e}else this.trackUnknownProperties\u0026\u0026\n!this.knownPropertyPaths[l]\u0026\u0026(this.unknownPropertyPaths[l]=!0)}return null};w.prototype.validateObjectDependencies=function(a,b,d){var e;if(void 0!==b.dependencies)for(var h in b.dependencies)if(void 0!==a[h]){var l=b.dependencies[h];if(\"string\"==typeof l){if(void 0===a[l]\u0026\u0026(e=this.createError(y.OBJECT_DEPENDENCY_KEY,{key:h,missing:l},\"\",\"\",null,a,b).prefixWith(null,h).prefixWith(null,\"dependencies\"),this.handleError(e)))return e}else if(Array.isArray(l))for(var n=0;n\u003Cl.length;n++){var q=l[n];if(void 0===\na[q]\u0026\u0026(e=this.createError(y.OBJECT_DEPENDENCY_KEY,{key:h,missing:q},\"\",\"\/\"+n,null,a,b).prefixWith(null,h).prefixWith(null,\"dependencies\"),this.handleError(e)))return e}else if(e=this.validateAll(a,l,[],[\"dependencies\",h],d))return e}return null};w.prototype.validateCombinations=function(a,b,d){return this.validateAllOf(a,b,d)||this.validateAnyOf(a,b,d)||this.validateOneOf(a,b,d)||this.validateNot(a,b,d)||null};w.prototype.validateAllOf=function(a,b,d){if(void 0===b.allOf)return null;for(var e,h=0;h\u003C\nb.allOf.length;h++)if(e=b.allOf[h],e=this.validateAll(a,e,[],[\"allOf\",h],d))return e;return null};w.prototype.validateAnyOf=function(a,b,d){if(void 0===b.anyOf)return null;var e,h,l=[],n=this.errors.length;this.trackUnknownProperties\u0026\u0026(e=this.unknownPropertyPaths,h=this.knownPropertyPaths);for(var q=!0,u=0;u\u003Cb.anyOf.length;u++){this.trackUnknownProperties\u0026\u0026(this.unknownPropertyPaths={},this.knownPropertyPaths={});var t=b.anyOf[u],B=this.errors.length;t=this.validateAll(a,t,[],[\"anyOf\",u],d);if(null===\nt\u0026\u0026B===this.errors.length){if(this.errors=this.errors.slice(0,n),this.trackUnknownProperties){for(var H in this.knownPropertyPaths)h[H]=!0,delete e[H];for(var I in this.unknownPropertyPaths)h[I]||(e[I]=!0);q=!1;continue}return null}t\u0026\u0026l.push(t.prefixWith(null,\"\"+u).prefixWith(null,\"anyOf\"))}return this.trackUnknownProperties\u0026\u0026(this.unknownPropertyPaths=e,this.knownPropertyPaths=h),q?(l=l.concat(this.errors.slice(n)),this.errors=this.errors.slice(0,n),this.createError(y.ANY_OF_MISSING,{},\"\",\"\/anyOf\",\nl,a,b)):void 0};w.prototype.validateOneOf=function(a,b,d){if(void 0===b.oneOf)return null;var e,h,l=null,n=[],q=this.errors.length;this.trackUnknownProperties\u0026\u0026(e=this.unknownPropertyPaths,h=this.knownPropertyPaths);for(var u=0;u\u003Cb.oneOf.length;u++){this.trackUnknownProperties\u0026\u0026(this.unknownPropertyPaths={},this.knownPropertyPaths={});var t=b.oneOf[u],B=this.errors.length;t=this.validateAll(a,t,[],[\"oneOf\",u],d);if(null===t\u0026\u0026B===this.errors.length){if(null!==l)return this.errors=this.errors.slice(0,\nq),this.createError(y.ONE_OF_MULTIPLE,{index1:l,index2:u},\"\",\"\/oneOf\",null,a,b);if(l=u,this.trackUnknownProperties){for(var H in this.knownPropertyPaths)h[H]=!0,delete e[H];for(var I in this.unknownPropertyPaths)h[I]||(e[I]=!0)}}else t\u0026\u0026n.push(t)}return this.trackUnknownProperties\u0026\u0026(this.unknownPropertyPaths=e,this.knownPropertyPaths=h),null===l?(n=n.concat(this.errors.slice(q)),this.errors=this.errors.slice(0,q),this.createError(y.ONE_OF_MISSING,{},\"\",\"\/oneOf\",n,a,b)):(this.errors=this.errors.slice(0,\nq),null)};w.prototype.validateNot=function(a,b,d){if(void 0===b.not)return null;var e,h,l=this.errors.length;this.trackUnknownProperties\u0026\u0026(e=this.unknownPropertyPaths,h=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});d=this.validateAll(a,b.not,null,null,d);var n=this.errors.slice(l);return this.errors=this.errors.slice(0,l),this.trackUnknownProperties\u0026\u0026(this.unknownPropertyPaths=e,this.knownPropertyPaths=h),null===d\u0026\u00260===n.length?this.createError(y.NOT_PASSED,{},\"\",\n\"\/not\",null,a,b):null};w.prototype.validateHypermedia=function(a,b,d){if(!b.links)return null;for(var e,h=0;h\u003Cb.links.length;h++)if(e=b.links[h],\"describedby\"===e.rel){e=new m(e.href);for(var l=!0,n=0;n\u003Ce.varNames.length;n++)if(!(e.varNames[n]in a)){l=!1;break}if(l\u0026\u0026(e=e.fillFromObject(a),e={$ref:e},e=this.validateAll(a,e,[],[\"links\",h],d)))return e}};var y={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,\nNUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1E3},S={};for(T in y)S[y[T]]=\nT;var U={INVALID_TYPE:\"Invalid type: {type} (expected {expected})\",ENUM_MISMATCH:\"No enum match for: {value}\",ANY_OF_MISSING:'Data does not match any schemas from \"anyOf\"',ONE_OF_MISSING:'Data does not match any schemas from \"oneOf\"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from \"not\"',NUMBER_MULTIPLE_OF:\"Value {value} is not a multiple of {multipleOf}\",NUMBER_MINIMUM:\"Value {value} is less than minimum {minimum}\",\nNUMBER_MINIMUM_EXCLUSIVE:\"Value {value} is equal to exclusive minimum {minimum}\",NUMBER_MAXIMUM:\"Value {value} is greater than maximum {maximum}\",NUMBER_MAXIMUM_EXCLUSIVE:\"Value {value} is equal to exclusive maximum {maximum}\",NUMBER_NOT_A_NUMBER:\"Value {value} is not a valid number\",STRING_LENGTH_SHORT:\"String is too short ({length} chars), minimum {minimum}\",STRING_LENGTH_LONG:\"String is too long ({length} chars), maximum {maximum}\",STRING_PATTERN:\"String does not match pattern: {pattern}\",OBJECT_PROPERTIES_MINIMUM:\"Too few properties defined ({propertyCount}), minimum {minimum}\",\nOBJECT_PROPERTIES_MAXIMUM:\"Too many properties defined ({propertyCount}), maximum {maximum}\",OBJECT_REQUIRED:\"Missing required property: {key}\",OBJECT_ADDITIONAL_PROPERTIES:\"Additional properties not allowed\",OBJECT_DEPENDENCY_KEY:\"Dependency failed - key must exist: {missing} (due to key: {key})\",ARRAY_LENGTH_SHORT:\"Array is too short ({length}), minimum {minimum}\",ARRAY_LENGTH_LONG:\"Array is too long ({length}), maximum {maximum}\",ARRAY_UNIQUE:\"Array items are not unique (indices {match1} and {match2})\",\nARRAY_ADDITIONAL_ITEMS:\"Additional items not allowed\",FORMAT_CUSTOM:\"Format validation failed ({message})\",KEYWORD_CUSTOM:\"Keyword failed: {key} ({message})\",CIRCULAR_REFERENCE:\"Circular $refs: {urls}\",UNKNOWN_PROPERTY:\"Unknown property (not in schema)\"};L.prototype=Object.create(Error.prototype);L.prototype.constructor=L;L.prototype.name=\"ValidationError\";L.prototype.prefixWith=function(a,b){if(null!==a\u0026\u0026(a=a.replace(\/~\/g,\"~0\").replace(\/\\\/\/g,\"~1\"),this.dataPath=\"\/\"+a+this.dataPath),null!==b\u0026\u0026(b=\nb.replace(\/~\/g,\"~0\").replace(\/\\\/\/g,\"~1\"),this.schemaPath=\"\/\"+b+this.schemaPath),null!==this.subErrors)for(var d=0;d\u003Cthis.subErrors.length;d++)this.subErrors[d].prefixWith(a,b);return this};var J={};var T=function d(b){var e,h,l=new w,n={setErrorReporter:function(q){return\"string\"==typeof q?this.language(q):(h=q,!0)},addFormat:function(){l.addFormat.apply(l,arguments)},language:function(q){return q?(J[q]||(q=q.split(\"-\")[0]),!!J[q]\u0026\u0026(e=q,q)):e},addLanguage:function(q,u){for(var t in y)u[t]\u0026\u0026!u[y[t]]\u0026\u0026\n(u[y[t]]=u[t]);var B=q.split(\"-\")[0];if(J[B])for(t in J[q]=Object.create(J[B]),u)void 0===J[B][t]\u0026\u0026(J[B][t]=u[t]),J[q][t]=u[t];else J[q]=u,J[B]=u;return this},freshApi:function(q){var u=d();return q\u0026\u0026u.language(q),u},validate:function(q,u,t,B){var H=D(e),I=h?function(F,Q,N){return h(F,Q,N)||H(F,Q,N)}:H;t=new w(l,!1,I,t,B);\"string\"==typeof u\u0026\u0026(u={$ref:u});t.addSchema(\"\",u);I=t.validateAll(q,u,null,null,\"\");return!I\u0026\u0026B\u0026\u0026(I=t.banUnknownProperties(q,u)),this.error=I,this.missing=t.missing,this.valid=\nnull===I,this.valid},validateResult:function(){var q={toString:function(){return this.valid?\"valid\":this.error.message}};return this.validate.apply(q,arguments),q},validateMultiple:function(q,u,t,B){var H=D(e),I=h?function(F,Q,N){return h(F,Q,N)||H(F,Q,N)}:H;t=new w(l,!0,I,t,B);\"string\"==typeof u\u0026\u0026(u={$ref:u});t.addSchema(\"\",u);t.validateAll(q,u,null,null,\"\");B\u0026\u0026t.banUnknownProperties(q,u);q={toString:function(){return this.valid?\"valid\":this.error.message}};return q.errors=t.errors,q.missing=t.missing,\nq.valid=0===q.errors.length,q},addSchema:function(){return l.addSchema.apply(l,arguments)},getSchema:function(){return l.getSchema.apply(l,arguments)},getSchemaMap:function(){return l.getSchemaMap.apply(l,arguments)},getSchemaUris:function(){return l.getSchemaUris.apply(l,arguments)},getMissingUris:function(){return l.getMissingUris.apply(l,arguments)},dropSchemas:function(){l.dropSchemas.apply(l,arguments)},defineKeyword:function(){l.defineKeyword.apply(l,arguments)},defineError:function(q,u,t){if(\"string\"!=\ntypeof q||!\/^[A-Z]+(_[A-Z]+)*$\/.test(q))throw Error(\"Code name must be a string in UPPER_CASE_WITH_UNDERSCORES\");if(\"number\"!=typeof u||0!=u%1||1E4\u003Eu)throw Error(\"Code number must be an integer \\x3e 10000\");if(void 0!==y[q])throw Error(\"Error already defined: \"+q+\" as \"+y[q]);if(void 0!==S[u])throw Error(\"Error code already used: \"+S[u]+\" as \"+u);for(var B in y[q]=u,S[u]=q,U[q]=U[u]=t,J)t=J[B],t[q]\u0026\u0026(t[u]=t[u]||t[q])},reset:function(){l.reset();this.error=null;this.missing=[];this.valid=!0},missing:[],\nerror:null,valid:!0,normSchema:E,resolveUrl:r,getDocumentUri:A,errorCodes:y};return n.language(b||\"en\"),n}();return T.addLanguage(\"en-gb\",U),T.tv4=T,T})?k.apply(x,v):k)||(C.exports=c)},function(C,x,v){x=function(k){this.logger=k.logger;this.preValidationCallbacks=[]};v(0).assign(x.prototype,{registerPreValidationCallback:function(k,c,f){\"function\"!=typeof k?this.logger.error(\"registerPreValidationCallback - Invalid function : func must be a function\"):c\u0026\u0026\"string\"!=typeof c\u0026\u0026c.constructor!=RegExp?\nthis.logger.error(\"registerPreValidationCallback - eventMatch must be a String Literal or RegExp.\"):f\u0026\u0026\"number\"!=typeof f?this.logger.error(\"registerPreValidationCallback - executionOrder must be a number.\"):(\"string\"==typeof(c=c||new RegExp(\/.*\/))\u0026\u0026(c=new RegExp(\"^\"+c+\"$\")),f=f||9999,this.preValidationCallbacks.push({func:k,executionOrder:f,eventMatch:c}),this.logger.info(\"registerPreValidationCallback executed with \",k,f,c))}});C.exports=x},function(C,x,v){var k=v(0),c=v(8),f=function(g){this.logger=\ng.logger;this.window=g.window;this.dataLayerName=g.config.dataLayerName;this.eventProcessor=new c(g);g=this._initializeDataLayer();Array.isArray(g)?(this._augmentDataLayer(g),g.forEach(this.eventProcessor.processEventFn(g))):this.logger.error(\"Data layer must be an Array.\",this.dataLayerName)};k.assign(f.prototype,{get:function(){return this.window[this.dataLayerName]},set:function(g){this.window[this.dataLayerName]=g},_initializeDataLayer:function(){return void 0===this.get()\u0026\u0026this.set([]),this.get()},\n_augmentDataLayer:function(g){f.addComputedState(g);this._replacePush(g)},_replacePush:function(g){var m=g.push,p=this;g.push=function(){var z=k.argumentsToArray(arguments),r=z.map(p.eventProcessor.preProcessEventFn(g));m.apply(g,r);z.forEach(p.eventProcessor.processEventFn(g))}}});f.addComputedState=function(g){var m=function(){return function(p){p=void 0===p?g.length-1:p;p=g.slice(0,p+1).filter(c.isEventObject).reduce(function(z,r){return k.assign(z,r)},{});return delete p.event,delete p.__meta,\nk.copy(p)}};g.computedState||Object.defineProperty(g,\"computedState\",{configurable:!1,enumerable:!1,get:m()});g._computedStateAtIndex||Object.defineProperty(g,\"_computedStateAtIndex\",{configurable:!1,enumerable:!1,get:m});g._computedStateAtEvent||Object.defineProperty(g,\"_computedStateAtEvent\",{configurable:!1,enumerable:!1,get:function(){return function(p){p=g.indexOf(p);return m()(p)}}})};C.exports=f},function(C,x,v){var k=v(0),c=function(f){this.core=f;this.logger=f.logger;this.lifecycle=f.lifecycle;\nthis.validation=f.validation;this.debug=f.config.debug};k.assign(c.prototype,{preProcessEventFn:function(){var f=this;return function(g){g=f._processEventCallbacks(f,g);var m=f.validation.validateEvent(g);return f.debug\u0026\u0026(g.__meta=g.__meta||{},g.__meta.validationResult=m),g}},processEventFn:function(f){var g=this;return function(m){return c.isEventObject(m)\u0026\u0026(c.addComputedState(f,m),g.core.trigger(m)),m}},_processOneEventCallback:function(f,g,m){var p=k.copy(g);delete p.__meta;var z=k.copy(g);try{void 0===\n(z=m.func(k.copy(g)))\u0026\u0026(f.logger.error(\"processEventCallbacks - callback function did not return event.\",m),z=k.copy(g))}catch(r){f.logger.error(\"processEventCallbacks failed. error:\",r)}g=k.copy(z);if(delete g.__meta,f.debug)m={callback:{functionName:m.func.name,executionOrder:m.executionOrder,eventMatch:m.eventMatch.toString()},eventBefore:p,eventAfter:g},z.__meta.callbackSnapshots.push(m),f.logger.info(\"preValidationCallback executed for event: \"+z.event,m);return z},_processEventCallbacks:function(f,\ng){f.debug\u0026\u0026(g.__meta=g.__meta||{},g.__meta.callbackSnapshots=g.__meta.callbackSnapshots||[]);var m=f.lifecycle.preValidationCallbacks.filter(function(p){return g.event.match(p.eventMatch)}).sort(function(p,z){return p.executionOrder-z.executionOrder});return g=m.reduce(function(p,z){return f._processOneEventCallback(f,p,z)},g)}});c.isEventObject=function(f){return!!f.event\u0026\u0026\"string\"==typeof f.event\u0026\u0026!f.event.match(\/^gtm\\.\/)};c.addComputedState=function(f,g){g.__meta=g.__meta||{};g.__meta.computedState||\nObject.defineProperty(g.__meta,\"computedState\",{configurable:!1,enumerable:!1,get:function(){return f._computedStateAtEvent(g)}})};C.exports=c},function(C,x,v){var k=v(0);x=function(c){this.core=c;this.logger=c.logger};k.assign(x.prototype,{eventMapping:function(c){return(this.core.getDestinationMapping(c)||{}).launch_aa||{}},dataLayer:function(){return this.core.dataLayer.get().computedState},buildProductString:function(c){c=this.eventMapping(c).products;return this.buildProductStringPure(c,this.dataLayer())},\nbuildListString:function(c,f){var g=this.eventMapping(c);g=k.deepGetArray(g,[\"lists\",f]);var m=\"\";return g\u0026\u0026g.collection?m=this.buildListStringPure(g,this.dataLayer()):this.logger.error(\"List not found for event\/list:\",c,\"\/\",f),m},buildEventString:function(c){c=this.eventMapping(c);return this.buildEventStringPure(c,this.dataLayer())},buildProductStringPure:function(c,f){c=this._parseProducts(c,f);return this._generateProductString(c)},buildListStringPure:function(c,f){return k.deepGet(f,c.collection).join(c.list_delimiter)},\nbuildEventStringPure:function(c,f){var g=this._findBaseEvents({},c.events,f);return g=this._findCoreEvents(g,c.core,f),g=this._findProductEvents(g,c.products,f),this._generateEventString(g)},_parseProducts:function(c,f){var g={},m;for(m in c)for(var p=k.deepGet(f,c[m].collection),z=c[m].attributes,r=0;r\u003Cp.length;r++)for(var A in z){var E=z[A],D=k.dataLayerGet(p[r],E);switch(E.position){case \"evars\":g=this._setProductEvar(g,m,r,A,D);break;case \"events\":g=this._setProductEvent(g,m,r,A,D);break;default:\"__noCategory\"===\nm\u0026\u0026\"category\"===A\u0026\u0026(D=\"\",m=\"\"),g=this._setProductStringCore(g,m,r,A,D)}}return g},_cleanse4ProductString:function(c){var f=\"\";return\"number\"==typeof c\u0026\u0026(c+=\"\"),\"string\"==typeof c?f=c.replace(\/\\|\/g,\"~\").replace(\/;\/g,\":\").replace(\/,\/g,\".\").replace(\/^\\s+|\\s+$\/gm,\"\"):this.logger.error(\"type error : cleanse4ProductString(inputString) called with :\"+c),f},_evarSortFn:function(){var c=this;return function(f,g){return c._evarNum4sort(f)-c._evarNum4sort(g)}},_evarNum4sort:function(c){return parseInt(c.replace(\/evar\/i,\n\"\"))},_eventSortFn:function(){var c=this;return function(f,g){return c._eventNum4sort(f)-c._eventNum4sort(g)}},_eventNum4sort:function(c){var f=0;c.match(\/event\/)\u0026\u0026(f=10*parseInt(c.replace(\/event\/i,\"\")));return{prodView:1,scAdd:2,scRemove:3,scOpen:4,scView:5,scCheckout:6,purchase:7}[c]||f},_setEvent:function(c,f,g){return c=k.copy(c),\"boolean\"==typeof g?c[f]=g?1:0:(g=this._toFloat(g),c[f]=null,\"number\"!=typeof g||isNaN(g)||(c[f]=g)),c},_toFloat:function(c){try{c=parseFloat(c)}catch(f){this.logger.error(\"Cannot parse non-numerical value: \"+\nc)}return c},_setProductStringCore:function(c,f,g,m,p){c=k.copy(c);return 0\u003C=[\"category\",\"product\",\"quantity\",\"price\"].indexOf(m)?(p=this._cleanse4ProductString(p),c=k.deepSetArray(c,[f,g,m],p)):this.logger.error(\"AA_setProductStringCore : Invalid name, \",m),c},_setProductEvar:function(c,f,g,m,p){return c=k.copy(c),m.match(\/e[Vv]ar[1-9][0-9]{0,2}\/)?(m=m.replace(\/v\/,\"V\"),p=this._cleanse4ProductString(p),c=k.deepSetArray(c,[f,g,\"eVars\",m],p)):this.logger.error(\"AA_setProductEvar : Invalid eVar, \"+m),\nc},_setProductEvent:function(c,f,g,m,p){return c=k.copy(c),p\u0026\u0026!isNaN(Number(p))\u0026\u00260!=Number(p)?c=k.deepSetArray(c,[f,g,\"events\",m],Number(p)):(\"boolean\"==typeof p||p\u0026\u0026!isNaN(Number(p)))\u0026\u0026(c=k.deepSetArray(c,[f,g,\"events\",m],p)),c},_generateEventString:function(c){var f=[],g;for(g in c){var m=g+\"\";void 0!==c[g]\u0026\u0026null!==c[g]\u0026\u0026(m=g+\"\\x3d\"+c[g]);f.push(m)}return f.sort(this._eventSortFn()).join(\",\")},_generateProductString:function(c){var f=[],g;for(g in c){var m=c[g],p;for(p in m){var z=this._generateSingleProductString(m[p],\np,g);f.push(z)}}return f.join(\",\")},_generateSingleProductString:function(c,f,g){var m=this._generateProductStringEvents(c.events),p=this._generateProductStringEVars(c.eVars);return[c.category||g,this._productPID(c.product,g,f),c.quantity||\"\",this._productCost(c.price,c.quantity),m.sort(this._eventSortFn()).join(\"|\"),p.sort(this._evarSortFn()).join(\"|\")].join(\";\")},_productCost:function(c,f){return(c||0)*(f||0)||\"\"},_productPID:function(c,f,g){return c||f+\"_\"+g},_generateProductStringEvents:function(c){var f=\n[],g;for(g in c)\"boolean\"==typeof c[g]?f.push(g+\"\\x3d\"+(c[g]?1:0)):c[g]?f.push(g+\"\\x3d\"+c[g]):f.push(g+\"\");return f},_generateProductStringEVars:function(c){var f=[],g;for(g in c)void 0!==c[g]\u0026\u0026f.push(g+\"\\x3d\"+c[g]);return f},_findBaseEvents:function(c,f,g){for(var m in c=k.copy(c),f=f||{}){var p=k.dataLayerGet(g,f[m]);c=this._setEvent(c,m,p)}return c},_findCoreEvents:function(c,f,g){if(c=k.copy(c),f)for(var m in f)if(0==m.indexOf(\"event\")){var p=k.dataLayerGet(g,f[m]);c=this._setEvent(c,m,p)}return c},\n_findProductEvents:function(c,f,g){for(var m in c=k.copy(c),f)for(var p=k.deepGet(g,f[m].collection),z=f[m].attributes,r=0;r\u003Cp.length;r++)for(var A in z)\"events\"===z[A].position\u0026\u0026(c=this._setEvent(c,A));return c}});C.exports=x},function(C,x,v){function k(f,g,m,p){return(f=(m=f.attributes[m].$id)\u0026\u0026function(z,r,A){r=r.split(\"\/properties\/\").filter(function(E){return E});return function(E){return E.replace(\/\\\/items$\/,\"\").split(\"\/properties\/\").filter(function(D){return D})}(z).concat([\"\"+A],r)}(f.collection,\nm,p))\u0026\u0026c.deepGetArray(g,f)}var c=v(0);x=function(f){this.core=f;this.logger=f.logger};c.assign(x.prototype,{eventMapping:function(f){return!f.match(\/^gtm\\.\/)\u0026\u0026(this.core.getDestinationMapping(f)||{}).gtm_ga||{}},dataLayer:function(){return this.core.dataLayer.get().computedState},transformEcommerce:function(f){var g={},m=this.dataLayer();if(this.eventMapping(f)){var p=this.eventMapping(f);p.ecommerce\u0026\u0026(g.ecommerce=[\"products\",\"impressions\",\"promotions\"].reduce(function(z,r){if(function(D){return D\u0026\u0026\nD.attributes\u0026\u0026D.collection}(p.ecommerce[r])){var A=function(D,L){return c.deepGet(L,D.collection).reduce(function(O,K,w){K=Object.keys(D.attributes).reduce(function(P){return function(V,y){if(\"currencyCode\"!==y){var S=k(D,L,y,P);V[y]=S||\"\"}return V}}(w),{});return O.concat([K])},[])}(p.ecommerce[r],m),E=\"products\"===r?p.ecommerce.type:r;A=\"products\"===r?{products:A}:A;z[E]=A;(r=function(D,L,O){return function(K,w){return K.currencyCode?c.deepGet(w,K.currencyCode.$id):null}(D.ecommerce,O)||function(K,\nw){return c.deepGet(w,K.collection).reduce(function(P,V,y){return P||Object.keys(K.attributes).reduce(function(S){return function(U,J){return U||(\"currencyCode\"==J?k(K,w,J,S):null)}}(y),null)},null)}(D.ecommerce[L],O)}(p,r,m))\u0026\u0026(z.currencyCode=r);(r=p.ecommerce.actionField)\u0026\u0026!z[E].actionField\u0026\u0026(z[E].actionField=function(D,L){var O=D.attributes||{};return Object.keys(O).reduce(function(K,w){var P=O[w].$id;return P\u0026\u0026(K[w]=c.deepGet(L,P)),K},{})}(r,m))}return z},{}))}return g}});C.exports=x}]);\n!function(C){C.astpClientLibVersion=\"2.2.11\";C.astpClientLibGitSha=\"374b41d6852dffa66fd03b819bff3180703366b4\"}(window._astp);\nvar mapping={\"Application Downloaded\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/eventDetails\/properties\/downloadType\",description:\"Describes the type or source of the download\",examples:[\"google play\",\"app store\"],type:\"string\"}},tag:{action:\"download\",category:\"application\",name:\"UA - Application Downloaded\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",\nvalue:\"Application Downloaded\"}],type:\"EQUALS\"}],name:\"Application Downloaded\",type:\"CUSTOM_EVENT\"}]}},\"Listing Viewed\":{gtm_ga:{ecommerce:{impressions:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",\nexamples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\n\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",description:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",\ndescription:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension48:{$id:\"\/properties\/price\/properties\/basePrice\",description:\"String representation of MSRP of a product. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",\nexamples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",examples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},list:{$id:\"\/properties\/itemListType\",description:\"Indicates the presentation type for displaying the results for a property search.\",\nexamples:[\"condensed\",\"megatile\",\"map\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},position:{$id:\"\/properties\/itemPosition\",description:\"Integer position of a property within a sorted result. The first returned is position 1. For map results, this value can be the rank by distance from POI.\",examples:[1,2,3,4,5],minimum:0,\ntype:\"integer\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",\nexamples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"}},collection:\"\/properties\/listing\/properties\/listingResults\/properties\/item\/items\"},type:\"impressions\"},tag:{action:\"internal search\",category:\"navigation\",name:\"UA - Internal Search\",nonInteraction:\"true\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Listing Viewed\"}],type:\"EQUALS\"}],name:\"Listing Viewed\",\ntype:\"CUSTOM_EVENT\"}]}},\"Promotion Viewed\":{gtm_ga:{ecommerce:{promotions:{attributes:{brand:{$id:\"\/properties\/promotionName\",description:\"The name of the promotion.\",examples:[\"Trek bikes for kids\",\"REI Spring Sale 2019\",\"Viking Cruise Fall Specials\"],type:\"string\"},creative:{$id:\"\/properties\/promotionCreative\",description:\"Describes the creative treatment for a promotion\",examples:[\"Girl with bike\",\"Mountain Top\",\"River Cruise Danube\"],type:\"string\"},id:{$id:\"\/properties\/promotionID\",description:\"Unique Identifier of a promotion\",\nexamples:[\"2345\",\"56789\",\"9876\"],type:\"string\"},position:{$id:\"\/properties\/promotionPosition\",description:\"The position of a promotion within a list of promotions\",examples:[1,5,78,3],minimum:1,type:\"integer\"}},collection:\"\/properties\/promotions\/items\"},type:\"promoView\"},tag:{action:\"promotion viewed\",category:\"ecommerce\",name:\"UA - Promotion Viewed\",nonInteraction:\"true\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},\n{key:\"arg1\",type:\"TEMPLATE\",value:\"Promotion Viewed\"}],type:\"EQUALS\"}],name:\"Promotion Viewed\",type:\"CUSTOM_EVENT\"}]}},\"Listing Item Clicked\":{gtm_ga:{ecommerce:{actionField:{attributes:{list:{$id:\"\/properties\/listing\/properties\/listingResults\/properties\/itemListType\",description:\"Describes the type of result list returned.\",examples:[\"product results\",\"suggestions\",\"map pins\",\"images\"],type:\"string\"}}},products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",\nexamples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",examples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",\nexamples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",\ndescription:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",description:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension48:{$id:\"\/properties\/price\/properties\/basePrice\",description:\"String representation of MSRP of a product. Positive. Up to two decimal places for cents. No currency symbol.\",\nexamples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",examples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",\ndescription:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",examples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},position:{$id:\"\/properties\/itemPosition\",\ndescription:\"Integer position of a property within a sorted result. The first returned is position 1. For map results, this value can be the rank by distance from POI.\",examples:[1,2,3,4,5],minimum:0,type:\"integer\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},\nvariant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"}},collection:\"\/properties\/listing\/properties\/listingResults\/properties\/item\/items\"},type:\"click\"},tag:{action:\"internal search clickthrough\",category:\"navigation\",name:\"UA - Internal Search Clickthrough\",\nnonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Listing Item Clicked\"}],type:\"EQUALS\"}],name:\"Listing Item Clicked\",type:\"CUSTOM_EVENT\"}]}},\"Product Removed\":{gtm_ga:{ecommerce:{products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),\ntype:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",examples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},currencyCode:{$id:\"\/properties\/price\/properties\/currency\",description:\"Currency of the prices given. ISO 4217 (3 character alpha), uppercase \",examples:[\"USD\",\"CAD\",\"GBP\",\"CHF\"],maxLength:3,minLength:3,pattern:\"^[A-Z]{3}$\",\ntype:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",\nexamples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",description:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",description:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension48:{$id:\"\/properties\/price\/properties\/basePrice\",\ndescription:\"String representation of MSRP of a product. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",\nexamples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},dimension84:{$id:\"\/properties\/productInfo\/properties\/productState\",description:\"Product state captures current state of product based on scenarios like save for later or move to cart or SDD\",examples:[\"SDD|Available\",\"SDD|Not Available\",\"SDD|Available|No inventory\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",\nexamples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],\npattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},quantity:{$id:\"\/properties\/quantity\",description:\"Integer number of products being acted upon (added to a cart, removed from wishlist, purchased, reserved)\",examples:[1,2,3,4,5],minimum:1,type:\"integer\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\n\"Medium : Black\",\"Large : Green\"],type:\"string\"},dimension88:{$id:\"\/properties\/productInfo\/properties\/parentProduct\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"},dimension93:{$id:\"\/properties\/productInfo\/properties\/tradeinProductName\",description:\"Describes the corresponding tradein product\",\nexamples:[\"Madden NFL 25\",\"PS4\"],type:\"string\"},dimension101:{$id:\"\/properties\/productInfo\/properties\/programName\",description:\"Describes the corresponding program name\",examples:[\"Web Tradein\",\"WIS Tradein\"],type:\"string\"}},collection:\"\/properties\/product\/items\"},type:\"remove\"},tag:{action:\"cart remove\",category:\"ecommerce\",name:\"UA - Cart Remove\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},\n{key:\"arg1\",type:\"TEMPLATE\",value:\"Product Removed\"}],type:\"EQUALS\"}],name:\"Product Removed\",type:\"CUSTOM_EVENT\"}]}},\"User Registered\":{gtm_ga:{customEvent:{dimension10:{$id:\"\/properties\/user\/properties\/memberTier\",description:\"Member Tier.  Indicates different privileges on the site\",examples:[\"bronze\",\"gold\",\"platinum\"],type:\"string\"},dimension11:{$id:\"\/properties\/user\/properties\/userType\",description:\"Describes the type of the user.  Often used for different levels of loyalty program, or to differentiate customers from employees. \",\nexamples:[\"cust-platinum\",\"cust-gold\",\"employee\",\"guest\",\"agent\"],type:\"string\"},dimension12:{$id:\"\/properties\/user\/properties\/loyaltyPoints\",description:\"Number of loyalty points \",examples:[100,101,1E3],minimum:0,type:\"integer\"},dimension13:{$id:\"\/properties\/user\/properties\/memberSinceDate\",description:\"Member Join Date. ISO 8601 form (YYYY-MM-DD). Jan 1, 2019 is 2019-01-01\",examples:[\"2001-12-22\",\"2011-01-01\"],pattern:\"^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$\",type:\"string\"},dimension8:{$id:\"\/properties\/user\/properties\/custKey\",\ndescription:\"Unique identifier of a customer.  Any id's considered PII must be hashed. \",type:\"string\"},dimension9:{$id:\"\/properties\/user\/properties\/loginStatus\",description:\"Describes the login state of the user\",examples:[\"logged in\",\"logged out\",\"guest\"],type:\"string\"},metric11:1},tag:{action:\"registered\",category:\"user\",name:\"UA - User Registered\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},\n{key:\"arg1\",type:\"TEMPLATE\",value:\"User Registered\"}],type:\"EQUALS\"}],name:\"User Registered\",type:\"CUSTOM_EVENT\"}]}},\"User Signed Out\":{gtm_ga:{customEvent:{dimension10:{$id:\"\/properties\/user\/properties\/memberTier\",description:\"Member Tier.  Indicates different privileges on the site\",examples:[\"bronze\",\"gold\",\"platinum\"],type:\"string\"},dimension11:{$id:\"\/properties\/user\/properties\/userType\",description:\"Describes the type of the user.  Often used for different levels of loyalty program, or to differentiate customers from employees. \",\nexamples:[\"cust-platinum\",\"cust-gold\",\"employee\",\"guest\",\"agent\"],type:\"string\"},dimension12:{$id:\"\/properties\/user\/properties\/loyaltyPoints\",description:\"Number of loyalty points \",examples:[100,101,1E3],minimum:0,type:\"integer\"},dimension13:{$id:\"\/properties\/user\/properties\/memberSinceDate\",description:\"Member Join Date. ISO 8601 form (YYYY-MM-DD). Jan 1, 2019 is 2019-01-01\",examples:[\"2001-12-22\",\"2011-01-01\"],pattern:\"^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$\",type:\"string\"},dimension8:{$id:\"\/properties\/user\/properties\/custKey\",\ndescription:\"Unique identifier of a customer.  Any id's considered PII must be hashed. \",type:\"string\"},dimension9:{$id:\"\/properties\/user\/properties\/loginStatus\",description:\"Describes the login state of the user\",examples:[\"logged in\",\"logged out\",\"guest\"],type:\"string\"}},tag:{action:\"signed out\",category:\"user\",name:\"UA - User Signed Out\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},\n{key:\"arg1\",type:\"TEMPLATE\",value:\"User Signed Out\"}],type:\"EQUALS\"}],name:\"User Signed Out\",type:\"CUSTOM_EVENT\"}]}},\"Store Searched\":{gtm_ga:{customEvent:{action:{$id:\"\/properties\/storeSearch\/properties\/searchAction\",description:\"GTM specific. Passed to the action variable (describes whether results were returned)\",examples:[\"search results\",\"search no results\"],type:\"string\"},label:{$id:\"\/properties\/listing\/properties\/listingParams\/properties\/searchInfo\/properties\/searchTermEntered\",description:\"Describes the search keyword exactly as entered by the user.\",\nexamples:[\"red lobster\",\"red lboster\",\"red lbstr\"],type:\"string\"},metric14:{$id:\"\/properties\/listing\/properties\/listingResults\/properties\/resultsCount\",description:\"The total number of items returned that matched the search criteria. (Integer)\",examples:[0,20,110,165],minimum:0,type:\"integer\"}},tag:{category:\"find a location\",name:\"UA - Store Search\",nonInteraction:\"true\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},\n{key:\"arg1\",type:\"TEMPLATE\",value:\"Store Searched\"}],type:\"EQUALS\"}],name:\"Store Searched\",type:\"CUSTOM_EVENT\"}]}},\"Page Loaded\":{gtm_ga:{customEvent:{dimension11:{$id:\"\/properties\/user\/properties\/userType\",description:\"Describes the type of the user.  Often used for different levels of loyalty program, or to differentiate customers from employees. \",examples:[\"cust-platinum\",\"cust-gold\",\"employee\",\"guest\",\"agent\"],type:\"string\"},dimension21:{$id:\"\/properties\/page\/properties\/pageType\",description:\"Describes what purpose the page serves. Often aligns with the CMS template.\",\nexamples:\"Home;Event Detail;Property Detail;Product Listing;Blog Post;Shopping Cart\".split(\";\"),type:\"string\"},dimension60:{$id:\"\/properties\/page\/properties\/pageCategory\",description:\"General category or Site Section of the page. Top level of page hierarchy.\",examples:\"Home;About Us;Shop;Account;Blog;Investors\".split(\";\"),type:\"string\"},dimension61:{$id:\"\/properties\/page\/properties\/siteType\",description:\"Common language description of the site type of purpose. May be used to group siteName.\",examples:[\"Prospecting\",\n\"Shop\",\"Members\",\"Brand\"],type:\"string\"},dimension8:{$id:\"\/properties\/user\/properties\/custKey\",description:\"Unique identifier of a customer.  Any id's considered PII must be hashed. \",type:\"string\"}},tag:{name:\"GA - Pageview\",tool:\"universal analytics\",type:\"pageview\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Page Loaded\"}],type:\"EQUALS\"}],name:\"Page Loaded\",type:\"CUSTOM_EVENT\"}]}},\"Promo Code Added\":{gtm_ga:{customEvent:{dimension19:{$id:\"\/properties\/voucherDiscount\/properties\/voucherCode\",\ndescription:\"Discount code entered or applied\",examples:[\"5OFFSHOES\",\"AKRONCANDLES2019\"],type:\"string\"},dimension20:{$id:\"\/properties\/voucherDiscount\/properties\/voucherCodeIsValid\",description:\"Describes whether a voucher code is valid or not\",examples:[\"true\",\"false\"],type:\"boolean\"},label:{$id:\"\/properties\/voucherDiscount\/properties\/voucherCode\",description:\"Discount code entered or applied\",examples:[\"5OFFSHOES\",\"AKRONCANDLES2019\"],type:\"string\"}},tag:{action:\"promo code added\",category:\"ecommerce\",\nname:\"UA - Promo Cocde Added\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Promo Code Added\"}],type:\"EQUALS\"}],name:\"Promo Code Added\",type:\"CUSTOM_EVENT\"}]}},\"Payment Type Selected\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/eventDetails\/properties\/checkoutType\",description:\"Describes the selected checkout type when multiple flows exist\",examples:[\"Credit Card\",\n\"PayPal\"],type:\"string\"}},tag:{action:\"checkout type\",category:\"ecommerce\",name:\"UA - Payment Type Selected\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Payment Type Selected\"}],type:\"EQUALS\"}],name:\"Payment Type Selected\",type:\"CUSTOM_EVENT\"}]}},\"User Signed In\":{gtm_ga:{customEvent:{dimension10:{$id:\"\/properties\/user\/properties\/memberTier\",description:\"Member Tier.  Indicates different privileges on the site\",\nexamples:[\"bronze\",\"gold\",\"platinum\"],type:\"string\"},dimension11:{$id:\"\/properties\/user\/properties\/userType\",description:\"Describes the type of the user.  Often used for different levels of loyalty program, or to differentiate customers from employees. \",examples:[\"cust-platinum\",\"cust-gold\",\"employee\",\"guest\",\"agent\"],type:\"string\"},dimension12:{$id:\"\/properties\/user\/properties\/loyaltyPoints\",description:\"Number of loyalty points \",examples:[100,101,1E3],minimum:0,type:\"integer\"},dimension13:{$id:\"\/properties\/user\/properties\/memberSinceDate\",\ndescription:\"Member Join Date. ISO 8601 form (YYYY-MM-DD). Jan 1, 2019 is 2019-01-01\",examples:[\"2001-12-22\",\"2011-01-01\"],pattern:\"^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$\",type:\"string\"},dimension8:{$id:\"\/properties\/user\/properties\/custKey\",description:\"Unique identifier of a customer.  Any id's considered PII must be hashed. \",type:\"string\"},dimension9:{$id:\"\/properties\/user\/properties\/loginStatus\",description:\"Describes the login state of the user\",examples:[\"logged in\",\"logged out\",\n\"guest\"],type:\"string\"},metric10:1},tag:{action:\"signed in\",category:\"user\",name:\"UA - User Signed In\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"User Signed In\"}],type:\"EQUALS\"}],name:\"User Signed In\",type:\"CUSTOM_EVENT\"}]}},\"Download Link Clicked\":{gtm_ga:{tag:{action:\"download\",category:\"navigation\",label:\"LINKHREF\",name:\"GA - Download Link\",\nnonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{checkValidation:{type:\"BOOLEAN\",value:\"false\"},filter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",75],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"\\\\.(avi|css|csv|doc|docx|eps|exe|jpg|js|m4v|mov|mp3|pdf|png|ppt|pptx|rar|svg|tab|txt|vsd|vxd|wav|wma|wmv|xls|xlsx|xml|zip)$\"}],type:\"MATCH_REGEX\"}],name:\"Download Clicks\",type:\"LINK_CLICK\",uniqueTriggerId:{type:\"TEMPLATE\"},waitForTags:{type:\"BOOLEAN\",value:\"false\"},\nwaitForTagsTimeout:{type:\"TEMPLATE\",value:\"2000\"}}]}},\"Promotion Clicked\":{gtm_ga:{customEvent:{metric6:1},ecommerce:{promotions:{attributes:{brand:{$id:\"\/properties\/promotionName\",description:\"The name of the promotion.\",examples:[\"Trek bikes for kids\",\"REI Spring Sale 2019\",\"Viking Cruise Fall Specials\"],type:\"string\"},creative:{$id:\"\/properties\/promotionCreative\",description:\"Describes the creative treatment for a promotion\",examples:[\"Girl with bike\",\"Mountain Top\",\"River Cruise Danube\"],type:\"string\"},\nid:{$id:\"\/properties\/promotionID\",description:\"Unique Identifier of a promotion\",examples:[\"2345\",\"56789\",\"9876\"],type:\"string\"},position:{$id:\"\/properties\/promotionPosition\",description:\"The position of a promotion within a list of promotions\",examples:[1,5,78,3],minimum:1,type:\"integer\"}},collection:\"\/properties\/promotions\/items\"},type:\"promoClick\"},tag:{action:\"promotion clicked\",category:\"ecommerce\",name:\"UA - Promotion Clicked\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},\ntrigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Promotion Clicked\"}],type:\"EQUALS\"}],name:\"Promotion Clicked\",type:\"CUSTOM_EVENT\"}]}},\"Trade In Searched\":{gtm_ga:{customEvent:{action:{$id:\"\/properties\/tradeSearch\/properties\/searchAction\",description:\"GTM specific. Passed to the action variable (describes whether results were returned)\",examples:[\"search results\",\"search no results\"],type:\"string\"},label:{$id:\"\/properties\/listing\/properties\/listingParams\/properties\/searchInfo\/properties\/searchTermEntered\",\ndescription:\"Describes the search keyword exactly as entered by the user.\",examples:[\"red lobster\",\"red lboster\",\"red lbstr\"],type:\"string\"},metric21:{$id:\"\/properties\/listing\/properties\/listingResults\/properties\/resultsCount\",description:\"The total number of items returned that matched the search criteria. (Integer)\",examples:[0,20,110,165],minimum:0,type:\"integer\"}},tag:{category:\"trade in\",name:\"UA - Trade In Searched\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",\ntype:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Trade In Searched\"}],type:\"EQUALS\"}],name:\"Trade In Searched\",type:\"CUSTOM_EVENT\"}]}},\"Trade In Printed\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},metric17:{$id:\"\/properties\/price\/properties\/tradeInProStoreCreditAmount\",description:\"Amount for a Pro Store Credit Trade-in Offer\",\nexamples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric18:{$id:\"\/properties\/price\/properties\/tradeInProCashAmount\",description:\"Amount for a Pro Cash Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric19:{$id:\"\/properties\/price\/properties\/tradeInRegularStoreCreditAmount\",description:\"Amount for a Regular Store Credit Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric20:{$id:\"\/properties\/price\/properties\/tradeInRegularCashtAmount\",\ndescription:\"Amount for a Regular Cash Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"}},tag:{action:\"print estimate\",category:\"trade in\",name:\"UA - Trade In Printed\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Trade In Printed\"}],type:\"EQUALS\"}],name:\"Trade In Printed\",type:\"CUSTOM_EVENT\"}]}},\"Phone Number Clicked\":{gtm_ga:{tag:{action:\"click\",\ncategory:\"click to call\",label:\"LINKHREF\",name:\"UA - Phone Number Clicked\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Phone Number Clicked\"}],type:\"EQUALS\"}],name:\"Phone Number Clicked\",type:\"CUSTOM_EVENT\"}]}},schema_version:\"2.0.0\",\"Order Searched\":{gtm_ga:{customEvent:{action:{$id:\"\/properties\/orderSearch\/properties\/searchAction\",description:\"GTM specific. Passed to the action variable (describes whether results were returned)\",\nexamples:[\"search results\",\"search no results\"],type:\"string\"},label:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderID\",description:\"Unique ID of the Order\",examples:[\"12345\",\"987\",\"GS45678\"],type:\"string\"},metric22:{$id:\"\/properties\/listing\/properties\/listingResults\/properties\/resultsCount\",description:\"The total number of items returned that matched the search criteria. (Integer)\",examples:[0,20,110,165],minimum:0,type:\"integer\"}},tag:{category:\"order lookup\",name:\"UA - Order Searched\",\nnonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Order Searched\"}],type:\"EQUALS\"}],name:\"Order Searched\",type:\"CUSTOM_EVENT\"}]}},\"Exit Link Clicked\":{gtm_ga:{tag:{action:\"exit link\",category:\"navigation\",label:\"LINKHREF\",name:\"UA - Exit Link\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{checkValidation:{type:\"BOOLEAN\",value:\"false\"},\nfilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",75],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"",["escape",["macro",77],7],"\"},{key:\"negate\",type:\"BOOLEAN\",value:\"true\"}],type:\"CONTAINS\"}],name:\"Exit Clicks\",type:\"LINK_CLICK\",uniqueTriggerId:{type:\"TEMPLATE\"},waitForTags:{type:\"BOOLEAN\",value:\"false\"},waitForTagsTimeout:{type:\"TEMPLATE\",value:\"2000\"}}]}},\"Order Placed\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/transaction\/properties\/transactionID\",description:\"Unique identifier of the transaction. Max Length 20. Used as a key for upload of post transaction data. \",\nmaxLength:20,minLength:6,pattern:\"^[a-zA-Z0-9]{6,20}$\",type:\"string\"}},ecommerce:{actionField:{attributes:{affiliation:{$id:\"\/properties\/transaction\/properties\/affiliation\",description:\"Describes an affiliation to a store or agent for a transaction. \",examples:[\"store-123\",\"agent-43\"],type:\"string\"},coupon:{$id:\"\/properties\/transaction\/properties\/total\/properties\/orderLevelDiscountCode\",description:\"Order Level Discount code for a transaction.\",examples:[\"FRIENDSANDFAMILY\",\"April15\"],type:\"string\"},\nid:{$id:\"\/properties\/transaction\/properties\/transactionID\",description:\"Unique identifier of the transaction. Max Length 20. Used as a key for upload of post transaction data. \",maxLength:20,minLength:6,pattern:\"^[a-zA-Z0-9]{6,20}$\",type:\"string\"},revenue:{$id:\"\/properties\/transaction\/properties\/total\/properties\/revenue\",description:\"The total revenue for a transaction. Does not include tax or shipping. \",examples:[\"125.05\",\"432.21\",\"90.22\",\"12.05\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},\nshipping:{$id:\"\/properties\/transaction\/properties\/total\/properties\/shippingCost\",description:\"The total of all shipping costs for all shipments within the transaction.\",examples:[\"15.05\",\"2\",\"0.22\",\"2.2\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},tax:{$id:\"\/properties\/transaction\/properties\/total\/properties\/tax\",description:\"String representation of the total tax collected for a transaction. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"15.05\",\"2\",\"0.22\",\"2.2\"],\npattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"}}},currencyCode:{$id:\"\/properties\/transaction\/properties\/total\/properties\/currency\",description:\"Currency of the transaction. ISO 4217 (3 character alpha), uppercase \",examples:[\"USD\",\"CAD\",\"GBP\",\"CHF\"],maxLength:3,minLength:3,pattern:\"^[A-Z]{3}$\",type:\"string\"},products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),\ntype:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",examples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},coupon:{$id:\"\/properties\/couponCode\",description:\"Unique Identifier of a coupon or voucher code.\",examples:[\"FREESHIPP20\",\"WELCOME20\"],type:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",\nexamples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",\ndescription:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",description:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",\nexamples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},dimension50:{$id:\"\/properties\/shippingMethod\",description:\"Describes the method or carrier and method of shipment. Should be common terminology within your business. \",examples:\"Regular;Overnight;Overnight AM;Overnight AM Sat;UPS Ground;UPS Air\".split(\";\"),type:\"string\"},dimension51:{$id:\"\/properties\/productInfo\/properties\/productFulfillmentMethod\",description:\"Describes the method of fulfillment for an order item\",examples:[\"Pay Online Pickup In Store\",\n\"Pay Online Ship to Home\"],type:\"string\"},dimension84:{$id:\"\/properties\/productInfo\/properties\/productState\",description:\"Product state captures current state of product based on scenarios like save for later or move to cart or SDD\",examples:[\"SDD|Available\",\"SDD|Not Available\",\"SDD|Available|No inventory\"],type:\"string\"},dimension88:{$id:\"\/properties\/productInfo\/properties\/parentProduct\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",\nexamples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"},dimension93:{$id:\"\/properties\/productInfo\/properties\/tradeinProductName\",description:\"Describes the corresponding tradein product\",examples:[\"Madden NFL 25\",\"PS4\"],type:\"string\"},dimension94:{$id:\"\/properties\/productInfo\/properties\/tradeinWebOrderDate\",description:\"Describes the corresponding tradeinWebOrderDate\",examples:[\"Date\",\"or timestamp\"],type:\"string\"},dimension95:{$id:\"\/properties\/productInfo\/properties\/wisStoreID\",\ndescription:\"Describes the corresponding wisStoreID\",examples:[\"1234\",\"3427\"],type:\"string\"},dimension96:{$id:\"\/properties\/productInfo\/properties\/wisChannel\",description:\"Describes the corresponding wisChannel\",examples:[\"WIS\",\"Call center\"],type:\"string\"},dimension97:{$id:\"\/properties\/productInfo\/properties\/wisAssociateID\",description:\"Describes the corresponding wisAssociateID\",examples:[\"2241322\",\"1241322\"],type:\"string\"},dimension98:{$id:\"\/properties\/productInfo\/properties\/wisVoucherType\",description:\"Describes the corresponding wisVoucherType\",\nexamples:[\"Tradein\",\"Giftcard\"],type:\"string\"},dimension101:{$id:\"\/properties\/productInfo\/properties\/programName\",description:\"Describes the corresponding program name\",examples:[\"Web Tradein\",\"WIS Tradein\"],type:\"string\"},dimension103:{$id:\"\/properties\/productInfo\/properties\/shippingOption\",description:\"Describes the shippingOption\",examples:[\"premium\",\"regular\"],type:\"string\"},dimension104:{$id:\"\/properties\/productInfo\/properties\/shippingSubGroup\",description:\"Describes the shippingSubgroup\",examples:[\"SDD\",\n\"Shipping now\"],type:\"string\"},dimension105:{$id:\"\/properties\/productInfo\/properties\/parentProductID\",description:\"Describes the parentProductID\",examples:[\"168212\",\"168213\"],type:\"string\"},dimension106:{$id:\"\/properties\/productInfo\/properties\/parentProductCategory\",description:\"Describes the parent Product Category\",examples:[\"Consoles\",\"games\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",\nexamples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],\npattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},quantity:{$id:\"\/properties\/quantity\",description:\"Integer number of products being acted upon (added to a cart, removed from wishlist, purchased, reserved)\",examples:[1,2,3,4,5],minimum:1,type:\"integer\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\n\"Medium : Black\",\"Large : Green\"],type:\"string\"},metric57:{$id:\"\/properties\/productInfo\/properties\/tradeinOpted\",description:\"Check if WIS trade in is opted in Order Confirmation page\",examples:[\"1\",\"1\",\"1\",\"1\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric58:{$id:\"\/properties\/productInfo\/properties\/WIStradeinOpted\",description:\"Check if WIS trade in is opted in Order Confirmation page\",examples:[\"1\",\"1\",\"1\",\"1\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric59:{$id:\"\/properties\/productInfo\/properties\/tradeinRevenue\",\ndescription:\"Tradein Revenue MAX_VALUE\",examples:[\"12.22\",\"12.11\",\"112.22\",\"212.11\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric60:{$id:\"\/properties\/productInfo\/properties\/giftCardValue\",description:\"Tradein Revenue Gift card value\",examples:[\"12.22\",\"12.11\",\"112.22\",\"212.11\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric61:{$id:\"\/properties\/productInfo\/properties\/tradeinGiftcardApplied\",description:\"Tradein Revenue Gift card applied instances\",examples:[\"1\",\"12\",\"112\",\"212\"],\npattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric64:{$id:\"\/properties\/productInfo\/properties\/wistradeinExtravalue\",description:\"wistradeinExtravalue Revenue value \",examples:[\"1\",\"12\",\"112\",\"212\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric65:{$id:\"\/properties\/productInfo\/properties\/wistradeinRevenue\",description:\"wistradeinRevenue Revenue applied \",examples:[\"1\",\"12\",\"112\",\"212\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"}},collection:\"\/properties\/transaction\/properties\/item\/items\"},\ntype:\"purchase\"},tag:{action:\"order placed\",category:\"ecommerce\",name:\"UA - Order Placed\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Order Placed\"}],type:\"EQUALS\"}],name:\"Order Placed\",type:\"CUSTOM_EVENT\"}]}},\"Store Selected\":{gtm_ga:{customEvent:{action:{$id:\"\/properties\/storeSearch\/properties\/selectAction\",description:\"GTM specific. Passed to the action variable (describes the context of a stroe selection)\",\nexamples:[\"select location\",\"select specific store\"],type:\"string\"},dimension29:{$id:\"\/properties\/store\/properties\/storeID\",description:\"Unique ID for a physical store\",examples:[\"1234\",\"4567\",\"4565\",\"s_4567\"],type:\"string\"},dimension30:{$id:\"\/properties\/store\/properties\/storeName\",description:\"Name of physical store\",examples:[\"Bob's Burgers\",\"Ken's Tacos\",\"Jeremy's Video Heaven\"],type:\"string\"},dimension31:{$id:\"\/properties\/store\/properties\/postalCode\",description:\"Zip or Postal Code of physical Store\",\nexamples:[\"53533\",\"30381\",\"M1R 0E9\",\"M3C 0C1\"],type:\"string\"},dimension32:{$id:\"\/properties\/store\/properties\/city\",description:\"City of physical store\",examples:[\"Duluth\",\"Elm Grove\",\"Toronto\",\"Halifax\"],type:\"string\"},dimension33:{$id:\"\/properties\/store\/properties\/stateProvince\",description:\"State or Province of physical store \",examples:[\"MN\",\"IL\",\"ON\",\"NS\"],type:\"string\"},label:{$id:\"\/properties\/store\/properties\/storeName\",description:\"Name of physical store\",examples:[\"Bob's Burgers\",\"Ken's Tacos\",\n\"Jeremy's Video Heaven\"],type:\"string\"}},tag:{category:\"find a location\",name:\"UA - Store Selected\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Store Selected\"}],type:\"EQUALS\"}],name:\"Store Selected\",type:\"CUSTOM_EVENT\"}]}},\"Product Viewed\":{gtm_ga:{ecommerce:{products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",\nexamples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",examples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",\nexamples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",\ndescription:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",description:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension48:{$id:\"\/properties\/price\/properties\/basePrice\",description:\"String representation of MSRP of a product. Positive. Up to two decimal places for cents. No currency symbol.\",\nexamples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",examples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},dimension79:{$id:\"\/properties\/productInfo\/properties\/zoneSource\",\ndescription:\"Describes the zones where a product is viewed\",examples:[\"PDP\",\"Cart\"],type:\"string\"},dimension84:{$id:\"\/properties\/productInfo\/properties\/productState\",description:\"Product state captures current state of product based on scenarios like save for later or move to cart or SDD\",examples:[\"SDD|Available\",\"SDD|Not Available\",\"SDD|Available|No inventory\"],type:\"string\"},dimension93:{$id:\"\/properties\/productInfo\/properties\/tradeinProductName\",description:\"Describes the corresponding tradein product\",\nexamples:[\"Madden NFL 25\",\"PS4\"],type:\"string\"},dimension101:{$id:\"\/properties\/productInfo\/properties\/programName\",description:\"Describes the corresponding program name\",examples:[\"Web Tradein\",\"WIS Tradein\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",examples:[\"155\",\n\"65588\",\"987764448\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",\ntype:\"string\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"}},collection:\"\/properties\/product\/items\"},type:\"detail\"},tag:{action:\"product detail view\",category:\"ecommerce\",name:\"UA - Product Detail Viewed\",nonInteraction:\"true\",tool:\"universal analytics\",\ntype:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Product Viewed\"}],type:\"EQUALS\"}],name:\"Product Viewed\",type:\"CUSTOM_EVENT\"}]}},data_layer:\"dataLayer\",\"Email Subscription Completed\":{gtm_ga:{customEvent:{dimension24:{$id:\"\/properties\/linkInfo\/properties\/linkRegion\",description:\"Indicates the region on page for a clicked link within the hierarchy [Site \\x3e Page \\x3e Region \\x3e Container \\x3e linkID]\",\nexamples:\"Top Nav;Footer Nav;Hero;Recommended;Also Shopped;Also Bought\".split(\";\"),type:\"string\"}},tag:{action:\"sign up complete\",category:\"email\",name:\"UA - Email Subscription Completed\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Email Subscription Completed\"}],type:\"EQUALS\"}],name:\"Email Subscription Completed\",type:\"CUSTOM_EVENT\"}]}},\"User Detected\":{gtm_ga:{customEvent:{dimension10:{$id:\"\/properties\/user\/properties\/memberTier\",\ndescription:\"Member Tier.  Indicates different privileges on the site\",examples:[\"bronze\",\"gold\",\"platinum\"],type:\"string\"},dimension11:{$id:\"\/properties\/user\/properties\/userType\",description:\"Describes the type of the user.  Often used for different levels of loyalty program, or to differentiate customers from employees. \",examples:[\"cust-platinum\",\"cust-gold\",\"employee\",\"guest\",\"agent\"],type:\"string\"},dimension12:{$id:\"\/properties\/user\/properties\/loyaltyPoints\",description:\"Number of loyalty points \",\nexamples:[100,101,1E3],minimum:0,type:\"integer\"},dimension13:{$id:\"\/properties\/user\/properties\/memberSinceDate\",description:\"Member Join Date. ISO 8601 form (YYYY-MM-DD). Jan 1, 2019 is 2019-01-01\",examples:[\"2001-12-22\",\"2011-01-01\"],pattern:\"^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$\",type:\"string\"},dimension8:{$id:\"\/properties\/user\/properties\/custKey\",description:\"Unique identifier of a customer.  Any id's considered PII must be hashed. \",type:\"string\"},dimension9:{$id:\"\/properties\/user\/properties\/loginStatus\",\ndescription:\"Describes the login state of the user\",examples:[\"logged in\",\"logged out\",\"guest\"],type:\"string\"}},tag:{action:\"detected\",category:\"user\",name:\"UA - User Detected\",nonInteraction:\"true\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"User Detected\"}],type:\"EQUALS\"}],name:\"User Detected\",type:\"CUSTOM_EVENT\"}]}},\"Checkout Option Selected\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/step\",\ndescription:\"Describes a discrete step in the checkout flow.\",examples:[\"cart review\",\"shipping\",\"billing\",\"order review\"],type:\"string\"}},ecommerce:{actionField:{attributes:{option:{$id:\"\/properties\/eventDetails\/properties\/checkoutOption\",description:\"Describes a specific checkout option within a page of the checkout flow. \",examples:[\"gift receipt\",\"use billing address\",\"use saved info\"],type:\"string\"}}},type:\"checkout_option\"},tag:{action:\"checkout option\",category:\"ecommerce\",name:\"UA - Checkout Option Selected\",\nnonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Checkout Option Selected\"}],type:\"EQUALS\"}],name:\"Checkout Option Selected\",type:\"CUSTOM_EVENT\"}]}},\"Video Engaged\":{gtm_ga:{customEvent:{action:{$id:\"\/properties\/video\/properties\/videoEventName\",description:\"Video Event Name\",examples:[\"play\",\"complete\",\"pause\"],type:\"string\"},dimension75:{$id:\"\/properties\/video\/properties\/videoID\",\ndescription:\"Video ID\",examples:[\"YT456789\",\"BC4567890\",\"876546789\"],type:\"string\"},dimension76:{$id:\"\/properties\/video\/properties\/videoName\",description:\"Video Name\",examples:[\"Twitch_FPS\",\"Age of Empires\",\"Halo\"],type:\"string\"},dimension77:{$id:\"\/properties\/video\/properties\/videoPlayerType\",description:\"Video Player Type\",examples:[\"youTube\",\"bright cove\",\"JW Player\",\"vimeo\"],type:\"string\"},label:{$id:\"\/properties\/video\/properties\/videoPlayerType_ID_Name\",description:\"Pipe Delimited Concatenation of Video Player Type | ID | Name\",\nexamples:[\"youTube | YT456789 | Twitch_FPS\",\"brightCove | BC456789 | AOE\"],type:\"string\"}},tag:{category:\"video\",name:\"UA - Video Engaged\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Video Engaged\"}],type:\"EQUALS\"}],name:\"Video Engaged\",type:\"CUSTOM_EVENT\"}]}},\"Product Added\":{gtm_ga:{ecommerce:{actionField:{attributes:{list:{$id:\"\/properties\/list\/properties\/listName\",\ndescription:\"Describes the recommendation zone details when a product is added to cart\",examples:[\"Recommendation| you might also Need | parent\",\"Recommendation| you might also Need | Cross-sell\"],type:\"string\"}}},products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",\nexamples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\n\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",description:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",\ndescription:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension48:{$id:\"\/properties\/price\/properties\/basePrice\",description:\"String representation of MSRP of a product. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",\nexamples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},dimension51:{$id:\"\/properties\/productInfo\/properties\/productFulfillmentMethod\",description:\"Describes the method of fulfillment for an order item\",examples:[\"Pay Online Pickup In Store\",\"Pay Online Ship to Home\"],type:\"string\"},dimension79:{$id:\"\/properties\/productInfo\/properties\/zoneSource\",description:\"Describes the zones where a product is added to cart\",examples:[\"PDP\",\"Cart\"],type:\"string\"},dimension84:{$id:\"\/properties\/productInfo\/properties\/productState\",\ndescription:\"Product state captures current state of product based on scenarios like save for later or move to cart or SDD\",examples:[\"SDD|Available\",\"SDD|Not Available\",\"SDD|Available|No inventory\"],type:\"string\"},dimension93:{$id:\"\/properties\/productInfo\/properties\/tradeinProductName\",description:\"Describes the corresponding tradein product\",examples:[\"Madden NFL 25\",\"PS4\"],type:\"string\"},dimension101:{$id:\"\/properties\/productInfo\/properties\/programName\",description:\"Describes the corresponding program name\",\nexamples:[\"Web Tradein\",\"WIS Tradein\"],type:\"string\"},dimension80:{$id:\"\/properties\/componentInfo\/properties\/componentDetails\",description:\"Describes the recommendation zone details when a product is added to cart\",examples:[\"Recommendation| you might also Need | parent\",\"Recommendation| you might also Need | Cross-sell\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",\nexamples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],\npattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},quantity:{$id:\"\/properties\/quantity\",description:\"Integer number of products being acted upon (added to a cart, removed from wishlist, purchased, reserved)\",examples:[1,2,3,4,5],minimum:1,type:\"integer\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\n\"Medium : Black\",\"Large : Green\"],type:\"string\"},dimension88:{$id:\"\/properties\/productInfo\/properties\/parentProduct\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"},metric44:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"Payment total for the order\",examples:[\"12.20\",\"49.56\",\n\"123.0\",\"201\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric45:{$id:\"\/properties\/productInfo\/properties\/warrantyAdded\",description:\"Number of items purchased in the order\",examples:[1,3,5],minimum:1,type:\"integer\"}},collection:\"\/properties\/product\/items\"},type:\"add\"},tag:{action:\"cart add\",category:\"ecommerce\",name:\"GA - Cart Add\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},\n{key:\"arg1\",type:\"TEMPLATE\",value:\"Product Added\"}],type:\"EQUALS\"}],name:\"Product Added\",type:\"CUSTOM_EVENT\"}]}},\"Email Subscription Started\":{gtm_ga:{customEvent:{dimension24:{$id:\"\/properties\/linkInfo\/properties\/linkRegion\",description:\"Indicates the region on page for a clicked link within the hierarchy [Site \\x3e Page \\x3e Region \\x3e Container \\x3e linkID]\",examples:\"Top Nav;Footer Nav;Hero;Recommended;Also Shopped;Also Bought\".split(\";\"),type:\"string\"}},tag:{action:\"sign up start\",category:\"email\",\nname:\"UA - Email Subscription Started\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Email Subscription Started\"}],type:\"EQUALS\"}],name:\"Email Subscription Started\",type:\"CUSTOM_EVENT\"}]}},\"Trade In Saved\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\n\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},metric17:{$id:\"\/properties\/price\/properties\/tradeInProStoreCreditAmount\",description:\"Amount for a Pro Store Credit Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric18:{$id:\"\/properties\/price\/properties\/tradeInProCashAmount\",description:\"Amount for a Pro Cash Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric19:{$id:\"\/properties\/price\/properties\/tradeInRegularStoreCreditAmount\",\ndescription:\"Amount for a Regular Store Credit Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric20:{$id:\"\/properties\/price\/properties\/tradeInRegularCashtAmount\",description:\"Amount for a Regular Cash Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"}},tag:{action:\"save estimate\",category:\"trade in\",name:\"UA - Trade In Saved\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",\ntype:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Trade In Saved\"}],type:\"EQUALS\"}],name:\"Trade In Saved\",type:\"CUSTOM_EVENT\"}]}},\"Guest Checked Out\":{gtm_ga:{customEvent:{dimension10:{$id:\"\/properties\/user\/properties\/memberTier\",description:\"Member Tier.  Indicates different privileges on the site\",examples:[\"bronze\",\"gold\",\"platinum\"],type:\"string\"},dimension11:{$id:\"\/properties\/user\/properties\/userType\",description:\"Describes the type of the user.  Often used for different levels of loyalty program, or to differentiate customers from employees. \",\nexamples:[\"cust-platinum\",\"cust-gold\",\"employee\",\"guest\",\"agent\"],type:\"string\"},dimension12:{$id:\"\/properties\/user\/properties\/loyaltyPoints\",description:\"Number of loyalty points \",examples:[100,101,1E3],minimum:0,type:\"integer\"},dimension13:{$id:\"\/properties\/user\/properties\/memberSinceDate\",description:\"Member Join Date. ISO 8601 form (YYYY-MM-DD). Jan 1, 2019 is 2019-01-01\",examples:[\"2001-12-22\",\"2011-01-01\"],pattern:\"^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$\",type:\"string\"},dimension8:{$id:\"\/properties\/user\/properties\/custKey\",\ndescription:\"Unique identifier of a customer.  Any id's considered PII must be hashed. \",type:\"string\"},dimension9:{$id:\"\/properties\/user\/properties\/loginStatus\",description:\"Describes the login state of the user\",examples:[\"logged in\",\"logged out\",\"guest\"],type:\"string\"},metric12:1},tag:{action:\"guest - checkout\",category:\"account\",label:\"success\",name:\"UA - Guest Checked Out\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",\nvalue:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Guest Checked Out\"}],type:\"EQUALS\"}],name:\"Guest Checked Out\",type:\"CUSTOM_EVENT\"}]}},\"Cart Viewed\":{gtm_ga:{customEvent:{label:\"\"},ecommerce:{actionField:{attributes:{option:{$id:\"\/properties\/eventDetails\/properties\/checkoutOption\",description:\"Describes a specific checkout option within a page of the checkout flow. \",examples:[\"gift receipt\",\"use billing address\",\"use saved info\"],type:\"string\"},step:{$id:\"\/properties\/eventDetails\/properties\/checkoutStep\",\ndescription:\"Describes a discrete step in the checkout flow. \",examples:[\"Cart Review\",\"Billing Info\",\"Shipping Info\",\"Order Review\"],type:\"string\"}}},products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",\nexamples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),type:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\n\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",description:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",\ndescription:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension48:{$id:\"\/properties\/price\/properties\/basePrice\",description:\"String representation of MSRP of a product. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension79:{$id:\"\/properties\/productInfo\/properties\/zoneSource\",description:\"Describes the zones where a product is viewed\",\nexamples:[\"PDP\",\"Cart\"],type:\"string\"},dimension84:{$id:\"\/properties\/productInfo\/properties\/productState\",description:\"Product state captures current state of product based on scenarios like save for later or move to cart or SDD\",examples:[\"SDD|Available\",\"SDD|Not Available\",\"SDD|Available|No inventory\"],type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",\nexamples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",examples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},name:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",\nexamples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},quantity:{$id:\"\/properties\/quantity\",description:\"Integer number of products being acted upon (added to a cart, removed from wishlist, purchased, reserved)\",\nexamples:[1,2,3,4,5],minimum:1,type:\"integer\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"},dimension88:{$id:\"\/properties\/productInfo\/properties\/parentProduct\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",\nexamples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],type:\"string\"},dimension93:{$id:\"\/properties\/productInfo\/properties\/tradeinProductName\",description:\"Describes the corresponding tradein product\",examples:[\"Madden NFL 25\",\"PS4\"],type:\"string\"},dimension101:{$id:\"\/properties\/productInfo\/properties\/programName\",description:\"Describes the corresponding program name\",examples:[\"Web Tradein\",\"WIS Tradein\"],type:\"string\"},dimension50:{$id:\"\/properties\/item_shipping_method\",description:\"Describes the method or carrier and method of shipment. Should be common terminology within your business. \",\nexamples:\"Regular;Overnight;Overnight AM;Overnight AM Sat;UPS Ground;UPS Air\".split(\";\"),type:\"string\"},dimension103:{$id:\"\/properties\/productInfo\/properties\/shippingOption\",description:\"Describes the shippingOption\",examples:[\"premium\",\"regular\"],type:\"string\"},dimension104:{$id:\"\/properties\/productInfo\/properties\/shippingSubGroup\",description:\"Describes the shippingSubgroup\",examples:[\"SDD\",\"Shipping now\"],type:\"string\"},dimension105:{$id:\"\/properties\/productInfo\/properties\/parentProductID\",description:\"Describes the parentProductID\",\nexamples:[\"168212\",\"168213\"],type:\"string\"},dimension106:{$id:\"\/properties\/productInfo\/properties\/parentProductCategory\",description:\"Describes the parent Product Category\",examples:[\"Consoles\",\"games\"],type:\"string\"},metric43:{$id:\"\/properties\/productInfo\/properties\/cartViewed\",description:\"Number of items purchased in the order\",examples:[\"1\",\"12\",\"112\",\"212\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric44:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"Payment total for the order\",\nexamples:[\"12.20\",\"49.56\",\"123.0\",\"201\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric45:{$id:\"\/properties\/productInfo\/properties\/warrantyAdded\",description:\"Number of items purchased in the order\",examples:[\"1\",\"12\",\"112\",\"212\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"}},collection:\"\/properties\/product\/items\"},type:\"checkout\"},tag:{action:\"checkout funnel\",category:\"ecommerce\",name:\"GA - Cart View\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",\ntype:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Cart Viewed\"}],type:\"EQUALS\"}],name:\"Cart Viewed\",type:\"CUSTOM_EVENT\"}]}},\"Order Viewed\":{gtm_ga:{customEvent:{action:'{\"action\":\"view\"}',dimension35:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderID\",description:\"Unique ID of the Order\",examples:[\"12345\",\"987\",\"GS45678\"],type:\"string\"},dimension36:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderDate\",description:\"Order Date. ISO 8601 form (YYYY-MM-DD). Jan 1, 2019 is 2019-01-01\",\nexamples:[\"2001-12-22\",\"2011-01-01\"],pattern:\"^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$\",type:\"string\"},dimension37:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderStatus\",description:\"Order Status \",examples:[\"cancelled\",\"active\",\"shipped\",\"picked up\"],type:\"string\"},dimension38:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderStoreType\",description:\"Store Type of the order\",examples:[\"online\",\"physical\",\"other\"],type:\"string\"},dimension39:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderShippingStatus\",\ndescription:\"Shipping Status of the Order\",examples:[\"Not Shipped\",\"Shipped\"],type:\"string\"},dimension40:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderMethod\",description:\"Method of order placement\",examples:[\"online\",\"instore\"],type:\"string\"},label:{$id:\"\/properties\/listing\/properties\/listingParams\/properties\/searchInfo\/properties\/searchTermEntered\",description:\"Describes the search keyword exactly as entered by the user.\",examples:[\"red lobster\",\"red lboster\",\"red lbstr\"],type:\"string\"},\nmetric15:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderNumItems\",description:\"Number of items purchased in the order\",examples:[1,3,5],minimum:1,type:\"integer\"},metric16:{$id:\"\/properties\/orderSearch\/properties\/result\/properties\/orderPaymentTotal\",description:\"Payment total for the order\",examples:[\"12.20\",\"49.56\",\"123.0\",\"201\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"}},tag:{category:\"order lookup\",name:\"UA - Order Viewed\",nonInteraction:\"true\",tool:\"universal analytics\",\ntype:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Order Viewed\"}],type:\"EQUALS\"}],name:\"Order Viewed\",type:\"CUSTOM_EVENT\"}]}},\"Filter Clicked\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/filterClicked\/properties\/label\",description:\"GTM specific. Passed to the label variable \",examples:[\"show filters\",\"games\",\"on sale\",\"new releases\"],type:\"string\"}},tag:{action:\"click\",category:\"list filter\",name:\"UA - Filter Click\",\nnonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Filter Clicked\"}],type:\"EQUALS\"}],name:\"Filter Clicked\",type:\"CUSTOM_EVENT\"}]}},\"Navigation Link Clicked\":{gtm_ga:{customEvent:{action:{$id:\"\/properties\/linkInfo\/properties\/linkRegion\",description:\"Indicates the region on page for a clicked link within the hierarchy [Site \\x3e Page \\x3e Region \\x3e Container \\x3e linkID]\",\nexamples:\"Top Nav;Footer Nav;Hero;Recommended;Also Shopped;Also Bought\".split(\";\"),type:\"string\"},dimension24:{$id:\"\/properties\/linkInfo\/properties\/linkRegion\",description:\"Indicates the region on page for a clicked link within the hierarchy [Site \\x3e Page \\x3e Region \\x3e Container \\x3e linkID]\",examples:\"Top Nav;Footer Nav;Hero;Recommended;Also Shopped;Also Bought\".split(\";\"),type:\"string\"},dimension25:{$id:\"\/properties\/linkInfo\/properties\/linkCategories\",description:\"String containing a delimited list of categories (using colon as a delimiter)\",\nexamples:[\"Video Games:PS4:RPG\"],type:\"string\"}},tag:{category:\"navigation\",label:\"LINKHREF\",name:\"UA - Nav Link\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Navigation Link Clicked\"}],type:\"EQUALS\"}],name:\"Navigation Link Clicked\",type:\"CUSTOM_EVENT\"}]}},\"Checkout Step Encountered\":{gtm_ga:{customEvent:{label:{$id:\"\/properties\/eventDetails\/properties\/checkoutStep\",\ndescription:\"Describes a discrete step in the checkout flow. \",examples:[\"Cart Review\",\"Billing Info\",\"Shipping Info\",\"Order Review\"],type:\"string\"}},ecommerce:{actionField:{attributes:{option:{$id:\"\/properties\/eventDetails\/properties\/checkoutOption\",description:\"Describes a specific checkout option within a page of the checkout flow. \",examples:[\"gift receipt\",\"use billing address\",\"use saved info\"],type:\"string\"},step:{$id:\"\/properties\/eventDetails\/properties\/checkoutStep\",description:\"Describes a discrete step in the checkout flow. \",\nexamples:[\"Cart Review\",\"Billing Info\",\"Shipping Info\",\"Order Review\"],type:\"string\"}}},products:{attributes:{brand:{$id:\"\/properties\/productInfo\/properties\/brand\",description:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},category:{$id:\"\/properties\/productInfo\/properties\/category\",description:\"Describes the category of the product or offering within your product heirarchy. \",examples:\"Clothing;Accessories;Sporting Goods;Ocean Cruises;River Cruises;Lake Cruises\".split(\";\"),\ntype:\"string\"},dimension42:{$id:\"\/properties\/productInfo\/properties\/condition\",description:\"Condition of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"New\",\"Used \",\"Good\",\"Fair\",\"Mint\"],type:\"string\"},dimension43:{$id:\"\/properties\/productInfo\/properties\/availability\",description:\"Described the product's availability for sale.\",examples:[\"In Stock\",\"Out of Stcok\",\"Back-Ordered\"],type:\"string\"},dimension44:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",\nexamples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension45:{$id:\"\/properties\/productInfo\/properties\/subGenre\",description:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension47:{$id:\"\/properties\/productInfo\/properties\/platform\",description:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension49:{$id:\"\/properties\/productInfo\/properties\/sku\",\ndescription:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",examples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},dimension93:{$id:\"\/properties\/productInfo\/properties\/tradeinProductName\",description:\"Describes the corresponding tradein product\",examples:[\"Madden NFL 25\",\"PS4\"],\ntype:\"string\"},dimension101:{$id:\"\/properties\/productInfo\/properties\/programName\",description:\"Describes the corresponding program name\",examples:[\"Web Tradein\",\"WIS Tradein\"],type:\"string\"},id:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",examples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},\nname:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},price:{$id:\"\/properties\/price\/properties\/sellingPrice\",description:\"String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.\",examples:[\"200\",\"29.99\",\"50\",\"0\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},\nquantity:{$id:\"\/properties\/quantity\",description:\"Integer number of products being acted upon (added to a cart, removed from wishlist, purchased, reserved)\",examples:[1,2,3,4,5],minimum:1,type:\"integer\"},variant:{$id:\"\/properties\/productInfo\/properties\/variant\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],\ntype:\"string\"},metric68:{$id:\"\/properties\/productInfo\/properties\/beginCheckout\",description:\"beginCheckout instances \",examples:[\"1\",\"0\",\"2\",\"3\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},dimension88:{$id:\"\/properties\/productInfo\/properties\/parentProduct\",description:\"A description of the SKU indicating the options (such as size, color, or dimension) being acted upon. If combining values, a common syntax and ordering should be defined. \",examples:[\"Medium : Red\",\"Medium : Black\",\"Large : Green\"],\ntype:\"string\"},dimension50:{$id:\"\/properties\/item_shipping_method\",description:\"Describes the method or carrier and method of shipment. Should be common terminology within your business. \",examples:\"Regular;Overnight;Overnight AM;Overnight AM Sat;UPS Ground;UPS Air\".split(\";\"),type:\"string\"},dimension103:{$id:\"\/properties\/productInfo\/properties\/shippingOption\",description:\"Describes the shippingOption\",examples:[\"premium\",\"regular\"],type:\"string\"},dimension104:{$id:\"\/properties\/productInfo\/properties\/shippingSubGroup\",\ndescription:\"Describes the shippingSubgroup\",examples:[\"SDD\",\"Shipping now\"],type:\"string\"},dimension105:{$id:\"\/properties\/productInfo\/properties\/parentProductID\",description:\"Describes the parentProductID\",examples:[\"168212\",\"168213\"],type:\"string\"},dimension106:{$id:\"\/properties\/productInfo\/properties\/parentProductCategory\",description:\"Describes the parent Product Category\",examples:[\"Consoles\",\"games\"],type:\"string\"},dimension79:{$id:\"\/properties\/productInfo\/properties\/zoneSource\",description:\"Describes the zones where a product is viewed\",\nexamples:[\"PDP\",\"Cart\",\"Checkout\"],type:\"string\"}},collection:\"\/properties\/product\/items\"},type:\"checkout\"},tag:{action:\"checkout funnel\",category:\"ecommerce\",name:\"UA - Checkout Step Encountered\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Checkout Step Encountered\"}],type:\"EQUALS\"}],name:\"Checkout Step Encountered\",type:\"CUSTOM_EVENT\"}]}},updated_at:\"2019-07-25T18:51:09\",\n\"Trade In Emailed\":{gtm_ga:{customEvent:{dimension52:{$id:\"\/properties\/productInfo\/properties\/name\",description:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},dimension53:{$id:\"\/properties\/productInfo\/properties\/platform\",description:\"The plaform(s) on which the product will operate\",examples:[\"XBox360\",\"Wii\",\"PS3\",\"Atari 2600\"],type:\"string\"},dimension54:{$id:\"\/properties\/productInfo\/properties\/brand\",\ndescription:\"Describes the brand of a product or offering.\",examples:\"Ford Chevrolet Dodge Levis Columbia Patagonia\".split(\" \"),type:\"string\"},dimension55:{$id:\"\/properties\/productInfo\/properties\/genre\",description:\"Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter\",\"Fantasy\",\"Strategy\",\"Simulation\"],type:\"string\"},dimension56:{$id:\"\/properties\/productInfo\/properties\/subGenre\",description:\"Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",\nexamples:[\"Single Player\",\"Multi Player\"],type:\"string\"},dimension57:{$id:\"\/properties\/productInfo\/properties\/genreSubGenre\",description:\"Genre and Sub Genre of the product being displayed, offered, sold or in general - acted upon.\",examples:[\"First Person Shooter:Single Player\",\"First Person Shooter:Multi Player\"],type:\"string\"},dimension58:{$id:\"\/properties\/productInfo\/properties\/productID\",description:\"Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. \",\nexamples:[\"155\",\"65588\",\"987764448\"],type:\"string\"},dimension59:{$id:\"\/properties\/productInfo\/properties\/sku\",description:\"Stock Keeping Unit (SKU) Unique Identifier of specific item (typically) held in inventory.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level below productID for products with SKU variants. \",examples:[\"34567890\",\"4567890\",\"00155-large-cornflower\"],type:\"string\"},label:{$id:\"\/properties\/productInfo\/properties\/name\",\ndescription:\"Name of the product or offering.  Should be unique and 1:1 with productID\",examples:[\"Oceana\",\"Corsica\",\"Flame Tech\",\"Air Jordan 88\"],type:\"string\"},metric17:{$id:\"\/properties\/price\/properties\/tradeInProStoreCreditAmount\",description:\"Amount for a Pro Store Credit Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric18:{$id:\"\/properties\/price\/properties\/tradeInProCashAmount\",description:\"Amount for a Pro Cash Trade-in Offer\",examples:[\"15.28\",\n\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric19:{$id:\"\/properties\/price\/properties\/tradeInRegularStoreCreditAmount\",description:\"Amount for a Regular Store Credit Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric20:{$id:\"\/properties\/price\/properties\/tradeInRegularCashtAmount\",description:\"Amount for a Regular Cash Trade-in Offer\",examples:[\"15.28\",\"22.2\",\"13\"],pattern:\"^[0-9]*(\\\\.[0-9]{1,2})?$\",type:\"string\"},metric4:1},\ntag:{action:\"email estimate\",category:\"trade in\",name:\"UA - Trade In Emailed\",nonInteraction:\"false\",tool:\"universal analytics\",type:\"event\"},trigger:[{customEventFilter:[{parameter:[{key:\"arg0\",type:\"TEMPLATE\",value:\"",["escape",["macro",0],7],"\"},{key:\"arg1\",type:\"TEMPLATE\",value:\"Trade In Emailed\"}],type:\"EQUALS\"}],name:\"Trade In Emailed\",type:\"CUSTOM_EVENT\"}]}}};window._astp.init({dataLayerName:\"dataLayer\",debug:!1,destinationMapping:mapping,validationSchema:{}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Application Downloaded"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Listing Viewed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Promotion Viewed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Listing Item Clicked"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product Removed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"User Registered"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"User Signed Out"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Store Searched"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Page Loaded"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"shipping"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Promo Code Added"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Payment Type Selected"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"User Signed In"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"\\.(avi|css|csv|doc|docx|eps|exe|jpg|js|m4v|mov|mp3|pdf|png|ppt|pptx|rar|svg|tab|txt|vsd|vxd|wav|wma|wmv|xls|xlsx|xml|zip)$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_53($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Promotion Clicked"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Phone Number Clicked"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Order Searched"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_56($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Order Placed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Store Selected"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product Viewed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Email Subscription Completed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Checkout Option Selected"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product Added"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Email Subscription Started"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Guest Checked Out"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Cart Viewed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Order Viewed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Filter Clicked"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Navigation Link Clicked"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Checkout Step Encountered"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Trade In Emailed"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"PICKUP_HOPS",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",115],
      "arg1":"2"
    },{
      "function":"_cn",
      "arg0":["macro",115],
      "arg1":"permit"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Trade In Searched"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Trade In Saved"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Trade In Printed"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"www.gamestop.com"
    },{
      "function":"_re",
      "arg0":["macro",121],
      "arg1":"^\\\/(\\?.*|\\#.*)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"home"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_232($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_233($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"pickup_hops",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"^payment$|^placeOrder$|^shipping$"
    },{
      "function":"_cn",
      "arg0":["macro",121],
      "arg1":"\/checkout\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_319($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",125],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product Added Modal"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product Impression Click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"shipment type selection"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Banner Impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Banner Click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Banner click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"modal popup"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product Option Selected"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"PLP Redirect"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Pagination clicked"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Site Interaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"XAA Interactions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ecommerce"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"curated Promotion"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Error Occurrence"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Internal Search"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Search Cancel"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"XAA Instore Experience"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Video Interaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Power Up Rewards"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"App Banner Interaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"CancelOrder"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Edit Payment"
    },{
      "function":"_eq",
      "arg0":["macro",168],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_500($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Email Subscriptions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SMS opt-in"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Promo Code Removed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Checkout Step error"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Checkout Step updated"
    },{
      "function":"_re",
      "arg0":["macro",121],
      "arg1":"((.*)\\\/products\\\/(.*))|((.*)\\\/cart\\\/(.*))|((.*)\\\/checkout\\\/(.*))|((.*)\\\/order\\\/(.*))"
    },{
      "function":"_eq",
      "arg0":["macro",174],
      "arg1":"shopflow"
    },{
      "function":"_eq",
      "arg0":["macro",175],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",121],
      "arg1":"^\\\/search\\\/(([\\w-]+)(\\\/)?)?(\\?.*|\\#.*)?$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",121],
      "arg1":"\/stores\/"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"store locator"
    },{
      "function":"_re",
      "arg0":["macro",121],
      "arg1":"^\\\/.*\\\/([\\w-]+)(\\\/)?(\\?.*|\\#.*)?$|^\\\/([\\w-]+)(\\?.*|\\#.*)?$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"pdp"
    },{
      "function":"_eq",
      "arg0":["macro",185],
      "arg1":"https:\/\/www.gamestop.com\/video-games\/digital"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_442($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",167],
      "arg1":"amplience-carousel-card guided-card-link"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_476($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",167],
      "arg1":"amplience-carousel-card"
    },{
      "function":"_cn",
      "arg0":["macro",75],
      "arg1":"\/deals\/gamestop-sale"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"(^$|((^|,)10656696_479($|,)))"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1],["add",1,134]],
    [["if",2],["add",2]],
    [["if",3],["add",3]],
    [["if",4],["add",4]],
    [["if",5],["add",5]],
    [["if",6],["add",6,38]],
    [["if",7],["add",7,58]],
    [["if",8],["add",8,43]],
    [["if",10],["add",9]],
    [["if",11],["add",10]],
    [["if",12],["add",11,60]],
    [["if",13,14,15],["add",12]],
    [["if",16],["add",13]],
    [["if",17],["add",14]],
    [["if",18],["add",15]],
    [["if",14,19,20],["add",16]],
    [["if",21],["add",17,32,41,54,62,67,69,75,137,140,143,148,152]],
    [["if",22],["add",18]],
    [["if",23],["add",19,135,142]],
    [["if",24],["add",20]],
    [["if",25],["add",21]],
    [["if",26],["add",22,35,56,139,144]],
    [["if",27],["add",23]],
    [["if",28],["add",24]],
    [["if",29],["add",25,61,136]],
    [["if",30],["add",26]],
    [["if",31],["add",27]],
    [["if",32],["add",28]],
    [["if",33],["add",29]],
    [["if",34],["add",30]],
    [["if",21],["unless",35],["add",31,47,48,132,146]],
    [["if",39],["add",33,39,50,57,66,68,71,96,100,105,126,147,150,106,107,108,109,110,111,112,114,115,116,117,118,119,120,121,122,123,124]],
    [["if",38],["add",34,36,37,40,70,89,163,125,141]],
    [["if",40],["add",42,87,94]],
    [["if",21,35],["add",44,45,46,49,145]],
    [["if",41],["add",51]],
    [["if",42],["add",52]],
    [["if",43],["add",53]],
    [["if",39,44],["add",55]],
    [["if",8,45,46],["add",59,127,133]],
    [["if",8,45,47],["add",59,127,133]],
    [["if",48,49],["add",63]],
    [["if",48,50],["add",64]],
    [["if",21,51],["add",65]],
    [["if",52,53,54],["add",72]],
    [["if",8,9],["add",72],["block",8]],
    [["if",48,53,55],["add",73]],
    [["if",21,56],["add",74]],
    [["if",57],["add",76]],
    [["if",58],["add",77]],
    [["if",59],["add",78]],
    [["if",60],["add",79]],
    [["if",61],["add",80]],
    [["if",62],["add",80]],
    [["if",63],["add",81]],
    [["if",64],["add",82]],
    [["if",65],["add",83]],
    [["if",66],["add",84]],
    [["if",67],["add",85]],
    [["if",68],["add",85]],
    [["if",69],["add",85]],
    [["if",70],["add",85]],
    [["if",71],["add",86]],
    [["if",72],["add",88]],
    [["if",73],["add",90]],
    [["if",74],["add",90]],
    [["if",75],["add",91]],
    [["if",76],["add",92]],
    [["if",77],["add",93]],
    [["if",78],["add",95]],
    [["if",79],["add",97]],
    [["if",80],["add",98]],
    [["if",14,81,82],["add",99]],
    [["if",83],["add",101]],
    [["if",84],["add",101]],
    [["if",85],["add",102]],
    [["if",86],["add",103]],
    [["if",87],["add",104]],
    [["if",39],["unless",88],["add",113]],
    [["if",8,89],["unless",90],["add",128]],
    [["if",8,89,90,94],["add",129],["block",128]],
    [["if",8,91],["add",130],["block",128]],
    [["if",23,95],["add",131]],
    [["if",8,92,93],["add",138],["block",128]],
    [["if",40,96],["add",149]],
    [["if",97,98],["add",151]],
    [["if",14,99,100],["add",153]],
    [["if",14,101,102,103],["add",153]],
    [["if",37,38],["unless",36],["block",31,33,34,35,36,39,41,42,43,44,45,46,47,48,49,50,55,56,57,58,59,60,61,62,66,67,68,69,96,100,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148]]]
},
"runtime":[[50,"__cvt_10656696_278",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","aliasInWindow"]],[52,"e",["require","copyFromWindow"]],[52,"f",["require","setInWindow"]],[52,"g",["require","injectScript"]],[52,"h",["require","makeTableMap"]],[52,"i",["require","getType"]],[52,"j",["require","logToConsole"]],[52,"k",[30,["e","_fbq_gtm_ids"],[7]]],[52,"l",[17,[15,"a"],"pixelId"]],[52,"m",[7,"AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"]],[52,"n",[51,"",[7,"ba","bb"],[55,"bc",[15,"bb"],[46,[22,[2,[15,"bb"],"hasOwnProperty",[7,[15,"bc"]]],[46,[43,[15,"ba"],[15,"bc"],[16,[15,"bb"],[15,"bc"]]]]]]],[36,[15,"ba"]]]],[52,"o",[51,"",[7],[41,"ba"],[3,"ba",["e","fbq"]],[22,[15,"ba"],[46,[36,[15,"ba"]]]],["f","fbq",[51,"",[7],[52,"bb",["e","fbq.callMethod.apply"]],[22,[15,"bb"],[46,["c","fbq.callMethod.apply",[45],[15,"arguments"]]],[46,["c","fbq.queue.push",[15,"arguments"]]]]]],["d","_fbq","fbq"],["b","fbq.queue"],[36,["e","fbq"]]]],[52,"p",["o"]],[52,"q",[39,[17,[15,"a"],"userPropertyList"],["h",[17,[15,"a"],"userPropertyList"],"name","value"],[8]]],[52,"r",[39,[17,[15,"a"],"advancedMatchingList"],["h",[17,[15,"a"],"advancedMatchingList"],"name","value"],[8]]],[52,"s",[39,[17,[15,"a"],"objectPropertyList"],["h",[17,[15,"a"],"objectPropertyList"],"name","value"],[8]]],[52,"t",[39,[20,["i",[17,[15,"a"],"objectPropertiesFromVariable"]],"object"],[17,[15,"a"],"objectPropertiesFromVariable"],[8]]],[52,"u",["n",[15,"t"],[15,"s"]]],[52,"v",[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[39,[20,[17,[15,"a"],"eventName"],"variable"],[17,[15,"a"],"variableEventName"],[17,[15,"a"],"standardEventName"]]]],[52,"w",[39,[20,[2,[15,"m"],"indexOf",[7,[15,"v"]]],[27,1]],"trackSingleCustom","trackSingle"]],[52,"x",[39,[17,[15,"a"],"userId"],[8,"uid",[17,[15,"a"],"userId"]],[8]]],[52,"y",["n",[15,"x"],[15,"r"]]],[52,"z",[39,[20,[17,[15,"a"],"consent"],false],"revoke","grant"]],["p","consent",[15,"z"]],[2,[2,[15,"l"],"split",[7,","]],"forEach",[7,[51,"",[7,"ba"],[22,[20,[2,[15,"k"],"indexOf",[7,[15,"ba"]]],[27,1]],[46,[22,[17,[15,"a"],"disableAutoConfig"],[46,["p","set","autoConfig",false,[15,"ba"]]]],["p","init",[15,"ba"],[15,"y"]],[2,[15,"k"],"push",[7,[15,"ba"]]],["f","_fbq_gtm_ids",[15,"k"],true],[22,[17,[15,"a"],"userProperties"],[46,["p","setUserProperties",[15,"ba"],[15,"q"]]]]]],["p",[15,"w"],[15,"ba"],[15,"v"],[15,"u"]]]]],["g","https://connect.facebook.net/en_US/fbevents.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"fbPixel"]],[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]],[50,"__asp",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],[52,"d",["require","makeTableMap"]],["c","adroll_adv_id",[17,[15,"a"],"customerId"]],["c","adroll_pix_id",[17,[15,"a"],"pixelId"]],[22,[21,[17,[15,"a"],"conversionValueInDollars"],[44]],[46,["c","adroll_conversion_value",[17,[15,"a"],"conversionValueInDollars"]],["c","adroll_currency",[30,[17,[15,"a"],"conversionValueCurrency"],"USD"]]]],[22,[17,[15,"a"],"customData"],[46,["c","adroll_custom_data",["d",[17,[15,"a"],"customData"],"key","value"]]]],[22,[17,[15,"a"],"segmentName"],[46,["c","adroll_segments",[17,[15,"a"],"segmentName"]]]],[22,[17,[15,"a"],"visitorEmail"],[46,["c","adroll_email",[17,[15,"a"],"visitorEmail"]]]],["c","__adroll_loaded",true],[52,"e","https://s.adroll.com/j/roundtrip.js"],["b",[15,"e"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__cvt_10656696_278":{"access_globals":{"keys":[{"key":"fbq","read":true,"write":true,"execute":false},{"key":"_fbq_gtm","read":true,"write":true,"execute":false},{"key":"_fbq","read":false,"write":true,"execute":false},{"key":"_fbq_gtm_ids","read":true,"write":true,"execute":false},{"key":"fbq.callMethod.apply","read":true,"write":false,"execute":true},{"key":"fbq.queue.push","read":false,"write":false,"execute":true},{"key":"fbq.queue","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]},"logging":{"environments":"debug"}},"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}},"__asp":{"access_globals":{"keys":[{"key":"adroll_adv_id","read":true,"write":true,"execute":false},{"key":"adroll_pix_id","read":true,"write":true,"execute":false},{"key":"adroll_conversion_value","read":true,"write":true,"execute":false},{"key":"adroll_currency","read":true,"write":true,"execute":false},{"key":"adroll_custom_data","read":true,"write":true,"execute":false},{"key":"adroll_segments","read":true,"write":true,"execute":false},{"key":"adroll_email","read":true,"write":true,"execute":false},{"key":"__adroll_loaded","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/s.adroll.com\/j\/roundtrip.js"]}}}
,"sandboxed_scripts":["__cvt_10656696_278"]
,"security_groups":{
"nonGoogleScripts":["__cegg","__asp"]}

};
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self,D=function(n,v){var w=n.split("."),q=C;w[0]in q||"undefined"==typeof q.execScript||q.execScript("var "+w[0]);for(var t;w.length&&(t=w.shift());)w.length||void 0===v?q=q[t]&&q[t]!==Object.prototype[t]?q[t]:q[t]={}:q[t]=v};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E,F=function(){};
(function(){function n(h,m){h=h||"";m=m||{};for(var y in v)v.hasOwnProperty(y)&&(m.N&&(m["fix_"+y]=!0),m.G=m.G||m["fix_"+y]);var z={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},e={comment:function(){var a=h.indexOf("--\x3e");if(0<=a)return{content:h.substr(4,a),length:a+3}},endTag:function(){var a=h.match(q);if(a)return{tagName:a[1],length:a[0].length}},atomicTag:function(){var a=e.startTag();if(a){var b=h.slice(a.length);
if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,g:a.g,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=h.match(w);if(a){var b={};a[2].replace(t,function(c,d,k,g,r){var u=k||g||r||B.test(d)&&d||null,l=document.createElement("div");l.innerHTML=u;b[d]=l.textContent||l.innerText||u});return{tagName:a[1],g:b,s:!!a[3],length:a[0].length}}},chars:function(){var a=h.indexOf("<");
return{length:0<=a?a:h.length}}},f=function(){for(var a in z)if(z[a].test(h)){var b=e[a]();return b?(b.type=b.type||a,b.text=h.substr(0,b.length),h=h.slice(b.length),b):null}};m.G&&function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.H=function(){return this[this.length-1]};c.v=function(l){var p=this.H();return p&&p.tagName&&p.tagName.toUpperCase()===l.toUpperCase()};c.V=function(l){for(var p=
0,x;x=this[p];p++)if(x.tagName===l)return!0;return!1};var d=function(l){l&&"startTag"===l.type&&(l.s=a.test(l.tagName)||l.s);return l},k=f,g=function(){h="</"+c.pop().tagName+">"+h},r={startTag:function(l){var p=l.tagName;"TR"===p.toUpperCase()&&c.v("TABLE")?(h="<TBODY>"+h,u()):m.oa&&b.test(p)&&c.V(p)?c.v(p)?g():(h="</"+l.tagName+">"+h,u()):l.s||c.push(l)},endTag:function(l){c.H()?m.W&&!c.v(l.tagName)?g():c.pop():m.W&&(k(),u())}},u=function(){var l=h,p=d(k());h=l;if(p&&r[p.type])r[p.type](p)};f=function(){u();
return d(k())}}();return{append:function(a){h+=a},ea:f,sa:function(a){for(var b;(b=f())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var a=h;h="";return a},ta:function(){return h},stack:[]}}var v=function(){var h={},m=this.document.createElement("div");m.innerHTML="<P><I></P></I>";h.va="<P><I></P></I>"!==m.innerHTML;m.innerHTML="<P><i><P></P></i></P>";h.ua=2===m.childNodes.length;return h}(),w=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
q=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,t=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,B=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;n.supports=v;for(var A in v);E=n})();
(function(){function n(){}function v(e){return void 0!==e&&null!==e}function w(e,f,a){var b,c=e&&e.length||0;for(b=0;b<c;b++)f.call(a,e[b],b)}function q(e,f,a){for(var b in e)e.hasOwnProperty(b)&&f.call(a,b,e[b])}function t(e,f){q(f,function(a,b){e[a]=b});return e}function B(e,f){e=e||{};q(f,function(a,b){v(e[a])||(e[a]=b)});return e}function A(e){try{return y.call(e)}catch(a){var f=[];w(e,function(b){f.push(b)});return f}}var h={J:n,K:n,L:n,M:n,O:n,P:function(e){return e},done:n,error:function(e){throw e;
},fa:!1},m=this;if(!m.postscribe){var y=Array.prototype.slice,z=function(){function e(a,b,c){var d="data-ps-"+b;if(2===arguments.length){var k=a.getAttribute(d);return v(k)?String(k):k}v(c)&&""!==c?a.setAttribute(d,c):a.removeAttribute(d)}function f(a,b){var c=a.ownerDocument;t(this,{root:a,options:b,l:c.defaultView||c.parentWindow,i:c,o:E("",{N:!0}),u:[a],B:"",C:c.createElement(a.nodeName),j:[],h:[]});e(this.C,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.m&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.U(a):this.D(a)};f.prototype.U=function(a){var b={type:"function",value:a.name||a.toString()};this.A(b);a.call(this.l,this.i);this.I(b)};f.prototype.D=function(a){this.o.append(a);for(var b,c=[],d,k;(b=this.o.ea())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(k=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ka(c);d&&this.X(b);k&&this.Y(b)};f.prototype.ka=function(a){var b=this.R(a);
b.F&&(b.Z=this.B+b.F,this.B+=b.da,this.C.innerHTML=b.Z,this.ia())};f.prototype.R=function(a){var b=this.u.length,c=[],d=[],k=[];w(a,function(g){c.push(g.text);if(g.g){if(!/^noscript$/i.test(g.tagName)){var r=b++;d.push(g.text.replace(/(\/?>)/," data-ps-id="+r+" $1"));"ps-script"!==g.g.id&&"ps-style"!==g.g.id&&k.push("atomicTag"===g.type?"":"<"+g.tagName+" data-ps-proxyof="+r+(g.s?" />":">"))}}else d.push(g.text),k.push("endTag"===g.type?g.text:"")});return{wa:a,raw:c.join(""),F:d.join(""),da:k.join("")}};
f.prototype.ia=function(){for(var a,b=[this.C];v(a=b.shift());){var c=1===a.nodeType;if(!c||!e(a,"proxyof")){c&&(this.u[e(a,"id")]=a,e(a,"id",null));var d=a.parentNode&&e(a.parentNode,"proxyof");d&&this.u[d].appendChild(a)}b.unshift.apply(b,A(a.childNodes))}};f.prototype.X=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.src=a.g.src||a.g.ma;a.src&&this.j.length?this.m=a:this.A(a);var c=this;this.ja(a,function(){c.I(a)})};f.prototype.Y=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.type=
a.g.type||a.g.TYPE||"text/css";this.la(a);b&&this.write()};f.prototype.la=function(a){var b=this.T(a);this.aa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.T=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);q(a.g,function(c,d){b.setAttribute(c,d)});return b};f.prototype.aa=function(a){this.D('<span id="ps-style"/>');var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,
b)};f.prototype.A=function(a){a.ba=this.h;this.h=[];this.j.unshift(a)};f.prototype.I=function(a){a!==this.j[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.j.shift(),this.write.apply(this,a.ba),!this.j.length&&this.m&&(this.A(this.m),this.m=null))};f.prototype.ja=function(a,b){var c=this.S(a),d=this.ha(c),k=this.options.J;a.src&&(c.src=a.src,this.ga(c,d?k:function(){b();k()}));try{this.$(c),a.src&&!d||b()}catch(g){this.options.error(g),b()}};f.prototype.S=function(a){var b=
this.i.createElement(a.tagName);q(a.g,function(c,d){b.setAttribute(c,d)});a.content&&(b.text=a.content);return b};f.prototype.$=function(a){this.D('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.ga=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;t(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var k={message:"remote script failed "+
a.src};c();d(k);b()}})};f.prototype.ha=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.fa&&a.src&&a.hasAttribute("async"))};return f}();m.postscribe=function(){function e(){var d=b.shift(),k;d&&(k=d[d.length-1],k.K(),d.stream=f.apply(null,d),k.L())}function f(d,k,g){function r(x){x=g.P(x);c.write(x);g.M(x)}c=new z(d,g);c.id=a++;c.name=g.name||c.id;var u=d.ownerDocument,l={close:u.close,open:u.open,write:u.write,writeln:u.writeln};t(u,{close:n,open:n,write:function(){return r(A(arguments).join(""))},
writeln:function(){return r(A(arguments).join("")+"\n")}});var p=c.l.onerror||n;c.l.onerror=function(x,G,H){g.error({qa:x+" - "+G+":"+H});p.apply(c.l,arguments)};c.write(k,function(){t(u,l);c.l.onerror=p;g.done();c=null;e()});return c}var a=0,b=[],c=null;return t(function(d,k,g){"function"===typeof g&&(g={done:g});g=B(g,h);d=/^#/.test(d)?m.document.getElementById(d.substr(1)):d.pa?d[0]:d;var r=[d,k,g];d.ca={cancel:function(){r.stream?r.stream.abort():r[1]=n}};g.O(r);b.push(r);c||e();return d.ca},
{streams:{},ra:b,na:z})}();F=m.postscribe}})();D("google_tag_manager_external.postscribe.installPostscribe",function(){var n=window.google_tag_manager;n&&(n.postscribe||(n.postscribe=window.postscribe||F))});D("google_tag_manager_external.postscribe.getPostscribe",function(){return window.google_tag_manager.postscribe});}).call(this);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.yi=b.prototype},na=this||self,sa=function(a){if(a&&a!=na)return oa(a.document);null===ra&&(ra=oa(na.document));return ra},ta=/^[\w+/_-]+[=]{0,2}$/,ra=null,oa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ta.test(c))return c}return""},ua=function(a){return a};var xa=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.s=!1;this.K={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.s||(a="dust."+a,this.K.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Ca=function(a,b){b="dust."+b;a.s||a.K.hasOwnProperty(b)||delete a.D[b]};var Da=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=Da.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Da?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Jb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Da(a)};var Ea=function(a,b){za(b)?delete a.g[Number(b)]:Ca(a.o,b)};aa=Da.prototype;aa.pop=function(){return this.g.pop()};
aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new Da(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ga=function(){function a(f,g){if(b[f]){if(b[f].Hc+g>b[f].max)throw Error("Quota exceeded");b[f].Hc+=g}}var b={},c=void 0,d=void 0,e={Ph:function(f){c=f},Af:function(){c&&a(c,1)},Rh:function(f){d=f},Ua:function(f){d&&a(d,f)},bi:function(f,g){b[f]=b[f]||{Hc:0};b[f].max=g},vh:function(f){return b[f]&&b[f].Hc||0},reset:function(){b={}},jh:a};e.onFnConsume=e.Ph;e.consumeFn=e.Af;e.onStorageConsume=e.Rh;e.consumeStorage=e.Ua;e.setMax=e.bi;e.getConsumed=e.vh;e.reset=e.reset;e.consume=e.jh;return e};var Ia=function(a,b){this.s=a;this.L=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Aa;this.g=this.K=void 0};Ia.prototype.add=function(a,b){Ja(this,a,b,!1)};var Ja=function(a,b,c,d){if(!a.o.s)if(a.s.Ua(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.K["dust."+b]=!0}else a.o.set(b,c)};
Ia.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ua(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ia.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ia.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ka=function(a){var b=new Ia(a.s,a);a.K&&(b.K=a.K);b.L=a.L;b.g=a.g;return b};var La={},Na=function(a,b){La[a]=La[a]||[];La[a][b]=!0},Oa=function(a){for(var b=[],c=La[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Pa=function(){},Qa=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Ra=function(a){return"number"==typeof a&&!isNaN(a)},Sa=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Na("TAGGING",4):Na("TAGGING",5);return b},Ta=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ua=function(a,b){if(a&&Sa(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Wa=function(a,b){if(!Ra(a)||!Ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ya=function(a,b){for(var c=new Xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},$a=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ab=
function(a){return Math.round(Number(a))||0},bb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},gb=function(a){var b=[];if(Sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},hb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ib=function(){return(new Date).getTime()},Xa=function(){this.prefix="gtm.";this.values={}};Xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Xa.prototype.get=function(a){return this.values[this.prefix+a]};
var jb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},kb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},lb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ob=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},rb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},sb=function(a,b){var c=n;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ta(b,d))return}return d},ub=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},wb=/^\w{1,9}$/,xb=function(a){var b=[];Za(a,function(c,d){wb.test(c)&&d&&b.push(c)});return b.join(",")};var yb=function(a,b){Aa.call(this);this.L=a;this.sa=b};ma(yb,Aa);yb.prototype.toString=function(){return this.L};yb.prototype.Jb=function(){return new Da(Ba(this))};yb.prototype.g=function(a,b){a.s.Af();return this.sa.apply(new zb(this,a),Array.prototype.slice.call(arguments,1))};yb.prototype.o=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Bb=function(a,b){for(var c,d=0;d<b.length&&!(c=Ab(a,b[d]),c instanceof xa);d++);return c},Ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof yb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.K;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},zb=function(a,b){this.o=a;this.g=b},A=function(a,b){var c=a.g;return Sa(b)?Ab(c,b):b},F=function(a){return a.o.L};var Db=function(){Aa.call(this)};ma(Db,Aa);Db.prototype.Jb=function(){return new Da(Ba(this))};var Gb={control:function(a,b){return new xa(a,A(this,b))},fn:function(a,b,c){var d=this.g,e=A(this,b);if(!(e instanceof Da))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ua(a.length+f.length);return new yb(a,function(){return function(g){var h=Ka(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=A(this,l[m]),l[m]instanceof xa)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Da(l));var r=Bb(h,f);if(r instanceof xa)return"return"===r.g?r.o:r}}())},list:function(a){var b=this.g.s;b.Ua(arguments.length);for(var c=new Da,d=0;d<arguments.length;d++){var e=A(this,arguments[d]);"string"===typeof e&&b.Ua(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Db,d=0;d<arguments.length-1;d+=2){var e=A(this,arguments[d])+"",f=A(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ua(g);c.set(e,f)}return c},undefined:function(){}};var Hb=function(){this.s=Ga();this.g=new Ia(this.s)},Ib=function(a,b,c){var d=new yb(b,c);d.s=!0;a.g.set(b,d)};Hb.prototype.Lc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Hb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=Ab(this.g,arguments[c]);return b};Hb.prototype.D=function(a,b){var c=Ka(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=Ab(c,arguments[e]);return d};var Jb=function(a){if(a instanceof Jb)return a;this.za=a};Jb.prototype.toString=function(){return String(this.za)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Kb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Lb=function(a){if(null==a)return String(a);var b=Kb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Mb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Nb=function(a){if(!a||"object"!=Lb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Mb(a,"constructor")&&!Mb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Mb(a,b)},G=function(a,b){var c=b||("array"==Lb(a)?[]:{}),d;for(d in a)if(Mb(a,d)){var e=a[d];"array"==Lb(e)?("array"!=Lb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Nb(e)?(Nb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Qb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ta(d,h);if(-1<l)return e[l];if(h instanceof Da){var m=[];d.push(h);e.push(m);for(var p=h.Jb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof Db){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof yb){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Pb(t[v],b,!!c);var w=b?b.s:Ga(),z=new Ia(w);
b&&(z.g=b.g);return g(h.g.apply(h,[z].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ta(d,
h);if(-1<l)return e[l];if(Sa(h)||$a(h)){var m=new Da([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Nb(h)){var q=new Db;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new yb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Qb(A(this,v[w]),b,!!c);return g((0,this.g.L)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Rb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Sb=function(a){if(void 0===a||Sa(a)||Nb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Da)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Da(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Da(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Da(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Rb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ea(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Da(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Rb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ea(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wb=new xa("break"),Xb=new xa("continue"),Yb=function(a,b){return A(this,a)+A(this,b)},Zb=function(a,b){return A(this,a)&&A(this,b)},$b=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);if(!(c instanceof Da))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ta(Vb,b)){var d=Qb(c);return Pb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Da){if(a.has(b)){var e=a.get(b);if(e instanceof yb){var f=Rb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ta(Ub.supportedMethods,b)){var g=
Rb(c);g.unshift(this.g);return Ub[b].apply(a,g)}}if(a instanceof yb||a instanceof Db){if(a.has(b)){var h=a.get(b);if(h instanceof yb){var l=Rb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof yb?a.L:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Rb(c))}if(a instanceof Jb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},ac=function(a,b){a=A(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=A(this,b);c.set(a,d);return d},bc=function(a){var b=Ka(this.g),c=Bb(b,Array.prototype.slice.apply(arguments));if(c instanceof xa)return c},cc=function(){return Wb},dc=function(a){for(var b=A(this,a),c=0;c<b.length;c++){var d=A(this,b[c]);if(d instanceof xa)return d}},ec=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=A(this,arguments[c+1]);Ja(b,d,e,!0)}}},fc=function(){return Xb},ic=function(a,b,c){var d=new Da;b=A(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,A(this,f))},jc=function(a,b){return A(this,a)/A(this,b)},kc=function(a,b){a=A(this,a);b=A(this,b);var c=a instanceof Jb,d=b instanceof Jb;return c||d?c&&d?a.za==b.za:!1:a==b},lc=function(a){for(var b,c=0;c<arguments.length;c++)b=
A(this,arguments[c]);return b};function mc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Bb(f,d);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}}}function nc(a,b,c){if("string"===typeof b)return mc(a,function(){return b.length},function(f){return f},c);if(b instanceof Db||b instanceof Da||b instanceof yb){var d=b.Jb(),e=d.length();return mc(a,function(){return e},function(f){return d.get(f)},c)}}
var oc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return nc(function(e){d.set(a,e);return d},b,c)},pc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return nc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},qc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return nc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)},sc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return rc(function(e){d.set(a,e);return d},b,c)},tc=
function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return rc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},uc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return rc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)};
function rc(a,b,c){if("string"===typeof b)return mc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Da)return mc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var vc=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,p.get(u))}}var f=A(this,a);if(!(f instanceof Da))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=A(this,d);var h=Ka(g);for(e(g,h);Ab(h,b);){var l=Bb(h,d);if(l instanceof xa){if("break"===l.g)break;if("return"===l.g)return l}var m=Ka(g);e(h,m);Ab(m,c);h=m}},wc=function(a){a=A(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},xc=function(a,b){var c;a=A(this,a);b=A(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Db||a instanceof Da||a instanceof yb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof Jb)return;return c},yc=function(a,b){return A(this,a)>A(this,
b)},zc=function(a,b){return A(this,a)>=A(this,b)},Ac=function(a,b){a=A(this,a);b=A(this,b);a instanceof Jb&&(a=a.za);b instanceof Jb&&(b=b.za);return a===b},Dc=function(a,b){return!Ac.call(this,a,b)},Ec=function(a,b,c){var d=[];A(this,a)?d=A(this,b):c&&(d=A(this,c));var e=Bb(this.g,d);if(e instanceof xa)return e},Fc=function(a,b){return A(this,a)<A(this,b)},Gc=function(a,b){return A(this,a)<=A(this,b)},Hc=function(a,b){return A(this,a)%A(this,b)},Ic=function(a,b){return A(this,a)*A(this,b)},Jc=function(a){return-A(this,
a)},Kc=function(a){return!A(this,a)},Lc=function(a,b){return!kc.call(this,a,b)},Pc=function(){return null},Qc=function(a,b){return A(this,a)||A(this,b)},Rc=function(a,b){var c=A(this,a);A(this,b);return c},Sc=function(a){return A(this,a)},Tc=function(a){return Array.prototype.slice.apply(arguments)},Uc=function(a){return new xa("return",A(this,a))},Vc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
yb||a instanceof Da||a instanceof Db)&&a.set(b,c);return c},Wc=function(a,b){return A(this,a)-A(this,b)},Xc=function(a,b,c){a=A(this,a);var d=A(this,b),e=A(this,c);if(!Sa(d)||!Sa(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===A(this,d[h]))if(f=A(this,e[h]),f instanceof xa){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=A(this,e[e.length-1]),f instanceof xa&&("return"===f.g||"continue"===
f.g)))return f},Yc=function(a,b,c){return A(this,a)?A(this,b):A(this,c)},Zc=function(a){a=A(this,a);return a instanceof yb?"function":typeof a},$c=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},ad=function(a,b,c,d){var e=A(this,d);if(A(this,c)){var f=Bb(this.g,e);if(f instanceof xa){if("break"===f.g)return;if("return"===f.g)return f}}for(;A(this,a);){var g=Bb(this.g,e);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}A(this,
b)}},bd=function(a){return~Number(A(this,a))},cd=function(a,b){return Number(A(this,a))<<Number(A(this,b))},dd=function(a,b){return Number(A(this,a))>>Number(A(this,b))},ed=function(a,b){return Number(A(this,a))>>>Number(A(this,b))},fd=function(a,b){return Number(A(this,a))&Number(A(this,b))},gd=function(a,b){return Number(A(this,a))^Number(A(this,b))},hd=function(a,b){return Number(A(this,a))|Number(A(this,b))};var jd=function(){this.g=new Hb;id(this)};jd.prototype.Lc=function(a){return kd(this.g.o(a))};
var md=function(a,b){return kd(ld.g.D(a,b))},id=function(a){var b=function(d,e){var f=a.g,g=String(e);Gb.hasOwnProperty(d)&&Ib(f,g||d,Gb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ib(a.g,String(d),e)};c(0,Yb);c(1,Zb);c(2,$b);c(3,ac);c(53,bc);c(4,cc);c(5,dc);c(52,ec);c(6,fc);c(9,dc);c(50,ic);c(10,jc);c(12,kc);c(13,lc);c(47,oc);c(54,pc);c(55,qc);c(63,vc);c(64,sc);c(65,tc);c(66,uc);c(15,wc);c(16,xc);c(17,xc);c(18,yc);c(19,zc);c(20,Ac);c(21,Dc);c(22,Ec);
c(23,Fc);c(24,Gc);c(25,Hc);c(26,Ic);c(27,Jc);c(28,Kc);c(29,Lc);c(45,Pc);c(30,Qc);c(32,Rc);c(33,Rc);c(34,Sc);c(35,Sc);c(46,Tc);c(36,Uc);c(43,Vc);c(37,Wc);c(38,Xc);c(39,Yc);c(40,Zc);c(41,$c);c(42,ad);c(58,bd);c(57,cd);c(60,dd);c(61,ed);c(56,fd);c(62,gd);c(59,hd)},rd=function(){var a=ld,b=qd();Ib(a.g,"require",b)},sd=function(a,b){a.g.g.L=b};
function kd(a){if(a instanceof xa||a instanceof yb||a instanceof Da||a instanceof Db||a instanceof Jb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var td=function(){var a=function(b){return{toString:function(){return b}}};return{bg:a("consent"),ad:a("consent_always_fire"),te:a("convert_case_to"),ue:a("convert_false_to"),ve:a("convert_null_to"),we:a("convert_true_to"),xe:a("convert_undefined_to"),ii:a("debug_mode_metadata"),Ta:a("function"),Qg:a("instance_name"),Sg:a("live_only"),Tg:a("malware_disabled"),Ug:a("metadata"),li:a("original_activity_id"),mi:a("original_vendor_template_id"),Wg:a("once_per_event"),kf:a("once_per_load"),oi:a("priority_override"),
rf:a("setup_tags"),sf:a("tag_id"),tf:a("teardown_tags")}}();
var ud=[],vd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wd=function(a){return vd[a]},xd=/[\x00\x22\x26\x27\x3c\x3e]/g;var yd=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;ud[4]=function(a){return String(a).replace(yd,wd)};var Bd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Dd=function(a){return Cd[a]};ud[7]=function(a){return String(a).replace(Bd,Dd)};
ud[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bd,Dd)+"'"}};var Ld=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Md={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nd=function(a){return Md[a]};ud[16]=function(a){return a};var Pd;
var Qd=[],Rd=[],Sd=[],Td=[],Ud=[],Vd={},Wd,Xd,Yd,Zd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$d=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Vd[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.xf&&b.xf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===td.ad.toString()&&a[f]){}return void 0!==d?d(e):Pd(c,e,b)},be=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ae(a[e],b,c));return d},ae=function(a,b,c){if(Sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ae(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Qd[f];if(!g||b.Ud(g))return;c[f]=!0;try{var h=be(g,b,c);h.vtp_gtmEventId=b.id;d=$d(h,b);Yd&&(d=Yd.kh(d,h))}catch(z){b.Mf&&b.Mf(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[ae(a[l],b,c)]=ae(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=ae(a[p],b,c);Xd&&(m=m||q===Xd.zc);d.push(q)}return Xd&&m?Xd.nh(d):d.join("");case "escape":d=ae(a[1],b,c);if(Xd&&Sa(a[1])&&"macro"===a[1][0]&&Xd.Dh(a))return Xd.Uh(d);d=
String(d);for(var r=2;r<a.length;r++)ud[a[r]]&&(d=ud[a[r]](d));return d;case "tag":var u=a[1];if(!Td[u])throw Error("Unable to resolve tag reference "+u+".");return d={Ef:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=ce(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ce=function(a,b,c){try{return Wd(be(a,b,c))}catch(d){JSON.stringify(a)}return 2};var de=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(de,Error);function ee(a,b){if(Sa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ee(a[c],b[c])}};var fe=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(fe,Error);var he=function(){return function(a,b){a instanceof fe||(a=new fe(a,ge));b&&a.g.push(b);throw a;}};function ge(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ra(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ie=null,le=function(a){function b(q){for(var r=0;r<q.length;r++)d[q[r]]=!0}var c=[],d=[];ie=je(a);for(var e=0;e<Rd.length;e++){var f=Rd[e],g=ke(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Td.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},ke=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ie(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=ie(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},je=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ce(Sd[c],a));return b[c]}};var me={kh:function(a,b){b[td.te]&&"string"===typeof a&&(a=1==b[td.te]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.ve)&&null===a&&(a=b[td.ve]);b.hasOwnProperty(td.xe)&&void 0===a&&(a=b[td.xe]);b.hasOwnProperty(td.we)&&!0===a&&(a=b[td.we]);b.hasOwnProperty(td.ue)&&!1===a&&(a=b[td.ue]);return a}};var ne=function(){this.g={}};function oe(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new de(c,d,g);}}function pe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));oe(e,b,d,g);oe(f,b,d,g)}}}};var te=function(a){var b=qe.F,c=this;this.o=new ne;this.g={};var d={},e=pe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Za(a,function(f,g){var h={};Za(g,function(l,m){var p=re(l,m);h[l]=p.assert;d[l]||(d[l]=p.O)});c.g[f]=function(l,m){var p=h[l];if(!p)throw se(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ve=function(a){return ue.g[a]||
function(){}};function re(a,b){var c=Zd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=se;try{return $d(c)}catch(d){return{assert:function(e){throw new de(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function se(a,b,c){return new de(a,b,c)};var we=!1;var xe={};xe.hi=bb('');xe.qh=bb('');var ye=we,ze=xe.qh,Ae=xe.hi;
var Oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Oe(b,"/*")&&(b=b.slice(0,-2));Oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Qe=/^[a-z0-9-]+$/i,Re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ue=function(a,b){var c;if(!(c=!Se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Re.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Ve=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,We={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ve.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof yb?p="Fn":l instanceof Da?p="List":l instanceof Db?p="DustMap":
l instanceof Jb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(We[h]||h)+".");}}};function Xe(a){return""+a}
function Ye(a,b){var c=[];return c};var Ze=function(a,b){var c=new yb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=A(this,d[e]);return b.apply(this,d)});c.s=!0;return c},$e=function(a,b){var c=new Db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Qa(e)?c.set(d,Ze(a+"_"+d,e)):(Ra(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var af=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Db;return d=$e("AssertApiSubject",c)};var bf=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Db;
return d=$e("AssertThatSubject",c)};function cf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Qb(arguments[d],c));return Pb(a.apply(null,b))}}var ef=function(){for(var a=Math,b=df,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=cf(a[e].bind(a)))}return c};var ff=function(a){var b;return b};var gf=function(a){var b;return b};var hf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var jf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var kf=function(a){H(F(this),["message:?string"],arguments);};var lf=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Wa(a,b)};var mf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.gh.apply(null,Array.prototype.slice.call(arguments,1))};var nf=function(){mf(this,"read_container_data");var a=new Db;a.set("containerId",'GTM-NF2SZTJ');a.set("version",'366');a.set("environmentName",'');a.set("debugMode",ye);a.set("previewMode",Ae);a.set("environmentMode",ze);a.s=!0;return a};var of=function(){return(new Date).getTime()};var pf=function(a){if(null===a)return"null";if(a instanceof Da)return"array";if(a instanceof yb)return"function";if(a instanceof Jb){a=a.za;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var qf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(ye||Ae)&&a.call(this,e.message)}}}return{parse:b(function(c){return Pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Qb(c))})}};var rf=function(a){return ab(Qb(a,this.g))};var sf=function(a){return Number(Qb(a,this.g))};var tf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var uf=function(a,b,c){var d=null,e=!1;H(F(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new Db;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof Db&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var df="floor ceil round max min abs pow sqrt".split(" ");var vf=function(){var a={};return{wh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ci:function(b,c){a[b]=c},reset:function(){a={}}}},wf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var xf=function(){this.g={};this.o={};};xf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
xf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Qa(b)?Ze(a,b):$e(a,b)};
var zf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Qa(c)?Ze(b,c):$e(b,c)};function yf(a,b){var c=void 0;return c};function Af(){var a={};return a};var J={Gb:"_ee",Dd:"_syn",ri:"_uei",wd:"_eu",ni:"_pci",jd:"event_callback",qc:"event_timeout",aa:"gtag.config",wa:"gtag.get",va:"purchase",cb:"refund",Qa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",kg:"view_cart",Be:"add_to_wishlist",Ga:"view_item",Ae:"view_promotion",ze:"select_promotion",dd:"select_item",mc:"view_item_list",ye:"add_payment_info",jg:"add_shipping_info",Ia:"value_key",Ha:"value_callback",ja:"allow_ad_personalization_signals",rd:"restricted_data_processing",wb:"allow_google_signals",
ka:"cookie_expires",zb:"cookie_update",Db:"session_duration",wc:"session_engaged_time",ya:"user_properties",Ka:"transport_url",R:"ads_data_redaction",vd:"user_data",sc:"first_party_collection",C:"ad_storage",I:"analytics_storage",bd:"region",se:"wait_for_update"};
J.af=[J.va,J.cb,J.Qa,J.$a,J.ab,J.kg,J.Be,J.Ga,J.Ae,J.ze,J.mc,J.dd,J.ye,J.jg];J.$e=[J.ja,J.wb,J.zb];J.bf=[J.ka,J.qc,J.Db,J.wc];var Cf=function(a){Na("GTM",a)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ef=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ff,Gf=function(){if(void 0===Ff){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ua,createScript:ua,createScriptURL:ua})}catch(c){na.console&&na.console.error(c.message)}Ff=a}else Ff=a}return Ff};var If=function(a,b){this.g=b===Hf?a:""};If.prototype.toString=function(){return this.g+""};var Hf={},Jf=function(a){var b=Gf(),c=b?b.createScriptURL(a):a;return new If(c,Hf)};var Kf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Lf;a:{var Mf=na.navigator;if(Mf){var Nf=Mf.userAgent;if(Nf){Lf=Nf;break a}}Lf=""}var Of=function(a){return-1!=Lf.indexOf(a)};var Qf=function(a,b,c){this.g=c===Pf?a:""};Qf.prototype.toString=function(){return this.g.toString()};var Rf=function(a){return a instanceof Qf&&a.constructor===Qf?a.g:"type_error:SafeHtml"},Pf={},Sf=function(a){var b=Gf(),c=b?b.createHTML(a):a;return new Qf(c,null,Pf)},Tf=new Qf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Pf);var Uf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Rf(Tf);return!c.parentElement}),Vf=function(a,b){if(Uf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Rf(b)},Wf=function(a,b){a.src=b instanceof If&&b.constructor===If?b.g:"type_error:TrustedResourceUrl";var c=sa(a.ownerDocument&&a.ownerDocument.defaultView);
c&&a.setAttribute("nonce",c)};var n=window,K=document,Xf=navigator,Yf=K.currentScript&&K.currentScript.src,Zf=function(a,b){var c=n[a];n[a]=void 0===c?b:c;return n[a]},$f=function(a){var b=K.getElementsByTagName("script")[0]||K.body||K.head;b.parentNode.insertBefore(a,b)},ag=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cg=function(a,b,c,d){var e=K.createElement("script");
d&&Za(d,function(g,h){g=g.toLowerCase();bg.hasOwnProperty(g)||e.setAttribute(g,h)});e.type="text/javascript";e.async=!0;Wf(e,Jf(a));ag(e,b);c&&(e.onerror=c);var f=sa();f&&e.setAttribute("nonce",f);$f(e);return e},dg=function(){if(Yf){var a=Yf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},eg=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||K.body||
K.head;d.parentNode.insertBefore(c,d);ag(c,b);void 0!==a&&(c.src=a);return c},fg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){n.setTimeout(a,0)},ig=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kg=function(a){var b=K.createElement("div"),c=Sf("A<div>"+a+"</div>");Vf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},lg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},mg=function(a){Xf.sendBeacon&&Xf.sendBeacon(a)||fg(a)},ng=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var og=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var pg=new og(1936,!0),qg=new og(1937),rg=new og(1933);var sg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[rg.g]=!0}};sg.g=void 0;sg.o=function(){return sg.g?sg.g:sg.g=new sg};var tg=function(a){return sg.o().g(a.g,a.defaultValue)};var ug=[];function yg(){var a=Zf("google_tag_data",{});a.ics||(a.ics={entries:{},set:zg,update:Ag,addListener:Bg,notifyListeners:Cg,active:!1,usedDefault:!1});return a.ics}
function zg(a,b,c,d,e,f){var g=yg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&n.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Dg(a),Cg(),Na("TAGGING",2))},f)}}}
function Ag(a,b){var c=yg();c.active=!0;if(void 0!=b){var d=Eg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Eg(a);f.quiet?(f.quiet=!1,Dg(a)):g!==d&&Dg(a)}}function Bg(a,b){ug.push({zf:a,sh:b})}function Dg(a){for(var b=0;b<ug.length;++b){var c=ug[b];Sa(c.zf)&&-1!==c.zf.indexOf(a)&&(c.Of=!0)}}function Cg(a){for(var b=0;b<ug.length;++b){var c=ug[b];if(c.Of){c.Of=!1;try{c.sh({yf:a})}catch(d){}}}}
var Eg=function(a){var b=yg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Fg=function(a){return(yg().entries[a]||{}).initial},Gg=function(a){return!(yg().entries[a]||{}).quiet},Hg=function(){return tg(rg)?yg().active:!1},Ig=function(){return yg().usedDefault},Jg=function(a,b){yg().addListener(a,b)},Kg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gg(b[e]))return!0;return!1}if(c()){var d=!1;Jg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Lg=
function(a,b){if(!1===Eg(b)){var c=!1;Jg([b],function(d){!c&&Eg(b)&&(a(d),c=!0)})}};function Mg(a){for(var b=[],c=0;c<Ng.length;c++){var d=a(Ng[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Ng=[J.C,J.I],Og=function(a){var b=a[J.bd];b&&Cf(40);var c=a[J.se];c&&Cf(41);for(var d=Sa(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==J.bd&&f!==J.se)if(-1<Ta(Ng,f)){var g=f,h=a[f],l=d[e];yg().set(g,h,l,"US","US-VA",c)}else{}},Pg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Ta(Ng,c)){var d=c,e=a[c];yg().update(d,e)}else{}yg().notifyListeners(b)},Qg=function(a){var b=Eg(a);return void 0!=b?b:!0},Rg=function(){return"G1"+Mg(Eg)},Sg=function(a,b){Jg(a,b)},Tg=function(a,b){Kg(a,b)};var Vg=function(a){return Ug?K.querySelectorAll(a):null},Wg=function(a,b){if(!Ug)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Xg=!1;if(K.querySelectorAll)try{var Yg=K.querySelectorAll(":root");Yg&&1==Yg.length&&Yg[0]==K.documentElement&&(Xg=!0)}catch(a){}var Ug=Xg;var Zg=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!n.getComputedStyle)return!0;var c=n.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=n.getComputedStyle(d,
null))}return!1};
var $g=function(){var a=K.body,b=K.documentElement||a&&a.parentElement,c,d;if(K.compatMode&&"BackCompat"!==K.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Cf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ah=function(a){var b=$g(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var bh=[],ch=!(!n.IntersectionObserver||!n.IntersectionObserverEntry),dh=function(a,b,c){for(var d=new n.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<bh.length;f++)if(!bh[f])return bh[f]=d,f;return bh.push(d)-1},eh=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:ib()};M(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=ah(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},fh=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ch){var e=!1;M(function(){e||
eh(a,b,c)()});return dh(function(f){e=!0;for(var g={rb:0};g.rb<f.length;g={rb:g.rb},g.rb++)M(function(h){return function(){return a(f[h.rb])}}(g))},b,c)}return n.setInterval(eh(a,b,c),1E3)},gh=function(a){ch?0<=a&&a<bh.length&&bh[a]&&(bh[a].disconnect(),bh[a]=void 0):n.clearInterval(a)};var hh=/:[0-9]+$/,ih=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},lh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=jh(a.protocol)||jh(n.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
n.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||n.location.hostname).replace(hh,"").toLowerCase());return kh(a,b,c,d,e)},kh=function(a,b,c,d,e){var f,g=jh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=mh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(hh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Na("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ta(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=ih(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},jh=function(a){return a?a.replace(":",
"").toLowerCase():""},mh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},nh=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Na("TAGGING",1),c="/"+c);var d=b.hostname.replace(hh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},oh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=nh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var ph=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),qh=new RegExp(/support|noreply/i),rh=["SCRIPT","IMG","SVG","PATH","BR"],sh=["BR"];function th(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=th(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function uh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function vh(a){if(0==a.length)return null;var b;b=uh(a,function(c){return!qh.test(c.$c)});b=uh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=uh(b,function(c){return!Zg(c.element)});return b[0]}
function wh(){var a;var b=[],c=K.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=rh.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=sh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],q=0;q<m.length;q++){var r=m[q],u=r.textContent;r.value&&(u=r.value);if(u){var t=u.match(ph);if(t){var v=
t[0],w;if(n.location){var z=kh(n.location,"host",!0);w=0<=v.toLowerCase().indexOf(z)}else w=!1;w||p.push({element:r,$c:v})}}}var x=vh(p),y=[];if(x){var B=x.element;y.push({$c:x.$c,querySelector:th(B),tagName:B.tagName,isVisible:!Zg(B),type:1,Lf:!0})}return{elements:y,status:10<p.length?"3":l.status}}var qe={},N=null,Kh=Math.random();qe.F="GTM-NF2SZTJ";qe.Dc="472";qe.ki="";qe.dg="ChEI8LHvgwYQu/mwjNrw1bvDARIkAKSSF42FFDK6328w7REGCOUYRvhnjTcXc6coZxedCq9U3KWOGgJdsg\x3d\x3d";var Lh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Mh={__paused:!0,__tg:!0},Nh;for(Nh in Lh)Lh.hasOwnProperty(Nh)&&(Mh[Nh]=!0);var Oh="www.googletagmanager.com/gtm.js";
var Ph=Oh,Qh=bb(""),Rh=null,Sh=null,Th="//www.googletagmanager.com/a?id="+qe.F+"&cv=366",Uh={},Vh={},Wh=function(){var a=N.sequence||1;N.sequence=a+1;return a};qe.cg="";var Xh={},Yh=new Xa,Zh={},$h={},ci={name:"dataLayer",set:function(a,b){G(ub(a,b),Zh);ai()},get:function(a){return bi(a,2)},reset:function(){Yh=new Xa;Zh={};ai()}},bi=function(a,b){return 2!=b?Yh.get(a):di(a)},di=function(a,b){var c=a.split(".");b=b||[];for(var d=Zh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ta(b,d))return}return d},ei=function(a,b){$h.hasOwnProperty(a)||(Yh.set(a,b),G(ub(a,b),Zh),ai())},fi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=bi(c,1);if(Sa(d)||Nb(d))d=G(d);$h[c]=d}},ai=function(a){Za($h,function(b,c){Yh.set(b,c);G(ub(b,void 0),Zh);G(ub(b,c),Zh);a&&delete $h[b]})},hi=function(a,b,c){Xh[a]=Xh[a]||{};Xh[a][b]=gi(b,c)},gi=function(a,b){var c,d=1!==(void 0===b?2:b)?di(a):Yh.get(a);"array"===Lb(d)||"object"===Lb(d)?c=G(d):c=d;return c},ii=function(a,b){if(Xh[a])return Xh[a][b]},ji=function(a,b){Xh[a]&&delete Xh[a][b]};var mi={},ni=function(a,b){if(n._gtmexpgrp&&n._gtmexpgrp.hasOwnProperty(a))return n._gtmexpgrp[a];void 0===mi[a]&&(mi[a]=Math.floor(Math.random()*b));return mi[a]};var oi=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function pi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var qi=function(a){qi[" "](a);return a};qi[" "]=function(){};function ri(a){if(!tg(qg))return!0;try{return qi(a.cookie),!0}catch(b){return!1}};var ui=function(a,b,c,d){return si(d)?pi(a,String(b||ti()),c):[]},xi=function(a,b,c,d,e){if(si(e)){var f=vi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=wi(f,function(g){return g.Kc},b);if(1===f.length)return f[0].id;f=wi(f,function(g){return g.Yb},c);return f[0]?f[0].id:void 0}}};function yi(a,b,c,d){var e=ti(),f=document;ri(f)&&(f.cookie=a);var g=ti();return e!=g||void 0!=c&&0<=ui(b,g,!1,d).indexOf(c)}
var Ci=function(a,b,c,d){function e(w,z,x){if(null==x)return delete h[z],w;h[z]=x;return w+"; "+z+"="+x}function f(w,z){if(null==z)return delete h[z],w;h[z]=!0;return w+"; "+z}if(!si(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=zi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Nh);g=e(g,"samesite",
c.Yh);c.$h&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Ai(),q=void 0,r=!1,u=0;u<p.length;++u){var t="none"!==p[u]?p[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Bi(t,c.path)&&yi(v,a,b,c.Ea))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Bi(m,c.path)?1:yi(g,a,b,c.Ea)?0:1},Di=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ci(a,b,c)};
function wi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function vi(a,b,c){for(var d=[],e=ui(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Kc:1*l[0]||1,Yb:1*l[1]||1}))}}return d}
var zi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ei=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Fi=/(^|\.)doubleclick\.net$/i,Bi=function(a,b){return Fi.test(document.location.hostname)||"/"===b&&Ei.test(a)},ti=function(){return ri(document)?document.cookie:""},Ai=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;
Fi.test(e)||Ei.test(e)||a.push("none");return a},si=function(a){if(!tg(rg)||!a||!Hg())return!0;if(!Gg(a))return!1;var b=Eg(a);return null==b?!0:!!b};var Gi=function(){for(var a=Math.round(2147483647*Math.random()),b=ri(K)?K.cookie:null,c=""+Xf.userAgent+(b||"")+(K.referrer||""),d=c.length,e=n.history.length;0<e;)c+=e--^d++;return[a^oi(c)&2147483647,Math.round(ib()/1E3)].join(".")},Ji=function(a,b,c,d,e){var f=Hi(b);return xi(a,f,Ii(c),d,e)},Ki=function(a,b,c,d){var e=""+Hi(c),f=Ii(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Hi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ii=function(a){if(!a||"/"===
a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Li(a,b,c){var d,e=Number(null!=a.ob?a.ob:void 0);0!==e&&(d=new Date((b||ib())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Mi=["1"],Ni={},Qi=function(a){var b=Oi(a.prefix),c=Ni[b];c&&Pi(b,c,a)},Si=function(a){var b=Oi(a.prefix);if(!Ni[b]&&!Ri(b,a.path,a.domain)){var c=Gi();if(0===Pi(b,c,a)){var d=Zf("google_tag_data",{});d._gcl_au?Na("GTM",57):d._gcl_au=c}Ri(b,a.path,a.domain)}};function Pi(a,b,c){var d=Ki(b,"1",c.domain,c.path),e=Li(c);e.Ea="ad_storage";return Di(a,d,e)}function Ri(a,b,c){var d=Ji(a,b,c,Mi,"ad_storage");d&&(Ni[a]=d);return d}function Oi(a){return(a||"_gcl")+"_au"};var Ti=function(a){for(var b=[],c=K.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ne:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Ui(a,b){var c=Ti(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ne]||(d[c[e].ne]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),oa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ne].push(g)}}return d};function Vi(){for(var a=Wi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wi,Yi;
function Zi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Yi[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Wi=Wi||Xi();Yi=Yi||Vi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var $i;var dj=function(){var a=aj,b=bj,c=cj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gg(K,"mousedown",d);gg(K,"keyup",d);gg(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ej=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};cj().decorators.push(f)},fj=function(a,b,c){for(var d=cj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&lb(e,g.callback())}}return e},cj=function(){var a=Zf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var gj=/(.*?)\*(.*?)\*(.*)/,hj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ij=/^(?:www\.|m\.|amp\.)+/,jj=/([^?#]+)(\?[^#]*)?(#.*)?/;function kj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var qj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Wi=Wi||Xi();Yi=Yi||Vi();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=p?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|u>>4,z=(u&15)<<2|t>>6,x=t&63;q||(x=64,p||(z=64));l.push(Wi[v],Wi[w],Wi[z],Wi[x])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",pj(y),
y].join("*")},pj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=$i)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}$i=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^$i[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},sj=function(){return function(a){var b=nh(n.location.href),
c=b.search.replace("?",""),d=ih(c,"_gl",!1,!0)||"";a.query=rj(d)||{};var e=lh(b,"fragment").match(kj("_gl"));a.fragment=rj(e&&e[3]||"")||{}}},tj=function(a){var b=sj(),c=cj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(lb(d,e.query),a&&lb(d,e.fragment));return d},rj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=gj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===pj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=Zi(r[u+1]);return q}}}}catch(t){}};function uj(a,b,c,d){function e(p){var q=p,r=kj(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=jj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function vj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=fj(b,1,c),e=fj(b,2,c),f=fj(b,3,c);if(ob(d)){var g=qj(d);c?wj("_gl",g,a):xj("_gl",g,a,!1)}if(!c&&ob(e)){var h=qj(e);xj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){xj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){wj(m,p,q);break a}}"string"==typeof q&&uj(m,p,q,void 0)}}
function xj(a,b,c,d){if(c.href){var e=uj(a,b,c.href,void 0===d?!1:d);Kf.test(e)&&(c.href=e)}}
function wj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=uj(a,b,c.action);Kf.test(m)&&(c.action=m)}}}
var aj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||vj(e,e.hostname)}}catch(g){}},bj=function(a){try{if(a.action){var b=lh(nh(a.action),"host");vj(a,b)}}catch(c){}},yj=function(a,b,c,d){dj();ej(a,b,"fragment"===c?2:1,!!d,!1)},zj=function(a,b){dj();ej(a,[kh(n.location,"host",!0)],b,!0,!0)},Aj=function(){var a=K.location.hostname,b=hj.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(ij,""),l=e.replace(ij,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Bj=function(a,b){return!1===a?!1:a||b||Aj()};var Cj={};var Dj=/^\w+$/,Ej=/^[\w-]+$/,Fj=/^~?[\w-]+$/,Gj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Hj=function(){if(!tg(rg)||!Hg())return!0;var a=Eg("ad_storage");return null==a?!0:!!a},Ij=function(a,b){Gg("ad_storage")?Hj()?a():Lg(a,"ad_storage"):b?Na("TAGGING",3):Kg(function(){Ij(a,!0)},["ad_storage"])},Kj=function(a){return Jj(a).map(function(b){return b.oa})},Jj=function(a){var b=[];if(!ri(K)||!K.cookie)return b;var c=ui(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=
{},e=0;e<c.length;d={ic:d.ic},e++){var f=Lj(c[e]);if(null!=f){var g=f,h=g.version;d.ic=g.oa;var l=g.timestamp,m=g.labels,p=Ua(b,function(q){return function(r){return r.oa===q.ic}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Mj(p.labels,m||[])):b.push({version:h,oa:d.ic,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Nj(b)};
function Mj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}function Oj(a){return a&&"string"==typeof a&&a.match(Dj)?a:"_gcl"}
var Qj=function(){var a=nh(n.location.href),b=lh(a,"query",!1,void 0,"gclid"),c=lh(a,"query",!1,void 0,"gclsrc"),d=lh(a,"query",!1,void 0,"wbraid"),e=lh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||ih(f,"gclid",!1,void 0);c=c||ih(f,"gclsrc",!1,void 0);d=d||ih(f,"wbraid",!1,void 0)}return Pj(b,c,e,d)},Pj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Ej.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Ej))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Rj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Tj=function(a){var b=Qj();Ij(function(){Sj(b,a)})};
function Sj(a,b,c,d){function e(p,q){var r=Uj(p,f);r&&(Di(r,q,g),h=!0)}b=b||{};d=d||[];var f=Oj(b.prefix);c=c||ib();var g=Li(b,c,!0);g.Ea="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&(!0===b.zi?e("aw",m("~"+a.aw[0])):e("aw",m(a.aw[0])));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Cj.enable_gbraid_cookie_write?0:Cj.enable_gbraid_cookie_write)&&!h&&
a.gb&&e("gb",m(a.gb[0]))}
var Wj=function(a,b){var c=tj(!0);Ij(function(){for(var d=Oj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Gj[f]){var g=Uj(f,d),h=c[g];if(h){var l=Math.min(Vj(h),ib()),m;b:{var p=l,q=g;if(ri(K))for(var r=ui(q,K.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(Vj(r[u])>p){m=!0;break b}m=!1}if(!m){var t=Li(b,l,!0);t.Ea="ad_storage";Di(g,h,t)}}}}Sj(Pj(c.gclid,c.gclsrc),b)})},Uj=function(a,b){var c=Gj[a];if(void 0!==c)return b+c},Vj=function(a){return 0!==Xj(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Lj(a){var b=Xj(a.split("."));return 0===b.length?null:{version:b[0],oa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Xj(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Fj.test(a[2])?[]:a}
var Yj=function(a,b,c,d,e){if(Sa(b)&&ri(K)){var f=Oj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Uj(a[l],f);if(m){var p=ui(m,K.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Ij(function(){yj(g,b,c,d)})}},Nj=function(a){return a.filter(function(b){return Fj.test(b.oa)})},Zj=function(a,b){if(ri(K)){for(var c=Oj(b.prefix),d={},e=0;e<a.length;e++)Gj[a[e]]&&(d[a[e]]=Gj[a[e]]);Ij(function(){Za(d,function(f,g){var h=ui(c+g,K.cookie,void 0,"ad_storage");h.sort(function(u,
t){return Vj(t)-Vj(u)});if(h.length){var l=h[0],m=Vj(l),p=0!==Xj(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Xj(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Sj(q,b,m,p)}})})}};function ak(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var bk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Hg()){var c=Qj();if(ak(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);zj(function(){return d},3);zj(function(){var e={};return e._up="1",e},1)}}};function ck(a,b){var c=Oj(b),d=Uj(a,c);if(!d)return 0;for(var e=Jj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function dk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var ek=/^\d+\.fls\.doubleclick\.net$/,fk=!1;fk=!0;function gk(a,b){Gg(J.C)?Qg(J.C)?a():Lg(a,J.C):b?Cf(42):Tg(function(){gk(a,!0)},[J.C])}function hk(a){var b=nh(n.location.href),c=lh(b,"host",!1);if(c&&c.match(ek)){var d=lh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}function ik(a){return Qj()[a]||[]}
function jk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=hk("gcl"+a);if(d)return d.split(".")}var e=Oj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Qg(J.C)&&c,g=ik(a);if(0<g.length)return f?["0"]:g}var h=Uj(a,e);return h?Kj(h):[]}function kk(a){var b=[];Za(a,function(c,d){d=Nj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].oa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var lk=function(a){var b=hk("gac");return b?!Qg(J.C)&&a?"0":decodeURIComponent(b):kk(Hj()?Ui():{})},mk=function(a){var b=hk("gacgb");return b?!Qg(J.C)&&a?"0":decodeURIComponent(b):kk(Hj()?Ui("_gac_gb",!0):{})},ok=function(a,b){if(fk)nk(a,b,"dc");else{var c=ik("dc");gk(function(){Si(b);var d=Ni[Oi(b.prefix)],e=!1;if(d&&0<c.length){var f=N.joined_au=N.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;mg(l);e=f[g]=!0}}null==
a&&(a=e);a&&d&&Qi(b)})}},nk=function(a,b,c){var d=Qj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Rj(h,c)||e.push({oa:f,Hf:h});!g||c&&"dc"!==c||e.push({oa:g,Hf:"ds"});gk(function(){Si(b);var l=Ni[Oi(b.prefix)],m=!1;if(l&&0<e.length)for(var p=N.joined_auid=N.joined_auid||{},q=0;q<e.length;q++){var r=e[q],u=r.oa,t=r.Hf,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+u+"&auid="+l+"&gclsrc="+t;mg(w);m=p[v]=!0}}null==a&&(a=
m);a&&l&&Qi(b)})},pk=function(a){var b;if(hk("gclaw")||hk("gac")||0<ik("aw").length)b=!1;else{var c;if(0<ik("gb").length)c=!0;else{var d=Math.max(ck("aw",a),dk(Hj()?Ui():{}));c=Math.max(ck("gb",a),dk(Hj()?Ui("_gac_gb",!0):{}))>d}b=c}return b};var qk=/[A-Z]+/,rk=/\s/,sk=function(a){if(k(a)&&(a=hb(a),!rk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(qk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},uk=function(a){for(var b={},c=0;c<a.length;++c){var d=sk(a[c]);d&&(b[d.id]=d)}tk(b);var e=[];Za(b,function(f,g){e.push(g)});return e};
function tk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var vk=function(){var a=!1;return a};var xk=function(a,b,c,d){return(2===wk()||d||"http:"!=n.location.protocol?a:b)+c},wk=function(){var a=dg(),b;if(1===a)a:{var c=Ph;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Lk=function(a){return Qg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=oh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Mk=function(){var a;if(!(a=Qh)){var b;if(!0===n._gtmdgs)b=!0;else{var c=Xf&&Xf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ab("1");return ni(1,100)<d?ni(2,2):-1},Nk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Ok=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Pk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sk=function(){var a=!1;return a},Uk=function(a){var b=bi("gtm.allowlist")||bi("gtm.whitelist");b&&Cf(9);Sk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&rb(gb(b),Pk),d=bi("gtm.blocklist")||
bi("gtm.blacklist");d||(d=bi("tagTypeBlacklist"))&&Cf(3);d?Cf(8):d=[];Tk()&&(d=gb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ta(gb(d),"google")&&Cf(2);var e=d&&rb(gb(d),Qk),f={};return function(g){var h=g&&g[td.Ta];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Vh[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Ta(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ta(c,l[q])){Cf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u=0<=Ta(e,h);if(u)r=u;else{var t=Ya(e,l||[]);t&&Cf(10);r=t}}var v=!m||r;v||!(0<=Ta(l,"sandboxedScripts"))||c&&-1!==Ta(c,"sandboxedScripts")||(v=Ya(e,Rk));return f[h]=v}},Tk=function(){return Ok.test(n.location&&n.location.hostname)};var Vk={active:!0,isAllowed:function(){return!0}},Wk=function(a){var b=N.zones;return b?b.checkState(qe.F,a):Vk},Xk=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var Yk=function(){},Zk=function(){};var $k=!1,al=0,bl=[];function cl(a){if(!$k){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$k=!0;for(var e=0;e<bl.length;e++)M(bl[e])}bl.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function dl(){if(!$k&&140>al){al++;try{K.documentElement.doScroll("left"),cl()}catch(a){n.setTimeout(dl,50)}}}var el=function(a){$k?a():bl.push(a)};var gl=function(a,b){this.g=!1;this.D=[];this.K={tags:[]};this.L=!1;this.o=this.s=0;fl(this,a,b)},hl=function(a,b,c,d){if(Mh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Nb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.K.tags.push(e)-1},il=function(a,b,c,d){var e=a.K.tags[b];e&&(e.status=c,e.executionTime=d)},jl=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},fl=function(a,b,c){Qa(b)&&a.Nb(b);c&&n.setTimeout(function(){return jl(a)},Number(c))};
gl.prototype.Nb=function(a){var b=this,c=kb(function(){return M(function(){a(qe.F,b.K)})});this.g?c():this.D.push(c)};var kl=function(a){a.s++;return kb(function(){a.o++;a.L&&a.o>=a.s&&jl(a)})};var ll=function(){function a(d){return!Ra(d)||0>d?0:d}if(!N._li&&n.performance&&n.performance.timing){var b=n.performance.timing.navigationStart,c=Ra(ci.get("gtm.start"))?ci.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(Sh-b)}}};var pl={},ql=function(){return n.GoogleAnalyticsObject&&n[n.GoogleAnalyticsObject]},rl=!1;
var sl=function(a){n.GoogleAnalyticsObject||(n.GoogleAnalyticsObject=a||"ga");var b=n.GoogleAnalyticsObject;if(n[b])n.hasOwnProperty(b)||Cf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);n[b]=c}ll();return n[b]},tl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ql();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},ul=function(a){if(!Hg())return;var b=ql();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var wl=function(a){},vl=function(){return n.GoogleAnalyticsObject||"ga"},xl=function(a,b){return function(){var c=ql(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Cl=function(){return"&tc="+Td.filter(function(a){return a}).length},Fl=function(){2022<=Dl().length&&El()},Hl=function(){Gl||(Gl=n.setTimeout(El,500))},El=function(){Gl&&(n.clearTimeout(Gl),Gl=void 0);void 0===Il||Jl[Il]&&!Kl&&!Ll||(Ml[Il]||Nl.Eh()||0>=Ol--?(Cf(1),Ml[Il]=!0):(Nl.Wh(),fg(Dl()),Jl[Il]=!0,Pl=Ql=Rl=Ll=Kl=""))},Dl=function(){var a=Il;if(void 0===a)return"";var b=Oa("GTM"),c=Oa("TAGGING");return[Sl,Jl[a]?"":"&es=1",Tl[a],b?"&u="+b:"",c?"&ut="+c:"",Cl(),Kl,Ll,Rl?Rl:"",Ql,Pl,"&z=0"].join("")},
Vl=function(){Sl=Ul()},Ul=function(){return[Th,"&v=3&t=t","&pid="+Wa(),"&rv="+qe.Dc].join("")},Wl="0.005000">Math.random(),Sl=Ul(),Jl={},Kl="",Ll="",Pl="",Ql="",Rl="",Il=void 0,Tl={},Ml={},Gl=void 0,Nl=function(a,b){var c=0,d=0;return{Eh:function(){if(c<a)return!1;ib()-d>=b&&(c=0);return c>=a},Wh:function(){ib()-d>=b&&(c=0);c++;d=ib()}}}(2,1E3),Ol=1E3,Xl=function(a,b,c){if(Wl&&!Ml[a]&&b){a!==Il&&(El(),Il=a);var d,e=String(b[td.Ta]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Kl=Kl?Kl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Vd[g]?"1":"2")+d;Pl=Pl?Pl+"."+h:"&ti="+h;Hl();Fl()}},Yl=function(a,b,c){if(Wl&&!Ml[a]){a!==Il&&(El(),Il=a);var d=c+b;Ll=Ll?Ll+"."+d:"&epr="+d;Hl();Fl()}},Zl=function(a,b,c){};
var $l=function(){return!1},am=function(){var a={};return function(b,c,d){}};function bm(a,b,c,d){var e=Td[a],f=cm(a,b,c,d);if(!f)return null;var g=ae(e[td.rf],c,[]);if(g&&g.length){var h=g[0];f=bm(h.index,{onSuccess:f,onFailure:1===h.Ef?b.terminate:f,terminate:b.terminate},c,d)}return f}
function cm(a,b,c,d){function e(){if(f[td.Tg])h();else{var w=be(f,c,[]);var y=hl(c.Na,String(f[td.Ta]),Number(f[td.sf]),w[td.Ug]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=ib()-E;Xl(c.id,Td[a],"5");il(c.Na,y,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=ib()-E;Xl(c.id,Td[a],"6");il(c.Na,y,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Xl(c.id,f,"1");var C=function(){var D=ib()-E;Xl(c.id,f,"7");il(c.Na,y,"exception",D);B||(B=!0,h())};var E=ib();try{$d(w,c)}catch(D){C(D)}}}var f=Td[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Ud(f))return null;var m=ae(f[td.tf],c,[]);if(m&&m.length){var p=m[0],q=bm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.Ef?l:q}if(f[td.kf]||f[td.Wg]){var r=f[td.kf]?Ud:
c.di,u=g,t=h;if(!r[a]){e=kb(e);var v=dm(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function dm(a,b,c){var d=[],e=[];b[a]=em(d,e,c);return{onSuccess:function(){b[a]=fm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=gm;for(var f=0;f<e.length;f++)e[f]()}}}function em(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function fm(a){a()}function gm(a,b){b()};var jm=function(a,b){for(var c=[],d=0;d<Td.length;d++)if(a[d]){var e=Td[d];var f=kl(b.Na);try{var g=bm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Vd[p];l.call(h,{Wf:m,Pf:q?q.priorityOverride||0:0,Lc:g})}else hm(d,b),f()}catch(t){f()}}var r=b.Na;r.L=!0;r.o>=r.s&&jl(r);c.sort(im);for(var u=0;u<c.length;u++)c[u].Lc();
return 0<c.length};function im(a,b){var c,d=b.Pf,e=a.Pf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Wf,h=b.Wf;f=g>h?1:g<h?-1:0}return f}function hm(a,b){if(!Wl)return;var c=function(d){var e=b.Ud(Td[d])?"3":"4",f=ae(Td[d][td.rf],b,[]);f&&f.length&&c(f[0].index);Xl(b.id,Td[d],e);var g=ae(Td[d][td.tf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var km=!1,qm=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(km)return!1;km=!0}var d=Wk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=Wk(Number.MAX_SAFE_INTEGER)}Wl&&!Ml[b]&&Il!==b&&(El(),Il=b,Pl=Kl="",Tl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Hl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Ud:Uk(d.isAllowed),di:[],Mf:function(){Cf(6)},xf:lm(b),Na:new gl(f,
g)};nm(b,h.Na);var l=le(h);e&&(l=om(l));var m=jm(l,h);"gtm.js"!==c&&"gtm.sync"!==c||wl(qe.F);switch(c){case "gtm.init":m&&Cf(20)}return pm(l,m)};function lm(a){return function(b){Wl&&(Sb(b)||Zl(a,"input",b))}}
function nm(a,b){hi(a,"event",1);hi(a,"ecommerce",1);hi(a,"gtm");hi(a,"eventModel");}function mm(){var a={};a.event=gi("event",1);a.ecommerce=gi("ecommerce",1);a.gtm=gi("gtm");a.eventModel=gi("eventModel");return a}function om(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Lh[String(Td[c][td.Ta])]&&(b[c]=!0);return b}
function pm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Td[c]&&!Mh[String(Td[c][td.Ta])])return!0;return!1}function rm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return nh(""+c+b).href}}function sm(a,b){return tm()?rm(a,b):void 0}function tm(){var a=!1;return a};var um=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},vm=function(a){var b=new um;b.eventModel=a;return b},wm=function(a,b){a.targetConfig=b;return a},xm=function(a,b){a.containerConfig=b;return a},ym=function(a,b){a.remoteConfig=b;return a},zm=function(a,b){a.globalConfig=
b;return a},Am=function(a,b){a.onSuccess=b;return a},Bm=function(a,b){a.setContainerTypeLoaded=b;return a},Cm=function(a,b){a.getContainerTypeLoaded=b;return a},Dm=function(a,b){a.onFailure=b;return a};um.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Em=function(a){function b(e){Za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Za(c,function(e){d.push(e)});return d};var Fm;if(3===qe.Dc.length)Fm="g";else{var Gm="G";Fm=Gm}
var Hm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fm,OPT:"o"},Im=function(a){var b=qe.F.split("-"),c=b[0].toUpperCase(),d=Hm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===qe.Dc.length){var g="w";f="2"+g}else f="";return f+d+qe.Dc+e};var Jm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Km=function(){return Of("iPhone")&&!Of("iPod")&&!Of("iPad")};Of("Opera");Of("Trident")||Of("MSIE");Of("Edge");!Of("Gecko")||-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")||Of("Trident")||Of("MSIE")||Of("Edge");-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")&&Of("Mobile");Of("Macintosh");Of("Windows");Of("Linux")||Of("CrOS");var Lm=na.navigator||null;Lm&&(Lm.appVersion||"").indexOf("X11");Of("Android");Km();Of("iPad");Of("iPod");Km()||Of("iPad")||Of("iPod");Lf.toLowerCase().indexOf("kaios");var Mm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Nm=function(){};var Om=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Pm=function(a,b){this.o=a;this.g=null;this.D={};this.L=0;this.K=void 0===b?500:b;this.s=null};ma(Pm,Nm);
var Rm=function(a){return"function"===typeof a.o.__tcfapi||null!=Qm(a)};
Pm.prototype.addEventListener=function(a){var b={},c=Ef(function(){return a(b)}),d=0;-1!==this.K&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.K));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Om(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Sm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Pm.prototype.removeEventListener=function(a){a&&a.listenerId&&Sm(this,"removeEventListener",null,a.listenerId)};
var Um=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Tm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||tg(pg)&&"CH"===a.publisherCC)?!0:m&&Tm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Tm(a.purpose.legitimateInterests,b)&&Tm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Tm=function(a,b){return!(!a||!a[b])},Sm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Qm(a)){Vm(a);var f=++a.L;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Qm=function(a){if(a.g)return a.g;a.g=Mm(a.o,"__tcfapiLocator");return a.g},
Vm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},Jm(a.o,a.s))};var Wm=!0;Wm=!1;var Xm={1:0,3:0,4:0,7:3,9:3,10:3};function Ym(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Zm=Ym("",550),$m=Ym("",500);function an(){var a=N.tcf||{};return N.tcf=a}
var bn=function(a,b){this.s=a;this.g=b;this.o=ib();},cn=function(a){},dn=function(a){},kn=function(){var a=an(),b=new Pm(n,Wm?3E3:-1),c=new bn(b,a);if((en()?!0===n.gtag_enable_tcf_support:!1!==n.gtag_enable_tcf_support)&&!a.active&&("function"===typeof n.__tcfapi||Rm(b))){a.active=!0;a.$b={};fn();var d=null;Wm?d=n.setTimeout(function(){gn(a);hn(a);d=null},$m):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)gn(a),hn(a),cn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=jn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Xm)if(Xm.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Om(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Um(m,"1",0):!1;g["1"]=l}else g[h]=Um(e,h,Xm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.$b=f,hn(a),cn(c))}}),dn(c)}catch(e){d&&(clearTimeout(d),d=null),gn(a),hn(a)}}};function gn(a){a.type="e";a.tcString="tcunavailable";Wm&&(a.$b=jn())}function fn(){var a={};Og((a.ad_storage="denied",a.wait_for_update=Zm,a))}
var en=function(){var a=!1;a=!0;return a};function jn(){var a={},b;for(b in Xm)Xm.hasOwnProperty(b)&&(a[b]=!0);return a}function hn(a){var b={};Pg((b.ad_storage=a.$b["1"]?"granted":"denied",b))}
var ln=function(){var a=an();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},mn=function(){var a=an();return a.active?a.tcString||"":""},nn=function(){var a=an();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},on=function(a){if(!Xm.hasOwnProperty(String(a)))return!0;var b=an();return b.active&&b.$b?!!b.$b[String(a)]:!0};var pn=!1;function qn(a){var b=String(n.location).split(/[?#]/)[0],c=qe.dg||n._CONSENT_MODE_SALT;return a?c?String(oi(b+a+c)):"0":""}
function rn(a){function b(t){var v;N.reported_gclid||(N.reported_gclid={});v=N.reported_gclid;var w;w=pn&&g&&(!Hg()||Qg(J.C))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!v[w]){v[w]=!0;var z=[],x={},y=function(Q,U){U&&(z.push(Q+"="+encodeURIComponent(U)),x[Q]=!0)},B="https://www.google.com";if(Hg()){var C=Qg(J.C);y("gcs",Rg());t&&y("gcu","1");Ig()&&y("gcd","G1"+Mg(Fg));N.dedupe_gclid||
(N.dedupe_gclid=""+Gi());y("rnd",N.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Qg(J.C)){var E=Kj("_gcl_aw");y("gclaw",E.join("."))}y("url",String(n.location).split(/[?#]/)[0]);y("dclid",sn(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",mn()),y("gdpr",nn());"1"===tj(!1)._up&&y("gtm_up","1");y("gclid",sn(d,l));y("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(y("gbraid",sn(d,q)),!x.gbraid&&Hg()&&Qg(J.C))){var I=Kj("_gcl_gb");y("gclgb",I.join("."))}y("gtm",Im(!e));pn&&g&&Qg(J.C)&&(Si(f||{}),y("auid",Ni[Oi(f.prefix)]||""));
a.Df&&y("did",a.Df);var P=B+"/pagead/landing?"+z.join("&");mg(P)}}var c=!!a.Id,d=!!a.qa,e=a.U,f=void 0===a.Ic?{}:a.Ic,g=void 0===a.Pc?!0:a.Pc,h=Qj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),u=Hg();if(r||u)u?Tg(function(){b();Qg(J.C)||Lg(function(t){return b(!0,t.yf)},J.C)},[J.C]):b()}function sn(a,b){var c=a&&!Qg(J.C);return b&&c?"0":b}
var Dn=function(a){return!(void 0===a||null===a||0===(a+"").length)},En=function(a,b){var c;if(2===b.da)return a("ord",Wa(1E11,1E13)),!0;if(3===b.da)return a("ord","1"),a("num",Wa(1E11,1E13)),!0;if(4===b.da)return Dn(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.da)c="1";else if(6===b.da)c=b.he;else return!1;Dn(c)&&a("qty",c);Dn(b.Jc)&&a("cost",b.Jc);Dn(b.transactionId)&&a("ord",b.transactionId);return!0},Hn=function(a,b,c){function d(D,I,P){r.hasOwnProperty(D)||(I=String(I),q.push(";"+D+"="+(P?
I:Fn(I))))}function e(D,I){I&&d(D,I)}var f=a.Nd,g=a.ke,h=a.protocol,l=a.Rd;h+=g?"//"+f+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var m=";",p=!1;p=!0;Qg(J.C)||l||!a.qa&&!p||(h="https://ade.googlesyndication.com/ddm/activity",m="/",g=!1);var q=[m,"src="+Fn(f),";type="+Fn(a.Qd),";cat="+Fn(a.Mb)],r=a.oh||{};Za(r,function(D,I){q.push(";"+Fn(D)+"="+Fn(I+""))});
if(En(d,a)){Dn(a.Zc)&&d("u",a.Zc);Dn(a.Yc)&&d("tran",a.Yc);d("gtm",Im());Hg()&&!l&&(d("gcs",Rg()),c&&d("gcu","1"));e("gdpr_consent",mn()),e("gdpr",nn());"1"===tj(!1)._up&&d("gtm_up","1");!1===a.dh&&d("npa","1");if(a.Jd){var u=void 0===a.qa?!0:!!a.qa,t=jk("dc",a.Oa,u),v=!1;t&&t.length&&(d("gcldc",t.join(".")),v=!0);if(Gn&&!v&&pk(a.Oa)){var w=jk("gb",a.Oa,u);w&&w.length&&d("gclgb",w.join("."));var z=mk(u);z&&d("gacgb",
z)}else{var x=jk("aw",a.Oa,u);x&&x.length&&d("gclaw",x.join("."));var y=lk(u);y&&d("gac",y)}Si({prefix:a.Oa,ob:a.mh,domain:a.lh,flags:a.ui});var B=Ni[Oi(a.Oa)];B&&d("auiddc",B)}Dn(a.be)&&d("prd",a.be,!0);Za(a.pe,function(D,I){d(D,I)});q.push(b||"");if(Dn(a.Qc)){var C=a.Qc||"";Qg(J.C)||l||!a.qa||(C=oh(C));d("~oref",C)}var E=h+q.join("")+"?";g?eg(E,a.onSuccess):fg(E,a.onSuccess,a.onFailure)}else M(a.onFailure)},Gn=!1;
Gn=!0;var Fn=encodeURIComponent,In=function(a,b){!Hg()||a.Rd?Hn(a,b):Tg(function(){Hn(a,b);Qg(J.C)||Lg(function(){Hn(a,b,!0)},J.C)},[J.C])};var go=function(){var a=!0;on(7)&&on(9)&&on(10)||(a=!1);var b=!0;b=!1;b&&!fo()&&(a=!1);return a},fo=function(){var a=!0;on(3)&&on(4)||(a=!1);return a};var Co=!1;function Do(){var a=N;return a.gcq=a.gcq||new Eo}
var Fo=function(a,b,c){Do().register(a,b,c)},Go=function(a,b,c,d){Do().push("event",[b,a],c,d)},Ho=function(a,b){Do().push("config",[a],b)},Io=function(a,b,c,d){Do().push("get",[a,b],c,d)},Jo=function(a){return Do().getRemoteConfig(a)},Ko={},Lo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},Mo=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Eo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
No=function(a,b){var c=sk(b);return a.D[c.containerId]=a.D[c.containerId]||new Lo},Oo=function(a,b,c){if(b){var d=sk(b);if(d&&1===No(a,b).status){No(a,b).status=2;var e={};Wl&&(e.timeoutId=n.setTimeout(function(){Cf(38);Hl()},3E3));a.push("require",[e],d.containerId);Ko[d.containerId]=ib();if(vk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=n.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=sm(c,g)||h;cg(l)}}}},Po=function(a,b,c,d){if(d.U){var e=No(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),q=bi("gtm.uniqueEventId"),r=sk(d.U).prefix,u=Cm(Bm(Dm(Am(zm(ym(xm(wm(vm(g),h),l),m),p),function(){
Yl(q,r,"2");}),function(){Yl(q,r,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{Yl(q,r,"1");f(d.U,b,d.s,u)}catch(t){Yl(q,r,"4");}}}};aa=Eo.prototype;
aa.register=function(a,b,c){var d=No(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=sk(a),f=Ko[e.containerId];if(void 0!==f){var g=N[e.containerId].bootstrap,h=e.prefix.toUpperCase();N[e.containerId]._spx&&(h=h.toLowerCase());var l=bi("gtm.uniqueEventId"),m=h,p=ib()-g;if(Wl&&!Ml[l]){l!==Il&&(El(),Il=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(p);Ql=Ql?Ql+","+q:"&cl="+q}delete Ko[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(ib()/1E3);Oo(this,c,b[0][J.Ka]||this.o[J.Ka]);Co&&c&&No(this,c).g&&(d=!1);this.g.push(new Mo(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(ib()/1E3);0<this.g.length?this.g.splice(1,0,new Mo(a,d,c,b,!1)):this.g.push(new Mo(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.o)Co?!f.U||No(this,f.U).g?(f.o=!1,this.g.push(f)):c.push(f):(f.o=!1,this.g.push(f));else switch(f.type){case "require":if(3!==No(this,f.U).status&&!a){Co&&this.g.push.apply(this.g,c);return}Wl&&n.clearTimeout(f.g[0].timeoutId);break;case "set":Za(f.g[0],function(r,u){G(ub(r,u),b.o)});break;case "config":e.ra={};Za(f.g[0],function(r){return function(u,t){G(ub(u,t),r.ra)}}(e));var g=!!e.ra[J.yc];delete e.ra[J.yc];
var h=No(this,f.U),l=sk(f.U),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.U]={});h.g&&g||Po(this,J.aa,e.ra,f);h.g=!0;delete e.ra[J.Gb];m?G(e.ra,h.containerConfig):G(e.ra,h.targetConfig[f.U]);Co&&(d=!0);break;case "event":e.hc={};Za(f.g[0],function(r){return function(u,t){G(ub(u,t),r.hc)}}(e));Po(this,f.g[1],e.hc,f);break;case "get":var p={},q=(p[J.Ia]=f.g[0],p[J.Ha]=f.g[1],p);Po(this,J.wa,q,f)}this.g.shift();e={ra:e.ra,hc:e.hc}}Co&&(this.g.push.apply(this.g,c),d&&this.flush())};
aa.getRemoteConfig=function(a){return No(this,a).remoteConfig};function Qo(a,b){var c=this;};function Ro(a,b,c){};function So(a,b,c,d){};function To(a){};var Uo=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":ng(a,"className"),"gtm.elementId":a["for"]||ig(a,"id")||"","gtm.elementTarget":a.formTarget||ng(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||ng(a,"href")||a.src||a.code||a.codebase||"";return d},Vo=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});
return b[a]},Wo=function(a,b,c){Vo(a)[b]=c},Xo=function(a,b,c,d){var e=Vo(a),f=jb(e,b,d);e[b]=c(f)},Yo=function(a,b,c){var d=Vo(a);return jb(d,b,c)};var Zo={},$o=[];
var gp=function(a,b){};

function jp(a,b){};var kp=/^\s*$/,lp,mp=!1;
function xp(a,b){}function yp(a,b,c){};var zp=!!n.MutationObserver,Ap=void 0,Bp=function(a){if(!Ap){var b=function(){var c=K.body;if(c)if(zp)(new MutationObserver(function(){for(var e=0;e<Ap.length;e++)M(Ap[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gg(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Ap.length;e++)M(Ap[e])}))})}};Ap=[];K.body?b():M(b)}Ap.push(a)};var Dp=["www.youtube.com","www.youtube-nocookie.com"],Ep,Fp=!1,Gp=0;
function Qp(a,b){}function Rp(a,b){H(F(this),["toPath:!string","fromPath:!string"],arguments);mf(this,"access_globals","write",a);mf(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=[n,K],f=sb(c,e),g=sb(d,e);if(void 0===f||void 0===g)return!1;f[c[c.length-1]]=g[d[d.length-1]];return!0};function Sp(a,b,c){};function Tp(a,b){var c;H(F(this),["path:!string"],[a]);mf(this,"access_globals","execute",a);var d=a.split("."),e=sb(d,[n,K]);if(!e)return;var f=e[d.pop()];if("function"!==Lb(f))return;var g=!1;for(var h=[],l=1;l<arguments.length;l++)h.push(Qb(arguments[l],this.g,g));var m=(0,this.g.L)(f,e,h);c=Pb(m,this.g);void 0===c&&void 0!==
m&&Cf(45);return c};function Up(a){};function Vp(a){};var Wp=!1,Xp=[];function Yp(){if(!Wp){Wp=!0;for(var a=0;a<Xp.length;a++)M(Xp[a])}}var Zp=function(a){Wp?M(a):Xp.push(a)};function $p(a){H(F(this),["listener:!Fn"],arguments);mf(this,"process_dom_events","window","load");Zp(Qb(a))};function aq(a){var b;return b};function bq(a,b){var c;var d=!1;var e=Pb(c,this.g,d);void 0===e&&void 0!==c&&Cf(45);return e};function cq(a){var b;H(F(this),["path:!string"],arguments);mf(this,"access_globals","read",a);var c=a.split("."),d=sb(c,[n,K]);if(!d)return;var e=d[c[c.length-1]],f=!1;b=Pb(e,this.g,f);void 0===b&&void 0!==e&&Cf(45);return b};function dq(a,b){var c=null,d=!1;return Pb(c,this.g,d)};function eq(a){var b;H(F(this),["path:!string"],arguments);mf(this,"access_globals","readwrite",a);var c=a.split("."),d=sb(c,[n,K]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Qa(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Pb(b,this.g,g)};var fq=function(a){var b;return b};function gq(a,b){b=void 0===b?!0:b;var c;return c};function hq(a){var b=null;return b};function iq(a,b){var c;return c};function jq(a,b){var c;return c};function kq(a){var b="";return b};function lq(a,b){var c;return c};function mq(a){var b="";return b};function nq(){mf(this,"get_user_agent");return n.navigator.userAgent};function oq(a,b){};var pq={};function qq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cg(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)M(g[h]);g.push=function(l){M(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)M(g[h]);e[f]=null},b)):cg(a,c,d,b)}
function rq(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);mf(this,"inject_script",a);var e=this.g;qq(a,void 0,function(){b&&b.o(e)},function(){c&&c.o(e)},pq,d);}var sq=Object.freeze({dl:1,id:1}),tq={};
function uq(a,b,c,d){};function vq(a){var b=!0;return b};var wq=function(){return!1},xq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function yq(){try{mf(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Qb(a[b],this.g);console.log.apply(console,a);};function zq(a,b){var c;return c};function Aq(a){var b=void 0;return b};function Bq(a,b){var c=!1;return c};function Cq(){var a="";return a};function Dq(){var a="";return a};function Eq(){};function Fq(a,b,c,d){d=void 0===d?!1:d;};function Gq(a,b,c){};function Hq(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Iq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Jb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.bd&&mf(this,"access_consent",e,"write")}Og(Qb(a))};function Jq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);mf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=sb(e,[n,K]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Qb(b,this.g,d),!0;return!1};function Kq(a,b,c){}
;var Lq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Mq(a,b,c,d){var e=this;};function Nq(a,b,c){}
;var Oq={},Pq={};Oq.getItem=function(a){var b=null;return b};
Oq.setItem=function(a,b){};
Oq.removeItem=function(a){};Oq.clear=function(){};var Qq=function(a){var b;return b};function Rq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Qb(a),c;for(c in b)b.hasOwnProperty(c)&&mf(this,"access_consent",c,"write");Pg(b)};var qd=function(){var a=new xf;vk()?(a.add("injectHiddenIframe",Pa),a.add("injectScript",Pa)):(a.add("injectHiddenIframe",oq),a.add("injectScript",rq));var b=Gq;a.add("Math",ef());a.add("TestHelper",Af());a.add("addEventCallback",To);a.add("aliasInWindow",Rp);a.add("assertApi",af);a.add("assertThat",bf);a.add("callInWindow",
Tp);a.add("callLater",Up);a.add("copyFromDataLayer",bq);a.add("copyFromWindow",cq);a.add("createArgumentsQueue",dq);a.add("createQueue",eq);a.add("decodeUri",ff);a.add("decodeUriComponent",gf);a.add("encodeUri",hf);a.add("encodeUriComponent",jf);a.add("fail",kf);a.add("fromBase64",fq,!("atob"in n));a.add("generateRandom",lf);a.add("getContainerVersion",nf);a.add("getCookieValues",gq);a.add("getQueryParameters",iq);a.add("getReferrerQueryParameters",jq);a.add("getReferrerUrl",kq);a.add("getTimestamp",
of);a.add("getTimestampMillis",of);a.add("getType",pf);a.add("getUrl",mq);a.add("localStorage",xq,!wq());a.add("logToConsole",yq);a.add("makeInteger",rf);a.add("makeNumber",sf);a.add("makeString",tf);a.add("makeTableMap",uf);a.add("mock",wf);a.add("parseUrl",Aq);a.add("queryPermission",Bq);a.add("readCharacterSet",Cq);a.add("readTitle",Dq);a.add("sendPixel",b);a.add("setCookie",Hq);a.add("setInWindow",Jq);a.add("sha256",Mq);a.add("templateStorage",Oq);a.add("toBase64",Qq,!("btoa"in n));a.add("JSON",
qf(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;c&&a.add("setDefaultConsentState",Iq);
vk()?zf(a,"internal.injectScript",Pa):zf(a,"internal.injectScript",uq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;
if(f=a.o.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.Tb();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.o.hasOwnProperty(d)?a.o[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var ld,ue;
function Sq(){var a=data.runtime||[],b=data.runtime_lines;ld=new jd;Tq();Pd=function(e,f,g){Uq(f);var h=new Db;Za(f,function(u,t){var v=Pb(t);void 0===v&&void 0!==t&&Cf(44);h.set(u,v)});ld.g.g.K=he();var l={gh:ve(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(u){return g.Na.Nb(u)}:void 0,Tb:function(){return e},log:function(){}};if($l()){var m=am(),
p=void 0,q=void 0;l.ia={Ob:{},mb:function(u,t,v){1===t&&(p=u);7===t&&(q=v);m(u,t,v)},Xd:vf()};l.log=function(u,t){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:u,source:q,message:v})}}}var r=md(l,[e,h]);ld.g.g.K=void 0;r instanceof xa&&"return"===r.g&&(r=r.o);return Qb(r)};rd();for(var c=0;c<a.length;c++){var d=a[c];if(!Sa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ee(d,b[c]);ld.Lc(d)}}
function Uq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Qa(b)&&(a.gtmOnSuccess=function(){M(b)});Qa(c)&&(a.gtmOnFailure=function(){M(c)})}function Tq(){var a=ld;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;sd(a,function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})}function Vq(a){void 0!==a&&Za(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Vh[e]=Vh[e]||[];Vh[e].push(b)}})};var Wq="HA GF G UA AW DC".split(" "),Xq=!1,Yq={},Zq=!1;function $q(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.jd]&&(c.eventCallback=b[J.jd]),b[J.qc]&&(c.eventTimeout=b[J.qc]));return c}function ar(){return Xq}
var dr={config:function(a){var b;return b},consent:function(a){function b(){ar()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){Cf(39);var c=Wh(),d=a[1];"default"===d?(b(),Og(a[2])):"update"===d&&(b(),Pg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Nb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=$q(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return Zq=!0,ar(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=ue.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Nb(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Nb(a[2])||Sa(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},er={policy:!0};var fr=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},hr=function(a){var b=gr(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var yr=function(a){if(xr(a))return a;this.g=a};yr.prototype.zh=function(){return this.g};var xr=function(a){return!a||"object"!==Lb(a)||Nb(a)?!1:"getUntrustedUpdateValue"in a};yr.prototype.getUntrustedUpdateValue=yr.prototype.zh;var zr=[],Ar=!1,Br=!1,Cr=!1,Dr=function(a){return n["dataLayer"].push(a)},Er=function(a){var b=N["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Fr(a){var b=a._clear;Za(a,function(d,e){"_clear"!==d&&(b&&ei(d,void 0),ei(d,e))});Rh||(Rh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Wh(),a["gtm.uniqueEventId"]=c,ei("gtm.uniqueEventId",c));return qm(a)}function Gr(){var a=zr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if($a(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Hr(){for(var a=!1;!Cr&&0<zr.length;){var b=!1;if(b&&!Br&&Gr()){var c={};zr.unshift((c.event=
"gtm.init",c));Br=!0}var d=!1;if(d&&!Ar&&Gr()){var e={};zr.unshift((e.event="gtm.init_consent",e));Ar=!0}Cr=!0;delete Zh.eventModel;ai();var f=zr.shift();if(null!=f){var g=xr(f);
if(g){var h=f;f=xr(h)?h.getUntrustedUpdateValue():void 0;fi()}try{if(Qa(f))try{f.call(ci)}catch(v){}else if(Sa(f)){var l=f;if(k(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=bi(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if($a(f)){a:{var u=f;if(u.length&&k(u[0])){var t=dr[u[0]];if(t&&(!g||!er[u[0]])){f=t(u);break a}}f=void 0}if(!f){Cr=!1;continue}}a=Fr(f)||a}}finally{g&&ai(!0)}}Cr=!1}
return!a}function Ir(){var a=Hr();try{fr(n["dataLayer"],qe.F)}catch(b){}return a}
var Kr=function(){var a=Zf("dataLayer",[]),b=Zf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};el(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Zp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<N.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new yr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);zr.push.apply(zr,e);if(300<
this.length)for(Cf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Hr()&&h};var d=a.slice(0);zr.push.apply(zr,d);Jr()&&M(Ir)},Jr=function(){var a=!0;return a};var Lr={};Lr.zc=new String("undefined");
var Mr=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Lr.zc?b:a[d]);return c.join("")}};Mr.prototype.toString=function(){return this.g("undefined")};Mr.prototype.valueOf=Mr.prototype.toString;Lr.Zg=Mr;Lr.Bd={};Lr.nh=function(a){return new Mr(a)};var Nr={};Lr.Xh=function(a,b){var c=Wh();Nr[c]=[a,b];return c};Lr.Bf=function(a){var b=a?0:1;return function(c){var d=Nr[c];if(d&&"function"===typeof d[b])d[b]();Nr[c]=void 0}};Lr.Dh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Lr.Uh=function(a){if(a===Lr.zc)return a;var b=Wh();Lr.Bd[b]=a;return'google_tag_manager["'+qe.F+'"].macro('+b+")"};Lr.Oh=function(a,b,c){a instanceof Lr.Zg&&(a=a.g(Lr.Xh(b,c)),b=Pa);return{Ah:a,onSuccess:b}};var Or=["input","select","textarea"],Pr=["button","hidden","image","reset","submit"],Qr=function(a){var b=a.tagName.toLowerCase();return!Ua(Or,function(c){return c===b})||"input"===b&&Ua(Pr,function(c){return c===a.type.toLowerCase()})?!1:!0},Rr=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):lg(a,["form"],100)},Sr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Qr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var cs=n.clearTimeout,ds=n.setTimeout,O=function(a,b,c){if(vk()){b&&M(b)}else return cg(a,b,c)},es=function(){return new Date},fs=function(){return n.location.href},gs=function(a){return lh(nh(a),"fragment")},hs=function(a){return mh(nh(a))},is=function(a,b){return bi(a,b||2)},js=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Dr(a)):d=Dr(a);return d},ks=function(a,b){n[a]=b},R=function(a,b,c){b&&
(void 0===n[a]||c&&!n[a])&&(n[a]=b);return n[a]},ls=function(a,b,c){return ui(a,b,void 0===c?!0:!!c)},ms=function(a,b,c){return 0===Di(a,b,c)},ns=function(a,b){if(vk()){b&&M(b)}else eg(a,b)},os=function(a){return!!Yo(a,"init",!1)},ps=function(a){Wo(a,"init",!0)},qs=function(a){var b=Ph+"?id="+encodeURIComponent(a)+"&l=dataLayer";O(xk("https://","http://",b))},rs=function(a,b,c){Wl&&(Sb(a)||Zl(c,b,a))};
var ss=Lr.Oh;function Ps(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Qs=new Xa;function Rs(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Qs.get(e);f||(f=new RegExp(b,d),Qs.set(e,f));return f.test(a)}catch(g){return!1}}
function Ss(a,b){function c(g){var h=nh(g),l=lh(h,"protocol"),m=lh(h,"host",!0),p=lh(h,"port"),q=lh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ts(a){return Us(a)?1:0}
function Us(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Sa(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(Ts(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return Ps(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ta(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Rs(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ss(b,c)}return!1};var Vs=encodeURI,W=encodeURIComponent,Ws=fg;var Xs=function(a,b){if(!a)return!1;var c=lh(nh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ys=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Du(){return n.gaGlobal=n.gaGlobal||{}}var Eu=function(){var a=Du();a.hid=a.hid||Wa();return a.hid},Fu=function(a,b){var c=Du();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var pv=window,qv=document,rv=function(a){var b=pv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===pv["ga-disable-"+a])return!0;try{var c=pv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=pi("AMP_TOKEN",String(qv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return qv.getElementById("__gaOptOutExtension")?!0:!1};var sv={};function uv(a){delete a.eventModel[J.Gb];wv(a.eventModel)}var wv=function(a){Za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ya]||{};Za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var zv=function(a,b,c){Go(b,c,a)},Av=function(a,b,c){Go(b,c,a,!0)},Gv=function(a,b){};
function Bv(a,b){}var Y={h:{}};Y.h.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.i="ctv";Y.__ctv.m=!0;Y.__ctv.priorityOverride=0})(function(){return"366"})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");var d=c&&c.e&&c.e(b);rs(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;In(b,c)}(function(b){Y.__flc=b;Y.__flc.i="flc";Y.__flc.m=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Ys(b.vtp_customVariable||[],"key","value")||{},e={Mb:b.vtp_activityTag,Jd:c,Oa:b.vtp_conversionCookiePrefix||void 0,Jc:void 0,da:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Nd:b.vtp_advertiserId,Qd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,
Qc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",he:void 0,ke:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Yc:b.vtp_transactionVariable,transactionId:void 0,Zc:b.vtp_userVariable,pe:d},f=!1;var g=!(Qg(J.C)||f)&&void 0!=is(J.R)&&!1!==is(J.R);e.qa=g;if(b.vtp_enableAttribution){var h=b.vtp_attributionFields||[];if(h.length){O("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(e,R("google_attr").build([Ys(h,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.h.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.i="sp";Y.__sp.m=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var g=R("google_trackConversion");if(Qa(g)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=Ys(a.vtp_customParams,
"key","value"));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Im()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(l.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(l.google_gtag_event_data={items:a.vtp_eventItems}));var m=function(p,q){(l.google_additional_params=l.google_additional_params||{})[p]=
q};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);m("gdpr_consent",mn()),m("gdpr",nn());g(l)||c()}else c()},e=function(){O(b,d,c)},f=!1;Hg()&&!f?Tg(function(){Qg(J.C)?e():Lg(e,J.C)},[J.C]):(ll(),e())})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){rs(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.d=["google"],function(){(function(a){Y.__d=a;Y.__d.i="d";Y.__d.m=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType)try{var e=Vg(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}catch(f){b=null}else b=K.getElementById(a.vtp_elementId);b&&(d?c=ig(b,d):c=jg(b));return hb(String(b&&c))})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){var b=String(ii(a.vtp_gtmEventId,"event"));return b})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.i="f";Y.__f.m=!0;Y.__f.priorityOverride=0})(function(a){var b=is("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?lh(nh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):hs(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Uo(c,"gtm.click");js(d)}}(function(b){Y.__cl=b;Y.__cl.i="cl";Y.__cl.m=!0;Y.__cl.priorityOverride=0})(function(b){if(!os("cl")){var c=R("document");gg(c,"click",a,!0);ps("cl")}M(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.i="j";Y.__j.m=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=R(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];rs(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return ls(a.vtp_name,is("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;In(b,c)}(function(b){Y.__fls=b;Y.__fls.i="fls";Y.__fls.m=!0;Y.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(u){u=u||[];for(var t=[],v=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],w=0;w<u.length;w++)for(var z=0;z<v.length;z++){var x=v[z],y=u[w][x[1]];void 0!==y&&t.push(x[0]+
(w+1)+":"+W(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(is("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&W(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var h=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Ys(b.vtp_customVariable||
[],"key","value")||{},m={Mb:b.vtp_activityTag,Jd:h,Oa:b.vtp_conversionCookiePrefix||void 0,Jc:b.vtp_revenue,da:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Nd:b.vtp_advertiserId,Qd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,Qc:b.vtp_useImageTag?void 0:b.vtp_url,be:c,protocol:"",he:b.vtp_quantity,ke:!b.vtp_useImageTag,Yc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Zc:b.vtp_userVariable,pe:l},p=!1;var q=!(Qg(J.C)||p)&&void 0!=is(J.R)&&!1!==is(J.R);m.qa=q;if(b.vtp_enableAttribution){var r=b.vtp_attributionFields||[];if(r.length){O("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(m,R("google_attr").build([Ys(r,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!k(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Ta(e,r))return}else if("write"===q){if(-1<Ta(f,r))return}else if("readwrite"===q){if(-1<Ta(f,r)&&-1<Ta(e,r))return}else if("execute"===q){if(-1<Ta(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Wa(a.vtp_min,a.vtp_max)})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:is("gtm.url",1))||fs();var d=b[a("vtp_component")];if(!d||"URL"==d)return hs(String(c));var e=nh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Sa(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=lh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=lh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=is(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;rs(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.tl=["google"],function(){function a(b){return function(){if(b.Wd&&b.Yd>=b.Wd)b.Td&&R("self").clearInterval(b.Td);else{b.Yd++;var c=es().getTime();js({event:b.P,"gtm.timerId":b.Td,"gtm.timerEventNumber":b.Yd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Wd,"gtm.timerStartTime":b.Vf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Vf,"gtm.triggers":b.gi})}}}(function(b){Y.__tl=b;Y.__tl.i="tl";Y.__tl.m=!0;Y.__tl.priorityOverride=0})(function(b){M(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{P:b.vtp_eventName,Yd:0,interval:Number(b.vtp_interval),Wd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),gi:String(b.vtp_uniqueTriggerId||"0"),Vf:es().getTime()};c.Td=R("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.h.ua=["google"],function(){function a(q){return Qg(q)}function b(q,r,u){var t=!1;if(Hg()&&!t&&!e[q]){var v=!1,w=function(){var z=ql(),x="gtm"+Wh(),y=m(r),B={name:x};l(y,B,!0);var C=void 0,E=B._useUp;
z("create",q,B);z(function(){z.remove(x)})};Lg(w,J.I);Lg(w,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,u){var t=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var w=g[v]?bb(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;t++}return t},m=function(q){var r={};q.vtp_gaSettings&&G(Ys(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);G(Ys(q.vtp_fieldsToSet,"fieldName","value"),r);Qg(J.I)||(r.storage="none");Qg(J.C)||(r.allowAdFeatures=!1,r.storeGac=!1);go()||(r.allowAdFeatures=!1);fo()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(bb(r.urlPassthrough)){r._useUp=!0;var u=!1;Hg()&&!u&&(r._cs=a)}return r},p=function(q){function r(pa,ba){void 0!==ba&&D("set",pa,ba)}var u={},t={},v={},
w={};if(q.vtp_gaSettings){var z=q.vtp_gaSettings;G(Ys(z.vtp_contentGroup,"index","group"),t);G(Ys(z.vtp_dimension,"index","dimension"),v);G(Ys(z.vtp_metric,"index","metric"),w);var x=G(z);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=G(q,x)}G(Ys(q.vtp_contentGroup,"index","group"),t);G(Ys(q.vtp_dimension,"index","dimension"),v);G(Ys(q.vtp_metric,"index","metric"),w);var y=m(q),B=sl(q.vtp_functionName);if(Qa(B)){var C="",E="";q.vtp_setTrackerName&&
"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+Wh(),C=E+".");var D=function(pa){var ba=[].slice.call(arguments,0);ba[0]=C+ba[0];B.apply(window,ba)},I=function(pa,ba){return void 0===ba?ba:pa(ba)},P=function(pa,ba){if(ba)for(var Eb in ba)ba.hasOwnProperty(Eb)&&D("set",pa+Eb,ba[Eb])},Q=function(){var pa={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",
coupon:"coupon",item_list_name:"list"},ba={},Eb=(ba[J.dd]="click",ba[J.Ga]="detail",ba[J.$a]="add",ba[J.ab]="remove",ba[J.Qa]="checkout",ba[J.va]="purchase",ba[J.cb]="refund",ba),gc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},hc=function(eb,pb){for(var fb in eb)pa.hasOwnProperty(fb)&&(eb[pb]=eb[pb]||{},eb[pb].actionField=
eb[pb].actionField||{},eb[pb].actionField[pa[fb]]=eb[fb])},Fb=function(eb){for(var pb=[],fb={},qb=0;qb<eb.length;fb={ub:fb.ub},qb++)fb.ub={},Za(eb[qb],function(Tb){return function(Nc,wg){gc.hasOwnProperty(Nc)?Tb.ub[gc[Nc]]=wg:Tb.ub[Nc]=wg}}(fb)),pb.push(fb.ub);return pb},cb=function(eb,pb,fb){if(!Nb(pb))return!1;for(var qb=jb(Object(pb),fb,[]),Tb=0;qb&&Tb<qb.length;Tb++)D(eb,qb[Tb]);return!!qb&&0<qb.length},T;if(q.vtp_useEcommerceDataLayer){var vb=!1;if(q.vtp_useGA4SchemaForEcommerce){T=T||ii(q.vtp_gtmEventId,"eventModel");vb=!!T}
vb||(T=is("ecommerce",1))}else q.vtp_ecommerceMacroData&&(T=q.vtp_ecommerceMacroData.ecommerce,!T&&q.vtp_useGA4SchemaForEcommerce&&(T=q.vtp_ecommerceMacroData));if(!Nb(T))return;T=Object(T);if(q.vtp_useGA4SchemaForEcommerce){T=G(T);T.currencyCode=T.currencyCode||T.currency;var db;db=db||String(ii(q.vtp_gtmEventId,"event"));if("view_item_list"===
db&&!T.impressions&&T.items)T.impressions=Fb(T.items);else if("view_promotion"===db&&!T.promoView&&T.items)T.promoView={},T.promoView.promotions=Fb(T.items);else if("select_promotion"===db&&!T.promoClick)T.items&&(T.promoClick={},T.promoClick.promotions=Fb(T.items)),hc(T,"promoClick");else if(Eb.hasOwnProperty(db)){var Bc=Eb[db];T[Bc]||(T.items&&(T[Bc]={},T[Bc].products=Fb(T.items)),hc(T,Bc))}}var Te=jb(y,"currencyCode",T.currencyCode);void 0!==Te&&D("set","&cu",Te);cb("ec:addImpression",T,"impressions");
if(cb("ec:addPromo",T[T.promoClick?"promoClick":"promoView"],"promotions")&&T.promoClick){D("ec:setAction","promo_click",T.promoClick.actionField);return}for(var nd="detail checkout checkout_option click add remove purchase refund".split(" "),vg="refund purchase remove checkout checkout_option add click detail".split(" "),Mc=0;Mc<nd.length;Mc++){var od=T[nd[Mc]];if(od){cb("ec:addProduct",od,"products");D("ec:setAction",nd[Mc],od.actionField);if(Wl)for(var pd=0;pd<vg.length;pd++){var Cc=T[vg[pd]];
if(Cc){Cc!==od&&Cf(13);break}}break}}},U={name:E};l(y,U,!0);var qa=q.vtp_trackingId||u.trackingId;B("create",qa,U);D("set","&gtm",Im(!0));var V=!1;
Hg()&&!V&&(D("set","&gcs",Rg()),b(qa,q,E));y._x_19&&(null==Yf&&delete y._x_19,y._x_20&&!d[E]&&(d[E]=!0,B(xl(E,String(y._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(pa,ba){void 0!==q[ba]&&D("set",pa,q[ba])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",w);var L={};l(y,L,!1)&&D("set",L);var X;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var pa=y&&y.hitCallback;Qa(pa)&&pa();q.vtp_gtmOnSuccess()});var Z=function(pa,ba){return void 0===q[pa]?u[ba]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var wa={hitType:"event",eventCategory:String(Z("vtp_eventCategory","category")),eventAction:String(Z("vtp_eventAction","action")),eventLabel:I(String,
Z("vtp_eventLabel","label")),eventValue:I(ab,Z("vtp_eventValue","value"))};l(X,wa,!1);D("send",wa);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Va="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Va})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:mb})}X?D("send","pageview",X):D("send","pageview");bb(y.urlPassthrough)&&ul(C)}if(!c){var tb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(tb="internal/"+tb);c=!0;var Ob=sm(y._x_19,"/analytics.js"),nb=xk("https:","http:","//www.google-analytics.com/"+tb,y&&!!y.forceSSL);O("analytics.js"===tb&&Ob?Ob:nb,function(){var pa=
ql();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else M(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Tg(function(){p(q)},
[J.I,J.C])})}();
Y.h.jel=["google"],function(){(function(a){Y.__jel=a;Y.__jel.i="jel";Y.__jel.m=!0;Y.__jel.priorityOverride=0})(function(a){if(!os("jel")){var b=R("self"),c=b.onerror;b.onerror=function(d,e,f,g,h){c&&c(d,e,f,g,h);js({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};ps("jel")}M(a.vtp_gtmOnSuccess)})}();

Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Ue(nh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();


Y.h.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.i="cid";Y.__cid.m=!0;Y.__cid.priorityOverride=0})(function(){return qe.F})}();

Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;(function(c){Y.__gclidw=c;Y.__gclidw.i="gclidw";Y.__gclidw.m=!0;Y.__gclidw.priorityOverride=100})(function(c){M(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||Aj())&&Wj(a,l));Tj(l);Zj(["aw","dc"],l);b?nk(h,l):ok(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Yj(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=is(J.R);rn({Id:!1,qa:void 0!=
q&&!1!==q,Ic:l,Pc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&bk(["aw","dc","gb"])});}();


Y.h.aev=["google"],function(){function a(u,t,v){var w=u||ii(t,"gtm");if(w)return w[v]}function b(u,t,v,w,z){z||(z="element");var x=t+"."+v,y;if(p.hasOwnProperty(x))y=p[x];else{var B=a(u,t,z);if(B&&(y=w(B),p[x]=y,q.push(x),35<q.length)){var C=q.shift();delete p[C]}}return y}function c(u,t,v,w){var z=a(u,t,r[v]);return void 0!==z?z:w}function d(u,t){if(!u)return!1;var v=e(fs());Sa(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],z=0;z<t.length;z++){var x=t[z];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(u))return!1}else{var y=x;if(0!=y.length){if(0<=e(u).indexOf(y))return!1;w.push(e(y))}}}return!Xs(u,w)}function e(u){m.test(u)||(u="http://"+u);return lh(nh(u),"HOST",!0)}function f(u,t,v,w){switch(u){case "SUBMIT_TEXT":return b(t,v,"FORM."+u,g,"formSubmitElement")||w;case "LENGTH":var z=b(t,v,"FORM."+u,h);return void 0===z?w:z;case "INTERACTED_FIELD_ID":return l(t,v,"id",w);case "INTERACTED_FIELD_NAME":return l(t,
v,"name",w);case "INTERACTED_FIELD_TYPE":return l(t,v,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(t,v,"interactedFormFieldPosition");return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(t,v,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function g(u){switch(u.tagName.toLowerCase()){case "input":return ig(u,"value");case "button":return jg(u);default:return null}}function h(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)Qr(u.elements[v])&&
t++;return t}}function l(u,t,v,w){var z=a(u,t,"interactedFormField");return z&&ig(z,v)||w}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Y.__aev=u;Y.__aev.i="aev";Y.__aev.m=!0;Y.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,w=u.vtp_varType,z;switch(w){case "TAG_NAME":var x=a(z,t,"element");return x&&x.tagName||v;case "TEXT":return b(z,t,w,jg)||v;case "URL":var y;a:{var B=String(a(z,t,"elementUrl")||v||""),C=nh(B),E=String(u.vtp_component||"URL");switch(E){case "URL":y=B;break a;case "IS_OUTBOUND":y=
d(B,u.vtp_affiliatedDomains);break a;default:y=lh(C,E,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===u.vtp_attribute)D=c(z,t,w,v);else{var I=u.vtp_attribute,P=a(z,t,"element");D=P&&ig(P,I)||v||""}return D;case "MD":var Q=u.vtp_mdValue,U=b(z,t,"MD",Zr);return Q&&U?bs(U,Q)||v:U||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),z,t,v);default:var qa=c(z,t,w,v);rs(qa,"aev",u.vtp_gtmEventId);return qa}})}();

Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.i="gas";Y.__gas.m=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[td.Ta]=null;c[td.Qg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:fs()}function b(f,g){gg(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:hs(l),M:gs(l)})})}function c(f,g){gg(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:hs(l),M:gs(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Qa(m))try{l[f]=function(p,q,r){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:hs(fs()),
M:gs(fs())})}}catch(p){}}function e(){var f={source:null,state:R("history").state||null,url:hs(fs()),M:gs(fs())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.M!=g.M){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.M,"gtm.newUrlFragment":g.M,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;js(m)}}}(function(f){Y.__hl=f;Y.__hl.i="hl";Y.__hl.m=!0;Y.__hl.priorityOverride=
0})(function(f){var g=R("self");if(!os("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);ps("hl")}M(f.vtp_gtmOnSuccess)})}();
Y.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=R("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Y.__awct=g;Y.__awct.i="awct";Y.__awct.m=!0;Y.__awct.priorityOverride=
0})(function(g){function h(C,E,D){return"DATA_LAYER"===C?is(D):g[E]}function l(){v("gdpr_consent",mn()),v("gdpr",nn());}function m(){var C=[];return C}function p(C){var E=!0,D=[];if(C){D=m();}E&&b.push(r)}function q(){Ig()&&v("gcd","G1"+Mg(Fg));}ll();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,
google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:Im()};r.google_gtm_experiments={capi:!0};g.vtp_rdp&&(r.google_restricted_data_processing=!0);void 0!=is(J.R)&&!1!==is(J.R)&&(r.google_gtm_url_processor=function(C){return C=Lk(C)});var u=function(C){return function(E,D,I){var P=h(C,D,I);P&&(r[E]=P)}},
t=u("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=u(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),r.google_conversion_items&&
r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(C){return{value:C.price,quantity:C.quantity,item_id:C.id}})));var v=function(C,E){void 0!==E&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[C]=E)},w=function(C){return function(E,D,I,P){var Q=h(C,D,I);P(Q)&&v(E,Q)}};var z=is("developer_id"),x=xb(Nb(z)?z:{});x&&v("did",x);
(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var C=h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",Nk(C))}})();g.vtp_transportUrl&&(r.google_transport_url=g.vtp_transportUrl);var y=sm(g.vtp_transportUrl,"/pagead/conversion_async.js");
y||(y=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=w(g.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(C){return void 0!=C&&""!==C}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(C){return void 0!=C&&""!==C}));var B=!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker;
B?(g.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===tj(!1)._up&&v("gtm_up","1");l();(function(){var C=!1;!Hg()||C?p(!0):Tg(function(){l();var E=Qg(J.C),D=void 0!=is(J.R)&&!1!==is(J.R),I=!1;
I=!0;g.vtp_transportUrl||E||!D&&!I||(r.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Rg());q();p(E);E||Lg(function(){r=G(r);l();!g.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;v("gcs",Rg());q();v("gcu","1");p(!0)},J.C)},[J.C])})();a||(a=!0,O(y,f(),e(y)))})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.i="remm";Y.__remm.m=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}rs(f,"remm",a.vtp_gtmEventId);return f})}();
Y.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.i="baut";Y.__baut.m=!0;Y.__baut.priorityOverride=0})(function(b){function c(){var h=R(d);if(Array.isArray(h)){var l;try{l=Df(R("UET"),{ti:b.vtp_tagId,q:h,tm:"gtm001"})}catch(m){}l?(n[d]=l,l.push("pageLoad"),b.vtp_gtmOnSuccess()):M(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()}var d=b.vtp_uetqName||"uetq",e=R(d,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)e.push({gv:b.vtp_goalValue}),
b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var f={},g=function(h,l){void 0!==b[h]&&(f[l]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);b.vtp_gtmOnSuccess()}else if(Array.isArray(e))if(a)c();else try{O("https://bat.bing.com/bat.js",function(){a=!0;c()},b.vtp_gtmOnFailure)}catch(h){M(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()})}();
Y.h.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.i="logging";Y.__logging.m=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){var f;if(f="all"!==c&&!0){var g=!1;f=!g}if(f)throw d(e,{},"Logging is not enabled in all environments");},O:a}})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.i="smm";Y.__smm.m=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Ys(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;rs(d,"smm",a.vtp_gtmEventId);return d})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();
Y.h.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.i="hid";Y.__hid.m=!0;Y.__hid.priorityOverride=0})(function(){return Lr.zc})}();
Y.h.zone=[],function(){function a(m){for(var p=m.vtp_boundaries||[],q=0;q<p.length;q++)if(!p[q])return!1;return!0}function b(m){var p=qe.F,q=p+":"+m.vtp_gtmTagId,r=is("gtm.uniqueEventId")||0,u=Xk(function(){return new g}),t=a(m),v=m.vtp_enableTypeRestrictions?m.vtp_whitelistedTypes.map(function(y){return y.typeId}):null;v=v&&rb(v,f);if(u.registerZone(q,r,t,v))for(var w=m.vtp_childContainers.map(function(y){return y.publicId}),z=0;z<w.length;z++){var x=String(w[z]);u.registerChild(x,p,q)&&(0!==x.indexOf("GTM-")?
(function(y,B){js(arguments)}("js",new Date),l&&N.addTargetToGroup(x),Ho({},x)):qs(x))}}var c={active:!1,isAllowed:function(){return!1},Fh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Fh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(m,p){var q=this.g[m];if(!q)return d;var r=this.checkState(q.Nf,p);if(!r.active)return c;
for(var u=[],t=0;t<q.qe.length;t++){var v=this.o[q.qe[t]];v.Wb(p)&&u.push(v)}return u.length?{active:!0,isAllowed:function(w,z){z=z||[];var x=r.isAllowed;if(!x(w,z))return!1;for(var y=0;y<u.length;++y)if(u[y].isAllowed(w,z))return!0;return!1}}:c};g.prototype.unregisterChild=function(m){delete this.g[m]};g.prototype.registerZone=function(m,p,q,r){var u=this.o[m];if(u)return u.s(p,q),!1;if(!q)return!1;this.o[m]=new h(p,r);return!0};g.prototype.registerChild=function(m,p,q){var r=this.g[m];if(!r&&N[m]||
r&&r.Nf!==p)return!1;if(r)return r.qe.push(q),!1;this.g[m]={Nf:p,qe:[q]};return!0};var h=function(m,p){this.g=[{eventId:m,Wb:!0}];this.o=null;if(p){this.o={};for(var q=0;q<p.length;q++)this.o[p[q]]=!0}};h.prototype.s=function(m,p){var q=this.g[this.g.length-1];m<=q.eventId||q.Wb!=p&&this.g.push({eventId:m,Wb:p})};h.prototype.Wb=function(m){if(!this.g||0==this.g.length)return!1;for(var p=this.g.length-1;0<=p;p--)if(this.g[p].eventId<=m)return this.g[p].Wb;return!1};h.prototype.isAllowed=function(m,
p){p=p||[];if(!this.o||e[m]||this.o[m])return!0;for(var q=0;q<p.length;++q)if(this.o[p[q]])return!0;return!1};var l=!1;(function(m){Y.__zone=m;Y.__zone.i="zone";Y.__zone.m=!0;Y.__zone.priorityOverride=0})(function(m){b(m);M(m.vtp_gtmOnSuccess)})}();
Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ag(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){M(g)}}}var b=function(d,e,f){el(function(){var g=google_tag_manager_external.postscribe.getPostscribe(),h={done:e},l=K.createElement("div");l.style.display="none";l.style.visibility="hidden";K.body.appendChild(l);try{g(l,d,h)}catch(m){M(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=ss(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Ah,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,kg(g),h,e)()}else ds(function(){c(d)},
200)};Y.__html=c;Y.__html.i="html";Y.__html.m=!0;Y.__html.priorityOverride=0}();

Y.h.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.i="dbg";Y.__dbg.m=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.h.lcl=[],function(){function a(){var c=R("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Kf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=lg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=Yo("lcl",h?"nv.mwt":"mwt",0),m;m=h?Yo("lcl","nv.ids",[]):Yo("lcl","ids",[]);if(m.length){var p=Uo(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Ua(String(ng(g,"rel")||"").split(" "),function(t){return"noreferrer"===t.toLowerCase()});
q&&Cf(36);var r=R((ng(g,"target")||"_self").substring(1)),u=!0;if(js(p,Er(function(){var t;if(t=u&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.Kf=!0;f.target.dispatchEvent(w);v=!0}else v=!1;t=!v}t&&(r.location.href=ng(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else js(p,function(){},l||2E3);return!0}}};gg(c,"click",e,!1);gg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=ng(d,"href"),g=f.indexOf("#"),h=ng(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=hs(f),m=hs(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.i="lcl";Y.__lcl.m=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};Xo("lcl","mwt",h,0);e||Xo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};Xo("lcl","ids",l,[]);e||Xo("lcl","nv.ids",l,[]);os("lcl")||(a(),ps("lcl"));M(c.vtp_gtmOnSuccess)})}();
Y.h.evl=["google"],function(){function a(){var f=Number(is("gtm.start"))||0;return es().getTime()-f}function b(f,g,h,l){function m(){if(!Zg(f.target)){g.has(d.Cc)||g.set(d.Cc,""+a());g.has(d.xd)||g.set(d.xd,""+a());var q=0;g.has(d.Ec)&&(q=Number(g.get(d.Ec)));q+=100;g.set(d.Ec,""+q);if(q>=h){var r=Uo(f.target,"gtm.elementVisibility",[g.g]),u=ah(f.target);r["gtm.visibleRatio"]=Math.round(1E3*u)/10;r["gtm.visibleTime"]=h;r["gtm.visibleFirstTime"]=Number(g.get(d.xd));r["gtm.visibleLastTime"]=Number(g.get(d.Cc));
js(r);l()}}}if(!g.has(d.Kb)&&(0==h&&m(),!g.has(d.kb))){var p=R("self").setInterval(m,100);g.set(d.Kb,p)}}function c(f){f.has(d.Kb)&&(R("self").clearInterval(Number(f.get(d.Kb))),f.o(d.Kb))}var d={Kb:"polling-id-",xd:"first-on-screen-",Cc:"recent-on-screen-",Ec:"total-visible-time-",kb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Y.__evl=f;Y.__evl.i="evl";Y.__evl.m=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var z=!1,x=null;if("CSS"===l){try{x=Vg(m)}catch(D){Cf(46)}z=!!x&&v.length!=x.length}else if("ID"===l){var y=K.getElementById(m);y&&(x=[y],z=1!=v.length||v[0]!==y)}x||(x=[],z=0<v.length);if(z){for(var B=0;B<v.length;B++){var C=
new e(v[B],u);c(C)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&gh(w);0<v.length&&(w=fh(h,v,[r]))}}function h(z){var x=new e(z.target,u);z.intersectionRatio>=r?x.has(d.kb)||b(z,x,q,"ONCE"===t?function(){for(var y=0;y<v.length;y++){var B=new e(v[y],u);B.set(d.kb,"1");c(B)}gh(w);if(p&&Ap)for(var C=0;C<Ap.length;C++)Ap[C]===g&&Ap.splice(C,1)}:function(){x.set(d.kb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===t&&x.has(d.kb)&&(x.o(d.kb),x.o(d.Ec)),x.o(d.Cc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,u=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;g();p&&Bp(g);M(f.vtp_gtmOnSuccess)})}();


var Hv={};Hv.macro=function(a){if(Lr.Bd.hasOwnProperty(a))return Lr.Bd[a]},Hv.onHtmlSuccess=Lr.Bf(!0),Hv.onHtmlFailure=Lr.Bf(!1);Hv.dataLayer=ci;Hv.callback=function(a){Uh.hasOwnProperty(a)&&Qa(Uh[a])&&Uh[a]();delete Uh[a]};Hv.bootstrap=0;Hv._spx=!1;function Iv(){N[qe.F]=Hv;lb(Vh,Y.h);Xd=Xd||Lr;Yd=me}
function Jv(){sg.o().o();N=n.google_tag_manager=n.google_tag_manager||{};kn();Cj.enable_gbraid_cookie_write=!0;if(N[qe.F]){var a=N.zones;a&&a.unregisterChild(qe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Td.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Sd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Rd.push(q)}Vd=Y;Wd=Ts;var u=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;Sq();ue=new te(u);if(void 0!==
t)for(var w=["sandboxedScripts"],z=0;z<t.length;z++){var x=t[z].replace(/^_*/,"");Vh[x]=w}Vq(v);Iv();Kr();$k=!1;al=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)cl();else{gg(K,"DOMContentLoaded",cl);gg(K,"readystatechange",cl);if(K.createEventObject&&K.documentElement.doScroll){var y=!0;try{y=!n.frameElement}catch(D){}y&&dl()}gg(n,"load",cl)}Wp=!1;"complete"===K.readyState?Yp():gg(n,"load",Yp);a:{if(!Wl)break a;n.setInterval(Vl,864E5);}
google_tag_manager_external.postscribe.installPostscribe();
Sh=(new Date).getTime();}}
(function(a){if(!n["__TAGGY_INSTALLED"]){var b=!1;if(K.referrer){var c=nh(K.referrer);b="cct.google"===kh(c,"host")}if(!b){var d=ui("googTaggyReferrer");b=d.length&&d[0].length}b&&(n["__TAGGY_INSTALLED"]=!0,cg("https://cct.google/taggy/agent.js"))}var f=function(){var q=n["google.tagmanager.debugui2.queue"];q||(q=[],n["google.tagmanager.debugui2.queue"]=q,cg("https://www.googletagmanager.com/debug/bootstrap"));return q},g="x"===lh(n.location,"query",!1,void 0,"gtm_debug");if(!g&&K.referrer){var h=nh(K.referrer);g="tagassistant.google.com"===kh(h,"host")}if(!g){var l=ui("__TAG_ASSISTANT");g=l.length&&l[0].length}n.__TAG_ASSISTANT_API&&(g=!0);if(g&&Yf){var m=f(),p={messageType:"CONTAINER_STARTING",
data:{scriptSource:Yf,resume:function(){a()},containerProduct:"GTM"}};qe.cg&&(p.data.initialPublish=!0);m.push(p)}else a()})(Jv);

})()
