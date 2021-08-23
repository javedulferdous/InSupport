var bootstrap = bootstrap || (function () {
    'use strict';

    var scriptExecStartTime = +new Date();

    var dimensions = {
        init: {width:1, height: 1, platform: "desktop"}
    };

    /**
     * Proxies console.error if console.error exists, otherwise does nothing.
     */
    function reportError(/* arguments... */) {
        try {
            if (window.console && window.console.error) {
                console.error.apply(console, arguments);
            }
        } catch(error) {
            // This is probably IE8
        }
    }

    function addEventListener(eventTarget, type, listener) {
        if (eventTarget.addEventListener) {
        eventTarget.addEventListener(type, listener);
        } else if (eventTarget.attachEvent) {
            eventTarget.attachEvent(type, listener);
        } else {
            reportError("Cannot attach event listener: No event listener support.");
        }
    }

    var params;

    if(window.PaperG_V3 === undefined){
        window.PaperG_V3 = [];
    }

    if(window.PaperG_V3_Counter === undefined){
        window.PaperG_V3_Counter = 0;
    } else {
        window.PaperG_V3_Counter++;
    }

    // template params
    params = {
        clickTag: window.defaultLandingUrl,
    };

    /// Check if two DOM nodes are reference-equal
    function isSameNode(a, b) {
        // If isSameNode isn't present, we assume that the browser
        // is new enough to support === with equivalent semantics.
        // If the browser is older than isSameNode, nothing will work
        // anyway.
        if (typeof a.isSameNode !== 'undefined') {
            return a.isSameNode(b);
        }

        return a === b;
    }

    function findHref(startElement, root) {
        for (var element = startElement;
             element !== null && !isSameNode(root, element);
             element = element.parentNode) {
            var href = element.getAttribute('href');
            if (href !== null && href.length > 0) {
                return href;
            }
        }

        return null;
    }

    function attachDefaultClick() {
        var container = document.getElementById('creative-container-' + window.PaperG_V3_Counter);

        function clickFunction(event) {
            var landingPage = findHref(event.target, container);
            if (landingPage === null) {
                placelocalOpenUrlWithTracker(event);
            }
        }

        addEventListener(container, 'click', clickFunction);
    }

    var animationTime = params.animationTime;
    if(animationTime === undefined){
        animationTime = '';
    }

    function getDimensionInfo(dimensionName) {
        // Set default values
        var dimensionInfo = {'width': 0, 'height': 0, platform: 'desktop'};

        if (dimensions[params.dimension_name]) {
            // Successfully looked up from existing dimensions
            dimensionInfo = dimensions[params.dimension_name];
        } else {
            // Extract dimension info from encoded dimension name
            // Encoded Dimension Names are of the following format: wWIDHT_hHEIGHT_pPLATFORM
            // ie: w300_h250_pdesktop
            var dimensionNameParts = dimensionName.split("_");
            var numParts = dimensionNameParts.length;
            for (var i = 0; i < numParts; i++) {
                var dimensionPartInfo = getDimensionPartInfo(dimensionNameParts[i]);
                if (dimensionPartInfo) {
                    dimensionInfo[dimensionPartInfo['key']] = dimensionPartInfo['value'];
                }
            }
        }

        return dimensionInfo;
    }

    // Dimension name part is expected to be one of the following:
    // wWIDTH, hHEIGHT, or pPLATFORM
    // ie w300, h250, pdesktop
    function getDimensionPartInfo(dimensionNamePart) {
        var result = {};
        var key = dimensionNamePart.substr(0, 1);
        var value = dimensionNamePart.substr(1);

        result['value'] = value;
        switch (key) {
            case 'w':
                result['key'] ='width';
                break;
            case 'h':
                result['key'] ='height';
                break;
            case 'p':
                result['key'] ='platform';
                break;
            default:
                result = null;
                break;
        }

        return result;
    }

    function createStyleAttribute(style){
        var result = 'style=\"';
        for(var key in style){
            if(style.hasOwnProperty(key)){
                result += key.toString() + ':' + style[key] + ';';
            }
        }
        result += '"';
        return result;
    }

    return {
        init : function(sizeName, sizeWidth, sizeHeight, platform) {
            dimensions = {};
            dimensions[sizeName] = {width:sizeWidth, height: sizeHeight, platform: platform}
            params.dimension_name = sizeName;

            var dimensionInfo = getDimensionInfo(sizeName);
            var width = dimensionInfo.width;
            var height = dimensionInfo.height;
            var platform = dimensionInfo.platform;

            var divStyle = createStyleAttribute({
                display: 'block',
                position: 'relative',
                width: width + 'px',
                height: height + 'px',
                left: 0,
                top: 0,
                overflow: 'hidden'
            });

            var tempDocument = document;
            tempDocument.write('<div ' + divStyle + '>');
            tempDocument.write('<style type="text/css">.pl-loader { position:absolute; top:50%; left:50%; margin:-8px 0 0 -8px; z-index:-1; }</style>');
            tempDocument.write('<img class="pl-loader" src="data:image/gif;base64,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" alt=""/>');
            tempDocument.write('<div id="creative-container-' + window.PaperG_V3_Counter + '"></div>');
            tempDocument.write('</div>');
            attachDefaultClick();
        }
    }

})();
