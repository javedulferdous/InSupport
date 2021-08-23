console.log('uid=');
//*** page id: sli-template
//*** product id: sli-template
//*** forceOutOfStock=false
//*** public_mod_structuredData_renderJsonByItemId found

//*** public_mod_structuredData enabled

var script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.innerHTML = "{\"@context\":\"http:\\/\\/schema.org\",\"@type\":\"Organization\",\"sameAs\":[\"https://www.facebook.com/EntirelyPets\",\"https://www.instagram.com/entirelypets/\",\"https://twitter.com/EntirelyPets\",\"https://www.youtube.com/user/EntirelyPets\",\"https://www.pinterest.com/entirelypets/\",\"https://blog.entirelypets.com/\"],\"name\":\"Entirelypets.com\",\"url\":\"https:\\/\\/www.entirelypets.com\\/\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"34501 7th Street \",\"addressLocality\":\"Union City\",\"addressRegion\":\"CA\",\"addressCountry\":\"US\",\"postalCode\":\"94587\"},\"founders\":[{\"@type\":\"Person\",\"name\":\"Dr. M. Ghumman and Family\"}],\"logo\":\"https:\\/\\/entirelypets.practicaldatacore.com\\/pd_custom\\/core\\/structuredData\\/images\\/imageCompanyLogo.png\",\"foundingDate\":\"1999\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"sales@entirelypets.com\",\"telephone\":\"+1-800-889-8967\",\"contactType\":\"Customer Support\"}}"
document.getElementsByTagName('head')[0].appendChild(script); ;
var script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.innerHTML = "{\"@context\":\"http:\\/\\/schema.org\",\"@type\":\"LocalBusiness\",\"address\":{\"@type\":\"PostalAddress\"},\"priceRange\":\"0.0100-5181.2500\"}"
document.getElementsByTagName('head')[0].appendChild(script); ;
//*** mod_storeClosed called

var pdServerTime = new Date("2020-11-01T07:54:48-06:00");
var pdProductId = "sli-template";
var productIdListRewardsCsv = "sli-template";
var productIdListCsv = "sli-template";

//************************************************
//************ JS/CSS FILE ROUTINES  *************
//************************************************
function pdLoadJsCssFile(filename, filetype){
    if (filetype=="js") {
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("async",true);
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") {
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}
function pdAddStyle(css) {
    var style = document.createElement("style");
    style.innerHTML = css;
    document.getElementsByTagName("body")[0].appendChild(style);
}


/*	pdGetElementsByClassName -- Revised to avoid JS conflicts with libraries that override native "getElementsByClassName" browser function in IE
	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/	
var pdGetElementsByClassName = function (className, tag, elm){
	var ieVersion = getInternetExplorerVersion();
	if (ieVersion == -1 && document.getElementsByClassName) {
		pdGetElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\b" + tag + "\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		pdGetElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		pdGetElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\s)" + classes[k] + "(\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return pdGetElementsByClassName(className, tag, elm);
};
function pdIsBlank(item) {
	item = String(item).toLowerCase();
	if(item == "undefined" || item == "" || item == "null") return true;
	else return false;
}
function isBlank(item) {
	return pdIsBlank(item);
}
function pdGetCurrentDomainName() {
	var url = String(location);
	var domainName = pdExtractDomain(url);
	return domainName;
}
function pdExtractDomain(url) {
	var url = url.replace("http://", "");
	url = url.replace("https://", "");
	var slashIndex = url.indexOf("/");
	if(slashIndex == -1) slashIndex = url.length;
	var url = url.substring(0, slashIndex);
	var urlSectionArray = url.split('.');
	var urlSectionArrayLength = urlSectionArray.length;
	var domainName = "";
	for(var i=urlSectionArrayLength - 2;i<urlSectionArrayLength; i++) {
		domainName += "." + urlSectionArray[i];
	}
	return domainName;
}
function pdGetCookie(cookieName) {
	var allCookies = String(document.cookie);
	var cookieStart = allCookies.indexOf(cookieName + "=");
	if(cookieStart == -1) return "";
	cookieStart = cookieStart + cookieName.length + 1;
	var cookieEnd = allCookies.indexOf(";", cookieStart);
	if(cookieEnd == -1) cookieEnd = allCookies.length;
	var cookieValue = allCookies.substring(cookieStart, cookieEnd);
	cookieValue = decodeURIComponent(cookieValue);
	if(cookieName == "pdRememberMe") cookieValue = String(cookieValue).replace("+"," ");	//*** ENCODING WORKAROUND
	return cookieValue;
}
function pdSetCookie(cookieName, cookieValue, cookieDomain, cookiePath, expirationDate) {
	if(isBlank(cookieDomain)) cookieDomain = pdGetCurrentDomainName();
	if(isBlank(cookiePath)) cookiePath = "/";
	var cookieString = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";domain=" + cookieDomain + ";path=" + cookiePath;
	if(!isBlank(expirationDate)) {
		cookieString += ";expires=" + expirationDate.toGMTString();
	}
	document.cookie = cookieString;
	return true;
}
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function pdIsMobileDevice() {
	var isMobile = false;
	var signatureList = new Array('iphone', 'ipod', 'android', 'palm', 'blackberry', 'devices60', 'devicesymbian', 'windows ce', 'opera mini', 'webos', 'windows phone', 'playbook');
	var agent = navigator.userAgent.toLowerCase();
	for(var i=0;i<signatureList.length;i++) {
		if(agent.indexOf(signatureList[i]) > -1) {
			if(signatureList[i] == 'android') {	//*** ONLY CONSIDER android a mobile device if "mobile" is also present in user agent string
				if(agent.indexOf("mobile") > -1) isMobile = true;
			} else {
			 	isMobile = true;
			}
		}
	}
	return isMobile;
}
function pdIsIpad() {
	var isIpad = false;
	var signatureList = new Array('ipad');
	var agent = navigator.userAgent.toLowerCase();
	for(var i=0;i<signatureList.length;i++) {
		if(agent.indexOf(signatureList[i]) > -1) isIpad = true;
	}
	return isIpad;
}
function pdIsTablet() {
	var isTablet = false;
	var signatureList = new Array('ipad', 'android');
	var agent = navigator.userAgent.toLowerCase();
	for(var i=0;i<signatureList.length;i++) {
		if(agent.indexOf(signatureList[i]) > -1) {
			isTablet = true;	//*** ASSUME TABLET
			if(signatureList[i] == 'android') {	//*** ONLY CONSIDER android a mobile device if "mobile" is also present in user agent string
				if(agent.indexOf("mobile") > -1) isTablet = false;
			} else {
			 	isTablet = true;
			}
		}
	}
	return isTablet;
}
function pdFormatCurrency(num, includeDollarSign) {
	num = num.toString().replace(/$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));	
	var returnValue = (((sign)?'':'-') + num + '.' + cents);
	if(includeDollarSign == true) returnValue = "$" + returnValue;	
	return returnValue;
}
function pdFindParentForm(element) {
    var elm,parentForm;
    for (elm = element.parentNode; elm; elm = elm.parentNode) {
        if(elm.tagName.toLowerCase() == "form") {
        	parentForm = elm;
        	break;
        }
    }
	return parentForm;
}
function pdHideForLoggedInUser() {
	var hideList = pdGetElementsByClassName("pdHideForLoggedInUser", null);
	for(var i=0;i<hideList.length;i++) {
		hideList[i].style.display = "none";	
	}
	return false;
}
function pdShowForLoggedInUser() {
	var showList = pdGetElementsByClassName("pdShowForLoggedInUser", null);
	var displayType = "block";
	for(var i=0;i<showList.length;i++) {
		if(showList[i].nodeName == "TR") displayType = "table-row";
		else if(showList[i].nodeName == "SPAN") displayType = "inline";
		else displayType = "block";
		showList[i].style.display = displayType;
	}
	return false;
}
function pdHideForDiscountedUser() {
	var hideList = pdGetElementsByClassName("pdHideForDiscountedUser", null);
	for(var i=0;i<hideList.length;i++) {
		hideList[i].style.display = "none";	
	}
	return false;
}
function pdShowForDiscountedUser() {
	var showList = pdGetElementsByClassName("pdShowForDiscountedUser", null);
	var displayType = "block";
	for(var i=0;i<showList.length;i++) {
		if(showList[i].nodeName == "TR") displayType = "table-row";
		else if(showList[i].nodeName == "SPAN") displayType = "inline";
		else displayType = "block";
		showList[i].style.display = displayType;
	}
	return false;
}
function pdHideForWholesale() {
	var hideList = pdGetElementsByClassName("pdHideForWholesale", null);
	for(var i=0;i<hideList.length;i++) {
		hideList[i].className = "pdHide";	//*** DEPRECATED
		hideList[i].style.display = "none";
	}
	hideList = pdGetElementsByClassName("pdHideFromWholesale", null);	//*** LEGACY SUPPORT (DEPRECATED)
	for(var i=0;i<hideList.length;i++) {
		hideList[i].className = "pdHide";	//*** DEPRECATED
		hideList[i].style.display = "none";
	}
	return false;
}
function pdShowForWholesale() {
	var showList = pdGetElementsByClassName("pdShowForWholesale", null);
	var displayType = "block";
	for(var i=0;i<showList.length;i++) {
		if(showList[i].nodeName == "TR") displayType = "table-row";
		else if(showList[i].nodeName == "SPAN") displayType = "inline";
		else displayType = "block";
		showList[i].style.display = displayType;
	}
	return false;
}if (typeof pdPerformTimestampActions === "function") {
	pdPerformTimestampActions(1604238888000);
}
pdLoadJsCssFile("https://cdn.practicaldatacore.com/entirelypets/mod_productReviews/pdPrStyle.css?cb=1782487", "css");
pdLoadJsCssFile("https://cdn.practicaldatacore.com/entirelypets/mod_questionsAndAnswers/pdQaStyle.css?cb=1782487", "css");
//*** searchhere: test
	jQuery(document).ready(function(){
		var answerIdList = new Array();
		for (var i = 0; i < answerIdList.length; i++) {
			var answerId = answerIdList[i];
			console.log(jQuery("div[answerId='"+answerIdList[i]+"']"));
			jQuery("div[answerId='"+answerIdList[i]+"']").attr("style", "display: block");
		}
	});//*** Q&A: pauseQuestions != true\n

//*** CATEGORY ID: **** 
//*** PRODUCT ID:sli-template **** 
//*** PRODUCT LIST - REWARDS:sli-template **** 
//*** PRODUCT LIST - REVIEWS:sli-template **** 

 //**** INCLUDE PRODUCT.PHP FILE **** 

 //**** REWARDS ****** 

//*** BEGIN public_mod_myRewards_getRenderedPromotionMessagingJsInsertionCode_forArray ***
//*** REWARDS CSS ***
jQuery("<style>").attr("type", "text/css").html(".pdRewardsPromoWrap{}.pdRewardsPromoWrap a{font-size:11px;}.pdRewardsPromoDefault{padding: 0px;height: 40px;}.pdRewardsPromoDateRange{	margin-top:5px;	padding:5px;	background-color:#f3f3b3;	border:1px solid #d4ba32;	font-weight:700;}.pdRewardsPromoProduct{	margin-top:5px;	padding:5px;	background-color:#f3f3b3;	border:1px solid #d4ba32;	font-weight:700;}.pdRewardsPromoRules{	margin-top:5px;	padding:5px;	background-color:#f3f3b3;	border:1px solid #d4ba32;	font-weight:700;}.pdRewardsPromoWrap {	width: 300px;	height: 40px;	margin-left: -5px;		margin: 0;	background: #fafafa url(\"http://lib.store.yahoo.net/lib/entirelypets/rewards_bg.png\") top left no-repeat;	border-top: 1px solid #fff;	border-bottom: 1px solid #fff;}.pdRewardsPromoWrap span.earn {	margin: 0;	padding: 0;		font-family: \'Oswald\', Tahoma, Geneva, sans-serif;	margin: 2px 0 0 25px;	font-weight: normal;	color: #e77b31;	font-size: 12px;	display: block;	float: left;}.pdRewardsPromoWrap span.points-number {	margin: 0;	padding: 0;		font-family: \'Arvo\', Tahoma, Geneva, sans-serif;	margin: 0px 10px;	font-weight: normal;	color: #ff6600;	font-size: 36px;	display: block;	float: left;}.pdRewardsPromoWrap span.points {	margin: 0;	padding: 0;		font-family: \'Oswald\', Tahoma, Geneva, sans-serif;	margin: 0px;	font-weight: normal;	color: #ff6600;	font-size: 13px;	display: block;	float: left;}.pdRewardsPromoWrap span.for-item a {	margin: 0;	padding: 0;		font-family: \'Oswald\', Tahoma, Geneva, sans-serif;	margin: 0px;	font-weight: normal;	color: #006699;	font-size: 13px;	display: block;}.learn-more {	clear: both;	margin: 2px 10px;	font-family: Tahoma, Geneva, sans-serif;	font-size: 11px;	text-align: center;	}").appendTo("head");
jQuery("div.pdRewardsPromoMessage[productId='sli-template']").html("");

//*** END public_mod_myRewards_getRenderedPromotionMessagingJsInsertionCode_forArray ***

function pdAddToFavorites(orderForm,index,productUrl) {
	var pdAddToFavoritesAction = "https://myaccount.entirelypets.com/mod_favorites/favoritesAddItem.php";
	
		if(pdIsBlank(index)) index = 0;
		var item = "vwitem" + index;
		var itemAttr = "vwattr" + index + "_";
		//*** CAN'T FIND MULTIFORM ELEMENT?  FALL BACK TO SINGLE ITEM CASE
		if(typeof orderForm[item] == "undefined") {
			item = "item";
			itemAttr = "vwattr_";
		}
		//******** ATTACH PRODUCT ID INPUT **************
		if(item != "item") {
			var inputProductId = document.createElement("INPUT");
			inputProductId.type = "hidden";
			inputProductId.name = "add-single-favorites";
			inputProductId.value = index;
			orderForm.appendChild(inputProductId);
		}
		if(productUrl == "autoDetect") productUrl = String(document.location);
		if(!pdIsBlank(productUrl)) {
			var inputOptions = document.createElement("INPUT");
			inputOptions.type = "hidden";
			inputOptions.name = "productUrl";
			inputOptions.value = productUrl;
			orderForm.appendChild(inputOptions);
		}
		var tempAction = orderForm.action;
		var copiedQueryString = "";
		var queryStringPosition = tempAction.indexOf("?");
		if(queryStringPosition > -1) {
			copiedQueryString = tempAction.substring(queryStringPosition, tempAction.length);
			copiedQueryString = copiedQueryString.replace("+", "%20");
		}
		orderForm.action=pdAddToFavoritesAction + copiedQueryString;
		if(orderForm.target != "_top") orderForm.target = ""; //*** COMPAT W/ SCFC
		orderForm.submit();
		orderForm.action = tempAction;
		orderForm.removeChild(inputProductId);
		orderForm.removeChild(inputOptions);
		return false;
	}
//*** mod_backInStockNotification
//**** INCLUDE PRODUCT ID LIST CSV HANDLING (DYNAMIC RATING STARS) ****
var pdStarsRefreshFlag = true;function pdDisplayCategoryStars() {
	if(pdStarsRefreshFlag == true) {
		jQuery(".pdRatingStarsWrapper[productId='sli-template']").html("<div class=\"pdRatingStars pdCategory pd0\"><span></span><span></span><span></span><span></span><span></span></div> <span class=\"pdPrReviewCount\">(0<span class=\"pdPrReviewCountLabel\"> reviews</span>)</span>");
		pdStarsRefreshFlag = false;
	}

}
pdDisplayCategoryStars();


if (typeof pdPerformLoginActions === "function") {
	pdPerformLoginActions(false);
}
//*** mod_favorites enabled

//*** public_mod_favorites_renderAddToFavoritesButton NOT found

//*********************************
//*** BEGIN mod_promotionCenter ***
//*********************************

//*** COULD NOT FIND PUBLIC FUNCTION 'public_mod_promotionCenter_getRenderedPageScript2()'

//*******************************
//*** END mod_promotionCenter ***
//*******************************


//**** CART ITEM COUNT MESSAGE ***** 
function pdDisplayCartItemCount() {
	var pdCartItemCount = pdGetCookie('pdCartItemCount');
	var pdCartItemCountMessage = pdCartItemCount;
	jQuery('.pdCartItemCountMessage').html(pdCartItemCountMessage);
}
pdDisplayCartItemCount();

//*** pageScript end (0.0297s elapsed)
