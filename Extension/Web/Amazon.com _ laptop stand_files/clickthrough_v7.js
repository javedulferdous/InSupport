(function(){
    var location = window.location;

    if (window.politeload === 1) {
        window.parent.postMessage({type: "PL_SEND_LOCATION"}, "*");
        window.addEventListener("message", function (event) {
            if (event.data && event.data.type && event.data.type == "PARENT_LOCATION") {
                location = JSON.parse(event.data.value);
            }
        }, false);
    }
    function getLandingPageFromQuery(){
        return getParameterByName('landingpage');
    }
    function useRedirectClickChain(){
        return (getParameterByName('_redirect') === '1');
    }
    function getClickParam(){
      return (window==undefined || window.adacusAdConfiguration==undefined || window.adacusAdConfiguration.clickParam==undefined) ? 'click' : window.adacusAdConfiguration.clickParam; //Adacus ad server passes click tracking as ?click=tracking_url
    }
    function getLandingUrl(isForWidget){
        var landingPage = getLandingPageFromQuery();
        if (!isForWidget && landingPage !== '') return landingPage;
        if (!isForWidget && window.cmpDefaultLandingUrl !== undefined && window.cmpDefaultLandingUrl !== '') return window.cmpDefaultLandingUrl;
        return (window==undefined || window.adacusAdConfiguration==undefined || window.adacusAdConfiguration.landingUrl==undefined) ? '' : window.adacusAdConfiguration.landingUrl;
    }
    function getParameterByName(name) {
      'use strict';
      var plLocation = location;
      var striped = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]'),
          regex = new RegExp('[\\?&]' + striped + '=([^&#]*)'),
          results = regex.exec(plLocation.search);
      return results === null ?
        '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    function getClickTracker(){
        if (window.thunderClickTrackersChained === undefined || window.thunderClickTrackersChained === '') {
            var clickParam = getClickParam();
            return getParameterByName(clickParam)||'';
        } else {
            return decodeURIComponent(window.thunderClickTrackersChained);
        }
    }
    function getEncodinglevel() {
        return getParameterByName('clkencodinglevel') || '0';
    }
    function getUrl(isForWidget){
      isForWidget = isForWidget || false;
      var clickParam=getClickParam();
      var clickTracker=getParameterByName(clickParam)||'';
      var encodingLevel=getEncodinglevel();
      return clickTracker+''+encodeToLevel(getLandingUrl(isForWidget),encodingLevel);
    }
    function openLandingPage(event){
      window.open(getUrl(),'_blank');
      (event && event.preventDefault)?event.preventDefault():undefined;
    }
    function encodeToLevel(url,level){
        var levelInt = parseInt(level);
        if(!levelInt || !url) {
            return url; // if no level or level=0 or no url, no need to proceed
        }
        for (var i = 0; i < levelInt; i++) {
            url = encodeURIComponent(url);
        }
        return url;
    }
    function urlHasInternalMacros(url) {
        return url.indexOf("${THUNDER_") !== -1;
    }
    function getMacroValue(macroKey){
        var value = window.macroReplacementMap[macroKey];
        try {
            value = JSON.parse(value);
        } catch (e) {
        }
        return value;
    }
    function replaceMacros(url) {
        var macroReplacedUrl = url;
        if (urlHasInternalMacros(url) && window.macroReplacementMap) {
            var macroKeys = Object.keys(window.macroReplacementMap);
            for (var i = 0; i < macroKeys.length; i++) {
                var macroString = "${" + macroKeys[i] + "}";
                var macroValue = getMacroValue(macroKeys[i]);
                macroReplacedUrl = macroReplacedUrl.replace(macroString, macroValue);
            }
        }
        return macroReplacedUrl;
    }

    function checkFeature(feature) {
        if (feature === 'external_trackers') {
            return window.cmpDefaultLandingUrl !== undefined;
        }
    }

    window.adacusAd={
      getClickTracker:getClickTracker,
      getUrl:getUrl,
      openLandingPage:openLandingPage
    };

    function generateClickPixels() {
        if (!window.thunderClickTrackers || window.thunderClickTrackers.length === 0) {
            return;
        }

        var clickTrackerUrls = window.thunderClickTrackers.map(function(x){return x.url}).filter(function(x){return !!x});

        var pixelsContainer = document.createElement("div");
        pixelsContainer.style.width = "0px";
        pixelsContainer.style.height = "0px";
        pixelsContainer.style.visibility = "hidden";

         clickTrackerUrls.forEach(function(url) {
            var clickPixel = document.createElement("img");
            clickPixel.style.width = "0px";
            clickPixel.style.height = "0px";
            clickPixel.style.visibility = "hidden";
            clickPixel.src = url;
            pixelsContainer.appendChild(clickPixel);
        });

         document.body.appendChild(pixelsContainer);
    }

    window.addWidgetTrackerPixel = function(eventName, widgetName) {
        if (window.thunderAdEventTrackerUrl && window.thunderAdEventTrackerUrl != '') {
            var url = window.thunderAdEventTrackerUrl + '&cb=' + Date.now() + '&event=' + eventName + '&widget=' + encodeURIComponent(widgetName);
            var pixel = document.createElement('img');
            pixel.style.width = '0';
            pixel.style.height = '0';
            pixel.style.visibility = 'hidden';
            pixel.src = url;
            document.body.appendChild(pixel);
        }
    }

    function getLandingPageWithMacrosReplaced(prependClickTrackers) {
        var landingPage = '';

        var widgetLandingPage = event.currentTarget.href;
        var landingPageQueryParam = getLandingPageFromQuery();

        if (widgetLandingPage) {
            landingPage = widgetLandingPage;
        } else if (landingPageQueryParam) {
            landingPage = landingPageQueryParam;
        } else if (checkFeature('external_trackers')) {
            landingPage = window.cmpDefaultLandingUrl;
        }

        return replaceMacros(landingPage);
    }

    window.placelocalOpenUrlWithTracker = function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Get the landing page w/ macros replaced
        var landingPageWithMacrosReplaced = getLandingPageWithMacrosReplaced();

        var urlToOpen = landingPageWithMacrosReplaced;

        // By default if we're using a redirect click chain, the click trackers
        // need to be prepended
        var needTrackersPrepended = useRedirectClickChain();

        // If we didn't successfully get a landing page
        if (!urlToOpen) {
            // legacy: url already has trackers and is encoded
            urlToOpen = window.defaultLandingUrl;
            needTrackersPrepended = false;
        }

        if (useRedirectClickChain()) {
            if (needTrackersPrepended) {
                var clickTracker = getClickTracker();

                var encodingLevel = getParameterByName('clkencodinglevel')||0;
                urlToOpen = clickTracker+''+encodeToLevel(landingPageWithMacrosReplaced, encodingLevel);
            }
        } else {
            generateClickPixels();
        }

        window.open(urlToOpen, '_blank');

        return false;
    }
  })();
