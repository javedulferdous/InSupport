(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[52,51],{"5cV6":function(e,t,r){"use strict";var o=r("IGGJ");t.__esModule=!0,t.adapt=void 0;var a=o(r("KEM+"));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}t.adapt=function(e){var t={};if(e){var r=e;e.adModules&&e.adModules.length>0&&(r=e.adModules[0]),t.moduleData={configs:{title:r.title||"Sponsored Products",titleColor:r.titleColor,themeColor:r.themeColor,themeImage:r.themeImage,firstTile:r.firstTile,themeButton:r.themeButton,themeButtonColor:r.themeButtonColor,themeTextColor:r.themeTextColor,seeAllLink:r.seeAllLink,seeAllLinkHexCode:r.seeAllLinkHexCode,products:r.products||[],midasModuleData:r.midasModuleData||{}}}}return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)}},VYX2:function(e,t,r){"use strict";var o=r("IGGJ");t.__esModule=!0,t.default=void 0;var a=o(r("97Jx")),n=o(r("KEM+")),l=o(r("ERkP")),i=r("Ar68"),s=r("Hxg9"),u=o(r("I/FK"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var d=function(e){var t=e.moduleData.configs.midasModuleData;e.moduleData.configs.tileOptions={price:"true",productTitle:"true",ratingsReviews:"true",twoDayShipping:"true",itemFlag:e.showFlags?"true":"false",displayProductBrand:e.showBrand?"true":"false"};var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.moduleData.configs);return"function"==typeof e.onRenderCallback&&e.onRenderCallback.apply(null,[r]),l.default.createElement("div",(0,a.default)({className:"module-wpa"},(0,i.generateMidasCarouselProps)(t)),l.default.createElement(u.default,e),(0,i.renderMidasCarouselBeacons)(t))};d.defaultProps={userLoggedIn:!1,isMobile:!1,persistControls:!1,showBrand:!1,showFlags:!0,mobileImageSize:{width:194,height:194},desktopImageSize:{width:282,height:282},responsive:[{selectors:["x-small","small"],settings:{slidesToShow:2,slidesToScroll:2,cellSpacing:8}},{selectors:["medium","large","x-large"],settings:{slidesToShow:4,slidesToScroll:4,cellSpacing:12}}],siteMode:s.SITE_MODE.CORE_SITE,shouldAddImageItemProp:!0},d.displayName="WpaModule";var p=d;t.default=p},"l++u":function(e,t,r){"use strict";var o=r("IGGJ");t.__esModule=!0,t.default=t.wpaMap=void 0;var a=o(r("KEM+")),n=r("RPFl"),l=r("FM2l");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e,t){switch(void 0===e&&(e=n.initialState),t.type){case n.RECEIVE_WPA:return t.result?s({},e,{result:t.result}):e;case l.invalidateWpa:return t.err?s({},e,{err:t.err}):e;case l.wpaRendered:return s({},e,{parameters:t.parameters||"",adaptedData:t.adaptedData||{},resultDetail:t.resultDetail||{}});case n.LOADING:return s({},e,{loading:!0});case n.LOADED:return s({},e,{loading:!1,midasContext:t.midasContext,midasConfig:t.midasConfig});default:return e}};t.wpaMap=u;var c=u;t.default=c},oibd:function(e,t,r){"use strict";var o=r("IGGJ");t.__esModule=!0,t.setupWpa=void 0;var a=o(r("KEM+")),n=o(r("97Jx")),l=o(r("ERkP")),i=o(r("7nmT")),s=r("OsfY"),u=o(r("V8Kl")),c=o(r("l++u")),d=o(r("7+Xa")),p=r("M0DP"),f=r("5cV6"),O=r("9FwH"),g=o(r("VYX2"));function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e,t,r){e.el&&(t.isMobile="mobile"===e.platform,t.store=(0,s.applyMiddleware)(u.default)(s.createStore)(c.default),t.shouldAddImageItemProp=r,i.default.render(l.default.createElement(g.default,(0,n.default)({},t,e)),(0,d.default)().document.getElementById(e.el)))};t.setupWpa=function(e){void 0===e&&(e=!0);var t=(0,d.default)();t._MIDAS=m({},t._MIDAS),t._MIDAS.callbacks=[function(t){return(t=t||{}).pageType&&t.pageId&&(0,O.isWpaAjaxEnabledForPageType)(t.pageType)&&!(0,O.isWpaAjaxBlacklistedPageId)(t.pageType,t.pageId)&&(0,p.fetchWpa)(t).then((function(r){if(r&&r.result&&"SUCCESS"===r.status)if(t.multiModule)for(var o=t.modules||[],a=r.result.adModules||[],n=0;n<a.length;n++){var l=(0,f.adapt)(a[n]),i=o[n]||{};y(m(m({},t),i),l,e)}else{var s=(0,f.adapt)(r.result);y(t,s,e)}})).catch((function(e){throw e}))}]}}}]);
//# sourceMappingURL=/map/../map/wpa-utils.bundle.af264c0ca30537629b9e.js.map