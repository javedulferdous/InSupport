/*! jQuery UI - v1.11.3 - 2015-02-25
* http://jqueryui.com
* Includes: core.css, datepicker.css, theme.css
* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Verdana%2CArial%2Csans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=0px&bgColorHeader=%23ffffff&bgTextureHeader=highlight_soft&bgImgOpacityHeader=75&borderColorHeader=%23ffffff&fcHeader=%23263238&iconColorHeader=%2300aef0&bgColorContent=%23ffffff&bgTextureContent=flat&bgImgOpacityContent=75&borderColorContent=%23ffffff&fcContent=%23263238&iconColorContent=%23263238&bgColorDefault=%23ffffff&bgTextureDefault=glass&bgImgOpacityDefault=75&borderColorDefault=%23ffffff&fcDefault=%23555555&iconColorDefault=%23888888&bgColorHover=%2300aef0&bgTextureHover=glass&bgImgOpacityHover=75&borderColorHover=%23ffffff&fcHover=%23263238&iconColorHover=%23263238&bgColorActive=%23ffc000&bgTextureActive=glass&bgImgOpacityActive=65&borderColorActive=%23ffffff&fcActive=%23263238&iconColorActive=%23263238&bgColorHighlight=%2392defb&bgTextureHighlight=glass&bgImgOpacityHighlight=55&borderColorHighlight=%23ffffff&fcHighlight=%23263238&iconColorHighlight=%23263238&bgColorError=%23fef1ec&bgTextureError=glass&bgImgOpacityError=95&borderColorError=%23cd0a0a&fcError=%23cd0a0a&iconColorError=%23cd0a0a&bgColorOverlay=%23aaaaaa&bgTextureOverlay=flat&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=%23aaaaaa&bgTextureShadow=flat&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden {
	display: none;
}
.ui-helper-hidden-accessible {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.ui-helper-reset {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	line-height: 1.3;
	text-decoration: none;
	font-size: 100%;
	list-style: none;
}
.ui-helper-clearfix:before,
.ui-helper-clearfix:after {
	content: "";
	display: table;
	border-collapse: collapse;
}
.ui-helper-clearfix:after {
	clear: both;
}
.ui-helper-clearfix {
	min-height: 0; /* support: IE7 */
}
.ui-helper-zfix {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: absolute;
	opacity: 0;
	filter:Alpha(Opacity=0); /* support: IE8 */
}

.ui-front {
	z-index: 100;
}


/* Interaction Cues
----------------------------------*/
.ui-state-disabled {
	cursor: default !important;
}


/* Icons
----------------------------------*/

/* states and images */
#hc_bodyElements .ui-icon {
	display: block;
	text-indent: -99999px;
	overflow: hidden;
	background-repeat: no-repeat;
}

/* tablet override for arrows */
.hc_d_tablet #hc_bodyElements .ui-icon {
    width:22px;
    height:22px;
}

/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.ui-datepicker {
	width: 17em;
	padding: .2em .2em 0;
	display: none;
}
.ui-datepicker .ui-datepicker-header {
	position: relative;
	padding: .2em 0;
}
.ui-datepicker .ui-datepicker-prev,
.ui-datepicker .ui-datepicker-next {
	position: absolute;
	top: 2px;
	width: 1.8em;
	height: 1.8em;
}
.ui-datepicker .ui-datepicker-prev-hover,
.ui-datepicker .ui-datepicker-next-hover {
	top: 1px;
}
.ui-datepicker .ui-datepicker-prev {
	left: 2px;
}
.ui-datepicker .ui-datepicker-next {
	right: 2px;
}
.ui-datepicker .ui-datepicker-prev-hover {
	left: 1px;
}
.ui-datepicker .ui-datepicker-next-hover {
	right: 1px;
}
.ui-datepicker .ui-datepicker-prev span,
.ui-datepicker .ui-datepicker-next span {
	display: block;
	position: absolute;
	left: 50%;
	margin-left: -8px;
	top: 50%;
	margin-top: -8px;
}
.ui-datepicker .ui-datepicker-title {
	margin: 0 2.3em;
	line-height: 1.8em;
	text-align: center;
}
.ui-datepicker .ui-datepicker-title select {
	font-size: 1em;
	margin: 1px 0;
}
.ui-datepicker select.ui-datepicker-month,
.ui-datepicker select.ui-datepicker-year {
	width: 45%;
}
.ui-datepicker table {
	width: 100%;
	font-size: .9em;
	border-collapse: collapse;
	margin: 0 0 .4em;
}
.ui-datepicker th {
	padding: .7em .3em;
	text-align: center;
	font-weight: bold;
	border: 0;
}
.ui-datepicker td {
	border: 0;
	padding: 0;
}
.ui-datepicker td span,
.ui-datepicker td a {
	display: block;
	padding: .2em;
	text-align: right;
	text-decoration: none;
}
.ui-datepicker .ui-datepicker-buttonpane {
	background-image: none;
	margin: .7em 0 0 0;
	padding: 0 .2em;
	border-left: 0;
	border-right: 0;
	border-bottom: 0;
}
.ui-datepicker .ui-datepicker-buttonpane button {
	float: right;
	margin: .5em .2em .4em;
	cursor: pointer;
	padding: .2em .6em .3em .6em;
	width: auto;
	overflow: visible;
}
.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {
	float: left;
}

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi {
	width: auto;
}
.ui-datepicker-multi .ui-datepicker-group {
	float: left;
}
.ui-datepicker-multi .ui-datepicker-group table {
	width: 95%;
	margin: 0 auto .4em;
}
.ui-datepicker-multi-2 .ui-datepicker-group {
	width: 50%;
}
.ui-datepicker-multi-3 .ui-datepicker-group {
	width: 33.3%;
}
.ui-datepicker-multi-4 .ui-datepicker-group {
	width: 25%;
}
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,
.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {
	border-left-width: 0;
}
.ui-datepicker-multi .ui-datepicker-buttonpane {
	clear: left;
}
.ui-datepicker-row-break {
	clear: both;
	width: 100%;
	font-size: 0;
}

/* RTL support */
.ui-datepicker-rtl {
	direction: rtl;
}
.ui-datepicker-rtl .ui-datepicker-prev {
	right: 2px;
	left: auto;
}
.ui-datepicker-rtl .ui-datepicker-next {
	left: 2px;
	right: auto;
}
.ui-datepicker-rtl .ui-datepicker-prev:hover {
	right: 1px;
	left: auto;
}
.ui-datepicker-rtl .ui-datepicker-next:hover {
	left: 1px;
	right: auto;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane {
	clear: right;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane button {
	float: left;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,
.ui-datepicker-rtl .ui-datepicker-group {
	float: right;
}
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,
.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {
	border-right-width: 0;
	border-left-width: 1px;
}

/* Component containers
----------------------------------*/
#hc_bodyElements .ui-widget .ui-widget {
	font-size: 1em;
}
#hc_bodyElements .ui-widget input,
#hc_bodyElements .ui-widget select,
#hc_bodyElements .ui-widget textarea,
#hc_bodyElements .ui-widget button {
	font-family: Verdana,Arial,sans-serif;
	font-size: 1em;
}
#hc_bodyElements .ui-widget-content {
	background: #ffffff;
	color: #263238;
}
#hc_bodyElements .ui-widget-content a {
	color: #263238;
}
#hc_bodyElements .ui-widget-header {
	background: #ffffff;
	color: #263238;
	font-weight: bold;
}
#hc_bodyElements .ui-widget-header a {
	color: #263238;
}

/* Interaction states
----------------------------------*/
#hc_bodyElements .ui-state-default,
#hc_bodyElements .ui-widget-content .ui-state-default,
#hc_bodyElements .ui-widget-header .ui-state-default {
	font-weight: normal;
	color: #555555;
}
#hc_bodyElements .ui-state-default a,
#hc_bodyElements .ui-state-default a:link,
#hc_bodyElements .ui-state-default a:visited {
	color: #555555;
	text-decoration: none;
}
#hc_bodyElements .ui-state-hover,
#hc_bodyElements .ui-widget-content .ui-state-hover,
#hc_bodyElements .ui-widget-header .ui-state-hover,
#hc_bodyElements .ui-state-focus,
#hc_bodyElements .ui-widget-content .ui-state-focus,
#hc_bodyElements .ui-widget-header .ui-state-focus {
    background: #00aef0;
	font-weight: normal;
	color: #263238;
}
#hc_bodyElements .ui-state-hover a,
#hc_bodyElements .ui-state-hover a:hover,
#hc_bodyElements .ui-state-hover a:link,
#hc_bodyElements .ui-state-hover a:visited,
#hc_bodyElements .ui-state-focus a,
#hc_bodyElements .ui-state-focus a:hover,
#hc_bodyElements .ui-state-focus a:link,
#hc_bodyElements .ui-state-focus a:visited {
	color: #263238;
	text-decoration: none;
}
#hc_bodyElements .ui-state-active,
#hc_bodyElements .ui-widget-content .ui-state-active,
#hc_bodyElements .ui-widget-header .ui-state-active {
	background: #ffc000;
	font-weight: normal;
	color: #263238;
}
#hc_bodyElements .ui-state-active a,
#hc_bodyElements .ui-state-active a:link,
#hc_bodyElements .ui-state-active a:visited {
	color: #263238;
	text-decoration: none;
}

/* Interaction Cues
----------------------------------*/
#hc_bodyElements .ui-state-highlight,
#hc_bodyElements .ui-widget-content .ui-state-highlight,
#hc_bodyElements .ui-widget-header .ui-state-highlight {
	background: #ffffff;
	color: #263238;
}
#hc_bodyElements .ui-state-highlight a,
#hc_bodyElements .ui-widget-content .ui-state-highlight a,
#hc_bodyElements .ui-widget-header .ui-state-highlight a {
	color: #263238;
}
#hc_bodyElements .ui-state-error,
#hc_bodyElements .ui-widget-content .ui-state-error,
#hc_bodyElements .ui-widget-header .ui-state-error {
	border: 1px solid #cd0a0a;
	background: #fef1ec;
	color: #cd0a0a;
}
#hc_bodyElements .ui-state-error a,
#hc_bodyElements .ui-widget-content .ui-state-error a,
#hc_bodyElements .ui-widget-header .ui-state-error a {
	color: #cd0a0a;
}
#hc_bodyElements .ui-state-error-text,
#hc_bodyElements .ui-widget-content .ui-state-error-text,
#hc_bodyElements .ui-widget-header .ui-state-error-text {
	color: #cd0a0a;
}
#hc_bodyElements .ui-priority-primary,
#hc_bodyElements .ui-widget-content .ui-priority-primary,
#hc_bodyElements .ui-widget-header .ui-priority-primary {
	font-weight: bold;
}
#hc_bodyElements .ui-priority-secondary,
#hc_bodyElements .ui-widget-content .ui-priority-secondary,
#hc_bodyElements .ui-widget-header .ui-priority-secondary {
	opacity: .7;
	filter:Alpha(Opacity=70); /* support: IE8 */
	font-weight: normal;
}
#hc_bodyElements .ui-state-disabled,
#hc_bodyElements .ui-widget-content .ui-state-disabled,
#hc_bodyElements .ui-widget-header .ui-state-disabled {
	background-image: none;
}

/* Icons
----------------------------------*/

/* states and images */
#hc_bodyElements .ui-icon {
	width: 16px;
	height: 16px;
}
#hc_bodyElements .ui-icon,
#hc_bodyElements .ui-widget-content .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_263238_256x240.png");
}
#hc_bodyElements .ui-widget-header .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_00aef0_256x240.png");
}
#hc_bodyElements .ui-state-default .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_888888_256x240.png");
}
#hc_bodyElements .ui-state-hover .ui-icon,
#hc_bodyElements .ui-state-focus .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_263238_256x240.png");
}
#hc_bodyElements .ui-state-active .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_263238_256x240.png");
}
#hc_bodyElements .ui-state-highlight .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_263238_256x240.png");
}
#hc_bodyElements .ui-state-error .ui-icon,
#hc_bodyElements .ui-state-error-text .ui-icon {
	background-image: url("https://cdn.datahc.com/Content/Styles/Desktop/Main/jquery-ui/datepicker/images/ui-icons_cd0a0a_256x240.png");
}

/* tablet override for arrows */
.hc_d_tablet #hc_bodyElements .ui-widget-header .ui-icon {
    background:url(https://cdn.datahc.com/Images/datepicker-arrows-tablet.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat;
}

/* positioning */
#hc_bodyElements .ui-icon-blank { background-position: 16px 16px; }
#hc_bodyElements .ui-icon-carat-1-n { background-position: 0 0; }
#hc_bodyElements .ui-icon-carat-1-ne { background-position: -16px 0; }
#hc_bodyElements .ui-icon-carat-1-e { background-position: -32px 0; }
#hc_bodyElements .ui-icon-carat-1-se { background-position: -48px 0; }
#hc_bodyElements .ui-icon-carat-1-s { background-position: -64px 0; }
#hc_bodyElements .ui-icon-carat-1-sw { background-position: -80px 0; }
#hc_bodyElements .ui-icon-carat-1-w { background-position: -96px 0; }
#hc_bodyElements .ui-icon-carat-1-nw { background-position: -112px 0; }
#hc_bodyElements .ui-icon-carat-2-n-s { background-position: -128px 0; }
#hc_bodyElements .ui-icon-carat-2-e-w { background-position: -144px 0; }
#hc_bodyElements .ui-icon-triangle-1-n { background-position: 0 -16px; }
#hc_bodyElements .ui-icon-triangle-1-ne { background-position: -16px -16px; }
#hc_bodyElements .ui-icon-triangle-1-e { background-position: -32px -16px; }
#hc_bodyElements .ui-icon-triangle-1-se { background-position: -48px -16px; }
#hc_bodyElements .ui-icon-triangle-1-s { background-position: -64px -16px; }
#hc_bodyElements .ui-icon-triangle-1-sw { background-position: -80px -16px; }
#hc_bodyElements .ui-icon-triangle-1-w { background-position: -96px -16px; }
#hc_bodyElements .ui-icon-triangle-1-nw { background-position: -112px -16px; }
#hc_bodyElements .ui-icon-triangle-2-n-s { background-position: -128px -16px; }
#hc_bodyElements .ui-icon-triangle-2-e-w { background-position: -144px -16px; }
#hc_bodyElements .ui-icon-arrow-1-n { background-position: 0 -32px; }
#hc_bodyElements .ui-icon-arrow-1-ne { background-position: -16px -32px; }
#hc_bodyElements .ui-icon-arrow-1-e { background-position: -32px -32px; }
#hc_bodyElements .ui-icon-arrow-1-se { background-position: -48px -32px; }
#hc_bodyElements .ui-icon-arrow-1-s { background-position: -64px -32px; }
#hc_bodyElements .ui-icon-arrow-1-sw { background-position: -80px -32px; }
#hc_bodyElements .ui-icon-arrow-1-w { background-position: -96px -32px; }
#hc_bodyElements .ui-icon-arrow-1-nw { background-position: -112px -32px; }
#hc_bodyElements .ui-icon-arrow-2-n-s { background-position: -128px -32px; }
#hc_bodyElements .ui-icon-arrow-2-ne-sw { background-position: -144px -32px; }
#hc_bodyElements .ui-icon-arrow-2-e-w { background-position: -160px -32px; }
#hc_bodyElements .ui-icon-arrow-2-se-nw { background-position: -176px -32px; }
#hc_bodyElements .ui-icon-arrowstop-1-n { background-position: -192px -32px; }
#hc_bodyElements .ui-icon-arrowstop-1-e { background-position: -208px -32px; }
#hc_bodyElements .ui-icon-arrowstop-1-s { background-position: -224px -32px; }
#hc_bodyElements .ui-icon-arrowstop-1-w { background-position: -240px -32px; }
#hc_bodyElements .ui-icon-arrowthick-1-n { background-position: 0 -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-ne { background-position: -16px -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-e { background-position: -32px -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-se { background-position: -48px -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-s { background-position: -64px -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-sw { background-position: -80px -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-w { background-position: -96px -48px; }
#hc_bodyElements .ui-icon-arrowthick-1-nw { background-position: -112px -48px; }
#hc_bodyElements .ui-icon-arrowthick-2-n-s { background-position: -128px -48px; }
#hc_bodyElements .ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; }
#hc_bodyElements .ui-icon-arrowthick-2-e-w { background-position: -160px -48px; }
#hc_bodyElements .ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; }
#hc_bodyElements .ui-icon-arrowthickstop-1-n { background-position: -192px -48px; }
#hc_bodyElements .ui-icon-arrowthickstop-1-e { background-position: -208px -48px; }
#hc_bodyElements .ui-icon-arrowthickstop-1-s { background-position: -224px -48px; }
#hc_bodyElements .ui-icon-arrowthickstop-1-w { background-position: -240px -48px; }
#hc_bodyElements .ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; }
#hc_bodyElements .ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; }
#hc_bodyElements .ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; }
#hc_bodyElements .ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; }
#hc_bodyElements .ui-icon-arrowreturn-1-w { background-position: -64px -64px; }
#hc_bodyElements .ui-icon-arrowreturn-1-n { background-position: -80px -64px; }
#hc_bodyElements .ui-icon-arrowreturn-1-e { background-position: -96px -64px; }
#hc_bodyElements .ui-icon-arrowreturn-1-s { background-position: -112px -64px; }
#hc_bodyElements .ui-icon-arrowrefresh-1-w { background-position: -128px -64px; }
#hc_bodyElements .ui-icon-arrowrefresh-1-n { background-position: -144px -64px; }
#hc_bodyElements .ui-icon-arrowrefresh-1-e { background-position: -160px -64px; }
#hc_bodyElements .ui-icon-arrowrefresh-1-s { background-position: -176px -64px; }
#hc_bodyElements .ui-icon-arrow-4 { background-position: 0 -80px; }
#hc_bodyElements .ui-icon-arrow-4-diag { background-position: -16px -80px; }
#hc_bodyElements .ui-icon-extlink { background-position: -32px -80px; }
#hc_bodyElements .ui-icon-newwin { background-position: -48px -80px; }
#hc_bodyElements .ui-icon-refresh { background-position: -64px -80px; }
#hc_bodyElements .ui-icon-shuffle { background-position: -80px -80px; }
#hc_bodyElements .ui-icon-transfer-e-w { background-position: -96px -80px; }
#hc_bodyElements .ui-icon-transferthick-e-w { background-position: -112px -80px; }
#hc_bodyElements .ui-icon-folder-collapsed { background-position: 0 -96px; }
#hc_bodyElements .ui-icon-folder-open { background-position: -16px -96px; }
#hc_bodyElements .ui-icon-document { background-position: -32px -96px; }
#hc_bodyElements .ui-icon-document-b { background-position: -48px -96px; }
#hc_bodyElements .ui-icon-note { background-position: -64px -96px; }
#hc_bodyElements .ui-icon-mail-closed { background-position: -80px -96px; }
#hc_bodyElements .ui-icon-mail-open { background-position: -96px -96px; }
#hc_bodyElements .ui-icon-suitcase { background-position: -112px -96px; }
#hc_bodyElements .ui-icon-comment { background-position: -128px -96px; }
#hc_bodyElements .ui-icon-person { background-position: -144px -96px; }
#hc_bodyElements .ui-icon-print { background-position: -160px -96px; }
#hc_bodyElements .ui-icon-trash { background-position: -176px -96px; }
#hc_bodyElements .ui-icon-locked { background-position: -192px -96px; }
#hc_bodyElements .ui-icon-unlocked { background-position: -208px -96px; }
#hc_bodyElements .ui-icon-bookmark { background-position: -224px -96px; }
#hc_bodyElements .ui-icon-tag { background-position: -240px -96px; }
#hc_bodyElements .ui-icon-home { background-position: 0 -112px; }
#hc_bodyElements .ui-icon-flag { background-position: -16px -112px; }
#hc_bodyElements .ui-icon-calendar { background-position: -32px -112px; }
#hc_bodyElements .ui-icon-cart { background-position: -48px -112px; }
#hc_bodyElements .ui-icon-pencil { background-position: -64px -112px; }
#hc_bodyElements .ui-icon-clock { background-position: -80px -112px; }
#hc_bodyElements .ui-icon-disk { background-position: -96px -112px; }
#hc_bodyElements .ui-icon-calculator { background-position: -112px -112px; }
#hc_bodyElements .ui-icon-zoomin { background-position: -128px -112px; }
#hc_bodyElements .ui-icon-zoomout { background-position: -144px -112px; }
#hc_bodyElements .ui-icon-search { background-position: -160px -112px; }
#hc_bodyElements .ui-icon-wrench { background-position: -176px -112px; }
#hc_bodyElements .ui-icon-gear { background-position: -192px -112px; }
#hc_bodyElements .ui-icon-heart { background-position: -208px -112px; }
#hc_bodyElements .ui-icon-star { background-position: -224px -112px; }
#hc_bodyElements .ui-icon-link { background-position: -240px -112px; }
#hc_bodyElements .ui-icon-cancel { background-position: 0 -128px; }
#hc_bodyElements .ui-icon-plus { background-position: -16px -128px; }
#hc_bodyElements .ui-icon-plusthick { background-position: -32px -128px; }
#hc_bodyElements .ui-icon-minus { background-position: -48px -128px; }
#hc_bodyElements .ui-icon-minusthick { background-position: -64px -128px; }
#hc_bodyElements .ui-icon-close { background-position: -80px -128px; }
#hc_bodyElements .ui-icon-closethick { background-position: -96px -128px; }
#hc_bodyElements .ui-icon-key { background-position: -112px -128px; }
#hc_bodyElements .ui-icon-lightbulb { background-position: -128px -128px; }
#hc_bodyElements .ui-icon-scissors { background-position: -144px -128px; }
#hc_bodyElements .ui-icon-clipboard { background-position: -160px -128px; }
#hc_bodyElements .ui-icon-copy { background-position: -176px -128px; }
#hc_bodyElements .ui-icon-contact { background-position: -192px -128px; }
#hc_bodyElements .ui-icon-image { background-position: -208px -128px; }
#hc_bodyElements .ui-icon-video { background-position: -224px -128px; }
#hc_bodyElements .ui-icon-script { background-position: -240px -128px; }
#hc_bodyElements .ui-icon-alert { background-position: 0 -144px; }
#hc_bodyElements .ui-icon-info { background-position: -16px -144px; }
#hc_bodyElements .ui-icon-notice { background-position: -32px -144px; }
#hc_bodyElements .ui-icon-help { background-position: -48px -144px; }
#hc_bodyElements .ui-icon-check { background-position: -64px -144px; }
#hc_bodyElements .ui-icon-bullet { background-position: -80px -144px; }
#hc_bodyElements .ui-icon-radio-on { background-position: -96px -144px; }
#hc_bodyElements .ui-icon-radio-off { background-position: -112px -144px; }
#hc_bodyElements .ui-icon-pin-w { background-position: -128px -144px; }
#hc_bodyElements .ui-icon-pin-s { background-position: -144px -144px; }
#hc_bodyElements .ui-icon-play { background-position: 0 -160px; }
#hc_bodyElements .ui-icon-pause { background-position: -16px -160px; }
#hc_bodyElements .ui-icon-seek-next { background-position: -32px -160px; }
#hc_bodyElements .ui-icon-seek-prev { background-position: -48px -160px; }
#hc_bodyElements .ui-icon-seek-end { background-position: -64px -160px; }
#hc_bodyElements .ui-icon-seek-start { background-position: -80px -160px; }
/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
#hc_bodyElements .ui-icon-seek-first { background-position: -80px -160px; }
#hc_bodyElements .ui-icon-stop { background-position: -96px -160px; }
#hc_bodyElements .ui-icon-eject { background-position: -112px -160px; }
#hc_bodyElements .ui-icon-volume-off { background-position: -128px -160px; }
#hc_bodyElements .ui-icon-volume-on { background-position: -144px -160px; }
#hc_bodyElements .ui-icon-power { background-position: 0 -176px; }
#hc_bodyElements .ui-icon-signal-diag { background-position: -16px -176px; }
#hc_bodyElements .ui-icon-signal { background-position: -32px -176px; }
#hc_bodyElements .ui-icon-battery-0 { background-position: -48px -176px; }
#hc_bodyElements .ui-icon-battery-1 { background-position: -64px -176px; }
#hc_bodyElements .ui-icon-battery-2 { background-position: -80px -176px; }
#hc_bodyElements .ui-icon-battery-3 { background-position: -96px -176px; }
#hc_bodyElements .ui-icon-circle-plus { background-position: 0 -192px; }
#hc_bodyElements .ui-icon-circle-minus { background-position: -16px -192px; }
#hc_bodyElements .ui-icon-circle-close { background-position: -32px -192px; }
#hc_bodyElements .ui-icon-circle-triangle-e { background-position: -48px -192px; }
#hc_bodyElements .ui-icon-circle-triangle-s { background-position: -64px -192px; }
#hc_bodyElements .ui-icon-circle-triangle-w { background-position: -80px -192px; }
#hc_bodyElements .ui-icon-circle-triangle-n { background-position: -96px -192px; }
#hc_bodyElements .ui-icon-circle-arrow-e { background-position: -112px -192px; }
#hc_bodyElements .ui-icon-circle-arrow-s { background-position: -128px -192px; }
#hc_bodyElements .ui-icon-circle-arrow-w { background-position: -144px -192px; }
#hc_bodyElements .ui-icon-circle-arrow-n { background-position: -160px -192px; }
#hc_bodyElements .ui-icon-circle-zoomin { background-position: -176px -192px; }
#hc_bodyElements .ui-icon-circle-zoomout { background-position: -192px -192px; }
#hc_bodyElements .ui-icon-circle-check { background-position: -208px -192px; }
#hc_bodyElements .ui-icon-circlesmall-plus { background-position: 0 -208px; }
#hc_bodyElements .ui-icon-circlesmall-minus { background-position: -16px -208px; }
#hc_bodyElements .ui-icon-circlesmall-close { background-position: -32px -208px; }
#hc_bodyElements .ui-icon-squaresmall-plus { background-position: -48px -208px; }
#hc_bodyElements .ui-icon-squaresmall-minus { background-position: -64px -208px; }
#hc_bodyElements .ui-icon-squaresmall-close { background-position: -80px -208px; }
#hc_bodyElements .ui-icon-grip-dotted-vertical { background-position: 0 -224px; }
#hc_bodyElements .ui-icon-grip-dotted-horizontal { background-position: -16px -224px; }
#hc_bodyElements .ui-icon-grip-solid-vertical { background-position: -32px -224px; }
#hc_bodyElements .ui-icon-grip-solid-horizontal { background-position: -48px -224px; }
#hc_bodyElements .ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; }
#hc_bodyElements .ui-icon-grip-diagonal-se { background-position: -80px -224px; }


/* Misc visuals
----------------------------------*/

/* Corner radius */
#hc_bodyElements .ui-corner-all,
#hc_bodyElements .ui-corner-top,
#hc_bodyElements .ui-corner-left,
#hc_bodyElements .ui-corner-tl {
	border-top-left-radius: 0px;
}
#hc_bodyElements .ui-corner-all,
#hc_bodyElements .ui-corner-top,
#hc_bodyElements .ui-corner-right,
#hc_bodyElements .ui-corner-tr {
	border-top-right-radius: 0px;
}
#hc_bodyElements .ui-corner-all,
#hc_bodyElements .ui-corner-bottom,
#hc_bodyElements .ui-corner-left,
#hc_bodyElements .ui-corner-bl {
	border-bottom-left-radius: 0px;
}
#hc_bodyElements .ui-corner-all,
#hc_bodyElements .ui-corner-bottom,
#hc_bodyElements .ui-corner-right,
#hc_bodyElements .ui-corner-br {
	border-bottom-right-radius: 0px;
}

/* Overlays */
#hc_bodyElements .ui-widget-overlay {
	background: #aaaaaa url("images/ui-bg_flat_0_aaaaaa_40x100.png") 50% 50% repeat-x;
	opacity: .3;
	filter: Alpha(Opacity=30); /* support: IE8 */
}
#hc_bodyElements .ui-widget-shadow {
	margin: -8px 0 0 -8px;
	padding: 8px;
	background: #aaaaaa url("images/ui-bg_flat_0_aaaaaa_40x100.png") 50% 50% repeat-x;
	opacity: .3;
	filter: Alpha(Opacity=30); /* support: IE8 */
	border-radius: 8px;
}
/*!
 * jQuery UI Autocomplete 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete#theming
 */
.ui-autocomplete { position: absolute; cursor: default; }	

/* workarounds */
* html .ui-autocomplete { width:1px; } /* without this, the menu expands to 100% in IE6 */

/*
 * jQuery UI Menu 1.8.20
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Menu#theming
 */
.ui-menu {
	list-style:none;
	padding: 2px;
	margin: 0;
	display:block;
	float: left;
}
.ui-menu .ui-menu {
	margin-top: -3px;
}
.ui-menu .ui-menu-item {
	margin:0;
	padding: 0;
	zoom: 1;
	float: left;
	clear: left;
	width: 100%;
}
.ui-menu .ui-menu-item a {
	text-decoration:none;
	display:block;
	padding:.2em .4em;
	line-height:1.5;
	zoom:1;
}
.ui-menu .ui-menu-item a.ui-state-hover,
.ui-menu .ui-menu-item a.ui-state-active {
	font-weight: normal;
	margin: 0;
}
