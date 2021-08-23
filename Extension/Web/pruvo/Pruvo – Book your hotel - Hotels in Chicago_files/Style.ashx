/* common site wide blocks */
.hc-button {
  display: block;
  text-align: center;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.hc-button__link {
  color: #FFFFFF;
  text-decoration: none;
  display: block;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: #3caa87;
  padding: 8px 15px;
  font-size: 1.4em;
}
.hc-button__link:focus,
.hc-button__link:visited {
  color: #FFFFFF;
  text-decoration: none;
}
.hc-button__link:hover {
  color: #FFFFFF;
  text-decoration: none;
  background: #3caa87;
}
.hc-button--primary .hc-button__link {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 14px 51px;
  max-width: 400px;
  margin-top: 4px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc-button--search .hc-button__link {
  background: #3caa87;
}
.hc-button--search .hc-button__link:hover,
.hc-button--search .hc-button__link:visited {
  background-color: #3caa87;
}
.hc-button--showallrooms .hc-button__link {
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  padding: 0;
}
.hc-hotelrating {
  padding: 0 0 3px!important;
}
.hc-hotelrating__value {
  position: relative;
  height: 15px;
  display: block;
}
.hc-hotelrating__value:before,
.hc-hotelrating__value:after {
  display: inline-block;
  font-family: icons;
  font-weight: normal;
  font-size: 1.1em;
}
.hc-hotelrating__value:before {
  color: #cccccc;
  position: absolute;
  bottom: 0;
  left: 0;
}
.hc_rtl .hc-hotelrating__value:before {
  left: auto;
  right: 0;
}
.hc-hotelrating__value:after {
  color: #FFc000;
  position: absolute;
  bottom: 0;
  left: 0;
}
.hc_rtl .hc-hotelrating__value:after {
  left: auto;
  right: 0;
}
.hc-hotelrating__value--zero,
.hc-hotelrating__value--zero:before,
.hc-hotelrating__value--zero:after {
  height: 0;
}
.hc-hotelrating--star .hc-hotelrating__value--half:before {
  content: "\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--half:before {
  content: "\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--half:after {
  content: "\e968";
}
.hc_rtl .hc-hotelrating--star .hc-hotelrating__value--half:after {
  content: "\e969";
}
.hc-hotelrating--self .hc-hotelrating__value--half:after {
  content: "\e966";
}
.hc_rtl .hc-hotelrating--self .hc-hotelrating__value--half:after {
  content: "\e967";
}
.hc-hotelrating--star .hc-hotelrating__value--1:before,
.hc-hotelrating--star .hc-hotelrating__value--1:after {
  content: "\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--1:before,
.hc-hotelrating--self .hc-hotelrating__value--1:after {
  content: "\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--1half:before {
  content: "\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--1half:before {
  content: "\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--1half:after {
  content: "\e955\e968";
}
.hc_rtl .hc-hotelrating--star .hc-hotelrating__value--1half:after {
  content: "\e969\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--1half:after {
  content: "\e949\e966";
}
.hc_rtl .hc-hotelrating--self .hc-hotelrating__value--1half:after {
  content: "\e967\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--2:before,
.hc-hotelrating--star .hc-hotelrating__value--2:after {
  content: "\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--2:before,
.hc-hotelrating--self .hc-hotelrating__value--2:after {
  content: "\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--2half:before {
  content: "\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--2half:before {
  content: "\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--2half:after {
  content: "\e955\e955\e968";
}
.hc_rtl .hc-hotelrating--star .hc-hotelrating__value--2half:after {
  content: "\e969\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--2half:after {
  content: "\e949\e949\e966";
}
.hc_rtl .hc-hotelrating--self .hc-hotelrating__value--2half:after {
  content: "\e967\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--3:before,
.hc-hotelrating--star .hc-hotelrating__value--3:after {
  content: "\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--3:before,
.hc-hotelrating--self .hc-hotelrating__value--3:after {
  content: "\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--3half:before {
  content: "\e955\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--3half:before {
  content: "\e949\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--3half:after {
  content: "\e955\e955\e955\e968";
}
.hc_rtl .hc-hotelrating--star .hc-hotelrating__value--3half:after {
  content: "\e969\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--3half:after {
  content: "\e949\e949\e949\e966";
}
.hc_rtl .hc-hotelrating--self .hc-hotelrating__value--3half:after {
  content: "\e967\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--4:before,
.hc-hotelrating--star .hc-hotelrating__value--4:after {
  content: "\e955\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--4:before,
.hc-hotelrating--self .hc-hotelrating__value--4:after {
  content: "\e949\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--4half:before {
  content: "\e955\e955\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--4half:before {
  content: "\e949\e949\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--4half:after {
  content: "\e955\e955\e955\e955\e968";
}
.hc_rtl .hc-hotelrating--star .hc-hotelrating__value--4half:after {
  content: "\e969\e955\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--4half:after {
  content: "\e949\e949\e949\e949\e966";
}
.hc_rtl .hc-hotelrating--self .hc-hotelrating__value--4half:after {
  content: "\e967\e949\e949\e949\e949";
}
.hc-hotelrating--star .hc-hotelrating__value--5:before,
.hc-hotelrating--star .hc-hotelrating__value--5:after {
  content: "\e955\e955\e955\e955\e955";
}
.hc-hotelrating--self .hc-hotelrating__value--5:before,
.hc-hotelrating--self .hc-hotelrating__value--5:after {
  content: "\e949\e949\e949\e949\e949";
}
.hc-privacydisclaimerpopup {
  width: 370px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 15px 10px;
}
.hc_m_modal > div.hc-privacydisclaimerpopup {
  overflow: initial;
  text-align: center;
}
.hc-privacydisclaimerpopup__heading {
  position: relative;
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0 0 10px;
}
.hc-privacydisclaimerpopup__text {
  font-size: 16px;
  line-height: 21px;
  margin: 0;
  padding: 0 0 15px;
}
.hc-privacydisclaimerpopup__buttonallow {
  display: block;
  background: #3caa87;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  line-height: 42px;
  border: 0;
  width: 100%;
  margin-bottom: 5px;
  outline: none;
  cursor: pointer;
}
.hc-privacydisclaimerpopup__buttonallow:hover {
  background: #3caa87;
}
.hc-privacydisclaimerpopup__buttondeny {
  display: block;
  color: #669900;
  text-decoration: underline;
  line-height: 42px;
  border: 0;
  width: 100%;
  background: transparent;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
}
.hc-privacydisclaimerpopup__termstext {
  font-size: 12px;
  line-height: 14px;
  margin: 0;
  padding: 0;
}
.hc-bruneibanner {
  color: white;
  background-color: #2c4162;
}
.hc-bruneibanner__content {
  position: relative;
  margin: 0 auto;
  display: flex;
  align-content: center;
  max-width: 1190px;
}
.hc-bruneibanner__icon {
  display: inline-block;
  height: 40px;
  align-self: center;
}
.hc-bruneibanner__copy {
  display: inline-block;
  padding: 10px;
  flex-grow: 1;
}
.hc-bruneibanner__link:hover,
.hc-bruneibanner__link:active {
  color: white;
}
.hc-bruneibanner__close {
  display: inline-block;
  font-size: 20px;
  align-self: center;
  padding: 5px;
  cursor: pointer;
}
.hc-bruneibanner__close:before {
  font-family: 'icons';
  content: "\e800";
}
.hc-bruneibanner__close:hover {
  color: #00aef0;
}
.hc-bruneibanner__title {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Brezel Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.hc-bruneibanner__text {
  font-size: 14px;
  padding-top: 3px;
}
.hc-bruneibanner__link {
  font-weight: bold;
}
.hc-bruneibanner {
  color: #FFFFFF;
  background-color: #0084C1;
}
/* --- HC Base --- */
html {
  height: 100%;
}
body {
  font: normal 12px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  text-align: center;
  color: #333333;
  background: #FFFFFF;
}
.hc_lang_ko {
  font-family: "NanumGothic", "Gulim", "Malgun Gothic", 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
@font-face {
  font-family: 'icons';
  src: url('https://cdn.datahc.com/Content/Fonts/hc_20190225.eot');
  src: url('https://cdn.datahc.com/Content/Fonts/hc_20190225.eot?#iefix') format('embedded-opentype'), url('https://cdn.datahc.com/Content/Fonts/hc_20190225.woff') format('woff'), url('https://cdn.datahc.com/Content/Fonts/hc_20190225.ttf') format('truetype'), url('https://cdn.datahc.com/Content/Fonts/hc_20190225.svg#hc_20190225') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* HC Standard Element styles */
.hc_rtl p {
  direction: rtl;
}
.hc_rtl ul,
.hc_rtl ol {
  direction: rtl;
}
table.hc_tbl {
  margin: 0 0 10px;
  padding: 0;
  border: 0;
}
.hc_rtl table.hc_tbl {
  direction: rtl;
}
table.hc_tbl th {
  padding: 5px 10px;
  margin: 0;
  vertical-align: top;
  text-align: left;
}
.hc_rtl table.hc_tbl th {
  text-align: right;
}
table.hc_tbl td {
  padding: 5px 10px;
  margin: 0;
  vertical-align: top;
}
/* Standard links */
a {
  color: #669900;
  text-decoration: underline;
}
.hc_rtl a {
  direction: rtl;
}
a:visited {
  color: #669900;
}
a:active,
a:hover {
  color: #669900;
}
a img {
  border: none;
}
/* end standard element styles */
/* HC Headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
  font: bold 1em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 20px;
  color: #333333;
}
.hc_lang_ko h1,
.hc_lang_ko h2,
.hc_lang_ko h3,
.hc_lang_ko h4,
.hc_lang_ko h5,
.hc_lang_ko h6 {
  font-family: "NanumGothic", "Gulim", "Malgun Gothic", 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.hc_rtl h1,
.hc_rtl h2,
.hc_rtl h3,
.hc_rtl h4,
.hc_rtl h5,
.hc_rtl h6 {
  direction: rtl;
  text-align: right;
}
.hc_rtl h1 .hc_ltr,
.hc_rtl h2 .hc_ltr,
.hc_rtl h3 .hc_ltr,
.hc_rtl h4 .hc_ltr,
.hc_rtl h5 .hc_ltr,
.hc_rtl h6 .hc_ltr {
  direction: ltr!important;
}
h1 {
  font-size: 1.9em;
}
h2 {
  font-size: 1.4em;
}
h3 {
  font-size: 1.25em;
  padding-top: 5px;
  padding-bottom: 7px;
}
h4 {
  margin-bottom: 5px;
  padding: 0;
}
h1.hc_pageHeading {
  font-size: 1.25em;
  font-weight: bold;
  color: #333333;
  padding: 5px 0 7px;
}
/* end HC headings */
/* clearing elements */
.cDiv {
  clear: left;
}
.hc_rtl .cDiv {
  clear: right;
}
.cDivRight {
  clear: right;
}
.hc_rtl .cDivRight {
  clear: left;
}
.cDivBoth,
.clearBoth {
  clear: both;
}
/* do not use clearfix */
* html .clearfix {
  height: 1%;
}
/* IE5-6 */
* + html .clearfix {
  display: inline-block;
}
/* IE7not8 */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/* FF, IE8, O, S, C, etc. */
/* end clearing */
/* Right to Left
 * nb. specific sections are targetted as opposed to a global rtl direction in place */
/* ltr translations in rtl page layout */
.hc_rtl .hc_ltr {
  direction: ltr!important;
}
/* hiding classes */
.hc_hide {
  display: none!important;
}
.hc_position_hide {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
}
/* end hiding classes */
/* Custom lists */
ul.hc_horizontal {
  display: block;
  position: relative;
  padding: 0;
  clear: left;
  float: left;
  margin: 0;
  left: 50%;
  text-align: center;
}
.hc_rtl ul.hc_horizontal {
  clear: right;
  float: right;
  left: auto;
  right: 50%;
  *width: 50%;
}
ul.hc_horizontal li {
  display: block;
  float: left;
  margin: 0 10px 10px 0;
  padding: 0;
  list-style: none;
  position: relative;
  right: 50%;
}
.hc_rtl ul.hc_horizontal li {
  float: right;
  left: 50%;
  right: auto;
  margin-left: 10px;
  margin-right: 0;
}
ul.hc_horizontal li a {
  padding-right: 10px;
  border-right: 1px solid #999;
}
.hc_rtl ul.hc_horizontal li a {
  padding-left: 10px;
  padding-right: 0;
  border-left: 1px solid #999;
  border-right: none;
}
ul.hc_horizontal li.hc_last a {
  border-right: none;
  padding-right: 0;
}
.hc_rtl ul.hc_horizontal li.hc_last a {
  border-left: none;
  padding-left: 0;
}
a.hc_tick {
  display: block;
  position: relative;
  padding: 3px 0 10px 30px;
}
.hc_rtl a.hc_tick {
  padding-left: 0;
  padding-right: 30px;
}
a.hc_tick .hc_icon {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 27px;
  height: 23px;
}
.hc_rtl a.hc_tick .hc_icon {
  left: auto;
  right: 0;
}
.hc_img {
  display: inline-block;
  margin-bottom: 10px;
}
.hc_em {
  font-size: 1.2em;
  font-weight: bold;
  font-style: normal;
}
.hc_page_static #hc_r_1 {
  position: relative;
}
/* Specific Region-only clearing */
.hc_r_clear {
  position: relative;
  clear: left;
}
.hc_rtl .hc_r_clear {
  clear: right;
}
/* Global wrapping region */
#hc_r_globalWrap {
  *display: inline-block;
}
#hc_r_globalWrap {
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  text-align: center;
  height: 100%;
}
/* HC Body Elements */
#hc_bodyElements {
  text-align: left;
}
.hc_rtl #hc_bodyElements {
  text-align: right;
}
/* HC Main Content region */
#hc_r_content {
  position: relative;
  padding: 0;
  *display: inline-block;
  margin: 0 auto;
  text-align: left;
}
.hc_rtl #hc_r_content {
  text-align: right;
}
/* end foundation regions */
/* --- end HC Base --- */
/* --- HC Base - Forms --- */
/** General Form Elements **/
.hc_f {
  padding: 0;
  margin: 0;
}
.hc_f fieldset {
  position: relative;
  *display: inline-block;
  border: none;
  font-weight: normal;
  padding: 0;
  margin: 0;
  width: 100%;
  -webkit-padding-before: 0;
  -webkit-padding-start: 0;
  -webkit-padding-end: 0;
  -webkit-padding-after: 0;
  -webkit-margin-before: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}
.hc_rtl .hc_f fieldset {
  direction: rtl;
}
.hc_f legend {
  /* legend */
  display: none;
  font-weight: normal;
  -webkit-padding-before: 0;
  -webkit-padding-start: 0;
  -webkit-padding-end: 0;
  -webkit-padding-after: 0;
  -webkit-margin-before: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  margin: 0;
  padding: 0;
}
.hc_f label {
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
}
.hc_rtl .hc_f label {
  text-align: right;
}
.hc_f input,
.hc_f select {
  display: inline-block;
}
.hc_f input,
.hc_f select {
  display: block;
  /* remove haslayout issues */
}
.hc_rtl .hc_f input,
.hc_rtl .hc_f select {
  direction: rtl;
}
.hc_f ::-ms-clear {
  display: none;
}
/* placeholder text */
.hc_f input::-webkit-input-placeholder,
.hc_f input::-moz-placeholder,
.hc_f input:-moz-placeholder,
.hc_f input:-ms-input-placeholder {
  color: #999 !important;
}
/* remove number input arrows */
.hc_f input[type=number] {
  -moz-appearance: textfield;
}
.hc_f input[type=number]::-webkit-outer-spin-button,
.hc_f input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/** Form Component Types **/
/* wrappers */
.hc_f_t_i,
.hc_f_t_i2,
.hc_f_t_i3,
.hc_f_t_search,
.hc_f_t_search2,
.hc_f_t_ta,
.hc_f_t_cb,
.hc_f_t_cb2,
.hc_f_t_date2,
.hc_f_t_date3,
.hc_f_t_date5,
.hc_f_t_s2,
.hc_f_t_s3,
.hc_f_t_s_multi {
  position: relative;
  display: block;
  padding: 0 0 15px;
  margin: 0;
}
/* labels */
.hc_f_t_i label > span,
.hc_f_t_i2 label > span,
.hc_f_t_i3 label > span,
.hc_f_t_search label > span,
.hc_f_t_search2 label > span,
.hc_f_t_ta label > span,
.hc_f_t_s2 label > span,
.hc_f_t_s3 label > span,
.hc_f_t_s_multi label > span {
  display: inline-block;
}
/* inputs and selects */
.hc_f_t_i input,
.hc_f_t_i2 input,
.hc_f_t_i3 input,
.hc_f_t_search input,
.hc_f_t_search2 input,
.hc_f_t_ta textarea {
  margin: 5px 0 0;
  /* for gap between label and input */
  padding: 5px;
  /* firefox, ie10, chrome */
  *padding: 5px 0;
  /*padding: 6px 5px 4px 5px; /* ie9 */
  /*padding: 8px 5px 2px 5px; /* ie8 */
  /** padding: 6px 0 4px; /* ie7 */
  *text-indent: 5px;
  width: 100%;
  *width: 98%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #CCCCCC;
  line-height: normal;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1em;
  color: #333333;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  background: #FFFFFF;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hc_lang_ko .hc_f_t_i input,
.hc_lang_ko .hc_f_t_i2 input,
.hc_lang_ko .hc_f_t_i3 input,
.hc_lang_ko .hc_f_t_search input,
.hc_lang_ko .hc_f_t_search2 input,
.hc_lang_ko .hc_f_t_ta textarea {
  font-family: "NanumGothic", "Gulim", "Malgun Gothic", 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.hc_d_tablet .hc_f_t_i input,
.hc_d_tablet .hc_f_t_i2 input,
.hc_d_tablet .hc_f_t_i3 input,
.hc_d_tablet .hc_f_t_search input,
.hc_d_tablet .hc_f_t_search2 input {
  height: 27px;
  -webkit-appearance: none;
}
.hc_f_t_s2 select,
.hc_f_t_s3 select,
.hc_f_t_s_multi select {
  margin: 5px 0 0;
  width: 100%;
  *width: 98%;
  padding: 4px 3px 4px 0;
  *padding: 4px 0 4px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #CCCCCC;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1em;
  line-height: 21px;
  /* only required for safari on mac/pc */
  color: #333333;
  background: #FFFFFF;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hc_rtl .hc_f_t_s2 select,
.hc_rtl .hc_f_t_s3 select,
.hc_rtl .hc_f_t_s_multi select {
  padding: 4px 0 4px 3px;
  *padding: 4px 0 4px;
}
.hc_d_tablet .hc_f_t_s2 select,
.hc_d_tablet .hc_f_t_s3 select,
.hc_d_tablet .hc_f_t_s_multi select {
  -webkit-appearance: listbox;
}
.hc_d_touch .hc_f_t_s2 select,
.hc_d_touch .hc_f_t_s3 select,
.hc_d_touch .hc_f_t_s_multi select {
  height: 27px;
  line-height: normal;
  background: #fff;
}
.hc_lang_ko .hc_f_t_s2 select,
.hc_lang_ko .hc_f_t_s3 select,
.hc_lang_ko .hc_f_t_s_multi select {
  font-family: "NanumGothic", "Gulim", "Malgun Gothic", 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
/* nb. checkbox input fields are aligned across browsers via their margins. please do not alter these. */
.hc_f_t_cb input,
.hc_f_t_cb2 input {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1px 0 0;
  /* chrome, firefox, safari */
  margin: 2px 0 0\9;
  /* ie8 (ie7,ie8,ie9,ie10) */
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  border: none;
  line-height: normal;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1em;
  text-align: center;
  vertical-align: middle;
  color: #333333;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: transparent;
}
.hc_rtl .hc_f_t_cb input,
.hc_rtl .hc_f_t_cb2 input {
  left: auto;
  right: 0;
}
.hc_f_t_cb2 input {
  margin-top: 2px;
  /* chrome, firefox, safari */
  margin-top: 3px\9;
  /* ie8 (ie7,ie8,ie9,ie10) */
}
.hc_f_t_cb input,
#notie8#fix {
  /* (ie7,ie9,ie10,ie11) */
  margin: 1px 0 0\0;
  /* ie9 (ie8,ie9,ie10,ie11) */
  *margin-top: -2px;
  /* ie7 (ie6,ie7) */
  *margin-left: -4px;
  /* ie7 (ie6,ie7) */
}
.hc_rtl .hc_f_t_cb input,
#notie8#fix {
  /* (ie7,ie9,ie10,ie11) */
  *margin-left: 0;
  *margin-right: -4px;
}
.hc_f_t_cb2 input,
#notie8#fix {
  /* (ie7,ie9,ie10,ie11) */
  margin: 2px 0 0\0;
  /* ie9 (ie8,ie9,ie10,ie11) */
  *margin-top: -1px;
  /* ie7 (ie6,ie7) */
  *margin-left: -4px;
  /* ie7 (ie6,ie7) */
}
.hc_rtl .hc_f_t_cb2 input,
#notie8#fix {
  /* (ie7,ie9,ie10,ie11) */
  *margin-left: 0;
  *margin-right: -4px;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  /* (ie10, ie11, touch ie and mobile ie) */
  .hc_f_t_cb input {
    margin-top: -1px;
    /* ie10, ie11 (ie10,ie11) */
  }
  .hc_f_t_cb2 input {
    margin-top: 1px;
    /* ie10, ie11 (ie10,ie11) */
  }
}
.hc_d_touch .hc_f_t_cb input,
.hc_d_touch .hc_f_t_cb2 input {
  /* make checkboxes larger for touch devices. nb. this should include windows hybrid devices, but doesn't currently as class does not get applied. */
  -webkit-appearance: none;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #CCCCCC;
  height: 20px;
  width: 20px;
  top: -4px;
  background: #FFFFFF;
}
.hc_d_touch .hc_f_t_cb input[type="checkbox"]:before,
.hc_d_touch .hc_f_t_cb2 input[type="checkbox"]:before {
  /* nb. pseudo selectors need the input type specified. */
  content: "";
}
.hc_d_touch .hc_f_t_cb input[type="checkbox"]:checked:before,
.hc_d_touch .hc_f_t_cb2 input[type="checkbox"]:checked:before {
  font-family: "icons" !important;
  font-weight: 300;
  content: "\2713";
  color: #333333;
}
.hc_rtl.hc_d_touch .hc_f_t_cb input[type="checkbox"]:checked:before,
.hc_rtl.hc_d_touch .hc_f_t_cb2 input[type="checkbox"]:checked:before {
  -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
  -ms-transform: matrix(-1, 0, 0, 1, 0, 0);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.hc-checkbox {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
}
.hc-checkbox__input {
  position: absolute;
  top: 50%;
  left: 10px;
  margin: -6px 0 0;
  padding: 0;
}
.hc_rtl .hc-checkbox__input {
  left: auto;
  right: 10px;
}
.hc_d_touch .hc-checkbox__input {
  -webkit-appearance: none;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  border: 1px solid #CCCCCC;
  font-size: 18px;
  line-height: 20px;
  height: 22px;
  width: 22px;
  text-align: center;
  background: #fff;
  margin-top: -11px;
  outline: none;
}
.hc_d_touch .hc-checkbox__input[type="checkbox"]:before {
  content: "";
}
.hc_d_touch .hc-checkbox__input[type="checkbox"]:checked:before {
  font-weight: 300;
  font-family: "icons";
  content: "\e807";
  color: #669900;
}
.hc-checkbox__label {
  padding: 7px 10px 7px 30px;
  display: block;
  cursor: pointer;
}
.hc_rtl .hc-checkbox__label {
  padding-left: 10px;
  padding-right: 30px;
  direction: rtl;
}
.hc_d_touch .hc-checkbox__label {
  padding: 10px 10px 10px 40px;
}
.hc_rtl.hc_d_touch .hc-checkbox__label {
  padding-left: 10px;
  padding-right: 40px;
}
/** Form component type overrides */
/* hc_f_t_i3 */
.hc_f_t_i3 {
  padding-bottom: 10px;
}
.hc_f_t_i3 label span {
  display: none;
}
.hc_f_t_i3 input {
  margin-top: 0;
  padding-top: 11px;
  padding-bottom: 11px;
  font-size: 1.1em;
}
/* hc_f_t_search */
.hc_f_t_search2 {
  padding-bottom: 20px;
}
.hc_f_t_search2 label {
  font-size: 1.1em;
}
.hc_f_t_search input {
  margin-top: 5px;
  display: block;
  -webkit-appearance: none;
  padding-right: 20px;
  *padding-right: 0;
  overflow: hidden;
}
.hc_rtl .hc_f_t_search input {
  padding-right: 5px;
  *padding-right: 0;
  padding-left: 20px;
  *padding-left: 0;
}
.hc_f_t_search2 input {
  display: block;
  -webkit-appearance: none;
  overflow: hidden;
  margin-top: 10px;
  padding-top: 11px;
  padding-bottom: 10px;
  padding-right: 40px;
  *padding-right: 0;
  font-size: 1.3em;
}
.hc_rtl .hc_f_t_search2 input {
  padding-right: 5px;
  *padding-right: 0;
  padding-left: 40px;
  *padding-left: 0;
}
.hc_d_touch .hc_f_t_search2 input {
  height: 37px;
}
.hc_f_t_search .hc_icon,
.hc_f_t_search2 .hc_icon {
  *display: none;
  position: absolute;
  right: 1px;
  bottom: 16px;
  width: 20px;
  height: 23px;
  cursor: pointer;
  color: #333333;
}
.hc_rtl .hc_f_t_search .hc_icon,
.hc_rtl .hc_f_t_search2 .hc_icon {
  right: auto;
  left: 1px;
}
.hc_f_t_search2 .hc_icon {
  font-size: 1.2em;
  bottom: 20px;
  height: 40px;
  width: 40px;
}
.hc_f_t_search .hc_icon:hover,
.hc_f_t_search2 .hc_icon:hover {
  color: #c00;
}
.hc_f_t_search .hc_icon:before,
.hc_f_t_search2 .hc_icon:before {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -9px;
  left: 0;
}
.hc_f_t_search input::-webkit-search-cancel-button,
.hc_f_t_search input::-webkit-search-decoration,
.hc_f_t_search2 input::-webkit-search-cancel-button,
.hc_f_t_search2 input::-webkit-search-decoration {
  -webkit-appearance: none;
}
/* hc_f_t_ta */
.hc_f_t_ta textarea {
  height: 10em;
  line-height: 1.5em;
  resize: none;
}
/* hc_f_t_s2 */
/* hc_f_t_s3 */
/* hc_f_t_s4 */
.hc_d_touch .hc_f_t_s2 label,
.hc_d_touch .hc_f_t_s3 label,
.hc_d_touch .hc_f_t_s4 label {
  z-index: 1;
}
.hc_d_touch .hc_f_t_s2 label:after,
.hc_d_touch .hc_f_t_s3 label:after,
.hc_d_touch .hc_f_t_s4 label:after,
.hc_d_touch .hc_f_t_s_multi span:after {
  /* swap out default arrow for icon arrow for all touch devices due to android problem with stipulating height and styles to select boxes. */
  font-family: "icons" !important;
  font-weight: normal;
  font-size: 1.5em;
  content: "\e920";
  color: #333;
  display: block;
  position: absolute;
  right: 5px;
  bottom: 0;
  width: 15px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  -moz-border-radius: 0 3px 3px 0;
  -webkit-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  z-index: 4;
}
.hc_rtl.hc_d_touch .hc_f_t_s2 label:after,
.hc_rtl.hc_d_touch .hc_f_t_s3 label:after,
.hc_rtl.hc_d_touch .hc_f_t_s4 label:after,
.hc_rtl.hc_d_touch .hc_f_t_s_multi span:after {
  right: auto;
  left: 5px;
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}
.hc_d_touch .hc_f_t_s2 select,
.hc_d_touch .hc_f_t_s3 select,
.hc_d_touch .hc_f_t_s4 select,
.hc_d_touch .hc_f_t_s_multi select {
  position: relative;
  border: 1px solid #CCCCCC;
  z-index: 3;
  height: 27px;
  padding: 0 0 0 3px;
}
.hc_rtl.hc_d_touch .hc_f_t_s2 select,
.hc_rtl.hc_d_touch .hc_f_t_s3 select,
.hc_rtl.hc_d_touch .hc_f_t_s4 select,
.hc_rtl.hc_d_touch .hc_f_t_s_multi select {
  padding-left: 0;
  padding-right: 3px;
}
.hc_d_touch .hc_f_t_s2 select::-ms-expand,
.hc_d_touch .hc_f_t_s3 select::-ms-expand,
.hc_d_touch .hc_f_t_s4 select::-ms-expand,
.hc_d_touch .hc_f_t_s_multi select::-ms-expand {
  /* remove dropdown arrow for ie10+ on touch devices */
  display: none;
}
.hc_f_t_s2 option,
.hc_f_t_s3 option,
.hc_f_t_s_multi option {
  margin: 0;
}
/* hc_f_t_cb */
.hc_d_tablet .hc_f_t_cb,
.hc_d_tablet .hc_f_t_cb2 {
  min-height: 1.2em;
}
.hc_f_t_cb label,
.hc_f_t_cb2 label {
  display: block;
  padding: 0 0 0 20px;
  margin: 0;
  font-weight: normal;
  /* to cater for tablet's larger checkbox */
}
.hc_rtl .hc_f_t_cb label,
.hc_rtl .hc_f_t_cb2 label {
  padding-right: 20px;
  padding-left: 0;
}
.hc_d_touch .hc_f_t_cb label,
.hc_d_touch .hc_f_t_cb2 label {
  padding-left: 25px;
}
.hc_rtl.hc_d_touch .hc_f_t_cb label,
.hc_rtl.hc_d_touch .hc_f_t_cb2 label {
  padding-left: 0;
  padding-right: 25px;
}
/** More complex form component types, which implement combinations of the above simple form component types **/
/* hc_f_t_date */
.hc_rtl .hc_f_t_date2,
.hc_rtl .hc_f_t_date3,
.hc_rtl .hc_f_t_date5 {
  direction: rtl;
}
.hc_f_t_date2 img,
.hc_f_t_date3 img,
.hc_f_t_date5 img {
  width: 21px;
  height: 20px;
  display: inline-block;
  *float: left;
  margin: 5px 0 0;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  hack: 1 ; background: #3caa87 url(https://cdn.datahc.com/Images/hc_icon_calendar_inverse.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  overflow: hidden;
}
.hc_f_t_date5 img {
  position: absolute;
  right: 4px;
  bottom: 19px;
  z-index: 100;
}
.hc_rtl .hc_f_t_date5 img {
  right: auto;
  left: 4px;
}
.hc_f_t_date2 .hc_f_t_s2,
.hc_f_t_date3 .hc_f_t_s3 {
  display: inline-block;
  *float: left;
  margin: 0 0 0 3px;
  *margin-top: 2px;
  padding: 0;
  vertical-align: middle;
}
.hc_rtl .hc_f_t_date2 .hc_f_t_s2,
.hc_rtl .hc_f_t_date3 .hc_f_t_s3 {
  margin-right: 3px;
  margin-left: 0;
}
.hc_lang_vi .hc_f_t_date2 .hc_f_t_s2,
.hc_lang_vi .hc_f_t_date3 .hc_f_t_s3 {
  font-size: 0.95em;
}
.hc_f_t_date2 .hc_f_day,
.hc_f_t_date3 .hc_f_day {
  width: 75px;
}
.hc_f_t_date5 .hc_f_day {
  padding-bottom: 0;
}
.hc_f_t_date5 .hc_f_day input {
  padding-left: 8px;
  padding-right: 30px;
}
.hc_rtl .hc_f_t_date5 .hc_f_day input {
  padding-right: 8px;
  padding-left: 30px;
}
.hc_f_t_date5 .hc_f_t_i2.hc_f_day input {
  font-size: 1.2em;
}
.hc_f_t_date2 .hc_f_month,
.hc_f_t_date3 .hc_f_month {
  width: 130px;
}
.hc_f_t_date2 .hc_f_t_s2 label,
.hc_f_t_date3 .hc_f_t_s3 label {
  padding-bottom: 0;
}
/* hc_f_t_roomConfig */
.hc_f_t_roomConfig {
  display: none;
  margin-top: 5px;
  margin-bottom: 5px;
  clear: left;
  background: #fff;
  border: 1px solid #ccc;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_rtl .hc_f_t_roomConfig {
  clear: right;
}
.hc_f_t_roomConfig fieldset {
  position: relative;
  min-height: 40px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #efefef;
}
.hc_f_t_roomConfig fieldset:hover {
  background-color: #f6f6f6;
}
.hc_f_t_roomConfig fieldset legend {
  display: block;
  padding: 0 0 5px 0;
  margin: 0;
  font-size: 1em;
  width: 60px;
  position: absolute;
  left: 10px;
  *left: 0;
  top: 11px;
  font-weight: normal;
  *color: #333333;
}
.hc_lang_es .hc_f_t_roomConfig fieldset legend,
.hc_lang_fr .hc_f_t_roomConfig fieldset legend,
.hc_lang_it .hc_f_t_roomConfig fieldset legend,
.hc_lang_da .hc_f_t_roomConfig fieldset legend,
.hc_lang_ro .hc_f_t_roomConfig fieldset legend,
.hc_lang_ko .hc_f_t_roomConfig fieldset legend,
.hc_lang_el .hc_f_t_roomConfig fieldset legend,
.hc_lang_ca .hc_f_t_roomConfig fieldset legend {
  width: 75px;
}
.hc_rtl .hc_f_t_roomConfig fieldset legend {
  left: auto;
  right: 10px;
  *right: 0;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 legend {
  top: auto;
  bottom: 5px;
}
.hc_f_t_roomConfig .hc_f_t_s2,
.hc_f_t_roomConfig .hc_f_t_s_multi {
  padding-bottom: 5px;
  padding-top: 5px;
}
.hc_f_t_roomConfig .hc_f_roomDesc {
  display: none;
}
.hc_f_t_roomConfig label {
  font-weight: normal;
}
.hc_f_t_roomConfig label > span {
  display: none;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 label > span {
  display: block;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  min-height: 56px;
  height: auto!important;
  height: 56px;
}
.hc_f_t_roomConfig .hc_f_adults {
  position: absolute;
  left: 75px;
  top: 0;
  z-index: 10;
  width: 47px;
}
.hc_lang_es .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_fr .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_it .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_da .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_ro .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_ko .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_el .hc_f_t_roomConfig .hc_f_adults,
.hc_lang_ca .hc_f_t_roomConfig .hc_f_adults {
  left: 90px;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_adults {
  left: auto;
  right: 75px;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_adults {
  top: auto;
  bottom: 0;
}
.hc_lang_de .hc_f_t_roomConfig .hc_f_adults label {
  margin-left: -10px;
}
.hc_lang_nl .hc_f_t_roomConfig .hc_f_adults label {
  margin-left: -12px;
}
.hc_f_t_roomConfig .hc_f_children {
  position: absolute;
  left: 130px;
  top: 0;
  padding-right: 10px;
  border-right: 1px solid #fff;
  z-index: 9;
  width: 57px;
}
.hc_lang_es .hc_f_t_roomConfig .hc_f_children,
.hc_lang_fr .hc_f_t_roomConfig .hc_f_children,
.hc_lang_it .hc_f_t_roomConfig .hc_f_children,
.hc_lang_da .hc_f_t_roomConfig .hc_f_children,
.hc_lang_ro .hc_f_t_roomConfig .hc_f_children,
.hc_lang_ko .hc_f_t_roomConfig .hc_f_children,
.hc_lang_el .hc_f_t_roomConfig .hc_f_children,
.hc_lang_ca .hc_f_t_roomConfig .hc_f_children,
.hc_lang_ru .hc_f_t_roomConfig .hc_f_children,
.hc_lang_nl .hc_f_t_roomConfig .hc_f_children,
.hc_lang_bg .hc_f_t_roomConfig .hc_f_children {
  left: 145px;
}
.hc_lang_de .hc_f_t_roomConfig .hc_f_children {
  left: 145px;
  border-right: none;
}
.hc_lang_et .hc_f_t_roomConfig .hc_f_children {
  left: 155px;
  padding-right: 5px;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_children {
  left: auto;
  right: 130px;
  padding-right: 0;
  padding-left: 10px;
  border-right: none;
  border-left: 1px solid #fff;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_children {
  top: auto;
  bottom: 0;
}
.hc_f_t_roomConfig .hc_f_children label {
  padding-left: 0;
  padding-right: 0;
}
.hc_f_t_roomConfig .hc_f_adults select,
.hc_f_t_roomConfig .hc_f_children select {
  margin: 0;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_adults select,
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_children select {
  margin-top: 5px;
}
.hc_f_t_roomConfig .hc_f_ages {
  display: block;
  *display: inline;
  margin-left: 197px;
  margin-right: 0;
  padding-right: 60px;
  padding-left: 10px;
  border-left: 1px solid #fff;
  z-index: 8;
}
.hc_lang_es .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_fr .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_it .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_da .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_ro .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_ko .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_el .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_ca .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_ru .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_nl .hc_f_t_roomConfig .hc_f_ages,
.hc_lang_bg .hc_f_t_roomConfig .hc_f_ages {
  margin-left: 212px;
  padding-right: 50px;
}
.hc_lang_de .hc_f_t_roomConfig .hc_f_ages {
  margin-left: 203px;
  padding-right: 62px;
  border-left: none;
}
.hc_lang_et .hc_f_t_roomConfig .hc_f_ages {
  margin-left: 217px;
  *margin-left: 0;
  padding-left: 5px;
  *padding-left: 215px;
  *padding-right: 50px;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_ages {
  margin-left: 0;
  margin-right: 197px;
  padding-right: 10px;
  padding-left: 60px;
  border-left: none;
  border-right: 1px solid #fff;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_ages {
  padding-right: 0;
  top: auto;
  bottom: 0;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_ages {
  padding-right: 10px;
  padding-left: 0;
}
.hc_f_t_roomConfig .hc_f_ages label {
  display: none!important;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_ages label {
  display: block!important;
}
.hc_f_t_roomConfig .hc_f_ages span {
  display: inline-block;
}
.hc_d_touch .hc_f_t_roomConfig .hc_f_ages span {
  position: relative;
  z-index: 3;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_ages span {
  margin-top: 5px;
}
.hc_f_t_roomConfig .hc_f_ages select {
  margin-top: 0;
  width: 47px;
}
.hc_d_touch .hc_f_t_roomConfig .hc_f_ages select {
  -webkit-appearance: listbox;
}
.hc_f_t_roomConfig .hc_f_remove {
  display: block;
  position: absolute;
  right: 10px;
  top: 13px;
  width: 50px;
  text-align: right;
}
.hc_lang_el .hc_f_t_roomConfig .hc_f_remove,
.hc_lang_tr .hc_f_t_roomConfig .hc_f_remove {
  top: 2px;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_remove {
  right: auto;
  left: 10px;
  text-align: left;
}
.hc_f_t_roomConfig .hc_f_roomConfig_1 .hc_f_remove {
  display: none;
}
.hc_f_t_roomConfig .hc_f_add {
  display: block;
  background: #fff;
}
.hc_f_t_roomConfig .hc_f_add a {
  position: relative;
  display: inline-block;
  padding: 10px 0 10px 20px;
  margin-left: 10px;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_add a {
  padding-left: 0;
  padding-right: 17px;
  margin-left: 0;
  margin-right: 10px;
}
.hc_f_t_roomConfig .hc_f_add a span {
  position: absolute;
  display: block;
  top: 6px;
  left: 0;
  width: 10px;
  height: 10px;
}
.hc_rtl .hc_f_t_roomConfig .hc_f_add a span {
  left: auto;
  right: 0;
}
.hc_f_t_roomConfig .hc_f_add a span:before {
  content: "\e95e";
  display: inline-block;
  font-size: 1.4em;
  font-family: "icons";
  vertical-align: bottom;
}
/* hc_f_t_filters */
.hc_f_t_filters {
  padding: 0;
  margin: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_f_t_filters > legend {
  display: block;
  color: #669900;
  font-weight: bold;
  padding: 0 0 5px;
  margin: 0;
  white-space: nowrap;
}
.hc_f_t_filters > legend a {
  color: #669900;
  position: relative;
  display: inline-block;
  padding: 0.5em 1.5em 0.5em 0;
}
.hc_rtl .hc_f_t_filters > legend a {
  padding-right: 0.5em;
  padding-left: 1.5em;
}
.hc_f_t_filters > legend a:hover,
.hc_f_t_filters > legend a:active {
  color: #669900;
}
.hc_f_t_filters > legend a:visited {
  color: #669900;
}
.hc_f_t_filters > legend a .hc_icon {
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  color: #669900;
  height: 1em;
  width: 1em;
  margin-top: -0.5em;
}
.hc_rtl .hc_f_t_filters > legend a .hc_icon {
  right: auto;
  left: 0;
}
.hc_f_t_filters > legend a .hc_icon:before {
  color: #669900;
  font-size: 17px;
}
.hc_f_t_filters > legend a:hover .hc_icon:before {
  color: #669900;
}
.hc_f_t_filters > fieldset {
  width: 50%;
  float: left;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0 5px;
  margin: 0;
}
.hc_rtl .hc_f_t_filters > fieldset {
  float: right;
}
.hc_f_t_filters > fieldset:nth-child(2n) {
  clear: left;
  padding-right: 20px;
}
.hc_rtl .hc_f_t_filters > fieldset:nth-child(2n) {
  clear: right;
  padding-right: 0;
  padding-left: 20px;
}
.hc_f_t_filters > fieldset > legend {
  display: block;
  padding: 10px 0;
  font-weight: normal;
  font-size: 1.15em;
}
.hc_f_t_filters .hc_f_t_filter .hc_f_t_cb label:hover span {
  color: #669900;
}
/* hc_f_t_desc */
.hc_f_t_desc {
  font-size: 0.9em;
  color: #333333;
  padding: 5px 0 0 10px;
  margin: 0;
}
/* hc_f_t_err2 */
.hc_f_t_err2 {
  display: inline-block;
}
.hc_f_t_err2 {
  position: relative;
  font-size: 1em;
  display: block;
  padding: 0 0 0 27px;
  background: #B80000;
  margin-bottom: 10px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_rtl .hc_f_t_err2 {
  padding-right: 27px;
  padding-left: 0;
}
.hc_f_t_err2 .hc_icon {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  padding: 0 10px 15px;
  color: #fff;
  font-size: 2em;
  font-weight: bold;
}
.hc_rtl .hc_f_t_err2 .hc_icon {
  left: auto;
  right: 0;
}
.hc_f_t_err2 em {
  display: block;
  font-style: normal;
  font-weight: bold;
  color: #fff;
  padding: 10px 10px 10px 15px;
  background: #B80000;
}
.hc_f_t_err2 em a {
  color: #0084C1;
}
p.hc_f_t_err2 {
  margin: 0 0 10px;
  padding: 0 0 0 20px;
}
.hc_rtl p.hc_f_t_err2 {
  padding-left: 0;
  padding-right: 20px;
}
/* hc_f_t_err2 valid state */
.hc_f_t_err2_valid {
  display: none;
}
/* hc_f_t_err4 */
.hc_f_t_err4 {
  display: block;
  color: #FFFFFF;
  background: #B80000;
  padding: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 10px;
  margin-top: -5px;
  text-decoration: none;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_f_t_err4.hc_f_valid_field {
  display: none;
}
/* hc_f_t_err4 valid state */
.hc_f_t_err4_valid {
  display: none;
}
/* hc_f_t_err5 */
.hc_f_t_err5 {
  display: block;
  color: #FFFFFF;
  background: #B80000;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 5px;
  text-decoration: none;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_f_t_err5.hc_f_valid_summary {
  display: none;
}
/* hc_f_t_err5 valid state */
.hc_f_t_err5_valid {
  display: none;
}
/* Autocomplete */
#hc_bodyElements .hc_f_t_ac {
  -moz-box-shadow: 0 2px 5px #333;
  -webkit-box-shadow: 0 2px 5px #333;
  box-shadow: 0 2px 5px #333;
  font-size: 1.1em !important;
  background: #fff !important;
}
.hc_rtl #hc_bodyElements .hc_f_t_ac {
  padding: 0;
}
#hc_bodyElements .hc_f_t_ac li:nth-of-type(1) {
  border-top: 0;
}
#hc_bodyElements .hc_f_t_ac li a {
  display: block;
  position: relative;
  cursor: pointer;
  line-height: 2em!important;
}
#hc_bodyElements .hc_f_t_ac li a.ui-state-hover,
#hc_bodyElements .hc_f_t_ac li a:hover,
#hc_bodyElements .hc_f_t_ac .ui-state-hover,
#hc_bodyElements .hc_f_t_ac .ui-widget-content .ui-state-hover,
#hc_bodyElements .hc_f_t_ac .ui-widget-header .ui-state-hover,
#hc_bodyElements .hc_f_t_ac .ui-state-focus,
#hc_bodyElements .hc_f_t_ac .ui-widget-content .ui-state-focus,
#hc_bodyElements .hc_f_t_ac .ui-widget-header .ui-state-focus {
  background: #3caa87 !important;
  color: #FFFFFF !important;
}
#hc_bodyElements .hc_f_t_ac {
  padding-bottom: 8px;
}
#hc_bodyElements .hc_f_t_ac .hc_t_browseByCountry a {
  color: #669900 !important;
  padding-left: 10px!important;
}
#hc_bodyElements .hc_f_t_ac li a.ui-state-hover .hc_icon:before,
#hc_bodyElements .hc_f_t_ac li a:hover .hc_icon:before,
#hc_bodyElements .hc_f_t_ac li a.ui-state-hover .hc_icon,
#hc_bodyElements .hc_f_t_ac li a:hover .hc_icon {
  color: #FFFFFF !important;
  font-weight: normal!important;
}
/* all these z-indexes are related.. please keep order of layering if changing values */
ul.hc_horizontal {
  z-index: 340;
}
.hc_f fieldset {
  z-index: 350;
}
.hc_f_guestsRooms,
.hc_f_rooms,
.hc_f_adults,
.hc_f_children,
.hc_f_ages {
  z-index: 370;
}
.hc_f_checkin,
.hc_f_checkout {
  z-index: 380;
}
.hc_f_where {
  z-index: 390;
}
.hc_f_noDates {
  z-index: 385;
}
.hc_f_category {
  z-index: 395;
}
.hc_f_ac {
  z-index: 990;
}
.hc_f_remove {
  z-index: 375;
}
/* end HC Form Elements */
/** Old styles to be phased out **/
.hc_f_desc {
  /* field description text */
  font-size: 0.9em;
  color: #333333;
  padding: 5px 0 0 10px;
  margin: 0;
}
.hc_rtl .hc_f_desc {
  direction: rtl;
}
.hc_f_p_right {
  display: block;
  float: right;
  padding-top: 6px;
}
.hc_f_required label {
  font-weight: bold;
}
.hc_f_wrap.hc_f_error em,
.hc_f_wrap.hc_f_error em a,
.required {
  /* field error text */
  display: block;
  color: #FFFFFF;
  font-style: normal;
  text-decoration: none;
  padding: 5px 0;
  font-size: 0.9em;
}
/* affiliate & about us pages errors */
em.hc_f_error,
em.hc_f_error span,
em.hc_f_required {
  color: #B80000;
  text-decoration: none;
}
.hc_f_msgSent {
  color: #669900 !important;
}
input.blur,
.hc_f_hint {
  color: #333333 !important;
}
/** Field focus highlighting **/
.hc_f input[type="text"]:focus,
.hc_f input[type="search"]:focus,
.hc_f input[type="number"]:focus,
.hc_f textarea:focus,
.hc_f select:focus {
  /* todo add focus border colour. */
}
.hc_f_t_btn .hc_f_btn_v0:focus {
  text-decoration: underline;
}
/** Field error highlighting **/
input.hc_f_error,
select.hc_f_error,
textarea.hc_f_error,
.hc_f_error input,
.hc_f_error select,
.hc_f_error textarea {
  border-color: #B80000;
}
/* Temporary error styles for jquery unobtrusive / ms combo */
span.field-validation-error,
span.field-validation-error a {
  display: inline-block;
}
span.field-validation-error,
span.field-validation-error a {
  display: block;
  color: #B80000;
  font-style: normal;
  text-decoration: none;
  padding: 5px 0;
  font-size: 0.9em;
}
.input-validation-error,
.input-validation-error:focus {
  border-color: #B80000 !important;
}
/** Disabled fields **/
.hc_f fieldset .hc_disabled {
  -moz-opacity: 0.6;
  -khtml-opacity: 0.6;
  -webkit-opacity: 0.6;
  opacity: 0.6;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=60);
  filter: alpha(opacity=60);
  cursor: default;
}
.hc_f fieldset .hc_disabled a,
.hc_f fieldset .hc_disabled a:hover {
  cursor: default;
  color: #669900 !important;
  text-decoration: none!important;
}
.hc_f fieldset .hc_disabled label,
.hc_f fieldset .hc_disabled img,
.hc_f fieldset .hc_disabled input,
.hc_f fieldset .hc_disabled select,
.hc_f fieldset .hc_disabled textarea {
  cursor: default;
}
/* end handling misc disabled fields and containers in forms */
/* HC Calendar - tweaks to jquery ui styles */
/* Calendar - Popover style overrides */
#hc_bodyElements .hc_m_po.hc_f_cal {
  -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  padding: 0;
  width: 45em!important;
}
.hc_lang_ar #hc_bodyElements .hc_m_po.hc_f_cal {
  width: 59em!important;
}
.hc_d_tablet #hc_bodyElements .hc_m_po.hc_f_cal {
  font-size: 1.15em;
}
#hc_bodyElements .hc_m_po.hc_f_cal .hc_m_close {
  color: #ccc !important;
  top: 0;
  right: 0;
}
.hc_rtl #hc_bodyElements .hc_m_po.hc_f_cal .hc_m_close {
  right: auto;
  left: 0;
}
#hc_bodyElements .hc_m_po.hc_f_cal .hc_m_close:hover {
  color: #333333 !important;
}
#hc_bodyElements .hc_m_po.hc_f_cal h2,
#hc_bodyElements .hc-m_po.hc_f_cal h3 {
  border-bottom: 1px solid #CCCCCC;
  border-bottom: 0;
  padding: 10px 0;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
}
#hc_bodyElements .hc_m_po.hc_f_cal .hc_m_content {
  padding: 0 1em;
}
/* Calendar - datepicker style overrides */
#hc_bodyElements .ui-datepicker table {
  font-size: 1em!important;
  margin: 0 auto;
}
#hc_bodyElements .ui-datepicker td {
  width: 3em;
  vertical-align: middle;
}
.hc_lang_ar #hc_bodyElements .ui-datepicker td {
  width: 4em;
}
#hc_bodyElements .ui-datepicker td span,
#hc_bodyElements .ui-datepicker td a {
  padding: 0!important;
  display: block;
  text-align: center!important;
  height: 3em;
  line-height: 3em;
}
#hc_bodyElements .ui-datepicker-month {
  border-radius: 2px;
  border: 1px solid #CCCCCC;
}
#hc_bodyElements .ui-datepicker-year {
  border-radius: 2px;
  border: 1px solid #CCCCCC;
  margin-right: 0.5em !important;
}
.hc_rtl #hc_bodyElements .ui-datepicker-year {
  margin-right: 0!important;
  margin-left: 0.5em !important;
}
#hc_bodyElements .ui-datepicker .hc_datepicker_footer {
  text-align: center;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 0.5em 0;
  line-height: 1.8em;
}
#hc_bodyElements .ui-datepicker-calendar .ui-datepicker-week-end {
  background-color: #eee;
}
/* multi calendar */
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-group {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-group {
  float: right;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-group-first {
  padding-right: 0.5em;
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-group-first {
  padding-right: 0;
  padding-left: 0.5em;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-group-last {
  padding-left: 0.5em;
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-group-last {
  padding-left: 0;
  padding-right: 0.5em;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-title {
  padding: 0;
  font-size: 1.2em;
  line-height: 2.3em;
  margin: 0 3em;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev,
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-next {
  cursor: pointer;
  color: #669900 !important;
  text-decoration: none!important;
  height: 3em;
  width: 3em;
  line-height: 3em;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev {
  left: 0;
  top: 0;
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev {
  right: 0;
  left: auto;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-next {
  right: 0;
  top: 0;
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-next {
  left: 0;
  right: auto;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev:hover,
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-next:hover {
  color: #669900 !important;
  background: none!important;
  text-decoration: none!important;
  font-weight: normal!important;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev:active,
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-next:active {
  color: #669900 !important;
  background: none!important;
  text-decoration: none!important;
  font-weight: normal!important;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev:before,
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-next:before {
  position: relative;
  display: block;
  font-family: "icons";
  font-weight: normal;
  font-size: 2.4em;
  text-align: center;
  vertical-align: bottom;
  text-decoration: none;
  width: 100%;
  height: 100%;
  line-height: 1.2em;
  content: "\e922";
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-prev:before,
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-next:before {
  content: "\e921";
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-next:before {
  content: "\e921";
}
.hc_rtl #hc_bodyElements .ui-datepicker-multi .ui-datepicker-next:before {
  content: "\e922";
}
#hc_bodyElements .ui-datepicker-prev span,
#hc_bodyElements .ui-datepicker-next span {
  display: none;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-group table {
  width: 100%!important;
}
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-month,
#hc_bodyElements .ui-datepicker-multi .ui-datepicker-year {
  border: 0;
  border-radius: 0;
  padding: 0;
  width: auto!important;
  margin-right: 0!important;
}
/* end calendar tweaks */
#hc_bodyElements .ui-datepicker .hc-date span,
#hc_bodyElements .ui-datepicker .hc-date a {
  color: #669900;
}
#hc_bodyElements .ui-datepicker .hc-date--current a {
  border: 2px solid #669900;
  -moz-border-radius: 18px;
  -webkit-border-radius: 18px;
  border-radius: 18px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 2.7em;
}
#hc_bodyElements .ui-datepicker .hc-date--current.hc-date--range {
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
#hc_bodyElements .ui-datepicker .hc-date--past a,
#hc_bodyElements .ui-datepicker .hc-date--past span,
#hc_bodyElements .ui-datepicker .hc-date--past.hc-date--hover a {
  color: #333333;
}
#hc_bodyElements .ui-datepicker .hc-date--range {
  background: #ccc;
}
#hc_bodyElements .ui-datepicker .hc-date--range a {
  color: #333333;
}
#hc_bodyElements .ui-datepicker.hc-calendar--checkin .hc-date--hover,
#hc_bodyElements .ui-datepicker .hc-date--lower {
  background: #ccc;
}
#hc_bodyElements .ui-datepicker.hc-calendar--checkin .hc-date--hover a,
#hc_bodyElements .ui-datepicker .hc-date--lower a {
  position: relative;
  background: #3caa87;
  border: 2px solid #3caa87;
  color: #FFFFFF;
  -moz-border-radius: 2px 6px 6px 2px;
  -webkit-border-radius: 2px 6px 6px 2px;
  border-radius: 2px 6px 6px 2px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 28px;
  line-height: 2.7em;
  padding-left: 8px!important;
  padding-right: 0!important;
  float: left;
}
.hc_rtl #hc_bodyElements .ui-datepicker.hc-calendar--checkin .hc-date--hover a,
.hc_rtl #hc_bodyElements .ui-datepicker .hc-date--lower a {
  -moz-border-radius: 6px 2px 2px 6px;
  -webkit-border-radius: 6px 2px 2px 6px;
  border-radius: 6px 2px 2px 6px;
  padding-left: 0!important;
  padding-right: 8px!important;
  float: right;
  direction: ltr;
}
.hc_lang_ar #hc_bodyElements .ui-datepicker.hc-calendar--checkin .hc-date--hover a,
.hc_lang_ar #hc_bodyElements .ui-datepicker .hc-date--lower a {
  width: 40px;
}
#hc_bodyElements .ui-datepicker.hc-calendar--checkin .hc-date--hover a:before,
#hc_bodyElements .ui-datepicker .hc-date--lower a:before {
  left: 100%;
  right: auto;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0);
  border-left-color: #3caa87;
  border-width: 18px;
  border-left-width: 8px;
  margin-top: -18px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.hc_rtl #hc_bodyElements .ui-datepicker.hc-calendar--checkin .hc-date--hover a:before,
.hc_rtl #hc_bodyElements .ui-datepicker .hc-date--lower a:before {
  left: auto;
  right: 100%;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 18px;
  border-right-color: #3caa87;
  border-right-width: 8px;
}
#hc_bodyElements .ui-datepicker.hc-calendar--checkout .hc-date--hover,
#hc_bodyElements .ui-datepicker .hc-date--upper {
  background: #ccc;
}
#hc_bodyElements .ui-datepicker.hc-calendar--checkout .hc-date--hover a,
#hc_bodyElements .ui-datepicker .hc-date--upper a {
  position: relative;
  background: #3caa87;
  border: 2px solid #3caa87;
  color: #FFFFFF;
  -moz-border-radius: 6px 2px 2px 6px;
  -webkit-border-radius: 6px 2px 2px 6px;
  border-radius: 6px 2px 2px 6px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 28px;
  line-height: 2.7em;
  padding-right: 8px!important;
  padding-left: 0!important;
  float: right;
}
.hc_rtl #hc_bodyElements .ui-datepicker.hc-calendar--checkout .hc-date--hover a,
.hc_rtl #hc_bodyElements .ui-datepicker .hc-date--upper a {
  -moz-border-radius: 2px 6px 6px 2px;
  -webkit-border-radius: 2px 6px 6px 2px;
  border-radius: 2px 6px 6px 2px;
  padding-left: 8px!important;
  padding-right: 0!important;
  float: left;
  direction: ltr;
}
.hc_lang_ar #hc_bodyElements .ui-datepicker.hc-calendar--checkout .hc-date--hover a,
.hc_lang_ar #hc_bodyElements .ui-datepicker .hc-date--upper a {
  width: 40px;
}
#hc_bodyElements .ui-datepicker.hc-calendar--checkout .hc-date--hover a:before,
#hc_bodyElements .ui-datepicker .hc-date--upper a:before {
  right: 100%;
  left: auto;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0);
  border-right-color: #3caa87;
  border-width: 18px;
  border-right-width: 8px;
  margin-top: -18px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.hc_rtl #hc_bodyElements .ui-datepicker.hc-calendar--checkout .hc-date--hover a:before,
.hc_rtl #hc_bodyElements .ui-datepicker .hc-date--upper a:before {
  left: 100%;
  right: auto;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 18px;
  border-left-color: #3caa87;
  border-left-width: 8px;
}
/* --- end HC Base - Forms --- */
/* --- HC Base - Forms - Buttons --- */
.hc_f_t_btn,
.hc_f_t_btn2,
.hc_f_t_btn3,
.hc_f_t_btn_duo,
.hc_f_t_btn_multi {
  display: block;
  overflow: hidden;
  padding: 0 1px 2px;
  margin: 0;
}
.hc_f_t_btn_duo a {
  display: inline-block;
  float: right;
}
.hc_rtl .hc_f_t_btn_duo a {
  float: left;
}
.hc_f_t_btn_duo a:first-child,
.hc_rtl .hc_f_t_btn_duo a:first-child {
  float: none;
}
.hc_rtl .hc_f_t_btn_multi {
  direction: rtl;
}
.hc_f_t_btn_multi a {
  display: inline-block;
  margin-right: 10px;
  margin-left: 0;
}
.hc_rtl .hc_f_t_btn_multi a {
  margin-left: 10px;
  margin-right: 0;
}
/* button design */
.hc_f_btn_v0 {
  /* regular link */
}
.hc_f_btn_v1,
.hc_f_btn_v4,
.hc_f_btn_v5,
.hc_f_btn_v6,
.hc_f_btn_v7,
.hc_f_btn_v8,
.hc_f_btn_v9,
.hc_f_btn_v10,
.hc_f_btn_v15 {
  display: inline-block;
  white-space: nowrap;
  text-decoration: none!important;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
  padding: 3px 20px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 0 1px 2px #333333;
  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.3);
}
.hc_rtl .hc_f_btn_v1,
.hc_rtl .hc_f_btn_v4,
.hc_rtl .hc_f_btn_v5,
.hc_rtl .hc_f_btn_v6,
.hc_rtl .hc_f_btn_v7,
.hc_rtl .hc_f_btn_v8,
.hc_rtl .hc_f_btn_v9,
.hc_rtl .hc_f_btn_v10,
.hc_rtl .hc_f_btn_v15 {
  direction: rtl;
}
.hc_f_btn_v1 span,
.hc_f_btn_v4 span,
.hc_f_btn_v5 span,
.hc_f_btn_v6 span,
.hc_f_btn_v7 span,
.hc_f_btn_v8 span,
.hc_f_btn_v9 span,
.hc_f_btn_v10 span,
.hc_f_btn_v15 span {
  display: none;
}
.hc_f_btn_v1:hover,
.hc_f_btn_v4:hover,
.hc_f_btn_v5:hover,
.hc_f_btn_v6:hover,
.hc_f_btn_v7:hover,
.hc_f_btn_v8:hover,
.hc_f_btn_v9:hover,
.hc_f_btn_v10:hover,
.hc_f_btn_v15:hover {
  text-decoration: none!important;
  cursor: pointer;
}
/* -------- Button v1 -------- */
/* button type: search */
.hc_f_btn_v1 {
  height: auto;
  line-height: 15px;
  padding: 5px 10px;
  margin: 0 20px 0 0;
  font-size: 1em;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-search-button'); */
  border: 1px solid #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v1:hover {
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-search-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
/* -------- Button v4 -------- */
/* button type: misc */
.hc_f_btn_v4 {
  height: 29px;
  line-height: 29px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 1em;
  display: inline-block;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button'); */
  border: 1px solid #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v4:hover {
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
/* -------- Button v5 & v6 -------- */
/* button type: info */
.hc_f_btn_v5,
.hc_f_btn_v6 {
  height: 24px;
  line-height: 25px;
  padding: 0 10px;
  margin: 0;
  font-size: 1em;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button'); */
  border: 1px solid #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v5:hover,
.hc_f_btn_v6:hover {
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
/* -------- Button v7 & v8 -------- */
/* button type: info */
.hc_f_btn_v7,
.hc_f_btn_v8 {
  display: inline-block;
  height: 41px;
  line-height: 42px;
  margin: 0;
  font-size: 1.4em;
  font-weight: bold;
  padding: 0 10px;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button'); */
  border: 1px solid #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v7:hover,
.hc_f_btn_v8:hover {
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_viewDealButton .hc_f_btn_v8 {
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  color: #FFFFFF;
  border-color: #3caa87;
}
.hc_f_viewDealButton .hc_f_btn_v8:hover {
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  border-color: #3caa87;
}
/* -------- Button v9 & v10 -------- */
/* button type: search */
.hc_f_btn_v9,
.hc_f_btn_v10 {
  height: 41px;
  line-height: 42px;
  *line-height: 41px;
  padding: 0 10px;
  margin: 0;
  font-size: 1.55em;
  min-width: 100px;
  width: auto!important;
  width: 100px;
  display: inline-block;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-search-button'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v9:hover,
.hc_f_btn_v10:hover {
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-search-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
/* -------- Button v15 -------- */
/* button type: search */
.hc_f_btn_v15 {
  height: 25px;
  *height: auto;
  line-height: 25px;
  *line-height: 17px;
  padding: 10px;
  margin: 10px 0 0 0;
  font-size: 1.55em;
  min-width: 98px;
  width: auto!important;
  width: 98px;
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-search-button'); */
  border: 1px solid #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
.hc_f_btn_v15:hover {
  color: #FFFFFF !important;
  background-color: #3caa87;
  hack: 1 ; background-image: -moz-linear-gradient(center top , rgba(255,255,255,0.4) -10%, #3caa87 50%, #3caa87 50%, #3caa87 100%);
  hack: 1 ; background-image: -ms-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(-10%,rgba(255,255,255,0.4)), color-stop(100%, #3caa87));
  hack: 1 ; background-image: -webkit-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: -o-linear-gradient(rgba(255,255,255,0.4), #3caa87);
  hack: 1 ; background-image: linear-gradient(top, rgba(255,255,255,0.4) -10%, #3caa87 100%);
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='@affiliate-color-search-button-hover'); */
  border-color: #3caa87;
  *background-image: none;
  *border-color: #CCCCCC #000000 #000000 #CCCCCC;
  *border-style: solid;
  *border-width: 2px;
}
/* generic buttons - language specific styling */
.hc_lang_th .hc_f_btn_v7,
.hc_lang_th .hc_f_btn_v8,
.hc_lang_th .hc_f_btn_v9,
.hc_lang_th .hc_f_btn_v10,
.hc_lang_th .hc_f_btn_v15 {
  font-weight: normal;
}
/* end: generic buttons - language specific styling */
/* Refactor button into versions above. */
.hc_f_btn_GoToMobile {
  width: 220px;
  float: none;
  font-size: 25px;
  margin: 20px auto;
  padding: 15px;
  text-decoration: none;
  vertical-align: middle;
}
a.hc_f_btn_down {
  border-color: #aaa !important;
}
/* end refactor button */
/* --- end HC Base - Forms - Buttons --- */
[class^="hc_m_v"] .hc_m_hd h1,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h1,
[class^="hc_m_v"] .hc_m_hd h2,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h2,
[class^="hc_m_v"] .hc_m_hd h3,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h3,
[class^="hc_m_v"] .hc_m_hd a,
.hc_m_content [class^="hc_m_v"] .hc_m_hd a {
  color: #FFFFFF;
}
[class^="hc_m_v"] .hc_m_hd h1 a,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h1 a,
[class^="hc_m_v"] .hc_m_hd h2 a,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h2 a,
[class^="hc_m_v"] .hc_m_hd h3 a,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h3 a,
[class^="hc_m_v"] .hc_m_hd a a,
.hc_m_content [class^="hc_m_v"] .hc_m_hd a a,
[class^="hc_m_v"] .hc_m_hd h1 a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h1 a:hover,
[class^="hc_m_v"] .hc_m_hd h2 a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h2 a:hover,
[class^="hc_m_v"] .hc_m_hd h3 a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h3 a:hover,
[class^="hc_m_v"] .hc_m_hd a a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_hd a a:hover,
[class^="hc_m_v"] .hc_m_hd h1 a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h1 a:active,
[class^="hc_m_v"] .hc_m_hd h2 a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h2 a:active,
[class^="hc_m_v"] .hc_m_hd h3 a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h3 a:active,
[class^="hc_m_v"] .hc_m_hd a a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_hd a a:active,
[class^="hc_m_v"] .hc_m_hd h1 a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h1 a:visited,
[class^="hc_m_v"] .hc_m_hd h2 a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h2 a:visited,
[class^="hc_m_v"] .hc_m_hd h3 a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_hd h3 a:visited,
[class^="hc_m_v"] .hc_m_hd a a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_hd a a:visited {
  color: #FFFFFF;
}
[class^="hc_m_v"] .hc_m_content h1,
.hc_m_content [class^="hc_m_v"] .hc_m_content h1,
[class^="hc_m_v"] .hc_m_content h2,
.hc_m_content [class^="hc_m_v"] .hc_m_content h2,
[class^="hc_m_v"] .hc_m_content h3,
.hc_m_content [class^="hc_m_v"] .hc_m_content h3 {
  color: #669900;
}
[class^="hc_m_v"] .hc_m_content h1 a,
.hc_m_content [class^="hc_m_v"] .hc_m_content h1 a,
[class^="hc_m_v"] .hc_m_content h2 a,
.hc_m_content [class^="hc_m_v"] .hc_m_content h2 a,
[class^="hc_m_v"] .hc_m_content h3 a,
.hc_m_content [class^="hc_m_v"] .hc_m_content h3 a,
[class^="hc_m_v"] .hc_m_content h1 a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_content h1 a:hover,
[class^="hc_m_v"] .hc_m_content h2 a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_content h2 a:hover,
[class^="hc_m_v"] .hc_m_content h3 a:hover,
.hc_m_content [class^="hc_m_v"] .hc_m_content h3 a:hover,
[class^="hc_m_v"] .hc_m_content h1 a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_content h1 a:active,
[class^="hc_m_v"] .hc_m_content h2 a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_content h2 a:active,
[class^="hc_m_v"] .hc_m_content h3 a:active,
.hc_m_content [class^="hc_m_v"] .hc_m_content h3 a:active,
[class^="hc_m_v"] .hc_m_content h1 a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_content h1 a:visited,
[class^="hc_m_v"] .hc_m_content h2 a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_content h2 a:visited,
[class^="hc_m_v"] .hc_m_content h3 a:visited,
.hc_m_content [class^="hc_m_v"] .hc_m_content h3 a:visited {
  color: #669900;
}
/* --- Module Design Set version 1 - HC Base - Modules --- */
/* common module borders */
.hc_m,
.hc_m_v0,
.hc_m_v1,
.hc_m_v2,
.hc_m_v4,
.hc_m_v6,
.hc_m_v7,
.hc_m_v8,
.hc_m_v9,
.hc_m_v11,
.hc_m_v12,
.hc_m_v13,
.hc_m_v14,
.hc_m_v16,
.hc_m_outer,
.hc_m_content {
  *display: inline-block;
  /* fix haslayout */
}
.hc_m,
.hc_m_v0,
.hc_m_v1,
.hc_m_v2,
.hc_m_v4,
.hc_m_v6,
.hc_m_v7,
.hc_m_v8,
.hc_m_v9,
.hc_m_v11,
.hc_m_v12,
.hc_m_v13,
.hc_m_v14,
.hc_m_v16,
.hc_m_outer,
.hc_m_content,
.hc_m_hd,
.hc_m_ft {
  display: block;
}
.hc_m,
.hc_m_v0,
.hc_m_v1,
.hc_m_v2,
.hc_m_v4,
.hc_m_v6,
.hc_m_v7,
.hc_m_v8,
.hc_m_v9,
.hc_m_v11,
.hc_m_v12,
.hc_m_v13,
.hc_m_v14,
.hc_m_v16 {
  position: relative;
  margin-bottom: 10px;
}
.hc_m p,
.hc_m_v0 p,
.hc_m_v1 p,
.hc_m_v2 p,
.hc_m_v4 p,
.hc_m_v6 p,
.hc_m_v7 p,
.hc_m_v8 p,
.hc_m_v9 p,
.hc_m_v11 p,
.hc_m_v12 p,
.hc_m_v13 p,
.hc_m_v14 p,
.hc_m_v16 p {
  display: block;
  padding: 0 0 10px;
  margin: 0;
}
.b1h,
.b2h,
.b3h,
.b4h,
.b2bh,
.b3bh,
.b4bh {
  *display: inline-block;
}
.b1h,
.b2h,
.b3h,
.b4h,
.b2bh,
.b3bh,
.b4bh {
  display: block;
  font-size: 1px;
  overflow: hidden;
}
.b1h {
  height: 1px;
  background: #0084C1;
  margin: 0 5px;
}
.b1bh {
  height: 1px;
  background: #0084C1;
  margin: 0 5px;
}
.b2h {
  height: 1px;
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  margin: 0 3px;
}
.b2bh {
  height: 1px;
  background: #FFFFFF;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  margin: 0 3px;
}
.b3h {
  height: 1px;
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 2px;
}
.b3bh {
  height: 1px;
  background: #FFFFFF;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 2px;
}
.b4h {
  height: 2px;
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 1px;
}
.b4bh {
  height: 2px;
  background: #FFFFFF;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 1px;
}
.hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
  *display: inline-block;
}
.hc_m_hd {
  text-align: left;
  background: #0084C1;
  border: 2px solid #0084C1;
  padding-left: 10px;
  padding-right: 10px;
}
.hc_m_ft {
  text-align: left;
  background: #FFFFFF;
  border: 2px solid #0084C1;
  *display: inline;
  display: none;
  /* disable for now */
  padding-left: 10px;
  padding-right: 10px;
}
.hc_m_content {
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 10px;
  *display: inline-block;
}
/* hc module close button for popovers */
.hc_m_close {
  display: block;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9em;
  padding-top: 0.2em;
  z-index: 800;
}
.hc_rtl .hc_m_close {
  right: auto;
  left: 10px;
}
/* hc module slogan text */
.hc_m_slogan {
  display: block;
  position: absolute;
  right: 20px;
  top: 8px;
  font-size: 1.5em;
}
.hc_rtl .hc_m_slogan {
  right: auto;
  left: 20px;
}
/* hc module headings */
.hc_m_hd h1 {
  text-align: left;
  padding-top: 0;
  padding-bottom: 3px;
  margin: 0;
}
.hc_rtl .hc_m_hd h1 {
  text-align: right;
}
.hc_m_hd h2,
.hc_m_hd h3 {
  text-align: left;
  padding-top: 5px;
  padding-bottom: 8px;
  margin: 0;
  font-size: 1.25em;
}
.hc_rtl .hc_m_hd h2,
.hc_rtl .hc_m_hd h3 {
  text-align: right;
}
.hc_m_hide .hc_m_content {
  display: none!important;
}
/* module boxes */
.hc_m {
  margin-bottom: 20px;
}
.hc_m .b1h,
.hc_m_content .hc_m .b1h,
.hc_m .b2h,
.hc_m_content .hc_m .b2h,
.hc_m .b3h,
.hc_m_content .hc_m .b3h,
.hc_m .b4h,
.hc_m_content .hc_m .b4h,
.hc_m .b1bh,
.hc_m_content .hc_m .b1bh,
.hc_m .b2bh,
.hc_m_content .hc_m .b2bh,
.hc_m .b3bh,
.hc_m_content .hc_m .b3bh,
.hc_m .b4bh,
.hc_m_content .hc_m .b4bh {
  display: none;
}
.hc_m .hc_m_content .b1h,
.hc_m .hc_m_content .b1bh,
.hc_m .hc_m_content .b2h,
.hc_m .hc_m_content .b2bh,
.hc_m .hc_m_content .b3h,
.hc_m .hc_m_content .b3bh,
.hc_m .hc_m_content .b4h,
.hc_m .hc_m_content .b4bh {
  display: block;
}
.hc_m .hc_m_outer,
.hc_m_content .hc_m .hc_m_outer {
  border: none;
  background: none;
}
.hc_m .hc_m_hd,
.hc_m_content .hc_m .hc_m_hd {
  padding: 0;
  background: #0084C1;
  border-color: #FFFFFF;
}
.hc_cityMatch.hc_m .hc_m_hd,
.hc_cityMatch.hc_m_content .hc_m .hc_m_hd {
  background: none;
}
.hc_m .hc_m_ft,
.hc_m_content .hc_m .hc_m_ft {
  padding: 0;
  background: #FFFFFF;
}
.hc_m_content .hc_m .hc_m_hd,
.hc_m_content .hc_m .hc_m_hd,
.hc_m_content .hc_m .hc_m_ft,
.hc_m_content .hc_m .hc_m_ft {
  background: #FFFFFF;
}
.hc_m .hc_m_content,
.hc_m_content .hc_m .hc_m_content {
  padding: 0;
  position: relative;
  display: block;
  text-align: left;
  background: #FFFFFF;
}
.hc_rtl .hc_m .hc_m_content,
.hc_rtl .hc_m_content .hc_m .hc_m_content {
  text-align: right;
}
.hc_m_content .hc_m .hc_m_content {
  background: #FFFFFF;
}
/* --- end HC Base - Modules --- */
/* --- Module Design Set version 1 - HC Base - Modules --- */
/* common module borders */
.hc_m,
.hc_m_v0,
.hc_m_v1,
.hc_m_v2,
.hc_m_v4,
.hc_m_v6,
.hc_m_v7,
.hc_m_v8,
.hc_m_v9,
.hc_m_v11,
.hc_m_v12,
.hc_m_v13,
.hc_m_v14,
.hc_m_v16,
.hc_m_outer,
.hc_m_content {
  *display: inline-block;
  /* fix haslayout */
}
.hc_m,
.hc_m_v0,
.hc_m_v1,
.hc_m_v2,
.hc_m_v4,
.hc_m_v6,
.hc_m_v7,
.hc_m_v8,
.hc_m_v9,
.hc_m_v11,
.hc_m_v12,
.hc_m_v13,
.hc_m_v14,
.hc_m_v16,
.hc_m_outer,
.hc_m_content,
.hc_m_hd,
.hc_m_ft {
  display: block;
}
.hc_m,
.hc_m_v0,
.hc_m_v1,
.hc_m_v2,
.hc_m_v4,
.hc_m_v6,
.hc_m_v7,
.hc_m_v8,
.hc_m_v9,
.hc_m_v11,
.hc_m_v12,
.hc_m_v13,
.hc_m_v14,
.hc_m_v16 {
  position: relative;
  margin-bottom: 10px;
}
.hc_m p,
.hc_m_v0 p,
.hc_m_v1 p,
.hc_m_v2 p,
.hc_m_v4 p,
.hc_m_v6 p,
.hc_m_v7 p,
.hc_m_v8 p,
.hc_m_v9 p,
.hc_m_v11 p,
.hc_m_v12 p,
.hc_m_v13 p,
.hc_m_v14 p,
.hc_m_v16 p {
  display: block;
  padding: 0 0 10px;
  margin: 0;
}
.b1h,
.b2h,
.b3h,
.b4h,
.b2bh,
.b3bh,
.b4bh {
  *display: inline-block;
}
.b1h,
.b2h,
.b3h,
.b4h,
.b2bh,
.b3bh,
.b4bh {
  display: block;
  font-size: 1px;
  overflow: hidden;
}
.b1h {
  height: 1px;
  background: #0084C1;
  margin: 0 5px;
}
.b1bh {
  height: 1px;
  background: #0084C1;
  margin: 0 5px;
}
.b2h {
  height: 1px;
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  margin: 0 3px;
}
.b2bh {
  height: 1px;
  background: #FFFFFF;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  margin: 0 3px;
}
.b3h {
  height: 1px;
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 2px;
}
.b3bh {
  height: 1px;
  background: #FFFFFF;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 2px;
}
.b4h {
  height: 2px;
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 1px;
}
.b4bh {
  height: 2px;
  background: #FFFFFF;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  margin: 0 1px;
}
.hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
  *display: inline-block;
}
.hc_m_hd {
  text-align: left;
  background: #0084C1;
  border: 2px solid #0084C1;
  padding-left: 10px;
  padding-right: 10px;
}
.hc_m_ft {
  text-align: left;
  background: #FFFFFF;
  border: 2px solid #0084C1;
  *display: inline;
  display: none;
  /* disable for now */
  padding-left: 10px;
  padding-right: 10px;
}
.hc_m_content {
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 10px;
  *display: inline-block;
}
/* hc module close button for popovers */
.hc_m_close {
  display: block;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9em;
  padding-top: 0.2em;
  z-index: 800;
}
.hc_rtl .hc_m_close {
  right: auto;
  left: 10px;
}
/* hc module slogan text */
.hc_m_slogan {
  display: block;
  position: absolute;
  right: 20px;
  top: 8px;
  font-size: 1.5em;
}
.hc_rtl .hc_m_slogan {
  right: auto;
  left: 20px;
}
/* hc module headings */
.hc_m_hd h1 {
  text-align: left;
  padding-top: 0;
  padding-bottom: 3px;
  margin: 0;
}
.hc_rtl .hc_m_hd h1 {
  text-align: right;
}
.hc_m_hd h2,
.hc_m_hd h3 {
  text-align: left;
  padding-top: 5px;
  padding-bottom: 8px;
  margin: 0;
  font-size: 1.25em;
}
.hc_rtl .hc_m_hd h2,
.hc_rtl .hc_m_hd h3 {
  text-align: right;
}
.hc_m_hide .hc_m_content {
  display: none!important;
}
/* module boxes */
.hc_m {
  margin-bottom: 20px;
}
.hc_m .b1h,
.hc_m_content .hc_m .b1h,
.hc_m .b2h,
.hc_m_content .hc_m .b2h,
.hc_m .b3h,
.hc_m_content .hc_m .b3h,
.hc_m .b4h,
.hc_m_content .hc_m .b4h,
.hc_m .b1bh,
.hc_m_content .hc_m .b1bh,
.hc_m .b2bh,
.hc_m_content .hc_m .b2bh,
.hc_m .b3bh,
.hc_m_content .hc_m .b3bh,
.hc_m .b4bh,
.hc_m_content .hc_m .b4bh {
  display: none;
}
.hc_m .hc_m_content .b1h,
.hc_m .hc_m_content .b1bh,
.hc_m .hc_m_content .b2h,
.hc_m .hc_m_content .b2bh,
.hc_m .hc_m_content .b3h,
.hc_m .hc_m_content .b3bh,
.hc_m .hc_m_content .b4h,
.hc_m .hc_m_content .b4bh {
  display: block;
}
.hc_m .hc_m_outer,
.hc_m_content .hc_m .hc_m_outer {
  border: none;
  background: none;
}
.hc_m .hc_m_hd,
.hc_m_content .hc_m .hc_m_hd {
  padding: 0;
  background: #0084C1;
  border-color: #FFFFFF;
}
.hc_cityMatch.hc_m .hc_m_hd,
.hc_cityMatch.hc_m_content .hc_m .hc_m_hd {
  background: none;
}
.hc_m .hc_m_ft,
.hc_m_content .hc_m .hc_m_ft {
  padding: 0;
  background: #FFFFFF;
}
.hc_m_content .hc_m .hc_m_hd,
.hc_m_content .hc_m .hc_m_hd,
.hc_m_content .hc_m .hc_m_ft,
.hc_m_content .hc_m .hc_m_ft {
  background: #FFFFFF;
}
.hc_m .hc_m_content,
.hc_m_content .hc_m .hc_m_content {
  padding: 0;
  position: relative;
  display: block;
  text-align: left;
  background: #FFFFFF;
}
.hc_rtl .hc_m .hc_m_content,
.hc_rtl .hc_m_content .hc_m .hc_m_content {
  text-align: right;
}
.hc_m_content .hc_m .hc_m_content {
  background: #FFFFFF;
}
/* --- end HC Base - Modules --- */
/* --- Module Design Set version 1 - Module version 0 --- */
.hc_m_v0 .hc_m_outer {
  border-left-color: #0084C1;
  border-right-color: #0084C1;
}
/* --- Module Design Set version 1 - Module version 1 --- */
/* module colors */
.hc_m_v1,
.hc_m_content .hc_m_v1 {
  color: #333333;
}
.hc_m_v1 a,
.hc_m_content .hc_m_v1 a {
  color: #669900;
}
.hc_m_v1 a:active,
.hc_m_content .hc_m_v1 a:active {
  color: #669900;
}
.hc_m_v1 a:visited,
.hc_m_content .hc_m_v1 a:visited {
  color: #669900;
}
.hc_m_v1 a:hover,
.hc_m_content .hc_m_v1 a:hover {
  color: #669900;
}
.hc_m_v1 .b1h,
.hc_m_content .hc_m_v1 .b1h,
.hc_m_v1 .b1bh,
.hc_m_content .hc_m_v1 .b1bh {
  background: #0084C1;
}
.hc_m_v1 .b2h,
.hc_m_content .hc_m_v1 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
#hc_evt_lowAvail.hc_m_v1 .b2h,
#hc_evt_lowAvail.hc_m_content .hc_m_v1 .b2h {
  background: #FFFFFF;
}
.hc_m_v1 .b3h,
.hc_m_content .hc_m_v1 .b3h,
.hc_m_v1 .b4h,
.hc_m_content .hc_m_v1 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
#hc_evt_lowAvail.hc_m_v1 .b3h,
#hc_evt_lowAvail.hc_m_content .hc_m_v1 .b3h,
#hc_evt_lowAvail.hc_m_v1 .b4h,
#hc_evt_lowAvail.hc_m_content .hc_m_v1 .b4h {
  background: #FFFFFF;
}
.hc_m_v1 .b2bh,
.hc_m_content .hc_m_v1 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v1 .b3bh,
.hc_m_content .hc_m_v1 .b3bh,
.hc_m_v1 .b4bh,
.hc_m_content .hc_m_v1 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v1 .hc_m_outer,
.hc_m_content .hc_m_v1 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v1 .hc_m_hd,
.hc_m_content .hc_m_v1 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
#hc_evt_lowAvail.hc_m_v1 .hc_m_hd,
#hc_evt_lowAvail.hc_m_content .hc_m_v1 .hc_m_hd {
  background: #FFFFFF;
  border: none;
}
.hc_m_v1 .hc_m_content,
.hc_m_content .hc_m_v1 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v1 .hc_m_ft,
.hc_m_content .hc_m_v1 .hc_m_ft {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
/* end module colors */
/* Module structure */
.hc_m_v1 {
  display: block;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
}
.hc_m_v1 .hc_m_content,
.hc_m_content .hc_m_v1 .hc_m_content {
  padding: 10px;
  position: relative;
  display: block;
  text-align: left;
  *height: 1%;
}
.hc_rtl .hc_m_v1 .hc_m_content,
.hc_rtl .hc_m_content .hc_m_v1 .hc_m_content {
  text-align: right;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 2 --- */
/* Module colors */
.hc_m_v2,
.hc_m_content .hc_m_v2 {
  color: #333333;
}
.hc_m_v2 a,
.hc_m_content .hc_m_v2 a {
  color: #669900;
}
.hc_m_v2 a:active,
.hc_m_content .hc_m_v2 a:active {
  color: #669900;
}
.hc_m_v2 a:visited,
.hc_m_content .hc_m_v2 a:visited {
  color: #669900;
}
.hc_m_v2 a:hover,
.hc_m_content .hc_m_v2 a:hover {
  color: #669900;
}
.hc_m_v2 .b1h,
.hc_m_content .hc_m_v2 .b1h,
.hc_m_v2 .b1bh,
.hc_m_content .hc_m_v2 .b1bh {
  background: #0084C1;
}
.hc_m_v2 .b2h,
.hc_m_content .hc_m_v2 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v2 .b3h,
.hc_m_content .hc_m_v2 .b3h,
.hc_m_v2 .b4h,
.hc_m_content .hc_m_v2 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v2 .b2bh,
.hc_m_content .hc_m_v2 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v2 .b3bh,
.hc_m_content .hc_m_v2 .b3bh,
.hc_m_v2 .b4bh,
.hc_m_content .hc_m_v2 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v2 .hc_m_outer,
.hc_m_content .hc_m_v2 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v2 .hc_m_hd,
.hc_m_content .hc_m_v2 .hc_m_hd {
  border: none;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v2 .hc_m_content,
.hc_m_content .hc_m_v2 .hc_m_content {
  border: none;
  background: #FFFFFF;
}
.hc_m_v2 .hc_m_ft,
.hc_m_content .hc_m_v2 .hc_m_ft {
  border: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v2 .hc_m_hd h1,
.hc_m_content .hc_m_v2 .hc_m_hd h1,
.hc_m_v2 .hc_m_hd h2,
.hc_m_content .hc_m_v2 .hc_m_hd h2,
.hc_m_v2 .hc_m_hd h3,
.hc_m_content .hc_m_v2 .hc_m_hd h3,
.hc_m_v2 .hc_m_hd a,
.hc_m_content .hc_m_v2 .hc_m_hd a,
.hc_m_v2 .hc_m_hd h1 a,
.hc_m_content .hc_m_v2 .hc_m_hd h1 a,
.hc_m_v2 .hc_m_hd h2 a,
.hc_m_content .hc_m_v2 .hc_m_hd h2 a,
.hc_m_v2 .hc_m_hd h3 a,
.hc_m_content .hc_m_v2 .hc_m_hd h3 a,
.hc_m_v2 .hc_m_hd a:hover,
.hc_m_content .hc_m_v2 .hc_m_hd a:hover,
.hc_m_v2 .hc_m_hd h1 a:hover,
.hc_m_content .hc_m_v2 .hc_m_hd h1 a:hover,
.hc_m_v2 .hc_m_hd h2 a:hover,
.hc_m_content .hc_m_v2 .hc_m_hd h2 a:hover,
.hc_m_v2 .hc_m_hd h3 a:hover,
.hc_m_content .hc_m_v2 .hc_m_hd h3 a:hover,
.hc_m_v2 .hc_m_hd a:active,
.hc_m_content .hc_m_v2 .hc_m_hd a:active,
.hc_m_v2 .hc_m_hd h1 a:active,
.hc_m_content .hc_m_v2 .hc_m_hd h1 a:active,
.hc_m_v2 .hc_m_hd h2 a:active,
.hc_m_content .hc_m_v2 .hc_m_hd h2 a:active,
.hc_m_v2 .hc_m_hd h3 a:active,
.hc_m_content .hc_m_v2 .hc_m_hd h3 a:active,
.hc_m_v2 .hc_m_hd a:visited,
.hc_m_content .hc_m_v2 .hc_m_hd a:visited,
.hc_m_v2 .hc_m_hd h1 a:visited,
.hc_m_content .hc_m_v2 .hc_m_hd h1 a:visited,
.hc_m_v2 .hc_m_hd h2 a:visited,
.hc_m_content .hc_m_v2 .hc_m_hd h2 a:visited,
.hc_m_v2 .hc_m_hd h3 a:visited,
.hc_m_content .hc_m_v2 .hc_m_hd h3 a:visited {
  color: #FFFFFF;
}
.hc_m_v2 .hc_m_content h1 a,
.hc_m_content .hc_m_v2 .hc_m_content h1 a,
.hc_m_v2 .hc_m_content h2 a,
.hc_m_content .hc_m_v2 .hc_m_content h2 a,
.hc_m_v2 .hc_m_content h3 a,
.hc_m_content .hc_m_v2 .hc_m_content h3 a .hc_m_v2 .hc_m_content h1 a:hover,
.hc_m_content .hc_m_v2 .hc_m_content h1 a:hover,
.hc_m_v2 .hc_m_content h2 a:hover,
.hc_m_content .hc_m_v2 .hc_m_content h2 a:hover,
.hc_m_v2 .hc_m_content h3 a:hover,
.hc_m_content .hc_m_v2 .hc_m_content h3 a:hover,
.hc_m_v2 .hc_m_content h1 a:active,
.hc_m_content .hc_m_v2 .hc_m_content h1 a:active,
.hc_m_v2 .hc_m_content h2 a:active,
.hc_m_content .hc_m_v2 .hc_m_content h2 a:active,
.hc_m_v2 .hc_m_content h3 a:active,
.hc_m_content .hc_m_v2 .hc_m_content h3 a:active,
.hc_m_v2 .hc_m_content h1 a:visited,
.hc_m_content .hc_m_v2 .hc_m_content h1 a:visited,
.hc_m_v2 .hc_m_content h2 a:visited,
.hc_m_content .hc_m_v2 .hc_m_content h2 a:visited,
.hc_m_v2 .hc_m_content h3 a:visited,
.hc_m_content .hc_m_v2 .hc_m_content h3 a:visited {
  color: #669900;
}
/* end Module colors */
/* Module structure */
.hc_m_v2,
.hc_m_v2_lite {
  margin-bottom: 10px;
}
.hc_m_v2 .hc_m_outer,
.hc_m_content .hc_m_v2 .hc_m_outer {
  padding-left: 3px;
  padding-right: 3px;
}
.hc_m_v2 .hc_m_content,
.hc_m_content .hc_m_v2 .hc_m_content {
  padding-top: 10px;
  padding-bottom: 10px;
}
.hc_m_v2 .hc_m_hd h1,
.hc_m_content .hc_m_v2 .hc_m_hd h1,
.hc_m_v2 .hc_m_hd h2,
.hc_m_content .hc_m_v2 .hc_m_hd h2,
.hc_m_v2 .hc_m_hd h3,
.hc_m_content .hc_m_v2 .hc_m_hd h3 {
  text-align: center;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 4 --- */
/* Module colors */
.hc_m_v4,
.hc_m_content .hc_m_v4 {
  color: #333333;
}
.hc_m_v4 a,
.hc_m_content .hc_m_v4 a {
  color: #669900;
}
.hc_m_v4 a:active,
.hc_m_content .hc_m_v4 a:active {
  color: #669900;
}
.hc_m_v4 a:visited,
.hc_m_content .hc_m_v4 a:visited {
  color: #669900;
}
.hc_m_v4 a:hover,
.hc_m_content .hc_m_v4 a:hover {
  color: #669900;
}
/* Module structure */
.hc_m_v4 .b1h,
.hc_m_v4 .b2h,
.hc_m_v4 .b3h,
.hc_m_v4 .b4h,
.hc_m_v4 .b1bh,
.hc_m_v4 .b2bh,
.hc_m_v4 .b3bh,
.hc_m_v4 .b4bh {
  display: none;
}
.hc_m_v4 .hc_m_outer {
  border: none;
  border-bottom: 1px dotted #CCCCCC;
  background: #f4f4f4;
}
.hc_m_v4:last-child .hc_m_outer {
  border-bottom: none;
}
.hc_m_v4 .hc_m_hd {
  background: #0084C1;
  padding: 0;
}
.hc_m_v4 .hc_m_ft {
  display: none;
  background: #FFFFFF;
  padding: 0;
}
.hc_m_v4 .hc_m_content {
  background: #FFFFFF;
  padding: 0;
}
/* --- Module Design Set version 1 - Module version 6 --- */
/* Module colors */
.hc_m_v6,
.hc_m_content .hc_m_v6 {
  color: #333333;
}
.hc_m_v6 a,
.hc_m_content .hc_m_v6 a {
  color: #669900;
}
.hc_m_v6 a:active,
.hc_m_content .hc_m_v6 a:active {
  color: #669900;
}
.hc_m_v6 a:visited,
.hc_m_content .hc_m_v6 a:visited {
  color: #669900;
}
.hc_m_v6 a:hover,
.hc_m_content .hc_m_v6 a:hover {
  color: #669900;
}
.hc_m_v6 .b1h,
.hc_m_content .hc_m_v6 .b1h,
.hc_m_v6 .b1bh,
.hc_m_content .hc_m_v6 .b1bh {
  background: #0084C1;
}
.hc_m_v6 .b2h,
.hc_m_content .hc_m_v6 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v6 .b3h,
.hc_m_content .hc_m_v6 .b3h,
.hc_m_v6 .b4h,
.hc_m_content .hc_m_v6 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v6 .b2bh,
.hc_m_content .hc_m_v6 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v6 .b3bh,
.hc_m_content .hc_m_v6 .b3bh,
.hc_m_v6 .b4bh,
.hc_m_content .hc_m_v6 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v6 .hc_m_outer,
.hc_m_content .hc_m_v6 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v6 .hc_m_hd,
.hc_m_content .hc_m_v6 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v6 .hc_m_content,
.hc_m_content .hc_m_v6 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v6 .hc_m_ft,
.hc_m_content .hc_m_v6 .hc_m_ft {
  border: 2px solid #0084C1;
  background: #0084C1;
}
/* end Module colors */
/* Module structure */
.hc_m_v6 {
  margin-bottom: 10px;
}
.hc_m_v6 .hc_m_outer,
.hc_m_content .hc_m_v6 .hc_m_outer {
  padding-left: 3px;
  padding-right: 3px;
}
.hc_m_v6 .hc_m_content,
.hc_m_content .hc_m_v6 .hc_m_content {
  padding-top: 10px;
  padding-bottom: 7px;
}
.hc_m_v6 .hc_m_hd h1,
.hc_m_content .hc_m_v6 .hc_m_hd h1,
.hc_m_v6 .hc_m_hd h2,
.hc_m_content .hc_m_v6 .hc_m_hd h2,
.hc_m_v6 .hc_m_hd h3,
.hc_m_content .hc_m_v6 .hc_m_hd h3 {
  text-align: center;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 7 --- */
/* Module colors */
.hc_m_v7,
.hc_m_content .hc_m_v7 {
  color: #333333;
}
.hc_m_v7 a,
.hc_m_content .hc_m_v7 a {
  color: #669900;
}
.hc_m_v7 a:active,
.hc_m_content .hc_m_v7 a:active {
  color: #669900;
}
.hc_m_v7 a:visited,
.hc_m_content .hc_m_v7 a:visited {
  color: #669900;
}
.hc_m_v7 a:hover,
.hc_m_content .hc_m_v7 a:hover {
  color: #669900;
}
.hc_m_v7 .b1h,
.hc_m_content .hc_m_v7 .b1h,
.hc_m_v7 .b1bh,
.hc_m_content .hc_m_v7 .b1bh {
  background: #0084C1;
}
.hc_m_v7 .b2h,
.hc_m_content .hc_m_v7 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v7 .b3h,
.hc_m_content .hc_m_v7 .b3h,
.hc_m_v7 .b4h,
.hc_m_content .hc_m_v7 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v7 .b2bh,
.hc_m_content .hc_m_v7 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v7 .b3bh,
.hc_m_content .hc_m_v7 .b3bh,
.hc_m_v7 .b4bh,
.hc_m_content .hc_m_v7 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v7 .hc_m_outer,
.hc_m_content .hc_m_v7 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v7 .hc_m_hd,
.hc_m_content .hc_m_v7 .hc_m_hd {
  border: none;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v7 .hc_m_content,
.hc_m_content .hc_m_v7 .hc_m_content {
  border: none;
  background: #FFFFFF;
}
.hc_m_v7 .hc_m_ft,
.hc_m_content .hc_m_v7 .hc_m_ft {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
/* end Module colors */
/* Module structure */
.hc_m_v7 {
  margin-bottom: 10px;
}
.hc_m_v7 .hc_m_content,
.hc_m_content .hc_m_v7 .hc_m_content {
  padding-top: 10px;
  padding-bottom: 7px;
}
.hc_m_v7 .hc_m_hd,
.hc_m_content .hc_m_v7 .hc_m_hd {
  padding: 0 10px;
  margin: 0;
}
.hc_m_v7 .hc_m_hd h1,
.hc_m_content .hc_m_v7 .hc_m_hd h1,
.hc_m_v7 .hc_m_hd h2,
.hc_m_content .hc_m_v7 .hc_m_hd h2,
.hc_m_v7 .hc_m_hd h3,
.hc_m_content .hc_m_v7 .hc_m_hd h3 {
  text-align: left;
}
.hc_rtl .hc_m_v7 .hc_m_hd h1,
.hc_rtl .hc_m_content .hc_m_v7 .hc_m_hd h1,
.hc_rtl .hc_m_v7 .hc_m_hd h2,
.hc_rtl .hc_m_content .hc_m_v7 .hc_m_hd h2,
.hc_rtl .hc_m_v7 .hc_m_hd h3,
.hc_rtl .hc_m_content .hc_m_v7 .hc_m_hd h3 {
  text-align: right;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 8 --- */
/* Module colors */
.hc_m_v8,
.hc_m_content .hc_m_v8 {
  color: #333333;
}
.hc_m_v8 a,
.hc_m_content .hc_m_v8 a {
  color: #669900;
}
.hc_m_v8 a:active,
.hc_m_content .hc_m_v8 a:active {
  color: #669900;
}
.hc_m_v8 a:visited,
.hc_m_content .hc_m_v8 a:visited {
  color: #669900;
}
.hc_m_v8 a:hover,
.hc_m_content .hc_m_v8 a:hover {
  color: #669900;
}
.hc_m_v8 .b1h,
.hc_m_content .hc_m_v8 .b1h,
.hc_m_v8 .b1bh,
.hc_m_content .hc_m_v8 .b1bh {
  background: #0084C1;
}
.hc_m_v8 .b2h,
.hc_m_content .hc_m_v8 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v8 .b3h,
.hc_m_content .hc_m_v8 .b3h,
.hc_m_v8 .b4h,
.hc_m_content .hc_m_v8 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v8 .b2bh,
.hc_m_content .hc_m_v8 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v8 .b3bh,
.hc_m_content .hc_m_v8 .b3bh,
.hc_m_v8 .b4bh,
.hc_m_content .hc_m_v8 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v8 .hc_m_outer,
.hc_m_content .hc_m_v8 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v8 .hc_m_hd,
.hc_m_content .hc_m_v8 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v8 .hc_m_content,
.hc_m_content .hc_m_v8 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v8 .hc_m_ft,
.hc_m_content .hc_m_v8 .hc_m_ft {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
/* end Module colors */
/* Module structure */
.hc_m_v8 {
  margin-bottom: 10px;
}
.hc_m_v8 .hc_m_hd,
.hc_m_content .hc_m_v8 .hc_m_hd {
  padding: 0 10px;
}
.hc_m_v8 .hc_m_content,
.hc_m_content .hc_m_v8 .hc_m_content {
  padding: 5px 10px;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 9 --- */
/* Module colors */
.hc_m_v9,
.hc_m_content .hc_m_v9 {
  color: #333333;
}
.hc_m_v9 a,
.hc_m_content .hc_m_v9 a {
  color: #669900;
}
.hc_m_v9 a:active,
.hc_m_content .hc_m_v9 a:active {
  color: #669900;
}
.hc_m_v9 a:visited,
.hc_m_content .hc_m_v9 a:visited {
  color: #669900;
}
.hc_m_v9 a:hover,
.hc_m_content .hc_m_v9 a:hover {
  color: #669900;
}
.hc_m_v9 .b1h,
.hc_m_content .hc_m_v9 .b1h,
.hc_m_v9 .b1bh,
.hc_m_content .hc_m_v9 .b1bh {
  background: #0084C1;
}
.hc_m_v9 .b2h,
.hc_m_content .hc_m_v9 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v9 .b3h,
.hc_m_content .hc_m_v9 .b3h,
.hc_m_v9 .b4h,
.hc_m_content .hc_m_v9 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v9 .b2bh,
.hc_m_content .hc_m_v9 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v9 .b3bh,
.hc_m_content .hc_m_v9 .b3bh,
.hc_m_v9 .b4bh,
.hc_m_content .hc_m_v9 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v9 .hc_m_outer,
.hc_m_content .hc_m_v9 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v9 .hc_m_hd,
.hc_m_content .hc_m_v9 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v9 .hc_m_content,
.hc_m_content .hc_m_v9 .hc_m_content {
  border: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v9 .hc_m_ft,
.hc_m_content .hc_m_v9 .hc_m_ft {
  border: 2px solid #0084C1;
  background: #0084C1;
}
/* end Module colors */
/* Module structure */
.hc_m_v9 {
  margin-bottom: 10px;
}
.hc_m_v9 .hc_m_content,
.hc_m_content .hc_m_v9 .hc_m_content {
  padding: 10px 10px 9px;
}
/* end Module structure */
/* popovers */
.hc_m_v9.hc_m_po .hc_m_arrow_top {
  border-bottom-color: #0084C1;
}
.hc_m_v9.hc_m_po .hc_m_arrow_left,
.hc_rtl .hc_m_v9.hc_m_po .hc_m_arrow_right {
  border-right-color: #0084C1;
}
.hc_m_v9.hc_m_po .hc_m_arrow_right,
.hc_rtl .hc_m_v9.hc_m_po .hc_m_arrow_left {
  border-left-color: #0084C1;
}
/* end popovers */
/* --- Module Design Set version 1 - Module version 11 --- */
/* Module colors */
.hc_m_v11,
.hc_m_content .hc_m_v11 {
  color: #333333;
}
.hc_m_v11 a,
.hc_m_content .hc_m_v11 a {
  color: #669900;
}
.hc_m_v11 a:active,
.hc_m_content .hc_m_v11 a:active {
  color: #669900;
}
.hc_m_v11 a:visited,
.hc_m_content .hc_m_v11 a:visited {
  color: #669900;
}
.hc_m_v11 a:hover,
.hc_m_content .hc_m_v11 a:hover {
  color: #669900;
}
.hc_m_v11 .b1h,
.hc_m_content .hc_m_v11 .b1h,
.hc_m_v11 .b1bh,
.hc_m_content .hc_m_v11 .b1bh {
  background: #0084C1;
}
.hc_m_v11 .b2h,
.hc_m_content .hc_m_v11 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v11 .b3h,
.hc_m_content .hc_m_v11 .b3h,
.hc_m_v11 .b4h,
.hc_m_content .hc_m_v11 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v11 .b2bh,
.hc_m_content .hc_m_v11 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v11 .b3bh,
.hc_m_content .hc_m_v11 .b3bh,
.hc_m_v11 .b4bh,
.hc_m_content .hc_m_v11 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v11 .hc_m_outer,
.hc_m_content .hc_m_v11 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v11 .hc_m_hd,
.hc_m_content .hc_m_v11 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v11 .hc_m_content,
.hc_m_content .hc_m_v11 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v11 .hc_m_ft,
.hc_m_content .hc_m_v11 .hc_m_ft {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
/* end Module colors */
/* Module structure */
.hc_m_v11 {
  margin-bottom: 10px;
}
.hc_m_v11 .hc_m_content,
.hc_m_content .hc_m_v11 .hc_m_content {
  padding-top: 7px;
  padding-bottom: 10px;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 12 --- */
/* Module colors */
.hc_m_v12,
.hc_m_content .hc_m_v12 {
  color: #333333;
}
.hc_m_v12 a,
.hc_m_content .hc_m_v12 a {
  color: #669900;
}
.hc_m_v12 a:active,
.hc_m_content .hc_m_v12 a:active {
  color: #669900;
}
.hc_m_v12 a:visited,
.hc_m_content .hc_m_v12 a:visited {
  color: #669900;
}
.hc_m_v12 a:hover,
.hc_m_content .hc_m_v12 a:hover {
  color: #669900;
}
.hc_m_v12 .b1h,
.hc_m_content .hc_m_v12 .b1h,
.hc_m_v12 .b1bh,
.hc_m_content .hc_m_v12 .b1bh {
  background: #0084C1;
}
#hc_htl_pm_rates.hc_m_v12 .b1h,
#hc_htl_pm_rates.hc_m_content .hc_m_v12 .b1h,
#hc_htl_pm_rates.hc_m_v12 .b1bh,
#hc_htl_pm_rates.hc_m_content .hc_m_v12 .b1bh {
  background: #FFFFFF;
}
.hc_m_v12 .b2h,
.hc_m_content .hc_m_v12 .b2h {
  background: #0084C1;
  border-right: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
}
#hc_htl_pm_rates.hc_m_v12 .b2h,
#hc_htl_pm_rates.hc_m_content .hc_m_v12 .b2h {
  background: #FFFFFF;
}
.hc_m_v12 .b3h,
.hc_m_content .hc_m_v12 .b3h,
.hc_m_v12 .b4h,
.hc_m_content .hc_m_v12 .b4h {
  background: #0084C1;
  border-right: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
}
#hc_htl_pm_rates.hc_m_v12 .b3h,
#hc_htl_pm_rates.hc_m_content .hc_m_v12 .b3h,
#hc_htl_pm_rates.hc_m_v12 .b4h,
#hc_htl_pm_rates.hc_m_content .hc_m_v12 .b4h {
  background: #FFFFFF;
}
.hc_m_v12 .b2bh,
.hc_m_content .hc_m_v12 .b2bh {
  border-right: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
  background: #0084C1;
}
.hc_m_v12 .b3bh,
.hc_m_content .hc_m_v12 .b3bh,
.hc_m_v12 .b4bh,
.hc_m_content .hc_m_v12 .b4bh {
  border-right: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  background: #0084C1;
}
.hc_m_v12 .hc_m_outer,
.hc_m_content .hc_m_v12 .hc_m_outer {
  border-right: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  background: #0084C1;
}
.hc_m_v12 .hc_m_hd,
.hc_m_content .hc_m_v12 .hc_m_hd {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
  color: #FFFFFF;
}
.hc_m_v12 .hc_m_content,
.hc_m_content .hc_m_v12 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v12 .hc_m_ft,
.hc_m_content .hc_m_v12 .hc_m_ft {
  border: 2px solid #0084C1;
  background: #0084C1;
}
/* end Module colors */
/* Module structure */
.hc_m_v12 {
  margin-bottom: 10px;
}
.hc_m_v12 .hc_m_outer,
.hc_m_content .hc_m_v12 .hc_m_outer {
  padding-left: 3px;
  padding-right: 3px;
}
.hc_m_v12 .hc_m_content,
.hc_m_content .hc_m_v12 .hc_m_content {
  padding-top: 10px;
  padding-bottom: 7px;
}
.hc_m_v12 .hc_m_hd h1,
.hc_m_content .hc_m_v12 .hc_m_hd h1,
.hc_m_v12 .hc_m_hd h2,
.hc_m_content .hc_m_v12 .hc_m_hd h2,
.hc_m_v12 .hc_m_hd h3,
.hc_m_content .hc_m_v12 .hc_m_hd h3 {
  text-align: center;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 13 --- */
/* Module colors */
.hc_m_v13,
.hc_m_content .hc_m_v13 {
  color: #333333;
}
.hc_m_v13 a,
.hc_m_content .hc_m_v13 a {
  color: #669900;
}
.hc_m_v13 a:active,
.hc_m_content .hc_m_v13 a:active {
  color: #669900;
}
.hc_m_v13 a:visited,
.hc_m_content .hc_m_v13 a:visited {
  color: #669900;
}
.hc_m_v13 a:hover,
.hc_m_content .hc_m_v13 a:hover {
  color: #669900;
}
.hc_m_v13 .b1h,
.hc_m_content .hc_m_v13 .b1h,
.hc_m_v13 .b1bh,
.hc_m_content .hc_m_v13 .b1bh {
  background: #0084C1;
}
.hc_m_v13 .b2h,
.hc_m_content .hc_m_v13 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v13 .b3h,
.hc_m_content .hc_m_v13 .b3h,
.hc_m_v13 .b4h,
.hc_m_content .hc_m_v13 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v13 .b2bh,
.hc_m_content .hc_m_v13 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v13 .b3bh,
.hc_m_content .hc_m_v13 .b3bh,
.hc_m_v13 .b4bh,
.hc_m_content .hc_m_v13 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v13 .hc_m_outer,
.hc_m_content .hc_m_v13 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v13 .hc_m_hd,
.hc_m_content .hc_m_v13 .hc_m_hd {
  border: none;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v13 .hc_m_content,
.hc_m_content .hc_m_v13 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v13 .hc_m_ft,
.hc_m_content .hc_m_v13 .hc_m_ft {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
/* end Module colors */
/* Module structure */
.hc_m_v13 {
  margin-bottom: 10px;
}
.hc_m_v13 .hc_m_content,
.hc_m_content .hc_m_v13 .hc_m_content {
  padding-top: 10px;
  padding-bottom: 7px;
}
.hc_m_v13 .hc_m_hd h1,
.hc_m_content .hc_m_v13 .hc_m_hd h1,
.hc_m_v13 .hc_m_hd h2,
.hc_m_content .hc_m_v13 .hc_m_hd h2,
.hc_m_v13 .hc_m_hd h3,
.hc_m_content .hc_m_v13 .hc_m_hd h3 {
  text-align: left;
  font-size: 1.4em;
}
.hc_rtl .hc_m_v13 .hc_m_hd h1,
.hc_rtl .hc_m_content .hc_m_v13 .hc_m_hd h1,
.hc_rtl .hc_m_v13 .hc_m_hd h2,
.hc_rtl .hc_m_content .hc_m_v13 .hc_m_hd h2,
.hc_rtl .hc_m_v13 .hc_m_hd h3,
.hc_rtl .hc_m_content .hc_m_v13 .hc_m_hd h3 {
  text-align: right;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 14 --- */
/* Module colors */
.hc_m_v14,
.hc_m_content .hc_m_v14 {
  color: #333333;
}
.hc_m_v14 a,
.hc_m_content .hc_m_v14 a {
  color: #669900;
}
.hc_m_v14 a:active,
.hc_m_content .hc_m_v14 a:active {
  color: #669900;
}
.hc_m_v14 a:visited,
.hc_m_content .hc_m_v14 a:visited {
  color: #669900;
}
.hc_m_v14 a:hover,
.hc_m_content .hc_m_v14 a:hover {
  color: #669900;
}
.hc_m_v14 .b1h,
.hc_m_content .hc_m_v14 .b1h,
.hc_m_v14 .b1bh,
.hc_m_content .hc_m_v14 .b1bh {
  background: #0084C1;
}
.hc_m_v14 .b2h,
.hc_m_content .hc_m_v14 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v14 .b3h,
.hc_m_content .hc_m_v14 .b3h,
.hc_m_v14 .b4h,
.hc_m_content .hc_m_v14 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v14 .b2bh,
.hc_m_content .hc_m_v14 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v14 .b3bh,
.hc_m_content .hc_m_v14 .b3bh,
.hc_m_v14 .b4bh,
.hc_m_content .hc_m_v14 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v14 .hc_m_outer,
.hc_m_content .hc_m_v14 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #FFFFFF;
}
.hc_m_v14 .hc_m_hd,
.hc_m_content .hc_m_v14 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v14 .hc_m_content,
.hc_m_content .hc_m_v14 .hc_m_content {
  border: 2px solid #0084C1;
  background: #0084C1;
  padding: 10px 10px 9px;
}
#hc_map_static.hc_m_v14 .hc_m_content,
#hc_map_static.hc_m_content .hc_m_v14 .hc_m_content,
#hc_map_main.hc_m_v14 .hc_m_content,
#hc_map_main.hc_m_content .hc_m_v14 .hc_m_content {
  border: none;
  background: #FFFFFF;
}
#hc_map_main.hc_m_v14 .hc_m_hd,
.hc_m_content #hc_map_main.hc_m_v14 .hc_m_hd {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v14 .hc_m_ft,
.hc_m_content .hc_m_v14 .hc_m_ft {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
#hc_topDest.hc_m_v14 .hc_m_content,
#hc_topDest.hc_m_v14 .hc_m_hd,
#hc_topDest.hc_m_v14 .hc_m_outer,
#hc_topDest.hc_m_v14 b {
  border-color: #f4f4f4;
  background: #f4f4f4;
}
/* end Module colors */
/* Module structure */
.hc_m_v14 {
  margin-bottom: 10px;
}
/* end Module structure */
/* --- Module Design Set version 1 - Module version 16 --- */
/* Module colors */
.hc_m_v16,
.hc_m_content .hc_m_v16 {
  color: #333333;
}
.hc_m_v16 a,
.hc_m_content .hc_m_v16 a {
  color: #669900;
}
.hc_m_v16 a:active,
.hc_m_content .hc_m_v16 a:active {
  color: #669900;
}
.hc_m_v16 a:visited,
.hc_m_content .hc_m_v16 a:visited {
  color: #669900;
}
.hc_m_v16 a:hover,
.hc_m_content .hc_m_v16 a:hover {
  color: #669900;
}
.hc_m_v16 .b1h,
.hc_m_content .hc_m_v16 .b1h,
.hc_m_v16 .b1bh,
.hc_m_content .hc_m_v16 .b1bh {
  background: #0084C1;
}
.hc_m_v16 .b2h,
.hc_m_content .hc_m_v16 .b2h {
  background: #0084C1;
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
}
.hc_m_v16 .b3h,
.hc_m_content .hc_m_v16 .b3h,
.hc_m_v16 .b4h,
.hc_m_content .hc_m_v16 .b4h {
  background: #0084C1;
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
}
.hc_m_v16 .b2bh,
.hc_m_content .hc_m_v16 .b2bh {
  border-right: 2px solid #0084C1;
  border-left: 2px solid #0084C1;
  background: #0084C1;
}
.hc_m_v16 .b3bh,
.hc_m_content .hc_m_v16 .b3bh,
.hc_m_v16 .b4bh,
.hc_m_content .hc_m_v16 .b4bh {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v16 .hc_m_outer,
.hc_m_content .hc_m_v16 .hc_m_outer {
  border-right: 1px solid #0084C1;
  border-left: 1px solid #0084C1;
  background: #0084C1;
}
.hc_m_v16 .hc_m_hd,
.hc_m_content .hc_m_v16 .hc_m_hd {
  border: 2px solid #0084C1;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_m_v16 .hc_m_content,
.hc_m_content .hc_m_v16 .hc_m_content {
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
}
.hc_m_v16 .hc_m_ft,
.hc_m_content .hc_m_v16 .hc_m_ft {
  border: 2px solid #0084C1;
  background: #0084C1;
}
/* end Module colors */
/* Module structure */
.hc_m_v16 {
  margin-bottom: 10px;
}
.hc_m_v16 .hc_m_outer,
.hc_m_content .hc_m_v16 .hc_m_outer {
  padding-left: 3px;
  padding-right: 3px;
}
.hc_m_v16 .hc_m_content,
.hc_m_content .hc_m_v16 .hc_m_content {
  padding-top: 10px;
  padding-bottom: 7px;
}
.hc_m_v16 .hc_m_hd h1,
.hc_m_content .hc_m_v16 .hc_m_hd h1,
.hc_m_v16 .hc_m_hd h2,
.hc_m_content .hc_m_v16 .hc_m_hd h2,
.hc_m_v16 .hc_m_hd h3,
.hc_m_content .hc_m_v16 .hc_m_hd h3 {
  text-align: left;
  font-size: 1.3em;
}
.hc_rtl .hc_m_v16 .hc_m_hd h1,
.hc_rtl .hc_m_content .hc_m_v16 .hc_m_hd h1,
.hc_rtl .hc_m_v16 .hc_m_hd h2,
.hc_rtl .hc_m_content .hc_m_v16 .hc_m_hd h2,
.hc_rtl .hc_m_v16 .hc_m_hd h3,
.hc_rtl .hc_m_content .hc_m_v16 .hc_m_hd h3 {
  text-align: right;
}
.hc_m_v16 .hc_m_hd h1 a,
.hc_m_content .hc_m_v16 .hc_m_hd h1 a,
.hc_m_v16 .hc_m_hd h2 a,
.hc_m_content .hc_m_v16 .hc_m_hd h2 a,
.hc_m_v16 .hc_m_hd h3 a,
.hc_m_content .hc_m_v16 .hc_m_hd h3 a {
  text-decoration: none;
}
/* end Module structure */
/* --- HC Base - Modals --- */
.hc_m_modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 999;
  background: url(https://cdn.datahc.com/Images/hc_bg_overlay.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) repeat top left;
}
.hc_m_modal > div {
  display: none;
  position: relative;
  top: 50px;
  left: 50%;
  z-index: 999;
  float: left;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  max-width: 740px;
  background: #fff;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0 0 15px;
  -webkit-box-shadow: 0 0 15px;
  box-shadow: 0 0 15px;
  text-align: left;
}
.hc_rtl .hc_m_modal > div {
  left: auto;
  right: auto;
  text-align: right;
}
.hc_m_modal > div:before {
  display: none;
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 1000px;
  width: 1000px;
  background: #000;
  -moz-opacity: 0.6;
  -khtml-opacity: 0.6;
  -webkit-opacity: 0.6;
  opacity: 0.6;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=60);
  filter: alpha(opacity=60);
  overflow: visible;
}
.hc_m_modal > div .hc_m_close {
  font-family: "icons";
  font-weight: normal;
  position: absolute;
  right: 5px;
  top: 7px;
  font-size: 1.6em;
  padding-top: 0;
  text-decoration: none;
  z-index: 901;
  color: #CCCCCC;
}
.hc_rtl .hc_m_modal > div .hc_m_close {
  right: auto;
  left: 5px;
}
.hc_m_modal > div .hc_m_close:hover {
  color: #B80000;
}
/* hc_m */
.hc_m_modal .hc_m {
  margin-bottom: 0;
}
.hc_m_modal .hc_m .hc_m_close {
  top: 10px;
  right: 10px;
  color: #fff;
}
.hc_rtl .hc_m_modal .hc_m .hc_m_close {
  right: auto;
  left: 10px;
}
/* --- HC Base - Popovers --- */
.hc_m_po {
  position: absolute;
  top: 5px;
  left: 0;
  z-index: 900;
}
.hc_rtl .hc_m_po {
  left: auto;
  right: 0;
}
.hc_m_close,
.hc_m_po .hc_m_close {
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 0;
  text-decoration: none;
  z-index: 901;
  font-size: 1.4em;
}
.hc_rtl .hc_m_close,
.hc_rtl .hc_m_po .hc_m_close {
  right: auto;
  left: 0;
}
.hc_m_close:hover,
.hc_m_po .hc_m_close:hover {
  text-decoration: none;
}
.hc_m_close .hc_icon:before,
.hc_m_po .hc_m_close .hc_icon:before {
  height: 40px;
  width: 40px;
  line-height: 40px;
}
.hc_m_arrow_top,
.hc_m_arrow_left,
.hc_m_arrow_right {
  position: absolute;
  width: 0;
  height: 0;
}
.hc_m_arrow_top {
  top: -8px;
  left: 50%;
  margin-left: -8px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom-width: 8px;
  border-bottom-style: solid;
  border-bottom-color: #0084C1;
}
.hc_rtl .hc_m_arrow_top {
  left: auto;
  right: 50%;
  margin-left: 0;
  margin-right: -8px;
}
.hc_m_arrow_left,
.hc_rtl .hc_m_arrow_right {
  top: 14px;
  left: -12px;
  right: auto;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: none;
  border-right-width: 12px;
  border-right-style: solid;
  border-right-color: #0084C1;
}
.hc_m_arrow_right,
.hc_rtl .hc_m_arrow_left {
  top: 14px;
  right: -12px;
  left: auto;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: none;
  border-left-width: 12px;
  border-left-style: solid;
  border-left-color: #0084C1;
}
/* hc_m */
.hc_m.hc_m_po {
  border: 1px solid #0084C1;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: #fff;
}
.hc_m.hc_m_po .hc_m_close {
  color: #CCCCCC;
}
.hc_m.hc_m_po .hc_m_close:hover {
  color: #B80000;
}
.hc_m.hc_m_po .hc_m_arrow_top {
  border-bottom-color: #0084C1;
}
.hc_m.hc_m_po .hc_m_arrow_left,
.hc_rtl .hc_m.hc_m_po .hc_m_arrow_right {
  border-right-color: #0084C1;
}
.hc_m.hc_m_po .hc_m_arrow_right,
.hc_rtl .hc_m.hc_m_po .hc_m_arrow_left {
  border-left-color: #0084C1;
}
.hc_m.hc_m_po .hc_m_hd,
.hc_m.hc_m_po .hc_m_content {
  padding: 0;
  background: none;
  border: none;
}
/* HC Module Underlay */
.hc_m_underlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  padding: 10px;
  background: #333;
  opacity: 0.7;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
  filter: alpha(opacity=70);
  z-index: 997;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.hc_m_underlay .b1h,
.hc_m_underlay .b2h,
.hc_m_underlay .b3h,
.hc_m_underlay .b4h,
.hc_m_underlay .b1bh,
.hc_m_underlay .b2bh,
.hc_m_underlay .b3bh,
.hc_m_underlay .b4bh {
  display: none;
}
.hc_m_underlay .hc_m_outer,
.hc_m_underlay .hc_m_hd,
.hc_m_underlay .hc_m_content,
.hc_m_underlay .hc_m_ft {
  display: none;
}
/* bgiframe underlay */
.bgiframe {
  position: absolute;
  width: 350px;
  height: 120px;
  top: 0;
  left: 0;
  border: none;
  display: none;
  z-index: 0;
}
/* --- end HC Base - Popovers --- */
/* Page structure - old "regions" */
#hc_r_1,
#hc_r_2,
#hc_r_3,
#hc_r_4,
#hc_r_5,
#hc_r_6 {
  *display: inline-block;
}
#hc_r_1,
#hc_r_2,
#hc_r_3,
#hc_r_4,
#hc_r_5,
#hc_r_6 {
  display: block;
}
#hc_r_1 {
  *display: inline-block;
  text-align: left;
  margin: 0 0 10px;
  padding: 0;
  position: relative;
}
.hc_rtl #hc_r_1 {
  text-align: right;
}
#hc_r_v_full {
  position: relative;
  *z-index: 2;
}
#hc_r_globalWrap {
  height: 100%;
  padding: 0;
  margin: 0;
  *z-index: 1;
}
.hc_r_stickyWrap {
  position: relative;
  min-height: 100%;
  height: auto !important;
  height: 100%;
  padding: 0;
  margin: 0 auto -200px;
  /* the bottom margin is the negative value of the footer's height */
}
.hc_page_fullStatic .hc_r_stickyWrap {
  width: auto;
  text-align: center;
}
.hc_r_content_push {
  height: 200px;
  padding: 0;
  margin: 0;
  background: #FFFFFF;
  clear: left;
}
#hc_r_content {
  position: relative;
  padding: 0;
  *display: inline-block;
  margin: 0 auto 20px;
  text-align: left;
  background: #FFFFFF;
}
.hc_rtl #hc_r_content {
  text-align: right;
}
.hc_page_home #hc_r_content {
  margin-top: 10px;
}
/* Page structure - old "regions" end */
/* item layouts */
.hc_i {
  display: inline-block;
}
.hc_i {
  display: block;
  position: relative;
}
.hc_i h3,
.hc_i dl,
.hc_i dt,
.hc_i dd {
  margin: 0;
  padding: 0;
}
.hc_i dt,
.hc_i dd {
  display: none;
}
.hc_rtl .hc_i dt,
.hc_rtl .hc_i dd {
  direction: rtl;
}
.hc_i h3 {
  font-size: 1.25em;
}
.hc_i h3 a {
  color: #669900;
}
.hc_i h3 a:hover {
  color: #669900;
}
.hc_i h3 span.hc_i_rating {
  width: 70px;
  white-space: nowrap;
  padding-top: 0.2em;
  display: none;
}
.hc_i h3 span.hc_i_rating img {
  margin-right: 1px;
}
.hc_rtl .hc_i h3 span.hc_i_rating img {
  margin-right: 0;
  margin-left: 1px;
}
.hc_i h3 a.hc_i_trans {
  display: block;
  font-size: 0.75em;
  padding-top: 5px;
  font-weight: normal;
}
.hc_i a.hc_i_photo {
  display: block;
  overflow: hidden;
  position: relative;
  border: 5px solid #fff;
  background-color: #fff;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  width: 136px;
  height: 136px;
}
.hc_i a.hc_i_photo:hover {
  border-color: #669900;
  background-color: #fff;
}
.hc_i a.hc_i_photo img {
  clip: rect(0 134px 134px 0);
  position: absolute;
  top: 1px;
  left: 1px;
}
.hc_i a.hc_i_photo:hover img {
  border-color: #669900;
}
.hc_i a.hc_i_photo span {
  display: block;
  background-color: #333;
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.hc_i .hc_i_remove a {
  text-decoration: none;
}
.hc_i .hc_i_remove .hc_icon {
  display: block;
  width: 1em;
  height: 1em;
  color: #CCCCCC;
  font-size: 15px;
  right: -4px;
}
.hc_i a.hc_i_remove:hover .hc_icon,
.hc_i .hc_i_remove a:hover .hc_icon {
  color: #B80000;
}
.hc_i dd.hc_i_rating {
  *width: 70px;
}
.hc_i dd.hc_i_rating img {
  margin-right: 1px;
}
.hc_i dd.hc_i_addr .hc_icon {
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 11px;
  background: url(https://cdn.datahc.com/Images/hc_flags_8bit.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  border: 2px solid #ccc;
  overflow: hidden;
}
.hc_rtl .hc_i dd.hc_i_addr .hc_icon {
  left: auto;
  right: 0;
  direction: ltr!important;
}
.hc_i dd.hc_i_price {
  font-size: 2.5em;
}
.hc_i dd.hc_i_price a {
  text-decoration: none;
}
.hc_page_sr .hc_i dd.hc_i_price a {
  color: #669900;
}
.hc_i dd.hc_i_usrRating {
  font-size: 1.5em;
}
.hc_i dd.hc_i_usrRating a {
  text-decoration: none;
}
.hc_i dd.hc_i_map a.map-marker-icon {
  display: none;
  overflow: hidden;
  background: #9c0000;
  color: #fff;
  width: 18px;
  height: 17px;
  line-height: 15px;
  *line-height: 14px;
  margin: 0 5px -5px 0;
  padding: 1px 0 0;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 -1px 0 #700000;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_rtl .hc_i dd.hc_i_map a.map-marker-icon {
  margin-right: 0;
  margin-left: 5px;
}
.hc_i dd.hc_i_map a.hc_map_active {
  background: #126399;
  text-shadow: 0 -1px 0 #0f4f77;
  border: 2px solid #2caed3;
}
.hc_i dd.hc_i_map a.map-marker-icon:hover {
  cursor: pointer;
  text-decoration: none;
}
.hc_i dd.hc_i_map a.map-marker-icon.selected {
  background-position: -32px -64px;
}
.hc_i dd.hc_i_dist {
  font-size: 0.95em;
  color: #333333;
}
.hc_i dd.hc_i_reviews {
  color: #333333;
}
.hc_i dd.hc_i_reviews span {
  font-weight: bold;
}
.hc_i dd.hc_i_description ul {
  margin: 10px 0 0;
  list-style: none;
  padding-left: 0;
  padding-bottom: 0;
}
dd.hc_i_description p {
  margin: 0;
  padding: 10px 0;
}
.hc_i dd.hc_i_sentiments {
  font-size: 1.4em;
  font-style: italic;
  width: 100%;
}
.hc_i dd.hc_i_sentiments ul {
  display: block;
  width: 100%;
  text-align: center;
}
.hc_i dd.hc_i_sentiments ul,
.hc_i dd.hc_i_sentiments ul li {
  margin: 0;
  padding: 0;
  list-style: none;
  background: none;
}
.hc_i dd.hc_i_sentiments ul li {
  padding: 0 10px 0 0;
  display: inline-block;
  *white-space: nowrap;
  *display: inline;
  zoom: 1;
}
.hc_rtl .hc_i dd.hc_i_sentiments ul li {
  padding: 0 0 0 10px;
}
.hc_i dd.hc_i_sentiments a {
  text-decoration: none;
  color: #669900;
}
.hc_i dd.hc_i_themes,
.hc_i dd.hc_i_filters {
  clear: left;
  padding-top: 5px;
}
.hc_rtl .hc_i dd.hc_i_themes,
.hc_rtl .hc_i dd.hc_i_filters {
  clear: right;
}
.hc_i dd.hc_i_themes ul,
.hc_i dd.hc_i_filters ul {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.hc_i dd.hc_i_themes ul li,
.hc_i dd.hc_i_filters ul li {
  position: relative;
  display: block;
  float: left;
  list-style: none;
  padding: 2px 5px 3px;
  margin: 0 5px 5px 0;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  background: #999;
  color: #fff;
  font-size: 0.95em;
  font-weight: bold;
}
.hc_rtl .hc_i dd.hc_i_themes ul li,
.hc_rtl .hc_i dd.hc_i_filters ul li {
  margin-right: 0;
  margin-left: 5px;
  float: right;
}
.hc_i dd.hc_i_filters ul li {
  background: #efefef;
  color: #669900;
}
.hc_i dd.hc_i_booking {
  color: #669900;
  font-size: 0.95em;
  font-weight: bold;
}
.hc_i dd.hc_i_booking span {
  color: #333333;
  font-weight: normal;
}
.hc_i dd.hc_i_viewers {
  font-size: 0.95em;
}
.hc_i dd.hc_i_photos {
  height: 47px;
  overflow: hidden;
}
.hc_i dd.hc_i_photos ul {
  margin: 0;
  padding: 0;
}
.hc_i dd.hc_i_photos ul li {
  position: relative;
  display: block;
  float: left;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  margin: 0 5px 5px 0;
  padding: 0;
  list-style: none;
}
.hc_rtl .hc_i dd.hc_i_photos ul li {
  float: right;
  margin-right: 0;
  margin-left: 5px;
}
.hc_i dd.hc_i_photos ul li.hc_active {
  border-color: #669900;
}
.hc_i dd.hc_i_photos ul li a {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.hc_i dd.hc_i_photos ul li a img {
  position: absolute;
  top: 0;
  left: 0;
  -moz-opacity: 0.7;
  -khtml-opacity: 0.7;
  -webkit-opacity: 0.7;
  opacity: 0.7;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);
  filter: alpha(opacity=70);
}
.hc_i dd.hc_i_photos ul li a:hover img {
  -moz-opacity: 1;
  -khtml-opacity: 1;
  -webkit-opacity: 1;
  opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  filter: alpha(opacity=100);
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_0 img {
  left: -222px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_1 img {
  left: -262px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_2 img {
  left: -302px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_3 img {
  left: -342px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_4 img {
  left: -382px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_5 img {
  left: -422px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_6 img {
  left: -462px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_7 img {
  left: -502px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_8 img {
  left: -542px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_9 img {
  left: -582px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_10 img {
  left: -622px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_11 img {
  left: -662px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_12 img {
  left: -702px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_13 img {
  left: -742px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_14 img {
  left: -782px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_15 img {
  left: -822px;
}
.hc_i dd.hc_i_photos ul li.hc_i_photos_16 img {
  left: -862px;
}
.hc_i dd.hc_i_tax {
  font-size: 0.95em;
  color: #333333;
}
.hc_i .hc_i_provider {
  display: none;
}
.hc_rtl .hc_i .hc_i_provider {
  direction: rtl;
}
/*end item layouts */
/* star ratings */
.hc_rating_t_star,
.hc_rating_t_self {
  position: relative;
  width: 65px;
  display: inline-block;
}
.hc_rtl .hc_rating_t_star,
.hc_rtl .hc_rating_t_self {
  text-align: right;
}
#hc_viewedHotels .hc_rating_t_star,
#hc_viewedHotels .hc_rating_t_self {
  display: inline-block;
  height: 15px;
}
#hc_findAHotel .hc_rating_t_star,
#hc_findAHotel .hc_rating_t_self {
  display: block;
  height: 10px;
}
.hc_rating_t_star img,
.hc_rating_t_self img {
  display: none;
}
.hc_rating_t_star:before,
.hc_rating_t_self:before {
  display: inline-block;
  content: "";
  font-family: icons;
  font-weight: 300;
  color: #FFc000;
  font-size: 1em;
  height: 1.2em;
  letter-spacing: 0.1em;
  position: absolute;
  bottom: 0;
  left: 0;
}
h1 .hc_rating_t_star:before,
h1 .hc_rating_t_self:before,
h2 .hc_rating_t_star:before,
h2 .hc_rating_t_self:before,
h3 .hc_rating_t_star:before,
h3 .hc_rating_t_self:before {
  font-size: 0.7em;
}
.hc_rtl .hc_rating_t_star:before,
.hc_rtl .hc_rating_t_self:before {
  left: auto;
  right: 0;
}
#hc_popularHotels .hc_rating_t_star:after,
#hc_popularHotels .hc_rating_t_self:after,
#hc_popularHotels .hc_rating_t_star:before,
#hc_popularHotels .hc_rating_t_self:before {
  padding: 0 10px;
}
.hc_rating_t_star.hc_rating_4half:before {
  content: "\e955\e955\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_3half:before {
  content: "\e955\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_2half:before {
  content: "\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_1half:before {
  content: "\e955\e955";
}
.hc_rating_t_star.hc_rating_0half:before {
  content: "\e955";
}
.hc_rating_t_self:before {
  content: "";
  letter-spacing: 0.2em;
}
.hc_rating_t_self.hc_rating_4half:before {
  content: "\e949\e949\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_3half:before {
  content: "\e949\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_2half:before {
  content: "\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_1half:before {
  content: "\e949\e949";
}
.hc_rating_t_self.hc_rating_0half:before {
  content: "\e949";
}
.hc_rating_t_star:after,
.hc_rating_t_self:after {
  display: inline-block;
  font-family: icons;
  font-weight: 300;
  color: #FFc000;
  font-size: 1em;
  height: 1.2em;
  letter-spacing: 0.1em;
  position: absolute;
  bottom: 0;
  left: 0;
}
h1 .hc_rating_t_star:after,
h1 .hc_rating_t_self:after,
h2 .hc_rating_t_star:after,
h2 .hc_rating_t_self:after,
h3 .hc_rating_t_star:after,
h3 .hc_rating_t_self:after {
  font-size: 0.7em;
}
.hc_rtl .hc_rating_t_star:after,
.hc_rtl .hc_rating_t_self:after {
  left: auto;
  right: 0;
}
#hc_findAHotel .hc_rating_t_star:after,
#hc_findAHotel .hc_rating_t_self:after {
  top: -3px;
  left: 20px;
}
.hc_page_hotel #hc_viewedHotels .hc_rating_t_star:after,
.hc_page_hotel #hc_viewedHotels .hc_rating_t_self:after,
.hc_page_hotel #hc_viewedHotels .hc_rating_t_star:before,
.hc_page_hotel #hc_viewedHotels .hc_rating_t_self:before {
  display: inline-block;
  height: 12px;
  bottom: 7px;
}
.hc_page_home #hc_selectedDeals .hc_rating_t_star:after,
.hc_page_home #hc_viewedHotels .hc_rating_t_star:after,
.hc_page_home #hc_selectedDeals .hc_rating_t_self:after,
.hc_page_home #hc_viewedHotels .hc_rating_t_self:after,
.hc_page_home #hc_selectedDeals .hc_rating_t_star:before,
.hc_page_home #hc_viewedHotels .hc_rating_t_star:before,
.hc_page_home #hc_selectedDeals .hc_rating_t_self:before,
.hc_page_home #hc_viewedHotels .hc_rating_t_self:before {
  padding: 0 5px;
  font-size: 0.8em;
}
.hc_rating_t_self:after {
  letter-spacing: 0.2em;
}
.hc_rating_t_star.hc_rating_5:after {
  content: "\e955\e955\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_4:after {
  content: "\e955\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_3:after {
  content: "\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_2:after {
  content: "\e955\e955";
}
.hc_rating_t_star.hc_rating_1:after {
  content: "\e955";
}
.hc_rating_t_star.hc_rating_4half:after {
  content: "\e955\e955\e955\e955\e968";
}
.hc_rtl .hc_rating_t_star.hc_rating_4half:after {
  content: "\e969\e955\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_3half:after {
  content: "\e955\e955\e955\e968";
}
.hc_rtl .hc_rating_t_star.hc_rating_3half:after {
  content: "\e969\e955\e955\e955";
}
.hc_rating_t_star.hc_rating_2half:after {
  content: "\e955\e955\e968";
}
.hc_rtl .hc_rating_t_star.hc_rating_2half:after {
  content: "\e969\e955\e955";
}
.hc_rating_t_star.hc_rating_1half:after {
  content: "\e955\e968";
}
.hc_rtl .hc_rating_t_star.hc_rating_1half:after {
  content: "\e969\e955";
}
.hc_rating_t_star.hc_rating_0half:after {
  content: "\e968";
}
.hc_rtl .hc_rating_t_star.hc_rating_0half:after {
  content: "\e969";
}
.hc_rating_t_self.hc_rating_5:after {
  content: "\e949\e949\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_4:after {
  content: "\e949\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_3:after {
  content: "\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_2:after {
  content: "\e949\e949";
}
.hc_rating_t_self.hc_rating_1:after {
  content: "\e949";
}
.hc_rating_t_self.hc_rating_4half:after {
  content: "\e949\e949\e949\e949\e966";
}
.hc_rtl .hc_rating_t_self.hc_rating_4half:after {
  content: "\e967\e949\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_3half:after {
  content: "\e949\e949\e949\e966";
}
.hc_rtl .hc_rating_t_self.hc_rating_3half:after {
  content: "\e967\e949\e949\e949";
}
.hc_rating_t_self.hc_rating_2half:after {
  content: "\e949\e949\e966";
}
.hc_rtl .hc_rating_t_self.hc_rating_2half:after {
  content: "\e967\e949\e949";
}
.hc_rating_t_self.hc_rating_1half:after {
  content: "\e949\e966";
}
.hc_rtl .hc_rating_t_self.hc_rating_1half:after {
  content: "\e967\e949";
}
.hc_rating_t_self.hc_rating_0half:after {
  content: "\e966";
}
.hc_rtl .hc_rating_t_self.hc_rating_0half:after {
  content: "\e967";
}
.hc_rating_0:before {
  content: "";
}
/* --- HC Common --- */
/* HC Informational Messages */
p.hc_info {
  display: inline-block;
}
p.hc_info {
  position: relative;
  font-size: 1em;
  padding: 0 0 0 20px;
  background: #f4f4f4;
  margin-bottom: 5px;
  border: 1px solid #0084C1;
}
.hc_rtl p.hc_info {
  padding-left: 0;
  padding-right: 20px;
}
p.hc_info .hc_icon {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  padding: 0 10px;
  color: #0084C1;
  font-size: 1.6em;
  font-weight: bold;
}
.hc_rtl p.hc_info .hc_icon {
  left: auto;
  right: 0;
}
p.hc_info em {
  display: block;
  font-style: normal;
  color: #0084C1;
  padding: 5px 5px 5px 10px;
  font-size: 0.95em;
  font-weight: bold;
}
.hc_info_v2 {
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding: 10px 10px 10px 30px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  color: #0084C1;
  font-weight: normal;
}
.hc_rtl .hc_info_v2 {
  padding-left: 10px;
  padding-right: 30px;
}
.hc_info_v2 .hc_icon {
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 1.25em;
  color: #0084C1;
}
.hc_rtl .hc_info_v2 .hc_icon {
  left: auto;
  right: 10px;
}
.hc_info_v2 a {
  display: inline-block;
  padding: 0 5px;
  font-size: 0.95em;
}
.hc_info_v3 {
  display: block;
  position: relative;
  background: #eee url(https://cdn.datahc.com/Images/hc_bg_divider_dark.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) repeat-x left bottom;
  padding: 10px 10px 10px;
}
.hc_info_v3 .hc_icon {
  display: block;
  position: absolute;
  width: 100%;
  bottom: -1px;
  left: 0;
  height: 1px;
}
/* HC Intro section */
#hc_intro {
  display: inline-block;
  position: relative;
  margin: 0 0 20px;
  padding: 0;
}
.hc_rtl #hc_intro {
  direction: rtl;
}
.hc_page_sr #hc_intro,
.hc_page_city #hc_intro {
  padding-right: 180px;
  padding-left: 10px;
  margin: 10px 0;
}
.hc_rtl.hc_page_sr #hc_intro,
.hc_rtl.hc_page_city #hc_intro {
  padding-left: 180px;
  padding-right: 10px;
}
#hc_intro .hc-searchproperties .hc-availablehotels {
  font-size: 0.6em;
}
.hc_page_sr #hc_intro h1,
.hc_page_city #hc_intro h1 {
  font-size: 1.5em;
  margin: 0;
  padding: 0;
}
#hc_intro p {
  display: block;
  margin: 0;
  padding: 0 0 10px;
  line-height: 1.4em;
}
#hc_intro_maplink_show,
#hc_intro_maplink_hide {
  display: none;
  position: absolute;
  right: 20px;
  top: 0;
  padding: 0 0 0 48px;
  line-height: 38px;
  height: 38px;
}
.hc_rtl #hc_intro_maplink_show,
.hc_rtl #hc_intro_maplink_hide {
  right: auto;
  left: 20px;
  padding: 0 48px 0 0;
  background-position: right 0;
}
#hc_intro_maplink_show .hc_icon,
#hc_intro_maplink_hide .hc_icon {
  display: block;
  position: absolute;
  left: 0;
  top: 2px;
  height: 38px;
  width: 38px;
}
.hc_rtl #hc_intro_maplink_show .hc_icon,
.hc_rtl #hc_intro_maplink_hide .hc_icon {
  left: auto;
  right: 0;
}
/* end HC intro section */
/* HC Breadcrumb */
#hc_bc {
  display: inline-block;
}
#hc_bc {
  position: relative;
  padding: 10px 0 0;
  overflow: hidden;
  font-size: 0.9em;
  display: block;
}
.hc_page_landing #hc_bc {
  padding: 10px 0;
  margin-left: 10px;
  margin-right: 10px;
}
.hc_page_landing .hc_b_simple #hc_bc {
  padding-top: 0;
  margin-top: 0;
}
#hc_bc ul {
  margin: 0 0 0 -10px;
  padding: 0;
  display: inline-block;
  width: inherit;
  overflow: hidden;
}
.hc_rtl #hc_bc ul {
  margin: 0 -10px 0 0;
  float: right;
  *float: none;
}
.hc_rtl #hc_bc .cDiv {
  clear: right;
}
#hc_bc ul li {
  display: block;
  float: left;
  list-style: none;
  margin: 0 8px 0 0;
  padding: 0 0 0 10px;
  position: relative;
  font-size: 1em;
}
.hc_rtl #hc_bc ul li {
  float: right;
  padding: 0 10px 0 0;
  margin: 0 0 0 3px;
  background-position: right 3px;
}
#hc_bc ul li:before {
  content: "/";
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  color: #999;
}
.hc_rtl #hc_bc ul li:before {
  content: "\\";
  left: auto;
  right: 0;
}
#hc_bc ul li:first-child:before {
  display: none;
}
#hc_bc ul li span {
  display: block;
  font-size: 0.9em;
  color: #666;
}
.hc_bc_right {
  display: block;
  position: absolute;
  z-index: 1;
  top: 85px;
  right: 10px;
}
.hc_rtl .hc_bc_right {
  right: auto;
  left: 10px;
}
.hc_b_simple .hc_bc_right {
  top: 60px;
}
/* end HC Breadcrumb */
/* Best price guaranteed links */
.hc_bpg_link {
  font-size: 1.2em;
  margin-left: 25px;
  display: inline-block;
  margin-top: 10px;
  float: left;
}
.hc_rtl .hc_bpg_link {
  margin-left: 0;
  margin-right: 25px;
}
/* end Best Price Guaranteed links */
/* HC Flags
 *flag sprite generated from flag-sprites.com (select all countries as option) */
.hc_t_flag .hc_icon {
  display: block;
  width: 16px;
  height: 11px;
  background: url(https://cdn.datahc.com/Images/hc_flags_8bit.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  border: 1px solid #fff;
  overflow: hidden;
  top: 1px;
}
.hc_flag_ad .hc_icon {
  background-position: -16px 0 !important;
}
/*B1 - all flags checked on 26/02/2013*/
.hc_flag_ae .hc_icon {
  background-position: -32px 0 !important;
}
/*C1*/
.hc_flag_af .hc_icon {
  background-position: -48px 0 !important;
}
/*D1*/
.hc_flag_ag .hc_icon {
  background-position: -64px 0 !important;
}
/*E1*/
.hc_flag_ai .hc_icon {
  background-position: -80px 0 !important;
}
/*F1*/
.hc_flag_al .hc_icon {
  background-position: -96px 0 !important;
}
/*G1*/
.hc_flag_am .hc_icon {
  background-position: -112px 0 !important;
}
/*H1*/
.hc_flag_an .hc_icon {
  background-position: -128px 0 !important;
}
/*I1*/
.hc_flag_ao .hc_icon {
  background-position: -144px 0 !important;
}
/*J1*/
.hc_flag_ar .hc_icon {
  background-position: -160px 0 !important;
}
/*K1*/
.hc_flag_as .hc_icon {
  background-position: -176px 0 !important;
}
/*L1*/
.hc_flag_at .hc_icon {
  background-position: -192px 0 !important;
}
/*M1*/
.hc_flag_au .hc_icon {
  background-position: -208px 0 !important;
}
/*N1*/
.hc_flag_aw .hc_icon {
  background-position: -224px 0 !important;
}
/*O1*/
.hc_flag_az .hc_icon {
  background-position: -240px 0 !important;
}
/*P1*/
.hc_flag_ba .hc_icon {
  background-position: 0 -11px !important;
}
/*A2*/
.hc_flag_bb .hc_icon {
  background-position: -16px -11px !important;
}
/*B2*/
.hc_flag_bd .hc_icon {
  background-position: -32px -11px !important;
}
/*C2*/
.hc_flag_be .hc_icon {
  background-position: -48px -11px !important;
}
/*D2*/
.hc_flag_bf .hc_icon {
  background-position: -64px -11px !important;
}
/*E2*/
.hc_flag_bg .hc_icon {
  background-position: -80px -11px !important;
}
/*F2*/
.hc_flag_bh .hc_icon {
  background-position: -96px -11px !important;
}
/*G2*/
.hc_flag_bi .hc_icon {
  background-position: -112px -11px !important;
}
/*H2*/
.hc_flag_bj .hc_icon {
  background-position: -128px -11px !important;
}
/*I2*/
.hc_flag_bm .hc_icon {
  background-position: -144px -11px !important;
}
/*J2*/
.hc_flag_bn .hc_icon {
  background-position: -160px -11px !important;
}
/*K2*/
.hc_flag_bo .hc_icon {
  background-position: -176px -11px !important;
}
/*L2*/
.hc_flag_br .hc_icon {
  background-position: -192px -11px !important;
}
/*M2*/
.hc_flag_bs .hc_icon {
  background-position: -208px -11px !important;
}
/*N2*/
.hc_flag_bt .hc_icon {
  background-position: -224px -11px !important;
}
/*O2*/
.hc_flag_bv .hc_icon {
  background-position: -240px -11px !important;
}
/*P2*/
.hc_flag_bw .hc_icon {
  background-position: 0 -22px !important;
}
/*A3*/
.hc_flag_by .hc_icon {
  background-position: -16px -22px !important;
}
/*B3*/
.hc_flag_bz .hc_icon {
  background-position: -32px -22px !important;
}
/*C3*/
.hc_flag_ca .hc_icon {
  background-position: -48px -22px !important;
}
/*D3*/
.hc_flag_ct .hc_icon {
  background-position: -64px -22px !important;
}
/*E3*/
.hc_flag_cd .hc_icon {
  background-position: -80px -22px !important;
}
/*F3*/
.hc_flag_cf .hc_icon {
  background-position: -96px -22px !important;
}
/*G3*/
.hc_flag_cg .hc_icon {
  background-position: -112px -22px !important;
}
/*H3*/
.hc_flag_ch .hc_icon {
  background-position: -128px -22px !important;
}
/*I3*/
.hc_flag_ci .hc_icon {
  background-position: -144px -22px !important;
}
/*J3*/
.hc_flag_ck .hc_icon {
  background-position: -160px -22px !important;
}
/*K3*/
.hc_flag_cl .hc_icon {
  background-position: -176px -22px !important;
}
/*L3*/
.hc_flag_cm .hc_icon {
  background-position: -192px -22px !important;
}
/*M3*/
.hc_flag_cn .hc_icon {
  background-position: -208px -22px !important;
}
/*N3*/
.hc_flag_co .hc_icon {
  background-position: -224px -22px !important;
}
/*O3*/
.hc_flag_cr .hc_icon {
  background-position: -240px -22px !important;
}
/*P3*/
.hc_flag_cu .hc_icon {
  background-position: 0 -33px !important;
}
/*A4*/
.hc_flag_cv .hc_icon {
  background-position: -16px -33px !important;
}
/*B4*/
.hc_flag_cy .hc_icon {
  background-position: -32px -33px !important;
}
/*C4*/
.hc_flag_cz .hc_icon {
  background-position: -48px -33px !important;
}
/*D4*/
.hc_flag_de .hc_icon {
  background-position: -64px -33px !important;
}
/*E4*/
.hc_flag_dj .hc_icon {
  background-position: -80px -33px !important;
}
/*F4*/
.hc_flag_dk .hc_icon {
  background-position: -96px -33px !important;
}
/*G4*/
.hc_flag_dm .hc_icon {
  background-position: -112px -33px !important;
}
/*H4*/
.hc_flag_do .hc_icon {
  background-position: -128px -33px !important;
}
/*I4*/
.hc_flag_dz .hc_icon {
  background-position: -144px -33px !important;
}
/*J4*/
.hc_flag_ec .hc_icon {
  background-position: -160px -33px !important;
}
/*K4*/
.hc_flag_ee .hc_icon {
  background-position: -176px -33px !important;
}
/*L4*/
.hc_flag_eg .hc_icon {
  background-position: -192px -33px !important;
}
/*M4*/
.hc_flag_eh .hc_icon {
  background-position: -208px -33px !important;
}
/*N4*/
/* O4 NOT USED? (England) */
.hc_flag_er .hc_icon {
  background-position: -240px -33px !important;
}
/*P4*/
.hc_flag_es .hc_icon {
  background-position: 0 -44px !important;
}
/*A5*/
.hc_flag_et .hc_icon {
  background-position: -16px -44px !important;
}
/*B5*/
.hc_flag_eu .hc_icon {
  background-position: -32px -44px !important;
}
/*C5*/
.hc_flag_fi .hc_icon {
  background-position: -48px -44px !important;
}
/*D5*/
.hc_flag_fj .hc_icon {
  background-position: -64px -44px !important;
}
/*E5*/
.hc_flag_fk .hc_icon {
  background-position: -80px -44px !important;
}
/*F5*/
.hc_flag_fm .hc_icon {
  background-position: -96px -44px !important;
}
/*G5*/
.hc_flag_fo .hc_icon {
  background-position: -112px -44px !important;
}
/*H5*/
.hc_flag_fr .hc_icon {
  background-position: -128px -44px !important;
}
/*I5*/
.hc_flag_ga .hc_icon {
  background-position: -144px -44px !important;
}
/*J5*/
.hc_flag_gb .hc_icon {
  background-position: -160px -44px !important;
}
/*K5*/
.hc_flag_gd .hc_icon {
  background-position: -176px -44px !important;
}
/*L5*/
.hc_flag_ge .hc_icon {
  background-position: -192px -44px !important;
}
/*M5*/
.hc_flag_gf .hc_icon {
  background-position: -208px -44px !important;
}
/*N5*/
.hc_flag_gh .hc_icon {
  background-position: -224px -44px !important;
}
/*O5*/
.hc_flag_gi .hc_icon {
  background-position: -240px -44px !important;
}
/*P5*/
.hc_flag_gl .hc_icon {
  background-position: 0 -55px !important;
}
/*A6*/
.hc_flag_gm .hc_icon {
  background-position: -16px -55px !important;
}
/*B6*/
.hc_flag_gn .hc_icon {
  background-position: -32px -55px !important;
}
/*C6*/
.hc_flag_gp .hc_icon {
  background-position: -48px -55px !important;
}
/*D6*/
.hc_flag_gq .hc_icon {
  background-position: -64px -55px !important;
}
/*E6*/
.hc_flag_gr .hc_icon {
  background-position: -80px -55px !important;
}
/*F6*/
.hc_flag_gs .hc_icon {
  background-position: -96px -55px !important;
}
/*G6*/
.hc_flag_gt .hc_icon {
  background-position: -112px -55px !important;
}
/*H6*/
.hc_flag_gu .hc_icon {
  background-position: -128px -55px !important;
}
/*I6*/
.hc_flag_gw .hc_icon {
  background-position: -144px -55px !important;
}
/*J6*/
.hc_flag_gy .hc_icon {
  background-position: -160px -55px !important;
}
/*K6*/
.hc_flag_hk .hc_icon {
  background-position: -176px -55px !important;
}
/*L6*/
.hc_flag_hm .hc_icon {
  background-position: -192px -55px !important;
}
/*M6*/
.hc_flag_hn .hc_icon {
  background-position: -208px -55px !important;
}
/*N6*/
.hc_flag_hr .hc_icon {
  background-position: -224px -55px !important;
}
/*O6*/
.hc_flag_ht .hc_icon {
  background-position: -240px -55px !important;
}
/*P6*/
.hc_flag_hu .hc_icon {
  background-position: 0 -66px !important;
}
/*A7*/
.hc_flag_id .hc_icon {
  background-position: -16px -66px !important;
}
/*B7*/
.hc_flag_ie .hc_icon {
  background-position: -32px -66px !important;
}
/*C7*/
.hc_flag_il .hc_icon {
  background-position: -48px -66px !important;
}
/*D7*/
.hc_flag_in .hc_icon {
  background-position: -64px -66px !important;
}
/*E7*/
.hc_flag_io .hc_icon {
  background-position: -80px -66px !important;
}
/*F7*/
.hc_flag_iq .hc_icon {
  background-position: -96px -66px !important;
}
/*G7*/
.hc_flag_ir .hc_icon {
  background-position: -112px -66px !important;
}
/*H7*/
.hc_flag_is .hc_icon {
  background-position: -128px -66px !important;
}
/*I7*/
.hc_flag_it .hc_icon {
  background-position: -144px -66px !important;
}
/*J7*/
.hc_flag_jm .hc_icon {
  background-position: -160px -66px !important;
}
/*K7*/
.hc_flag_jo .hc_icon {
  background-position: -176px -66px !important;
}
/*L7*/
.hc_flag_jp .hc_icon {
  background-position: -192px -66px !important;
}
/*M7*/
.hc_flag_ke .hc_icon {
  background-position: -208px -66px !important;
}
/*N7*/
.hc_flag_kg .hc_icon {
  background-position: -224px -66px !important;
}
/*O7*/
.hc_flag_kh .hc_icon {
  background-position: -240px -66px !important;
}
/*P7*/
.hc_flag_ki .hc_icon {
  background-position: 0 -77px !important;
}
/*A8*/
.hc_flag_km .hc_icon {
  background-position: -16px -77px !important;
}
/*B8*/
.hc_flag_kn .hc_icon {
  background-position: -32px -77px !important;
}
/*C8*/
.hc_flag_kp .hc_icon {
  background-position: -48px -77px !important;
}
/*D8*/
.hc_flag_kr .hc_icon {
  background-position: -64px -77px !important;
}
/*E8*/
.hc_flag_kw .hc_icon {
  background-position: -80px -77px !important;
}
/*F8*/
.hc_flag_ky .hc_icon {
  background-position: -96px -77px !important;
}
/*G8*/
.hc_flag_kz .hc_icon {
  background-position: -112px -77px !important;
}
/*H8*/
.hc_flag_la .hc_icon {
  background-position: -128px -77px !important;
}
/*I8*/
.hc_flag_lb .hc_icon {
  background-position: -144px -77px !important;
}
/*J8*/
.hc_flag_lc .hc_icon {
  background-position: -160px -77px !important;
}
/*K8*/
.hc_flag_li .hc_icon {
  background-position: -176px -77px !important;
}
/*L8*/
.hc_flag_lk .hc_icon {
  background-position: -192px -77px !important;
}
/*M8*/
.hc_flag_lr .hc_icon {
  background-position: -208px -77px !important;
}
/*N8*/
.hc_flag_ls .hc_icon {
  background-position: -224px -77px !important;
}
/*O8*/
.hc_flag_lt .hc_icon {
  background-position: -240px -77px !important;
}
/*P8*/
.hc_flag_lu .hc_icon {
  background-position: 0 -88px !important;
}
/*A9*/
.hc_flag_lv .hc_icon {
  background-position: -16px -88px !important;
}
/*B9*/
.hc_flag_ly .hc_icon {
  background-position: -32px -88px !important;
}
/*C9*/
.hc_flag_ma .hc_icon {
  background-position: -48px -88px !important;
}
/*D9*/
.hc_flag_mc .hc_icon {
  background-position: -64px -88px !important;
}
/*E9*/
.hc_flag_md .hc_icon {
  background-position: -80px -88px !important;
}
/*F9*/
.hc_flag_me .hc_icon {
  background-position: -96px -88px !important;
}
/*G9*/
.hc_flag_mg .hc_icon {
  background-position: -112px -88px !important;
}
/*H9*/
.hc_flag_mh .hc_icon {
  background-position: -128px -88px !important;
}
/*I9*/
.hc_flag_mk .hc_icon {
  background-position: -144px -88px !important;
}
/*J9*/
.hc_flag_ml .hc_icon {
  background-position: -160px -88px !important;
}
/*K9*/
.hc_flag_mm .hc_icon {
  background-position: -176px -88px !important;
}
/*L9*/
.hc_flag_mn .hc_icon {
  background-position: -192px -88px !important;
}
/*M9*/
.hc_flag_mo .hc_icon {
  background-position: -208px -88px !important;
}
/*N9*/
.hc_flag_mp .hc_icon {
  background-position: -224px -88px !important;
}
/*O9*/
.hc_flag_mq .hc_icon {
  background-position: -240px -88px !important;
}
/*P9*/
.hc_flag_mr .hc_icon {
  background-position: 0 -99px !important;
}
/*A10*/
.hc_flag_ms .hc_icon {
  background-position: -16px -99px !important;
}
/*B10*/
.hc_flag_mt .hc_icon {
  background-position: -32px -99px !important;
}
/*C10*/
.hc_flag_mu .hc_icon {
  background-position: -48px -99px !important;
}
/*D10*/
.hc_flag_mv .hc_icon {
  background-position: -64px -99px !important;
}
/*E10*/
.hc_flag_mw .hc_icon {
  background-position: -80px -99px !important;
}
/*F10*/
.hc_flag_mx .hc_icon {
  background-position: -96px -99px !important;
}
/*G10*/
.hc_flag_my .hc_icon {
  background-position: -112px -99px !important;
}
/*H10*/
.hc_flag_mz .hc_icon {
  background-position: -128px -99px !important;
}
/*I10*/
.hc_flag_na .hc_icon {
  background-position: -144px -99px !important;
}
/*J10*/
.hc_flag_nc .hc_icon {
  background-position: -160px -99px !important;
}
/*K10*/
.hc_flag_ne .hc_icon {
  background-position: -176px -99px !important;
}
/*L10*/
.hc_flag_nf .hc_icon {
  background-position: -192px -99px !important;
}
/*M10*/
.hc_flag_ng .hc_icon {
  background-position: -208px -99px !important;
}
/*N10*/
.hc_flag_ni .hc_icon {
  background-position: -224px -99px !important;
}
/*O10*/
.hc_flag_nl .hc_icon {
  background-position: -240px -99px !important;
}
/*P10*/
.hc_flag_no .hc_icon {
  background-position: 0 -110px !important;
}
/*A11*/
.hc_flag_np .hc_icon {
  background-position: -16px -110px !important;
}
/*B11*/
.hc_flag_nr .hc_icon {
  background-position: -32px -110px !important;
}
/*C11*/
.hc_flag_nu .hc_icon {
  background-position: -48px -110px !important;
}
/*D11*/
.hc_flag_nz .hc_icon {
  background-position: -64px -110px !important;
}
/*E11*/
.hc_flag_om .hc_icon {
  background-position: -80px -110px !important;
}
/*F11*/
.hc_flag_pa .hc_icon {
  background-position: -96px -110px !important;
}
/*G11*/
.hc_flag_pe .hc_icon {
  background-position: -112px -110px !important;
}
/*H11*/
.hc_flag_pf .hc_icon {
  background-position: -128px -110px !important;
}
/*I11*/
.hc_flag_pg .hc_icon {
  background-position: -144px -110px !important;
}
/*J11*/
.hc_flag_ph .hc_icon {
  background-position: -160px -110px !important;
}
/*K11*/
.hc_flag_pk .hc_icon {
  background-position: -176px -110px !important;
}
/*L11*/
.hc_flag_pl .hc_icon {
  background-position: -192px -110px !important;
}
/*M11*/
.hc_flag_pm .hc_icon {
  background-position: -208px -110px !important;
}
/*N11*/
.hc_flag_pn .hc_icon {
  background-position: -224px -110px !important;
}
/*O11*/
.hc_flag_pr .hc_icon {
  background-position: -240px -110px !important;
}
/*P11*/
.hc_flag_ps .hc_icon {
  background-position: 0 -121px !important;
}
/*A12*/
.hc_flag_pt .hc_icon {
  background-position: -16px -121px !important;
}
/*B12*/
.hc_flag_pw .hc_icon {
  background-position: -32px -121px !important;
}
/*C12*/
.hc_flag_py .hc_icon {
  background-position: -48px -121px !important;
}
/*D12*/
.hc_flag_qa .hc_icon {
  background-position: -64px -121px !important;
}
/*E12*/
.hc_flag_re .hc_icon {
  background-position: -80px -121px !important;
}
/*F12*/
.hc_flag_ro .hc_icon {
  background-position: -96px -121px !important;
}
/*G12*/
.hc_flag_rs .hc_icon {
  background-position: -112px -121px !important;
}
/*H12*/
.hc_flag_ru .hc_icon {
  background-position: -128px -121px !important;
}
/*I12*/
.hc_flag_rw .hc_icon {
  background-position: -144px -121px !important;
}
/*J12*/
.hc_flag_sa .hc_icon {
  background-position: -160px -121px !important;
}
/*K12*/
.hc_flag_sb .hc_icon {
  background-position: -176px -121px !important;
}
/*L12*/
.hc_flag_sc .hc_icon {
  background-position: -192px -121px !important;
}
/*M12*/
/* N12 NOT USED? (Scotland) */
.hc_flag_sd .hc_icon {
  background-position: -224px -121px !important;
}
/*O12*/
.hc_flag_se .hc_icon {
  background-position: -240px -121px !important;
}
/*P12*/
.hc_flag_sg .hc_icon {
  background-position: 0 -132px !important;
}
/*A13*/
.hc_flag_sh .hc_icon {
  background-position: -16px -132px !important;
}
/*B13*/
.hc_flag_si .hc_icon {
  background-position: -32px -132px !important;
}
/*C13*/
.hc_flag_sk .hc_icon {
  background-position: -48px -132px !important;
}
/*D13*/
.hc_flag_sl .hc_icon {
  background-position: -64px -132px !important;
}
/*E13*/
.hc_flag_sm .hc_icon {
  background-position: -80px -132px !important;
}
/*F13*/
.hc_flag_sn .hc_icon {
  background-position: -96px -132px !important;
}
/*G13*/
.hc_flag_so .hc_icon {
  background-position: -112px -132px !important;
}
/*H13*/
.hc_flag_sr .hc_icon {
  background-position: -128px -132px !important;
}
/*I13*/
.hc_flag_st .hc_icon {
  background-position: -144px -132px !important;
}
/*J13*/
.hc_flag_sv .hc_icon {
  background-position: -160px -132px !important;
}
/*K13*/
.hc_flag_sy .hc_icon {
  background-position: -176px -132px !important;
}
/*L13*/
.hc_flag_sz .hc_icon {
  background-position: -192px -132px !important;
}
/*M13*/
.hc_flag_tc .hc_icon {
  background-position: -208px -132px !important;
}
/*N13*/
.hc_flag_td .hc_icon {
  background-position: -224px -132px !important;
}
/*O13*/
.hc_flag_tf .hc_icon {
  background-position: -240px -132px !important;
}
/*P13*/
.hc_flag_tg .hc_icon {
  background-position: 0 -143px !important;
}
/*A14*/
.hc_flag_th .hc_icon {
  background-position: -16px -143px !important;
}
/*B14*/
.hc_flag_tj .hc_icon {
  background-position: -32px -143px !important;
}
/*C14*/
.hc_flag_tk .hc_icon {
  background-position: -48px -143px !important;
}
/*D14*/
.hc_flag_tl .hc_icon {
  background-position: -64px -143px !important;
}
/*E14*/
.hc_flag_tm .hc_icon {
  background-position: -80px -143px !important;
}
/*F14*/
.hc_flag_tn .hc_icon {
  background-position: -96px -143px !important;
}
/*G14*/
.hc_flag_to .hc_icon {
  background-position: -112px -143px !important;
}
/*H14*/
.hc_flag_tr .hc_icon {
  background-position: -128px -143px !important;
}
/*I14*/
.hc_flag_tt .hc_icon {
  background-position: -144px -143px !important;
}
/*J14*/
.hc_flag_tv .hc_icon {
  background-position: -160px -143px !important;
}
/*K14*/
.hc_flag_tw .hc_icon {
  background-position: -176px -143px !important;
}
/*L14*/
.hc_flag_tz .hc_icon {
  background-position: -192px -143px !important;
}
/*M14*/
.hc_flag_ua .hc_icon {
  background-position: -208px -143px !important;
}
/*N14*/
.hc_flag_ug .hc_icon {
  background-position: -224px -143px !important;
}
/*O14*/
.hc_flag_um .hc_icon {
  background-position: -240px -143px !important;
}
/*P14*/
.hc_flag_us .hc_icon {
  background-position: 0 -154px !important;
}
/*A15*/
.hc_flag_uy .hc_icon {
  background-position: -16px -154px !important;
}
/*B15*/
.hc_flag_uz .hc_icon {
  background-position: -32px -154px !important;
}
/*C15*/
.hc_flag_va .hc_icon {
  background-position: -48px -154px !important;
}
/*D15*/
.hc_flag_vc .hc_icon {
  background-position: -64px -154px !important;
}
/*E15*/
.hc_flag_ve .hc_icon {
  background-position: -80px -154px !important;
}
/*F15*/
.hc_flag_vg .hc_icon {
  background-position: -96px -154px !important;
}
/*G15*/
.hc_flag_vi .hc_icon {
  background-position: -112px -154px !important;
}
/*H15*/
.hc_flag_vn .hc_icon {
  background-position: -128px -154px !important;
}
/*I15*/
.hc_flag_vu .hc_icon {
  background-position: -144px -154px !important;
}
/*J15*/
/* K15 NOT USED? (Wales) */
.hc_flag_wf .hc_icon {
  background-position: -176px -154px !important;
}
/*L15*/
.hc_flag_ws .hc_icon {
  background-position: -192px -154px !important;
}
/*M15*/
.hc_flag_ye .hc_icon {
  background-position: -208px -154px !important;
}
/*N15*/
.hc_flag_yt .hc_icon {
  background-position: -224px -154px !important;
}
/*O15*/
.hc_flag_za .hc_icon {
  background-position: -240px -154px !important;
}
/*P15*/
.hc_flag_zm .hc_icon {
  background-position: 0 -165px !important;
}
/*A16*/
.hc_flag_zw .hc_icon {
  background-position: -16px -165px !important;
}
/*B16*/
/* end HC Flags */
/* HC Mobile redirect */
#hc_mobileRedirect {
  display: block;
  text-align: center;
}
.hc_rtl #hc_mobileRedirect {
  direction: rtl;
}
.hc_f_btn_ViewMobile {
  font-size: 40px;
  line-height: 36px;
  margin: 10px 0;
  display: inline-block;
  width: auto;
}
#hc_mobileRedirect .hc_mobileRedirect_noThanksLink {
  font-size: 40px;
  line-height: 36px;
  padding: 15px;
  display: inline-block;
  text-align: center;
  margin: 0 0 20px;
}
/* end HC Mobile redirect */
/* City Landing banner */
#hc_banner {
  margin-bottom: 10px;
}
#hc_banner .hc_m_hd {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  z-index: 2;
  background: transparent;
  width: 100%;
  border: none;
}
.hc_rtl #hc_banner .hc_m_hd {
  left: auto;
  right: 0;
}
#hc_banner.hc_noImg .hc_m_hd {
  position: relative;
  bottom: auto;
  left: auto;
  border-bottom: 1px solid #0084C1;
}
.hc_rtl #hc_banner.hc_noImg .hc_m_hd {
  right: auto;
  left: auto;
}
#hc_banner .hc_m_hd h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 3em;
  color: #fff;
  line-height: 0.9em;
  text-shadow: 0 0 3px #000;
  filter: glow(color=black, strength=1), alpha(opacity=100);
  text-align: right;
  padding: 20px;
}
.hc_rtl #hc_banner .hc_m_hd h2 {
  text-align: left;
}
.hc_lang_th #hc_banner .hc_m_hd h2 {
  font-weight: normal;
}
#hc_banner.hc_noImg .hc_m_hd h2 {
  text-shadow: none;
  filter: none;
  color: #669900;
  padding-bottom: 10px;
  font-size: 2.4em;
}
#hc_banner .hc_m_hd h2 span {
  display: inline-block;
  font-size: 0.7em;
  margin-right: 7px;
  line-height: normal;
}
.hc_rtl #hc_banner .hc_m_hd h2 span {
  margin-right: 0;
  margin-left: 7px;
}
.hc_lang_he #hc_banner .hc_m_hd h2 span {
  margin-left: 0px;
}
#hc_banner .hc_m_outer {
  height: 218px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
#hc_banner.hc_noImg .hc_m_outer {
  height: auto;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  background: none!important;
}
#hc_banner .hc_m_content {
  display: none;
}
/* end City landing banner */
/* Price strings */
span.hc_pr_from,
span.hc_pr_reduced,
span.hc_pr_cur,
span.hc_pr_syb {
  display: inline-block;
}
span.hc_pr_from,
span.hc_pr_reduced,
span.hc_pr_cur,
span.hc_pr_syb {
  position: relative;
  display: inline;
  background: none;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  height: auto;
  width: auto;
  font-size: 0.85em;
}
.hc_rtl span.hc_pr_from,
.hc_rtl span.hc_pr_reduced,
.hc_rtl span.hc_pr_cur,
.hc_rtl span.hc_pr_syb {
  position: relative!important;
  left: 0px!important;
}
.hc_rtl span.hc_pr_from {
  padding-left: 5px;
}
.hc_page_landing span.hc_pr_from {
  font-size: 1em;
}
span.hc_pr_conv {
  display: block;
  padding-top: 3px;
  font-size: 0.7em;
  font-weight: normal;
  white-space: nowrap;
}
/* end price strings */
/* entity lists */
.hc_e_list_v1 {
  display: block;
  margin: 0;
  padding: 0;
  border: 1px solid #fff;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_rtl .hc_e_list_v1 {
  margin: 0;
  padding: 0;
}
.hc_e_list_v1 li {
  padding: 0 1px;
  margin: 0 -1px;
  list-style: none;
  border-top: 1px solid #CCCCCC;
}
.hc_rtl .hc_e_list_v1 li {
  padding: 0 1px;
  margin: 0 -1px;
}
.hc_e_list_v1 li:first-child {
  border-top: none;
  -moz-border-top-left-radius: 2px;
  -webkit-border-top-left-radius: 2px;
  border-top-left-radius: 2px;
  -moz-border-top-right-radius: 2px;
  -webkit-border-top-right-radius: 2px;
  border-top-right-radius: 2px;
}
.hc_e_list_v1 li a,
.hc_e_list_v1 li a:focus {
  display: block;
  padding: 10px;
  color: #669900;
  text-decoration: none;
}
.hc_e_list_v1 li a:hover,
.hc_e_list_v1 li a:focus {
  color: #669900;
  background: #f4f4f4;
}
.hc_d_tablet .hc_e_list_v1 li a:hover,
.hc_d_tablet .hc_e_list_v1 li a:focus {
  background: none;
}
.hc_e_list_v1 li a:active {
  color: #333;
}
.hc_d_tablet .hc_e_list_v1 li a:active {
  background: #f4f4f4;
}
.hc_e_list_v1 .hc_f_t_btn a {
  font-size: 1em;
}
/* end entity lists */
/* landing page ads */
/* entities */
.hc_e_spinner {
  display: block;
  position: relative;
  min-height: 20px;
  min-width: 20px;
  height: 100%;
}
.hc_e_spinner img {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  margin-top: -8px;
  margin-left: -7px;
}
/* powered by logo placment */
.hc_e_poweredBy {
  display: block;
  float: right;
  padding: 10px;
}
.hc_rtl .hc_e_poweredBy {
  float: left;
}
/* from hc_common_popovers.less */
#filterDiv {
  display: none;
  position: absolute;
  z-index: 999;
  width: 540px;
  height: 130px;
  background-color: #f4f4f4;
  border: solid 1px #0084C1;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.hc_rtl #filterDiv {
  text-align: right;
  direction: rtl;
}
.hc_lang_fr #filterDiv {
  text-align: center;
}
#filterText {
  position: absolute;
  font-size: 28px;
  color: #669900;
  padding: 0 20px;
}
#PopupTransparent {
  width: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 800;
  background-color: #333;
  -moz-opacity: 0.7;
  -khtml-opacity: 0.7;
  -webkit-opacity: 0.7;
  opacity: 0.7;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);
  filter: alpha(opacity=70);
}
/* end: from hc_common_popovers.less */
/* large popup image (hovering over thumbnails) - e.g. viewed hotels, popular hotels, etc. */
#hc_htl_thumbs_lrg {
  z-index: 999;
  position: absolute;
  display: none;
  width: auto;
  height: auto;
  border: 1px solid #fff;
  color: #fff;
  font-size: 0.9em;
  font-weight: bold;
}
#hc_htl_thumbs_lrg img {
  display: block;
  max-height: 300px;
  max-width: 480px;
}
#hc_htl_thumbs_lrg .hc_mobile_open {
  position: absolute;
  top: auto!important;
  left: auto!important;
  right: 0;
  bottom: 0;
}
#hc_htl_thumbs_lrg .hc_mobile_close {
  width: 22px;
  height: 22px;
  background: #666;
  -moz-opacity: 0.8;
  -khtml-opacity: 0.8;
  -webkit-opacity: 0.8;
  opacity: 0.8;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=80);
  filter: alpha(opacity=80);
  overflow: visible;
  -moz-border-radius: 22px;
  -webkit-border-radius: 22px;
  border-radius: 22px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10000;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: block;
  overflow: hidden;
}
.hc_rtl #hc_htl_thumbs_lrg .hc_mobile_close {
  right: auto;
  left: 5px;
}
#hc_htl_thumbs_lrg .hc_mobile_close .hc_icon {
  position: absolute;
  top: 2px;
  left: 1px;
  text-align: center;
}
/* end: large popup image (hovering over thumbnails) */
.hc-extrainfomessage {
  display: none;
  position: relative;
  margin: 0 0 10px;
  padding: 0 0 0 20px;
  color: #333333;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
}
.hc_rtl .hc-extrainfomessage {
  text-align: right;
  direction: rtl;
  padding-left: 0px;
  padding-right: 20px;
}
.hc-extrainfomessage:before {
  display: inline-block;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 2px;
  left: 0;
  font-family: "icons";
  content: '\e93c';
  font-size: 14px;
  line-height: 14px;
}
.hc_rtl .hc-extrainfomessage:before {
  left: auto;
  right: 0;
}
/* Default hc_icon style */
.hc_icon {
  display: inline-block;
}
.hc_icon {
  position: relative;
  display: block;
  font-family: "icons";
  font-weight: normal;
  font-size: 1.2em;
}
em .hc_icon {
  font-style: normal!important;
}
/* In case hc_icon is a link */
a.hc_icon {
  cursor: pointer;
  text-decoration: none;
}
a.hc_icon:hover {
  text-decoration: none;
}
/* Set icon :before which holds the character string or background */
.hc_icon:before {
  display: block;
  position: relative;
  text-align: center;
  vertical-align: bottom;
  width: 100%;
  height: 100%;
  line-height: 1em;
  content: "";
}
/* ----------------------------------------- SHARED ICONS -----------------------------------------*/
/* Font icons */
.hc_icon.hc_t_mail3:before,
.hc_t_mail3 .hc_icon:before {
  content: "\e808";
  font-family: "icons";
}
.hc_icon.hc_t_cancel:before,
.hc_t_cancel .hc_icon:before {
  font-family: icons;
  content: "\e800";
  font-size: 15px;
  margin-top: -0.45em;
}
.hc_icon.hc_t_mail:before,
.hc_t_mail .hc_icon:before {
  content: "\e808";
}
.hc_icon.hc_t_close:before,
.hc_t_close .hc_icon:before {
  font-family: icons;
  content: "\e800";
}
.hc_icon.hc_t_remove:before,
.hc_t_remove .hc_icon:before {
  font-family: icons;
  content: "\e800";
}
.hc_icon.hc_t_remove_v2:before,
.hc_t_remove_v2 .hc_icon:before {
  font-family: icons;
  content: "\e800";
}
.hc_icon.hc_t_cities:before,
.hc_t_cities .hc_icon:before {
  content: '\e953';
}
.hc_icon.hc_t_countries:before,
.hc_t_countries .hc_icon:before {
  content: '\e96a';
}
.hc_icon.hc_t_airports:before,
.hc_t_airports .hc_icon:before {
  content: "\e976";
}
.hc_icon.hc_t_regions:before,
.hc_t_regions .hc_icon:before {
  content: '\e92e';
}
.hc_icon.hc_t_towns:before,
.hc_t_towns .hc_icon:before {
  content: '\e965';
}
.hc_icon.hc_t_districts:before,
.hc_t_districts .hc_icon:before {
  content: '\e97c';
}
.hc_icon.hc_t_landmarks:before,
.hc_t_landmarks .hc_icon:before {
  content: "\e827";
  line-height: 1.1em;
}
.hc_icon.hc_t_touristregions:before,
.hc_t_touristregions .hc_icon:before {
  content: '\e927';
}
.hc_icon.hc_t_hotels:before,
.hc_t_hotels .hc_icon:before {
  content: '\e958';
}
.hc_icon.hc_t_placesin:before,
.hc_t_placesin .hc_icon:before {
  content: "\e803";
  line-height: 1.1em;
}
.hc_icon.hc_t_placesnear:before,
.hc_t_placesnear .hc_icon:before {
  content: "\e803";
  line-height: 1.2em;
}
/* accordion arrows - version 1 */
.hc_icon.hc_t_accordion:before,
.hc_t_accordion .hc_icon:before {
  content: "\e980";
  color: #333333;
  font-size: 16px;
  left: 3px;
  line-height: 0.5em;
}
.hc_m_hide .hc_icon.hc_t_accordion:before,
.hc_m_hide .hc_t_accordion .hc_icon:before {
  content: "\e962";
  padding-top: 4px;
}
/* accordion arrows - version 3 */
.hc_icon.hc_t_accordion_v3:before,
.hc_t_accordion_v3 .hc_icon:before {
  content: "\e962";
}
.hc_active .hc_icon.hc_t_accordion_v3:before,
.hc_active .hc_t_accordion_v3 .hc_icon:before,
.hc_active.hc_t_accordion_v3 .hc_icon:before {
  content: "\e980";
}
/* miscellaneous arrows */
.hc_icon.hc_t_arrow_v2_right:before,
.hc_t_arrow_v2_right .hc_icon:before {
  content: "\e921";
  font-family: icons;
}
.hc_rtl .hc_icon.hc_t_arrow_v2_right:before,
.hc_rtl .hc_t_arrow_v2_right .hc_icon:before {
  content: "\e922";
}
/* app icons */
.hc_icon.hc_t_apple2:before,
.hc_t_apple2 .hc_icon:before {
  content: "\e961";
}
.hc_icon.hc_t_android2:before,
.hc_t_android2 .hc_icon:before {
  content: "\e95f";
}
/* Ticks */
.hc_icon.hc_t_tick:before,
.hc_t_tick .hc_icon:before {
  content: "\e985";
  font-family: icons;
}
.hc_icon.hc_t_tick_v2:before,
.hc_t_tick_v2 .hc_icon:before {
  content: "\e807";
}
/* spinners */
.hc_icon.hc_t_spinner {
  position: relative;
}
.hc_icon.hc_t_spinner:before,
.hc_t_spinner .hc_icon:before {
  /* for all newer browsers, use animated font icon */
  content: "\e96d";
  -webkit-animation: 1.2s linear 0s normal none infinite hc_animation_spin360;
  -moz-animation: 1.2s linear 0s normal none infinite hc_animation_spin360;
  -o-animation: 1.2s linear 0s normal none infinite hc_animation_spin360;
  animation: 1.2s linear 0s normal none infinite hc_animation_spin360;
  transform-origin: 50% 65%;
  /* for ie < 10 use animated gif on default background */
  hack: 1 ; background\9: #fff url(https://cdn.datahc.com/Images/waiting.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat center center;
  hack: 1 ; content\9: '';
  hack: 1 ; animation\9: none;
  hack: 1 ; transform-origin\9: inherit;
  hack: 1 ; width\9: 16px;
  hack: 1 ; height\9: 16px;
  hack: 1 ; padding\9: 5px;
  hack: 1 ; border-radius\9: 3px;
}
/* hc_animation_spin360 */
@-webkit-keyframes hc_animation_spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-moz-keyframes hc_animation_spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes hc_animation_spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes hc_animation_spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* end hc_animation_spin360 */
/* best price guarantee modal */
.hc_bpg.hc_m_po {
  text-align: center;
  background: #0084C1;
  padding: 20px;
  width: 460px;
  display: none;
  -moz-box-shadow: 0 5px 18px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0 5px 18px rgba(0, 0, 0, 0.75);
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.75);
  z-index: 999;
  top: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}
.hc_bpg .hc_m_close {
  top: 16px;
  right: 8px;
  color: #FFFFFF;
}
.hc_rtl .hc_bpg .hc_m_close {
  right: auto;
  left: 8px;
}
.hc_bpg .hc_m_close:hover {
  color: #B80000;
}
.hc_bpg.hc_m_po .b1h,
.hc_bpg.hc_m_po .b2h,
.hc_bpg.hc_m_po .b3h,
.hc_bpg.hc_m_po .b4h,
.hc_bpg.hc_m_po .b2bh,
.hc_bpg.hc_m_po .b3bh,
.hc_bpg.hc_m_po .b4bh,
.hc_bpg.hc_m_po .hc_m_arrow_top {
  display: none;
}
.hc_bpg.hc_m_po .hc_m_outer {
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  background: none;
}
.hc_bpg.hc_m_po .hc_m_hd {
  padding-left: 0;
  padding-right: 0;
  background: none;
}
.hc_bpg.hc_m_po .hc_m_content {
  padding: 0 20px;
  background: #fff;
}
.hc_bpg h2,
.hc_bpg h3 {
  font-weight: bold;
}
.hc_bpg h2 {
  font-size: 2.2em !important;
  padding: 0!important;
}
.hc_rtl .hc_bpg h2 {
  text-align: right;
}
.hc_bpg h3 {
  font-size: 1.7em;
  line-height: 30px;
  padding: 0;
}
.hc_bpg p {
  font-size: 1.7em;
  line-height: 30px;
  padding: 0;
}
.hc_bpg a {
  text-decoration: none;
}
.hc_bpg ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hc_bpg li {
  padding: 20px 10px;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.hc_rtl .hc_bpg li {
  margin-right: 0;
}
.hc_bpg li:last-child {
  border-bottom: 0;
}
.hc_bpg p.hc_bpg_terms {
  font-size: 1.3em;
  line-height: 20px;
  padding-top: 20px;
}
/* Header */
.hc_r_hdWrap {
  display: inline-block;
}
.hc_r_hdWrap {
  background: #0084C1;
  display: block;
  text-align: center;
}
.hc_page_home .hc_r_hdWrap {
  margin-bottom: 20px;
}
#hc_r_hd {
  display: block;
  padding: 0 10px 15px;
  min-width: 980px;
  width: auto!important;
  width: 980px;
  *width: 972px;
  max-width: 1120px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  background: #0084C1;
  color: #FFF200;
  text-align: left;
  min-height: 75px;
  height: auto!important;
}
.hc_rtl #hc_r_hd {
  text-align: right;
}
.hc_page_fullStatic #hc_r_hd {
  min-width: 760px;
  width: auto!important;
  width: 760px;
  *width: 992px;
  max-width: 1210px;
  hack: 1 ; max-widt\h: 1190px;
  margin: 0 auto;
  text-align: left;
}
.hc_rtl.hc_page_fullStatic #hc_r_hd {
  text-align: right;
}
#hc_r_hd a {
  color: #FFF200;
}
#hc_r_hd a:hover {
  color: #FFF200;
}
#hc_r_hd a:active {
  color: #FFF200;
}
#hc_r_hd a:visited {
  color: #FFF200;
}
#hc_r_hd .hc_r_clear {
  clear: both;
}
/* HC Logo */
#hc_r_hd a.hc_logo {
  position: relative;
  display: block;
  *display: inline;
  padding: 0;
  margin: 0 0 0 20px;
  float: left;
  top: 12px;
  text-decoration: none;
}
.hc_rtl #hc_r_hd a.hc_logo {
  float: right;
  margin-left: 0;
  margin-right: 20px;
}
/* HC settings */
.hc_r_config {
  display: inline-block;
}
.hc_r_config {
  display: block;
  position: relative;
  z-index: 990;
  overflow: hidden;
  float: right;
}
.hc_rtl .hc_r_config {
  float: left;
  text-align: left;
}
.hc_b_simple .hc_r_config {
  position: absolute;
  margin-top: 5px;
  top: 50%;
  right: 0;
  text-align: left;
  float: none;
}
.hc_rtl.hc_b_simple .hc_r_config {
  right: auto;
  left: 0;
  float: none;
}
.hc_r_config ul,
.hc_r_config ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hc_r_config ul {
  width: 100%;
  overflow: hidden;
  margin: 10px 10px 0 0;
}
.hc_rtl .hc_r_config ul {
  margin-right: 0;
  margin-left: 10px;
}
.hc_b_simple .hc_r_config ul {
  margin-top: 0;
}
.hc_r_config ul li {
  display: block;
  float: left;
}
.hc_rtl .hc_r_config ul li {
  float: right;
}
.hc_r_config ul li:nth-child(2) {
  border-left: 1px solid transparent;
}
.hc_rtl .hc_r_config ul li:nth-child(2) {
  border-left: 0;
  border-right: 1px solid transparent;
}
.hc_r_config ul li a {
  display: inline-block;
}
.hc_r_config ul li a {
  padding: 0 20px;
  display: block;
  line-height: 40px;
  vertical-align: middle;
  text-decoration: none;
  background: #0084C1;
  color: #FFF200;
}
.hc_b_simple .hc_r_config ul li a {
  background: rgba(255, 255, 255, 0.1);
}
.hc_r_config ul li a :hover {
  color: #FFF200;
}
.hc_r_config ul li a:active {
  color: #FFF200;
}
.hc_r_config ul li a:visited {
  color: #FFF200;
}
.hc_b_simple .hc_r_config ul li a:hover {
  background: rgba(255, 255, 255, 0.2);
}
.hc_r_config .hc_config_nav_lang .hc_t_flag {
  display: inline-block;
  position: relative;
  top: 1px;
  width: 16px;
  height: 11px;
  background-image: url(https://cdn.datahc.com/Images/hc_flags.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
  background-repeat: no-repeat;
  margin: 0;
}
.hc_rtl .hc_r_config .hc_config_nav_lang .hc_t_flag {
  margin: 0;
}
.hc_r_config .hc_config_nav_lang.hc_flag_ch .hc_t_flag {
  width: 11px;
  margin-left: 5px;
}
.hc_m_po.hc_settings_po_cur,
.hc_m_po.hc_settings_po_lang {
  border: none;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  z-index: 999;
  width: 820px;
  top: -999em;
  left: -999em;
}
.hc_m_po.hc_settings_po_cur .hc_m_close,
.hc_m_po.hc_settings_po_lang .hc_m_close {
  top: 10px;
  right: 10px;
}
.hc_rtl .hc_m_po.hc_settings_po_cur .hc_m_close,
.hc_rtl .hc_m_po.hc_settings_po_lang .hc_m_close {
  right: auto;
  left: 10px;
}
.hc_m_po.hc_settings_po_cur .hc_m_arrow_top,
.hc_m_po.hc_settings_po_lang .hc_m_arrow_top {
  border-bottom-color: #CCCCCC;
}
.hc_b_simple .hc_m_po.hc_settings_po_cur .hc_m_arrow_top,
.hc_b_simple .hc_m_po.hc_settings_po_lang .hc_m_arrow_top {
  border-bottom-color: #fff;
}
.hc_m_po.hc_settings_po_cur .hc_m_arrow_top {
  left: auto;
}
.hc_rtl .hc_m_po.hc_settings_po_cur .hc_m_arrow_top {
  right: auto;
}
.hc_m_po.hc_settings_po_lang .hc_m_arrow_top {
  left: auto;
}
.hc_rtl .hc_m_po.hc_settings_po_lang .hc_m_arrow_top {
  right: auto;
}
.hc_m_po.hc_settings_po_cur .hc_m_hd,
.hc_m_po.hc_settings_po_lang .hc_m_hd {
  display: none;
}
.hc_m_po.hc_settings_po_cur .hc_m_outer,
.hc_m_po.hc_settings_po_lang .hc_m_outer {
  border: 1px solid #CCCCCC;
}
.hc_b_simple .hc_m_po.hc_settings_po_cur .hc_m_outer,
.hc_b_simple .hc_m_po.hc_settings_po_lang .hc_m_outer {
  -moz-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.25);
  border: 1px solid #CCCCCC;
  border-top: 0;
  border: 0 solid #ffffff;
}
.hc_m_po.hc_settings_po_cur .hc_m_content,
.hc_m_po.hc_settings_po_lang .hc_m_content {
  padding-left: 10px;
  padding-right: 10px;
}
.hc_rtl .hc_m_po.hc_settings_po_cur .hc_m_content,
.hc_rtl .hc_m_po.hc_settings_po_lang .hc_m_content {
  direction: rtl;
}
.hc_b_simple .hc_m_po.hc_settings_po_cur .hc_m_content,
.hc_b_simple .hc_m_po.hc_settings_po_lang .hc_m_content {
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
}
.hc_m_po.hc_settings_po_cur h2,
.hc_m_po.hc_settings_po_lang h2 {
  border-bottom: 1px solid #CCCCCC;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.hc_m_po.hc_settings_po_cur ul,
.hc_m_po.hc_settings_po_lang ul {
  margin: 0 2% 0 0;
  padding: 10px 0;
  list-style: none;
  display: inline-block;
  width: 23%;
  *float: left;
  vertical-align: top;
}
.hc_rtl .hc_m_po.hc_settings_po_cur ul,
.hc_rtl .hc_m_po.hc_settings_po_lang ul {
  margin-right: 0;
  margin-left: 2%;
  *float: right;
}
.hc_m_po.hc_settings_po_cur li,
.hc_m_po.hc_settings_po_lang li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
}
.hc_m_po.hc_settings_po_cur li {
  *margin-bottom: -16px;
}
.hc_m_po.hc_settings_po_cur li a {
  color: #333333;
  font-weight: bold;
  text-decoration: none;
  display: block;
  padding: 10px;
  overflow: hidden;
}
.hc_m_po.hc_settings_po_cur li.hc_selected a {
  background: #f4f4f4;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_m_po.hc_settings_po_cur li a span {
  color: #669900;
  font-weight: normal;
  display: inline;
  text-decoration: underline;
  position: relative;
  top: -1px;
  *top: -16px;
  float: right;
  width: 75%;
  text-align: left;
}
.hc_rtl .hc_m_po.hc_settings_po_cur li a span {
  float: left;
  text-align: right;
}
.hc_m_po.hc_settings_po_cur li.hc_selected a span {
  text-decoration: none;
  top: 0;
  *top: -16px;
}
.hc_m_po.hc_settings_po_cur li a:hover span {
  color: #669900;
}
.hc_m_po.hc_settings_po_lang li a {
  display: block;
  padding: 8px 0 8px 42px;
  line-height: 18px;
  text-decoration: underline;
}
.hc_rtl .hc_m_po.hc_settings_po_lang li a {
  padding-left: 0;
  padding-right: 42px;
}
.hc_m_po.hc_settings_po_lang li.hc_selected a {
  background: #f4f4f4;
  text-decoration: none;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_m_po.hc_settings_po_lang .hc_t_flag .hc_icon {
  display: inline-block;
  position: absolute;
  left: 10px;
  top: 10px;
  *top: 14px;
  width: 16px;
  height: 11px;
  background-image: url(https://cdn.datahc.com/Images/hc_flags.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38);
  background-repeat: no-repeat;
  border: 1px solid #ccc;
}
.hc_rtl .hc_m_po.hc_settings_po_lang .hc_t_flag .hc_icon {
  left: auto;
  right: 10px;
}
.hc_m_po.hc_settings_po_lang .hc_t_flag.hc_selected .hc_icon {
  border-color: #fff;
}
/* HC Language Recommendation popover */
.hc_m_po.hc_settings_po_langRec {
  display: none!important;
}
/* HC Footer */
.hc_r_ftWrap {
  display: block;
  background: #0084C1;
  min-height: 199px;
  height: auto!important;
  height: 199px;
  position: relative;
  z-index: 1;
  width: 100%;
}
#hc_r_ft {
  position: relative;
  display: block;
  min-width: 980px;
  width: auto!important;
  width: 980px;
  *width: 972px;
  max-width: 1210px;
  hack: 1 ; max-widt\h: 1190px;
  margin: 0 auto;
  padding: 20px 10px;
  font-size: 0.9em;
  text-align: left;
  background: #0084C1;
  color: #FFFFFF;
}
.hc_rtl #hc_r_ft {
  text-align: right;
}
#hc_r_ft a {
  color: #FFFFFF;
}
#hc_r_ft a:hover {
  color: #FFFFFF;
}
#hc_r_ft a:active {
  color: #FFFFFF;
}
#hc_r_ft a:visited {
  color: #FFFFFF;
}
/* HC International Sites */
/* site list */
.hc_sites {
  position: relative;
  margin: 0 0 0 0;
  padding: 0 0 10px;
}
.hc_rtl .hc_sites {
  direction: rtl;
  margin-right: 0;
  margin-left: 200px;
}
.hc_sites h2 {
  display: block;
  font-size: 1em;
  margin: 0 0 5px;
  padding: 0;
}
.hc_sites ul {
  display: block;
  margin: 0;
  padding: 0;
}
.hc_sites ul li {
  display: inline-block;
  float: left;
  color: #6E6E6E;
  list-style: none;
  margin: 0 20px 0 0;
  padding: 0 0 5px;
  position: relative;
  white-space: nowrap;
}
.hc_rtl .hc_sites ul li {
  float: right;
  margin-right: 0;
  margin-left: 15px;
}
.hc_rtl .hc_sites ul li.hc_sites_region1 {
  width: 125px;
}
.hc_rtl .hc_sites ul li.hc_sites_region2 {
  width: 390px;
}
.hc_rtl .hc_sites ul li.hc_sites_region3 {
  width: 100px;
}
.hc_rtl .hc_sites ul li.hc_sites_region4 {
  width: 225px;
}
.hc_sites ul li span {
  display: block;
}
.hc_sites ul li ul {
  padding: 5px 0 0;
  margin: 0;
}
.hc_sites ul li li {
  margin: 0;
  padding: 0;
}
.hc_rtl .hc_sites ul li li {
  margin: 0;
  padding: 0;
}
.hc_sites ul li li a {
  width: 16px;
  height: 11px;
  display: inline-block;
  float: left;
  margin: 0 3px 3px 0;
  background: url(https://cdn.datahc.com/Images/hc_flags_8bit.png?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) no-repeat 0 0;
  border: 2px solid #FFFFFF;
}
.hc_rtl .hc_sites ul li li a {
  margin-right: 0;
  margin-left: 3px;
  direction: ltr!important;
}
.hc_sites ul li li a:hover {
  border-color: #FFFFFF;
}
/* end HC International Sites */
/* Language names */
.hc_sites_names {
  position: relative;
  margin: 0;
  padding: 0 0 10px;
  font-size: 1.1em;
}
.hc_rtl .hc_sites_names {
  direction: rtl;
  margin-right: 0;
  margin-left: 200px;
  clear: both;
}
.hc_sites_names h2 {
  display: block;
  font-size: 0.9em;
  margin: 0 0 5px;
  padding: 0;
}
.hc_sites_names ul {
  display: block;
  margin: 0;
  padding: 0;
}
.hc_sites_names ul li {
  display: inline-block;
  float: left;
  color: #FFFFFF;
  list-style: none;
  margin: 0 0 5px;
  padding: 0 5px;
  line-height: 1.5em;
  position: relative;
  white-space: nowrap;
  border-left: 1px solid #CCCCCC;
}
.hc_rtl .hc_sites_names ul li {
  float: right;
}
.hc_sites_names ul li a {
  color: #FFFFFF;
}
.hc_sites_names ul li a:hover {
  color: #FFFFFF;
}
.hc_sites_names li.hc_li_first {
  padding: 0 5px 0 0;
  border: none;
}
.hc_rtl .hc_sites_names li.hc_li_first {
  padding: 0 0 0 5px;
  border-left: 1px solid #CCCCCC;
}
/* end language names */
/* HC Footer Nav */
#hc_r_ft ul.hc_footerNav {
  display: block;
  list-style: none;
  overflow: hidden;
  margin: 0;
  border-top: 1px solid #f4f4f4;
  padding: 15px 0 0;
}
#hc_r_ft ul.hc_footerNav li {
  float: left;
  font-size: 1.1em;
  padding: 0 10px 5px 0;
  margin: 0 0 5px;
  display: inline-block;
}
.hc_rtl #hc_r_ft ul.hc_footerNav li {
  float: right;
  padding-right: 0;
  padding-left: 10px;
}
#hc_r_ft ul.hc_footerNav a {
  white-space: nowrap;
}
#hc_r_ft .hc_copy {
  display: block;
  *display: inline-block;
  clear: left;
  padding: 10px 0;
  margin: 0;
}
.hc_rtl #hc_r_ft .hc_copy {
  clear: right;
  direction: rtl;
}
/* end HC Footer */
/* --- end HC Common - Header/Footer --- */
/* Region Layout version 2 */
.hc_r_layout_v2 #hc_r_content {
  position: relative;
  display: block;
  width: 992px;
  text-align: left;
}
.hc_rtl.hc_r_layout_v2 #hc_r_content {
  text-align: right;
}
.hc_r_layout_v2 #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_r_layout_v2 #hc_r_2 {
  position: relative;
  display: block;
  float: left;
  width: 275px;
  hack: 1 ; widt\h: 265px;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -992px;
}
.hc_rtl.hc_r_layout_v2 #hc_r_2 {
  margin-left: -275px;
  padding-left: 0;
  padding-right: 10px;
}
.hc_r_layout_v2 #hc_r_3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  *width: 992px;
}
.hc_r_layout_v2 #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0 0 0 285px;
  padding-right: 10px;
}
.hc_rtl.hc_r_layout_v2 #hc_r_3b {
  margin-right: 285px;
  margin-left: 0;
  padding-right: 0;
  padding-left: 10px;
}
.hc_r_layout_v2 #hc_r_4 {
  position: relative;
  display: none;
  float: right;
  padding-right: 10px;
  width: 210px;
  margin-left: -210px;
}
.hc_rtl.hc_r_layout_v2 #hc_r_4 {
  float: left;
  padding-right: 0;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -992px;
}
.hc_r_layout_v2 #hc_r_5 {
  position: relative;
  z-index: 1;
}
.hc_r_layout_v2 #hc_r_6 {
  position: relative;
  display: none;
  clear: left;
  padding: 0 10px;
}
.hc_rtl.hc_r_layout_v2 #hc_r_6 {
  clear: right;
}
.hc_page_hotel.hc_r_layout_v2 #hc_r_6 {
  display: block;
}
.hc_rtl.hc_page_hotel.hc_r_layout_v2 #hc_r_6 {
  clear: both;
}
/* HC Region version 2 - flexible width */
.hc_r_layout_v2_full #hc_r_content {
  position: relative;
  display: block;
  min-width: 980px;
  *width: auto;
  max-width: 1210px;
  text-align: left;
  *width: 992px;
}
.hc_rtl.hc_r_layout_v2_full #hc_r_content {
  text-align: right;
}
.hc_r_layout_v2_full #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
  min-height: 25px;
  height: auto!important;
  height: 25px;
}
.hc_b_simple .hc_r_layout_v2_full #hc_r_1 {
  min-height: 0;
  height: auto;
}
.hc_r_layout_v2_full #hc_r_2 {
  position: relative;
  display: block;
  float: left;
  width: 275px;
  hack: 1 ; widt\h: 265px;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -992px;
}
.hc_rtl.hc_r_layout_v2_full #hc_r_2 {
  margin-left: -275px;
  padding-left: 0;
  padding-right: 10px;
}
.hc_r_layout_v2_full #hc_r_3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  *width: 992px;
}
.hc_r_layout_v2_full #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0 0 0 285px;
  padding-right: 10px;
}
.hc_rtl.hc_r_layout_v2_full #hc_r_3b {
  margin-right: 285px;
  margin-left: 0;
  padding-right: 0;
  padding-left: 10px;
}
.hc_r_layout_v2_full #hc_r_4 {
  position: relative;
  display: none;
  float: right;
  padding-right: 10px;
  width: 220px;
  hack: 1 ; widt\h: 210px;
  margin-left: -220px;
}
.hc_rtl.hc_r_layout_v2_full #hc_r_4 {
  float: left;
  padding-right: 0;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -992px;
}
.hc_r_layout_v2_full #hc_r_5 {
  position: relative;
  z-index: 1;
}
.hc_r_layout_v2_full #hc_r_6 {
  position: relative;
  display: none;
  clear: left;
  padding: 0 10px;
}
.hc_rtl.hc_r_layout_v2_full #hc_r_6 {
  clear: right;
}
.hc_page_hotel.hc_r_layout_v2_full #hc_r_6 {
  display: block;
}
.hc_rtl.hc_page_hotel.hc_r_layout_v2_full #hc_r_6 {
  clear: both;
}
/* Region Layout version 3 */
.hc_r_layout_v3 #hc_r_content {
  position: relative;
  display: block;
  width: 1210px;
  text-align: left;
}
.hc_rtl.hc_r_layout_v3 #hc_r_content {
  text-align: right;
}
.hc_r_layout_v3 #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_rtl.hc_r_layout_v3 #hc_r_1 {
  display: block;
}
.hc_r_layout_v3 #hc_r_2 {
  position: absolute;
}
.hc_r_layout_v3 #hc_r_2 {
  position: relative;
  display: block;
  float: left;
  width: 275px;
  hack: 1 ; widt\h: 265px;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_rtl.hc_r_layout_v3 #hc_r_2 {
  margin-left: -275px;
  padding-left: 0;
  padding-right: 10px;
}
.hc_r_layout_v3 #hc_r_3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  *width: 1210px;
}
.hc_r_layout_v3 #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0 220px 0 285px;
  padding-right: 10px;
}
.hc_rtl.hc_r_layout_v3 #hc_r_3b {
  margin-right: 285px;
  margin-left: 220px;
  padding-right: 0;
  padding-left: 10px;
}
.hc_r_layout_v3 #hc_r_4 {
  position: relative;
  display: block;
  float: right;
  padding-right: 10px;
  width: 210px;
  margin-left: -210px;
}
.hc_rtl.hc_r_layout_v3 #hc_r_4 {
  float: left;
  padding-right: 0;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_r_layout_v3 #hc_r_5 {
  position: relative;
  z-index: 1;
}
.hc_r_layout_v3 #hc_r_6 {
  position: relative;
  display: none;
  clear: left;
  padding: 0 10px;
}
.hc_rtl.hc_r_layout_v3 #hc_r_6 {
  clear: right;
}
.hc_page_hotel.hc_r_layout_v3 #hc_r_6 {
  display: block;
}
.hc_rtl.hc_page_hotel.hc_r_layout_v3 #hc_r_6 {
  clear: both;
}
/* Region Layout version 3 full width */
.hc_r_layout_v3_full #hc_r_content {
  position: relative;
  display: block;
  *width: auto;
  width: 1210px;
  text-align: left;
}
.hc_rtl.hc_r_layout_v3_full #hc_r_content {
  text-align: right;
}
.hc_r_layout_v3_full #hc_r_1 {
  position: relative;
  display: block;
  padding: 5px 10px;
}
.hc_rtl.hc_r_layout_v3_full #hc_r_1 {
  display: block;
}
.hc_r_layout_v3_full #hc_r_2 {
  position: relative;
  display: block;
  float: left;
  width: 275px;
  hack: 1 ; widt\h: 265px;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_rtl.hc_r_layout_v3_full #hc_r_2 {
  margin-left: -275px;
  padding-left: 0;
  padding-right: 10px;
}
.hc_r_layout_v3_full #hc_r_3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  *width: 1210px;
}
.hc_r_layout_v3_full #hc_r_3b {
  position: relative;
  *display: inline-block;
  margin: 0 220px 0 285px;
  padding-right: 10px;
}
.hc_rtl.hc_r_layout_v3_full #hc_r_3b {
  margin-right: 285px;
  margin-left: 220px;
  padding-right: 0;
  padding-left: 10px;
}
.hc_r_layout_v3_full #hc_r_4 {
  position: relative;
  display: block;
  float: right;
  padding-right: 10px;
  width: 220px;
  hack: 1 ; widt\h: 210px;
  margin-left: -220px;
}
.hc_rtl.hc_r_layout_v3_full #hc_r_4 {
  float: left;
  padding-right: 0;
  padding-left: 10px;
  margin-left: -100%;
  *margin-left: -1210px;
}
.hc_r_layout_v3_full #hc_r_5 {
  position: relative;
  z-index: 1;
}
.hc_r_layout_v3_full #hc_r_6 {
  position: relative;
  display: none;
  clear: left;
  padding: 0 10px;
}
.hc_rtl.hc_r_layout_v3_full #hc_r_6 {
  clear: right;
}
.hc_page_hotel.hc_r_layout_v3_full #hc_r_6 {
  display: block;
}
.hc_rtl.hc_page_hotel.hc_r_layout_v3_full #hc_r_6 {
  clear: both;
}
/* item layout version 2 - viewed hotels side panel */
.hc_i_layout_v2 dd.hc_i_rating {
  display: block;
}
.hc_i_layout_v2 .hc_i {
  background: url(https://cdn.datahc.com/Images/hc_bg_divider.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) repeat-x left bottom;
  padding-bottom: 10px;
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  min-height: 105px;
  height: auto!important;
  height: 105px;
}
.hc_i_layout_v2 .hc_i h3 {
  font-size: 1em;
  padding: 0 20px 7px 110px;
}
.hc_rtl .hc_i_layout_v2 .hc_i h3 {
  padding-right: 110px;
  padding-left: 20px;
}
.hc_i_layout_v2 .hc_i a.hc_i_photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 90px;
}
.hc_rtl .hc_i_layout_v2 .hc_i a.hc_i_photo {
  left: auto;
  right: 0;
}
.hc_i_layout_v2 .hc_i a.hc_i_photo img {
  clip: rect(0 88px 88px 0);
}
.hc_i_layout_v2 .hc_i a.hc_i_photo.hc_noImg img {
  clip: rect(0 222px 88px 134px);
  left: -133px;
}
.hc_i_layout_v2 .hc_i .hc_i_remove {
  position: absolute;
  top: 2px;
  right: 0;
}
.hc_rtl .hc_i_layout_v2 .hc_i .hc_i_remove {
  right: auto;
  left: 0;
}
.hc_i_layout_v2 .hc_i dl {
  padding: 0 0 0 110px;
}
.hc_rtl .hc_i_layout_v2 .hc_i dl {
  padding-left: 0;
  padding-right: 110px;
}
.hc_i_layout_v2 .hc_i dd.hc_i_rating {
  white-space: nowrap;
  padding: 2px 10px 0 0;
}
.hc_rtl .hc_i_layout_v2 .hc_i dd.hc_i_rating {
  padding-right: 0;
  padding-left: 10px;
}
.hc_i_layout_v2 .hc_i dd.hc_i_addr {
  padding: 0 0 5px;
}
.hc_i_layout_v2 .hc_i dd.hc_i_booking {
  display: block;
  padding: 5px 10px 5px 0;
}
.hc_rtl .hc_i_layout_v2 .hc_i dd.hc_i_booking {
  padding-right: 0;
  padding-left: 10px;
  text-align: right;
}
.hc_i_layout_v2 .hc_i dd.hc_i_booking span {
  display: block;
}
.hc_i_layout_v2 .hc_i dd.hc_i_photos {
  padding-top: 5px;
  *position: relative;
}
/* HC Viewed Hotels */
.hc_rtl .hc_i_layout_v2 {
  direction: rtl;
}
.hc_i_layout_v2 a.hc_f_btn_showAll,
.hc_i_layout_v2 a.hc_f_btn_deleteAll {
  display: block;
  float: right;
  font-size: 0.9em;
  padding: 0;
  margin: 0;
}
.hc_rtl .hc_i_layout_v2 a.hc_f_btn_showAll,
.hc_rtl .hc_i_layout_v2 a.hc_f_btn_deleteAll {
  float: left;
}
.hc_i_layout_v2 a.hc_f_btn_showAll {
  background: url(https://cdn.datahc.com/Images/hc_bg_divider.gif?1.0.2020.303002-C38138af86f3b129a8c0e0912550347e20ab38e38) repeat-y left 0;
  margin-left: 6px;
  padding-left: 7px;
}
.hc_rtl .hc_i_layout_v2 a.hc_f_btn_showAll {
  background-position: right 0;
  padding-left: 0;
  padding-right: 7px;
  margin-left: 0;
  margin-right: 6px;
}
/* end HC Viewed Hotels */
/* hc_checkPrices */
#hc_checkPrices .hc_m_content {
  padding-top: 15px;
}
#hc_checkPrices .hc_f_noDates input[type='checkbox'] {
  top: -1px;
}
#hc_checkPrices .hc_f_roomConfig {
  margin-bottom: 20px;
  border: none;
  background: none;
  margin-top: -5px;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_adults,
#hc_checkPrices .hc_f_roomConfig .hc_f_children,
#hc_checkPrices .hc_f_roomConfig .hc_f_ages {
  display: none;
}
.hc_rtl #hc_checkPrices .hc_f_roomConfig .hc_f_adults,
.hc_rtl #hc_checkPrices .hc_f_roomConfig .hc_f_children,
.hc_rtl #hc_checkPrices .hc_f_roomConfig .hc_f_ages {
  float: right;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_adults,
#hc_checkPrices .hc_f_roomConfig .hc_f_children {
  float: left;
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_roomDesc {
  display: block;
  margin-top: 2.5em;
  padding: 7px 10px 0;
  font-size: 0.95em;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_roomDesc a {
  display: block;
  padding: 5px 0;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_adults {
  padding: 0 10px 5px;
  margin: 2.5em 0 0;
}
#hc_checkPrices .hc_f_roomConfig label span {
  display: block;
}
.hc_lang_nl #hc_checkPrices .hc_f_roomConfig .hc_f_adults label,
.hc_lang_de #hc_checkPrices .hc_f_roomConfig .hc_f_adults label {
  margin-left: 0;
}
.hc_rtl .hc_lang_nl #hc_checkPrices .hc_f_roomConfig .hc_f_adults label,
.hc_rtl .hc_lang_de #hc_checkPrices .hc_f_roomConfig .hc_f_adults label {
  margin-right: 0;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_children {
  padding: 0 0 5px;
  margin: 2.5em 0 0;
  border: none;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_ages {
  clear: left;
  *clear: none;
  *width: 194px;
  float: none;
  padding: 0 10px 5px;
  margin: 0;
  border: none;
}
.hc_rtl #hc_checkPrices .hc_f_roomConfig .hc_f_ages {
  clear: right;
  *clear: none;
  float: none;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_adults select,
#hc_checkPrices .hc_f_roomConfig .hc_f_children select,
#hc_checkPrices .hc_f_roomConfig .hc_f_ages span {
  margin-top: 5px;
}
#hc_checkPrices .hc_f_roomConfig fieldset {
  padding-top: 0;
  padding-bottom: 5px;
  margin: 0 0 10px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #fff;
  background: #f6f6f6;
}
#hc_checkPrices .hc_f_roomConfig fieldset:hover {
  border-color: #CCCCCC;
}
#hc_checkPrices .hc_f_roomConfig legend {
  position: absolute;
  top: 0;
  left: 0;
  *left: -8px;
  bottom: auto;
  font-size: 0.95em;
  font-weight: bold;
  padding: 7px 0 6px;
  *padding: 7px 2px 6px 0;
  margin: 0;
  width: 100%;
  text-indent: 10px;
  background: #eee;
  border-bottom: 1px solid #fff;
}
.hc_rtl #hc_checkPrices .hc_f_roomConfig legend {
  left: auto;
  right: 0;
  *right: -9px;
}
#hc_checkPrices .hc_f_roomConfig fieldset.hc_f_roomConfig_1 legend {
  padding-top: 7px;
}
#hc_checkPrices .hc_f_roomConfig label {
  display: block;
  width: auto;
  font-weight: normal;
  font-size: 0.95em;
  padding-top: 5px;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_ages label {
  padding-top: 0;
  display: block!important;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_remove {
  bottom: auto;
  top: 7px;
  padding: 0;
  margin: 0;
  font-size: 0.9em;
}
.hc_lang_el #hc_checkPrices .hc_f_roomConfig .hc_f_remove,
.hc_lang_tr #hc_checkPrices .hc_f_roomConfig .hc_f_remove {
  top: 2px;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_submit {
  text-align: left;
  margin: 0;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.hc_rtl #hc_checkPrices .hc_f_roomConfig .hc_f_submit {
  text-align: right;
}
#hc_checkPrices .hc_f_roomConfig .hc_f_btn_add {
  font-size: 0.9em;
}
#hc_checkPrices .hc_f_submit {
  text-align: center;
}
#hc_checkPrices .hc_f_submit.hc_active {
  /* todo: setup active button text colour */
}
#hc_checkPrices p.hc_f_error {
  margin-bottom: 10px;
}
/* start: search box rooms drop down */
.hc-roomsselectmenu {
  display: block;
  padding-bottom: 15px;
}
.hc-roomsselectmenu label {
  font-size: 1em;
}
.hc-roomsselectmenu__button {
  display: block;
  width: 100%!important;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #CCCCCC;
  font-weight: normal;
  color: #333333;
  background: #fff;
  margin-top: 5px;
  cursor: pointer;
  font-size: 1em;
  height: 24px;
  line-height: 24px;
}
.hc-roomsselectmenu__buttonicon {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #000;
  text-align: center;
  width: 30px;
  height: 24px;
  line-height: 24px;
  font-size: 15px;
}
.hc_rtl .hc-roomsselectmenu__buttonicon {
  right: auto;
  left: 0;
}
.hc-roomsselectmenu__buttonicon:before {
  display: inline-block;
  content: "\e920";
  font-family: icons;
}
.hc-roomsselectmenu__buttontext {
  text-align: left;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 24px;
  line-height: 24px;
  padding: 0 30px;
}
.hc_rtl .hc-roomsselectmenu__buttontext {
  text-align: right;
}
.hc-roomsselectmenu .hc-travellertypeicon {
  width: 30px;
  height: 24px;
  line-height: 22px;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
}
.hc_rtl .hc-roomsselectmenu .hc-travellertypeicon {
  left: auto;
  right: 0;
}
.hc-roomsselectmenu .hc-travellertypeicon--family:before {
  font-size: 18px;
}
.hc-roomsselectoptions {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  z-index: 500;
}
.hc_rtl .hc-roomsselectoptions {
  direction: rtl;
}
.hc-roomsselectoptions.ui-selectmenu-open {
  display: block;
}
.hc-roomsselectoptions__menu {
  background: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  outline: none;
  color: #333333;
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  margin-top: 5px;
}
.hc-roomsselectoptions__menu .ui-menu-item {
  position: relative;
  margin: 0;
  padding: 0;
  cursor: pointer;
  height: 24px;
  line-height: 24px;
}
.hc-roomsselectoptions__menu .ui-state-focus {
  background: #f4f4f4;
}
.hc-roomsselectoptions__menu .ui-state-focus:first-child {
  -moz-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
  border-radius: 2px 2px 0 0;
}
.hc-roomsselectoptions__menu .ui-state-focus:last-child {
  -moz-border-radius: 0 0 2px 2px;
  -webkit-border-radius: 0 0 2px 2px;
  border-radius: 0 0 2px 2px;
}
.hc-roomsselectoptions__menuitem {
  text-align: left;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 24px;
  line-height: 24px;
  padding: 0 0 0 30px;
  font-size: 1em;
}
.hc_rtl .hc-roomsselectoptions__menuitem {
  padding-left: 0;
  padding-right: 30px;
  text-align: right;
}
.hc-roomsselectoptions .hc-travellertypeicon {
  width: 30px;
  height: 24px;
  line-height: 22px;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.hc_rtl .hc-roomsselectoptions .hc-travellertypeicon {
  left: auto;
  right: 0;
}
.hc-roomsselectoptions .hc-travellertypeicon--family:before,
.hc-roomsselectoptions .hc-travellertypeicon--group:before {
  font-size: 18px;
}
.hc-travellertypeicon {
  text-align: center;
  color: #669900;
}
.hc-travellertypeicon:before {
  display: inline-block;
  font-family: icons;
}
.hc-travellertypeicon--adult:before {
  content: "\e605";
}
.hc-travellertypeicon--adults:before {
  content: "\e609";
}
.hc-travellertypeicon--family:before {
  content: "\e942";
}
.hc-travellertypeicon--group:before {
  content: "\e60b";
}
/* end: search box rooms drop down */
